import type { FaqItem } from '../../components/FaqSection';

export type OfferServiceSlug =
  | 'nauka-jazdy-konnej'
  | 'jazda-konna-dla-dzieci'
  | 'jazda-konna-dla-doroslych'
  | 'tereny-konne'
  | 'polkolonie-jezdzieckie'
  | 'vouchery-podarunkowe'
  | 'urodziny-w-stajni'
  | 'wycieczki-szkolne';

export type OfferService = {
  slug: OfferServiceSlug
  shortTitle: string
  title: string
  description: string
  excerpt: string
  image: string
  imageAlt: string
  priceLabel: string
  priceNote: string
  audience: string[]
  scope: string[]
  location: string[]
  highlights: string[]
  faq: FaqItem[]
  keywords: string[]
  relatedNewsIds: number[]
}

export const OFFER_SERVICES: OfferService[] = [
  {
    slug: 'nauka-jazdy-konnej',
    shortTitle: 'Nauka jazdy konnej',
    title: 'Nauka jazdy konnej w Darnawie - Stajnia Decyma',
    description:
      'Nauka jazdy konnej w Stajni Decyma w Darnawie dla osób początkujących i rozwijających umiejętności. Blisko Sulechowa i Świebodzina.',
    excerpt:
      'Regularne treningi dla osób, które chcą zacząć jazdę konną albo wrócić do systematycznej pracy w siodle.',
    image: '/hero.jpg',
    imageAlt: 'Nauka jazdy konnej w Stajni Decyma',
    priceLabel: 'Od 80 zł za zajęcia indywidualne, od 90 zł za trening 2-osobowy',
    priceNote:
      'Dostępne są też karnety 4x i 8x. Dokładna forma zajęć zależy od wieku, poziomu i celu treningowego.',
    audience: [
      'dla osób początkujących, które chcą bezpiecznie zacząć naukę od podstaw',
      'dla jeźdźców wracających po przerwie i chcących odbudować pewność w siodle',
      'dla osób, które chcą jeździć regularnie w formie pojedynczych jazd albo karnetu',
    ],
    scope: [
      'lonża od podstaw z nauką czyszczenia i siodłania',
      'trening indywidualny 45 lub 60 minut',
      'trening 2-osobowy dla duetów i osób jeżdżących razem',
      'dobór rodzaju jazdy do poziomu i celu uczestnika',
    ],
    location: [
      'zajęcia odbywają się w Darnawie, niedaleko Sulechowa i Świebodzina',
      'na miejscu prowadzimy treningi na placu i przygotowanie do samodzielniejszej jazdy',
      'w miarę rozwoju umiejętności można przejść do bardziej zaawansowanych form zajęć',
    ],
    highlights: [
      'kameralna atmosfera i indywidualne podejście',
      'nauka obejmuje nie tylko jazdę, ale też podstawy opieki nad koniem',
      'możliwość dopasowania regularnego terminu w tygodniu',
    ],
    faq: [
      {
        question: 'Od czego zaczyna się nauka jazdy konnej?',
        answer:
          'Najczęściej od lonży lub spokojnych zajęć podstawowych, które pozwalają oswoić się z koniem, nauczyć podstaw dosiadu i bezpiecznego zachowania w stajni.',
      },
      {
        question: 'Czy mogę zapisać się bez wcześniejszego doświadczenia?',
        answer:
          'Tak. Dobieramy formę zajęć do osoby początkującej i prowadzimy ją krok po kroku od podstaw.',
      },
      {
        question: 'Czy macie karnety na regularne jazdy?',
        answer:
          'Tak. Na regularne treningi dostępne są karnety 4x i 8x ważne przez 30 dni.',
      },
    ],
    keywords: [
      'nauka jazdy konnej darnawa',
      'nauka jazdy konnej sulechów',
      'nauka jazdy konnej świebodzin',
    ],
    relatedNewsIds: [60, 45, 48],
  },
  {
    slug: 'jazda-konna-dla-dzieci',
    shortTitle: 'Jazda konna dla dzieci',
    title: 'Jazda konna dla dzieci - Darnawa, Sulechów, Świebodzin',
    description:
      'Jazda konna dla dzieci w Stajni Decyma: oprowadzanki, pierwsze zajęcia w siodle i Dziecięca Akademia Jeździecka.',
    excerpt:
      'Spokojne wejście w świat koni dla najmłodszych oraz rozwijające zajęcia dla dzieci, które chcą regularnie wracać do stajni.',
    image: '/oferta/dzieci.jpg',
    imageAlt: 'Dzieci podczas zajęć w Stajni Decyma',
    priceLabel: 'Od 30 zł za oprowadzankę, Akademia od 50 zł',
    priceNote:
      'Zakres zajęć i długość spotkania zależą od wieku dziecka, liczby uczestników i wybranego formatu.',
    audience: [
      'dla dzieci od 3 roku życia, które dopiero poznają konie',
      'dla młodych uczestników, którzy chcą uczyć się regularnie w przyjaznej grupie',
      'dla rodziców szukających bezpiecznej formy kontaktu dziecka ze zwierzętami i ruchem',
    ],
    scope: [
      'oprowadzanka lub spokojny spacer na koniu',
      'pierwsze doświadczenia w siodle w bezpiecznym tempie',
      'Dziecięca Akademia Jeździecka z zajęciami grupowymi',
      'elementy opieki nad koniem i oswajania z pracą w stajni',
    ],
    location: [
      'zajęcia prowadzimy w Darnawie, z dogodnym dojazdem z Sulechowa i Świebodzina',
      'program dla dzieci dopasowujemy do wieku, odwagi i zaangażowania grupy',
      'stawiamy na spokojne wprowadzenie, bez presji i w kameralnych warunkach',
    ],
    highlights: [
      'przyjazna forma startu dla dzieci, które wcześniej nie miały kontaktu z końmi',
      'czytelny podział na zajęcia dla najmłodszych i dzieci gotowych na regularność',
      'duży nacisk na bezpieczeństwo i pozytywne pierwsze doświadczenia',
    ],
    faq: [
      {
        question: 'Od jakiego wieku dziecko może zacząć zajęcia?',
        answer:
          'Najmłodsze dzieci mogą zacząć od oprowadzanek i spokojnego kontaktu z koniem już od 3 roku życia.',
      },
      {
        question: 'Czy dziecko musi mieć własny sprzęt jeździecki?',
        answer:
          'Na start nie jest to konieczne. Najważniejsze są wygodne ubrania i wcześniejszy kontakt z nami przed pierwszą wizytą.',
      },
      {
        question: 'Czy prowadzicie regularne zajęcia dla dzieci?',
        answer:
          'Tak. Oprócz pojedynczych spotkań prowadzimy też Dziecięcą Akademię Jeździecką i inne formy cyklicznych zajęć.',
      },
    ],
    keywords: [
      'jazda konna dla dzieci sulechów',
      'jazda konna dla dzieci świebodzin',
      'dziecięca akademia jeździecka lubuskie',
    ],
    relatedNewsIds: [71, 7, 47],
  },
  {
    slug: 'jazda-konna-dla-doroslych',
    shortTitle: 'Jazda konna dla dorosłych',
    title: 'Jazda konna dla dorosłych - treningi i regularne jazdy',
    description:
      'Jazda konna dla dorosłych w Darnawie: treningi indywidualne, jazdy regularne i powrót do siodła w Stajni Decyma.',
    excerpt:
      'Oferta dla dorosłych, którzy chcą zacząć od podstaw, wrócić do jazdy po przerwie albo trenować systematycznie.',
    image: '/news/3osoby.jpg',
    imageAlt: 'Dorośli podczas treningu w Stajni Decyma',
    priceLabel: 'Od 100 zł za trening 45 min, od 120 zł za trening 60 min',
    priceNote:
      'Dostępne są także karnety oraz treningi 2-osobowe dla osób, które chcą jeździć razem.',
    audience: [
      'dla dorosłych początkujących, którzy chcą zacząć bez pośpiechu i z dobrym wprowadzeniem',
      'dla osób wracających do jeździectwa po dłuższej przerwie',
      'dla klientów, którzy szukają regularnych treningów w wygodnym dojeździe z Sulechowa i Świebodzina',
    ],
    scope: [
      'treningi indywidualne 45 lub 60 minut',
      'możliwość zapisu na karnety i stały termin',
      'treningi 2-osobowe dla duetów zorganizowanych',
      'nauka techniki, pewności w siodle i pracy nad regularnością',
    ],
    location: [
      'Stajnia Decyma działa w Darnawie, w spokojnym otoczeniu i z łatwym dojazdem',
      'zajęcia prowadzimy w kameralnym rytmie, bez dużych grup i przypadkowego tłoku',
      'dobór formy jazdy zależy od poziomu uczestnika i celu treningowego',
    ],
    highlights: [
      'dobra opcja dla osób, które chcą wrócić do jazdy bez presji sportowej',
      'czytelny cennik i możliwość regularnych treningów',
      'połączenie rekreacji, nauki i kontaktu z końmi w spokojnym miejscu',
    ],
    faq: [
      {
        question: 'Czy dorośli początkujący mogą zacząć od zera?',
        answer:
          'Tak. Wiele osób zaczyna jazdę konną jako dorośli i właśnie pod takie osoby dobieramy spokojny start oraz indywidualny tok zajęć.',
      },
      {
        question: 'Czy mogę jeździć regularnie po pracy lub w weekend?',
        answer:
          'Tak. Ustalamy terminy indywidualnie, a przy regularnych jazdach można zapisać się na stały termin i karnet.',
      },
      {
        question: 'Czy prowadzicie treningi dla dwóch osób?',
        answer:
          'Tak. Dla duetów zorganizowanych prowadzimy treningi 2-osobowe, jeśli poziom i cel zajęć dobrze do siebie pasują.',
      },
    ],
    keywords: [
      'jazda konna dla dorosłych sulechów',
      'jazda konna dla dorosłych świebodzin',
      'trening jazdy konnej dorośli lubuskie',
    ],
    relatedNewsIds: [14, 45, 60],
  },
  {
    slug: 'tereny-konne',
    shortTitle: 'Tereny konne',
    title: 'Tereny konne i jazdy w terenie - Stajnia Decyma',
    description:
      'Jazdy w terenie w Darnawie dla osób jeżdżących pewnie w siodle. Malownicze trasy w okolicach Sulechowa i Świebodzina.',
    excerpt:
      'Wyjazdy w teren dla osób gotowych na jazdę poza placem: spokojne trasy, sezonowe rajdy i aktywny wypoczynek w naturze.',
    image: '/oferta/rajd.jpg',
    imageAlt: 'Jazda konna w terenie w Stajni Decyma',
    priceLabel: 'Teren od 100 zł za około 75 minut',
    priceNote:
      'Dłuższe wyjazdy, rajdy i formy okolicznościowe wyceniamy indywidualnie w zależności od programu i czasu.',
    audience: [
      'dla osób, które czują się swobodnie w siodle i chcą wyjść poza jazdę na placu',
      'dla klientów szukających aktywnego wypoczynku w naturze',
      'dla grup minimum 2-osobowych i uczestników sezonowych rajdów',
    ],
    scope: [
      'jazdy w terenie dostosowane do poziomu grupy',
      'rajdy i tereny okolicznościowe w różnych porach roku',
      'możliwość dłuższego programu z ogniskiem lub przerwą',
      'przed wyjazdem dobieramy konie i omawiamy bezpieczeństwo trasy',
    ],
    location: [
      'korzystamy z malowniczych tras w okolicach Darnawy',
      'to dobra propozycja dla osób z Sulechowa, Świebodzina i całego regionu lubuskiego',
      'termin i długość przejazdu ustalamy zależnie od warunków i poziomu grupy',
    ],
    highlights: [
      'duży atut stajni to naturalne, atrakcyjne tereny wokół Darnawy',
      'organizujemy także tereny sezonowe i rajdy z dodatkowymi atrakcjami',
      'to oferta dla osób, które chcą połączyć rekreację z prawdziwym kontaktem z przyrodą',
    ],
    faq: [
      {
        question: 'Czy każdy może pojechać na teren?',
        answer:
          'Nie. Tereny są przeznaczone dla osób, które czują się pewnie w siodle i są gotowe na jazdę poza placem.',
      },
      {
        question: 'Ile osób potrzeba, aby zorganizować teren?',
        answer:
          'Standardowo organizujemy teren dla minimum dwóch osób, chyba że przy danym terminie ustalimy inaczej.',
      },
      {
        question: 'Czy organizujecie dłuższe rajdy i tereny okolicznościowe?',
        answer:
          'Tak. W sezonie prowadzimy również dłuższe przejazdy, rajdy oraz tereny z dodatkowymi elementami programu.',
      },
    ],
    keywords: [
      'jazda konna w terenie sulechów',
      'teren konny świebodzin',
      'rajd konny lubuskie',
    ],
    relatedNewsIds: [64, 63, 59],
  },
  {
    slug: 'polkolonie-jezdzieckie',
    shortTitle: 'Półkolonie jeździeckie',
    title: 'Półkolonie jeździeckie w Darnawie - Stajnia Decyma',
    description:
      'Półkolonie jeździeckie dla dzieci i młodzieży w Stajni Decyma. Program z jazdą konną, opieką nad końmi i aktywnościami stajennymi.',
    excerpt:
      'Kameralne półkolonie i dni z koniem dla dzieci i młodzieży, z możliwością zapisów na pojedyncze dni albo całe turnusy.',
    image: '/oferta/kolonie.jpg',
    imageAlt: 'Półkolonie jeździeckie w Stajni Decyma',
    priceLabel: 'Od 150 zł za dzień, większe pakiety i turnusy według aktualnej oferty',
    priceNote:
      'W zależności od terminu dostępne są też opcje tygodniowe, specjalne programy sezonowe i wybrane terminy z transportem.',
    audience: [
      'dla dzieci i młodzieży, które chcą aktywnie spędzić dzień lub tydzień w stajni',
      'dla uczestników początkujących i już jeżdżących, z podziałem programu do grupy',
      'dla rodziców szukających kameralnych półkolonii blisko Sulechowa i Świebodzina',
    ],
    scope: [
      'jazda konna dopasowana do poziomu grupy',
      'nauka pielęgnacji konia, prace stajenne i kontakt ze zwierzętami',
      'przekąski, napoje i program dnia w rytmie stajni',
      'sezonowe opcje specjalne: turnusy, jednodniowe półkolonie i wybrane terminy z transportem',
    ],
    location: [
      'zajęcia odbywają się w Darnawie, w spokojnym otoczeniu i kameralnych grupach',
      'przy wybranych terminach oferowane są dodatkowe rozwiązania organizacyjne, w tym transport',
      'każdy turnus ma własny harmonogram, dlatego szczegóły warto potwierdzić przed zapisem',
    ],
    highlights: [
      'jedna z najmocniejszych usług sezonowych stajni',
      'program łączy jazdę konną z realnym poznawaniem życia w stajni',
      'dobrze sprawdza się zarówno jako jednorazowa przygoda, jak i regularny powrót do stajni',
    ],
    faq: [
      {
        question: 'Czy półkolonie są tylko dla dzieci, które już jeżdżą?',
        answer:
          'Nie. Program dopasowujemy do uczestników, dlatego mogą brać w nim udział także osoby początkujące.',
      },
      {
        question: 'Czy można zapisać dziecko tylko na jeden dzień?',
        answer:
          'Tak. W zależności od terminu prowadzimy także jednodniowe półkolonie i dni z koniem.',
      },
      {
        question: 'Czy dostępny jest transport?',
        answer:
          'Przy wybranych terminach tak. Informację o transporcie podajemy w aktualnej ofercie danego turnusu lub terminu.',
      },
    ],
    keywords: [
      'półkolonie jeździeckie sulechów',
      'półkolonie jeździeckie świebodzin',
      'wakacje w siodle lubuskie',
    ],
    relatedNewsIds: [69, 66, 55],
  },
  {
    slug: 'vouchery-podarunkowe',
    shortTitle: 'Vouchery podarunkowe',
    title: 'Vouchery podarunkowe na jazdę konną - Stajnia Decyma',
    description:
      'Voucher na jazdę konną lub usługi Stajni Decyma. Pomysł na prezent dla dzieci, dorosłych i miłośników koni z okolic Sulechowa i Świebodzina.',
    excerpt:
      'Praktyczny prezent dla bliskiej osoby: voucher na wybraną usługę lub kwotę do wykorzystania w Stajni Decyma.',
    image: '/oferta/voucher.jpg',
    imageAlt: 'Voucher podarunkowy Stajni Decyma',
    priceLabel: 'Vouchery od 50 do 500 zł',
    priceNote:
      'Voucher można dopasować do konkretnej usługi lub budżetu. Standardowo jest ważny przez 3 miesiące od zakupu.',
    audience: [
      'dla osób szukających prezentu z doświadczeniem zamiast rzeczy',
      'dla rodzin i znajomych, którzy chcą podarować pierwszą jazdę, teren lub inną usługę',
      'dla klientów, którzy chcą elastycznie wybrać wartość prezentu',
    ],
    scope: [
      'voucher kwotowy lub dopasowany do konkretnej usługi',
      'możliwość zakupu na wybrane jazdy, zajęcia lub usługi dodatkowe',
      'czytelny termin ważności i prosty sposób realizacji po kontakcie ze stajnią',
    ],
    location: [
      'voucher realizowany jest w Stajni Decyma w Darnawie',
      'to wygodna opcja prezentowa dla osób z Sulechowa, Świebodzina i okolicy',
      'szczegóły odbioru i realizacji ustalamy bezpośrednio przy zakupie',
    ],
    highlights: [
      'dobry prezent na urodziny, święta lub wyjątkową okazję',
      'elastyczna kwota i możliwość dopasowania do wieku oraz poziomu osoby obdarowanej',
      'prosta forma zakupu i realizacji po wcześniejszym kontakcie',
    ],
    faq: [
      {
        question: 'Na jakie kwoty można kupić voucher?',
        answer:
          'Vouchery oferujemy w przedziale od 50 do 500 zł, dzięki czemu można je dopasować do konkretnej usługi lub budżetu.',
      },
      {
        question: 'Jak długo ważny jest voucher?',
        answer:
          'Standardowo voucher jest ważny przez 3 miesiące od daty zakupu.',
      },
      {
        question: 'Czy voucher musi dotyczyć jednej konkretnej usługi?',
        answer:
          'Nie zawsze. Można wybrać voucher kwotowy albo uzgodnić prezent pod konkretną usługę.',
      },
    ],
    keywords: [
      'voucher jazda konna sulechów',
      'voucher jazda konna świebodzin',
      'prezent jazda konna lubuskie',
    ],
    relatedNewsIds: [65, 51, 43],
  },
  {
    slug: 'urodziny-w-stajni',
    shortTitle: 'Urodziny w stajni',
    title: 'Urodziny w stajni - imprezy okolicznościowe z końmi',
    description:
      'Urodziny w stajni w Darnawie: kameralna impreza z końmi, aktywnościami i programem dopasowanym do grupy.',
    excerpt:
      'Nietypowy pomysł na urodziny dla dziecka lub małej grupy: kontakt z końmi, aktywność na świeżym powietrzu i wyjątkowa atmosfera stajni.',
    image: '/news/uro.jpg',
    imageAlt: 'Urodziny w stajni w Stajni Decyma',
    priceLabel: 'Wycena indywidualna zależnie od programu i liczby uczestników',
    priceNote:
      'Koszt zależy od zakresu atrakcji, długości wydarzenia, liczby osób i dodatkowych elementów programu.',
    audience: [
      'dla rodzin szukających nietypowych urodzin blisko natury',
      'dla dzieci i małych grup, które chcą świętować w otoczeniu koni',
      'dla osób, które wolą kameralne wydarzenie zamiast standardowej sali zabaw',
    ],
    scope: [
      'program ustalany indywidualnie do wieku i liczby uczestników',
      'kontakt z końmi i aktywności na terenie stajni',
      'możliwość połączenia z ogniskiem, zdjęciami lub dodatkowymi atrakcjami',
      'pomoc w ułożeniu wydarzenia tak, aby było wygodne organizacyjnie dla rodziców',
    ],
    location: [
      'urodziny organizujemy w Stajni Decyma w Darnawie',
      'to dobra opcja dla rodzin z Sulechowa, Świebodzina i okolicznych miejscowości',
      'szczegóły programu ustalamy indywidualnie przed rezerwacją terminu',
    ],
    highlights: [
      'oferta o charakterze bardziej kameralnym niż masowym',
      'kontakt z końmi buduje wyjątkowe wspomnienia i wyróżnia wydarzenie',
      'program można połączyć z innymi usługami stajni',
    ],
    faq: [
      {
        question: 'Czy program urodzin dopasowujecie do wieku uczestników?',
        answer:
          'Tak. Zakres atrakcji i przebieg wydarzenia ustalamy indywidualnie do wieku dzieci oraz wielkości grupy.',
      },
      {
        question: 'Czy urodziny mogą obejmować ognisko lub dodatkowe atrakcje?',
        answer:
          'Tak. W zależności od ustaleń program może obejmować również ognisko, zdjęcia lub inne dodatki dostępne w stajni.',
      },
      {
        question: 'Jak wygląda wycena takiego wydarzenia?',
        answer:
          'Wycena jest indywidualna, ponieważ zależy od liczby uczestników, długości spotkania i wybranych atrakcji.',
      },
    ],
    keywords: [
      'urodziny w stajni sulechów',
      'urodziny z końmi świebodzin',
      'impreza urodzinowa z końmi lubuskie',
    ],
    relatedNewsIds: [40, 30, 67],
  },
  {
    slug: 'wycieczki-szkolne',
    shortTitle: 'Wycieczki szkolne',
    title: 'Wycieczki szkolne i grupowe do stajni - Stajnia Decyma',
    description:
      'Wycieczki szkolne i grupowe do Stajni Decyma w Darnawie. Kontakt z końmi, pokaz życia stajni i program dostosowany do grupy.',
    excerpt:
      'Oferta dla szkół, przedszkoli i zorganizowanych grup, które chcą odwiedzić stajnię i spędzić czas aktywnie oraz edukacyjnie.',
    image: '/oferta/wycieczka.jpg',
    imageAlt: 'Wycieczka szkolna w Stajni Decyma',
    priceLabel: 'Program i wycena ustalane indywidualnie',
    priceNote:
      'Koszt zależy od liczby uczestników, wieku grupy, długości wizyty i wybranych aktywności.',
    audience: [
      'dla przedszkoli, szkół podstawowych i innych grup zorganizowanych',
      'dla nauczycieli i opiekunów, którzy chcą połączyć edukację z ruchem i kontaktem ze zwierzętami',
      'dla lokalnych grup z Sulechowa, Świebodzina i całego regionu lubuskiego',
    ],
    scope: [
      'prezentacja życia stajni i podstaw opieki nad końmi',
      'kontakt z końmi w bezpiecznej formule dopasowanej do grupy',
      'możliwość poszerzenia programu o ognisko lub dodatkowe aktywności',
      'organizacja wizyty po wcześniejszym ustaleniu terminu i liczebności grupy',
    ],
    location: [
      'stajnia znajduje się w Darnawie, w spokojnym miejscu sprzyjającym wyjazdom grupowym',
      'program dopasowujemy do wieku uczestników, czasu pobytu i celu wizyty',
      'to dobra propozycja na lokalną wycieczkę szkolną bez dalekiego wyjazdu',
    ],
    highlights: [
      'edukacyjny i jednocześnie atrakcyjny dla dzieci kontakt z końmi',
      'kameralne warunki i elastyczne dopasowanie programu do grupy',
      'możliwość połączenia wizyty z innymi elementami oferty stajni',
    ],
    faq: [
      {
        question: 'Czy oferta jest tylko dla szkół?',
        answer:
          'Nie. Organizujemy także wizyty dla innych grup zorganizowanych, jeśli program i termin uda się dobrze dopasować.',
      },
      {
        question: 'Jak ustalacie program wycieczki?',
        answer:
          'Program ustalamy indywidualnie po poznaniu wieku uczestników, liczby osób i oczekiwanego czasu wizyty.',
      },
      {
        question: 'Czy trzeba rezerwować termin z wyprzedzeniem?',
        answer:
          'Tak. Przy wycieczkach grupowych warto skontaktować się wcześniej, aby dopasować termin i zakres programu.',
      },
    ],
    keywords: [
      'wycieczka szkolna stajnia sulechów',
      'wycieczka szkolna konie świebodzin',
      'wycieczka grupowa do stajni lubuskie',
    ],
    relatedNewsIds: [47, 30, 46],
  },
];

export function getOfferServiceHref(slug: OfferServiceSlug): string {
  return `/oferta/${slug}`;
}

export function getOfferServiceBySlug(slug: string): OfferService | undefined {
  return OFFER_SERVICES.find((service) => service.slug === slug);
}

export function getOfferServiceLabel(slug: OfferServiceSlug): string {
  return getOfferServiceBySlug(slug)?.shortTitle ?? 'Oferta';
}
