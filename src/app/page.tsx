import Image from 'next/image';

export const metadata = {
  title: 'Jazda konna Darnawa | Stajnia Decyma',
  description:
    'Stajnia Decyma w Darnawie (lubuskie): nauka jazdy konnej, tereny i półkolonie. Blisko Sulechowa i Świebodzina.',
  keywords: ['stajnia decyma', 'jazda konna sulechów', 'jazda konna świebodzin', 'stajnia darnawa', 'stajnia lubuskie'],
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="page-bg">
      <section className="card card--logo">
        <div className="wrap">
          <div className="logo-box">
            <Image
              src="/bialozlote.png"
              alt="Stajnia Decyma"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1040px"
            />
          </div>
        </div>
      </section>

      <section id="onas" className="card card--hero">
        <div className="wrap">
          <div className="hero">
            <div className="hero__text">
              <h1>Stajnia Decyma - jazda konna w Darnawie</h1>
                <p>
                Zapraszamy do Stajni Decyma – miejsca, w którym pasja do koni spotyka się z gościnnością i naturą. Oferujemy naukę jazdy konnej dla dzieci i dorosłych, rekreacyjne wypady w teren, imprezy okolicznościowe i nie tylko. Jeśli szukasz wypoczynku z dala od zgiełku miasta, nasza skromna stajnia będzie idealnym wyborem. Sprawdź naszą ofertę i przekonaj się, jak wyjątkowy może być czas spędzony w siodle i w otoczeniu przyrody w Darnawie, niedaleko Świebodzina i Sulechowa w woj. lubuskim.
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
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
