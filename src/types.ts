export interface Event {
  id: string;
  slug: string;
  title: string;
  artist: string;
  venueId: string;
  venueName: string;
  category: 'Concerts' | 'Casino Resort Shows' | 'Theater & Stage' | 'Comedy' | 'Family Shows';
  date: string;
  time: string;
  priceRange: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Venue {
  id: string;
  slug: string;
  name: string;
  location: string;
  capacity: string;
  description: string;
  imageUrl: string;
  facilities: string[];
  parking: string;
  dining: string;
  isCasinoResort?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}
