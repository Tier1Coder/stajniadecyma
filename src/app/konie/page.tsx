import HorsesClient from './HorsesClient';

export const metadata = {
  title: 'Nasze konie | Stajnia Decyma',
  description:
    'Poznaj konie Stajni Decyma. Każdy koń ma inny charakter i predyspozycje, dzięki czemu dobieramy jazdy do poziomu jeźdźca.',
  alternates: { canonical: '/konie' },
};

export default function KoniePage() {
  return <HorsesClient />;
}
