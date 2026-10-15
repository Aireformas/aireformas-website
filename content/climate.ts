import type { FaqItem, ImageAsset, ProcessStep } from "@/lib/types";

export const climateMeta = {
  title: "Climatización invisible y aerotermia",
  description:
    "AIREFORMAS Climate: aerotermia, bombas de calor y VRV, ventilación con recuperación, suelo radiante, conductos, ACS y control inteligente integrados en el proyecto de vivienda en Madrid.",
};

export const climateHero = {
  label: "Confort",
  title: "Climate",
  headline: "Tecnología que se siente",
  description: "Confort constante todo el año.",
  support:
    "Diseñamos climatización, agua caliente y control como parte del espacio: invisible en la arquitectura, precisa en el funcionamiento.",
  cta: "Hablar de mi proyecto",
  image: {
    src: "/images/climate/climate-hero.jpg",
    alt: "Salón con rejilla lineal en el techo y unidad de aerotermia en el jardín, vista a través del ventanal",
  },
};

export type ClimateService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: ImageAsset;
};

export const climateServicesIntro = {
  label: "Servicios",
  title: "Ingeniería y diseño integrados al proyecto",
  lead: "Soluciones de climatización pensadas desde el inicio, coordinadas con la arquitectura y el interiorismo para un resultado eficiente, estético y duradero.",
};

export const climateServices: readonly ClimateService[] = [
  {
    id: "bombas-de-calor",
    title: "Bombas de calor y VRV",
    description:
      "Sistemas de alta eficiencia para calefacción y refrigeración, con regulación independiente por zonas.",
    icon: "heat_pump",
    image: {
      src: "/images/climate/climate-vrv.jpg",
      alt: "Consola de bomba de calor blanca junto a un ventanal en un interior de yeso y roble",
    },
  },
  {
    id: "ventilacion",
    title: "Ventilación y recuperación",
    description:
      "Renovación continua del aire interior con recuperación energética, mejorando la calidad ambiental y reduciendo el consumo.",
    icon: "air",
    image: {
      src: "/images/climate/climate-ventilacion.jpg",
      alt: "Equipo de recuperación de calor con tres conductos metálicos en un cuarto técnico",
    },
  },
  {
    id: "aerotermia",
    title: "Aerotermia",
    description:
      "Tecnología eficiente para producir calefacción, refrigeración y agua caliente sanitaria con la energía del aire exterior.",
    icon: "sunny",
    image: {
      src: "/images/climate/climate-aerotermia.jpg",
      alt: "Unidad exterior de aerotermia en la terraza de una vivienda de hormigón y vidrio",
    },
  },
  {
    id: "suelo-radiante",
    title: "Suelo radiante",
    description:
      "Climatización uniforme mediante circuitos integrados en el pavimento, con el máximo confort térmico y sin rejillas visibles.",
    icon: "waves",
    image: {
      src: "/images/climate/climate-suelo.jpg",
      alt: "Circuitos de suelo radiante sobre aislamiento negro, con colector junto a un pilar de hormigón",
    },
  },
  {
    id: "climatizacion-invisible",
    title: "Climatización invisible",
    description:
      "Integración de los sistemas en techos, paredes y elementos arquitectónicos, sin alterar la estética interior.",
    icon: "visibility",
    image: {
      src: "/images/climate/climate-invisible.jpg",
      alt: "Corte de techo con conducto de suministro y plenum de retorno sobre un salón terminado",
    },
  },
  {
    id: "acs",
    title: "ACS",
    description:
      "Producción y distribución de agua caliente sanitaria dimensionada al uso real de cada vivienda.",
    icon: "water_drop",
    image: {
      src: "/images/climate/climate-acs.jpg",
      alt: "Acumulador de agua caliente integrado en un armario de roble, con vaso de expansión y tuberías",
    },
  },
  {
    id: "conductos",
    title: "Conductos y rejillas",
    description:
      "Rejillas lineales y retornos arquitectónicos alineados con techos y carpintería, para una distribución del aire eficiente y discreta.",
    icon: "hvac",
    image: {
      src: "/images/climate/climate-conductos.jpg",
      alt: "Salón y cocina con rejillas lineales en el techo y un conducto circular alineado con la arquitectura",
    },
  },
  {
    id: "control",
    title: "Control inteligente",
    description:
      "Gestión de temperatura, zonas, horarios y consumo para un confort personalizado, sin complicar el día a día.",
    icon: "thermostat",
    image: {
      src: "/images/climate/climate-control.jpg",
      alt: "Panel de clima en la pared mostrando 22 grados, con el salón desenfocado al fondo",
    },
  },
];

export const climateProcessSection = {
  label: "Proceso",
  title: "De la carga térmica al confort",
  lead: "Ingeniería y ejecución coordinadas con reforma e interiorismo en un solo calendario.",
};

export const climateProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Carga y estudio",
    description: "Dimensionado según orientación, envolvente y uso de estancias.",
  },
  {
    number: "02",
    title: "Integración en planos",
    description: "Conductos, suelo radiante y equipos en el diseño del espacio.",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Instalación coordinada con el calendario de obra.",
  },
  {
    number: "04",
    title: "Puesta en marcha",
    description: "Regulación, pruebas y explicación del control al cliente.",
  },
];

export const climateFaq: FaqItem[] = [
  {
    id: "invisible",
    question: "¿Qué significa climatización invisible?",
    answer:
      "Rejillas, retornos y equipos se resuelven en el proyecto arquitectónico: líneas limpias, menos elementos visibles y confort constante.",
  },
  {
    id: "aerotermia-reforma",
    question: "¿Se puede instalar aerotermia en una reforma?",
    answer:
      "Sí, en muchos casos. Evaluamos la vivienda, el espacio técnico y la envolvente para proponer la solución más adecuada.",
  },
  {
    id: "ventilacion",
    question: "¿La ventilación con recuperación sustituye a la climatización?",
    answer:
      "No. Renueva el aire y recupera energía. La carga térmica la cubren aerotermia, VRV o suelo radiante. Se diseñan juntos.",
  },
  {
    id: "suelo-radiante",
    question: "¿El suelo radiante limita el tipo de pavimento?",
    answer:
      "No necesariamente. Trabajamos con el diseño de materiales para compatibilizar pavimento, espesores y rendimiento.",
  },
  {
    id: "solo-clima",
    question: "¿Trabajáis climatización sin reforma completa?",
    answer:
      "El enfoque es integral. Climate funciona mejor cuando se diseña junto al resto del proyecto; consultamos casos puntuales según alcance.",
  },
  {
    id: "zona",
    question: "¿Dónde instaláis sistemas Climate?",
    answer:
      "En viviendas de Madrid capital y noroeste metropolitano, dentro de proyectos que coordina aireformas.",
  },
];

export const climateCta = {
  title: "Integra Climate en tu proyecto",
  description:
    "Cuéntanos la vivienda y el alcance. Te explicamos opciones técnicas alineadas con el diseño.",
};
