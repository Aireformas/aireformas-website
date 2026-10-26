import { defineCopy } from "@/lib/i18n";
import type { FaqItem, GalleryItem, ProcessStep } from "@/lib/types";

export const reformasCopy = defineCopy({
  es: {
    meta: {
      title: "Reformas integrales y parciales",
      description:
        "Transformamos espacios. Ejecutamos cada detalle. Reformas de viviendas, oficinas y locales con interiorismo, mobiliario y climatización coordinados en Madrid.",
    },
    hero: {
      label: "REFORMAS",
      title: "Transformamos espacios. Ejecutamos cada detalle.",
      description:
        "En AIREFORMAS desarrollamos reformas integrales y parciales de viviendas y espacios interiores, coordinando cada fase del proyecto desde la planificación inicial hasta la entrega final.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2560&q=90",
        alt: "Interior con distribución abierta y acabados contemporáneos",
      },
    },
    editorial: {
      label: "ENFOQUE",
      verticalLabel: "OBRA INTEGRADA",
      title: "Un proyecto, una visión global",
      paragraphs: [
        "Nuestro equipo aborda trabajos de albañilería, tabiquería de pladur, instalaciones eléctricas, fontanería, saneamiento, revestimientos, pavimentos, pintura, carpintería interior y exterior, ventanas, puertas y soluciones de piedra y encimeras.",
        "Integramos los trabajos de construcción con el diseño interior, el mobiliario a medida y los sistemas de climatización, ofreciendo soluciones completas y coherentes tanto desde el punto de vista estético como técnico.",
        "A través de nuestras áreas especializadas de MOBILIARIO y CLIMATE, coordinamos cocinas, armarios, muebles especiales, calefacción, refrigeración y soluciones de confort térmico.",
        "Un proyecto, una visión global y una ejecución coordinada.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
        alt: "Detalle de reforma con materiales naturales",
      },
    },
    scope: {
      label: "ALCANCE",
      title: "Partidas y oficios",
      items: [
        {
          title: "Albañilería y pladur",
          description: "Demoliciones, tabiquería, albañilería y sistemas de pladur para redistribuir el espacio.",
        },
        {
          title: "Electricidad e iluminación",
          description: "Instalaciones eléctricas, mecanismos e iluminación técnica y decorativa.",
        },
        {
          title: "Fontanería, baños y cocinas",
          description: "Fontanería, saneamiento y renovación de baños y cocinas.",
        },
        {
          title: "Suelos, revestimientos y piedra",
          description: "Pavimentos, revestimientos, encimeras y soluciones de piedra.",
        },
        {
          title: "Puertas, ventanas y carpintería",
          description: "Puertas interiores y exteriores, ventanas y carpintería de obra.",
        },
        {
          title: "Pintura y coordinación",
          description: "Acabados de pintura y coordinación de oficios hasta la entrega.",
        },
      ],
      crossLead: "Climatización e instalaciones técnicas en",
      climate: "AIREFORMAS Climate",
      crossMid: ". Mobiliario e interiorismo en",
      mobiliario: "Mobiliario",
      crossAnd: "e",
      interiorismo: "Interiorismo",
    },
    professional: {
      label: "ÁMBITO PROFESIONAL",
      title: "Espacios profesionales y comerciales",
      lead: "Presencia secundaria al foco residencial: capacidad de actuación en oficinas y locales, sin anticipar un catálogo técnico futuro.",
      items: [
        {
          title: "Oficinas y espacios de trabajo",
          description:
            "Diseñamos y reformamos oficinas y espacios de trabajo que combinan imagen corporativa, funcionalidad y confort. Cada intervención parte del análisis de los equipos, los flujos de circulación y las necesidades operativas del negocio. Coordinamos redistribución de espacios, mamparas y tabiquería, iluminación, instalaciones eléctricas y de datos, climatización, acústica, pavimentos, revestimientos, carpintería y mobiliario a medida. Buscamos ambientes flexibles, eficientes y representativos, con materiales duraderos y una ejecución que considere la continuidad de la actividad cuando sea viable.",
        },
        {
          title: "Locales comerciales",
          description:
            "Transformamos locales comerciales en espacios que expresan la identidad de cada marca y mejoran la experiencia de sus clientes. Integramos diseño interior, distribución, exposición de producto y soluciones técnicas adaptadas a la actividad. Desarrollamos trabajos de albañilería, revestimientos, iluminación comercial, instalaciones, saneamiento, climatización, carpintería, mostradores, expositores y mobiliario especial. La propuesta tiene en cuenta el uso previsto, el mantenimiento, la inversión disponible y los requisitos técnicos y normativos aplicables, que deberán verificarse según el establecimiento.",
        },
      ],
      crossLead: "Mobiliario corporativo y a medida en",
      mobiliario: "Mobiliario",
      crossMid: ". Climatización integrada en",
      climate: "Climate",
    },
    process: {
      label: "PROCESO",
      title: "Del espacio vacío a la entrega",
      lead: "Seis fases enlazadas con diseño, mobiliario y climatización cuando el proyecto es integral.",
      steps: [
        { number: "01", title: "Escuchamos", description: "Necesidades, uso del espacio e inversión." },
        { number: "02", title: "Diseñamos", description: "Distribución, materiales, iluminación y renders." },
        { number: "03", title: "Planificamos", description: "Presupuesto, calendario, licencias y compras." },
        { number: "04", title: "Construimos", description: "Un único equipo coordina toda la ejecución." },
        { number: "05", title: "Equipamos", description: "Mobiliario, iluminación, textiles y tecnología." },
        { number: "06", title: "Entregamos", description: "Espacio completamente terminado." },
      ] satisfies ProcessStep[],
    },
    gallery: {
      label: "RESULTADO",
      title: "Espacios terminados",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Salón con distribución abierta" }, caption: "Salón" },
        { image: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Dormitorio con acabados contemporáneos" }, caption: "Dormitorio" },
        { image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Cocina con acabados integrados" }, caption: "Cocina" },
      ] satisfies GalleryItem[],
    },
    faq: [
      { id: "licencias", question: "¿Gestionáis licencias de obra?", answer: "Sí, cuando el proyecto lo requiere tramitamos la documentación necesaria y coordinamos con el resto del calendario de obra." },
      { id: "interlocutor", question: "¿Tendré un solo interlocutor durante la reforma?", answer: "Sí. Un equipo coordina diseño, obra y acabados para que no tengas que gestionar oficios por separado." },
      { id: "zona", question: "¿Dónde realizáis reformas?", answer: "Principalmente en Madrid capital y municipios del noroeste: Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja y alrededores." },
      { id: "climate", question: "¿Incluís climatización en la reforma?", answer: "Sí. Climatización, aerotermia y suelo radiante se diseñan con el proyecto en nuestra división AIREFORMAS Climate." },
    ] satisfies FaqItem[],
    cta: {
      title: "Hablemos de tu reforma",
      description: "Cuéntanos el estado del espacio y tus objetivos. Te proponemos el siguiente paso con claridad.",
    },
  },
  en: {
    meta: {
      title: "Full and partial renovations",
      description:
        "We transform spaces. We execute every detail. Renovation of homes, offices and retail with coordinated interiors, furniture and climate in Madrid.",
    },
    hero: {
      label: "RENOVATION",
      title: "We transform spaces. We execute every detail.",
      description:
        "At AIREFORMAS we carry out full and partial renovations of homes and interior spaces, coordinating every phase from initial planning to final handover.",
      cta: "Start a project",
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=2560&q=90",
        alt: "Interior with an open plan and contemporary finishes",
      },
    },
    editorial: {
      label: "APPROACH",
      verticalLabel: "INTEGRATED BUILD",
      title: "One project, one overall vision",
      paragraphs: [
        "Our team covers masonry, plasterboard partitions, electrical installations, plumbing, drainage, finishes, flooring, paint, interior and exterior joinery, windows, doors and stone and worktop solutions.",
        "We integrate construction work with interior design, bespoke furniture and climate systems, offering complete and coherent solutions from both an aesthetic and a technical point of view.",
        "Through our specialised FURNITURE and CLIMATE areas, we coordinate kitchens, wardrobes, special pieces, heating, cooling and thermal comfort solutions.",
        "One project, one overall vision and coordinated delivery.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
        alt: "Renovation detail with natural materials",
      },
    },
    scope: {
      label: "SCOPE",
      title: "Trades and packages",
      items: [
        {
          title: "Masonry and plasterboard",
          description: "Demolition, partitions, masonry and plasterboard systems to redistribute space.",
        },
        {
          title: "Electrical and lighting",
          description: "Electrical installations, fittings and technical and decorative lighting.",
        },
        {
          title: "Plumbing, bathrooms and kitchens",
          description: "Plumbing, drainage and renewal of bathrooms and kitchens.",
        },
        {
          title: "Floors, finishes and stone",
          description: "Flooring, finishes, worktops and stone solutions.",
        },
        {
          title: "Doors, windows and joinery",
          description: "Interior and exterior doors, windows and site joinery.",
        },
        {
          title: "Paint and coordination",
          description: "Paint finishes and coordination of trades through to handover.",
        },
      ],
      crossLead: "Climate and technical services in",
      climate: "AIREFORMAS Climate",
      crossMid: ". Furniture and interiors in",
      mobiliario: "Furniture",
      crossAnd: "and",
      interiorismo: "Interiors",
    },
    professional: {
      label: "PROFESSIONAL SCOPE",
      title: "Professional and commercial spaces",
      lead: "A secondary presence beside the residential focus: capacity to act on offices and retail, without anticipating a future technical catalogue.",
      items: [
        {
          title: "Offices and workplaces",
          description:
            "We design and renovate offices and workplaces that combine corporate image, function and comfort. Every intervention starts from an analysis of teams, circulation flows and the operational needs of the business. We coordinate redistribution of space, partitions, lighting, electrical and data installations, climate, acoustics, flooring, finishes, joinery and bespoke furniture. We seek flexible, efficient and representative environments, with durable materials and delivery that considers continuity of activity when viable.",
        },
        {
          title: "Retail premises",
          description:
            "We transform commercial premises into spaces that express each brand's identity and improve the customer experience. We integrate interior design, layout, product display and technical solutions suited to the activity. We develop masonry, finishes, commercial lighting, services, drainage, climate, joinery, counters, display units and special furniture. The proposal takes into account intended use, maintenance, available investment and applicable technical and regulatory requirements, which must be verified for each establishment.",
        },
      ],
      crossLead: "Corporate and bespoke furniture in",
      mobiliario: "Furniture",
      crossMid: ". Integrated climate in",
      climate: "Climate",
    },
    process: {
      label: "PROCESS",
      title: "From an empty room to handover",
      lead: "Six linked phases with design, furniture and climate when the project is complete.",
      steps: [
        { number: "01", title: "We listen", description: "Needs, use of the space and the investment." },
        { number: "02", title: "We design", description: "Layout, materials, lighting and renders." },
        { number: "03", title: "We plan", description: "Budget, schedule, permits and procurement." },
        { number: "04", title: "We build", description: "One team coordinates the whole build." },
        { number: "05", title: "We furnish", description: "Furniture, lighting, textiles and technology." },
        { number: "06", title: "We hand over", description: "A completely finished space." },
      ] satisfies ProcessStep[],
    },
    gallery: {
      label: "RESULT",
      title: "Finished spaces",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Living room with an open plan" }, caption: "Living room" },
        { image: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Bedroom with contemporary finishes" }, caption: "Bedroom" },
        { image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Kitchen with integrated finishes" }, caption: "Kitchen" },
      ] satisfies GalleryItem[],
    },
    faq: [
      { id: "licencias", question: "Do you handle building permits?", answer: "Yes. When the project requires it, we prepare the documentation and coordinate it with the rest of the construction schedule." },
      { id: "interlocutor", question: "Will I have a single point of contact during the renovation?", answer: "Yes. One team coordinates design, construction and finishes so you do not have to manage trades separately." },
      { id: "zona", question: "Where do you carry out renovations?", answer: "Mainly in Madrid city and the northwest municipalities: Pozuelo, Boadilla, Majadahonda, Las Rozas, La Moraleja and nearby." },
      { id: "climate", question: "Is climate included in the renovation?", answer: "Yes. Climate, air-source heat pumps and underfloor heating are designed with the project in our AIREFORMAS Climate division." },
    ] satisfies FaqItem[],
    cta: {
      title: "Let's talk about your renovation",
      description: "Tell us the condition of the space and your goals. We propose the next step clearly.",
    },
  },
});
