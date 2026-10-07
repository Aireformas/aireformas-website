import type { FaqItem, GalleryItem, ProcessStep } from "@/lib/types";

export const mobiliarioMeta = {
  title: "Mobiliario y carpintería a medida",
  description:
    "Cocinas, vestidores, armarios, muebles TV y carpintería integrada en la arquitectura. Diseño, fabricación e instalación en Madrid.",
};

export const mobiliarioHero = {
  label: "MOBILIARIO",
  title: "Made for your space",
  description:
    "Diseñamos piezas que pertenecen a la arquitectura: carpintería, cocinas, vestidores, muebles TV y soluciones a medida para cada estancia.",
  cta: "Hablar de mi proyecto",
  image: {
    src: "/images/hero-interior-2560.jpg",
    alt: "Carpintería y mobiliario integrados en vivienda residencial",
  },
};

export const mobiliarioEditorial = {
  label: "ENFOQUE",
  verticalLabel: "A MEDIDA",
  title: "Piezas que completan la arquitectura",
  paragraphs: [
    "Medimos, diseñamos y fabricamos carpintería que respeta proporción, luz y circulación de la vivienda.",
    "Cocinas, vestidores y muebles especiales comparten materiales y criterio con el resto del proyecto.",
    "Fabricación, transporte e instalación con un equipo que conoce la obra y el diseño acordado.",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=85",
    alt: "Vestidor con carpintería a medida e iluminación integrada",
  },
};

export const mobiliarioProcessSection = {
  label: "PROCESO",
  title: "De la medición a la instalación",
  lead: "Cuatro pasos con propuesta 3D, presupuesto cerrado y montaje en obra.",
};

export const mobiliarioTypes = [
  {
    title: "Armarios y vestidores",
    description:
      "Empotrados, correderas o walk-in: distribución interior pensada para tu día a día.",
    image: {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80",
      alt: "Armario empotrado en dormitorio principal",
    },
  },
  {
    title: "Cocinas",
    description:
      "Mobiliario, encimeras e iluminación integrados con el resto de la vivienda.",
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
      alt: "Cocina a medida con isla y madera",
    },
  },
  {
    title: "Baños",
    description:
      "Muebles suspendidos, encimeras y almacenaje oculto con materiales duraderos.",
    image: {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
      alt: "Baño con mobiliario a medida",
    },
  },
  {
    title: "Piezas especiales",
    description:
      "Muebles TV, bibliotecas, bars y paneles que completan la arquitectura del espacio.",
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80",
      alt: "Mueble TV integrado en salón",
    },
  },
];

export const mobiliarioAdvantages = [
  {
    title: "Integración arquitectónica",
    description:
      "Proporción, líneas y materiales alineados con el proyecto global de la vivienda.",
  },
  {
    title: "Materiales seleccionados",
    description:
      "Maderas, lacados, piedra y herrajes elegidos por uso, tacto y durabilidad.",
  },
  {
    title: "Iluminación y detalle",
    description:
      "Perfiles LED, tiradores ocultos y acabados que se ven y se sienten en el día a día.",
  },
  {
    title: "Fabricación e instalación",
    description:
      "Un solo equipo coordina medición, taller y montaje en obra.",
  },
];

export const mobiliarioProcess: ProcessStep[] = [
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

export const mobiliarioGallery: GalleryItem[] = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      alt: "Vestidor con cajoneras a medida",
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

export const mobiliarioFaq: FaqItem[] = [
  {
    id: "plazo",
    question: "¿Cuánto tarda un armario o mueble a medida?",
    answer:
      "El plazo habitual de fabricación e instalación es de 4 a 6 semanas, según dimensiones, acabados y complejidad.",
  },
  {
    id: "presupuesto",
    question: "¿El presupuesto incluye instalación?",
    answer:
      "Sí. Nuestras propuestas incluyen diseño, fabricación, transporte e instalación, salvo que indiquemos lo contrario por escrito.",
  },
  {
    id: "integracion",
    question: "¿El mobiliario se diseña junto al resto del proyecto?",
    answer:
      "Sí. La carpintería forma parte del proyecto integral: materiales, iluminación y distribución se definen en conjunto.",
  },
  {
    id: "garantia",
    question: "¿Ofrecéis garantía?",
    answer:
      "Sí, garantía en fabricación e instalación. Los herrajes cuentan con la garantía del fabricante.",
  },
];

export const mobiliarioCta = {
  title: "Hablemos de tu próximo mobiliario",
  description:
    "Cuéntanos la estancia o envíanos fotos del espacio. Te orientamos sin compromiso.",
};
