import type { FaqItem, ProcessStep } from "@/lib/types";

export const climateMeta = {
  title: "Climatización invisible y aerotermia",
  description:
    "AIREFORMAS Climate: aerotermia, suelo radiante, conductos, rejillas arquitectónicas, ACS y control inteligente integrados en el proyecto de vivienda en Madrid.",
};

export const climateHero = {
  label: "AIREFORMAS CLIMATE",
  title: "Confort que se siente. Tecnología que desaparece.",
  description:
    "Diseñamos climatización, agua caliente y control como parte del espacio: invisible en la arquitectura, precisa en el funcionamiento.",
  cta: "Hablar de mi proyecto",
  image: {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2560&q=90",
    alt: "Salón residencial con climatización discreta, luz natural y confort térmico",
  },
};

export const climateProcessSection = {
  label: "PROCESO",
  title: "De la carga térmica al confort",
  lead: "Ingeniería y ejecución coordinadas con reforma e interiorismo en un solo calendario.",
};

export const climateComfort = {
  temperature: "22°C",
  headline: "Confort que se siente",
  subline: "Tecnología que desaparece.",
  tags: [
    "Aerotermia",
    "Suelo radiante",
    "Climatización invisible",
    "ACS",
    "Control inteligente",
  ] as const,
  image: {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
    alt: "Salón con climatización discreta y luz natural",
  },
};

export const climateServices = [
  {
    title: "Aerotermia",
    description:
      "Producción eficiente de frío y calor integrada en el proyecto de reforma o vivienda nueva.",
  },
  {
    title: "Suelo radiante",
    description:
      "Confort homogéneo sin rejillas visibles. Compatible con pavimentos de diseño.",
  },
  {
    title: "Conductos y rejillas",
    description:
      "Rejillas lineales y retornos arquitectónicos alineados con techos y carpintería.",
  },
  {
    title: "ACS",
    description:
      "Agua caliente sanitaria dimensionada con el uso real de la vivienda.",
  },
  {
    title: "Domótica y control",
    description:
      "Zonas, horarios y escenas que simplifican el día a día sin complicar la interfaz.",
  },
  {
    title: "Integración en obra",
    description:
      "Instalaciones coordinadas con albañilería, falsos techos y mobiliario.",
  },
];

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
      "Significa que rejillas, retornos y equipos se resuelven en el proyecto arquitectónico: líneas limpias, menos elementos visibles y confort constante.",
  },
  {
    id: "aerotermia-reforma",
    question: "¿Se puede instalar aerotermia en una reforma?",
    answer:
      "Sí, en muchos casos. Evaluamos la vivienda, espacio técnico y envolvente para proponer la solución más adecuada.",
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
      "Nuestro enfoque es integral. Climate brilla cuando se diseña junto al resto del proyecto; consultamos casos puntuales según alcance.",
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
