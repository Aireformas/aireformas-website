import { defineCopy } from "@/lib/i18n";
import type { FaqItem, GalleryItem, ProcessStep } from "@/lib/types";

export const reformasCopy = defineCopy({
  es: {
    meta: {
      title: "Reforma integral de vivienda",
      description:
        "Proyecto, licencias, construcción, instalaciones y dirección de obra. Reforma integral coordinada con diseño y mobiliario en Madrid.",
    },
    hero: {
      label: "REFORMAS",
      title: "Del proyecto a la vivienda terminada",
      description:
        "Coordinamos obra, instalaciones y acabados como extensión del diseño: un único equipo, un único criterio desde el primer plano hasta la entrega.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2560&q=90",
        alt: "Salón en reforma integral con distribución abierta y acabados contemporáneos",
      },
    },
    editorial: {
      label: "ENFOQUE",
      verticalLabel: "OBRA INTEGRADA",
      title: "Un criterio desde el plano hasta la entrega",
      paragraphs: [
        "La reforma no es solo obra: es secuencia, oficios y decisiones que deben respetar el diseño acordado.",
        "Coordinamos licencias, instalaciones y acabados con interiorismo y mobiliario para que la vivienda llegue terminada, no a medias.",
        "Un solo interlocutor, calendario claro y calidad constructiva alineada con la arquitectura del espacio.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
        alt: "Detalle de reforma residencial con materiales naturales",
      },
    },
    scope: {
      label: "ALCANCE",
      title: "Obra coordinada con el diseño",
      items: [
        { title: "Proyecto y licencias", description: "Planos, memoria técnica y tramitación cuando el alcance lo requiera." },
        { title: "Construcción", description: "Demoliciones, albañilería, tabiquería y coordinación de oficios en obra." },
        { title: "Instalaciones", description: "Electricidad, fontanería, climatización y domótica integradas en el diseño." },
        { title: "Dirección de obra", description: "Seguimiento de plazos, calidad y comunicación con un solo interlocutor." },
        { title: "Acabados", description: "Pavimentos, pintura, carpintería interior y detalle constructivo." },
        { title: "Entrega", description: "Vivienda lista para habitar, alineada con mobiliario e interiorismo del proyecto." },
      ],
      crossLead: "Climatización e instalaciones técnicas en",
      climate: "AIREFORMAS Climate",
      crossMid: ". Mobiliario e interiorismo en",
      mobiliario: "Mobiliario",
      crossAnd: "e",
      interiorismo: "Interiorismo",
    },
    process: {
      label: "PROCESO",
      title: "Del espacio vacío a la casa terminada",
      lead: "Seis fases enlazadas con diseño, mobiliario y climatización cuando el proyecto es integral.",
      steps: [
        { number: "01", title: "Escuchamos", description: "Necesidades, estilo de vida, vivienda e inversión." },
        { number: "02", title: "Diseñamos", description: "Distribución, materiales, iluminación y renders." },
        { number: "03", title: "Planificamos", description: "Presupuesto, calendario, licencias y compras." },
        { number: "04", title: "Construimos", description: "Un único equipo coordina toda la ejecución." },
        { number: "05", title: "Equipamos", description: "Mobiliario, iluminación, textiles y tecnología." },
        { number: "06", title: "Entregamos", description: "Tu vivienda completamente terminada." },
      ] satisfies ProcessStep[],
    },
    gallery: {
      label: "RESULTADO",
      title: "Espacios terminados",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Salón tras reforma integral" }, caption: "Live" },
        { image: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Dormitorio reformado" }, caption: "Live" },
        { image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Cocina tras obra" }, caption: "Live" },
      ] satisfies GalleryItem[],
    },
    faq: [
      { id: "licencias", question: "¿Gestionáis licencias de obra?", answer: "Sí, cuando el proyecto lo requiere tramitamos la documentación necesaria y coordinamos con el resto del calendario de obra." },
      { id: "interlocutor", question: "¿Tendré un solo interlocutor durante la reforma?", answer: "Sí. Un equipo coordina diseño, obra y acabados para que no tengas que gestionar oficios por separado." },
      { id: "zona", question: "¿Dónde realizáis reformas integrales?", answer: "Principalmente en Madrid capital y municipios del noroeste: Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja y alrededores." },
      { id: "climate", question: "¿Incluís climatización en la reforma?", answer: "Sí. Climatización, aerotermia y suelo radiante se diseñan con el proyecto en nuestra división AIREFORMAS Climate." },
    ] satisfies FaqItem[],
    cta: {
      title: "Hablemos de tu reforma",
      description: "Cuéntanos el estado de la vivienda y tus objetivos. Te proponemos el siguiente paso con claridad.",
    },
  },
  en: {
    meta: {
      title: "Full home renovation",
      description:
        "Design, permits, construction, services and site management. A full renovation coordinated with design and furniture in Madrid.",
    },
    hero: {
      label: "RENOVATION",
      title: "From the project to a finished home",
      description:
        "We coordinate construction, services and finishes as an extension of the design: one team, one standard from the first drawing to handover.",
      cta: "Start a project",
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2560&q=90",
        alt: "Living room in a full renovation with an open plan and contemporary finishes",
      },
    },
    editorial: {
      label: "APPROACH",
      verticalLabel: "INTEGRATED BUILD",
      title: "One standard from drawing to handover",
      paragraphs: [
        "A renovation is more than construction: it is sequence, trades and decisions that must respect the agreed design.",
        "We coordinate permits, services and finishes with interiors and furniture so the home arrives finished, not halfway.",
        "A single point of contact, a clear schedule and construction quality aligned with the architecture of the space.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
        alt: "Residential renovation detail with natural materials",
      },
    },
    scope: {
      label: "SCOPE",
      title: "Construction coordinated with design",
      items: [
        { title: "Design and permits", description: "Drawings, technical specification and applications when the scope requires them." },
        { title: "Construction", description: "Demolition, masonry, partitions and coordination of trades on site." },
        { title: "Services", description: "Electrical, plumbing, climate and home automation integrated into the design." },
        { title: "Site management", description: "Tracking of programme, quality and communication through one contact." },
        { title: "Finishes", description: "Floors, paint, interior joinery and construction detail." },
        { title: "Handover", description: "A home ready to live in, aligned with the project's furniture and interiors." },
      ],
      crossLead: "Climate and technical services in",
      climate: "AIREFORMAS Climate",
      crossMid: ". Furniture and interiors in",
      mobiliario: "Furniture",
      crossAnd: "and",
      interiorismo: "Interiors",
    },
    process: {
      label: "PROCESS",
      title: "From an empty room to a finished home",
      lead: "Six linked phases with design, furniture and climate when the project is complete.",
      steps: [
        { number: "01", title: "We listen", description: "Needs, way of living, the home and the investment." },
        { number: "02", title: "We design", description: "Layout, materials, lighting and renders." },
        { number: "03", title: "We plan", description: "Budget, schedule, permits and procurement." },
        { number: "04", title: "We build", description: "One team coordinates the whole build." },
        { number: "05", title: "We furnish", description: "Furniture, lighting, textiles and technology." },
        { number: "06", title: "We hand over", description: "Your home, completely finished." },
      ] satisfies ProcessStep[],
    },
    gallery: {
      label: "RESULT",
      title: "Finished spaces",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Living room after a full renovation" }, caption: "Live" },
        { image: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Renovated bedroom" }, caption: "Live" },
        { image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Kitchen after construction" }, caption: "Live" },
      ] satisfies GalleryItem[],
    },
    faq: [
      { id: "licencias", question: "Do you handle building permits?", answer: "Yes. When the project requires it, we prepare the documentation and coordinate it with the rest of the construction schedule." },
      { id: "interlocutor", question: "Will I have a single point of contact during the renovation?", answer: "Yes. One team coordinates design, construction and finishes so you do not have to manage trades separately." },
      { id: "zona", question: "Where do you carry out full renovations?", answer: "Mainly in Madrid city and the northwest municipalities: Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja and nearby." },
      { id: "climate", question: "Is climate included in the renovation?", answer: "Yes. Climate, air-source heat pumps and underfloor heating are designed with the project in our AIREFORMAS Climate division." },
    ] satisfies FaqItem[],
    cta: {
      title: "Let's talk about your renovation",
      description: "Tell us the condition of the home and your goals. We propose the next step clearly.",
    },
  },
});
