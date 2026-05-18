export type NavigationItem = {
  label: string;
  href: string;
};

export type Tour = {
  title: string;
  slug: string;
  region: string;
  dates: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
};

export const site = {
  name: 'Oldtimer Urlaubsreisen',
  claim: 'Premium-Automobilreisen 2026',
  email: 'service@oldtimer-urlaubsreisen.de',
  phone: '+49 (0)8846 9299 773',
  baseUrl: 'https://oldtimer-urlaubsreisen.de'
};

export const navigation: NavigationItem[] = [
  { label: 'Start', href: '/' },
  { label: 'Konzept', href: '/konzept' },
  { label: 'Reisen', href: '/reisen' },
  { label: 'Sportwagen', href: '/sportwagen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' }
];

export const trustStats = [
  { value: '15', label: 'Fahrzeuge maximal pro Reise' },
  { value: '2', label: 'Speed-Gruppen für flexible Tagesetappen' },
  { value: '24/7', label: 'Reiseleitung und Mechaniker-Support' }
];

export const features = [
  {
    title: 'Kleine Gruppen',
    text: 'Limitierte Plätze schaffen entspannte Etappen, echte Gespräche und eine hochwertige Reiseatmosphäre.'
  },
  {
    title: 'Sorglos organisiert',
    text: 'Hotels, Routen, Parkplätze, Eintritte und Timing sind vorab professionell geplant.'
  },
  {
    title: 'Begleitservice',
    text: 'Erfahrene Guides und ein Profi-Mechaniker sorgen für Sicherheit und Flexibilität unterwegs.'
  },
  {
    title: 'Kuratierte Routen',
    text: 'Schöne Straßen, genussvolle Stopps und Erlebnisse abseits touristischer Standardprogramme.'
  }
];

export const tours: Tour[] = [
  {
    title: 'Schwaben & Oberbayern Tour',
    slug: 'schwaben-oberbayern-tour',
    region: 'Deutschland',
    dates: '30.04.2026 – 03.05.2026',
    duration: '4 Tage',
    price: 'ab 1.690 € p. P.',
    image: 'https://images.unsplash.com/photo-1534189280837-d78370e695a7?auto=format&fit=crop&w=1200&q=80',
    description:
      'Genussvolle Straßen durch Bayerisch-Schwaben, Hallertau und Oberbayern mit Donaudurchbruch, AUDI-Exponaten und historischen Altstadtmomenten.',
    highlights: ['Hotel Schloss Leitheim', 'Donaudurchbruch', 'AUDI-Exponate', 'Hopfenverkostung']
  },
  {
    title: 'Bäderfahrt nach Tschechien',
    slug: 'baederfahrt-tschechien',
    region: 'Tschechien',
    dates: '11.05.2026 – 14.05.2026',
    duration: '4 Tage',
    price: 'ab 1.690 € p. P.',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80',
    description:
      'K. u. K.-Frühling in Böhmen mit Grandhotel Pupp, Moser Glasmanufaktur, Kolonnaden und stilvoller Kulinarik.',
    highlights: ['Grandhotel Pupp', 'Moser Glas', 'Kolonnaden', 'Fine Dining']
  },
  {
    title: 'Alpenpässe & Seen',
    slug: 'alpenpaesse-seen',
    region: 'DACH',
    dates: '18.06.2026 – 21.06.2026',
    duration: '4 Tage',
    price: 'ab 1.890 € p. P.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description:
      'Kurvige Passstraßen, Seepanoramen und ausgewählte Hideaways für Fahrerinnen und Fahrer, die besondere Landschaften lieben.',
    highlights: ['Panorama-Pässe', 'Boutique-Hotels', 'See-Dinner', 'Foto-Stopps']
  }
];

export const faqs = [
  {
    question: 'Was ist bei den Reisen inkludiert?',
    answer:
      'Je nach Reise sind Hotels, ausgewählte Rahmenprogramme, Eintritte, Führungen, Roadbook und Reisebegleitung inkludiert. Fahrzeug, Benzin und persönliche Extras sind nicht enthalten.'
  },
  {
    question: 'Wie viele Fahrzeuge nehmen teil?',
    answer:
      'Die Gruppen sind bewusst klein gehalten. In der Regel nehmen maximal 15 Fahrzeuge teil, damit Tempo, Parken und persönliche Betreuung hochwertig bleiben.'
  },
  {
    question: 'Wer begleitet die Touren?',
    answer:
      'Jede Reise wird durch erfahrene Tourguides begleitet. Zusätzlich fährt bei ausgewählten Touren ein Profi-Mechaniker mit Servicefahrzeug mit.'
  },
  {
    question: 'Welche Fahrzeuge sind willkommen?',
    answer:
      'Oldtimer bis Baujahr 1990 sind willkommen. Youngtimer und moderne Sportwagen können nach vorheriger Abstimmung teilnehmen.'
  }
];
