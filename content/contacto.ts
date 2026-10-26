import { defineCopy } from "@/lib/i18n";

export const contactoCopy = defineCopy({
  es: {
    meta: {
      title: "Contacto",
      description:
        "Habla de tu proyecto de interiorismo, reforma, mobiliario o climatización en Madrid. Respuesta personalizada sin compromiso.",
    },
    hero: {
      label: "Conversación",
      title: "Contacto",
      headline: "Hablar de mi proyecto",
      description: "Primera orientación clara, sin compromiso.",
      support:
        "Cuéntanos qué necesitas: vivienda, plazos y objetivos. Respondemos en 1–2 días laborables.",
      cta: "Enviar mensaje",
      image: {
        src: "/images/hero-interior-2560.jpg",
        alt: "Interior residencial integrado por aireformas en Madrid",
      },
      chips: [
        { id: "telefono", title: "Teléfono", icon: "call", href: "tel:+34675784752" },
        { id: "whatsapp", title: "WhatsApp", icon: "chat", href: "https://wa.me/34675784752" },
        { id: "email", title: "Email", icon: "mail", href: "mailto:info@aireformas.com" },
        { id: "formulario", title: "Formulario", icon: "edit_note", href: "#escribir" },
      ],
    },
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
      label: "Conversation",
      title: "Contact",
      headline: "Start a project",
      description: "A clear first orientation, with no obligation.",
      support:
        "Tell us what you need: the home, timing and goals. We reply within 1–2 working days.",
      cta: "Send a message",
      image: {
        src: "/images/hero-interior-2560.jpg",
        alt: "Integrated residential interior by aireformas in Madrid",
      },
      chips: [
        { id: "telefono", title: "Phone", icon: "call", href: "tel:+34675784752" },
        { id: "whatsapp", title: "WhatsApp", icon: "chat", href: "https://wa.me/34675784752" },
        { id: "email", title: "Email", icon: "mail", href: "mailto:info@aireformas.com" },
        { id: "formulario", title: "Form", icon: "edit_note", href: "#escribir" },
      ],
    },
    section: {
      label: "WRITE TO US",
      title: "Tell us about your home",
      description: "A name, a phone number and a short description are enough to start the conversation.",
    },
  },
});
