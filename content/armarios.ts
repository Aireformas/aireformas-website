import { defineCopy } from "@/lib/i18n";
import type { CatalogPanel, FaqItem, FinishPaletteCopy, ProcessStep } from "@/lib/types";

const finishesEs: FinishPaletteCopy = {
  chip: "Acabados",
  title: "Madera, laca y textil",
  lead: "Elegimos frentes e interiores según uso diario, luz de la estancia y el resto del proyecto.",
  groups: [
    {
      id: "madera",
      label: "Madera",
      swatches: [
        { id: "roble-claro", label: "Roble claro" },
        { id: "roble", label: "Roble" },
        { id: "nogal", label: "Nogal" },
        { id: "nogal-oscuro", label: "Nogal oscuro" },
      ],
    },
    {
      id: "neutros",
      label: "Neutros",
      swatches: [
        { id: "blanco-roto", label: "Blanco roto" },
        { id: "marfil", label: "Marfil" },
        { id: "arena", label: "Arena" },
        { id: "piedra", label: "Piedra" },
        { id: "gris-topo", label: "Gris topo" },
        { id: "grafito", label: "Grafito" },
        { id: "negro", label: "Negro" },
      ],
    },
    {
      id: "calidos",
      label: "Cálidos",
      swatches: [
        { id: "terracota", label: "Terracota" },
        { id: "nude", label: "Nude" },
        { id: "coral", label: "Coral" },
      ],
    },
    {
      id: "frios",
      label: "Fríos",
      swatches: [
        { id: "mostaza", label: "Mostaza" },
        { id: "salvia", label: "Salvia" },
        { id: "caqui", label: "Caqui" },
        { id: "celeste", label: "Celeste" },
        { id: "azul", label: "Azul" },
      ],
    },
    {
      id: "textil",
      label: "Textil",
      swatches: [
        { id: "lino", label: "Lino" },
        { id: "teja", label: "Teja" },
        { id: "petroleo", label: "Petróleo" },
      ],
    },
  ],
};

const finishesEn: FinishPaletteCopy = {
  chip: "Finishes",
  title: "Wood, lacquer and textile",
  lead: "We choose fronts and interiors for daily use, room light and the rest of the project.",
  groups: [
    {
      id: "wood",
      label: "Wood",
      swatches: [
        { id: "roble-claro", label: "Light oak" },
        { id: "roble", label: "Oak" },
        { id: "nogal", label: "Walnut" },
        { id: "nogal-oscuro", label: "Dark walnut" },
      ],
    },
    {
      id: "neutrals",
      label: "Neutrals",
      swatches: [
        { id: "blanco-roto", label: "Off-white" },
        { id: "marfil", label: "Ivory" },
        { id: "arena", label: "Sand" },
        { id: "piedra", label: "Stone" },
        { id: "gris-topo", label: "Taupe" },
        { id: "grafito", label: "Graphite" },
        { id: "negro", label: "Black" },
      ],
    },
    {
      id: "warm",
      label: "Warm",
      swatches: [
        { id: "terracota", label: "Terracotta" },
        { id: "nude", label: "Nude" },
        { id: "coral", label: "Coral" },
      ],
    },
    {
      id: "cool",
      label: "Cool",
      swatches: [
        { id: "mostaza", label: "Mustard" },
        { id: "salvia", label: "Sage" },
        { id: "caqui", label: "Khaki" },
        { id: "celeste", label: "Sky" },
        { id: "azul", label: "Blue" },
      ],
    },
    {
      id: "textile",
      label: "Textile",
      swatches: [
        { id: "lino", label: "Linen" },
        { id: "teja", label: "Clay" },
        { id: "petroleo", label: "Petrol" },
      ],
    },
  ],
};

const panelsEs: CatalogPanel[] = [
  {
    id: "modulos",
    chip: "Módulos",
    title: "Piezas que se suman al hueco",
    lead: "Módulos a lo ancho y a lo alto: cama, estantería, armario o escritorio en el mismo frente. Configuramos zócalo, rincón y nido según el plano.",
    variants: ["Con zócalo", "Sin zócalo", "Rincón", "Nido", "Estantería", "Armario"],
    photos: [
      {
        src: "/images/armariosv2/juvenil-1.png",
        alt: "Dormitorio juvenil con módulos verdes, cama y escritorio de roble",
        caption: "Cama y escritorio",
      },
      {
        src: "/images/armariosv2/juvenil-2.png",
        alt: "Habitación con armario, estantería abierta, cama y escritorio en un frente",
        caption: "Frente continuo",
      },
      {
        src: "/images/armariosv2/juvenil-3.png",
        alt: "Cama elevada con cajones, estantería de roble y panel de listones",
        caption: "Altura y listones",
      },
      {
        src: "/images/armariosv2/gran-volumen-1.png",
        alt: "Armario de gran volumen con puertas abiertas e interior en salvia",
        caption: "Gran volumen",
      },
    ],
  },
  {
    id: "abatibles",
    chip: "Abatibles",
    title: "La cama se pliega y libera el suelo",
    lead: "El módulo guarda de día y deja paso libre. Puede llevar altillo, puertas o dos camas en el mismo frente.",
    variants: ["Baja", "Doble", "Alta", "Con puertas", "Vertical", "Vertical con altillo"],
    photos: [
      {
        src: "/images/armariosv2/cama-abatible-1.png",
        alt: "Cama abatible horizontal abierta con respaldo de madera",
        caption: "Horizontal",
      },
      {
        src: "/images/armariosv2/cama-abatible-2.png",
        alt: "Cama abatible integrada en mueble modular",
        caption: "Integrada",
      },
      {
        src: "/images/armariosv2/cama-abatible-3.png",
        alt: "Solución de cama abatible con almacenaje",
        caption: "Con almacenaje",
      },
    ],
  },
  {
    id: "compactos",
    chip: "Compactos",
    title: "Dos camas en el sitio de una",
    lead: "Bicama o compacto con cajones: invitados, hermanos o estudio sin perder orden bajo el colchón.",
    variants: ["Bicama alta", "Bicama baja", "Compacto con cajones", "Cajón extraíble"],
    photos: [
      {
        src: "/images/armariosv2/bicama-1.png",
        alt: "Habitación infantil con cama elevada, bicama y armario integrado",
        caption: "Elevada + armario",
      },
      {
        src: "/images/armariosv2/bicama-2.png",
        alt: "Solución compacta con dos camas y cajones",
        caption: "Dos camas",
      },
      {
        src: "/images/armariosv2/bicama-3.png",
        alt: "Bicama con cajones bajo el colchón",
        caption: "Con cajones",
      },
    ],
  },
  {
    id: "camas",
    chip: "Camas y literas",
    title: "Cama, arcón o litera a medida",
    lead: "Según quién duerme y cuánto hay que guardar: patas, tapizado, canapé o litera con estudio.",
    variants: [
      "Con patas",
      "Tapizada",
      "Canapé frontal",
      "Canapé lateral",
      "Litera",
      "Litera con estudio",
    ],
    photos: [
      {
        src: "/images/armariosv2/cama-1.png",
        alt: "Canapé elevable lateral abierto con organizadores",
        caption: "Canapé lateral",
      },
      {
        src: "/images/armariosv2/cama-2.png",
        alt: "Cama a medida con almacenaje",
        caption: "Con almacenaje",
      },
      {
        src: "/images/armariosv2/cama-3.png",
        alt: "Litera o cama modular en dormitorio",
        caption: "Modular",
      },
      {
        src: "/images/armariosv2/cama-4.png",
        alt: "Litera infantil blanca con cajones y estantes de roble",
        caption: "Litera",
      },
    ],
  },
];

const panelsEn: CatalogPanel[] = [
  {
    id: "modules",
    chip: "Modules",
    title: "Pieces that fill the recess",
    lead: "Modules in width and height: bed, shelving, wardrobe or desk on one run. We set plinth, corner and nest to the plan.",
    variants: ["With plinth", "Flush", "Corner", "Nest", "Shelving", "Wardrobe"],
    photos: [
      {
        src: "/images/armariosv2/juvenil-1.png",
        alt: "Youth bedroom with green modules, bed and oak desk",
        caption: "Bed and desk",
      },
      {
        src: "/images/armariosv2/juvenil-2.png",
        alt: "Room with wardrobe, open shelves, bed and desk on one run",
        caption: "Continuous run",
      },
      {
        src: "/images/armariosv2/juvenil-3.png",
        alt: "Raised bed with drawers, oak shelving and slat screen",
        caption: "Height and slats",
      },
      {
        src: "/images/armariosv2/gran-volumen-1.png",
        alt: "Large wardrobe with open doors and sage interior",
        caption: "High capacity",
      },
    ],
  },
  {
    id: "folding",
    chip: "Folding beds",
    title: "The bed folds and frees the floor",
    lead: "The unit stores by day and leaves a clear path. It can take a top cabinet, doors or two beds on one front.",
    variants: ["Low", "Double", "High", "With doors", "Vertical", "Vertical with top"],
    photos: [
      {
        src: "/images/armariosv2/cama-abatible-1.png",
        alt: "Horizontal folding bed open with wood back panel",
        caption: "Horizontal",
      },
      {
        src: "/images/armariosv2/cama-abatible-2.png",
        alt: "Folding bed integrated in modular furniture",
        caption: "Integrated",
      },
      {
        src: "/images/armariosv2/cama-abatible-3.png",
        alt: "Folding bed solution with storage",
        caption: "With storage",
      },
    ],
  },
  {
    id: "compacts",
    chip: "Compacts",
    title: "Two beds in the space of one",
    lead: "Trundle or compact with drawers: guests, siblings or a studio without losing under-mattress storage.",
    variants: ["Tall trundle", "Low trundle", "Compact with drawers", "Pull-out drawer"],
    photos: [
      {
        src: "/images/armariosv2/bicama-1.png",
        alt: "Children’s room with raised bed, trundle and fitted wardrobe",
        caption: "Raised + wardrobe",
      },
      {
        src: "/images/armariosv2/bicama-2.png",
        alt: "Compact solution with two beds and drawers",
        caption: "Two beds",
      },
      {
        src: "/images/armariosv2/bicama-3.png",
        alt: "Trundle bed with drawers under the mattress",
        caption: "With drawers",
      },
    ],
  },
  {
    id: "beds",
    chip: "Beds & bunks",
    title: "Bed, chest or bunk made to fit",
    lead: "Built around who sleeps there and how much you store: legs, upholstery, lift-up chest or bunk with a study nook.",
    variants: [
      "With legs",
      "Upholstered",
      "Front lift-up",
      "Side lift-up",
      "Bunk",
      "Bunk with desk",
    ],
    photos: [
      {
        src: "/images/armariosv2/cama-1.png",
        alt: "Side lift-up storage bed open with organisers",
        caption: "Side lift-up",
      },
      {
        src: "/images/armariosv2/cama-2.png",
        alt: "Bespoke bed with storage",
        caption: "With storage",
      },
      {
        src: "/images/armariosv2/cama-3.png",
        alt: "Bunk or modular bed in a bedroom",
        caption: "Modular",
      },
      {
        src: "/images/armariosv2/cama-4.png",
        alt: "White children’s bunk with drawers and oak shelves",
        caption: "Bunk",
      },
    ],
  },
];

export const armariosCopy = defineCopy({
  es: {
    meta: {
      title: "Armarios a medida en Madrid | Vestidores y empotrados",
      description:
        "Armarios empotrados, vestidores, camas abatibles y mobiliario modular a medida. Diseño 3D, fabricación e instalación en 4–6 semanas en Madrid.",
    },
    hero: {
      label: "Armarios a medida",
      title: "Armarios",
      headline: "Cada centímetro, pensado para cómo te vistes",
      description: "Empotrados, correderas, vestidores y módulos que integran la arquitectura.",
      support:
        "Medimos, diseñamos interiores con barras, cajones y zapateros, y fabricamos con acabados lacados, madera o cristal. Instalación en obra con un solo equipo.",
      cta: "Presupuesto de armario",
      image: {
        src: "/images/armariosv2/armarios-hero.png",
        alt: "Dormitorio con cama, escritorio y armario modular en verde oliva, madera y cristal",
      },
      chips: [
        { id: "modulos", title: "Módulos", icon: "grid_view", href: "#sistemas" },
        { id: "abatibles", title: "Abatibles", icon: "unfold_more", href: "#sistemas" },
        { id: "compactos", title: "Compactos", icon: "bed", href: "#sistemas" },
        { id: "acabados", title: "Acabados", icon: "palette", href: "#sistemas" },
      ],
    },
    catalog: {
      label: "SISTEMAS",
      title: "Elige el tipo y mira ejemplos",
      panels: panelsEs,
      finishes: finishesEs,
    },
    process: {
      label: "PROCESO",
      title: "De la medición al último tornillo",
      lead: "Propuesta 3D, presupuesto cerrado y montaje en obra.",
      steps: [
        {
          number: "01",
          title: "Medición in situ",
          description: "Alturas, enchufes, rodapiés y puntos de luz.",
        },
        {
          number: "02",
          title: "Diseño interior",
          description: "Distribución, acabados y visualización 3D.",
        },
        {
          number: "03",
          title: "Fabricación",
          description: "4–6 semanas según módulos y lacados.",
        },
        {
          number: "04",
          title: "Instalación",
          description: "Montaje, ajustes y entrega lista para vestir.",
        },
      ] satisfies ProcessStep[],
    },
    faq: [
      {
        id: "plazo",
        question: "¿Cuánto tarda un armario a medida en Madrid?",
        answer:
          "El plazo habitual de fabricación e instalación es de 4 a 6 semanas desde la validación del diseño 3D, según dimensiones, interiores y tipo de acabado.",
      },
      {
        id: "precio",
        question: "¿Qué incluye el presupuesto del armario?",
        answer:
          "Diseño, fabricación, transporte e instalación. Detallamos módulos, herrajes y acabados para que no haya sorpresas en obra.",
      },
      {
        id: "interior",
        question: "¿Puedo elegir solo el interior y mantener las puertas actuales?",
        answer:
          "Sí, cuando la carpintería existente lo permite. Valoramos in situ si conviene renovar frentes, guías o todo el conjunto.",
      },
      {
        id: "vestidor",
        question: "¿Qué diferencia hay entre armario empotrado y vestidor?",
        answer:
          "El empotrado cierra con puertas sobre el hueco arquitectónico. El vestidor, a menudo walk-in, organiza una estancia o zona dedicada con módulos visibles o con cristal.",
      },
    ] satisfies FaqItem[],
    cta: {
      title: "Cuéntanos tu hueco o envía fotos",
      description: "Medidas aproximadas bastan para una primera orientación de plazo y presupuesto.",
    },
  },
  en: {
    meta: {
      title: "Bespoke wardrobes in Madrid | Fitted closets & dressing rooms",
      description:
        "Fitted wardrobes, dressing rooms, folding beds and modular furniture made to measure. 3D design, making and installation in 4–6 weeks in Madrid.",
    },
    hero: {
      label: "Bespoke wardrobes",
      title: "Wardrobes",
      headline: "Every centimetre shaped around how you dress",
      description: "Fitted, sliding, walk-in and modular units that belong to the architecture.",
      support:
        "We measure, design interiors with rails, drawers and shoe storage, and make lacquered, wood or glass finishes. One team installs on site.",
      cta: "Get a wardrobe quote",
      image: {
        src: "/images/armariosv2/armarios-hero.png",
        alt: "Bedroom with bed, desk and modular wardrobe in olive green, wood and glass",
      },
      chips: [
        { id: "modules", title: "Modules", icon: "grid_view", href: "#sistemas" },
        { id: "folding", title: "Folding", icon: "unfold_more", href: "#sistemas" },
        { id: "compacts", title: "Compacts", icon: "bed", href: "#sistemas" },
        { id: "finishes", title: "Finishes", icon: "palette", href: "#sistemas" },
      ],
    },
    catalog: {
      label: "SYSTEMS",
      title: "Pick a type and see examples",
      panels: panelsEn,
      finishes: finishesEn,
    },
    process: {
      label: "PROCESS",
      title: "From measuring to the last screw",
      lead: "3D proposal, fixed quote and installation on site.",
      steps: [
        {
          number: "01",
          title: "On-site measuring",
          description: "Heights, sockets, skirting and light points.",
        },
        {
          number: "02",
          title: "Interior design",
          description: "Layout, finishes and 3D visualisation.",
        },
        {
          number: "03",
          title: "Making",
          description: "4–6 weeks depending on modules and lacquers.",
        },
        {
          number: "04",
          title: "Installation",
          description: "Fitting, adjustments and handover ready to fill.",
        },
      ] satisfies ProcessStep[],
    },
    faq: [
      {
        id: "lead",
        question: "How long does a bespoke wardrobe take in Madrid?",
        answer:
          "Making and installation typically take 4 to 6 weeks after you approve the 3D design, depending on size, interiors and finish type.",
      },
      {
        id: "quote",
        question: "What does the wardrobe quote include?",
        answer:
          "Design, making, delivery and installation. We itemise modules, hardware and finishes so there are no surprises on site.",
      },
      {
        id: "interior-only",
        question: "Can I keep existing doors and only change the interior?",
        answer:
          "Yes, when the existing carcass allows it. We assess on site whether to renew fronts, tracks or the full unit.",
      },
      {
        id: "walk-in",
        question: "What is the difference between a fitted wardrobe and a dressing room?",
        answer:
          "Fitted wardrobes close with doors over the architectural recess. A dressing room, often walk-in, organises a dedicated zone with visible or glass-fronted modules.",
      },
    ] satisfies FaqItem[],
    cta: {
      title: "Tell us about your recess or send photos",
      description: "Approximate dimensions are enough for a first steer on timing and budget.",
    },
  },
});
