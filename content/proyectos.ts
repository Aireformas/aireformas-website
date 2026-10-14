import type { GalleryItem } from "@/lib/types";

export const proyectosMeta = {
  title: "Proyectos",
  description:
    "Selección de proyectos residenciales donde convergen arquitectura interior, reforma integral, mobiliario a medida y climatización invisible en Madrid y noroeste.",
};

export const proyectosPageIntro = {
  label: "PORTFOLIO ARQUITECTÓNICO",
  title: "Viviendas diseñadas para ser vividas",
  description:
    "Selección de proyectos residenciales donde convergen arquitectura interior, reforma integral, mobiliario a medida y climatización invisible.",
};

/** @deprecated Use proyectosPageIntro — kept for legacy imports */
export const proyectosHero = {
  label: "PROYECTOS",
  title: proyectosPageIntro.title,
  description: proyectosPageIntro.description,
  image: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90",
    alt: "Proyecto residencial aireformas",
  },
};

export type ProjectCategory =
  | "unifamiliar"
  | "aticos"
  | "reformas-integrales"
  | "singulares";

export type ProjectFilterId = "all" | ProjectCategory;

export const projectFilterOptions: { id: ProjectFilterId; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "unifamiliar", label: "Viviendas unifamiliares" },
  { id: "aticos", label: "Áticos & Apartamentos" },
  { id: "reformas-integrales", label: "Reformas integrales" },
  { id: "singulares", label: "Espacios singulares" },
];

export type ProjectStat = {
  label: string;
  value: string;
};

export const featuredProject: {
  badge: string;
  title: string;
  meta: string[];
  cta: { label: string; href: string };
  categories: ProjectCategory[];
  image: GalleryItem["image"];
} = {
  badge: "PROYECTO DESTACADO · 2024",
  categories: ["unifamiliar", "singulares"],
  title: "Villa Mirasierra · Madrid",
  meta: ["340 m²", "Interiorismo & Arquitectura", "Climatización invisible", "Mobiliario a medida"],
  cta: { label: "Ver caso de estudio", href: "/contacto" },
  image: {
    src: "/images/projects/villa-mirasierra-2560.jpg",
    alt: "Villa moderna de dos plantas en Mirasierra, Madrid, al anochecer con pérgola de acero, roble y olivos iluminados",
  },
};

export const portfolioGridIntro = {
  label: "PROYECTOS RECIENTES",
  title: "Viviendas recientes",
  lead:
    "Intervenciones que equilibran la nobleza de los materiales naturales y el rigor técnico de la climatización por aerotermia oculta.",
};

export type PortfolioProjectLayout = "large-left" | "large-right" | "compact";

export type PortfolioProjectFull = {
  slug: string;
  number: string;
  locationLabel: string;
  title: string;
  description: string;
  image: GalleryItem["image"];
  stats: ProjectStat[];
  layout: PortfolioProjectLayout;
  categories: ProjectCategory[];
  areaDisplay?: string;
  inquiryHref?: string;
};

export const portfolioProjects: PortfolioProjectFull[] = [
  {
    slug: "villa-las-lomas-pozuelo",
    number: "01",
    locationLabel: "POZUELO DE ALARCÓN · MADRID",
    title: "Villa Las Lomas, Pozuelo",
    description:
      "Reforma integral de una vivienda de 240 m². Se implementó suelo radiante refrescante invisible y carpintería continua de nogal para unificar salón, biblioteca y zona exterior.",
    image: {
      src: "/images/projects/villa-las-lomas-pozuelo-salon-2560.jpg",
      alt: "Salón doble altura en Villa Las Lomas, Pozuelo: luz natural, sofá en piel, galería de arte y vegetación interior",
    },
    stats: [
      { label: "Superficie", value: "240 m²" },
      { label: "Intervención", value: "Integral + Clima + Obra" },
      { label: "Finalización", value: "Primavera 2024" },
    ],
    layout: "large-left",
    categories: ["unifamiliar", "reformas-integrales"],
    inquiryHref: "/contacto",
  },
  {
    slug: "apartment-salamanca",
    number: "02",
    locationLabel: "BARRIO DE SALAMANCA · MADRID",
    title: "Apartment Salamanca",
    description:
      "Distribución diáfana de 175 m² recuperando molduras de escayola artesanales y combinándolas con un gran panelamiento arquitectónico de roble tostado con conductos lineales integrados.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxXWm6syqMH0lnWFzNOny_9rMnDCRkenu61luoYjpigJnhQLtOPC_QNyiDC0g6INU4IE96dufgt5w1DgLjEpZDjVHls9OVtX8Nqy5f2a5T4os8R2RTT2CTf1A5OPNYv_HV5Brf9K6UVak2YJ7-k48REe0yv59-REtoYSwWk-xcBaG1zji_7m2Fv5w_o1vxqzolfOVNIYuDcbJuFYFNr295XzxS6vsnI0r_O57ChBVSSfRrR1Z246Gj",
      alt: "Salón y cocina abiertos en el barrio de Salamanca, Madrid",
    },
    stats: [
      { label: "Superficie", value: "175 m²" },
      { label: "Servicios", value: "Interiorismo y Clima" },
      { label: "Mobiliario", value: "Diseño bespoke" },
    ],
    layout: "large-right",
    categories: ["aticos", "reformas-integrales"],
    inquiryHref: "/contacto",
  },
  {
    slug: "villa-las-rozas",
    number: "03",
    locationLabel: "BOADILLA / LAS ROZAS",
    title: "Villa Las Rozas",
    description:
      "310 m² de arquitectura pensada desde la conexión interior-exterior. Grandes cerramientos correderos empotrados en tabiquería para desdibujar la frontera con el jardín.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOA8lMuVeEtMLWrh0sQKzilzt3e210LOaA4wW0itlYHX2jtoeR1wUU-4LoW56R_nsL-FRFnEDDAblj2wlY9tVB8P8TVD1JE3ITvih5ntwJuLREwrRL_iZIRvRPRlWzoSqmFX06Mk6ZZHoHuy2QvO-O0eNx_1EvMORkZY-XARz_d6lYRga86OS9B1LDM7esgmNiGWt4Iq7bDZHUD3qbYQwdZVG7qn0tn6zNx7Fph1FIwDMrx0hRvTMl",
      alt: "Villa contemporánea en Las Rozas con fachada acristalada y jardín",
    },
    stats: [
      { label: "Superficie", value: "310 m²" },
      { label: "Enfoque", value: "Arquitectura de luz" },
      { label: "Eficiencia", value: "Aerotermia Clase A" },
    ],
    layout: "large-left",
    categories: ["unifamiliar"],
    inquiryHref: "/contacto",
  },
  {
    slug: "atico-chamberi",
    number: "04",
    locationLabel: "CHAMBERÍ · MADRID",
    title: "Ático Chamberí",
    description:
      "Reforma integral de ático con terraza perimetral, cocina escultórica oculta y climatización zonalizada sin rejillas a la vista.",
    image: {
      src: "/images/projects/atico-chamberi.jpg",
      alt: "Ático en Chamberí con cocina de roble y isla de piedra, terraza perimetral y vistas a los tejados de Madrid",
    },
    layout: "compact",
    categories: ["aticos", "reformas-integrales"],
    areaDisplay: "190 m²",
    stats: [],
    inquiryHref: "/contacto",
  },
  {
    slug: "casa-el-escorial",
    number: "05",
    locationLabel: "EL ESCORIAL · MADRID",
    title: "Casa de Campo El Escorial",
    description:
      "Rehabilitación rural respetuosa de piedra original y microcemento térmico continuo, con vistas a la sierra y máximo aislamiento pasivo.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc_iBMgyB26EFD6CwVPADErMBf8pnZJveSvOmBl0LhhHUDCEqSqhVbGVC1TB2LR83Xy4RUo0_38zI_BrMX23MxH79NP1E3MRTdHCnBt8XwopfnECF-mS1PqUdZdiZ9GOMlUzSydzq4F6T2gn1BOTSukA5sjgoKXgpE7PpNwH462SqeiiaaXLcPjAfmwOpbDpVDPE4hRGqTihsV8ARWzXn7jY3bigV04M21LnYbpX3L9EholLNgqDoZ",
      alt: "Interior de casa de campo en El Escorial con piedra y microcemento",
    },
    layout: "compact",
    categories: ["unifamiliar", "singulares"],
    areaDisplay: "420 m²",
    stats: [],
    inquiryHref: "/contacto",
  },
];

export const methodologySection = {
  label: "METODOLOGÍA DE ESTUDIO",
  title: "Cada proyecto, una mirada integral",
  lead:
    "No concebimos la reforma sin el interiorismo, ni el interiorismo sin la climatización. Resolvemos la ecuación completa para crear hogares sin fisuras.",
};

export type MethodologyPillar = {
  number: string;
  title: string;
  description: string;
  footnote: string;
  icon: "check_circle" | "air" | "handshake";
};

export const methodologyPillars: MethodologyPillar[] = [
  {
    number: "01",
    title: "Coherencia técnica y estética",
    description:
      "Un único interlocutor desde el primer anteproyecto conceptual hasta la colocación de la última pieza de iluminación y entrega de llaves.",
    footnote: "Garantía de ejecución",
    icon: "check_circle",
  },
  {
    number: "02",
    title: "Tecnología invisible",
    description:
      "El confort térmico y acústico se siente, no se ve. Rejillas ocultas, suelo radiante continuo y domótica integrada que respeta la pureza visual de los espacios.",
    footnote: "Clima y eficiencia A+",
    icon: "air",
  },
  {
    number: "03",
    title: "Artesanía y detalle",
    description:
      "Ebanistería a medida, piedras naturales seleccionadas en cantera y revocos a la cal aplicados por artesanos especialistas en arquitectura residencial.",
    footnote: "Materiales nobles",
    icon: "handshake",
  },
];

export const proyectosCta = {
  label: "CONTACTO",
  title: "¿Tu vivienda puede ser el próximo proyecto?",
  description:
    "Hablemos de distribución, materiales y alcance. Analizamos la viabilidad técnica y el potencial estético de tu hogar sin compromiso.",
};

/** Tarjetas simplificadas para la home */
export type ProjectCard = {
  slug: string;
  location: string;
  typology: string;
  area: string;
  image: GalleryItem["image"];
  href: string | null;
};

export const projectCards: ProjectCard[] = portfolioProjects
  .filter((p) => p.layout !== "compact")
  .slice(0, 3)
  .map((p) => ({
    slug: p.slug,
    location: p.locationLabel.split("·")[0]?.trim() ?? p.locationLabel,
    typology: p.title,
    area: p.stats.find((s) => s.label === "Superficie")?.value ?? p.areaDisplay ?? "",
    image: p.image,
    href: p.inquiryHref ?? null,
  }));
