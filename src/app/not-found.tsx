import Link from 'next/link';

export const metadata = {
  title: '404 — Nie znaleziono | Stajnia Decyma',
  description: 'Strona nie została znaleziona. Wróć na stronę główną lub skontaktuj się z nami.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className="page-bg">
      <section className="card card--hero">
        <div className="wrap">
          <div className="hero">
            <div className="hero__text">
              <h1>404 — Strona nie została znaleziona</h1>
              <p>
                Przykro nam, ale strona, której szukasz, nie istnieje lub została przeniesiona.
                Możesz wrócić na <Link href="/">stronę główną</Link> lub skontaktować się z nami.
              </p>
              <p>
                <Link href="/kontakt" className="btn-primary">Kontakt</Link>
              </p>
            </div>

            <div className="hero__image">
              <img src="/logo.png" alt="Stajnia Decyma" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
