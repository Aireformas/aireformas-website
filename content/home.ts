import type {
  GalleryItem,
  ProcessStep,
  ServiceCard,
  Testimonial,
  TrustStat,
} from "@/lib/types";

export const homeMeta = {
  title: "Reformas, armarios e interiorismo",
  description:
    "Reformas integrales, armarios a medida e interiorismo con diseño, materiales de calidad y ejecución impecable en Madrid.",
};

export const homeHero = {
  intro:
    "En aireformas unimos interiorismo, armarios a medida y reformas integrales para crear hogares serenos, funcionales y con personalidad.",
  titleLine1: "DONDE EL DISEÑO",
  titleLine2: "ENCUENTRA TU HOGAR",
  scrollLabel: "Scroll",
  stripImages: [
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Salón luminoso con diseño contemporáneo",
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Interior minimalista con luz natural",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Vestidor a medida con madera clara",
    },
    {
      src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Armario empotrado en dormitorio",
    },
    {
      src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Detalle de salón con mobiliario",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Cocina abierta integrada al salón",
    },
    {
      src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=520&h=780&q=92",
      alt: "Vestidor con percheros e iluminación",
    },
  ],
};

export const trustStats: TrustStat[] = [
  { value: "15+", label: "Años de experiencia" },
  { value: "320+", label: "Proyectos entregados" },
  { value: "4–6", label: "Semanas en armarios a medida" },
  { value: "100%", label: "Seguimiento personalizado" },
];

export const homeServices: ServiceCard[] = [
  {
    title: "Interiorismo",
    description:
      "Del concepto al espacio terminado: luz, color, textura y mobiliario.",
    href: "/interiorismo",
    image: {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      alt: "Detalle de interior con mobiliario y textiles",
    },
  },
  {
    title: "Armarios a medida",
    description:
      "Distribución interior, materiales y acabados pensados para tu día a día.",
    href: "/servicios/armarios",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      alt: "Armario empotrado con puertas correderas",
    },
  },
  {
    title: "Reformas integrales",
    description: "Coordinación de oficios, plazos y acabados de alto nivel.",
    href: null,
    comingSoon: true,
    image: {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      alt: "Reforma de vivienda con acabados modernos",
    },
  },
  {
    title: "Cocinas y baños",
    description: "Espacios funcionales con diseño cuidado y materiales duraderos.",
    href: null,
    comingSoon: true,
    image: {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Cocina reformada con isla central",
    },
  },
];

export const howWeWorkSection = {
  label: "PROCESO",
  title: "Cómo trabajamos contigo",
  lead: "Cuatro momentos claros, un solo interlocutor. Del primer café en tu casa a las llaves entregadas.",
};

export const howWeWorkSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Visita y escucha",
    description:
      "Conocemos tu espacio, necesidades y estilo de vida para definir prioridades.",
  },
  {
    number: "02",
    title: "Diseño y presupuesto",
    description:
      "Propuesta clara con planos, materiales y plazos. Sin sorpresas.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Coordinamos oficios y fabricación con control de calidad en cada fase.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Revisión final contigo y puesta a punto hasta el último detalle.",
  },
];

export const featuredProjects: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
      alt: "Vestidor con iluminación integrada",
    },
    caption: "Vestidor a medida",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
      alt: "Salón con estantería y sofá",
    },
    caption: "Salón integral",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
      alt: "Dormitorio con armario empotrado",
    },
    caption: "Dormitorio principal",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      alt: "Cocina abierta al salón",
    },
    caption: "Cocina conectada",
  },
];

export const testimonials: Testimonial[] = [
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

export const contactSection = {
  label: "CONTACTO",
  title: "Hablemos de tu próximo proyecto",
  description:
    "Cuéntanos qué necesitas y te respondemos con una primera orientación sin compromiso.",
};
