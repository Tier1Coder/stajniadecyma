import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import Image from 'next/image';
import { NEWS } from './news';

export const metadata = {
  title: 'Aktualności | Stajnia Decyma',
  description: 'Aktualności ze Stajni Decyma — najnowsze wydarzenia, turnusy, rajdy i informacje o zajęciach.'
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
              <article key={post.id} className="news-card">
                <Link href={`/aktualnosci/${post.id}`} className="news-link">
                  <div className="news-image">
                    <Image src={post.image} alt={post.title} width={400} height={300} />
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
