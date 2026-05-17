const fs = require('fs');
const path = require('path');

const newsFile = path.join(process.cwd(), 'src', 'app', 'aktualnosci', 'news.ts');
const newsRaw = fs.readFileSync(newsFile, 'utf8');

const slugCharMap = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => slugCharMap[char] || char)
    .replace(/&/g, ' i ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

let NEWS = [];
try {
  const objRegex = /\{[\s\S]*?id\s*:\s*(\d+)[\s\S]*?title\s*:\s*([`"'])([\s\S]*?)\2[\s\S]*?date\s*:\s*([`"'])([\d\-T:\s]+?)\4[\s\S]*?image\s*:\s*([`"'])([\s\S]*?)\6[\s\S]*?\}/g;
  let m;
  while ((m = objRegex.exec(newsRaw)) !== null) {
    const id = Number(m[1]);
    const title = m[3].trim();
    const date = m[5].trim();
    const image = m[7].trim();
    if (!Number.isNaN(id) && date) {
      NEWS.push({ id, date, image, title, slug: `${slugify(title)}-${id}` });
    }
  }
} catch (err) {
  console.warn('Parser error for news.ts, sitemap will contain only static pages:', String(err));
}

console.log('DEBUG: parsed NEWS count =', NEWS.length);

const publicPath = path.resolve(process.cwd(), 'public');
const sitemapPath = path.join(publicPath, 'sitemap.xml');
const offerServices = [
  'nauka-jazdy-konnej',
  'jazda-konna-dla-dzieci',
  'jazda-konna-dla-doroslych',
  'tereny-konne',
  'polkolonie-jezdzieckie',
  'vouchery-podarunkowe',
  'urodziny-w-stajni',
  'wycieczki-szkolne',
];

function build() {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const footer = '</urlset>\n';

  const pages = [
    { loc: 'https://stajniadecyma.pl/', changefreq: 'daily', priority: '1.0' },
    { loc: 'https://stajniadecyma.pl/onas', changefreq: 'monthly', priority: '0.8' },
    { loc: 'https://stajniadecyma.pl/aktualnosci', changefreq: 'daily', priority: '0.9' },
    { loc: 'https://stajniadecyma.pl/oferta', changefreq: 'weekly', priority: '0.8' },
    { loc: 'https://stajniadecyma.pl/konie', changefreq: 'monthly', priority: '0.7' },
    { loc: 'https://stajniadecyma.pl/regulamin', changefreq: 'yearly', priority: '0.5' },
    { loc: 'https://stajniadecyma.pl/kontakt', changefreq: 'monthly', priority: '0.6' },
  ];

  for (const slug of offerServices) {
    pages.push({
      loc: `https://stajniadecyma.pl/oferta/${slug}`,
      changefreq: 'weekly',
      priority: '0.7',
    });
  }

  let body = pages.map((p) => `  <url>\n    <loc>${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`).join('');

  const news = NEWS.slice().sort((a, b) => b.date.localeCompare(a.date));
  for (const n of news) {
    const url = `https://stajniadecyma.pl/aktualnosci/${n.slug}`;
    body += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n    <lastmod>${n.date}</lastmod>\n  </url>\n`;
  }

  fs.writeFileSync(sitemapPath, header + body + footer, 'utf8');
  console.log('Wygenerowano', sitemapPath);
}

build();
