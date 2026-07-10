# Full Audit Report

- URL: `https://www.urgenceplomberie.be`
- Generated: `2026-07-10T21:40:16.411467`
- Overall score: `64/100`
- Score confidence: `Medium`
- Scoring version: `1`

## Score Card

| Category | Weight | Score |
| --- | ---: | ---: |
| Security Headers | 8 | 45 |
| Social Meta | 5 | 0 |
| Robots and Crawlers | 8 | 80 |
| Broken Links | 10 | 84 |
| Internal Links | 8 | 60 |
| Redirects | 3 | 100 |
| AI Search | 5 | 45 |
| Performance and Core Web Vitals | 13 | 0 |
| On-Page SEO | 10 | 100 |
| Readability | 8 | 91 |
| Entity SEO | 5 | 0 |
| Link Profile | 7 | 85 |
| Hreflang | 5 | 85 |
| Content Uniqueness | 5 | 0 |

## Findings

| Severity | Area | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- |
| Critical | Schema | No Organization/Person entity found in JSON-LD. |  | Add Organization or Person schema with name, url, logo, and sameAs properties. |
| Critical | broken_links | 🔴 1 broken link(s) found |  |  |
| Critical | environment | 5 security headers missing | Missing headers reduce trust and can expose the site to browser/security risks. | Set missing security headers at web server or CDN layer. |
| Critical | security | 🔴 5 security headers missing — poor security posture |  |  |
| Critical | social | 🔴 Missing required: og:title |  |  |
| Critical | social | 🔴 Missing required: og:description |  |  |
| Critical | social | 🔴 Missing required: og:image |  |  |
| Critical | social | 🔴 Missing required: og:url |  |  |
| Critical | social | 🔴 Missing required: og:type |  |  |
| Warning | environment | Title tag needs optimization | Title length/content is likely suboptimal for rankings and click-through. | Update page templates to set complete title/meta/OG/Twitter tags. |
| Warning | environment | 1 broken links detected | Broken internal links hurt crawl flow and user trust. | Repair or remove broken internal links and refresh outdated navigation targets. |
| Warning | environment | Social meta tags are incomplete | Missing OG/Twitter tags weakens social previews and share quality. | Update page templates to set complete title/meta/OG/Twitter tags. |
| Warning | internal_links | ⚠️ 43 potential orphan page(s) (≤1 internal link pointing to them) |  |  |
| Warning | internal_links | ⚠️ 13 link(s) have no anchor text |  |  |
| Warning | readability | ⚠️ 20.4% complex words (3+ syllables) — consider simplifying |  |  |
| Warning | robots | ⚠️ 11 AI crawlers not explicitly managed: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended |  |  |
| Warning | security | ⚠️ HSTS missing includeSubDomains directive |  |  |
| Warning | social | ⚠️ Missing: twitter:card |  |  |
| Info | Wikidata | No Wikidata entry found for 'Plombier Urgence Bruxelles'. |  | If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO. |
| Info | Wikipedia | No Wikipedia article found for 'Plombier Urgence Bruxelles'. |  | Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals. |
| info | duplicate_content | duplicate_content measurement incomplete | Script timed out after 120s | Rerun this check after resolving the environment/API/network limitation. |
| Info | environment | Performance measurement incomplete | PageSpeed API returned an error, so CWV recommendations are less reliable. | Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output. |
| info | pagespeed | pagespeed measurement incomplete | Rate limited by Google API. Wait a few minutes or add an API key. | Rerun this check after resolving the environment/API/network limitation. |
| Info | readability | ℹ️ Content readability is moderate (Flesch: 54.9) — suitable for educated audience |  |  |
| Info | sameAs | Missing sameAs link to Wikipedia (Primary KG signal). |  | Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to Wikidata (Primary KG signal). |  | Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to LinkedIn (Strong KG signal). |  | Add 'linkedin.com' profile URL to sameAs array in your entity schema. |
| Info | sameAs | Missing sameAs link to Twitter/X (Strong KG signal). |  | Add 'x.com' profile URL to sameAs array in your entity schema. |

## Measurement Notes

2 checks returned errors or incomplete measurements; treat affected scores as directional.
