import type { FaqItem } from "@/lib/types";

export const contactoMeta = {
  title: "Contacto",
  description:
    "Habla de tu proyecto de interiorismo, reforma, mobiliario o climatización en Madrid. Respuesta personalizada sin compromiso.",
};

export const contactoHero = {
  label: "CONTACTO",
  title: "Hablar de mi proyecto",
  description:
    "Cuéntanos qué necesitas (vivienda, plazos y objetivos) y te respondemos con una primera orientación clara.",
};

export const contactoFaq: FaqItem[] = [
  {
    id: "zona",
    question: "¿Trabajáis fuera de Madrid capital?",
    answer:
      "Sí. Trabajamos en Madrid capital (Salamanca, Chamberí, Chamartín, Retiro, Moncloa, Aravaca) y en Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja y alrededores.",
  },
  {
    id: "licencias",
    question: "¿Gestionáis licencias de obra?",
    answer:
      "Sí, cuando el alcance del proyecto lo requiere integramos la tramitación en la planificación.",
  },
  {
    id: "tipologia",
    question: "¿Qué tipo de viviendas abordáis?",
    answer:
      "Pisos de 90–250 m² y chalets de 180–500 m² con reforma o diseño integral, en segmento medio-alto y alto.",
  },
  {
    id: "respuesta",
    question: "¿En cuánto tiempo respondéis?",
    answer:
      "Solemos responder en 1–2 días laborables. Si el proyecto es urgente, indícalo en el mensaje.",
  },
];

export const contactoSection = {
  label: "ESCRÍBENOS",
  title: "Cuéntanos tu vivienda",
  description:
    "Nombre, teléfono y una breve descripción bastan para empezar la conversación.",
};
