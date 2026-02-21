/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import type { Metadata } from 'next';
import { NEWS } from '../news';

export function generateStaticParams() {
  return NEWS.map((n) => ({ id: String(n.id) }));
}

export function generateMetadata(props: any): Metadata {
  const params = props?.params as { id: string } | undefined;
  const id = params ? Number(params.id) : NaN;
  const post = NEWS.find((p) => p.id === id);
  if (!post) return {} as Metadata;
  const url = `https://stajniadecyma.pl/aktualnosci/${id}`;
  return {
    title: `${post.title} | Stajnia Decyma`,
    description: post.desc.slice(0, 160),
    alternates: { canonical: url },
    robots: 'index, follow',
    openGraph: {
      title: `${post.title} | Stajnia Decyma`,
      description: post.desc.slice(0, 160),
      url,
      images: [
        {
          url: `https://stajniadecyma.pl${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Stajnia Decyma`,
      description: post.desc.slice(0, 160),
      images: [`https://stajniadecyma.pl${post.image}`],
    },
  } as Metadata;
}

export default function NewsPostPage(props: any) {
  const params = props?.params as { id: string } | undefined;
  const id = params ? Number(params.id) : NaN;
  const post = NEWS.find((p) => p.id === id);
  if (!post) return notFound();

  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <h1>{post.title}</h1>
          <time className="news-date">{post.date}</time>
          <div style={{ margin: '1rem 0' }}>
            <Image
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
