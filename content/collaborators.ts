import { defineCopy } from "@/lib/i18n";
import type { ImageAsset } from "@/lib/types";

export type Collaborator = {
  name: string;
  href: string;
  logo: ImageAsset;
  role: string;
  description: string;
  visitLabel: string;
};

export const collaboratorsCopy = defineCopy({
  es: {
    meta: {
      title: "Colaboradores",
      description:
        "Empresas y proveedores con los que aireformas colabora para ofrecer materiales, acabados y soluciones técnicas de calidad en interiorismo y reforma.",
    },
    hero: {
      label: "Red profesional",
      title: "Colaboradores",
      headline: "Partners que amplían alcance sin fragmentar el proyecto",
      description:
        "Seleccionamos colaboradores por criterio técnico, trazabilidad y coherencia con el diseño que desarrollamos en estudio.",
      support:
        "Mantenemos un único interlocutor en tu reforma o interiorismo; la red entra cuando aporta catálogo, logística o especialización que refuerza el resultado final.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "/images/colaboradores/colaboradores-hero.jpg",
        alt: "Muestrario de materiales y acabados para especificación en proyecto de interiorismo",
      } satisfies ImageAsset,
    },
    partners: {
      label: "Partners actuales",
      title: "Quién trabaja con nosotros",
      lead: "Cada colaborador está aquí porque encaja con la forma en que diseñamos, especificamos y ejecutamos en obra.",
    },
    items: [
      {
        name: "Dekorama Group",
        href: "https://dekoramagroup.com",
        logo: {
          src: "/images/colaboradores/dekorama-logo-ink.png",
          alt: "Dekorama Group",
          width: 300,
          height: 80,
        },
        role: "Distribución de materiales y revestimientos",
        description:
          "Dekorama Group es un referente en la distribución de revestimientos, pavimentos, sanitarios y soluciones para arquitectura e interiorismo en España. Su red logística y asesoramiento técnico nos permiten especificar materiales con criterio estético y garantizar disponibilidad en obra. Colaboramos con ellos cuando el proyecto exige acabados exigentes, plazos ajustados o propuestas de producto alineadas con el diseño que desarrollamos en estudio.",
        visitLabel: "Visitar dekoramagroup.com",
      },
    ] satisfies Collaborator[],
    cta: {
      title: "¿Buscas colaborar con aireformas?",
      description:
        "Si representas una marca o distribuidor alineado con interiorismo y reforma de calidad, escríbenos y valoramos encajar en la red.",
    },
  },
  en: {
    meta: {
      title: "Collaborators",
      description:
        "Companies and suppliers aireformas works with to deliver quality materials, finishes and technical solutions for interior design and renovation.",
    },
    hero: {
      label: "Professional network",
      title: "Collaborators",
      headline: "Partners that extend reach without splitting the project",
      description:
        "We choose collaborators for technical rigour, traceability and alignment with the design we develop in studio.",
      support:
        "You keep a single point of contact on your renovation or interior project; the network steps in when it adds range, logistics or specialism that strengthens the final result.",
      cta: "Start a project",
      image: {
        src: "/images/colaboradores/colaboradores-hero.jpg",
        alt: "Material and finish samples for specification on an interior design project",
      } satisfies ImageAsset,
    },
    partners: {
      label: "Current partners",
      title: "Who we work with",
      lead: "Each collaborator is listed because they fit how we design, specify and deliver on site.",
    },
    items: [
      {
        name: "Dekorama Group",
        href: "https://dekoramagroup.com",
        logo: {
          src: "/images/colaboradores/dekorama-logo-ink.png",
          alt: "Dekorama Group",
          width: 300,
          height: 80,
        },
        role: "Materials and surface distribution",
        description:
          "Dekorama Group is a leading distributor of surfaces, flooring, sanitary ware and solutions for architecture and interiors in Spain. Their logistics network and technical advice help us specify materials with design intent and secure availability on site. We work with them when a project calls for demanding finishes, tight schedules or product proposals aligned with the design we develop in studio.",
        visitLabel: "Visit dekoramagroup.com",
      },
    ] satisfies Collaborator[],
    cta: {
      title: "Interested in collaborating with aireformas?",
      description:
        "If you represent a brand or distributor aligned with quality interiors and renovation, get in touch and we will see if there is a fit.",
    },
  },
});
