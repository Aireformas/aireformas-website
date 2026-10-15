import { defineCopy } from "@/lib/i18n";
import type { ProcessStep, Testimonial, TrustStat } from "@/lib/types";

export const estudioCopy = defineCopy({
  es: {
    meta: {
      title: "Estudio",
      description:
        "Cómo diseñamos viviendas completas en Madrid: interiorismo, reforma, mobiliario y climatización con un solo equipo.",
    },
    hero: {
      label: "ESTUDIO",
      title: "Diseñamos viviendas para ser vividas",
      description:
        "Un buen proyecto no termina en lo que ves. Trabajamos distribución, materiales y mobiliario, y también lo que no se ve: iluminación, climatización, instalaciones y tecnología.",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Espacio residencial diseñado por aireformas",
      },
    },
    values: {
      label: "VALORES",
      title: "Lo que guía cada proyecto",
      items: ["Detalle", "Material", "Proporción", "Luz", "Confort", "Funcionalidad", "Atemporalidad"],
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
    },
    process: {
      label: "PROCESO",
      title: "Nuestra forma de trabajar",
      steps: [
        { number: "01", title: "Escuchamos", description: "Necesidades, estilo de vida, vivienda e inversión." },
        { number: "02", title: "Diseñamos", description: "Distribución, materiales, iluminación y renders." },
        { number: "03", title: "Planificamos", description: "Presupuesto, calendario, licencias y compras." },
        { number: "04", title: "Construimos", description: "Un único equipo coordina toda la ejecución." },
        { number: "05", title: "Equipamos", description: "Mobiliario, iluminación, textiles y tecnología." },
        { number: "06", title: "Entregamos", description: "Tu vivienda completamente terminada." },
      ] satisfies ProcessStep[],
    },
    testimonials: [
      {
        id: "1",
        quote: "El armario aprovecha cada centímetro y la instalación fue impecable. Se nota el cuidado en los acabados.",
        author: "María G.",
        role: "Cliente, Madrid",
        image: { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: "Detalle de armario terminado en vivienda" },
      },
      {
        id: "2",
        quote: "Nos ayudaron a unificar salón y cocina con un diseño muy personal. Comunicación clara en todo momento.",
        author: "Carlos y Laura",
        role: "Reforma integral",
        image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Espacio reformado con diseño de interiorismo" },
      },
      {
        id: "3",
        quote: "Profesionales, puntuales y con muy buen gusto. El resultado superó lo que teníamos en mente.",
        author: "Elena R.",
        role: "Proyecto de interiorismo",
        image: { src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80", alt: "Rincón de lectura con iluminación cálida" },
      },
    ] satisfies Testimonial[],
    cta: {
      title: "Conocemos tu proyecto",
      description: "Pisos y chalets de 90 a 500 m² en Madrid y noroeste. Cuéntanos el tuyo.",
    },
  },
  en: {
    meta: {
      title: "Studio",
      description:
        "How we design complete homes in Madrid: interiors, renovation, furniture and climate with one team.",
    },
    hero: {
      label: "STUDIO",
      title: "We design homes to be lived in",
      description:
        "A good project does not end with what you see. We work on layout, materials and furniture, and also on what stays unseen: lighting, climate, services and technology.",
      image: {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=2400&q=90",
        alt: "Residential space designed by aireformas",
      },
    },
    values: {
      label: "VALUES",
      title: "What guides every project",
      items: ["Detail", "Material", "Proportion", "Light", "Comfort", "Function", "Longevity"],
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
    },
    process: {
      label: "PROCESS",
      title: "How we work",
      steps: [
        { number: "01", title: "We listen", description: "Needs, way of living, the home and the investment." },
        { number: "02", title: "We design", description: "Layout, materials, lighting and renders." },
        { number: "03", title: "We plan", description: "Budget, schedule, permits and procurement." },
        { number: "04", title: "We build", description: "One team coordinates the whole build." },
        { number: "05", title: "We furnish", description: "Furniture, lighting, textiles and technology." },
        { number: "06", title: "We hand over", description: "Your home, completely finished." },
      ] satisfies ProcessStep[],
    },
    testimonials: [
      {
        id: "1",
        quote: "The wardrobe uses every centimetre and the installation was impeccable. You can see the care in the finishes.",
        author: "María G.",
        role: "Client, Madrid",
        image: { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: "Detail of a finished wardrobe in a home" },
      },
      {
        id: "2",
        quote: "They helped us unite living room and kitchen with a very personal design. Clear communication throughout.",
        author: "Carlos y Laura",
        role: "Full renovation",
        image: { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Renovated space with interior design" },
      },
      {
        id: "3",
        quote: "Professional, punctual and with very good taste. The result went beyond what we had in mind.",
        author: "Elena R.",
        role: "Interior project",
        image: { src: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80", alt: "Reading corner with warm lighting" },
      },
    ] satisfies Testimonial[],
    cta: {
      title: "Tell us about your project",
      description: "Apartments and houses from 90 to 500 m² in Madrid and the northwest. Tell us about yours.",
    },
  },
});
