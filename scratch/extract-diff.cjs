const fs = require('fs');
const path = require('path');
const distDir = path.resolve('dist');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file === 'index.html') {
      results.push(fullPath);
    }
  });
  return results;
}

const before = JSON.parse(fs.readFileSync('baseline-pages-audit.json', 'utf8'));
const files = getHtmlFiles(distDir);
const report = [];

for (const file of files) {
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  const urlPath = '/' + rel.replace(/index\.html$/, '');
  const content = fs.readFileSync(file, 'utf8');
  
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let h1 = '';
  if (h1Match) {
    h1 = h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
  
  const canMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const can = canMatch ? canMatch[1].trim() : '';

  // Extract schemas
  const schemaMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  const schemaTypes = [];
  for (const sm of schemaMatches) {
    const inner = sm.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(inner);
      const getTypes = (obj) => {
        if (!obj) return;
        if (obj['@type']) schemaTypes.push(obj['@type']);
        if (obj['@graph']) obj['@graph'].forEach(getTypes);
      };
      getTypes(parsed);
    } catch (e) {}
  }
  
  const b = before.find(x => x.url === urlPath || x.url === ('https://www.urgenceplomberie.be' + urlPath)) || {};
  
  report.push({
    path: urlPath,
    before: {
      title: b.title || '(nouvelle page)',
      h1: b.h1 || '(nouvelle page)',
      desc: b.description || '(nouvelle page)',
      can: b.canonical || '(nouvelle page)',
      schemas: b.schemas ? b.schemas.flat().join(', ') : 'aucun'
    },
    after: {
      title,
      h1,
      desc,
      can,
      schemas: schemaTypes.length ? schemaTypes.join(', ') : 'aucun'
    }
  });
}

fs.writeFileSync('full-before-after-metadata.json', JSON.stringify(report, null, 2));
console.log('Saved full-before-after-metadata.json with ' + report.length + ' entries');
