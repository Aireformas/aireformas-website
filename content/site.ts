import { defineCopy } from "@/lib/i18n";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aireformas.com",
  name: "aireformas",
  brandLine: "Interior Design · Renovation · Furniture · Climate",
  tagline:
    "Diseñamos espacios. Creamos experiencias. Interiorismo, reforma, mobiliario y climatización integrados en un único proyecto.",
  shortTagline:
    "Interiorismo, reforma, mobiliario y climatización en un único proyecto.",
  entityDescription:
    "aireformas diseña y ejecuta proyectos integrados para viviendas, oficinas y locales: distribución, materiales, mobiliario, iluminación, climatización e instalaciones con un solo equipo.",
  pillars: [
    "Interior design",
    "Renovation",
    "Furniture",
    "Climate",
  ] as const,
  knowsAbout: [
    "Interiorismo residencial",
    "Reforma integral de vivienda",
    "Mobiliario y carpintería a medida",
    "Climatización invisible",
    "Aerotermia",
    "Suelo radiante",
    "Iluminación arquitectónica",
  ] as const,
  areaServed: [
    "Madrid",
    "Salamanca",
    "Chamberí",
    "Chamartín",
    "Retiro",
    "Moncloa",
    "Aravaca",
    "Pozuelo de Alarcón",
    "Boadilla del Monte",
    "Majadahonda",
    "Las Rozas",
    "La Moraleja",
  ] as const,
  logo: {
    src: "/logo-airereformas-transparent.png",
    alt: "aireformas",
    width: 1024,
    height: 455,
    white: {
      src: "/logo-airereformas-white.png",
      width: 1024,
      height: 411,
    },
  },
  phone: "+34 675 784 752",
  phoneHref: "tel:+34675784752",
  email: "info@aireformas.com",
  emailHref: "mailto:info@aireformas.com",
  whatsapp: "https://wa.me/34675784752",
  address: "Madrid y alrededores",
  addressLocality: "Madrid",
  addressCountry: "ES",
  copyright: `© ${new Date().getFullYear()} aireformas. Todos los derechos reservados.`,
} as const;

const year = new Date().getFullYear();

export const siteCopy = defineCopy({
  es: {
    tagline: site.tagline,
    shortTagline: site.shortTagline,
    entityDescription: site.entityDescription,
    address: site.address,
    copyright: `© ${year} aireformas. Todos los derechos reservados.`,
    knowsAbout: [...site.knowsAbout],
  },
  en: {
    tagline:
      "We design spaces. We create experiences. Interior design, renovation, furniture and climate integrated in a single project.",
    shortTagline:
      "Interior design, renovation, furniture and climate in a single project.",
    entityDescription:
      "aireformas designs and delivers integrated projects for homes, offices and retail: layout, materials, furniture, lighting, climate and building services with one team.",
    address: "Madrid and surrounding areas",
    copyright: `© ${year} aireformas. All rights reserved.`,
    knowsAbout: [
      "Residential interior design",
      "Full home renovation",
      "Bespoke furniture and joinery",
      "Invisible climate control",
      "Air-source heat pumps",
      "Underfloor heating",
      "Architectural lighting",
    ],
  },
});
