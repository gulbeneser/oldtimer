export interface Tour {
  id: string;
  dateRange: string;
  country: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  price: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}
