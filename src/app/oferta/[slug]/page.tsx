import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import FaqSection, { buildFaqJsonLd } from '../../../components/FaqSection';
import SmartImage from '../../../components/SmartImage';
import NewsCard from '../../aktualnosci/NewsCard';
import { NEWS } from '../../aktualnosci/news';
import {
  OFFER_SERVICES,
  getOfferServiceBySlug,
  getOfferServiceHref,
  type OfferService,
} from '../services';

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

const siteUrl = 'https://stajniadecyma.pl';

function buildServiceJsonLd(service: OfferService) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.shortTitle,
    description: service.description,
    serviceType: service.shortTitle,
    areaServed: ['Darnawa', 'Sulechów', 'Świebodzin', 'lubuskie'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Stajnia Decyma',
      url: siteUrl,
      telephone: '+48 572 069 752',
      email: 'stajniadecyma@icloud.com',
    },
    image: [`${siteUrl}${service.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`],
    url: `${siteUrl}${getOfferServiceHref(service.slug)}`,
  });
}

function buildBreadcrumbJsonLd(service: OfferService) {
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
        name: 'Oferta',
        item: `${siteUrl}/oferta`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.shortTitle,
        item: `${siteUrl}${getOfferServiceHref(service.slug)}`,
      },
    ],
  });
}

export function generateStaticParams() {
  return OFFER_SERVICES.map((service) => ({ slug: service.slug }));
}

async function resolveParams(props: PageProps): Promise<RouteParams> {
  return await props.params;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await resolveParams(props);
  const service = getOfferServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  const canonical = getOfferServiceHref(service.slug);

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'pl_PL',
      url: canonical,
      title: service.title,
      description: service.description,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function OfferServicePage(props: PageProps) {
  const params = await resolveParams(props);
  const service = getOfferServiceBySlug(params.slug);

  if (!service) {
    return notFound();
  }

  const relatedPosts = NEWS.filter((post) => service.relatedNewsIds.includes(post.id)).slice(0, 3);

  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildServiceJsonLd(service) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildFaqJsonLd(service.faq) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildBreadcrumbJsonLd(service) }}
          />

          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Strona główna</Link>
              </li>
              <li>
                <Link href="/oferta">Oferta</Link>
              </li>
              <li aria-current="page">{service.shortTitle}</li>
            </ol>
          </nav>

          <div className="service-page">
            <div className="service-hero">
              <div className="service-hero__copy">
                <Link href="/oferta" className="news-back-link">
                  Wróć do oferty
                </Link>
                <h1>{service.title}</h1>
                <p className="service-page__lead">{service.excerpt}</p>
                <div className="service-facts">
                  <span className="service-fact">Darnawa, lubuskie</span>
                  <span className="service-fact">Blisko Sulechowa i Świebodzina</span>
                  <span className="service-fact">{service.priceLabel}</span>
                </div>
              </div>
              <div className="service-hero__media">
                <SmartImage
                  src={service.image}
                  alt={service.imageAlt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 48vw"
                  priority
                />
              </div>
            </div>

            <div className="service-layout">
              <section className="service-panel">
                <h2>Dla kogo</h2>
                <ul className="service-list">
                  {service.audience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="service-panel">
                <h2>Zakres usługi</h2>
                <ul className="service-list">
                  {service.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="service-panel">
                <h2>Lokalizacja i organizacja</h2>
                <ul className="service-list">
                  {service.location.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <aside className="service-price-box">
                <p className="service-price-box__label">Cena lub widełki</p>
                <h2>{service.priceLabel}</h2>
                <p>{service.priceNote}</p>
                <div className="service-cta">
                  <a className="btn-primary" href="tel:+48572069752">
                    Zadzwoń i zapytaj o termin
                  </a>
                  <Link className="btn-secondary" href="/kontakt">
                    Przejdź do kontaktu
                  </Link>
                </div>
              </aside>
            </div>

            <section className="service-panel service-panel--full">
              <h2>Dlaczego ta oferta jest często wybierana</h2>
              <ul className="service-list">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <FaqSection
              heading={`Najczęściej zadawane pytania: ${service.shortTitle}`}
              intro="To najważniejsze informacje, które pomagają przed pierwszym kontaktem, zapisem lub rezerwacją terminu."
              items={service.faq}
            />

            {relatedPosts.length ? (
              <section className="service-related-news">
                <div className="news-related-section__header">
                  <h2>Powiązane aktualności</h2>
                  <Link href="/aktualnosci" className="news-related-section__link">
                    Zobacz wszystkie wpisy
                  </Link>
                </div>
                <div className="news-grid news-grid--related">
                  {relatedPosts.map((post) => (
                    <NewsCard key={post.id} post={post} compact showActions={false} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
