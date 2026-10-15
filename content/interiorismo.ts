import { defineCopy } from "@/lib/i18n";
import type { GalleryItem, ProcessStep } from "@/lib/types";

export const interiorismoCopy = defineCopy({
  es: {
    meta: {
      title: "Interiorismo residencial en Madrid",
      description:
        "Distribución, materiales, iluminación, cocinas y baños. Proyectos de interiorismo residencial integrados con reforma y mobiliario en Madrid.",
    },
    hero: {
      label: "INTERIORISMO",
      title: "Espacios pensados para vivir",
      description:
        "Diseñamos la distribución, la luz y los materiales de tu vivienda como un sistema coherente, conectado con obra, mobiliario y climatización cuando el proyecto lo requiere.",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Salón con diseño de interiorismo y luz natural",
      },
    },
    editorial: {
      label: "ENFOQUE",
      title: "Proporción, luz y material",
      paragraphs: [
        "Cada estancia tiene una función clara y una relación con las demás. Trabajamos planos, paleta y detalle constructivo antes de elegir piezas.",
        "La iluminación se diseña por capas: general, puntual y ambiental. Los materiales se eligen por tacto, mantenimiento y atemporalidad.",
        "Cuando el alcance es integral, interiorismo, reforma y mobiliario avanzan con el mismo criterio: un solo equipo, un solo proyecto.",
      ],
    },
    services: {
      label: "SERVICIOS",
      title: "Interiorismo integral",
      items: [
        { title: "Distribución", description: "Planos, circulaciones y aprovechamiento de luz natural en pisos y chalets." },
        { title: "Materiales", description: "Piedra, madera, microcemento y revestimientos seleccionados para uso real." },
        { title: "Iluminación", description: "Plan de luz técnico y luminarias integradas en carpintería y arquitectura." },
        { title: "Cocinas y baños", description: "Estancias clave resueltas con diseño, instalaciones y mobiliario coordinados." },
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
      title: "Antes y después · selección reciente",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Salón después de proyecto de interiorismo" }, caption: "Salón" },
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
        { number: "02", title: "Diseñamos", description: "Planos, materiales, iluminación y renders." },
        { number: "03", title: "Desarrollamos", description: "Detalle de mobiliario y coordinación con obra e instalaciones." },
        { number: "04", title: "Entregamos", description: "Espacio terminado, con styling y puesta a punto final." },
      ] satisfies ProcessStep[],
    },
    cta: {
      title: "Hablemos de tu interior",
      description: "Cuéntanos la vivienda y el alcance. Te proponemos el camino más claro.",
    },
  },
  en: {
    meta: {
      title: "Residential interior design in Madrid",
      description:
        "Layout, materials, lighting, kitchens and bathrooms. Residential interior projects integrated with renovation and furniture in Madrid.",
    },
    hero: {
      label: "INTERIORS",
      title: "Spaces designed for living",
      description:
        "We design the layout, light and materials of your home as one coherent system, connected to construction, furniture and climate when the project needs it.",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Living room with interior design and daylight",
      },
    },
    editorial: {
      label: "APPROACH",
      title: "Proportion, light and material",
      paragraphs: [
        "Each room has a clear function and a relationship with the others. We work plans, palette and construction detail before choosing pieces.",
        "Lighting is designed in layers: ambient, task and atmosphere. Materials are chosen for touch, maintenance and longevity.",
        "When the scope is complete, interiors, renovation and furniture move with the same criteria: one team, one project.",
      ],
    },
    services: {
      label: "SERVICES",
      title: "Integrated interiors",
      items: [
        { title: "Layout", description: "Plans, circulation and use of daylight in apartments and houses." },
        { title: "Materials", description: "Stone, wood, microcement and finishes selected for real use." },
        { title: "Lighting", description: "A technical lighting plan and fittings integrated into joinery and architecture." },
        { title: "Kitchens and bathrooms", description: "Key rooms resolved with coordinated design, services and furniture." },
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
      title: "Before and after · recent selection",
      items: [
        { image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", alt: "Living room after an interior project" }, caption: "Living room" },
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
        { number: "02", title: "We design", description: "Plans, materials, lighting and renders." },
        { number: "03", title: "We develop", description: "Furniture detail and coordination with construction and services." },
        { number: "04", title: "We hand over", description: "A finished space, with styling and a final check." },
      ] satisfies ProcessStep[],
    },
    cta: {
      title: "Let's talk about your interior",
      description: "Tell us about the home and the scope. We propose the clearest path.",
    },
  },
});
