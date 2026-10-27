import { defineCopy } from "@/lib/i18n";
import type {
  DistributionItem,
  FaqItem,
  GalleryItem,
  ProcessStep,
} from "@/lib/types";

export const mobiliarioCopy = defineCopy({
  es: {
    meta: {
      title: "Mobiliario y carpintería a medida",
      description:
        "Cocinas, vestidores, armarios, muebles TV y carpintería integrada en la arquitectura. Diseño, fabricación e instalación en Madrid.",
    },
    hero: {
      label: "A medida",
      title: "Mobiliario",
      headline: "Made for your space",
      description: "Piezas que pertenecen a la arquitectura.",
      support:
        "Diseñamos, fabricamos e instalamos cocinas, vestidores, armarios, muebles TV y soluciones especiales alineadas con el proyecto.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "/images/mobiliario/mobiliario-hero.jpg",
        alt: "Vestidor walk-in con carpintería a medida en roble, puertas de cristal, tocador e iluminación integrada",
      },
      chips: [
        { id: "armarios", title: "Armarios y vestidores", icon: "checkroom" },
        { id: "cocinas", title: "Cocinas", icon: "kitchen" },
        { id: "banos", title: "Baños", icon: "bathtub" },
        { id: "especiales", title: "Piezas especiales", icon: "chair" },
      ],
    },
    editorial: {
      label: "ENFOQUE",
      verticalLabel: "A MEDIDA",
      title: "Piezas que completan la arquitectura",
      paragraphs: [
        "Medimos, diseñamos y fabricamos carpintería que respeta proporción, luz y circulación de la vivienda.",
        "Cocinas, vestidores y muebles especiales comparten materiales y criterio con el resto del proyecto.",
        "Fabricación, transporte e instalación con un equipo que conoce la obra y el diseño acordado.",
        "También resolvemos mostradores, recepciones, expositores, almacenaje y mobiliario corporativo a medida para oficinas y locales, siempre como extensión del mismo criterio de diseño.",
      ],
      image: {
        src: "/images/distributions/67_SALON_jotajotape_NEXT.jpg",
        alt: "Salón con mueble TV modular y estantería que completan la arquitectura del espacio",
      },
    },
    solutions: {
      label: "SOLUCIONES",
      title: "Carpintería para cada estancia",
      items: [
        { title: "Armarios y vestidores", description: "Empotrados, correderas o walk-in: distribución interior pensada para tu día a día.", image: { src: "/images/mobiliario/mobiliario-armarios.jpg", alt: "Armario y vestidor a medida en roble con puertas de cristal e iluminación LED" } },
        { title: "Cocinas", description: "Mobiliario, encimeras e iluminación integrados con el resto de la vivienda.", image: { src: "/images/mobiliario/mobiliario-cocina.jpg", alt: "Cocina a medida en roble y crema con isla y encimera de piedra" } },
        { title: "Baños", description: "Muebles suspendidos, encimeras y almacenaje oculto con materiales duraderos.", image: { src: "/images/mobiliario/mobiliario-bano.jpg", alt: "Baño con mueble suspendido a medida, encimera de piedra y espejo iluminado" } },
        { title: "Piezas especiales", description: "Muebles TV, bibliotecas, bars y paneles que completan la arquitectura del espacio.", image: { src: "/images/mobiliario/mobiliario-especiales.jpg", alt: "Panelado y mueble TV a medida en roble con estantería integrada" } },
      ],
    },
    distributions: {
      label: "DISTRIBUCIONES",
      title: "Soluciones que se viven",
      lead: "Desliza: salones, habitaciones y vestidores pensados para crecer contigo.",
      hint: "Desliza",
      items: [
        {
          id: "salon-tv",
          number: "01",
          category: "Salón",
          title: "Mueble TV modular",
          caption: "Vitrinas, bajo y cubos: almacenamiento que ordena la sala.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/67_SALON_jotajotape_NEXT.jpg",
            alt: "Salón con mueble TV modular en roble y estantería de cubos",
          },
        },
        {
          id: "pasillo-nicho",
          number: "02",
          category: "Pieza especial",
          title: "Nicho de trabajo",
          caption: "Un hueco que aprovecha el paso y guarda sin ensuciar la vista.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/26_jotajotape-habitacion-juvenil.jpg",
            alt: "Pasillo con estantería empotrada y zona de trabajo minimalista",
          },
        },
        {
          id: "juvenil-biblioteca",
          number: "03",
          category: "Juvenil",
          title: "Estudio con cama",
          caption: "Librería, escritorio y cama: un rincón que estudia y descansa.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/31_jotajotape-habitacion-juvenil.jpg",
            alt: "Habitación juvenil con librería gris, cama amarilla y escritorio",
          },
        },
        {
          id: "juvenil-consola",
          number: "04",
          category: "Juvenil",
          title: "Cama y escritorio L",
          caption: "Cajones, TV y mesa en un solo gesto. Ideal para espacios compactos.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/32_jotajotape-habitacion-juvenil.jpg",
            alt: "Habitación juvenil con escritorio, cama y TV integrada",
          },
        },
        {
          id: "litera-tren",
          number: "05",
          category: "Juvenil",
          title: "Litera con escritorio",
          caption: "Dos alturas, cajonera y mesa bajo la ventana: jugar, dormir, estudiar.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/18_jotajotape-litera-tren.jpg",
            alt: "Litera juvenil con escritorio de madera y cajonera azul",
          },
        },
        {
          id: "infantil-buhardilla",
          number: "06",
          category: "Infantil",
          title: "Bajo cubierta",
          caption: "Cama con cajones y escritorio: la buhardilla se convierte en mundo.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/04_jotajotape-cuna-convertible.jpg",
            alt: "Habitación infantil bajo cubierta con cama, escritorio y ventana circular",
          },
        },
        {
          id: "infantil-juego",
          number: "07",
          category: "Infantil",
          title: "Dormir y jugar",
          caption: "Cómoda, cama-cajón y librería: crece con el ritmo de la infancia.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/03_jotajotape-cuna-convertible.jpg",
            alt: "Habitación infantil con cómoda, cama con cajones y escritorio",
          },
        },
        {
          id: "armario-batientes",
          number: "08",
          category: "Armario",
          title: "Interior a medida",
          caption: "Puertas abiertas: barras, baldas y cajones según cómo te vistes.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/21_BATIENTES_jotajotape_NEXT.jpg",
            alt: "Armario de puertas batientes abierto con interior de madera clara",
          },
        },
        {
          id: "armario-corredera",
          number: "09",
          category: "Armario",
          title: "Corredera con espejo",
          caption: "Paneles lacados y espejo: guarda mucho, ocupa poco paso.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/40_jotajotape_NEXT.jpg",
            alt: "Armario corredero lacado con panel espejo y sección abierta",
          },
        },
        {
          id: "vestidor-cristal",
          number: "10",
          category: "Vestidor",
          title: "Walk-in con cristal",
          caption: "Módulos iluminados, tocador y librería: el vestidor como estancia.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
            alt: "Vestidor walk-in con puertas de cristal, tocador y librería",
          },
        },
        {
          id: "vestidor-oscuro",
          number: "11",
          category: "Vestidor",
          title: "Cristal y zapatero",
          caption: "Perfiles oscuros, LED y rejillas: cada prenda tiene su sitio.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/34_jotajotape_NEXT.jpg",
            alt: "Vestidor con puertas de cristal oscuro, iluminación LED y zapatero",
          },
        },
        {
          id: "vestidor-abierto",
          number: "12",
          category: "Vestidor",
          title: "Distribución abierta",
          caption: "Baldas, barras y tocador central: orden visible, lujo cotidiano.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/57_jotajotape_NEXT.jpg",
            alt: "Vestidor abierto en U con baldas de roble, tocador y pouf",
          },
        },
      ] satisfies DistributionItem[],
    },
    approach: {
      label: "ENFOQUE",
      title: "Piezas que pertenecen al espacio",
      items: [
        { title: "Integración arquitectónica", description: "Proporción, líneas y materiales alineados con el proyecto global de la vivienda." },
        { title: "Materiales seleccionados", description: "Maderas, lacados, piedra y herrajes elegidos por uso, tacto y durabilidad." },
        { title: "Iluminación y detalle", description: "Perfiles LED, tiradores ocultos y acabados que se ven y se sienten en el día a día." },
        { title: "Fabricación e instalación", description: "Un solo equipo coordina medición, taller y montaje en obra." },
      ],
      crossLead: "Obra e interiorismo en",
      reformas: "Reformas",
      crossAnd: "e",
      interiorismo: "Interiorismo",
      crossEnd: ". Climatización en",
      climate: "Climate",
    },
    process: {
      label: "PROCESO",
      title: "De la medición a la instalación",
      lead: "Cuatro pasos con propuesta 3D, presupuesto cerrado y montaje en obra.",
      steps: [
        { number: "01", title: "Medición in situ", description: "Revisamos el espacio, alturas y puntos conflictivos." },
        { number: "02", title: "Propuesta 3D", description: "Visualizas distribución, acabados y presupuesto cerrado." },
        { number: "03", title: "Fabricación", description: "Plazo habitual de 4 a 6 semanas según complejidad." },
        { number: "04", title: "Instalación", description: "Montaje y revisión final contigo." },
      ] satisfies ProcessStep[],
    },
    gallery: {
      label: "GALERÍA",
      title: "Detalle de carpintería",
      items: [
        {
          caption: "Interior batiente",
          image: {
            src: "/images/distributions/21_BATIENTES_jotajotape_NEXT.jpg",
            alt: "Armario batiente abierto con interior de madera, barras y cajones",
          },
        },
        {
          caption: "Corredera lacada",
          image: {
            src: "/images/distributions/40_jotajotape_NEXT.jpg",
            alt: "Armario corredero lacado con panel espejo y sección abierta",
          },
        },
        {
          caption: "Vestidor cristal",
          image: {
            src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
            alt: "Vestidor walk-in con puertas de cristal, tocador y librería",
          },
        },
        {
          caption: "Módulos abiertos",
          image: {
            src: "/images/distributions/57_jotajotape_NEXT.jpg",
            alt: "Vestidor abierto con baldas de roble, barras e iluminación LED",
          },
        },
      ] satisfies GalleryItem[],
    },
    faq: [
      { id: "plazo", question: "¿Cuánto tarda un armario o mueble a medida?", answer: "El plazo habitual de fabricación e instalación es de 4 a 6 semanas, según dimensiones, acabados y complejidad." },
      { id: "presupuesto", question: "¿El presupuesto incluye instalación?", answer: "Sí. Nuestras propuestas incluyen diseño, fabricación, transporte e instalación, salvo que indiquemos lo contrario por escrito." },
      { id: "integracion", question: "¿El mobiliario se diseña junto al resto del proyecto?", answer: "Sí. La carpintería forma parte del proyecto integral: materiales, iluminación y distribución se definen en conjunto." },
      { id: "garantia", question: "¿Ofrecéis garantía?", answer: "Sí, garantía en fabricación e instalación. Los herrajes cuentan con la garantía del fabricante." },
    ] satisfies FaqItem[],
    cta: {
      title: "Hablemos de tu próximo mobiliario",
      description: "Cuéntanos la estancia o envíanos fotos del espacio. Te orientamos sin compromiso.",
    },
  },
  en: {
    meta: {
      title: "Bespoke furniture and joinery",
      description:
        "Kitchens, wardrobes and joinery integrated into the architecture. Design, making and installation in Madrid, by one team.",
    },
    hero: {
      label: "Bespoke",
      title: "Furniture",
      headline: "Made for your space",
      description: "Pieces that belong to the architecture.",
      support:
        "We design, make and install kitchens, dressing rooms, wardrobes, TV units and special solutions aligned with the project.",
      cta: "Start a project",
      image: {
        src: "/images/mobiliario/mobiliario-hero.jpg",
        alt: "Walk-in dressing room with bespoke oak joinery, glass doors, vanity and integrated lighting",
      },
      chips: [
        { id: "armarios", title: "Wardrobes and dressing rooms", icon: "checkroom" },
        { id: "cocinas", title: "Kitchens", icon: "kitchen" },
        { id: "banos", title: "Bathrooms", icon: "bathtub" },
        { id: "especiales", title: "Special pieces", icon: "chair" },
      ],
    },
    editorial: {
      label: "APPROACH",
      verticalLabel: "BESPOKE",
      title: "Pieces that complete the architecture",
      paragraphs: [
        "We measure, design and make joinery that respects the proportion, light and circulation of the home.",
        "Kitchens, dressing rooms and special pieces share materials and criteria with the rest of the project.",
        "Making, delivery and installation by a team that knows the site and the agreed design.",
        "We also resolve counters, receptions, display units, storage and corporate bespoke furniture for offices and retail, always as an extension of the same design criteria.",
      ],
      image: {
        src: "/images/distributions/67_SALON_jotajotape_NEXT.jpg",
        alt: "Living room with modular TV unit and shelving that complete the architecture of the space",
      },
    },
    solutions: {
      label: "SOLUTIONS",
      title: "Joinery for every room",
      items: [
        { title: "Wardrobes and dressing rooms", description: "Built-in, sliding or walk-in: an interior layout planned for daily use.", image: { src: "/images/mobiliario/mobiliario-armarios.jpg", alt: "Bespoke oak wardrobe and dressing room with glass doors and LED lighting" } },
        { title: "Kitchens", description: "Furniture, worktops and lighting integrated with the rest of the home.", image: { src: "/images/mobiliario/mobiliario-cocina.jpg", alt: "Bespoke oak and cream kitchen with island and stone worktop" } },
        { title: "Bathrooms", description: "Wall-hung units, worktops and concealed storage in durable materials.", image: { src: "/images/mobiliario/mobiliario-bano.jpg", alt: "Bathroom with wall-hung bespoke vanity, stone countertop and lit mirror" } },
        { title: "Special pieces", description: "TV units, libraries, bars and panels that complete the architecture of the space.", image: { src: "/images/mobiliario/mobiliario-especiales.jpg", alt: "Custom oak TV wall paneling with integrated shelving" } },
      ],
    },
    distributions: {
      label: "LAYOUTS",
      title: "Solutions you live in",
      lead: "Scroll through: living rooms, bedrooms and dressing rooms designed to grow with you.",
      hint: "Scroll",
      items: [
        {
          id: "salon-tv",
          number: "01",
          category: "Living room",
          title: "Modular TV unit",
          caption: "Glass cabinets, lowboard and cubbies: storage that steadies the room.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/67_SALON_jotajotape_NEXT.jpg",
            alt: "Living room with modular oak TV unit and cubby shelving",
          },
        },
        {
          id: "pasillo-nicho",
          number: "02",
          category: "Special piece",
          title: "Work niche",
          caption: "A recess that uses the hallway and stores without cluttering the view.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/26_jotajotape-habitacion-juvenil.jpg",
            alt: "Hallway with built-in shelving and a minimalist work niche",
          },
        },
        {
          id: "juvenil-biblioteca",
          number: "03",
          category: "Teen",
          title: "Study with bed",
          caption: "Library, desk and bed: a corner that studies and rests.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/31_jotajotape-habitacion-juvenil.jpg",
            alt: "Teen room with grey library, yellow bed and desk",
          },
        },
        {
          id: "juvenil-consola",
          number: "04",
          category: "Teen",
          title: "L-shaped bed and desk",
          caption: "Drawers, TV and desk in one move. Ideal for compact rooms.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/32_jotajotape-habitacion-juvenil.jpg",
            alt: "Teen room with desk, bed and integrated TV",
          },
        },
        {
          id: "litera-tren",
          number: "05",
          category: "Teen",
          title: "Bunk with desk",
          caption: "Two levels, drawers and a desk by the window: play, sleep, study.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/18_jotajotape-litera-tren.jpg",
            alt: "Teen bunk bed with wood desk and blue drawers",
          },
        },
        {
          id: "infantil-buhardilla",
          number: "06",
          category: "Kids",
          title: "Under the eaves",
          caption: "Bed with drawers and a desk: the attic becomes a world of its own.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/04_jotajotape-cuna-convertible.jpg",
            alt: "Kids attic room with bed, desk and circular window",
          },
        },
        {
          id: "infantil-juego",
          number: "07",
          category: "Kids",
          title: "Sleep and play",
          caption: "Chest, drawer bed and shelves: grows with childhood.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/03_jotajotape-cuna-convertible.jpg",
            alt: "Kids room with chest of drawers, drawer bed and desk",
          },
        },
        {
          id: "armario-batientes",
          number: "08",
          category: "Wardrobe",
          title: "Bespoke interior",
          caption: "Doors open: rails, shelves and drawers fitted to how you dress.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/21_BATIENTES_jotajotape_NEXT.jpg",
            alt: "Hinged wardrobe open with light wood interior",
          },
        },
        {
          id: "armario-corredera",
          number: "09",
          category: "Wardrobe",
          title: "Sliding with mirror",
          caption: "Lacquered panels and a mirror: stores a lot, takes little walkway.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/40_jotajotape_NEXT.jpg",
            alt: "Sliding lacquered wardrobe with mirror panel and open section",
          },
        },
        {
          id: "vestidor-cristal",
          number: "10",
          category: "Dressing room",
          title: "Glass walk-in",
          caption: "Lit modules, vanity and bookcase: the dressing room as a room.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
            alt: "Walk-in dressing room with glass doors, vanity and bookcase",
          },
        },
        {
          id: "vestidor-oscuro",
          number: "11",
          category: "Dressing room",
          title: "Glass and shoe racks",
          caption: "Dark frames, LED and grids: every piece has its place.",
          aspect: "portrait",
          image: {
            src: "/images/distributions/34_jotajotape_NEXT.jpg",
            alt: "Dressing room with dark glass doors, LED lighting and shoe racks",
          },
        },
        {
          id: "vestidor-abierto",
          number: "12",
          category: "Dressing room",
          title: "Open layout",
          caption: "Shelves, rails and a central vanity: visible order, everyday luxury.",
          aspect: "panorama",
          image: {
            src: "/images/distributions/57_jotajotape_NEXT.jpg",
            alt: "Open U-shaped dressing room with oak shelves, vanity and ottoman",
          },
        },
      ] satisfies DistributionItem[],
    },
    approach: {
      label: "APPROACH",
      title: "Pieces that belong to the space",
      items: [
        { title: "Architectural integration", description: "Proportion, lines and materials aligned with the overall project of the home." },
        { title: "Selected materials", description: "Woods, lacquers, stone and hardware chosen for use, touch and durability." },
        { title: "Lighting and detail", description: "LED profiles, concealed handles and finishes you see and feel every day." },
        { title: "Making and installation", description: "One team coordinates measuring, workshop and installation on site." },
      ],
      crossLead: "Construction and interiors in",
      reformas: "Renovation",
      crossAnd: "and",
      interiorismo: "Interiors",
      crossEnd: ". Climate control in",
      climate: "Climate",
    },
    process: {
      label: "PROCESS",
      title: "From measuring to installation",
      lead: "Four steps with a 3D proposal, a fixed quote and installation on site.",
      steps: [
        { number: "01", title: "On-site measuring", description: "We review the space, heights and difficult points." },
        { number: "02", title: "3D proposal", description: "You see the layout, finishes and a fixed quote." },
        { number: "03", title: "Making", description: "A typical lead time of 4 to 6 weeks, depending on complexity." },
        { number: "04", title: "Installation", description: "Fitting and a final review with you." },
      ] satisfies ProcessStep[],
    },
    gallery: {
      label: "GALLERY",
      title: "Joinery detail",
      items: [
        {
          caption: "Hinged interior",
          image: {
            src: "/images/distributions/21_BATIENTES_jotajotape_NEXT.jpg",
            alt: "Open hinged wardrobe with wood interior, rails and drawers",
          },
        },
        {
          caption: "Lacquered sliding",
          image: {
            src: "/images/distributions/40_jotajotape_NEXT.jpg",
            alt: "Lacquered sliding wardrobe with mirror panel and open section",
          },
        },
        {
          caption: "Glass walk-in",
          image: {
            src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
            alt: "Walk-in dressing room with glass doors, vanity and bookcase",
          },
        },
        {
          caption: "Open modules",
          image: {
            src: "/images/distributions/57_jotajotape_NEXT.jpg",
            alt: "Open dressing room with oak shelves, rails and LED lighting",
          },
        },
      ] satisfies GalleryItem[],
    },
    faq: [
      { id: "plazo", question: "How long does a bespoke wardrobe or piece take?", answer: "Making and installation typically take 4 to 6 weeks, depending on size, finishes and complexity." },
      { id: "presupuesto", question: "Does the quote include installation?", answer: "Yes. Our proposals include design, making, delivery and installation, unless we state otherwise in writing." },
      { id: "integracion", question: "Is the furniture designed with the rest of the project?", answer: "Yes. Joinery is part of the integrated project: materials, lighting and layout are defined together." },
      { id: "garantia", question: "Do you offer a warranty?", answer: "Yes, on making and installation. Hardware carries the manufacturer's warranty." },
    ] satisfies FaqItem[],
    cta: {
      title: "Let's talk about your next piece of furniture",
      description: "Tell us about the room or send photos of the space. We advise you with no obligation.",
    },
  },
});
