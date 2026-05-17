import './globals.css';
import Script from 'next/script';
import Topbar from './Topbar';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NEWS } from './aktualnosci/news';
import { toWebpSrc } from '../../lib/image';

const siteUrl = 'https://stajniadecyma.pl';
const siteDescription =
  'Stajnia Decyma w Darnawie (lubuskie): nauka jazdy konnej, tereny i półkolonie. Blisko Sulechowa i Świebodzina.';
const faviconPath = '/favicon.ico';
const icon32Path = '/favicon-32x32.png';
const icon16Path = '/favicon-16x16.png';
const appleIconPath = '/apple-touch-icon.png';
const shareImagePath = '/android-chrome-512x512.png';
const shareImageUrl = `${siteUrl}${shareImagePath}`;
const siteKeywords =
  'stajnia decyma, stajnia decyma Sulechów, stajnia decyma Darnawa, jazda konna, nauka jazdy konnej, kurs jazdy konnej, szkółka jeździecka, instruktor jazdy konnej, Sulechów, Świebodzin, Darnawa, Lubuskie, jazdy konne, przejażdżki konne, rajdy konne, karnety, półkolonie jeździeckie, obozy jeździeckie, zajęcia jeździeckie dla dzieci, imprezy okolicznościowe, przejażdżki w terenie, konie, jazdy, nauka jazdy, nauka jazdy konnej, nauka jazdy konnej dla dzieci, nauka jazdy konnej dla dorosłych, szkółka jeździecka dla dzieci, szkółka jeździecka dla dorosłych, instruktor jazdy konnej Sulechów, instruktor jazdy konnej Świebodzin, instruktor jazdy konnej Darnawa, atrakcje Sulechów, atrakcje Świebodzin, Sulechów, Świebodzin, Darnawa, Lubuskie, jazda konna Sulechów, jazda konna Świebodzin, jazda konna Darnawa, nauka jazdy konnej Sulechów, nauka jazdy konnej Świebodzin, nauka jazdy konnej Darnawa, szkółka jeździecka Sulechów, szkółka jeździecka Świebodzin, szkółka jeździecka Darnawa';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Stajnia Decyma | Darnawa, lubuskie',
  description: siteDescription,
  keywords: siteKeywords,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: faviconPath, sizes: '32x32' },
      { url: icon32Path, type: 'image/png', sizes: '32x32' },
      { url: icon16Path, type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: appleIconPath, sizes: '180x180' }],
    shortcut: faviconPath,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    title: 'Stajnia Decyma',
    description: siteDescription,
    images: [{ url: shareImagePath }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stajnia Decyma',
    description: siteDescription,
    images: [shareImagePath],
  },
  other: {
    'geo.region': 'PL-08',
    'geo.placename': 'Darnawa',
  },
};

function buildJsonLd() {
  const latest = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))[0];

  const siteJson: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Stajnia Decyma',
    url: 'https://stajniadecyma.pl/',
    description: siteDescription,
    image: shareImageUrl,
    sameAs: [],
  };

  if (latest) {
    siteJson.hasPart = {
      '@type': 'BlogPosting',
      headline: latest.title,
      datePublished: latest.date,
      image: `https://stajniadecyma.pl${toWebpSrc(latest.image)}`,
      url: `https://stajniadecyma.pl/aktualnosci/${latest.id}`,
    };
  }

  return JSON.stringify(siteJson);
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="pl">
      <body className="footer-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Stajnia Decyma',
              image: shareImageUrl,
              '@id': siteUrl,
              url: siteUrl,
              telephone: '+48 572 069 752',
              email: 'stajniadecyma@icloud.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Darnawa 28',
                addressLocality: 'Darnawa',
                postalCode: '66-213',
                addressRegion: 'lubuskie',
                addressCountry: 'PL',
              },
              areaServed: ['Sulechów', 'Świebodzin', 'Lubuskie'],
              sameAs: ['https://www.facebook.com/profile.php?id=100093287093369'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Stajnia Decyma',
              url: `${siteUrl}/`,
            }),
          }}
        />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <Topbar />
        <main>{children}</main>
        <footer className="footer-cta">
          <div className="wrap center">
            <a href="/kontakt" className="btn-primary">
              Skontaktuj się z nami
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
