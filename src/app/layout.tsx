import './globals.css';
import Link from 'next/link';
import Topbar from './Topbar';
import type { ReactNode } from 'react';
import { NEWS } from './aktualnosci/news';

const siteDescription =
  'Stajnia Decyma - nauka jazdy konnej w woj. lubuskim (Sulechów, Świebodzin, Darnawa). Karnety, półkolonie, rajdy i imprezy okolicznościowe.';

export const metadata = {
  title: 'Stajnia Decyma',
  description: siteDescription,
  robots: 'index, follow',
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://stajniadecyma.pl/' },
  keywords:
    'stajnia decyma, jazda konna, szkółka jeździecka, Sulechów, Świebodzin, Lubuskie, Darnawa, karnety, półkolonie, rajdy konne',
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
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://stajniadecyma.pl/" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:title" content="Stajnia Decyma" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stajniadecyma.pl/" />
        <meta property="og:image" content="/logo.png" />
        <meta itemProp="image" content="/logo.png" />
        <meta name="twitter:image" content="/logo.png" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
        />

        {/* LocalBusiness JSON-LD for local SEO */}
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
              telephone: '+48795759410',
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

