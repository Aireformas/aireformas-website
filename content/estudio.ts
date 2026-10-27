import { defineCopy } from "@/lib/i18n";
import type { ProcessStep, Testimonial, TrustStat } from "@/lib/types";

export const estudioCopy = defineCopy({
  es: {
    meta: {
      title: "Estudio de interiorismo",
      description:
        "Diseñamos espacios. Creamos experiencias. Diseño, técnica y ejecución en equilibrio para viviendas, oficinas y locales en Madrid.",
    },
    hero: {
      label: "Identidad",
      title: "Estudio",
      headline: "Diseñamos espacios. Creamos experiencias.",
      description: "Diseño, técnica y ejecución en equilibrio.",
      support:
        "Interiorismo, reforma, mobiliario y climatización con un solo equipo. Viviendas, oficinas y locales en Madrid y noroeste.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Espacio interior con luz natural y materiales naturales",
      },
      chips: [
        { id: "interiorismo", title: "Interiorismo", icon: "design_services", href: "/interiorismo" },
        { id: "reformas", title: "Reformas", icon: "construction", href: "/reformas" },
        { id: "mobiliario", title: "Mobiliario", icon: "chair", href: "/mobiliario" },
        { id: "climate", title: "Climate", icon: "thermostat", href: "/climate" },
      ],
    },
    editorial: {
      label: "MANIFIESTO",
      title: "Cada espacio tiene una identidad",
      paragraphs: [
        "Cada espacio tiene una identidad. Nuestro trabajo consiste en descubrirla, interpretarla y transformarla en un proyecto único.",
        "En AIREFORMAS entendemos el diseño como el equilibrio entre estética, funcionalidad y bienestar. Cada proyecto nace de escuchar, comprender las necesidades de quienes lo habitan o utilizan y transformar sus ideas en soluciones reales, coherentes y duraderas.",
        "Nos guían la atención al detalle, la proporción, la luz, la armonía de los materiales y la calidad de los acabados. Buscamos una arquitectura interior atemporal, donde cada elemento tenga una razón de ser y contribuya al confort y a la experiencia del espacio.",
        "Trabajamos en viviendas, oficinas y locales comerciales, adaptando cada propuesta a su uso, su identidad y sus objetivos. Desde la distribución y la elección de materiales hasta el mobiliario, las instalaciones y la climatización, concebimos cada proyecto como un conjunto.",
        "Combinamos sensibilidad por el diseño, conocimiento técnico y capacidad de ejecución, siempre con una visión realista de la inversión y las prioridades de cada cliente.",
        "Porque un buen proyecto no solo debe verse bien. Debe funcionar, sentirse bien y permanecer en el tiempo.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=90",
        alt: "Interior con madera, luz cálida y proporción calmada",
      },
    },
    principles: {
      label: "PRINCIPIOS",
      title: "Los seis principios del estudio",
      items: [
        {
          title: "01 · Detalle",
          description: "Encuentros, terminaciones y precisión en cada solución.",
        },
        {
          title: "02 · Proporción",
          description: "Equilibrio entre volúmenes, medidas, distribución y circulación.",
        },
        {
          title: "03 · Luz",
          description: "Iluminación natural y artificial al servicio del ambiente y el bienestar.",
        },
        {
          title: "04 · Materialidad",
          description: "Texturas, colores y materiales seleccionados por calidad y durabilidad.",
        },
        {
          title: "05 · Confort y funcionalidad",
          description: "Ergonomía, instalaciones, eficiencia y facilidad de uso.",
        },
        {
          title: "06 · Atemporalidad",
          description: "Lenguaje sobrio y duradero más allá de tendencias pasajeras.",
        },
      ],
    },
    scopes: {
      label: "ÁMBITOS",
      title: "Dónde actuamos",
      items: [
        {
          title: "Viviendas",
          description:
            "Reformas e interiorismo de viviendas con integración de distribución, acabados, mobiliario, iluminación e instalaciones para una vida cotidiana más cómoda.",
          image: {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
            alt: "Interior residencial con cocina integrada y luz natural",
          },
        },
        {
          title: "Oficinas y espacios de trabajo",
          description:
            "Adecuación de oficinas y entornos profesionales: imagen corporativa, ergonomía, acústica, iluminación, climatización, distribución y bienestar.",
          image: {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
            alt: "Espacio de trabajo con luz natural y distribución abierta",
          },
        },
        {
          title: "Locales y espacios comerciales",
          description:
            "Reforma y adaptación de locales: identidad de marca, experiencia del cliente, recorridos, exhibición, funcionalidad, instalaciones y soluciones constructivas adaptadas a la actividad.",
          image: {
            src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85",
            alt: "Local comercial con recorrido de atención y acabados contemporáneos",
          },
        },
      ],
    },
    stats: [
      { value: "15+", label: "Años de experiencia" },
      { value: "320+", label: "Proyectos entregados" },
      { value: "4", label: "Pilares integrados" },
      { value: "1", label: "Equipo, un proyecto" },
    ] satisfies TrustStat[],
    zone: {
      label: "ZONA",
      title: "Dónde trabajamos",
      lead: "Proyectos integrados en Madrid capital y el noroeste metropolitano: distribución, materiales, mobiliario, iluminación, climatización e instalaciones con un solo equipo.",
      highlight: "Madrid",
      groups: [
        {
          id: "capital",
          eyebrow: "Capital",
          title: "Barrios donde más trabajamos",
          places: [
            "Salamanca",
            "Chamberí",
            "Chamartín",
            "Retiro",
            "Moncloa",
            "Aravaca",
          ],
        },
        {
          id: "noroeste",
          eyebrow: "Noroeste",
          title: "Municipios del área metropolitana",
          places: [
            "Pozuelo de Alarcón",
            "Boadilla del Monte",
            "Majadahonda",
            "Las Rozas",
            "La Moraleja",
          ],
        },
      ],
    },
    process: {
      label: "PROCESO",
      title: "Nuestra forma de trabajar",
      steps: [
        { number: "01", title: "Escuchamos", description: "Necesidades, estilo de vida, espacio e inversión." },
        { number: "02", title: "Diseñamos", description: "Distribución, materiales, iluminación y renders." },
        { number: "03", title: "Planificamos", description: "Presupuesto, calendario, licencias y compras." },
        { number: "04", title: "Construimos", description: "Un único equipo coordina toda la ejecución." },
        { number: "05", title: "Equipamos", description: "Mobiliario, iluminación, textiles y tecnología." },
        { number: "06", title: "Entregamos", description: "Espacio completamente terminado." },
      ] satisfies ProcessStep[],
    },
    testimonials: [
      {
        id: "1",
        quote: "El armario aprovecha cada centímetro y la instalación fue impecable. Se nota el cuidado en los acabados.",
        author: "María G.",
        role: "Cliente, Madrid",
        image: {
          src: "/images/testimonials/testimonio-armario.jpg",
          alt: "Interior de armario a medida en roble con iluminación LED y acabados precisos",
        },
      },
      {
        id: "2",
        quote: "Nos ayudaron a unificar salón y cocina con un diseño muy personal. Comunicación clara en todo momento.",
        author: "Carlos y Laura",
        role: "Reforma integral",
        image: {
          src: "/images/testimonials/testimonio-salon-cocina.jpg",
          alt: "Salón y cocina unificados en planta abierta con carpintería en roble",
        },
      },
      {
        id: "3",
        quote: "Profesionales, puntuales y con muy buen gusto. El resultado superó lo que teníamos en mente.",
        author: "Elena R.",
        role: "Proyecto de interiorismo",
        image: {
          src: "/images/testimonials/testimonio-interiorismo.jpg",
          alt: "Salón de interiorismo terminado con materiales naturales e iluminación cálida",
        },
      },
    ] satisfies Testimonial[],
    cta: {
      title: "Conocemos tu proyecto",
      description: "Viviendas, oficinas y locales en Madrid y noroeste. Cuéntanos el tuyo.",
    },
  },
  en: {
    meta: {
      title: "Interior design studio",
      description:
        "We design spaces. We create experiences. Design, technique and delivery in balance for homes, offices and retail in Madrid.",
    },
    hero: {
      label: "Identity",
      title: "Studio",
      headline: "We design spaces. We create experiences.",
      description: "Design, technique and delivery in balance.",
      support:
        "Interiors, renovation, furniture and climate with one team. Homes, offices and retail in Madrid and the northwest.",
      cta: "Start a project",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Interior space with natural light and natural materials",
      },
      chips: [
        { id: "interiorismo", title: "Interiors", icon: "design_services", href: "/interiorismo" },
        { id: "reformas", title: "Renovation", icon: "construction", href: "/reformas" },
        { id: "mobiliario", title: "Furniture", icon: "chair", href: "/mobiliario" },
        { id: "climate", title: "Climate", icon: "thermostat", href: "/climate" },
      ],
    },
    editorial: {
      label: "MANIFESTO",
      title: "Every space has an identity",
      paragraphs: [
        "Every space has an identity. Our work is to discover it, interpret it and turn it into a unique project.",
        "At AIREFORMAS we understand design as the balance between aesthetics, function and wellbeing. Every project begins by listening, understanding the needs of those who live in or use the space, and turning their ideas into real, coherent and lasting solutions.",
        "We are guided by attention to detail, proportion, light, the harmony of materials and the quality of finishes. We seek a timeless interior architecture, where every element has a reason to be and contributes to comfort and the experience of the space.",
        "We work on homes, offices and commercial premises, adapting each proposal to its use, identity and goals. From layout and material selection to furniture, services and climate, we conceive every project as a whole.",
        "We combine design sensitivity, technical knowledge and delivery capacity, always with a realistic view of investment and each client's priorities.",
        "Because a good project must not only look right. It must work, feel right and last over time.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=90",
        alt: "Interior with wood, warm light and calm proportion",
      },
    },
    principles: {
      label: "PRINCIPLES",
      title: "The six principles of the studio",
      items: [
        {
          title: "01 · Detail",
          description: "Junctions, terminations and precision in every solution.",
        },
        {
          title: "02 · Proportion",
          description: "Balance between volumes, measures, layout and circulation.",
        },
        {
          title: "03 · Light",
          description: "Natural and artificial lighting in service of atmosphere and wellbeing.",
        },
        {
          title: "04 · Materiality",
          description: "Textures, colours and materials chosen for quality and durability.",
        },
        {
          title: "05 · Comfort and function",
          description: "Ergonomics, services, efficiency and ease of use.",
        },
        {
          title: "06 · Timelessness",
          description: "A sober, lasting language beyond passing trends.",
        },
      ],
    },
    scopes: {
      label: "SCOPES",
      title: "Where we work",
      items: [
        {
          title: "Homes",
          description:
            "Home renovation and interiors with integrated layout, finishes, furniture, lighting and services for everyday comfort.",
          image: {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
            alt: "Residential interior with an open kitchen and natural light",
          },
        },
        {
          title: "Offices and workplaces",
          description:
            "Fit-out of offices and professional environments: corporate image, ergonomics, acoustics, lighting, climate, layout and wellbeing.",
          image: {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
            alt: "Workplace with natural light and an open layout",
          },
        },
        {
          title: "Retail and commercial spaces",
          description:
            "Renovation and adaptation of premises: brand identity, customer experience, circulation, display, function, services and construction solutions suited to the activity.",
          image: {
            src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85",
            alt: "Retail space with a customer journey and contemporary finishes",
          },
        },
      ],
    },
    stats: [
      { value: "15+", label: "Years of experience" },
      { value: "320+", label: "Projects delivered" },
      { value: "4", label: "Integrated pillars" },
      { value: "1", label: "Team, one project" },
    ] satisfies TrustStat[],
    zone: {
      label: "AREA",
      title: "Where we work",
      lead: "Integrated projects in Madrid city and the northwest metropolitan area: layout, materials, furniture, lighting, climate and services with one team.",
      highlight: "Madrid",
      groups: [
        {
          id: "capital",
          eyebrow: "City",
          title: "Neighbourhoods we work in most",
          places: [
            "Salamanca",
            "Chamberí",
            "Chamartín",
            "Retiro",
            "Moncloa",
            "Aravaca",
          ],
        },
        {
          id: "noroeste",
          eyebrow: "Northwest",
          title: "Metropolitan municipalities",
          places: [
            "Pozuelo de Alarcón",
            "Boadilla del Monte",
            "Majadahonda",
            "Las Rozas",
            "La Moraleja",
          ],
        },
      ],
    },
    process: {
      label: "PROCESS",
      title: "How we work",
      steps: [
        { number: "01", title: "We listen", description: "Needs, way of living, the space and the investment." },
        { number: "02", title: "We design", description: "Layout, materials, lighting and renders." },
        { number: "03", title: "We plan", description: "Budget, schedule, permits and procurement." },
        { number: "04", title: "We build", description: "One team coordinates the whole build." },
        { number: "05", title: "We furnish", description: "Furniture, lighting, textiles and technology." },
        { number: "06", title: "We hand over", description: "A completely finished space." },
      ] satisfies ProcessStep[],
    },
    testimonials: [
      {
        id: "1",
        quote: "The wardrobe uses every centimetre and the installation was impeccable. You can see the care in the finishes.",
        author: "María G.",
        role: "Client, Madrid",
        image: {
          src: "/images/testimonials/testimonio-armario.jpg",
          alt: "Interior of a bespoke oak wardrobe with LED lighting and precise finishes",
        },
      },
      {
        id: "2",
        quote: "They helped us unite living room and kitchen with a very personal design. Clear communication throughout.",
        author: "Carlos y Laura",
        role: "Full renovation",
        image: {
          src: "/images/testimonials/testimonio-salon-cocina.jpg",
          alt: "Open-plan living room and kitchen unified with oak joinery",
        },
      },
      {
        id: "3",
        quote: "Professional, punctual and with very good taste. The result went beyond what we had in mind.",
        author: "Elena R.",
        role: "Interior project",
        image: {
          src: "/images/testimonials/testimonio-interiorismo.jpg",
          alt: "Finished living room with natural materials and warm lighting",
        },
      },
    ] satisfies Testimonial[],
    cta: {
      title: "Tell us about your project",
      description: "Homes, offices and retail in Madrid and the northwest. Tell us about yours.",
    },
  },
});
