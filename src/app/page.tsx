import Image from 'next/image';

export const metadata = {
  title: 'Stajnia Decyma — Stajnia i szkoła jeździecka w Darnawie',
  description:
    'Stajnia Decyma w Darnawie — jazdy konne, nauka jeździectwa, hipoterapia i półkolonie. Obsługujemy Sulechów, Świebodzin oraz całe woj. lubuskie.',
  keywords: ['stajnia decyma', 'jazda konna sulechów', 'jazda konna świebodzin', 'stajnia lubuskie', 'szkoła jeździecka lubuskie'],
};

export default function HomePage() {
  return (
    <div className="page-bg">
      <section className="card card--logo">
        <div className="wrap">
          <div className="logo-box">
            <Image src="/logo.png" alt="Stajnia Decyma" fill priority />
          </div>
        </div>
      </section>

      <section id="onas" className="card card--hero">
        <div className="wrap">
          <div className="hero">
            <div className="hero__text">
              <h1>Stajnia Decyma — jazda konna w Darnawie (Sulechów, Świebodzin)</h1>
              <p>
                Zapraszamy do Stajni Decyma — szkoły jeździeckiej w Darnawie, obsługującej mieszkańców Sulechowa,
                Świebodzina i okolic woj. lubuskiego. Oferujemy lekcje dla dzieci i dorosłych, karnety, półkolonie
                oraz treningi terenowe.
              </p>
            </div>

            <div className="hero__image">
              <Image
                src="/hero.jpg"
                alt="Konie na pastwisku"
                width={1600}
                height={1067}
                className="hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
