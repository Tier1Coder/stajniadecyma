import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import Link from 'next/link';
import { NEWS } from './news';

export const metadata = {
  title: 'Aktualności | Stajnia Decyma',
  description: 'Aktualności ze Stajni Decyma - najnowsze wydarzenia, turnusy, rajdy i informacje o zajęciach.',
  alternates: { canonical: '/aktualnosci' },
};

export default function AktualnosciPage() {
  const posts = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <h1>Aktualności i wydarzenia w Stajni Decyma</h1>
          <div className="news-grid">
            {posts.map(post => (
              <Link key={post.id} href={`/aktualnosci/${post.id}`} className="news-card">
                <div className="news-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    sizes="(max-width: 700px) 100vw, 900px"
                  />
                </div>
                <div className="news-body">
                  <h2 className="news-title">{post.title}</h2>
                  <time className="news-date">{post.date}</time>
                  <div
                    className="news-desc"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.desc) }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
