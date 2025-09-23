import './globals.css';
import Link from 'next/link';
import Topbar from './Topbar';
import type { ReactNode } from 'react';
import { NEWS } from './aktualnosci/news';

const siteDescription =
  'Stajnia Decyma - jazda konna, szkółka jeździecka w woj. lubuskim (Świebodzin / Sulechów). Nauka jazdy konnej, karnety, półkolonie i imprezy okolicznościowe.';

export const metadata = {
  title: 'Stajnia Decyma',
  description: siteDescription,
  robots: 'index, follow',
  icons: { icon: '/favicon.ico' },
  // alternates.canonical removed to allow per-page canonical URLs
  keywords:
  'stajnia decyma, stajnia decyma Sulechów, stajnia decyma Darnawa, jazda konna, nauka jazdy konnej, kurs jazdy konnej, szkółka jeździecka, instruktor jazdy konnej, Sulechów, Świebodzin, Darnawa, Lubuskie, jazdy konne, przejażdżki konne, rajdy konne, karnety, półkolonie jeździeckie, obozy jeździeckie, zajęcia jeździeckie dla dzieci, imprezy okolicznościowe, przejażdżki w terenie, konie, jazdy, nauka jazdy, nauka jazdy konnej, nauka jazdy konnej dla dzieci, nauka jazdy konnej dla dorosłych, szkółka jeździecka dla dzieci, szkółka jeździecka dla dorosłych, instruktor jazdy konnej Sulechów, instruktor jazdy konnej Świebodzin, instruktor jazdy konnej Darnawa, atrakcje Sulechów, atrakcje Świebodzin, Sulechów, Świebodzin, Darnawa, Lubuskie, jazda konna Sulechów, jazda konna Świebodzin, jazda konna Darnawa, nauka jazdy konnej Sulechów, nauka jazdy konnej Świebodzin, nauka jazdy konnej Darnawa, szkółka jeździecka Sulechów, szkółka jeździecka Świebodzin, szkółka jeździecka Darnawa',
};

function buildJsonLd() {
  const latest = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))[0];

  const siteJson: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Stajnia Decyma',
    url: 'https://stajniadecyma.pl/',
    description: siteDescription,
    image: 'https://stajniadecyma.pl/logo.png',
    sameAs: [],
  };

  if (latest) {
    siteJson.hasPart = {
      '@type': 'BlogPosting',
      headline: latest.title,
      datePublished: latest.date,
      image: `https://stajniadecyma.pl${latest.image}`,
      url: 'https://stajniadecyma.pl/aktualnosci',
    };
  }

  return JSON.stringify(siteJson);
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // Google Analytics: set NEXT_PUBLIC_GA_ID in env to enable (e.g. G-XXXXXXXXXX)
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="pl">
      <head>
        <title>Stajnia Decyma</title>
  <meta name="description" content={siteDescription} />
        <meta name="keywords" content={metadata.keywords} />
    {/* Note: canonical and robots are set per-page via route metadata to avoid forcing
      every page to canonicalize to the homepage. Do not add global canonical/robots here. */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:title" content="Stajnia Decyma" />
        <meta property="og:description" content={siteDescription} />
  <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stajniadecyma.pl/" />
        <meta property="og:image" content="/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Stajnia Decyma" />
  <meta name="twitter:description" content={siteDescription} />
  <link rel="alternate" href="https://stajniadecyma.pl/" hrefLang="pl" />
  <meta name="geo.region" content="PL-08" />
  <meta name="geo.placename" content="Darnawa" />
        <meta itemProp="image" content="/logo.png" />
        <meta name="twitter:image" content="/logo.png" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
        />

        {/* LocalBusiness JSON-LD for local SEO (static) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Stajnia Decyma',
              image: 'https://stajniadecyma.pl/logo.png',
              '@id': 'https://stajniadecyma.pl',
              url: 'https://stajniadecyma.pl',
              telephone: '+48 795 759 410',
              email: 'stajniadecyma@icloud.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Darnawa 28',
                addressLocality: 'Darnawa',
                postalCode: '66-235',
                addressRegion: 'lubuskie',
                addressCountry: 'PL',
              },
              areaServed: ['Sulechów', 'Świebodzin', 'Lubuskie'],
              sameAs: ['https://www.facebook.com/profile.php?id=100093287093369'],
            }),
          }}
        />

        {/* Website JSON-LD (basic) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Stajnia Decyma',
              url: 'https://stajniadecyma.pl/',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://stajniadecyma.pl/?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Google Analytics (optional). Provide NEXT_PUBLIC_GA_ID in env to enable. */}
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
              }}
            />
          </>
        ) : null}
      </head>
      <body className="footer-bg">
        <Topbar />
        <main>{children}</main>
        <footer className="footer-cta">
          <div className="wrap center">
            <Link href="/kontakt" className="btn-primary">
              Skontaktuj się z nami
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

