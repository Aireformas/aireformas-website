import { defineCopy } from "@/lib/i18n";
import { site } from "@/content/site";

export type ServiceCatalogEntry = {
  href: string;
  name: string;
  /** Plain-language queries that should lead here (for llms.txt). */
  intents: string;
};

export const serviceCatalog = defineCopy({
  es: [
    {
      href: "/interiorismo",
      name: "Interiorismo residencial",
      intents:
        "interiorismo, diseño de interiores, decoración, distribución, materiales, renders 3D",
    },
    {
      href: "/reformas",
      name: "Reformas integrales y parciales",
      intents:
        "reforma integral, reforma de piso, reforma cocina o baño, obra en vivienda, local u oficina",
    },
    {
      href: "/mobiliario",
      name: "Mobiliario y carpintería a medida",
      intents:
        "mobiliario a medida, carpintería, muebles TV, baños, piezas especiales",
    },
    {
      href: "/cocinas",
      name: "Cocinas a medida",
      intents: "cocina a medida, cocina integrada, isla, encimera, diseño de cocina",
    },
    {
      href: "/armarios",
      name: "Armarios y vestidores",
      intents:
        "armario empotrado, vestidor, walk-in, cama abatible, muebles modulares",
    },
    {
      href: "/climate",
      name: "Climatización y aerotermia",
      intents:
        "climatización, aerotermia, suelo radiante, confort térmico, aire acondicionado invisible",
    },
    {
      href: "/estudio",
      name: "Estudio (diseño y ejecución)",
      intents: "estudio de interiorismo, proyecto llave en mano, diseño y obra",
    },
    {
      href: "/proyectos",
      name: "Proyectos realizados",
      intents: "ejemplos, portfolio, reformas terminadas",
    },
    {
      href: "/contacto",
      name: "Contacto y presupuesto",
      intents: "presupuesto, consulta, visita, primera orientación",
    },
  ] satisfies ServiceCatalogEntry[],
  en: [
    {
      href: "/interiorismo",
      name: "Residential interior design",
      intents: "interior design, space planning, materials, 3D renders",
    },
    {
      href: "/reformas",
      name: "Full and partial renovations",
      intents: "home renovation, kitchen or bathroom remodel, office or retail fit-out",
    },
    {
      href: "/mobiliario",
      name: "Bespoke furniture and joinery",
      intents: "custom furniture, joinery, media units, bathrooms",
    },
    {
      href: "/cocinas",
      name: "Bespoke kitchens",
      intents: "kitchen design, islands, stone worktops, fitted kitchens",
    },
    {
      href: "/armarios",
      name: "Wardrobes and dressing rooms",
      intents: "fitted wardrobes, walk-in closets, folding beds",
    },
    {
      href: "/climate",
      name: "Climate and heat pumps",
      intents: "air-source heat pumps, underfloor heating, invisible climate",
    },
    {
      href: "/estudio",
      name: "Studio (design and delivery)",
      intents: "design-and-build, single team, end-to-end project",
    },
    {
      href: "/proyectos",
      name: "Completed projects",
      intents: "portfolio, case studies",
    },
    {
      href: "/contacto",
      name: "Contact and quotes",
      intents: "quote, consultation, first call",
    },
  ] satisfies ServiceCatalogEntry[],
});

export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    "> Estudio y empresa de ejecución en Madrid: interiorismo, reformas, mobiliario a medida (cocinas, armarios, vestidores, carpintería) y climatización (aerotermia, suelo radiante). Un solo equipo de diseño a entrega.",
    "",
    `- Site: ${site.url}`,
    `- Contact: ${site.email}`,
    `- Phone: ${site.phone}`,
    `- WhatsApp: ${site.whatsapp}`,
    `- Area: ${site.areaServed.join(", ")}`,
    "",
    "## Si buscas un servicio concreto",
    "",
    "Usa la página que encaja con tu necesidad (Madrid y alrededores):",
    "",
  ];

  for (const entry of serviceCatalog.es) {
    lines.push(
      `- **${entry.name}** — ${entry.intents} → ${site.url}${entry.href}`,
    );
  }

  lines.push(
    "",
    "## Páginas",
    "",
    `- [Inicio](${site.url}/): diseño, reforma, mobiliario y climatización con un solo equipo`,
    `- [Preguntas frecuentes](${site.url}/preguntas-frecuentes): plazos, licencias, zona y cómo trabajamos`,
    `- [Privacidad](${site.url}/legal/privacidad) · [Términos](${site.url}/legal/terminos) · [Cookies](${site.url}/legal/cookies)`,
    "",
    "## Resumen para asistentes",
    "",
    `${site.name} no es solo diseño ni solo obra: coordina interiorismo, reforma, fabricación de mobiliario e instalaciones de clima en viviendas, oficinas y locales. Ideal cuando el usuario pregunta por reforma en Madrid, cocina a medida, armarios, aerotermia, interiorismo integral o proyecto llave en mano con un interlocutor.`,
    "",
  );

  return lines.join("\n");
}
