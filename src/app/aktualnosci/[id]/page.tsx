import { notFound } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import type { Metadata } from 'next';
import { NEWS } from '../news';
import { toWebpSrc } from '../../../../lib/image';
import SmartImage from '../../../components/SmartImage';

type RouteParams = { id: string };
type PageProps = { params: Promise<RouteParams> };

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function seoDescriptionFromPost(value: string): string {
  const plain = stripHtml(value);
  const snippet = plain.slice(0, 120).trim();
  const ending = snippet.endsWith('.') ? '' : '.';
  return `${snippet}${ending} Stajnia Decyma, Darnawa (lubuskie).`;
}

export function generateStaticParams() {
  return NEWS.map((n) => ({ id: String(n.id) }));
}

async function resolveParams(props: PageProps): Promise<RouteParams> {
  return await props.params;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await resolveParams(props);
  const id = Number(params.id);
  const post = NEWS.find((p) => p.id === id);
  if (!post) return {};
  const url = `https://stajniadecyma.pl/aktualnosci/${id}`;
  return {
    title: `${post.title} | Aktualności Stajnia Decyma`,
    description: seoDescriptionFromPost(post.desc),
    alternates: { canonical: url },
    robots: 'index, follow',
    openGraph: {
      title: `${post.title} | Aktualności Stajnia Decyma`,
      description: seoDescriptionFromPost(post.desc),
      url,
      images: [
        {
          url: `https://stajniadecyma.pl${toWebpSrc(post.image)}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Aktualności Stajnia Decyma`,
      description: seoDescriptionFromPost(post.desc),
      images: [`https://stajniadecyma.pl${toWebpSrc(post.image)}`],
    },
  };
}

export default async function NewsPostPage(props: PageProps) {
  const params = await resolveParams(props);
  const id = Number(params.id);
  const post = NEWS.find((p) => p.id === id);
  if (!post) return notFound();
  const url = `https://stajniadecyma.pl/aktualnosci/${id}`;
  const imageUrl = `https://stajniadecyma.pl${toWebpSrc(post.image)}`;
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: seoDescriptionFromPost(post.desc),
    datePublished: post.date,
    dateModified: post.date,
    image: [imageUrl],
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'Stajnia Decyma',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stajnia Decyma',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stajniadecyma.pl/android-chrome-512x512.png',
      },
    },
  });

  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
          />
          <h1>{post.title}</h1>
          <time className="news-date">{post.date}</time>
          <div style={{ margin: '1rem 0' }}>
            <SmartImage
              src={post.image}
              alt={post.title}
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 800px"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.desc) }} />
        </div>
      </section>
    </div>
  );
}
