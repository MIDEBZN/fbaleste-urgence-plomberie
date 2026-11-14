// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Maps a site URL to its source file on disk to determine truthful lastmod dates.
 * @param {string} urlStr
 * @returns {string | null}
 */
function getFileForUrl(urlStr) {
  try {
    const url = new URL(urlStr);
    let p = url.pathname;
    if (p.endsWith('/')) p = p.slice(0, -1);
    if (!p) return path.resolve('src/pages/index.astro');
    
    if (p.startsWith('/blog/')) {
      const slug = p.replace('/blog/', '');
      const md = path.resolve('src/pages/blog', slug + '.md');
      if (fs.existsSync(md)) return md;
    }
    if (p.startsWith('/zones/')) {
      return path.resolve('src/pages/zones/[commune].astro');
    }
    const directAstro = path.resolve('src/pages', p.slice(1) + '.astro');
    if (fs.existsSync(directAstro)) return directAstro;
    const indexAstro = path.resolve('src/pages', p.slice(1), 'index.astro');
    if (fs.existsSync(indexAstro)) return indexAstro;
  } catch {
    // fallback
  }
  return null;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.urgenceplomberie.be',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        delete item.changefreq;
        delete item.priority;
        const filePath = getFileForUrl(item.url);
        if (filePath && fs.existsSync(filePath)) {
          const stat = fs.statSync(filePath);
          item.lastmod = stat.mtime.toISOString();
        }
        return item;
      }
    })
  ]
});
