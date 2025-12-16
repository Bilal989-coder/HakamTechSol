import type { StaticImageData } from 'next/image';

export type BlogItem = {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
};

export type ServiceBanner = {
  id: number;
  title: string;
  description: string;
  href?: string;         // optional: per-card link
  imageUrl?: string;     // optional: per-card bg image
};

export type HeroDetails = {
  title: string;
  description: string;
  
  imageUrl?: string; // optional override for the banner
};


export type FeatureItem = {
  title: string;
  subtitle?: string;
  icon?: string;   // emoji or small text icon
  href?: string;   // OPTIONAL: link to open a detail page
};

export type WhyChooseData = {
  heading?: string;
  features: FeatureItem[];
  benefitsHeading?: string;
  benefits: string[];
  theme?: {
    primary?: string; // main accent (cards, checks)
    accent?: string;  // secondary accent (badge, glow)
  };
};