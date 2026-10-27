import { defineCopy } from "@/lib/i18n";

export const contactoCopy = defineCopy({
  es: {
    meta: {
      title: "Contacto en Madrid",
      description:
        "Habla de tu proyecto de interiorismo, reforma, mobiliario o climatización en Madrid. Respuesta personalizada sin compromiso.",
    },
    hero: {
      label: "Conversación",
      title: "Contacto",
      headline: "Hablar de mi proyecto",
      description: "Primera orientación clara, sin compromiso.",
      support:
        "Cuéntanos qué necesitas: vivienda, plazos y objetivos. Respondemos en 1–2 días laborables. Después visitamos la casa y enviamos alcance, plazo y presupuesto cerrado. Interiorismo, reforma, mobiliario y climatización siguen con el mismo equipo.",
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
      description: "Servicio, tipo de vivienda y plazo. Respondemos en 1–2 días laborables.",
    },
  },
  en: {
    meta: {
      title: "Contact in Madrid",
      description:
        "Talk about your interior, renovation, furniture or climate project in Madrid. A personal reply, with no obligation at all.",
    },
    hero: {
      label: "Conversation",
      title: "Contact",
      headline: "Start a project",
      description: "A clear first orientation, with no obligation.",
      support:
        "Tell us what you need: the home, timing and goals. We reply within 1–2 working days. We then visit and send scope, timing and a fixed quote. Design, renovation, furniture and climate stay with the same team.",
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
      description: "Service, type of home and timing. We reply within 1–2 working days.",
    },
  },
});
