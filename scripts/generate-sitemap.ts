import fs from 'fs';
import path from 'path';

// Read news.ts as text and extract the exported NEWS array by simple eval in isolated scope.
const newsFile = path.join(process.cwd(), 'src', 'app', 'aktualnosci', 'news.ts');
const newsRaw = fs.readFileSync(newsFile, 'utf8');
// Robust extraction: find 'export const NEWS' and extract the bracketed array by counting brackets
// Safer parse: extract each news object fields via regex (id, date, image, title)
let NEWS: { id: number; date: string; image: string; title: string }[] = [];
try {
  const objRegex = /\{[\s\S]*?id\s*:\s*(\d+)[\s\S]*?title\s*:\s*([`"'])([\s\S]*?)\2[\s\S]*?date\s*:\s*([`"'])([\d\-T:\s]+?)\4[\s\S]*?image\s*:\s*([`"'])([\s\S]*?)\6[\s\S]*?\}/g;
  let m;
  while ((m = objRegex.exec(newsRaw)) !== null) {
    const id = Number(m[1]);
    const title = m[3].trim();
    const date = m[5].trim();
    const image = m[7].trim();
    if (!Number.isNaN(id) && date) {
      NEWS.push({ id, date, image, title });
    }
  }
} catch (err) {
  console.warn('Parser error for news.ts, sitemap will contain only static pages:', String(err));
}

console.log('DEBUG: parsed NEWS count =', NEWS.length);
if (NEWS.length > 0) console.log('DEBUG: first news sample =', NEWS[0]);

const publicPath = path.resolve(process.cwd(), 'public');
const sitemapPath = path.join(publicPath, 'sitemap.xml');

function build() {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const footer = `</urlset>\n`;

  const pages = [
    { loc: 'https://stajniadecyma.pl/', changefreq: 'daily', priority: '1.0' },
    { loc: 'https://stajniadecyma.pl/onas', changefreq: 'monthly', priority: '0.8' },
    { loc: 'https://stajniadecyma.pl/aktualnosci', changefreq: 'daily', priority: '0.9' },
    { loc: 'https://stajniadecyma.pl/oferta', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://stajniadecyma.pl/konie', changefreq: 'monthly', priority: '0.7' },
    { loc: 'https://stajniadecyma.pl/regulamin', changefreq: 'yearly', priority: '0.5' },
    { loc: 'https://stajniadecyma.pl/kontakt', changefreq: 'monthly', priority: '0.6' },
  ];

  let body = pages.map((p) => `  <url>\n    <loc>${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`).join('');

  const news = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 20);
  for (const n of news) {
    const url = `https://stajniadecyma.pl/aktualnosci/${n.id}`;
  // ignore urls containing hash fragments just in case some source supplies them
  if (url.includes('#')) continue;
  body += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n    <lastmod>${n.date}</lastmod>\n  </url>\n`;
  }

  fs.writeFileSync(sitemapPath, header + body + footer, 'utf8');
  console.log('Wygenerowano', sitemapPath);
}

build();
