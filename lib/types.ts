export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type NavItem = {
  label: string;
  href: string | null;
  comingSoon?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  href: string | null;
  comingSoon?: boolean;
  image: ImageAsset;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: ImageAsset;
};

export type TrustStat = {
  value: string;
  label: string;
};

export type GalleryItem = {
  image: ImageAsset;
  caption?: string;
};
