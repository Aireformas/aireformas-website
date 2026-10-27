import { defineCopy } from "@/lib/i18n";

export const cookiesCopy = defineCopy({
  es: {
    meta: {
      title: "Política de cookies",
      description: "Qué cookies usa aireformas, para qué sirve cada una y cómo aceptar o rechazar las que no son necesarias. Tú decides siempre.",
    },
    banner: {
      title: "Cookies",
      description:
        "Usamos cookies necesarias para que el sitio funcione y, solo si lo aceptas, cookies de análisis para mejorar la experiencia. Puedes cambiar tu elección cuando quieras.",
      acceptAll: "Aceptar todas",
      rejectOptional: "Solo necesarias",
      configure: "Configurar",
      policyLink: "Política de cookies",
      privacyLink: "Política de privacidad",
      termsLink: "Términos y condiciones",
    },
    preferences: {
      title: "Preferencias de cookies",
      save: "Guardar preferencias",
      close: "Cerrar",
      necessary: {
        title: "Necesarias",
        description: "Imprescindibles para la navegación, la seguridad y recordar tu elección de cookies.",
      },
      analytics: {
        title: "Análisis",
        description: "Nos ayudan a entender cómo se usa la web (páginas visitadas, origen del tráfico). Datos agregados.",
      },
      marketing: {
        title: "Marketing",
        description: "Permiten medir campañas y personalizar contenido en otros sitios. Hoy no las usamos activamente.",
      },
    },
    page: {
      label: "Legal",
      title: "Política de cookies",
      intro:
        "En aireformas usamos cookies y tecnologías similares conforme al RGPD y la normativa española. Aquí explicamos qué utilizamos y cómo gestionarlas.",
      sections: [
        { heading: "¿Qué son las cookies?", body: "Son pequeños archivos que el navegador guarda en tu dispositivo. Algunas son esenciales para el funcionamiento del sitio; otras nos ayudan a medir el uso de la web si das tu consentimiento." },
        { heading: "Cookies que utilizamos", body: "Necesarias: preferencia de consentimiento (aireformas_consent) y el idioma elegido (aireformas-locale), duración hasta 12 meses. Análisis (opcional): solo se activarán si las aceptas; de momento no cargamos herramientas de terceros hasta que las habilitemos." },
        { heading: "Cómo gestionar tu elección", body: "Puedes aceptar todas las cookies, rechazar las opcionales o configurar categorías desde el aviso inicial o el enlace «Configurar cookies» del pie de página." },
        { heading: "Contacto", body: "Para dudas sobre privacidad o cookies: info@aireformas.com." },
      ],
    },
  },
  en: {
    meta: {
      title: "Cookies on this site",
      description: "Which cookies aireformas uses, what each one is for, and how to accept or reject the ones that are optional. You choose.",
    },
    banner: {
      title: "Cookies",
      description:
        "We use necessary cookies so the site works and, only if you accept them, analytics cookies to improve the experience. You can change your choice at any time.",
      acceptAll: "Accept all",
      rejectOptional: "Necessary only",
      configure: "Settings",
      policyLink: "Cookie policy",
      privacyLink: "Privacy policy",
      termsLink: "Terms and conditions",
    },
    preferences: {
      title: "Cookie preferences",
      save: "Save preferences",
      close: "Close",
      necessary: {
        title: "Necessary",
        description: "Essential for browsing, security and remembering your cookie choice.",
      },
      analytics: {
        title: "Analytics",
        description: "They help us understand how the site is used (pages visited, traffic source). Aggregated data.",
      },
      marketing: {
        title: "Marketing",
        description: "They allow campaign measurement and personalised content on other sites. We do not use them actively today.",
      },
    },
    page: {
      label: "Legal",
      title: "Cookie policy",
      intro:
        "At aireformas we use cookies and similar technologies in line with the GDPR and Spanish law. Here we explain what we use and how to manage it.",
      sections: [
        { heading: "What are cookies?", body: "They are small files the browser stores on your device. Some are essential for the site to work; others help us measure use of the site if you give consent." },
        { heading: "Cookies we use", body: "Necessary: consent preference (aireformas_consent) and the chosen language (aireformas-locale), kept for up to 12 months. Analytics (optional): they are only activated if you accept them; we do not load third-party tools until we enable them." },
        { heading: "How to manage your choice", body: "You can accept all cookies, reject the optional ones or set categories from the initial notice or the “Cookie settings” link in the footer." },
        { heading: "Contact", body: "For questions about privacy or cookies: info@aireformas.com." },
      ],
    },
  },
});
