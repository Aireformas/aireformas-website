import type { GalleryItem, ProcessStep } from "@/lib/types";

export const interiorismoMeta = {
  title: "Interiorismo residencial en Madrid",
  description:
    "Distribución, materiales, iluminación, cocinas y baños. Proyectos de interiorismo residencial integrados con reforma y mobiliario en Madrid.",
};

export const interiorismoHero = {
  label: "INTERIORISMO",
  title: "Espacios pensados para vivir",
  description:
    "Diseñamos la distribución, la luz y los materiales de tu vivienda como un sistema coherente, conectado con obra, mobiliario y climatización cuando el proyecto lo requiere.",
  image: {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
    alt: "Salón con diseño de interiorismo y luz natural",
  },
};

export const editorialBlock = {
  title: "Proporción, luz y material",
  paragraphs: [
    "Cada estancia tiene una función clara y una relación con las demás. Trabajamos planos, paleta y detalle constructivo antes de elegir piezas.",
    "La iluminación se diseña por capas: general, puntual y ambiental. Los materiales se eligen por tacto, mantenimiento y atemporalidad.",
    "Cuando el alcance es integral, interiorismo, reforma y mobiliario avanzan con el mismo criterio: un solo equipo, un solo proyecto.",
  ],
};

export const interiorismoServices = [
  {
    title: "Distribución",
    description:
      "Planos, circulaciones y aprovechamiento de luz natural en pisos y chalets.",
  },
  {
    title: "Materiales",
    description:
      "Piedra, madera, microcemento y revestimientos seleccionados para uso real.",
  },
  {
    title: "Iluminación",
    description:
      "Plan de luz técnico y luminarias integradas en carpintería y arquitectura.",
  },
  {
    title: "Cocinas y baños",
    description:
      "Estancias clave resueltas con diseño, instalaciones y mobiliario coordinados.",
  },
];

export const interiorismoGallery: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
      alt: "Salón después de proyecto de interiorismo",
    },
    caption: "Salón",
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
      alt: "Detalle decorativo con madera y luz",
    },
    caption: "Detalle",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      alt: "Cocina integrada con salón",
    },
    caption: "Cocina",
  },
];

export const interiorismoProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Estilo de vida, referencias y necesidades de cada estancia.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description: "Planos, materiales, iluminación y renders.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description: "Detalle de mobiliario y coordinación con obra e instalaciones.",
  },
  {
    number: "04",
    title: "Entregamos",
    description: "Espacio terminado, con styling y puesta a punto final.",
  },
];

export const interiorismoCta = {
  title: "Hablemos de tu interior",
  description:
    "Cuéntanos la vivienda y el alcance. Te proponemos el camino más claro.",
};
