import type { TeamMember, Testimonial } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 'ernst',
    name: 'Ernst Behrens',
    role: 'Gründer, Organisator & Reiseleiter',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'maresa',
    name: 'Maresa Schwele',
    role: 'Organisatorin & Reiseleiterin',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'dirk',
    name: 'Dirk Seidel',
    role: 'Profi-Mechaniker',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: '„10 Reisen. 8 Länder. Unzählige Erinnerungen."',
    author: 'Aenny & Alex · Oldtimer-Enthusiasten',
  },
  {
    id: 't2',
    quote: '„Echte Begegnungen, perfekte Organisation und Straßen, die man nicht vergisst."',
    author: 'Britta & Claudius · Porschefans aus NRW',
  },
];
