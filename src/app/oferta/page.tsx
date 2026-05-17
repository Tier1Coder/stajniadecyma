import Image from 'next/image'

export const metadata = {
  title: 'Oferta | Stajnia Decyma',
  description:
    'Oferta Stajni Decyma: jazdy indywidualne, karnety, półkolonie, imprezy i usługi dodatkowe. Obsługujemy Sulechów, Świebodzin i okolice.',
  keywords: [
    'jazda konna sulechów',
    'jazda konna świebodzin',
    'oferta stajnia decyma',
    'karnety jeździeckie',
  ],
}

export default function OfertaPage() {
  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <h1>Oferta Stajni Decyma - zajęcia i usługi jeździeckie</h1>
          <p>
            W Stajni Decyma dbamy o to, aby każdy - niezależnie od wieku czy poziomu doświadczenia -
            mógł znaleźć coś dla siebie. Oferujemy treningi, lekcje indywidualne i grupowe oraz zajęcia
            terenowe dla mieszkańców Sulechowa, Świebodzina i okolic woj. lubuskiego.
          </p>

          <h2>CENNIK</h2>
          <p>
            Przedstawiony czas dotyczy samej jazdy konnej (czasu w siodle) i nie obejmuje przygotowania
            konia (czyszczenie, siodłanie), chyba że w nazwie usługi wskazano inaczej. Podane ceny są za
            jedną osobę. Karnety 4x i 8x są ważne 30 dni. Szczegółowe zasady korzystania z karnetów są
            opisane w zakładce Regulamin.
          </p>

          <h3>DZIECI OD 3 DO 7 LAT</h3>
          <div className="table-wrap">
            <table className="price-table price-table--kids">
              <thead>
                <tr>
                  <th>Rodzaj usługi</th>
                  <th>Czas w siodle</th>
                  <th>Płatność jednorazowa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Akademia jeździecka dla dzieci (zajęcia 2 razy w miesiącu w soboty)</td>
                  <td>-</td>
                  <td>50 zł</td>
                </tr>
                <tr>
                  <td>Oprowadzanka / spacer (zajęcia w soboty)</td>
                  <td>10-30 min</td>
                  <td>30-70 zł</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted">
            Oferta dla najmłodszych obejmuje zajęcia oswajające z koniem, spokojne oprowadzanki oraz pierwsze
            doświadczenia w siodle w bezpiecznej i przyjaznej atmosferze.
          </p>


          <h3>DZIECI, MŁODZIEŻ I DOROŚLI OD 8 LAT</h3>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Rodzaj usługi</th>
                  <th>Czas w siodle</th>
                  <th>Płatność jednorazowa</th>
                  <th>Karnet 4x</th>
                  <th>Karnet 8x</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Lonża od podstaw z nauką czyszczenia i siodłania (zajęcia od poniedziałku do soboty)
                  </td>
                  <td>30 min</td>
                  <td>80 zł</td>
                  <td>280 zł</td>
                  <td>520 zł</td>
                </tr>
                <tr>
                  <td>Trening indywidualny (zajęcia od poniedziałku do czwartku)</td>
                  <td>45 min</td>
                  <td>100 zł</td>
                  <td>340 zł</td>
                  <td>600 zł</td>
                </tr>
                <tr>
                  <td>Trening indywidualny (zajęcia od poniedziałku do czwartku)</td>
                  <td>60 min</td>
                  <td>120 zł</td>
                  <td>400 zł</td>
                  <td>720 zł</td>
                </tr>
                <tr>
                  <td>
                    Trening 2-osobowy (zajęcia od poniedziałku do czwartku dla duetów zorganizowanych
                    oraz piątki i soboty)
                  </td>
                  <td>60 min</td>
                  <td>90 zł</td>
                  <td>320 zł</td>
                  <td>560 zł</td>
                </tr>
                <tr>
                  <td>Teren (minimum 2 osoby, organizowany w 2 niedziele w miesiącu)</td>
                  <td>75 min</td>
                  <td>100 zł</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Teren powyżej 75 minut</td>
                  <td>-</td>
                  <td>Do ustalenia</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted">
            Zajęcia są dostosowane do wieku i poziomu zaawansowania jeźdźca. Treningi odbywają się
            zgodnie z harmonogramem wskazanym przy danej usłudze, a wyjazdy w teren są przeznaczone dla
            osób czujących się pewnie w siodle.
          </p>

          <h2>Usługi dodatkowe</h2>
          <p>Oprócz wymienionych usług oferujemy również:</p>
          <ul>
            <li>sesje zdjęciowe z końmi</li>
            <li>vouchery podarunkowe</li>
            <li>urodziny i przyjęcia okolicznościowe</li>
            <li>Dzień Dziecka</li>
            <li>zawody jeździeckie</li>
            <li>wycieczki szkolne</li>
            <li>ogniska integracyjne</li>
            <li>zimowe półkolonie</li>
            <li>jazdy i lekcje w języku angielskim</li>
          </ul>
          <p>
            Ceny usług dodatkowych ustalane są indywidualnie - skontaktuj się z nami, aby dopasować
            ofertę do Twoich potrzeb.
          </p>
          <p className="underline-text">Płatność gotówką lub blikiem.</p>

          <section className="gallery">
            <div className="gallery__grid">
              <figure className="gallery__item">
                <Image
                  src="/oferta/rajd.jpg"
                  alt="Rajd konny"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Rajd konny</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/wycieczka.jpg"
                  alt="Wycieczka szkolna"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Wycieczka szkolna</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/sesja.jpg"
                  alt="Sesja zdjęciowa"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Sesja zdjęciowa</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/ognisko2.jpg"
                  alt="Ognisko integracyjne"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Ognisko integracyjne</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/kolonie.jpg"
                  alt="Półkolonie"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Półkolonie</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/karnety.jpg"
                  alt="Karnety"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Karnety</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/voucher.jpg"
                  alt="Vouchery podarunkowe"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Vouchery podarunkowe</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/zawody.jpg"
                  alt="Zawody jeździeckie"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Zawody jeździeckie</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/dzieci.jpg"
                  alt="Dzieci podczas zajęć"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Zajęcia dla dzieci</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/news/dziendziecka.jpg"
                  alt="Dzień Dziecka"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Dzień Dziecka</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/ogniskonoc.jpg"
                  alt="Ognisko nocą"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Ognisko nocą</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/zima.jpg"
                  alt="Zimowe jazdy"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Zimowe jazdy</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/zimowekolonie.jpg"
                  alt="Zimowe kolonie"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Zimowe półkolonie</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/akademiaJ.jpeg"
                  alt="Zimowe kolonie"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Dziecięca akademia jeździecka</figcaption>
              </figure>

              <figure className="gallery__item">
                <Image
                  src="/oferta/zdjecia.jpg"
                  alt="Sesja z okazji I Komunii"
                  width={800}
                  height={1000}
                  className="gallery__img"
                />
                <figcaption>Sesja z okazji I Komunii</figcaption>
              </figure>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
