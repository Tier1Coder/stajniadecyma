import Image from 'next/image';

export const metadata = {
  title: 'Stajnia Decyma — szkoła jeździecka w Darnawie',
  description:
    'Stajnia Decyma — jazdy konne, nauka jeździectwa, półkolonie i rajdy. Obsługujemy Sulechów, Świebodzin i okolice w woj. lubuskim.',
  keywords: ['stajnia decyma', 'jazda konna sulechów', 'jazda konna świebodzin', 'stajnia darnawa', 'stajnia lubuskie'],
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
                Zapraszamy do Stajni Decyma w Darnawie — szkoły jeździeckiej obsługującej mieszkańców Sulechowa, Świebodzina i
                całego woj. lubuskiego. Organizujemy lekcje, karnety, półkolonie i rajdy terenowe dla każdego poziomu.
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
