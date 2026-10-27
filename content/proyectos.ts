import { defineCopy } from "@/lib/i18n";

export type ProjectGalleryItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  home?: boolean;
};

export type MethodologyPillar = {
  number: string;
  title: string;
  description: string;
  footnote: string;
  icon: "check_circle" | "air" | "handshake";
};

const galleryAssets = [
  {
    id: "img-2449",
    src: "/images/projects/gallery/img-2449.webp",
    width: 788,
    height: 1400,
    home: true,
    altEs: "Comedor y salón abiertos con mesa redonda de madera y sillas terracota",
    altEn: "Open dining and living area with a round wood table and terracotta chairs",
  },
  {
    id: "img-2452",
    src: "/images/projects/gallery/img-2452.webp",
    width: 1400,
    height: 788,
    home: true,
    altEs: "Salón con sofá texturado, mesa ovalada de madera y butaca mostaza",
    altEn: "Living room with a textured sofa, oval wood coffee table and mustard armchair",
  },
  {
    id: "img-2453",
    src: "/images/projects/gallery/img-2453.webp",
    width: 788,
    height: 1400,
    altEs: "Dormitorio principal con armario empotrado blanco y ropa de cama neutra",
    altEn: "Primary bedroom with a white built-in wardrobe and neutral bedding",
  },
  {
    id: "img-2454",
    src: "/images/projects/gallery/img-2454.webp",
    width: 1400,
    height: 788,
    home: true,
    altEs: "Dormitorio con armario continuo y luz natural",
    altEn: "Bedroom with continuous wardrobe and natural light",
  },
  {
    id: "img-2457",
    src: "/images/projects/gallery/img-2457.webp",
    width: 788,
    height: 1400,
    home: true,
    altEs: "Baño en piedra gris con lavabo sobre encimera y mampara de ducha",
    altEn: "Grey stone bathroom with vessel sink and glass shower screen",
  },
  {
    id: "img-2459",
    src: "/images/projects/gallery/img-2459.webp",
    width: 1400,
    height: 788,
    home: true,
    altEs: "Cocina con isla de piedra veteada y carpintería de madera",
    altEn: "Kitchen with a veined stone island and wood cabinetry",
  },
  {
    id: "img-2460",
    src: "/images/projects/gallery/img-2460.webp",
    width: 1400,
    height: 788,
    altEs: "Cocina abierta al pasillo con isla monolítica de piedra",
    altEn: "Kitchen opening to the hallway with a monolithic stone island",
  },
  {
    id: "img-2463",
    src: "/images/projects/gallery/img-2463.webp",
    width: 788,
    height: 1400,
    home: true,
    altEs: "Vista longitudinal de la cocina con isla y hornos empotrados",
    altEn: "Long view of the kitchen with island and built-in ovens",
  },
  {
    id: "img-2469",
    src: "/images/projects/gallery/img-2469.webp",
    width: 788,
    height: 1400,
    altEs: "Dormitorio individual con cabecero y cuadro abstracto",
    altEn: "Single bedroom with headboard and abstract artwork",
  },
  {
    id: "img-2471",
    src: "/images/projects/gallery/img-2471.webp",
    width: 788,
    height: 1400,
    altEs: "Armario a medida blanco con módulo de estantería en madera",
    altEn: "White bespoke wardrobe with a wood shelving module",
  },
  {
    id: "img-2475",
    src: "/images/projects/gallery/img-2475.webp",
    width: 788,
    height: 1400,
    altEs: "Sofá beige con cuadro abstracto y lámpara de malla negra",
    altEn: "Beige sofa with abstract art and a black mesh pendant",
  },
  {
    id: "img-2483",
    src: "/images/projects/gallery/img-2483.webp",
    width: 788,
    height: 1400,
    altEs: "Dormitorio con cabecero capitoné y acentos en azul",
    altEn: "Bedroom with a tufted headboard and blue accents",
  },
] as const;

function toGallery(locale: "es" | "en"): ProjectGalleryItem[] {
  return galleryAssets.map((item) => ({
    id: item.id,
    src: item.src,
    width: item.width,
    height: item.height,
    ...("home" in item && item.home ? { home: true as const } : {}),
    alt: locale === "es" ? item.altEs : item.altEn,
  }));
}

export function homeGalleryItems(
  gallery: readonly ProjectGalleryItem[],
): ProjectGalleryItem[] {
  return gallery.filter((item) => item.home);
}

const methodologyEs = {
  label: "METODOLOGÍA DE ESTUDIO",
  title: "Cada proyecto, una mirada integral",
  lead: "No concebimos la reforma sin el interiorismo, ni el interiorismo sin la climatización. Resolvemos la ecuación completa para crear hogares sin fisuras.",
  pillars: [
    {
      number: "01",
      title: "Coherencia técnica y estética",
      description:
        "Un único interlocutor desde el primer anteproyecto conceptual hasta la colocación de la última pieza de iluminación y entrega de llaves.",
      footnote: "Garantía de ejecución",
      icon: "check_circle" as const,
    },
    {
      number: "02",
      title: "Tecnología invisible",
      description:
        "El confort térmico y acústico se siente, no se ve. Rejillas ocultas, suelo radiante continuo y domótica integrada que respeta la pureza visual de los espacios.",
      footnote: "Clima y eficiencia A+",
      icon: "air" as const,
    },
    {
      number: "03",
      title: "Artesanía y detalle",
      description:
        "Ebanistería a medida, piedras naturales seleccionadas en cantera y revocos a la cal aplicados por artesanos especialistas en arquitectura residencial.",
      footnote: "Materiales nobles",
      icon: "handshake" as const,
    },
  ] satisfies MethodologyPillar[],
};

const methodologyEn = {
  label: "STUDIO METHOD",
  title: "Every project, one integrated view",
  lead: "We do not conceive renovation without interiors, or interiors without climate. We solve the whole equation to create homes without seams.",
  pillars: [
    {
      number: "01",
      title: "Technical and aesthetic coherence",
      description:
        "A single point of contact from the first concept to the last light fitting and the handover of keys.",
      footnote: "Delivery guarantee",
      icon: "check_circle" as const,
    },
    {
      number: "02",
      title: "Invisible technology",
      description:
        "Thermal and acoustic comfort is felt, not seen. Hidden grilles, continuous underfloor heating and integrated automation that respect the visual purity of the spaces.",
      footnote: "Climate and A+ efficiency",
      icon: "air" as const,
    },
    {
      number: "03",
      title: "Craft and detail",
      description:
        "Bespoke cabinetry, natural stones selected at the quarry and lime plasters applied by craftspeople specialised in residential architecture.",
      footnote: "Noble materials",
      icon: "handshake" as const,
    },
  ] satisfies MethodologyPillar[],
};

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
        "Selección de proyectos residenciales donde convergen diseño, ejecución y confort técnico.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "/images/projects/gallery/img-2452.webp",
        alt: "Salón con sofá texturado, mesa ovalada de madera y butaca mostaza",
      },
    },
    grid: {
      label: "PROYECTOS RECIENTES",
      title: "Viviendas recientes",
      lead: "Intervenciones que equilibran la nobleza de los materiales naturales y el rigor técnico de la climatización por aerotermia oculta.",
    },
    gallery: toGallery("es"),
    methodology: methodologyEs,
    cta: {
      label: "CONTACTO",
      title: "¿Tu vivienda puede ser el próximo proyecto?",
      description:
        "Hablemos de distribución, materiales y alcance. Analizamos la viabilidad técnica y el potencial estético de tu hogar sin compromiso.",
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
        "A selection of residential projects where design, delivery and technical comfort converge.",
      cta: "Start a project",
      image: {
        src: "/images/projects/gallery/img-2452.webp",
        alt: "Living room with a textured sofa, oval wood coffee table and mustard armchair",
      },
    },
    grid: {
      label: "RECENT PROJECTS",
      title: "Recent homes",
      lead: "Interventions that balance the nobility of natural materials with the technical rigour of concealed air-source climate.",
    },
    gallery: toGallery("en"),
    methodology: methodologyEn,
    cta: {
      label: "CONTACT",
      title: "Could your home be the next project?",
      description:
        "Let's talk about layout, materials and scope. We assess the technical feasibility and the aesthetic potential of your home, with no obligation.",
    },
  },
});
