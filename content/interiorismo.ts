import { defineCopy } from "@/lib/i18n";
import type { GalleryItem, ProcessStep } from "@/lib/types";

export const interiorismoCopy = defineCopy({
  es: {
    meta: {
      title: "Interiorismo en Madrid",
      description:
        "Espacios pensados para vivirlos. Diseñados para ti. Moodboards, materiales, 3D y renders. Interiorismo integrado con reforma y mobiliario en Madrid.",
    },
    hero: {
      label: "Diseño",
      title: "Interiorismo",
      headline: "Espacios pensados para vivirlos. Diseñados para ti.",
      description: "Estética, funcionalidad y confort en un único criterio.",
      support:
        "Cada proyecto comienza escuchando al cliente. Moodboards, materiales, luz, mobiliario y renders 3D antes de ejecutar.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Salón con diseño de interiorismo y luz natural",
      },
      chips: [
        { id: "concepto", title: "Concepto y estilo de vida", icon: "home" },
        { id: "moodboards", title: "Moodboards y materiales", icon: "palette" },
        { id: "acabados", title: "Pinturas, papeles, luz y mobiliario", icon: "lightbulb" },
        { id: "renders", title: "Diseño 3D y revisiones", icon: "view_in_ar" },
        { id: "inversion", title: "Alternativas según inversión", icon: "account_balance_wallet" },
      ],
    },
    editorial: {
      label: "ENFOQUE",
      title: "Diseño personalizado, decisión informada",
      paragraphs: [
        "Desarrollamos propuestas de interiorismo personalizadas, adaptadas tanto a sus gustos como a la inversión prevista.",
        "Nuestro proceso creativo incluye la elaboración de moodboards, definición de paletas cromáticas, selección de pinturas, papeles pintados, revestimientos, texturas, iluminación, mobiliario y materiales.",
        "Mediante diseños tridimensionales (3D) y renders fotorrealistas, permitimos visualizar los espacios antes de comenzar la obra, facilitando la elección de acabados y la toma de decisiones.",
        "Diseñamos con criterio, cuidamos los detalles y buscamos el equilibrio entre diseño, calidad y presupuesto.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90",
        alt: "Interior con luz cálida, materiales naturales y proporción calmada",
      },
    },
    services: {
      label: "SERVICIOS",
      title: "Interiorismo integral",
      items: [
        {
          id: "concepto",
          title: "Concepto y estilo de vida",
          description:
            "Distribución, función y atmósfera adaptadas a cómo se vive o se usa el espacio.",
        },
        {
          id: "moodboards",
          title: "Moodboards y materiales",
          description:
            "Selección de colores, tejidos, texturas y materiales con criterio de calidad y durabilidad.",
        },
        {
          id: "acabados",
          title: "Pinturas, papeles, luz y mobiliario",
          description:
            "Acabados decorativos, iluminación y mobiliario coordinados con la arquitectura del proyecto.",
        },
        {
          id: "renders",
          title: "Diseño 3D y revisiones",
          description:
            "Renders fotorrealistas y revisiones antes de ejecutar, para decidir con claridad.",
        },
        {
          id: "inversion",
          title: "Alternativas según inversión",
          description:
            "Propuestas alineadas con prioridades y presupuesto, sin perder coherencia de diseño.",
        },
      ],
      crossLead: "Reforma y obra en",
      reformas: "Reformas",
      crossMid: ". Carpintería en",
      mobiliario: "Mobiliario",
      crossEnd: ". Climatización en",
      climate: "Climate",
    },
    gallery: {
      label: "PROYECTOS",
      title: "Selección de ambientes",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Salón con luz natural y materiales naturales" }, caption: "Salón" },
        { image: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Dormitorio con textiles y luz cálida" }, caption: "Dormitorio" },
        { image: { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80", alt: "Detalle decorativo con madera y luz" }, caption: "Detalle" },
        { image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Cocina integrada con salón" }, caption: "Cocina" },
      ] satisfies GalleryItem[],
    },
    process: {
      label: "PROCESO",
      title: "Cómo desarrollamos tu interior",
      steps: [
        { number: "01", title: "Escuchamos", description: "Estilo de vida, referencias y necesidades de cada estancia." },
        { number: "02", title: "Diseñamos", description: "Moodboards, planos, materiales, iluminación y renders." },
        { number: "03", title: "Desarrollamos", description: "Detalle de mobiliario y coordinación con obra e instalaciones." },
        { number: "04", title: "Entregamos", description: "Espacio terminado, con styling y puesta a punto final." },
      ] satisfies ProcessStep[],
    },
    cta: {
      title: "Hablemos de tu interior",
      description: "Cuéntanos el espacio y el alcance. Te proponemos el camino más claro.",
    },
  },
  en: {
    meta: {
      title: "Interior design in Madrid",
      description:
        "Spaces designed to be lived in. Designed for you. Moodboards, materials, 3D and renders. Interiors integrated with renovation and furniture in Madrid.",
    },
    hero: {
      label: "Design",
      title: "Interiors",
      headline: "Spaces designed to be lived in. Designed for you.",
      description: "Aesthetics, function and comfort under one standard.",
      support:
        "Every project begins by listening to the client. Moodboards, materials, light, furniture and 3D renders before we build.",
      cta: "Start a project",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Living room with interior design and daylight",
      },
      chips: [
        { id: "concepto", title: "Concept and way of living", icon: "home" },
        { id: "moodboards", title: "Moodboards and materials", icon: "palette" },
        { id: "acabados", title: "Paints, papers, light and furniture", icon: "lightbulb" },
        { id: "renders", title: "3D design and reviews", icon: "view_in_ar" },
        { id: "inversion", title: "Options by investment", icon: "account_balance_wallet" },
      ],
    },
    editorial: {
      label: "APPROACH",
      title: "Personal design, informed decisions",
      paragraphs: [
        "We develop personalised interior proposals, adapted both to taste and to the planned investment.",
        "Our creative process includes moodboards, colour palettes, selection of paints, wallpapers, finishes, textures, lighting, furniture and materials.",
        "Through three-dimensional designs (3D) and photorealistic renders, we make it possible to visualise spaces before construction begins, easing finish choices and decision-making.",
        "We design with criteria, care for detail and seek the balance between design, quality and budget.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90",
        alt: "Interior with warm light, natural materials and calm proportion",
      },
    },
    services: {
      label: "SERVICES",
      title: "Integrated interiors",
      items: [
        {
          id: "concepto",
          title: "Concept and way of living",
          description:
            "Layout, function and atmosphere adapted to how the space is lived in or used.",
        },
        {
          id: "moodboards",
          title: "Moodboards and materials",
          description:
            "Selection of colours, fabrics, textures and materials with quality and durability in mind.",
        },
        {
          id: "acabados",
          title: "Paints, papers, light and furniture",
          description:
            "Decorative finishes, lighting and furniture coordinated with the architecture of the project.",
        },
        {
          id: "renders",
          title: "3D design and reviews",
          description:
            "Photorealistic renders and reviews before build, so decisions are clear.",
        },
        {
          id: "inversion",
          title: "Options by investment",
          description:
            "Proposals aligned with priorities and budget, without losing design coherence.",
        },
      ],
      crossLead: "Building work in",
      reformas: "Renovation",
      crossMid: ". Joinery in",
      mobiliario: "Furniture",
      crossEnd: ". Climate control in",
      climate: "Climate",
    },
    gallery: {
      label: "PROJECTS",
      title: "Selected atmospheres",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Living room with daylight and natural materials" }, caption: "Living room" },
        { image: { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80", alt: "Bedroom with textiles and warm light" }, caption: "Bedroom" },
        { image: { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80", alt: "Decorative detail in wood and light" }, caption: "Detail" },
        { image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Kitchen open to the living room" }, caption: "Kitchen" },
      ] satisfies GalleryItem[],
    },
    process: {
      label: "PROCESS",
      title: "How we develop your interior",
      steps: [
        { number: "01", title: "We listen", description: "Way of living, references and the needs of each room." },
        { number: "02", title: "We design", description: "Moodboards, plans, materials, lighting and renders." },
        { number: "03", title: "We develop", description: "Furniture detail and coordination with construction and services." },
        { number: "04", title: "We hand over", description: "A finished space, with styling and a final check." },
      ] satisfies ProcessStep[],
    },
    cta: {
      title: "Let's talk about your interior",
      description: "Tell us about the space and the scope. We propose the clearest path.",
    },
  },
});
