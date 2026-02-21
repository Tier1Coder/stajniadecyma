import DOMPurify from 'isomorphic-dompurify';
import { NEWS } from './news';
import SmartImage from '../../components/SmartImage';

export const metadata = {
  title: 'Aktualności stajni | Stajnia Decyma Darnawa',
  description: 'Najnowsze aktualności Stajni Decyma: wydarzenia, turnusy, rajdy i informacje o zajęciach w Darnawie koło Sulechowa i Świebodzina.',
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
              <a key={post.id} href={`/aktualnosci/${post.id}`} className="news-card">
                <div className="news-image">
                  <SmartImage
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
