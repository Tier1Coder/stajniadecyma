export const metadata = {
  title: 'Oferta | Stajnia Decyma',
  description: 'Oferta Stajni Decyma: jazdy indywidualne, karnety, półkolonie, imprezy i usługi dodatkowe. Obsługujemy Sulechów, Świebodzin i okolice.',
  keywords: ['jazda konna sulechów', 'jazda konna świebodzin', 'oferta stajnia decyma', 'karnety jeździeckie'],
};

import Image from 'next/image'

export default function OfertaPage() {
  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <h1>Oferta Stajni Decyma - zajęcia i usługi jeździeckie (Sulechów, Świebodzin)</h1>
          <p>
            W Stajni Decyma dbamy o to, aby każdy - niezależnie od wieku czy poziomu doświadczenia - mógł znaleźć
            coś dla siebie. Oferujemy treningi, lekcje indywidualne i grupowe oraz zajęcia terenowe dla mieszkańców
            Sulechowa, Świebodzina i okolic woj. lubuskiego.
          </p>

          <h2>Cennik zajęć</h2>
          <ul>
            <li>Oprowadzanka na kucyku - <strong>35 zł / 15 min</strong></li>
            <li>Lonża od podstaw - <strong>75 zł / 30 min</strong></li>
            <li>Trening/teren indywidualny - <strong>110 zł / h</strong></li>
            <li>Trening/teren dla 2 osób - <strong>80 zł / h za osobę</strong></li>
            <li>Trening/teren dla 3 osób - <strong>70 zł / h (plac, max 4 osoby)</strong></li>
            <li>Teren powyżej 1 h - <strong>1 zł / min</strong></li>
          </ul>

          <h2>Karnety</h2>
          <p>Dla osób, które chcą jeździć regularnie, przygotowaliśmy korzystne karnety:</p>
          <ul>
            <li>Karnet indywidualny x4 - <strong>380 zł</strong></li>
            <li>Karnet indywidualny x8 - <strong>640 zł</strong></li>
            <li>Karnet dla 2 osób x4 - <strong>280 zł</strong></li>
            <li>Karnet dla 2 osób x8 - <strong>500 zł</strong></li>
          </ul>

          <h2>Usługi dodatkowe</h2>
          <p>
            Oprócz regularnych jazd organizujemy również wydarzenia i atrakcje na specjalne okazje:
          </p>
          <ul>
            <li>sesje zdjęciowe z końmi</li>
            <li>vouchery podarunkowe</li>
            <li>urodziny i przyjęcia okolicznościowe</li>
            <li>zawody jeździeckie</li>
            <li>wycieczki szkolne</li>
            <li>ogniska integracyjne</li>
            <li>letnie kolonie i półkolonie</li>
            <li>zimowe półkolonie</li>
            <li>rajdy konne z ogniskiem</li>
            <li>jazdy i lekcje w języku angielskim</li>
          </ul>
          <p>
            Ceny usług dodatkowych ustalane są indywidualnie - skontaktuj się z nami, aby dopasować ofertę
            do Twoich potrzeb.
          </p>
          <p>
            Płatność gotówką lub blikiem.
          </p>
          
          <section className="gallery">
            <div className="gallery__grid">
              <figure className="gallery__item">
                <Image src="/oferta/rajd.jpg" alt="Rajd konny" width={800} height={1000} className="gallery__img" />
                <figcaption>Rajd konny</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/wycieczka.jpg" alt="Wycieczka szkolna" width={800} height={1000} className="gallery__img" />
                <figcaption>Wycieczka szkolna</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/sesja.jpg" alt="Sesja zdjęciowa" width={800} height={1000} className="gallery__img" />
                <figcaption>Sesja zdjęciowa</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/ognisko.jpg" alt="Ognisko integracyjne" width={800} height={1000} className="gallery__img" />
                <figcaption>Ognisko integracyjne</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/kolonie.jpg" alt="Półkolonie" width={800} height={1000} className="gallery__img" />
                <figcaption>Półkolonie</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/karnety.jpg" alt="Karnety" width={800} height={1000} className="gallery__img" />
                <figcaption>Karnety</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/zawody.jpg" alt="Zawody jeździeckie" width={800} height={1000} className="gallery__img" />
                <figcaption>Zawody jeździeckie</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/dzieci.jpg" alt="Dzieci podczas zajęć" width={800} height={1000} className="gallery__img" />
                <figcaption>Zajęcia dla dzieci</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/ogniskonoc.jpg" alt="Ognisko nocą" width={800} height={1000} className="gallery__img" />
                <figcaption>Ognisko nocą</figcaption>
              </figure>
              <figure className="gallery__item">
                <Image src="/oferta/zima.jpg" alt="Zimowe jazdy" width={800} height={1000} className="gallery__img" />
                <figcaption>Zimowe jazdy</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/zimowekolonie.jpg" alt="Zimowe kolonie" width={800} height={1000} className="gallery__img" />
                <figcaption>Zimowe półkolonie</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image src="/oferta/zdjecia.jpg" alt="Sesja z okazji I Komunii" width={800} height={1000} className="gallery__img" />
                <figcaption>Sesja z okazji I Komunii</figcaption>
              </figure>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
