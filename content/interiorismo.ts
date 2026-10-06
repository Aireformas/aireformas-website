import type { GalleryItem, ProcessStep } from "@/lib/types";

export const interiorismoMeta = {
  title: "Interiorismo",
  description:
    "Diseño de interiores residencial, mobiliario a medida, iluminación y reformas. Espacios únicos y armónicos.",
};

export const interiorismoHero = {
  label: "INTERIORISMO",
  title: "Del espacio vacío al interior personalizado",
  description:
    "Diseñamos el espacio que necesitas y coordinamos equipos de profesionales para lograr un resultado único y armónico.",
  image: {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
    alt: "Salón con diseño de interiorismo y luz natural",
  },
};

export const editorialBlock = {
  title: "Luz, color, textura y sentido",
  paragraphs: [
    "Realizamos proyectos adaptando tus ilusiones y nuestros conocimientos, tus recursos y nuestras técnicas, tus expectativas y nuestra experiencia.",
    "Un buen diseño de interiores aporta una dimensión nueva al espacio: coherencia con el contexto, respeto al entorno y tecnología al servicio del confort.",
    "Convertimos los espacios en lugares donde vivir mejor, con materiales de calidad y bajo impacto ambiental.",
  ],
};

export const interiorismoServices = [
  {
    title: "Diseño residencial",
    description:
      "Distribución, paleta cromática, textiles y piezas clave para cada estancia.",
  },
  {
    title: "Mobiliario a medida",
    description:
      "Estanterías, muebles TV, paneles y soluciones integradas en la arquitectura.",
  },
  {
    title: "Iluminación",
    description:
      "Plan de luz por capas: general, puntual y ambiental, con luminarias seleccionadas.",
  },
  {
    title: "Reformas y ampliaciones",
    description:
      "Coordinación de obra y acabados para proyectos integrales de interior.",
  },
];

export const interiorismoGallery: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
      alt: "Salón después de proyecto de interiorismo",
    },
    caption: "Salón · After",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
      alt: "Dormitorio con textiles y luz cálida",
    },
    caption: "Dormitorio",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
      alt: "Detalle decorativo con plantas y madera",
    },
    caption: "Detalle",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      alt: "Cocina integrada con salón",
    },
    caption: "Cocina abierta",
  },
];

export const interiorismoProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Briefing",
    description: "Estilo de vida, referencias y necesidades funcionales.",
  },
  {
    number: "02",
    title: "Concepto",
    description: "Moodboard, planos y selección de materiales.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Detalle de mobiliario, iluminación y coordinación de oficios.",
  },
  {
    number: "04",
    title: "Styling final",
    description: "Puesta en escena y entrega del espacio listo para disfrutar.",
  },
];

export const interiorismoCta = {
  title: "Solo tienes que ponerte en contacto con nosotros",
  description:
    "Te escuchamos y te proponemos el camino más claro para tu proyecto de interiorismo.",
};
