import HorsesClient from './HorsesClient';

export const metadata = {
  title: 'Nasze konie | Stajnia Decyma Darnawa',
  description:
    'Poznaj konie Stajni Decyma w Darnawie. Sprawdź ich charakter i dobór do poziomu jeźdźca.',
  alternates: { canonical: '/konie' },
};

export default function KoniePage() {
  return <HorsesClient />;
}
