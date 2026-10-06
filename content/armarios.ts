import type { FaqItem, GalleryItem, ProcessStep } from "@/lib/types";

export const armariosMeta = {
  title: "Armarios a medida",
  description:
    "Armarios empotrados, vestidores y soluciones a medida. Diseño, fabricación e instalación en 4–6 semanas.",
};

export const armariosHero = {
  label: "ARMARIOS A MEDIDA",
  title: "Armarios que se adaptan a cada espacio y estilo de vida",
  description:
    "Diseñamos y fabricamos armarios completamente personalizados. Desde el primer boceto hasta la instalación final, cada detalle se trabaja con precisión: distribución interior, materiales, acabados y herrajes.",
  cta: "Pide presupuesto",
  image: {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=2000&q=80",
    alt: "Vestidor con estanterías y cajoneras a medida",
  },
};

export const wardrobeTypes = [
  {
    title: "Empotrados",
    description:
      "Integrados en la arquitectura de la vivienda, con puertas abatibles o correderas.",
    image: {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80",
      alt: "Armario empotrado en dormitorio",
    },
  },
  {
    title: "Vestidores",
    description:
      "Espacios abiertos o semiabiertos con iluminación, espejos y zonas de acceso cómodas.",
    image: {
      src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=700&q=80",
      alt: "Vestidor con percheros e iluminación",
    },
  },
  {
    title: "Puertas correderas",
    description:
      "Ideal cuando el espacio de apertura es limitado. Herrajes silenciosos y guías de calidad.",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",
      alt: "Armario con puertas correderas",
    },
  },
  {
    title: "Soluciones a medida",
    description:
      "Frentes inclinados, bajo escalera, buhardilla o rincones difíciles: diseño sin compromisos.",
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80",
      alt: "Mueble a medida integrado en salón",
    },
  },
];

export const armariosAdvantages = [
  {
    title: "Aprovechamiento del espacio",
    description:
      "Cada centímetro cuenta: alturas, cajoneras, zapateros y barras a tu medida.",
  },
  {
    title: "Materiales y acabados",
    description:
      "Melaminas, lacados, maderas nobles y herrajes de marcas líderes.",
  },
  {
    title: "Diseño interior",
    description:
      "Módulos configurables para ropa, complementos y estacionalidad.",
  },
  {
    title: "Instalación profesional",
    description:
      "Montaje limpio, ajustes finos y entrega lista para usar.",
  },
];

export const armariosProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Medición in situ",
    description: "Revisamos el espacio, alturas y puntos conflictivos.",
  },
  {
    number: "02",
    title: "Propuesta 3D",
    description: "Visualizas distribución, acabados y presupuesto cerrado.",
  },
  {
    number: "03",
    title: "Fabricación",
    description: "Plazo habitual de 4 a 6 semanas según complejidad.",
  },
  {
    number: "04",
    title: "Instalación",
    description: "Montaje y revisión final contigo.",
  },
];

export const armariosGallery: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      alt: "Vestidor con cajoneras",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      alt: "Armario con puertas lacadas",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      alt: "Dormitorio con armario empotrado",
    },
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
      alt: "Perchero y estanterías en vestidor",
    },
  },
];

export const armariosFaq: FaqItem[] = [
  {
    id: "plazo",
    question: "¿Cuánto tarda un armario a medida?",
    answer:
      "El plazo habitual de fabricación e instalación es de 4 a 6 semanas, según dimensiones, acabados y complejidad del interior.",
  },
  {
    id: "presupuesto",
    question: "¿El presupuesto incluye instalación?",
    answer:
      "Sí. Nuestras propuestas incluyen diseño, fabricación, transporte e instalación, salvo que indiquemos lo contrario por escrito.",
  },
  {
    id: "materiales",
    question: "¿Qué materiales puedo elegir?",
    answer:
      "Trabajamos con melaminas de alta resistencia, lacados, chapados de madera y combinaciones personalizadas. Te asesoramos según uso y presupuesto.",
  },
  {
    id: "garantia",
    question: "¿Ofrecéis garantía?",
    answer:
      "Sí, garantía en fabricación e instalación. Los herrajes cuentan con la garantía del fabricante.",
  },
];

export const armariosCta = {
  title: "Hablemos de su próximo armario",
  description: "Cuéntanos medidas aproximadas o envíanos fotos del espacio.",
};
