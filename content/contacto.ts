import { defineCopy } from "@/lib/i18n";
import type { FaqItem } from "@/lib/types";

export const contactoCopy = defineCopy({
  es: {
    meta: {
      title: "Contacto",
      description:
        "Habla de tu proyecto de interiorismo, reforma, mobiliario o climatización en Madrid. Respuesta personalizada sin compromiso.",
    },
    hero: {
      label: "CONTACTO",
      title: "Hablar de mi proyecto",
      description:
        "Cuéntanos qué necesitas (vivienda, plazos y objetivos) y te respondemos con una primera orientación clara.",
      image: {
        src: "/images/hero-interior-2560.jpg",
        alt: "Interior residencial integrado por aireformas en Madrid",
      },
    },
    faq: [
      { id: "zona", question: "¿Trabajáis fuera de Madrid capital?", answer: "Sí. Trabajamos en Madrid capital (Salamanca, Chamberí, Chamartín, Retiro, Moncloa, Aravaca) y en Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja y alrededores." },
      { id: "licencias", question: "¿Gestionáis licencias de obra?", answer: "Sí, cuando el alcance del proyecto lo requiere integramos la tramitación en la planificación." },
      { id: "tipologia", question: "¿Qué tipo de viviendas abordáis?", answer: "Pisos de 90–250 m² y chalets de 180–500 m² con reforma o diseño integral, en segmento medio-alto y alto." },
      { id: "respuesta", question: "¿En cuánto tiempo respondéis?", answer: "Solemos responder en 1–2 días laborables. Si el proyecto es urgente, indícalo en el mensaje." },
    ] satisfies FaqItem[],
    section: {
      label: "ESCRÍBENOS",
      title: "Cuéntanos tu vivienda",
      description: "Nombre, teléfono y una breve descripción bastan para empezar la conversación.",
    },
  },
  en: {
    meta: {
      title: "Contact",
      description:
        "Talk about your interior, renovation, furniture or climate project in Madrid. A personal reply, with no obligation.",
    },
    hero: {
      label: "CONTACT",
      title: "Start a project",
      description:
        "Tell us what you need (the home, timing and goals) and we reply with a clear first orientation.",
      image: {
        src: "/images/hero-interior-2560.jpg",
        alt: "Integrated residential interior by aireformas in Madrid",
      },
    },
    faq: [
      { id: "zona", question: "Do you work outside central Madrid?", answer: "Yes. We work in Madrid city (Salamanca, Chamberí, Chamartín, Retiro, Moncloa, Aravaca) and in Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja and nearby." },
      { id: "licencias", question: "Do you handle building permits?", answer: "Yes. When the project scope requires it, we include the application process in the planning." },
      { id: "tipologia", question: "What kinds of homes do you take on?", answer: "Apartments of 90–250 m² and houses of 180–500 m² for renovation or full design, in the upper-mid and high segment." },
      { id: "respuesta", question: "How quickly do you reply?", answer: "We usually reply within 1–2 working days. If the project is urgent, say so in the message." },
    ] satisfies FaqItem[],
    section: {
      label: "WRITE TO US",
      title: "Tell us about your home",
      description: "A name, a phone number and a short description are enough to start the conversation.",
    },
  },
});
