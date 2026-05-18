import type { Tour } from '../types';

export const tours: Tour[] = [
  {
    id: 'schwaben-oberbayern',
    dateRange: '30.04.2026 – 03.05.2026',
    country: 'DE',
    title: 'Schwaben & Oberbayern Tour',
    description: 'Durch Bayerisch-Schwaben, Hallertau und das nördliche Oberbayern. Mit Donaufahrt, AUDI-Exponaten und historischen Stopps.',
    imageUrl: 'https://images.unsplash.com/photo-1534189280837-d78370e695a7?auto=format&fit=crop&w=1000&q=80',
    tags: ['15 Oldtimer', '4 Tage', 'ab 1.690 €'],
    price: '1.690,00 €',
  },
  {
    id: 'tschechien-baeder',
    dateRange: '11.05.2026 – 14.05.2026',
    country: 'CZ',
    title: 'Bäderfahrt nach Tschechien',
    description: 'K. u. K.-Frühling in Böhmen. Grandhotel Pupp, Moser Glasmanufaktur, Kolonnaden, Becherovka und Fine-Dining.',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1000&q=80',
    tags: ['15 Oldtimer', '4 Tage', 'ab 1.690 €'],
    price: '1.690,00 €',
  },
  {
    id: 'sachsen',
    dateRange: '14.05.2026 – 17.05.2026',
    country: 'DE',
    title: 'Oldtimerreise durch Sachsen',
    description: 'Glashütte, Erzgebirge, Schloss Augustusburg und exklusive Begegnungen bei einem renommierten Oldtimer-Restaurator.',
    imageUrl: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1000&q=80',
    tags: ['15 Oldtimer', '4 Tage', 'ab 1.690 €'],
    price: '1.690,00 €',
  },
];
