import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import type { Metadata } from 'next';
import {
  NEWS,
  getNewsCategoryLabel,
  getRelatedNews,
  resolveNewsRouteParam,
  type NewsCtaType,
} from '../news';
import { formatNewsDate, getSeoDescription } from '../utils';
import { toWebpSrc } from '../../../../lib/image';
import SmartImage from '../../../components/SmartImage';
import NewsCard from '../NewsCard';

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

const siteUrl = 'https://stajniadecyma.pl';

const ctaCopyByType: Record<NewsCtaType, string> = {
  offer: 'Masz pytania lub chcesz umówić termin? Skontaktuj się z nami.',
  booking: 'Masz pytania lub chcesz umówić termin? Skontaktuj się z nami.',
  contact: 'Masz pytania lub chcesz umówić termin? Skontaktuj się z nami.',
};

function buildArticleJsonLd(params: {
  title: string
  description: string
  date: string
  image: string
  url: string
  categoryLabel: string
}) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.title,
    description: params.description,
    datePublished: params.date,
    dateModified: params.date,
    articleSection: params.categoryLabel,
    image: [`${siteUrl}${toWebpSrc(params.image)}`],
    mainEntityOfPage: params.url,
    author: {
      '@type': 'Organization',
      name: 'Stajnia Decyma',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stajnia Decyma',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/apple-touch-icon.png`,
      },
    },
  });
}

function buildBreadcrumbJsonLd(params: { title: string; url: string }) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Aktualności',
        item: `${siteUrl}/aktualnosci/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: params.title,
        item: params.url,
      },
    ],
  });
}

export function generateStaticParams() {
  return NEWS.flatMap((post) => [
    { slug: post.slug },
    { slug: String(post.id) },
  ]);
}

async function resolveParams(props: PageProps): Promise<RouteParams> {
  return await props.params;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await resolveParams(props);
  const resolved = resolveNewsRouteParam(params.slug);
  const post = resolved.post;

  if (!post) {
    return {};
  }

  const canonicalUrl = `${siteUrl}/aktualnosci/${post.slug}`;
  const description = getSeoDescription(post.desc);

  if (resolved.legacyId || params.slug !== post.slug) {
    return {
      title: `${post.title} | Aktualności Stajnia Decyma`,
      description,
      alternates: { canonical: canonicalUrl },
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `${post.title} | Aktualności Stajnia Decyma`,
    description,
    alternates: { canonical: canonicalUrl },
    robots: 'index, follow',
    openGraph: {
      type: 'article',
      title: `${post.title} | Aktualności Stajnia Decyma`,
      description,
      url: canonicalUrl,
      publishedTime: post.date,
      section: getNewsCategoryLabel(post.category),
      images: [
        {
          url: `${siteUrl}${toWebpSrc(post.image)}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Aktualności Stajnia Decyma`,
      description,
      images: [`${siteUrl}${toWebpSrc(post.image)}`],
    },
  };
}

export default async function NewsPostPage(props: PageProps) {
  const params = await resolveParams(props);
  const resolved = resolveNewsRouteParam(params.slug);
  const post = resolved.post;

  if (!post) {
    return notFound();
  }

  if (resolved.legacyId || params.slug !== post.slug) {
    permanentRedirect(`/aktualnosci/${post.slug}`);
  }

  const description = getSeoDescription(post.desc);
  const categoryLabel = getNewsCategoryLabel(post.category);
  const canonicalUrl = `${siteUrl}/aktualnosci/${post.slug}`;
  const relatedPosts = getRelatedNews(post, 3);

  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: buildArticleJsonLd({
                title: post.title,
                description,
                date: post.date,
                image: post.image,
                url: canonicalUrl,
                categoryLabel,
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: buildBreadcrumbJsonLd({
                title: post.title,
                url: canonicalUrl,
              }),
            }}
          />
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Strona główna</Link>
              </li>
              <li>
                <Link href="/aktualnosci">Aktualności</Link>
              </li>
              <li aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <div className="news-post-meta">
            <span className="news-badge">{categoryLabel}</span>
            {post.featured ? <span className="news-badge news-badge--featured">Polecane</span> : null}
          </div>
          <Link href="/aktualnosci" className="news-back-link">
            Wróć do aktualności
          </Link>
          <h1>{post.title}</h1>
          <time className="news-date news-date--lead" dateTime={post.date}>
            Opublikowano {formatNewsDate(post.date)}
          </time>
          <div className="news-post-image">
            <SmartImage
              src={post.image}
              alt={post.title}
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 800px"
              priority
            />
          </div>
          <div
            className="news-post-content"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.desc) }}
          />
          <div className="news-post-cta">
            <p className="news-post-cta__text">{ctaCopyByType[post.ctaType]}</p>
            <div className="news-post-cta__actions">
              <a className="btn-primary" href="tel:+48572069752">
                Zadzwoń
              </a>
              <a className="btn-secondary" href="mailto:stajniadecyma@icloud.com">
                Napisz e-mail
              </a>
              <Link className="btn-secondary" href="/oferta">
                Zobacz ofertę
              </Link>
              <Link className="btn-secondary" href="/kontakt">
                Kontakt
              </Link>
            </div>
          </div>

          {relatedPosts.length ? (
            <section className="news-related-section">
              <div className="news-related-section__header">
                <h2>Podobne aktualności</h2>
                <Link href="/aktualnosci" className="news-related-section__link">
                  Zobacz wszystkie wpisy
                </Link>
              </div>
              <div className="news-grid news-grid--related">
                {relatedPosts.map((relatedPost) => (
                  <NewsCard
                    key={relatedPost.id}
                    post={relatedPost}
                    compact
                    showActions={false}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
}
