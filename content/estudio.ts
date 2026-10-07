import type { ProcessStep, Testimonial, TrustStat } from "@/lib/types";

export const estudioMeta = {
  title: "Estudio",
  description:
    "Cómo diseñamos viviendas completas en Madrid: interiorismo, reforma, mobiliario y climatización con un solo equipo.",
};

export const estudioHero = {
  label: "ESTUDIO",
  title: "Diseñamos viviendas para ser vividas",
  description:
    "Un buen proyecto no termina en lo que ves. Trabajamos distribución, materiales y mobiliario, y también lo que no se ve: iluminación, climatización, instalaciones y tecnología.",
  image: {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
    alt: "Espacio residencial diseñado por aireformas",
  },
};

export const estudioValues = [
  "Detalle",
  "Material",
  "Proporción",
  "Luz",
  "Confort",
  "Funcionalidad",
  "Atemporalidad",
] as const;

export const estudioTrustStats: TrustStat[] = [
  { value: "15+", label: "Años de experiencia" },
  { value: "320+", label: "Proyectos entregados" },
  { value: "4", label: "Pilares integrados" },
  { value: "1", label: "Equipo, un proyecto" },
];

export const estudioProcess: ProcessStep[] = [
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

export const estudioTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "El armario aprovecha cada centímetro y la instalación fue impecable. Se nota el cuidado en los acabados.",
    author: "María G.",
    role: "Cliente, Madrid",
    image: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      alt: "Detalle de armario terminado en vivienda",
    },
  },
  {
    id: "2",
    quote:
      "Nos ayudaron a unificar salón y cocina con un diseño muy personal. Comunicación clara en todo momento.",
    author: "Carlos y Laura",
    role: "Reforma integral",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      alt: "Espacio reformado con diseño de interiorismo",
    },
  },
  {
    id: "3",
    quote:
      "Profesionales, puntuales y con muy buen gusto. El resultado superó lo que teníamos en mente.",
    author: "Elena R.",
    role: "Proyecto de interiorismo",
    image: {
      src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80",
      alt: "Rincón de lectura con iluminación cálida",
    },
  },
];

export const estudioCta = {
  title: "Conocemos tu proyecto",
  description:
    "Pisos y chalets de 90 a 500 m² en Madrid y noroeste. Cuéntanos el tuyo.",
};
