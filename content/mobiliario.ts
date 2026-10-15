import { defineCopy } from "@/lib/i18n";
import type { FaqItem, GalleryItem, ProcessStep } from "@/lib/types";

export const mobiliarioCopy = defineCopy({
  es: {
    meta: {
      title: "Mobiliario y carpintería a medida",
      description:
        "Cocinas, vestidores, armarios, muebles TV y carpintería integrada en la arquitectura. Diseño, fabricación e instalación en Madrid.",
    },
    hero: {
      label: "MOBILIARIO",
      title: "Made for your space",
      description:
        "Diseñamos piezas que pertenecen a la arquitectura: carpintería, cocinas, vestidores, muebles TV y soluciones a medida para cada estancia.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=2560&q=90",
        alt: "Vestidor con carpintería a medida, iluminación integrada y acabados lacados",
      },
    },
    editorial: {
      label: "ENFOQUE",
      verticalLabel: "A MEDIDA",
      title: "Piezas que completan la arquitectura",
      paragraphs: [
        "Medimos, diseñamos y fabricamos carpintería que respeta proporción, luz y circulación de la vivienda.",
        "Cocinas, vestidores y muebles especiales comparten materiales y criterio con el resto del proyecto.",
        "Fabricación, transporte e instalación con un equipo que conoce la obra y el diseño acordado.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=85",
        alt: "Vestidor con carpintería a medida e iluminación integrada",
      },
    },
    solutions: {
      label: "SOLUCIONES",
      title: "Carpintería para cada estancia",
      items: [
        { title: "Armarios y vestidores", description: "Empotrados, correderas o walk-in: distribución interior pensada para tu día a día.", image: { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80", alt: "Armario empotrado en dormitorio principal" } },
        { title: "Cocinas", description: "Mobiliario, encimeras e iluminación integrados con el resto de la vivienda.", image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80", alt: "Cocina a medida con isla y madera" } },
        { title: "Baños", description: "Muebles suspendidos, encimeras y almacenaje oculto con materiales duraderos.", image: { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80", alt: "Baño con mobiliario a medida" } },
        { title: "Piezas especiales", description: "Muebles TV, bibliotecas, bars y paneles que completan la arquitectura del espacio.", image: { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80", alt: "Mueble TV integrado en salón" } },
      ],
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
        { image: { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", alt: "Vestidor con cajoneras a medida" } },
        { image: { src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", alt: "Armario con puertas lacadas" } },
        { image: { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80", alt: "Dormitorio con armario empotrado" } },
        { image: { src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80", alt: "Perchero y estanterías en vestidor" } },
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
        "Kitchens, dressing rooms, wardrobes, TV units and joinery integrated into the architecture. Design, making and installation in Madrid.",
    },
    hero: {
      label: "FURNITURE",
      title: "Made for your space",
      description:
        "We design pieces that belong to the architecture: joinery, kitchens, dressing rooms, TV units and bespoke solutions for each room.",
      cta: "Start a project",
      image: {
        src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=2560&q=90",
        alt: "Dressing room with bespoke joinery, integrated lighting and lacquered finishes",
      },
    },
    editorial: {
      label: "APPROACH",
      verticalLabel: "BESPOKE",
      title: "Pieces that complete the architecture",
      paragraphs: [
        "We measure, design and make joinery that respects the proportion, light and circulation of the home.",
        "Kitchens, dressing rooms and special pieces share materials and criteria with the rest of the project.",
        "Making, delivery and installation by a team that knows the site and the agreed design.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=85",
        alt: "Dressing room with bespoke joinery and integrated lighting",
      },
    },
    solutions: {
      label: "SOLUTIONS",
      title: "Joinery for every room",
      items: [
        { title: "Wardrobes and dressing rooms", description: "Built-in, sliding or walk-in: an interior layout planned for daily use.", image: { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80", alt: "Built-in wardrobe in a primary bedroom" } },
        { title: "Kitchens", description: "Furniture, worktops and lighting integrated with the rest of the home.", image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80", alt: "Bespoke kitchen with an island and wood" } },
        { title: "Bathrooms", description: "Wall-hung units, worktops and concealed storage in durable materials.", image: { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80", alt: "Bathroom with bespoke furniture" } },
        { title: "Special pieces", description: "TV units, libraries, bars and panels that complete the architecture of the space.", image: { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80", alt: "TV unit integrated into a living room" } },
      ],
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
        { image: { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", alt: "Dressing room with bespoke drawers" } },
        { image: { src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", alt: "Wardrobe with lacquered doors" } },
        { image: { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80", alt: "Bedroom with a built-in wardrobe" } },
        { image: { src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80", alt: "Rail and shelves in a dressing room" } },
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
