import { defineCopy } from "@/lib/i18n";
import type { GalleryItem } from "@/lib/types";

export type ProjectCategory =
  | "unifamiliar"
  | "aticos"
  | "reformas-integrales"
  | "singulares";

export type ProjectFilterId = "all" | ProjectCategory;

export type ProjectStat = {
  label: string;
  value: string;
};

export type PortfolioProjectLayout = "large-left" | "large-right" | "compact";

export type PortfolioProjectFull = {
  slug: string;
  number: string;
  locationLabel: string;
  title: string;
  description: string;
  image: GalleryItem["image"];
  stats: ProjectStat[];
  layout: PortfolioProjectLayout;
  categories: ProjectCategory[];
  areaDisplay?: string;
  inquiryHref?: string;
};

export type MethodologyPillar = {
  number: string;
  title: string;
  description: string;
  footnote: string;
  icon: "check_circle" | "air" | "handshake";
};

export type ProjectCard = {
  slug: string;
  location: string;
  typology: string;
  area: string;
  image: GalleryItem["image"];
  href: string | null;
};

export function toProjectCards(projects: readonly PortfolioProjectFull[]): ProjectCard[] {
  return projects
    .filter((project) => project.layout !== "compact")
    .slice(0, 3)
    .map((project) => ({
      slug: project.slug,
      location: project.locationLabel.split("·")[0]?.trim() ?? project.locationLabel,
      typology: project.title,
      area: project.stats[0]?.value ?? project.areaDisplay ?? "",
      image: project.image,
      href: project.inquiryHref ?? null,
    }));
}

const images = {
  mirasierra: {
    src: "/images/projects/villa-mirasierra-2560.jpg",
    altEs: "Villa moderna de dos plantas en Mirasierra, Madrid, al anochecer con pérgola de acero, roble y olivos iluminados",
    altEn: "Modern two-storey villa in Mirasierra, Madrid, at dusk with a steel pergola, oak and lit olive trees",
  },
  lomas: {
    src: "/images/projects/villa-las-lomas-pozuelo-salon-2560.jpg",
    altEs: "Salón doble altura en Villa Las Lomas, Pozuelo: luz natural, sofá en piel, galería de arte y vegetación interior",
    altEn: "Double-height living room at Villa Las Lomas, Pozuelo: daylight, leather sofa, art and indoor planting",
  },
  salamanca: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxXWm6syqMH0lnWFzNOny_9rMnDCRkenu61luoYjpigJnhQLtOPC_QNyiDC0g6INU4IE96dufgt5w1DgLjEpZDjVHls9OVtX8Nqy5f2a5T4os8R2RTT2CTf1A5OPNYv_HV5Brf9K6UVak2YJ7-k48REe0yv59-REtoYSwWk-xcBaG1zji_7m2Fv5w_o1vxqzolfOVNIYuDcbJuFYFNr295XzxS6vsnI0r_O57ChBVSSfRrR1Z246Gj",
    altEs: "Salón y cocina abiertos en el barrio de Salamanca, Madrid",
    altEn: "Open living room and kitchen in Salamanca, Madrid",
  },
  rozas: {
    src: "/images/projects/villa-las-rozas.jpg",
    altEs: "Villa Las Rozas al anochecer: fachada de madera oscura, pérgola, jardín y piscina",
    altEn: "Villa Las Rozas at dusk: dark wood facade, pergola, garden and pool",
  },
  chamberi: {
    src: "/images/projects/atico-chamberi.jpg",
    altEs: "Ático en Chamberí con cocina de roble y isla de piedra, terraza perimetral y vistas a los tejados de Madrid",
    altEn: "Penthouse in Chamberí with an oak kitchen and stone island, perimeter terrace and views over Madrid roofs",
  },
  escorial: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc_iBMgyB26EFD6CwVPADErMBf8pnZJveSvOmBl0LhhHUDCEqSqhVbGVC1TB2LR83Xy4RUo0_38zI_BrMX23MxH79NP1E3MRTdHCnBt8XwopfnECF-mS1PqUdZdiZ9GOMlUzSydzq4F6T2gn1BOTSukA5sjgoKXgpE7PpNwH462SqeiiaaXLcPjAfmwOpbDpVDPE4hRGqTihsV8ARWzXn7jY3bigV04M21LnYbpX3L9EholLNgqDoZ",
    altEs: "Interior de casa de campo en El Escorial con piedra y microcemento",
    altEn: "Country-house interior in El Escorial with stone and microcement",
  },
} as const;

export const proyectosCopy = defineCopy({
  es: {
    meta: {
      title: "Proyectos en Madrid",
      description:
        "Proyectos residenciales en Madrid: reforma, interiorismo, mobiliario a medida y climatización invisible. Un solo equipo.",
    },
    intro: {
      label: "Portfolio",
      title: "Proyectos",
      headline: "Viviendas diseñadas para ser vividas",
      description: "Arquitectura interior, reforma, mobiliario y clima en un solo relato.",
      support:
        "Selección de proyectos residenciales en Madrid y noroeste donde convergen diseño, ejecución y confort técnico.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "/images/projects/villa-mirasierra-2560.jpg",
        alt: "Villa moderna de dos plantas en Mirasierra, Madrid, al anochecer",
      },
      chips: [
        { id: "unifamiliar", title: "Viviendas unifamiliares", icon: "cottage" },
        { id: "aticos", title: "Áticos y apartamentos", icon: "apartment" },
        { id: "reformas-integrales", title: "Reformas integrales", icon: "handyman" },
        { id: "singulares", title: "Espacios singulares", icon: "star" },
      ],
    },
    filters: [
      { id: "all" as const, label: "Todos" },
      { id: "unifamiliar" as const, label: "Viviendas unifamiliares" },
      { id: "aticos" as const, label: "Áticos & Apartamentos" },
      { id: "reformas-integrales" as const, label: "Reformas integrales" },
      { id: "singulares" as const, label: "Espacios singulares" },
    ],
    featured: {
      badge: "PROYECTO DESTACADO · 2024",
      categories: ["unifamiliar", "singulares"] as ProjectCategory[],
      title: "Villa Mirasierra · Madrid",
      meta: ["340 m²", "Interiorismo & Arquitectura", "Climatización invisible", "Mobiliario a medida"],
      cta: { label: "Ver caso de estudio", href: "/contacto" },
      image: { src: images.mirasierra.src, alt: images.mirasierra.altEs },
    },
    grid: {
      label: "PROYECTOS RECIENTES",
      title: "Viviendas recientes",
      lead: "Intervenciones que equilibran la nobleza de los materiales naturales y el rigor técnico de la climatización por aerotermia oculta.",
    },
    projects: [
      {
        slug: "villa-las-lomas-pozuelo",
        number: "01",
        locationLabel: "POZUELO DE ALARCÓN · MADRID",
        title: "Villa Las Lomas, Pozuelo",
        description: "Reforma integral de una vivienda de 240 m². Se implementó suelo radiante refrescante invisible y carpintería continua de nogal para unificar salón, biblioteca y zona exterior.",
        image: { src: images.lomas.src, alt: images.lomas.altEs },
        stats: [
          { label: "Superficie", value: "240 m²" },
          { label: "Intervención", value: "Integral + Clima + Obra" },
          { label: "Finalización", value: "Primavera 2024" },
        ],
        layout: "large-left" as const,
        categories: ["unifamiliar", "reformas-integrales"] as ProjectCategory[],
        inquiryHref: "/contacto",
      },
      {
        slug: "apartment-salamanca",
        number: "02",
        locationLabel: "BARRIO DE SALAMANCA · MADRID",
        title: "Apartment Salamanca",
        description: "Distribución diáfana de 175 m² recuperando molduras de escayola artesanales y combinándolas con un gran panelamiento arquitectónico de roble tostado con conductos lineales integrados.",
        image: { src: images.salamanca.src, alt: images.salamanca.altEs },
        stats: [
          { label: "Superficie", value: "175 m²" },
          { label: "Servicios", value: "Interiorismo y Clima" },
          { label: "Mobiliario", value: "Diseño bespoke" },
        ],
        layout: "large-right" as const,
        categories: ["aticos", "reformas-integrales"] as ProjectCategory[],
        inquiryHref: "/contacto",
      },
      {
        slug: "villa-las-rozas",
        number: "03",
        locationLabel: "BOADILLA / LAS ROZAS",
        title: "Villa Las Rozas",
        description: "310 m² de arquitectura pensada desde la conexión interior-exterior. Grandes cerramientos correderos empotrados en tabiquería para desdibujar la frontera con el jardín.",
        image: { src: images.rozas.src, alt: images.rozas.altEs },
        stats: [
          { label: "Superficie", value: "310 m²" },
          { label: "Enfoque", value: "Arquitectura de luz" },
          { label: "Eficiencia", value: "Aerotermia Clase A" },
        ],
        layout: "large-left" as const,
        categories: ["unifamiliar"] as ProjectCategory[],
        inquiryHref: "/contacto",
      },
      {
        slug: "atico-chamberi",
        number: "04",
        locationLabel: "CHAMBERÍ · MADRID",
        title: "Ático Chamberí",
        description: "Reforma integral de ático con terraza perimetral, cocina escultórica oculta y climatización zonalizada sin rejillas a la vista.",
        image: { src: images.chamberi.src, alt: images.chamberi.altEs },
        layout: "compact" as const,
        categories: ["aticos", "reformas-integrales"] as ProjectCategory[],
        areaDisplay: "190 m²",
        stats: [],
        inquiryHref: "/contacto",
      },
      {
        slug: "casa-el-escorial",
        number: "05",
        locationLabel: "EL ESCORIAL · MADRID",
        title: "Casa de Campo El Escorial",
        description: "Rehabilitación rural respetuosa de piedra original y microcemento térmico continuo, con vistas a la sierra y máximo aislamiento pasivo.",
        image: { src: images.escorial.src, alt: images.escorial.altEs },
        layout: "compact" as const,
        categories: ["unifamiliar", "singulares"] as ProjectCategory[],
        areaDisplay: "420 m²",
        stats: [],
        inquiryHref: "/contacto",
      },
    ] satisfies PortfolioProjectFull[],
    methodology: {
      label: "METODOLOGÍA DE ESTUDIO",
      title: "Cada proyecto, una mirada integral",
      lead: "No concebimos la reforma sin el interiorismo, ni el interiorismo sin la climatización. Resolvemos la ecuación completa para crear hogares sin fisuras.",
      pillars: [
        { number: "01", title: "Coherencia técnica y estética", description: "Un único interlocutor desde el primer anteproyecto conceptual hasta la colocación de la última pieza de iluminación y entrega de llaves.", footnote: "Garantía de ejecución", icon: "check_circle" as const },
        { number: "02", title: "Tecnología invisible", description: "El confort térmico y acústico se siente, no se ve. Rejillas ocultas, suelo radiante continuo y domótica integrada que respeta la pureza visual de los espacios.", footnote: "Clima y eficiencia A+", icon: "air" as const },
        { number: "03", title: "Artesanía y detalle", description: "Ebanistería a medida, piedras naturales seleccionadas en cantera y revocos a la cal aplicados por artesanos especialistas en arquitectura residencial.", footnote: "Materiales nobles", icon: "handshake" as const },
      ] satisfies MethodologyPillar[],
    },
    cta: {
      label: "CONTACTO",
      title: "¿Tu vivienda puede ser el próximo proyecto?",
      description: "Hablemos de distribución, materiales y alcance. Analizamos la viabilidad técnica y el potencial estético de tu hogar sin compromiso.",
    },
  },
  en: {
    meta: {
      title: "Projects in Madrid",
      description:
        "Residential projects in Madrid: renovation, interiors, bespoke furniture and invisible climate. One team. Real homes too.",
    },
    intro: {
      label: "Portfolio",
      title: "Projects",
      headline: "Homes designed to be lived in",
      description: "Interior architecture, renovation, furniture and climate in one story.",
      support:
        "A selection of residential projects in Madrid and the northwest where design, delivery and technical comfort converge.",
      cta: "Start a project",
      image: {
        src: "/images/projects/villa-mirasierra-2560.jpg",
        alt: "Modern two-storey villa in Mirasierra, Madrid, at dusk",
      },
      chips: [
        { id: "unifamiliar", title: "Houses", icon: "cottage" },
        { id: "aticos", title: "Penthouses and apartments", icon: "apartment" },
        { id: "reformas-integrales", title: "Full renovations", icon: "handyman" },
        { id: "singulares", title: "Singular spaces", icon: "star" },
      ],
    },
    filters: [
      { id: "all" as const, label: "All" },
      { id: "unifamiliar" as const, label: "Houses" },
      { id: "aticos" as const, label: "Penthouses & apartments" },
      { id: "reformas-integrales" as const, label: "Full renovations" },
      { id: "singulares" as const, label: "Singular spaces" },
    ],
    featured: {
      badge: "FEATURED PROJECT · 2024",
      categories: ["unifamiliar", "singulares"] as ProjectCategory[],
      title: "Villa Mirasierra · Madrid",
      meta: ["340 m²", "Interiors & architecture", "Invisible climate", "Bespoke furniture"],
      cta: { label: "View case study", href: "/contacto" },
      image: { src: images.mirasierra.src, alt: images.mirasierra.altEn },
    },
    grid: {
      label: "RECENT PROJECTS",
      title: "Recent homes",
      lead: "Interventions that balance the nobility of natural materials with the technical rigour of concealed air-source climate.",
    },
    projects: [
      {
        slug: "villa-las-lomas-pozuelo",
        number: "01",
        locationLabel: "POZUELO DE ALARCÓN · MADRID",
        title: "Villa Las Lomas, Pozuelo",
        description: "Full renovation of a 240 m² home. Invisible cooling underfloor heating and continuous walnut joinery unite the living room, library and outdoor area.",
        image: { src: images.lomas.src, alt: images.lomas.altEn },
        stats: [
          { label: "Area", value: "240 m²" },
          { label: "Scope", value: "Full + climate + build" },
          { label: "Completed", value: "Spring 2024" },
        ],
        layout: "large-left" as const,
        categories: ["unifamiliar", "reformas-integrales"] as ProjectCategory[],
        inquiryHref: "/contacto",
      },
      {
        slug: "apartment-salamanca",
        number: "02",
        locationLabel: "SALAMANCA · MADRID",
        title: "Apartment Salamanca",
        description: "An open 175 m² plan that recovers handmade plaster mouldings and pairs them with a large toasted-oak architectural panel and integrated linear ducts.",
        image: { src: images.salamanca.src, alt: images.salamanca.altEn },
        stats: [
          { label: "Area", value: "175 m²" },
          { label: "Services", value: "Interiors and climate" },
          { label: "Furniture", value: "Bespoke design" },
        ],
        layout: "large-right" as const,
        categories: ["aticos", "reformas-integrales"] as ProjectCategory[],
        inquiryHref: "/contacto",
      },
      {
        slug: "villa-las-rozas",
        number: "03",
        locationLabel: "BOADILLA / LAS ROZAS",
        title: "Villa Las Rozas",
        description: "310 m² of architecture planned from the indoor-outdoor connection. Large sliding openings set into the walls dissolve the boundary with the garden.",
        image: { src: images.rozas.src, alt: images.rozas.altEn },
        stats: [
          { label: "Area", value: "310 m²" },
          { label: "Focus", value: "Architecture of light" },
          { label: "Efficiency", value: "Class A air-source" },
        ],
        layout: "large-left" as const,
        categories: ["unifamiliar"] as ProjectCategory[],
        inquiryHref: "/contacto",
      },
      {
        slug: "atico-chamberi",
        number: "04",
        locationLabel: "CHAMBERÍ · MADRID",
        title: "Chamberí penthouse",
        description: "Full penthouse renovation with a perimeter terrace, a concealed sculptural kitchen and zoned climate with no grilles in sight.",
        image: { src: images.chamberi.src, alt: images.chamberi.altEn },
        layout: "compact" as const,
        categories: ["aticos", "reformas-integrales"] as ProjectCategory[],
        areaDisplay: "190 m²",
        stats: [],
        inquiryHref: "/contacto",
      },
      {
        slug: "casa-el-escorial",
        number: "05",
        locationLabel: "EL ESCORIAL · MADRID",
        title: "El Escorial country house",
        description: "A respectful rural restoration of original stone and continuous thermal microcement, with views to the sierra and maximum passive insulation.",
        image: { src: images.escorial.src, alt: images.escorial.altEn },
        layout: "compact" as const,
        categories: ["unifamiliar", "singulares"] as ProjectCategory[],
        areaDisplay: "420 m²",
        stats: [],
        inquiryHref: "/contacto",
      },
    ] satisfies PortfolioProjectFull[],
    methodology: {
      label: "STUDIO METHOD",
      title: "Every project, one integrated view",
      lead: "We do not conceive renovation without interiors, or interiors without climate. We solve the whole equation to create homes without seams.",
      pillars: [
        { number: "01", title: "Technical and aesthetic coherence", description: "A single point of contact from the first concept to the last light fitting and the handover of keys.", footnote: "Delivery guarantee", icon: "check_circle" as const },
        { number: "02", title: "Invisible technology", description: "Thermal and acoustic comfort is felt, not seen. Hidden grilles, continuous underfloor heating and integrated automation that respect the visual purity of the spaces.", footnote: "Climate and A+ efficiency", icon: "air" as const },
        { number: "03", title: "Craft and detail", description: "Bespoke cabinetry, natural stones selected at the quarry and lime plasters applied by craftspeople specialised in residential architecture.", footnote: "Noble materials", icon: "handshake" as const },
      ] satisfies MethodologyPillar[],
    },
    cta: {
      label: "CONTACT",
      title: "Could your home be the next project?",
      description: "Let's talk about layout, materials and scope. We assess the technical feasibility and the aesthetic potential of your home, with no obligation.",
    },
  },
});
