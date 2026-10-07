import type { FaqItem, GalleryItem, ProcessStep } from "@/lib/types";

export const reformasMeta = {
  title: "Reforma integral de vivienda",
  description:
    "Proyecto, licencias, construcción, instalaciones y dirección de obra. Reforma integral coordinada con diseño y mobiliario en Madrid.",
};

export const reformasHero = {
  label: "REFORMAS",
  title: "Del proyecto a la vivienda terminada",
  description:
    "Coordinamos obra, instalaciones y acabados como extensión del diseño: un único equipo, un único criterio desde el primer plano hasta la entrega.",
  cta: "Hablar de mi proyecto",
  image: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2560&q=90",
    alt: "Salón en reforma integral con distribución abierta y acabados contemporáneos",
  },
};

export const reformasEditorial = {
  label: "ENFOQUE",
  verticalLabel: "OBRA INTEGRADA",
  title: "Un criterio desde el plano hasta la entrega",
  paragraphs: [
    "La reforma no es solo obra: es secuencia, oficios y decisiones que deben respetar el diseño acordado.",
    "Coordinamos licencias, instalaciones y acabados con interiorismo y mobiliario para que la vivienda llegue terminada, no a medias.",
    "Un solo interlocutor, calendario claro y calidad constructiva alineada con la arquitectura del espacio.",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
    alt: "Detalle de reforma residencial con materiales naturales",
  },
};

export const reformasProcessSection = {
  label: "PROCESO",
  title: "Del espacio vacío a la casa terminada",
  lead: "Seis fases enlazadas con diseño, mobiliario y climatización cuando el proyecto es integral.",
};

export const reformasScope = [
  {
    title: "Proyecto y licencias",
    description:
      "Planos, memoria técnica y tramitación cuando el alcance lo requiera.",
  },
  {
    title: "Construcción",
    description:
      "Demoliciones, albañilería, tabiquería y coordinación de oficios en obra.",
  },
  {
    title: "Instalaciones",
    description:
      "Electricidad, fontanería, climatización y domótica integradas en el diseño.",
  },
  {
    title: "Dirección de obra",
    description:
      "Seguimiento de plazos, calidad y comunicación con un solo interlocutor.",
  },
  {
    title: "Acabados",
    description:
      "Pavimentos, pintura, carpintería interior y detalle constructivo.",
  },
  {
    title: "Entrega",
    description:
      "Vivienda lista para habitar, alineada con mobiliario e interiorismo del proyecto.",
  },
];

export const reformasGallery: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
      alt: "Salón tras reforma integral",
    },
    caption: "Live",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
      alt: "Dormitorio reformado",
    },
    caption: "Live",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      alt: "Cocina tras obra",
    },
    caption: "Live",
  },
];

export const reformasProcess: ProcessStep[] = [
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

export const reformasFaq: FaqItem[] = [
  {
    id: "licencias",
    question: "¿Gestionáis licencias de obra?",
    answer:
      "Sí, cuando el proyecto lo requiere tramitamos la documentación necesaria y coordinamos con el resto del calendario de obra.",
  },
  {
    id: "interlocutor",
    question: "¿Tendré un solo interlocutor durante la reforma?",
    answer:
      "Sí. Un equipo coordina diseño, obra y acabados para que no tengas que gestionar oficios por separado.",
  },
  {
    id: "zona",
    question: "¿Dónde realizáis reformas integrales?",
    answer:
      "Principalmente en Madrid capital y municipios del noroeste: Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja y alrededores.",
  },
  {
    id: "climate",
    question: "¿Incluís climatización en la reforma?",
    answer:
      "Sí. Climatización, aerotermia y suelo radiante se diseñan con el proyecto en nuestra división AIREFORMAS Climate.",
  },
];

export const reformasCta = {
  title: "Hablemos de tu reforma",
  description:
    "Cuéntanos el estado de la vivienda y tus objetivos. Te proponemos el siguiente paso con claridad.",
};
