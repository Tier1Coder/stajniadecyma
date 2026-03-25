import fs from 'fs';
import path from 'path';
import { NEWS } from '../src/app/aktualnosci/news';

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
    const url = `https://stajniadecyma.pl/aktualnosci/${n.slug}`;
  // ignore urls containing hash fragments just in case some source supplies them
  if (url.includes('#')) continue;
  body += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n    <lastmod>${n.date}</lastmod>\n  </url>\n`;
  }

  fs.writeFileSync(sitemapPath, header + body + footer, 'utf8');
  console.log('Wygenerowano', sitemapPath);
}

build();
