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

          <h2>CENNIK</h2>
          <p>
            Przedstawiony czas dotyczy samej jazdy konnej (czasu w siodle) i nie obejmuje przygotowania konia (czyszczenie, siodłanie). Podane ceny są za jedną osobę. Warunki korzystania z karnetów są opisane z zakładce Regulamin.
          </p>

          <h3>NAUKA / PODSTAWY</h3>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Rodzaj usługi</th>
                  <th>Czas</th>
                  <th>Jednorazowo</th>
                  <th>Karnet 4x</th>
                  <th>Karnet 8x</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nauka czyszczenia i siodłania</td>
                  <td>20 min</td>
                  <td>20 zł</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Oprowadzanka dla dzieci do 7 lat</td>
                  <td>15 min</td>
                  <td>40 zł</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Oprowadzanka</td>
                  <td>30 min</td>
                  <td>60 zł</td>
                  <td>210 zł</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Lonża</td>
                  <td>30 min</td>
                  <td>80 zł</td>
                  <td>280 zł</td>
                  <td>480 zł</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted">Zajęcia wprowadzające - krótkie lekcje praktyczne skupione na bezpieczeństwie, podstawach pielęgnacji i oswajaniu z koniem. Idealne dla dzieci i osób zaczynających przygodę z jeździectwem.</p>

          <h3>TRENINGI</h3>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Rodzaj</th>
                  <th>Czas</th>
                  <th>Jednorazowo</th>
                  <th>Karnet 4x</th>
                  <th>Karnet 8x</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Indywidualny - początkujący</td>
                  <td>45 min</td>
                  <td>100 zł</td>
                  <td>350 zł</td>
                  <td>640 zł</td>
                </tr>
                <tr>
                  <td>Indywidualny - zaawansowany</td>
                  <td>60 min</td>
                  <td>120 zł</td>
                  <td>420 zł</td>
                  <td>760 zł</td>
                </tr>
                <tr>
                  <td>Trening 2-osobowy</td>
                  <td>60 min</td>
                  <td>90 zł</td>
                  <td>315 zł</td>
                  <td>560 zł</td>
                </tr>
                <tr>
                  <td>Grupa 3-4 osoby</td>
                  <td>60 min</td>
                  <td>75 zł</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted">Treningi są dostosowywane do poziomu jeźdźca. Treningi odbywają się na placu bądź w sezonie letnim na łące.</p>

          <h3>TEREN - min. 2 osoby</h3>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Czas</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30 min</td>
                  <td>60 zł</td>
                </tr>
                <tr>
                  <td>45 min</td>
                  <td>75 zł</td>
                </tr>
                <tr>
                  <td>60 min</td>
                  <td>90 zł</td>
                </tr>
                <tr>
                  <td>90 min</td>
                  <td>120 zł</td>
                </tr>
                <tr>
                  <td>120 min</td>
                  <td>150 zł</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted">Wyjazdy w teren są dostosowane do poziomu jeźdźców. Tereny są zarówno w kłusie, jak i w galopie, zależnie od poziomu grupy oraz od pogody.</p>

          <h3>OFERTY SPECJALNE</h3>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Usługa</th>
                  <th>Cena</th>
                  <th>Ilość h w siodle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dzień z koniem</td>
                  <td>220 zł</td>
                  <td>1 h</td>
                </tr>
                <tr>
                  <td>Półkolonie (pn–pt)</td>
                  <td>1000 zł</td>
                  <td>5 h</td>
                </tr>
                <tr>
                  <td>Kolonie z noclegiem (pn–pt)</td>
                  <td>2000 zł</td>
                  <td>12 h</td>
                </tr>
                <tr>
                  <td>Rajd jednodniowy z ogniskiem</td>
                  <td>300 zł</td>
                  <td>3 h</td>
                </tr>
                <tr>
                  <td>Rajd z noclegiem, biesiadą i śniadaniem</td>
                  <td>500 zł</td>
                  <td>3 h</td>
                </tr>
                <tr>
                  <td></td>
                  <td>400 zł</td>
                  <td>2 h</td>
                </tr>
                <tr>
                  <td></td>
                  <td>300 zł</td>
                  <td>1 h</td>
                </tr>
                <tr>
                  <td>Transport na dzień z koniem lub półkolonie</td>
                  <td>do ustalenia</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="muted">Oferty specjalne obejmują całodniowe i kilkudniowe programy (półkolonie, kolonie, rajdy). Szczegóły, terminy i transport ustalamy indywidualnie. Zależnie od programu zapewniane są posiłki, dodatkowe atrakcje, nocleg. Zapewniona jest opieka instruktorska przez cały czas trwania programu. Półkolonie skierowane są do początkujących jeźdźców, natomiast kolonie są dla osób zaawansowanych. </p>

          <h2>Usługi dodatkowe</h2>
          <p>
            Oprócz wymienionych usług oferujemy również:
          </p>
          <ul>
            <li>sesje zdjęciowe z końmi</li>
            <li>vouchery podarunkowe</li>
            <li>urodziny i przyjęcia okolicznościowe</li>
            <li>zawody jeździeckie</li>
            <li>wycieczki szkolne</li>
            <li>ogniska integracyjne</li>
            <li>zimowe półkolonie</li>
            <li>jazdy i lekcje w języku angielskim</li>
          </ul>
          <p>
            Ceny usług dodatkowych ustalane są indywidualnie - skontaktuj się z nami, aby dopasować ofertę
            do Twoich potrzeb.
          </p>
          <p className="underline-text">
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
