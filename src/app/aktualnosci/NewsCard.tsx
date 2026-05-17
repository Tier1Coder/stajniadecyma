import Link from 'next/link';
import type { NewsPost } from './news';
import { formatNewsDate, getNewsExcerpt } from './utils';
import { getNewsCategoryLabel } from './news';
import SmartImage from '../../components/SmartImage';
import { getOfferServiceBySlug, getOfferServiceHref } from '../oferta/services';

type NewsCardProps = {
  post: NewsPost
  priority?: boolean
  compact?: boolean
  highlighted?: boolean
  showActions?: boolean
}

export default function NewsCard({
  post,
  priority = false,
  compact = false,
  highlighted = false,
  showActions = true,
}: NewsCardProps) {
  const href = `/aktualnosci/${post.slug}`;
  const relatedService = post.serviceSlug ? getOfferServiceBySlug(post.serviceSlug) : undefined;
  const categoryLabel = getNewsCategoryLabel(post.category);
  const excerpt = compact
    ? getNewsExcerpt(post.desc, 110)
    : highlighted
      ? getNewsExcerpt(post.desc, 190)
      : post.excerpt;

  return (
    <article
      className={`news-card${compact ? ' news-card--compact' : ''}${highlighted ? ' news-card--highlighted' : ''}`}
    >
      <Link href={href} className="news-card__link">
        <div className="news-image">
          <SmartImage
            src={post.image}
            alt={post.title}
            width={400}
            height={300}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 420px"
            priority={priority}
          />
        </div>
        <div className="news-body">
          <div className="news-badges">
            <span className="news-badge">{categoryLabel}</span>
            {post.featured ? <span className="news-badge news-badge--featured">Polecane</span> : null}
          </div>
          <h2 className="news-title">{post.title}</h2>
          <time className="news-date" dateTime={post.date}>
            {formatNewsDate(post.date)}
          </time>
          <p className="news-excerpt">{excerpt}</p>
        </div>
      </Link>
      {showActions ? (
        <div className="news-card__actions">
          <Link href={href} className="btn-primary" aria-label={`Czytaj więcej: ${post.title}`}>
            Czytaj więcej
          </Link>
          {relatedService ? (
            <Link href={getOfferServiceHref(relatedService.slug)} className="btn-secondary">
              Zobacz usługę
            </Link>
          ) : (
            <Link href="/kontakt" className="btn-secondary">
              Kontakt
            </Link>
          )}
        </div>
      ) : null}
    </article>
  );
}
