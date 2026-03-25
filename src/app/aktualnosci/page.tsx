import Link from 'next/link';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { NEWS, NEWS_PAGE_SIZE } from './news';
import NewsArchiveClient from './NewsArchiveClient';
import NewsCard from './NewsCard';
import { toWebpSrc } from '../../../lib/image';

const posts = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));
const latestPost = posts[0];
const pageTitle = 'Aktualności stajni | Stajnia Decyma Darnawa';
const pageDescription =
  'Najnowsze aktualności Stajni Decyma: wydarzenia, turnusy, rajdy i informacje o zajęciach w Darnawie koło Sulechowa i Świebodzina.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/aktualnosci' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/aktualnosci',
    type: 'website',
    images: [
      {
        url: latestPost ? toWebpSrc(latestPost.image) : '/android-chrome-512x512.png',
        alt: latestPost?.title || 'Stajnia Decyma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [latestPost ? toWebpSrc(latestPost.image) : '/android-chrome-512x512.png'],
  },
};

function NewsArchiveFallback() {
  return (
    <section id="archiwum" className="news-archive-section">
      <div className="news-archive-intro">
        <p>Domyślnie pokazujemy najnowsze wpisy. Filtry i sortowanie wczytają się po załadowaniu strony.</p>
      </div>
      <div className="news-grid">
        {posts.slice(0, NEWS_PAGE_SIZE).map((post, index) => (
          <NewsCard key={post.id} post={post} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}

export default function AktualnosciPage() {
  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <h1>Aktualności i wydarzenia w Stajni Decyma</h1>
          <p className="news-intro">
            Sprawdź najnowsze wydarzenia, turnusy, ogłoszenia i zapisy. Jeśli chcesz umówić jazdę
            albo zapytać o ofertę, przejdź od razu do kontaktu lub cennika.
          </p>
          <div className="news-page-actions">
            <Link href="/oferta" className="btn-primary">
              Zobacz ofertę
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Skontaktuj się
            </Link>
          </div>
          <Suspense fallback={<NewsArchiveFallback />}>
            <NewsArchiveClient posts={posts} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
