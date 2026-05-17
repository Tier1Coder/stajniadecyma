import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection, { buildFaqJsonLd, type FaqItem } from '../../components/FaqSection';

const aboutDescription =
  'Poznaj Stajnię Decyma i zespół, który tworzy to miejsce. Kameralna, rodzinna szkółka jeździecka w Darnawie dla dzieci i dorosłych z okolic Sulechowa i Świebodzina.';
const shareImagePath = '/agata2.jpg';

const aboutFaqItems: FaqItem[] = [
  {
    question: 'Czy do Stajni Decyma mogą przyjechać osoby początkujące?',
    answer:
      'Tak. Prowadzimy zajęcia dla osób, które dopiero zaczynają przygodę z końmi, a formę pierwszych zajęć dobieramy spokojnie do wieku i doświadczenia.',
  },
  {
    question: 'Czy prowadzicie zajęcia także dla dzieci?',
    answer:
      'Tak. W ofercie mamy zarówno zajęcia dla najmłodszych, jak i regularne jazdy dla starszych dzieci oraz młodzieży.',
  },
  {
    question: 'Czy można umówić się na zajęcia po angielsku?',
    answer:
      'Tak. Prowadzimy zajęcia również w języku angielskim, dlatego z przyjemnością gościmy także osoby z zagranicy.',
  },
  {
    question: 'Gdzie znajduje się stajnia?',
    answer:
      'Stajnia Decyma znajduje się w Darnawie, w spokojnym otoczeniu łąk i lasów, z wygodnym dojazdem z Sulechowa i Świebodzina.',
  },
];

function buildAboutJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'O nas - Stajnia Decyma',
    description: aboutDescription,
    url: 'https://stajniadecyma.pl/onas',
  });
}

export const metadata: Metadata = {
  title: 'O nas - szkółka jeździecka Darnawa | Stajnia Decyma',
  description: aboutDescription,
  alternates: { canonical: '/onas' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/onas',
    title: 'O nas - szkółka jeździecka Darnawa | Stajnia Decyma',
    description: aboutDescription,
    images: [{ url: shareImagePath, alt: 'Stajnia Decyma - O nas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O nas - szkółka jeździecka Darnawa | Stajnia Decyma',
    description: aboutDescription,
    images: [shareImagePath],
  },
};

export default function ONasPage() {
  return (
    <div className="page-bg">
      <section className="card card--text">
        <div className="wrap">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildAboutJsonLd() }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildFaqJsonLd(aboutFaqItems) }}
          />

          <div className="about-intro">
            <div className="about-intro__copy">
              <h1>O nas</h1>
              <p className="about-lead">
                Stajnia Decyma to kameralna, rodzinna stajnia w Darnawie, stworzona z pasji do koni,
                natury i spokojnej pracy z ludźmi. Tworzymy miejsce dla dzieci, młodzieży i dorosłych,
                którzy chcą uczyć się jazdy konnej, odpocząć wśród łąk i lasów albo po prostu poczuć
                bliski kontakt z końmi.
              </p>
              <div className="about-facts">
                <span className="about-fact">Darnawa, lubuskie</span>
                <span className="about-fact">Dzieci i dorośli</span>
                <span className="about-fact">Zajęcia po polsku i angielsku</span>
              </div>
            </div>
          </div>

          <section className="about-section">
            <h2>Co nas wyróżnia</h2>
            <div className="about-points">
              <article className="about-point">
                <h3>Kameralna atmosfera</h3>
                <p>
                  Zależy nam na spokojnej pracy i indywidualnym podejściu, dlatego nie budujemy miejsca
                  o masowym charakterze.
                </p>
              </article>
              <article className="about-point">
                <h3>Rodzinne prowadzenie</h3>
                <p>
                  Stajnię tworzymy sami i dbamy zarówno o ludzi, jak i o codzienny dobrostan naszych koni.
                </p>
              </article>
              <article className="about-point">
                <h3>Naturalne otoczenie</h3>
                <p>
                  Darnawa, lasy i łąki wokół stajni tworzą świetne warunki do treningów i rekreacyjnych wyjazdów.
                </p>
              </article>
              <article className="about-point">
                <h3>Bez presji i pośpiechu</h3>
                <p>
                  Chcemy, żeby każda osoba czuła się u nas swobodnie, niezależnie od wieku i poziomu doświadczenia.
                </p>
              </article>
            </div>
          </section>

          <section className="about-section">
            <h2>Jak powstała Stajnia Decyma</h2>
            <p>
              Nazwa stajni pochodzi od wyjątkowej klaczy Decymy, która była pierwszym koniem w naszej
              szkółce i w pewnym sensie zapoczątkowała to miejsce. To właśnie od niej zaczęła się historia
              przestrzeni, którą rozwijamy dziś jako spokojną, rodzinną stajnię dla osób szukających
              kontaktu z końmi i nauki w przyjaznych warunkach.
            </p>
            <p>
              Na co dzień pracujemy w rytmie stajni, opieki nad końmi i zajęć z jeźdźcami. Zależy nam,
              aby to miejsce było nie tylko punktem na mapie, ale przestrzenią, do której chce się wracać.
            </p>
          </section>

          <section className="about-section">
            <h2>Kto prowadzi stajnię</h2>
            <div className="about-team">
              <figure className="about-person">
                <div className="about-person__image">
                  <Image
                    src="/agata2.jpg"
                    alt="Agata - instruktorka i właścicielka"
                    width={600}
                    height={600}
                    sizes="(max-width: 900px) 100vw, 320px"
                  />
                </div>
                <figcaption>
                  <h3>Agata</h3>
                  <p>
                    Instruktorka i współwłaścicielka stajni. Prowadzi zajęcia z jazdy konnej po polsku i po
                    angielsku, pracuje z końmi oraz dba o rozwój jeźdźców na różnych poziomach.
                  </p>
                </figcaption>
              </figure>

              <figure className="about-person">
                <div className="about-person__image">
                  <Image
                    src="/robert.jpg"
                    alt="Robert - współprowadzący stajnię"
                    width={600}
                    height={600}
                    sizes="(max-width: 900px) 100vw, 320px"
                  />
                </div>
                <figcaption>
                  <h3>Robert</h3>
                  <p>
                    Współprowadzi stajnię od strony technicznej i organizacyjnej. Dzięki temu codzienna
                    praca może przebiegać sprawnie, a zajęcia i wydarzenia mają solidne zaplecze.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="about-section">
            <h2>Dla kogo jesteśmy</h2>
            <div className="about-audience">
              <article className="about-audience__item">
                <h3>Dla dzieci i młodzieży</h3>
                <p>
                  Prowadzimy spokojne pierwsze kontakty z końmi, regularne zajęcia i formy rozwijające
                  dla młodszych uczestników.
                </p>
              </article>
              <article className="about-audience__item">
                <h3>Dla dorosłych</h3>
                <p>
                  Zapraszamy osoby początkujące, wracające do jazdy po przerwie i tych, którzy chcą
                  regularnie jeździć w kameralnych warunkach.
                </p>
              </article>
              <article className="about-audience__item">
                <h3>Dla osób szukających natury</h3>
                <p>
                  Jeśli chcesz odpocząć od pośpiechu i spędzić czas wśród koni, łąk i lasów, Darnawa jest
                  do tego idealnym miejscem.
                </p>
              </article>
            </div>
          </section>

          <section className="about-section">
            <h2>Nasze konie</h2>
            <p>
              W stajni opiekujemy się końmi o różnych charakterach i predyspozycjach. Są wśród nich spokojne
              konie idealne do pierwszych zajęć oraz bardziej energiczne, które dobrze sprawdzają się podczas
              jazd w terenie. Dbamy o ich dobrostan, codzienną pielęgnację i warunki życia, bo to właśnie od
              ich komfortu zaczyna się dobra współpraca z jeźdźcem.
            </p>
          </section>

          <FaqSection
            heading="Najczęściej zadawane pytania o Stajni Decyma"
            intro="To krótki zestaw odpowiedzi dla osób, które dopiero poznają naszą stajnię i chcą wiedzieć, czy to dobre miejsce na pierwszy kontakt z końmi."
            items={aboutFaqItems}
          />

          <section className="about-cta">
            <h2>Chcesz nas lepiej poznać?</h2>
            <p>
              Najlepiej zrobić to na miejscu. Sprawdź ofertę, zobacz nasze konie albo skontaktuj się z nami
              i zapytaj o pierwszy termin.
            </p>
            <div className="about-cta__actions">
              <Link href="/oferta" className="btn-primary">
                Zobacz ofertę
              </Link>
              <Link href="/konie" className="btn-secondary">
                Poznaj nasze konie
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Kontakt
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
