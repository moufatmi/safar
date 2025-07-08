export interface Experience {
  id: string;
  title: {
    en: string;
  };
  description: {
    en: string;
  };
  price: number;
  location: {
    en: string;
  };
  duration: {
    en: string;
  };
  image: string;
  gallery: string[];
  whatsapp: string;
  featured: boolean;
}

export interface Language {
  code: 'en';
  name: string;
  dir: 'ltr';
}

export interface Translation {
  [key: string]: {
    en: string;
  };
}

export type SupabaseExperience = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  duration: string;
  image: string;
  gallery: string[];
  whatsapp: string;
  featured: boolean;
  pdfUrl?: string;
  region?: string;
  rating?: number;
  rating_count?: number;
};