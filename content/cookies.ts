export const cookieBanner = {
  title: "Cookies",
  description:
    "Usamos cookies necesarias para que el sitio funcione y, solo si lo aceptas, cookies de análisis para mejorar la experiencia. Puedes cambiar tu elección cuando quieras.",
  acceptAll: "Aceptar todas",
  rejectOptional: "Solo necesarias",
  configure: "Configurar",
  policyLink: "Política de cookies",
  privacyLink: "Política de privacidad",
  termsLink: "Términos y condiciones",
} as const;

export const cookiePreferences = {
  title: "Preferencias de cookies",
  save: "Guardar preferencias",
  close: "Cerrar",
  necessary: {
    id: "necessary" as const,
    title: "Necesarias",
    description:
      "Imprescindibles para la navegación, la seguridad y recordar tu elección de cookies.",
    locked: true,
  },
  analytics: {
    id: "analytics" as const,
    title: "Análisis",
    description:
      "Nos ayudan a entender cómo se usa la web (páginas visitadas, origen del tráfico). Datos agregados.",
  },
  marketing: {
    id: "marketing" as const,
    title: "Marketing",
    description:
      "Permiten medir campañas y personalizar contenido en otros sitios. Hoy no las usamos activamente.",
  },
} as const;

export const cookiesPageMeta = {
  title: "Política de cookies",
  description: "Información sobre cookies y consentimiento en aireformas.",
} as const;

export const cookiesPage = {
  label: "Legal",
  title: "Política de cookies",
  intro:
    "En aireformas usamos cookies y tecnologías similares conforme al RGPD y la normativa española. Aquí explicamos qué utilizamos y cómo gestionarlas.",
  sections: [
    {
      heading: "¿Qué son las cookies?",
      body: "Son pequeños archivos que el navegador guarda en tu dispositivo. Algunas son esenciales para el funcionamiento del sitio; otras nos ayudan a medir el uso de la web si das tu consentimiento.",
    },
    {
      heading: "Cookies que utilizamos",
      body: "Necesarias: preferencia de consentimiento (aireformas_consent), duración hasta 12 meses. Análisis (opcional): solo se activarán si las aceptas; de momento no cargamos herramientas de terceros hasta que las habilitemos.",
    },
    {
      heading: "Cómo gestionar tu elección",
      body: "Puedes aceptar todas las cookies, rechazar las opcionales o configurar categorías desde el aviso inicial o el enlace «Configurar cookies» del pie de página.",
    },
    {
      heading: "Contacto",
      body: "Para dudas sobre privacidad o cookies: studio@aireformas.com.",
    },
  ],
} as const;
