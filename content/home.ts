import type { GalleryItem, ProcessStep, ServiceCard } from "@/lib/types";
import { site } from "@/content/site";
import { projectCards } from "@/content/proyectos";

export const homeMeta = {
  title: "Espacios pensados al detalle",
  description:
    "Diseñamos viviendas para ser vividas: interiorismo, reforma, mobiliario y climatización integrados en un único proyecto en Madrid y noroeste.",
};

export const homeHero = {
  seoTitle:
    "Estudio de interiorismo y reforma integral en Madrid | aireformas",
  titleLine1: "ESPACIOS PENSADOS",
  titleLine2: "AL DETALLE",
  subtitle: site.shortTagline,
  pillars: site.brandLine,
  scrollLabel: "Scroll",
  primaryCta: { label: "Descubrir proyectos", href: "/proyectos" },
  secondaryCta: { label: "Hablar de mi proyecto", href: "/contacto" },
  heroImage: {
    src: "/images/hero-interior-2560.jpg",
    alt: "Vivienda integral: interiorismo, carpintería a medida, reforma y confort en un único espacio",
  },
  stripImages: [
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&h=1200&q=90",
      alt: "Detalle de luz arquitectónica en interior moderno",
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&h=1200&q=90",
      alt: "Detalle de madera y proporción",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&h=1200&q=90",
      alt: "Textura de piedra y material",
    },
  ],
};

export const lightArchitectureSection = {
  label: "01 LUZ",
  verticalLabel: "UNA ARQUITECTURA DE LA LUZ",
  title: "Material, proporción y silencio",
  image: {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=90",
    alt: "Interior moderno con luz cálida y materiales naturales",
  },
};

export const homeProjectsSection = {
  label: "02 PROYECTOS",
  title: "Viviendas recientes",
};

export const homeFeaturedProjects = projectCards;

export const philosophySection = {
  label: "03 FILOSOFÍA",
  verticalLabel: "NUESTRA HISTORIA",
  title: "Nuestra forma de entender una vivienda",
  paragraphs: [
    "Un buen proyecto no termina en lo que ves.",
    "Diseñamos el espacio, los materiales y el mobiliario, pero también aquello que no se ve: iluminación, climatización, instalaciones y tecnología.",
    "Todo debe funcionar como un único sistema.",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90",
    alt: "Espacio residencial con madera, luz y proporción",
  },
};

export const fourPillarsSection = {
  label: "04 PILARES",
  title: "Cuatro disciplinas, un proyecto",
};

export const homePillars: ServiceCard[] = [
  {
    title: "Interior design",
    description:
      "Distribución, materiales, iluminación, cocinas, baños y carpintería.",
    href: "/interiorismo",
    image: {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      alt: "Salón con diseño de interiores",
    },
  },
  {
    title: "Renovation",
    description:
      "Proyecto, licencias, construcción, instalaciones y dirección de obra.",
    href: "/reformas",
    image: {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      alt: "Vivienda en proceso de reforma",
    },
  },
  {
    title: "Furniture",
    description:
      "Mobiliario, piezas especiales, textiles e iluminación decorativa.",
    href: "/mobiliario",
    image: {
      src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      alt: "Carpintería y mobiliario a medida",
    },
  },
  {
    title: "Climate",
    description:
      "Aerotermia, suelo radiante, conductos, ACS y control inteligente.",
    href: "/climate",
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      alt: "Confort térmico en salón residencial",
    },
  },
];

export type TimelineStep = {
  phase: string;
  title: string;
  image: GalleryItem["image"];
};

export const projectTimelineSection = {
  label: "05 PROCESO VISUAL",
  title: "Del espacio vacío a la casa terminada",
};

export const projectTimelineSteps: TimelineStep[] = [
  {
    phase: "Before",
    title: "El espacio original",
    image: {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80",
      alt: "Estado previo de la vivienda",
    },
  },
  {
    phase: "Design",
    title: "Plano y concepto",
    image: {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      alt: "Concepto de diseño y materiales",
    },
  },
  {
    phase: "Build",
    title: "Obra coordinada",
    image: {
      src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=700&q=80",
      alt: "Ejecución de obra",
    },
  },
  {
    phase: "Live",
    title: "Vivienda terminada",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
      alt: "Fotografía final del proyecto",
    },
  },
];

export type MaterialTile = {
  id: string;
  title: string;
  caption: string;
  image: GalleryItem["image"];
};

export const materialsSection = {
  label: "06 MATERIALS",
  title: "Materiales que definen el espacio",
};

export const materialTiles: MaterialTile[] = [
  {
    id: "stone",
    title: "Stone",
    caption: "Piedra, continuidad y peso visual.",
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      alt: "Detalle de piedra en interior",
    },
  },
  {
    id: "wood",
    title: "Wood",
    caption: "Calidez, veta y carpintería.",
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
      alt: "Detalle de madera",
    },
  },
  {
    id: "metal",
    title: "Metal",
    caption: "Perfiles, herrajes y línea.",
    image: {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
      alt: "Detalle metálico en mobiliario",
    },
  },
  {
    id: "textile",
    title: "Textile",
    caption: "Capas, tacto y acústica.",
    image: {
      src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80",
      alt: "Textiles en salón",
    },
  },
  {
    id: "light",
    title: "Light",
    caption: "Escenas, sombra y confort.",
    image: {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
      alt: "Luz natural en estancia",
    },
  },
];

export const comfortSection = {
  label: "07 COMFORT",
  temperature: "22°C",
  title: "Confort que se siente",
  subline: "Tecnología que desaparece.",
  tags: [
    "Aerotermia",
    "Suelo radiante",
    "Climatización invisible",
    "ACS",
    "Control inteligente",
  ],
  link: { label: "AIREFORMAS Climate", href: "/climate" },
  image: {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
    alt: "Salón con climatización discreta",
  },
};

export const bespokeSection = {
  label: "08 BESPOKE",
  title: "Made for your space",
  description:
    "Diseñamos piezas que pertenecen a la arquitectura: armarios, vestidores, cocinas, muebles TV y baños.",
  href: "/mobiliario",
  cta: "Descubrir mobiliario",
  image: {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=85",
    alt: "Vestidor a medida con iluminación integrada",
  },
};

export const howWeWorkSection = {
  label: "09 EL PROCESO",
  title: "De la primera visita a la entrega",
  lead: "Seis fases claras con un solo interlocutor.",
};

export const howWeWorkSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Necesidades, estilo de vida, vivienda e inversión.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description: "Distribución, materiales, iluminación y renders.",
  },
  {
    number: "03",
    title: "Planificamos",
    description: "Presupuesto, calendario, licencias y compras.",
  },
  {
    number: "04",
    title: "Construimos",
    description: "Un único equipo coordina toda la ejecución.",
  },
  {
    number: "05",
    title: "Equipamos",
    description: "Mobiliario, iluminación, textiles y tecnología.",
  },
  {
    number: "06",
    title: "Entregamos",
    description: "Tu vivienda completamente terminada.",
  },
];

export const contactSection = {
  label: "CONTACTO",
  title: "Hablar de mi proyecto",
  description:
    "Cuéntanos qué necesitas y te respondemos con una primera orientación sin compromiso.",
};
