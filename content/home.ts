import { defineCopy } from "@/lib/i18n";
import type { GalleryItem, ProcessStep } from "@/lib/types";
import { site } from "@/content/site";

export type TimelineStep = {
  phase: string;
  title: string;
  image: GalleryItem["image"];
};

export type MaterialTile = {
  id: string;
  title: string;
  caption: string;
  image: GalleryItem["image"];
};

export const homeCopy = defineCopy({
  es: {
    meta: {
      title: "Espacios pensados al detalle",
      description:
        "Diseñamos viviendas para ser vividas: interiorismo, reforma, mobiliario y climatización integrados en un único proyecto en Madrid y noroeste.",
    },
    hero: {
      seoTitle: "Estudio de interiorismo y reforma integral en Madrid | aireformas",
      titleLine1: "ESPACIOS PENSADOS",
      titleLine2: "AL DETALLE",
      subtitle:
        "Interiorismo, reforma, mobiliario y climatización en un único proyecto.",
      pillars: site.brandLine,
      scrollLabel: "Scroll",
      primaryCta: { label: "Descubrir proyectos", href: "/proyectos" },
      secondaryCta: { label: "Hablar de mi proyecto", href: "/contacto" },
      heroImage: {
        src: "/images/hero-interior-2560.jpg",
        alt: "Salón con TV integrada y panel de climatización discreto en la pared; interiorismo, reforma y confort en un único espacio",
      },
      stripImages: [
        {
          src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&h=1200&q=90",
          alt: "Detalle de luz arquitectónica en interior moderno",
        },
        {
          src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&h=1200&q=90",
          alt: "Detalle de madera y proporción",
        },
        {
          src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&h=1200&q=90",
          alt: "Textura de piedra y material",
        },
      ],
    },
    light: {
      label: "01 / ARQUITECTURA DE LA LUZ",
      verticalLabel: "UNA ARQUITECTURA DE LA LUZ",
      title: "Material, proporción y silencio",
      lead: "Concebimos la arquitectura interior como una disciplina donde el vacío, la luz natural y los acabados orgánicos dialogan sin estridencias. Cada superficie responde a una función táctil y cada línea busca calmar la mirada.",
      image: {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=90",
        alt: "Interior moderno con luz cálida y materiales naturales",
      },
    },
    projects: {
      label: "03 / PROYECTOS SELECCIONADOS",
      title: "Viviendas recientes",
    },
    philosophy: {
      label: "02 / FILOSOFÍA",
      verticalLabel: "NUESTRA HISTORIA",
      title: "Nuestra forma de entender una vivienda",
      paragraphs: [
        "Un buen proyecto no termina en lo que ves.",
        "Diseñamos el espacio, los materiales y el mobiliario, pero también aquello que no se ve: iluminación, climatización, instalaciones y tecnología.",
        "Todo debe funcionar como un único sistema.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90",
        alt: "Espacio residencial con madera, luz y proporción",
      },
    },
    pillars: {
      label: "04 / DISCIPLINAS",
      title: "Cuatro disciplinas, un proyecto",
      lead: "Eliminamos la fricción entre arquitecto, interiorista, constructor y técnico de climatización fusionándolos en un solo estudio.",
      items: [
        {
          eyebrow: "01 / ESTÉTICA & FUNCIÓN",
          title: "Interiorismo",
          description: "Distribución, materiales, iluminación, cocinas, baños y carpintería.",
          href: "/interiorismo",
          image: {
            src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
            alt: "Salón con diseño de interiores",
          },
        },
        {
          eyebrow: "02 / CONSTRUCCIÓN",
          title: "Reforma",
          description: "Proyecto, licencias, construcción, instalaciones y dirección de obra.",
          href: "/reformas",
          image: {
            src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
            alt: "Vivienda en proceso de reforma",
          },
        },
        {
          eyebrow: "03 / EBANISTERÍA",
          title: "Mobiliario",
          description: "Mobiliario, piezas especiales, textiles e iluminación decorativa.",
          href: "/mobiliario",
          image: {
            src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
            alt: "Carpintería y mobiliario a medida",
          },
        },
        {
          eyebrow: "04 / TECNOLOGÍA INVISIBLE",
          title: "Climatización",
          description: "Aerotermia, suelo radiante, conductos, ACS y control inteligente.",
          href: "/climate",
          image: {
            src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
            alt: "Confort térmico en salón residencial",
          },
        },
      ],
    },
    timeline: {
      label: "05 / PROCESO VISUAL",
      title: "Del espacio vacío a la casa terminada",
      lead: "Acompañamos cada fase con rigor milimétrico, desde la primera demolición hasta el último textil planchado.",
      steps: [
        {
          phase: "Before",
          title: "El espacio original",
          image: {
            src: "/images/timeline/timeline-before.jpg",
            alt: "Estancia vacía antes de la reforma, con parquet de espiga y ventana alta",
          },
        },
        {
          phase: "Design",
          title: "Plano y concepto",
          image: {
            src: "/images/timeline/timeline-design.jpg",
            alt: "Plano, boceto y muestras de piedra, roble y lino del proyecto",
          },
        },
        {
          phase: "Build",
          title: "Obra coordinada",
          image: {
            src: "/images/timeline/timeline-build.jpg",
            alt: "La misma estancia en obra, con suelo protegido e instalaciones vistas",
          },
        },
        {
          phase: "Live",
          title: "Vivienda terminada",
          image: {
            src: "/images/timeline/timeline-live.jpg",
            alt: "Vivienda terminada: mismo salón con sofá de lino, roble y luz de tarde",
          },
        },
      ] satisfies TimelineStep[],
    },
    materials: {
      label: "06 / MATERIA PRIMA",
      title: "Materiales que definen el espacio",
      lead: "Seleccionamos texturas vivas que envejecen con dignidad y aportan serenidad cromática.",
      tiles: [
        {
          id: "stone",
          title: "Stone",
          caption: "Piedra, continuidad y peso visual.",
          image: {
            src: "/images/materials/material-stone.jpg",
            alt: "Piedra natural continua, textura y peso visual",
          },
        },
        {
          id: "wood",
          title: "Wood",
          caption: "Calidez, veta y carpintería.",
          image: {
            src: "/images/materials/material-wood.jpg",
            alt: "Veta de madera y detalle de carpintería",
          },
        },
        {
          id: "metal",
          title: "Metal",
          caption: "Perfiles, herrajes y línea.",
          image: {
            src: "/images/materials/material-metal.jpg",
            alt: "Perfiles metálicos y herrajes lineales",
          },
        },
        {
          id: "textile",
          title: "Textile",
          caption: "Capas, tacto y acústica.",
          image: {
            src: "/images/materials/material-textile.jpg",
            alt: "Capas de lino y lana, tacto y textura",
          },
        },
        {
          id: "light",
          title: "Light",
          caption: "Escenas, sombra y confort.",
          image: {
            src: "/images/materials/material-light.jpg",
            alt: "Luz natural, sombra y confort en el interior",
          },
        },
      ] satisfies MaterialTile[],
    },
    comfort: {
      label: "07 / CONFORT TÉRMICO",
      claim: "Climatización invisible",
      claimNote: "Confort térmico todo el año",
      title: "Confort que se siente",
      subline: "Tecnología que desaparece.",
      tags: ["Aerotermia", "Suelo radiante", "Climatización invisible", "ACS", "Control inteligente"],
      link: { label: "AIREFORMAS Climate", href: "/climate" },
      image: {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
        alt: "Salón con climatización discreta",
      },
    },
    bespoke: {
      label: "08 / A MEDIDA",
      title: "Piezas hechas para tu espacio",
      description:
        "Diseñamos carpintería que forma parte del proyecto: armarios, vestidores, cocinas, muebles TV y baños. Cada pieza se fabrica e instala con el mismo criterio de proporción, material y acabado que el resto de la vivienda.",
      href: "/mobiliario",
      cta: "Descubrir mobiliario",
      teasers: [
        {
          category: "Salón",
          image: {
            src: "/images/distributions/67_SALON_jotajotape_NEXT.jpg",
            alt: "Salón con mueble TV modular en roble y estantería de cubos",
          },
        },
        {
          category: "Juvenil",
          image: {
            src: "/images/distributions/31_jotajotape-habitacion-juvenil.jpg",
            alt: "Habitación juvenil con librería, cama y escritorio",
          },
        },
        {
          category: "Vestidor",
          image: {
            src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
            alt: "Vestidor walk-in con puertas de cristal e iluminación integrada",
          },
        },
      ],
    },
    process: {
      label: "09 EL PROCESO",
      title: "De la primera visita a la entrega",
      lead: "Seis fases claras con un solo interlocutor.",
      steps: [
        { number: "01", title: "Escuchamos", description: "Necesidades, estilo de vida, vivienda e inversión." },
        { number: "02", title: "Diseñamos", description: "Distribución, materiales, iluminación y renders." },
        { number: "03", title: "Planificamos", description: "Presupuesto, calendario, licencias y compras." },
        { number: "04", title: "Construimos", description: "Un único equipo coordina toda la ejecución." },
        { number: "05", title: "Equipamos", description: "Mobiliario, iluminación, textiles y tecnología." },
        { number: "06", title: "Entregamos", description: "Tu vivienda completamente terminada." },
      ] satisfies ProcessStep[],
    },
    contact: {
      label: "CONTACTO",
      title: "Hablar de mi proyecto",
      description: "Cuéntanos qué necesitas y te respondemos con una primera orientación sin compromiso.",
    },
  },
  en: {
    meta: {
      title: "Spaces considered in detail",
      description:
        "We design homes to be lived in: interior design, renovation, furniture and climate integrated in a single project in Madrid and the northwest.",
    },
    hero: {
      seoTitle: "Interior design and full renovation studio in Madrid | aireformas",
      titleLine1: "SPACES CONSIDERED",
      titleLine2: "IN DETAIL",
      subtitle: "Interior design, renovation, furniture and climate in a single project.",
      pillars: site.brandLine,
      scrollLabel: "Scroll",
      primaryCta: { label: "View projects", href: "/proyectos" },
      secondaryCta: { label: "Start a project", href: "/contacto" },
      heroImage: {
        src: "/images/hero-interior-2560.jpg",
        alt: "Living room with an integrated TV and a discreet climate panel on the wall; interiors, renovation and comfort in one space",
      },
      stripImages: [
        {
          src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&h=1200&q=90",
          alt: "Architectural light detail in a modern interior",
        },
        {
          src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&h=1200&q=90",
          alt: "Wood and proportion detail",
        },
        {
          src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&h=1200&q=90",
          alt: "Stone texture and material",
        },
      ],
    },
    light: {
      label: "01 / ARCHITECTURE OF LIGHT",
      verticalLabel: "AN ARCHITECTURE OF LIGHT",
      title: "Material, proportion and quiet",
      lead: "We treat interior architecture as a discipline in which void, daylight and organic finishes speak without noise. Every surface has a tactile role and every line is meant to rest the eye.",
      image: {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=90",
        alt: "Modern interior with warm light and natural materials",
      },
    },
    projects: {
      label: "03 / SELECTED PROJECTS",
      title: "Recent homes",
    },
    philosophy: {
      label: "02 / PHILOSOPHY",
      verticalLabel: "OUR STORY",
      title: "How we understand a home",
      paragraphs: [
        "A good project does not end with what you see.",
        "We design the space, the materials and the furniture, and also what stays unseen: lighting, climate, services and technology.",
        "Everything has to work as one system.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90",
        alt: "Residential space with wood, light and proportion",
      },
    },
    pillars: {
      label: "04 / DISCIPLINES",
      title: "Four disciplines, one project",
      lead: "We remove the friction between architect, interior designer, builder and climate engineer by bringing them into one studio.",
      items: [
        {
          eyebrow: "01 / AESTHETICS & FUNCTION",
          title: "Interior design",
          description: "Layout, materials, lighting, kitchens, bathrooms and joinery.",
          href: "/interiorismo",
          image: {
            src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
            alt: "Living room with interior design",
          },
        },
        {
          eyebrow: "02 / CONSTRUCTION",
          title: "Renovation",
          description: "Design, permits, construction, services and site management.",
          href: "/reformas",
          image: {
            src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
            alt: "Home during renovation",
          },
        },
        {
          eyebrow: "03 / JOINERY",
          title: "Furniture",
          description: "Furniture, special pieces, textiles and decorative lighting.",
          href: "/mobiliario",
          image: {
            src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
            alt: "Bespoke joinery and furniture",
          },
        },
        {
          eyebrow: "04 / INVISIBLE TECHNOLOGY",
          title: "Climate",
          description: "Air-source heat pumps, underfloor heating, ductwork, hot water and smart control.",
          href: "/climate",
          image: {
            src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
            alt: "Thermal comfort in a residential living room",
          },
        },
      ],
    },
    timeline: {
      label: "05 / VISUAL PROCESS",
      title: "From an empty room to a finished home",
      lead: "We follow every phase with millimetre-level care, from the first demolition to the last pressed textile.",
      steps: [
        {
          phase: "Before",
          title: "The original space",
          image: {
            src: "/images/timeline/timeline-before.jpg",
            alt: "Empty room before renovation, with herringbone parquet and a tall window",
          },
        },
        {
          phase: "Design",
          title: "Plan and concept",
          image: {
            src: "/images/timeline/timeline-design.jpg",
            alt: "Plan, sketch and samples of stone, oak and linen",
          },
        },
        {
          phase: "Build",
          title: "Coordinated construction",
          image: {
            src: "/images/timeline/timeline-build.jpg",
            alt: "The same room under construction, with protected flooring and exposed services",
          },
        },
        {
          phase: "Live",
          title: "Finished home",
          image: {
            src: "/images/timeline/timeline-live.jpg",
            alt: "Finished home: the same living room with a linen sofa, oak and afternoon light",
          },
        },
      ] satisfies TimelineStep[],
    },
    materials: {
      label: "06 / RAW MATERIAL",
      title: "Materials that define the space",
      lead: "We select living textures that age with dignity and bring chromatic calm.",
      tiles: [
        {
          id: "stone",
          title: "Stone",
          caption: "Stone, continuity and visual weight.",
          image: {
            src: "/images/materials/material-stone.jpg",
            alt: "Continuous natural stone, texture and visual weight",
          },
        },
        {
          id: "wood",
          title: "Wood",
          caption: "Warmth, grain and joinery.",
          image: {
            src: "/images/materials/material-wood.jpg",
            alt: "Wood grain and joinery detail",
          },
        },
        {
          id: "metal",
          title: "Metal",
          caption: "Profiles, hardware and line.",
          image: {
            src: "/images/materials/material-metal.jpg",
            alt: "Metal profiles and linear hardware",
          },
        },
        {
          id: "textile",
          title: "Textile",
          caption: "Layers, touch and acoustics.",
          image: {
            src: "/images/materials/material-textile.jpg",
            alt: "Layers of linen and wool, touch and texture",
          },
        },
        {
          id: "light",
          title: "Light",
          caption: "Scenes, shadow and comfort.",
          image: {
            src: "/images/materials/material-light.jpg",
            alt: "Daylight, shadow and comfort indoors",
          },
        },
      ] satisfies MaterialTile[],
    },
    comfort: {
      label: "07 / THERMAL COMFORT",
      claim: "Invisible climate",
      claimNote: "Thermal comfort all year",
      title: "Comfort you can feel",
      subline: "Technology that disappears.",
      tags: ["Air-source heat pump", "Underfloor heating", "Invisible climate", "Hot water", "Smart control"],
      link: { label: "AIREFORMAS Climate", href: "/climate" },
      image: {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85",
        alt: "Living room with discreet climate control",
      },
    },
    bespoke: {
      label: "08 / BESPOKE",
      title: "Pieces made for your space",
      description:
        "We design joinery that belongs to the project: wardrobes, dressing rooms, kitchens, TV units and bathrooms. Each piece is made and installed with the same sense of proportion, material and finish as the rest of the home.",
      href: "/mobiliario",
      cta: "Discover furniture",
      teasers: [
        {
          category: "Living room",
          image: {
            src: "/images/distributions/67_SALON_jotajotape_NEXT.jpg",
            alt: "Living room with modular oak TV unit and cubby shelving",
          },
        },
        {
          category: "Teen",
          image: {
            src: "/images/distributions/31_jotajotape-habitacion-juvenil.jpg",
            alt: "Teen room with library, bed and desk",
          },
        },
        {
          category: "Dressing room",
          image: {
            src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
            alt: "Walk-in dressing room with glass doors and integrated lighting",
          },
        },
      ],
    },
    process: {
      label: "09 THE PROCESS",
      title: "From the first visit to handover",
      lead: "Six clear phases with a single point of contact.",
      steps: [
        { number: "01", title: "We listen", description: "Needs, way of living, the home and the investment." },
        { number: "02", title: "We design", description: "Layout, materials, lighting and renders." },
        { number: "03", title: "We plan", description: "Budget, schedule, permits and procurement." },
        { number: "04", title: "We build", description: "One team coordinates the whole build." },
        { number: "05", title: "We furnish", description: "Furniture, lighting, textiles and technology." },
        { number: "06", title: "We hand over", description: "Your home, completely finished." },
      ] satisfies ProcessStep[],
    },
    contact: {
      label: "CONTACT",
      title: "Start a project",
      description: "Tell us what you need and we reply with a first orientation, with no obligation.",
    },
  },
});
