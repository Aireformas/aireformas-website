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

export type DistributionAspect = "panorama" | "portrait";

export type DistributionItem = {
  id: string;
  number: string;
  category: string;
  title: string;
  caption: string;
  aspect: DistributionAspect;
  image: ImageAsset;
};

export type CatalogPlanKind = "line" | "parallel" | "l" | "u" | "peninsula";

export type CatalogPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type CatalogPanel = {
  id: string;
  chip: string;
  title: string;
  lead: string;
  variants: readonly string[];
  photos: readonly CatalogPhoto[];
  plan?: CatalogPlanKind;
};

export type FinishSwatch = {
  id: string;
  label: string;
};

export type FinishGroup = {
  id: string;
  label: string;
  swatches: readonly FinishSwatch[];
};

export type FinishPaletteCopy = {
  chip: string;
  title: string;
  lead: string;
  groups: readonly FinishGroup[];
};
