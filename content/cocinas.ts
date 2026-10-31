import { defineCopy } from "@/lib/i18n";
import type { CatalogPanel, FaqItem, FinishPaletteCopy, ProcessStep } from "@/lib/types";

const finishesEs: FinishPaletteCopy = {
  chip: "Acabados",
  title: "Frentes y encimeras",
  lead: "Laca, madera y piedra elegidos por uso diario, mantenimiento y la luz de la cocina.",
  groups: [
    {
      id: "frentes",
      label: "Frentes",
      swatches: [
        { id: "roble-claro", label: "Roble claro" },
        { id: "roble", label: "Roble" },
        { id: "blanco-roto", label: "Blanco roto" },
        { id: "marfil", label: "Marfil" },
        { id: "arena", label: "Arena" },
        { id: "gris-topo", label: "Gris topo" },
        { id: "grafito", label: "Grafito" },
        { id: "salvia", label: "Salvia" },
        { id: "negro", label: "Negro" },
      ],
    },
    {
      id: "encimeras",
      label: "Encimeras",
      swatches: [
        { id: "piedra-clara", label: "Piedra clara" },
        { id: "piedra-gris", label: "Piedra gris" },
        { id: "encimera-madera", label: "Madera" },
        { id: "encimera-negra", label: "Negro" },
      ],
    },
  ],
};

const finishesEn: FinishPaletteCopy = {
  chip: "Finishes",
  title: "Fronts and worktops",
  lead: "Lacquer, wood and stone chosen for daily use, upkeep and kitchen light.",
  groups: [
    {
      id: "fronts",
      label: "Fronts",
      swatches: [
        { id: "roble-claro", label: "Light oak" },
        { id: "roble", label: "Oak" },
        { id: "blanco-roto", label: "Off-white" },
        { id: "marfil", label: "Ivory" },
        { id: "arena", label: "Sand" },
        { id: "gris-topo", label: "Taupe" },
        { id: "grafito", label: "Graphite" },
        { id: "salvia", label: "Sage" },
        { id: "negro", label: "Black" },
      ],
    },
    {
      id: "worktops",
      label: "Worktops",
      swatches: [
        { id: "piedra-clara", label: "Light stone" },
        { id: "piedra-gris", label: "Grey stone" },
        { id: "encimera-madera", label: "Wood" },
        { id: "encimera-negra", label: "Black" },
      ],
    },
  ],
};

const panelsEs: CatalogPanel[] = [
  {
    id: "lineal",
    chip: "Lineal",
    title: "Un solo frente",
    lead: "Una pared larga o un estudio: triángulo de trabajo en línea y máximo paso libre.",
    variants: ["Gola", "Tirador", "Columna de hornos"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-lineal.webp",
        alt: "Cocina lineal premium con un solo frente en roble y crema",
        caption: "Frente continuo",
      },
      {
        src: "/images/cocinasv2/cocina-lineal-2.webp",
        alt: "Cocina lineal en estudio con encimera clara",
        caption: "Estudio",
      },
    ],
  },
  {
    id: "paralelo",
    chip: "En paralelo",
    title: "Dos frentes y un paso",
    lead: "Cocinas estrechas: cocción a un lado, lavado o columnas al otro, con pasillo cómodo.",
    variants: ["Paso central", "Columnas enfrentadas"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-paralelo.webp",
        alt: "Cocina en paralelo con dos frentes y pasillo central",
        caption: "Pasillo central",
      },
      {
        src: "/images/cocinasv2/cocina-paralelo-3.webp",
        alt: "Cocina galley con frentes enfrentados y luz al fondo",
        caption: "Dos frentes",
      },
    ],
  },
  {
    id: "ele",
    chip: "En L",
    title: "Dos paredes y sitio para la mesa",
    lead: "La esquina organiza agua, fuego y almacenaje; el resto queda para comedor o estar.",
    variants: ["Esquina ciega", "Esquina abierta"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-ele.webp",
        alt: "Cocina en L con comedor y luz natural",
        caption: "Esquina abierta",
      },
      {
        src: "/images/cocinasv2/cocina-ele-2.webp",
        alt: "Cocina en L con mesa y carpintería clara",
        caption: "Con comedor",
      },
      {
        src: "/images/cocinasv2/cocina-ele-3.webp",
        alt: "Detalle de esquina en L con luz bajo mueble",
        caption: "Detalle esquina",
      },
    ],
  },
  {
    id: "u",
    chip: "En U",
    title: "Tres frentes",
    lead: "Más metros de encimera y cajones. Requiere hueco generoso y buena circulación.",
    variants: ["U abierta", "U con ventana"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-u.webp",
        alt: "Cocina en U con tres frentes y ventana al fondo",
        caption: "Tres frentes",
      },
      {
        src: "/images/cocinasv2/cocina-u-2.webp",
        alt: "Cocina en U vista desde el acceso",
        caption: "U abierta",
      },
      {
        src: "/images/cocinasv2/cocina-u-3.webp",
        alt: "Detalle de trabajo dentro de una cocina en U",
        caption: "Zona de trabajo",
      },
    ],
  },
  {
    id: "isla",
    chip: "Con isla",
    title: "Bloque en el centro",
    lead: "Preparación y reunión en un solo volumen. Hace falta paso libre a ambos lados.",
    variants: ["Isla con fregadero", "Isla con fuegos", "Barra social"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-hero.webp",
        alt: "Cocina premium con isla de mármol y frentes lacados",
        caption: "Isla social",
      },
      {
        src: "/images/cocinasv2/cocina-isla-nueva.webp",
        alt: "Isla central de piedra con taburetes y salón abierto",
        caption: "Piedra y salón",
      },
      {
        src: "/images/cocinasv2/cocina-isla-2.webp",
        alt: "Isla de roble con placa de inducción y campana suspendida",
        caption: "Cocción en isla",
      },
      {
        src: "/images/cocinas/cocina-moderna-detalle.jpg",
        alt: "Detalle de encimera de mármol, grifo y taburetes",
        caption: "Detalle material",
      },
    ],
  },
  {
    id: "peninsula",
    chip: "Península",
    title: "La isla sale de un frente",
    lead: "Menos ancho que una isla suelta: barra o desayuno unidos al mueble bajo.",
    variants: ["Barra", "Cocción en península"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-peninsula.webp",
        alt: "Cocina con península y barra de desayuno",
        caption: "Barra unida",
      },
      {
        src: "/images/cocinasv2/cocina-peninsula-2.webp",
        alt: "Península verde salvia con taburetes de ratán y café",
        caption: "Desayuno",
      },
      {
        src: "/images/cocinasv2/cocina-peninsula-3.webp",
        alt: "Península con fuegos abierta al salón",
        caption: "Cocción",
      },
    ],
  },
];

const panelsEn: CatalogPanel[] = [
  {
    id: "linear",
    chip: "Linear",
    title: "A single run",
    lead: "A long wall or a studio: work triangle in a line and a clear path.",
    variants: ["Handleless", "Pulls", "Oven tower"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-lineal.webp",
        alt: "Premium linear kitchen with a single cream and oak run",
        caption: "Continuous run",
      },
      {
        src: "/images/cocinasv2/cocina-lineal-2.webp",
        alt: "Linear studio kitchen with pale stone worktop",
        caption: "Studio",
      },
    ],
  },
  {
    id: "galley",
    chip: "Galley",
    title: "Two runs and a path",
    lead: "Narrow kitchens: cooking on one side, wash or towers on the other, with a comfortable aisle.",
    variants: ["Centre aisle", "Facing towers"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-paralelo.webp",
        alt: "Galley kitchen with two facing runs and central aisle",
        caption: "Central aisle",
      },
      {
        src: "/images/cocinasv2/cocina-paralelo-3.webp",
        alt: "Galley kitchen with facing fronts and light at the end",
        caption: "Two fronts",
      },
    ],
  },
  {
    id: "l-shape",
    chip: "L-shape",
    title: "Two walls and room for a table",
    lead: "The corner organises water, heat and storage; the rest stays for dining or living.",
    variants: ["Blind corner", "Open corner"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-ele.webp",
        alt: "L-shaped kitchen with dining space and natural light",
        caption: "Open corner",
      },
      {
        src: "/images/cocinasv2/cocina-ele-2.webp",
        alt: "L-shaped kitchen with dining table and light cabinetry",
        caption: "With dining",
      },
      {
        src: "/images/cocinasv2/cocina-ele-3.webp",
        alt: "L-corner detail with under-cabinet light",
        caption: "Corner detail",
      },
    ],
  },
  {
    id: "u-shape",
    chip: "U-shape",
    title: "Three runs",
    lead: "More worktop and drawers. Needs a generous footprint and clear circulation.",
    variants: ["Open U", "U with window"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-u.webp",
        alt: "U-shaped kitchen with three runs and a rear window",
        caption: "Three runs",
      },
      {
        src: "/images/cocinasv2/cocina-u-2.webp",
        alt: "U-shaped kitchen viewed from the entrance",
        caption: "Open U",
      },
      {
        src: "/images/cocinasv2/cocina-u-3.webp",
        alt: "Work zone detail inside a U-shaped kitchen",
        caption: "Work zone",
      },
    ],
  },
  {
    id: "island",
    chip: "Island",
    title: "A block in the centre",
    lead: "Prep and gathering in one volume. Clear space is needed on both sides.",
    variants: ["Island sink", "Island hob", "Social bar"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-hero.webp",
        alt: "Premium kitchen with marble island and lacquered fronts",
        caption: "Social island",
      },
      {
        src: "/images/cocinasv2/cocina-isla-nueva.webp",
        alt: "Central stone island with stools opening to the living room",
        caption: "Stone and living",
      },
      {
        src: "/images/cocinasv2/cocina-isla-2.webp",
        alt: "Island with hob and seating bar",
        caption: "Hob on island",
      },
      {
        src: "/images/cocinas/cocina-moderna-detalle.jpg",
        alt: "Marble worktop detail with tap and stools",
        caption: "Material detail",
      },
    ],
  },
  {
    id: "peninsula",
    chip: "Peninsula",
    title: "The island grows from a run",
    lead: "Narrower than a free island: breakfast bar or cooktop joined to the base units.",
    variants: ["Bar", "Hob on peninsula"],
    photos: [
      {
        src: "/images/cocinasv2/cocina-peninsula.webp",
        alt: "Kitchen with peninsula breakfast bar joined to the main run",
        caption: "Joined bar",
      },
      {
        src: "/images/cocinasv2/cocina-peninsula-2.webp",
        alt: "Peninsula with stools and continuous worktop",
        caption: "Breakfast",
      },
      {
        src: "/images/cocinasv2/cocina-peninsula-3.webp",
        alt: "Peninsula with hob open to the living room",
        caption: "Cooking",
      },
    ],
  },
];

export const cocinasCopy = defineCopy({
  es: {
    meta: {
      title: "Cocinas a medida en Madrid | Diseño, mueble e isla",
      description:
        "Cocinas integradas con reforma e interiorismo: mobiliario, encimeras de piedra, islas e iluminación. Proyecto 3D, fabricación e instalación en Madrid.",
    },
    hero: {
      label: "Cocinas a medida",
      title: "Cocinas",
      headline: "Donde cocinar, recibir y convivir comparten el mismo diseño",
      description: "Mobiliario, encimera e iluminación alineados con la arquitectura.",
      support:
        "Diseñamos cocinas en línea, en L o con isla: almacenaje oculto, gola o tirador, electrodomésticos integrados y piedra natural. Un equipo lleva del 3D al montaje en obra.",
      cta: "Presupuesto de cocina",
      image: {
        src: "/images/cocinasv2/cocina-hero.webp",
        alt: "Cocina premium moderna con isla de mármol, frentes lacados y madera",
      },
      chips: [
        { id: "isla", title: "Isla", icon: "countertops", href: "#sistemas" },
        { id: "linea", title: "En línea", icon: "straighten", href: "#sistemas" },
        { id: "piedra", title: "Encimera piedra", icon: "texture", href: "#sistemas" },
        { id: "integrada", title: "Electro integrados", icon: "microwave", href: "#sistemas" },
      ],
    },
    catalog: {
      label: "DISTRIBUCIONES",
      title: "Elige el plano y mira ejemplos",
      panels: panelsEs,
      finishes: finishesEs,
    },
    process: {
      label: "PROCESO",
      title: "Del plano a la primera cena",
      lead: "Mediciones, 3D, fabricación de mueble y puesta en marcha de instalaciones.",
      steps: [
        {
          number: "01",
          title: "Briefing y medición",
          description: "Hábitos, electrodomésticos, puntos de agua y luz.",
        },
        {
          number: "02",
          title: "Proyecto 3D",
          description: "Distribución, materiales y presupuesto cerrado.",
        },
        {
          number: "03",
          title: "Obra e instalaciones",
          description: "Fontanería, electricidad y suelos coordinados con reforma.",
        },
        {
          number: "04",
          title: "Montaje de cocina",
          description: "Mueble, encimera, electrodomésticos y ajuste final.",
        },
      ] satisfies ProcessStep[],
    },
    faq: [
      {
        id: "plazo",
        question: "¿Cuánto tarda una cocina a medida completa?",
        answer:
          "El mobiliario suele fabricarse en 4 a 6 semanas. Si incluye reforma de instalaciones, el calendario global depende de obra; te entregamos un planning por fases.",
      },
      {
        id: "reforma",
        question: "¿Hacéis solo el mueble o la cocina entera?",
        answer:
          "Podemos fabricar e instalar mobiliario en una cocina existente o llevar proyecto integral: demolición, instalaciones, suelos, alicatado y carpintería.",
      },
      {
        id: "electro",
        question: "¿Quién suministra electrodomésticos?",
        answer:
          "Podemos integrarlos en presupuesto o coordinarnos con los que ya tengas. Definimos huecos, ventilación y enchufes en el 3D.",
      },
      {
        id: "encimera",
        question: "¿Qué encimeras recomendáis?",
        answer:
          "Piedra natural o compacto según uso y estética. Asesoramos en porosidad, cantos y uniones con fregadero bajo encimera.",
      },
    ] satisfies FaqItem[],
    cta: {
      title: "¿Renovamos tu cocina?",
      description: "Plano, fotos o medidas aproximadas: te respondemos con plazo y siguiente paso.",
    },
  },
  en: {
    meta: {
      title: "Bespoke kitchens in Madrid | Design, cabinetry & islands",
      description:
        "Kitchens integrated with renovation and interiors: cabinetry, stone worktops, islands and lighting. 3D design, making and installation in Madrid.",
    },
    hero: {
      label: "Bespoke kitchens",
      title: "Kitchens",
      headline: "Where cooking, hosting and daily life share one design",
      description: "Cabinetry, worktops and lighting aligned with the architecture.",
      support:
        "We design linear, L-shaped or island kitchens: concealed storage, handleless or pull profiles, integrated appliances and natural stone. One team from 3D to installation.",
      cta: "Get a kitchen quote",
      image: {
        src: "/images/cocinasv2/cocina-hero.webp",
        alt: "Premium modern kitchen with marble island, lacquered fronts and wood",
      },
      chips: [
        { id: "island", title: "Island", icon: "countertops", href: "#sistemas" },
        { id: "linear", title: "Linear", icon: "straighten", href: "#sistemas" },
        { id: "stone", title: "Stone top", icon: "texture", href: "#sistemas" },
        { id: "appliances", title: "Integrated", icon: "microwave", href: "#sistemas" },
      ],
    },
    catalog: {
      label: "LAYOUTS",
      title: "Pick a plan and see examples",
      panels: panelsEn,
      finishes: finishesEn,
    },
    process: {
      label: "PROCESS",
      title: "From plan to first dinner",
      lead: "Measuring, 3D, cabinet making and commissioning services.",
      steps: [
        {
          number: "01",
          title: "Brief and measure",
          description: "Habits, appliances, water and power points.",
        },
        {
          number: "02",
          title: "3D project",
          description: "Layout, materials and fixed quote.",
        },
        {
          number: "03",
          title: "Build and services",
          description: "Plumbing, electrics and floors aligned with renovation.",
        },
        {
          number: "04",
          title: "Kitchen install",
          description: "Cabinetry, worktop, appliances and final adjustment.",
        },
      ] satisfies ProcessStep[],
    },
    faq: [
      {
        id: "lead",
        question: "How long does a full bespoke kitchen take?",
        answer:
          "Cabinetry is typically made in 4 to 6 weeks. If services are renewed, the overall schedule depends on building work; we give you a phased plan.",
      },
      {
        id: "scope",
        question: "Do you only supply cabinetry or the whole kitchen?",
        answer:
          "We can fit cabinetry in an existing room or deliver a full project: strip-out, services, floors, tiling and joinery.",
      },
      {
        id: "appliances",
        question: "Who supplies appliances?",
        answer:
          "We can include them in the quote or coordinate with yours. Cut-outs, ventilation and sockets are fixed in the 3D.",
      },
      {
        id: "worktop",
        question: "Which worktops do you recommend?",
        answer:
          "Natural stone or compact surfaces depending on use and look. We advise on porosity, edges and under-mount sink joints.",
      },
    ] satisfies FaqItem[],
    cta: {
      title: "Shall we renew your kitchen?",
      description: "Plan, photos or rough dimensions: we reply with timing and next steps.",
    },
  },
});
