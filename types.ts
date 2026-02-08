export interface NavItem {
  label: string;
  path: string;
}

export interface CurriculumItem {
  week: number;
  title: string;
  description: string;
  details: string[];
  isOffline: boolean;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  content: string;
  image?: string;
  date: string;
}

export interface InstructorExperience {
  year: string;
  title: string;
  description: string;
}

export interface PricingOption {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
  isPopular?: boolean;
}
