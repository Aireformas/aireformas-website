import { defineCopy } from "@/lib/i18n";
import type { FaqItem, ImageAsset, ProcessStep } from "@/lib/types";

export type ClimateService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: ImageAsset;
};

const serviceImages = {
  vrv: { src: "/images/climate/climate-vrv.jpg", altEs: "Consola de bomba de calor blanca junto a un ventanal en un interior de yeso y roble", altEn: "White heat-pump console beside a window in a plaster and oak interior" },
  ventilacion: { src: "/images/climate/climate-ventilacion.jpg", altEs: "Equipo de recuperación de calor con tres conductos metálicos en un cuarto técnico", altEn: "Heat-recovery unit with three metal ducts in a plant room" },
  aerotermia: { src: "/images/climate/climate-aerotermia.jpg", altEs: "Unidad exterior de aerotermia en la terraza de una vivienda de hormigón y vidrio", altEn: "Outdoor air-source heat pump on the terrace of a concrete and glass home" },
  suelo: { src: "/images/climate/climate-suelo.jpg", altEs: "Circuitos de suelo radiante sobre aislamiento negro, con colector junto a un pilar de hormigón", altEn: "Underfloor heating circuits on black insulation, with a manifold beside a concrete column" },
  invisible: { src: "/images/climate/climate-invisible.jpg", altEs: "Corte de techo con conducto de suministro y plenum de retorno sobre un salón terminado", altEn: "Ceiling section with a supply duct and return plenum above a finished living room" },
  acs: { src: "/images/climate/climate-acs.jpg", altEs: "Acumulador de agua caliente integrado en un armario de roble, con vaso de expansión y tuberías", altEn: "Hot-water cylinder integrated in an oak cupboard, with an expansion vessel and pipework" },
  conductos: { src: "/images/climate/climate-conductos.jpg", altEs: "Salón y cocina con rejillas lineales en el techo y un conducto circular alineado con la arquitectura", altEn: "Living room and kitchen with linear ceiling grilles and a circular duct aligned with the architecture" },
  control: { src: "/images/climate/climate-control.jpg", altEs: "Panel de clima en la pared mostrando 22 grados, con el salón desenfocado al fondo", altEn: "Wall climate panel showing 22 degrees, with the living room soft in the background" },
} as const;

export const climateCopy = defineCopy({
  es: {
    meta: {
      title: "Climatización invisible y aerotermia",
      description:
        "AIREFORMAS Climate: aerotermia, bombas de calor y VRV, ventilación con recuperación, suelo radiante, conductos, ACS y control inteligente integrados en el proyecto de vivienda en Madrid.",
    },
    hero: {
      label: "Confort",
      title: "Climate",
      headline: "Tecnología que se siente",
      description: "Confort constante todo el año.",
      support:
        "Diseñamos climatización, agua caliente y control como parte del espacio: invisible en la arquitectura, precisa en el funcionamiento.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "/images/climate/climate-hero.jpg",
        alt: "Salón con rejilla lineal en el techo y unidad de aerotermia en el jardín, vista a través del ventanal",
      },
    },
    services: {
      label: "Servicios",
      title: "Ingeniería y diseño integrados al proyecto",
      lead: "Soluciones de climatización pensadas desde el inicio, coordinadas con la arquitectura y el interiorismo para un resultado eficiente, estético y duradero.",
      crossLead: "Reforma e interiorismo en",
      reformas: "Reformas",
      crossAnd: "e",
      interiorismo: "Interiorismo",
      crossEnd: ". Mobiliario en",
      mobiliario: "Mobiliario",
      items: [
        { id: "bombas-de-calor", title: "Bombas de calor y VRV", description: "Sistemas de alta eficiencia para calefacción y refrigeración, con regulación independiente por zonas.", icon: "heat_pump", image: { src: serviceImages.vrv.src, alt: serviceImages.vrv.altEs } },
        { id: "ventilacion", title: "Ventilación y recuperación", description: "Renovación continua del aire interior con recuperación energética, mejorando la calidad ambiental y reduciendo el consumo.", icon: "air", image: { src: serviceImages.ventilacion.src, alt: serviceImages.ventilacion.altEs } },
        { id: "aerotermia", title: "Aerotermia", description: "Tecnología eficiente para producir calefacción, refrigeración y agua caliente sanitaria con la energía del aire exterior.", icon: "sunny", image: { src: serviceImages.aerotermia.src, alt: serviceImages.aerotermia.altEs } },
        { id: "suelo-radiante", title: "Suelo radiante", description: "Climatización uniforme mediante circuitos integrados en el pavimento, con el máximo confort térmico y sin rejillas visibles.", icon: "waves", image: { src: serviceImages.suelo.src, alt: serviceImages.suelo.altEs } },
        { id: "climatizacion-invisible", title: "Climatización invisible", description: "Integración de los sistemas en techos, paredes y elementos arquitectónicos, sin alterar la estética interior.", icon: "visibility", image: { src: serviceImages.invisible.src, alt: serviceImages.invisible.altEs } },
        { id: "acs", title: "ACS", description: "Producción y distribución de agua caliente sanitaria dimensionada al uso real de cada vivienda.", icon: "water_drop", image: { src: serviceImages.acs.src, alt: serviceImages.acs.altEs } },
        { id: "conductos", title: "Conductos y rejillas", description: "Rejillas lineales y retornos arquitectónicos alineados con techos y carpintería, para una distribución del aire eficiente y discreta.", icon: "hvac", image: { src: serviceImages.conductos.src, alt: serviceImages.conductos.altEs } },
        { id: "control", title: "Control inteligente", description: "Gestión de temperatura, zonas, horarios y consumo para un confort personalizado, sin complicar el día a día.", icon: "thermostat", image: { src: serviceImages.control.src, alt: serviceImages.control.altEs } },
      ] satisfies ClimateService[],
    },
    process: {
      label: "Proceso",
      title: "De la carga térmica al confort",
      lead: "Ingeniería y ejecución coordinadas con reforma e interiorismo en un solo calendario.",
      steps: [
        { number: "01", title: "Carga y estudio", description: "Dimensionado según orientación, envolvente y uso de estancias." },
        { number: "02", title: "Integración en planos", description: "Conductos, suelo radiante y equipos en el diseño del espacio." },
        { number: "03", title: "Ejecución", description: "Instalación coordinada con el calendario de obra." },
        { number: "04", title: "Puesta en marcha", description: "Regulación, pruebas y explicación del control al cliente." },
      ] satisfies ProcessStep[],
    },
    faq: [
      { id: "invisible", question: "¿Qué significa climatización invisible?", answer: "Rejillas, retornos y equipos se resuelven en el proyecto arquitectónico: líneas limpias, menos elementos visibles y confort constante." },
      { id: "aerotermia-reforma", question: "¿Se puede instalar aerotermia en una reforma?", answer: "Sí, en muchos casos. Evaluamos la vivienda, el espacio técnico y la envolvente para proponer la solución más adecuada." },
      { id: "ventilacion", question: "¿La ventilación con recuperación sustituye a la climatización?", answer: "No. Renueva el aire y recupera energía. La carga térmica la cubren aerotermia, VRV o suelo radiante. Se diseñan juntos." },
      { id: "suelo-radiante", question: "¿El suelo radiante limita el tipo de pavimento?", answer: "No necesariamente. Trabajamos con el diseño de materiales para compatibilizar pavimento, espesores y rendimiento." },
      { id: "solo-clima", question: "¿Trabajáis climatización sin reforma completa?", answer: "El enfoque es integral. Climate funciona mejor cuando se diseña junto al resto del proyecto; consultamos casos puntuales según alcance." },
      { id: "zona", question: "¿Dónde instaláis sistemas Climate?", answer: "En viviendas de Madrid capital y noroeste metropolitano, dentro de proyectos que coordina aireformas." },
    ] satisfies FaqItem[],
    cta: {
      title: "Integra Climate en tu proyecto",
      description: "Cuéntanos la vivienda y el alcance. Te explicamos opciones técnicas alineadas con el diseño.",
    },
  },
  en: {
    meta: {
      title: "Invisible climate control and air-source heat pumps",
      description:
        "AIREFORMAS Climate: air-source heat pumps, heat pumps and VRV, heat-recovery ventilation, underfloor heating, ductwork, hot water and smart control integrated into the home project in Madrid.",
    },
    hero: {
      label: "Comfort",
      title: "Climate",
      headline: "Technology you can feel",
      description: "Steady comfort all year.",
      support:
        "We design climate, hot water and control as part of the space: invisible in the architecture, precise in how it works.",
      cta: "Start a project",
      image: {
        src: "/images/climate/climate-hero.jpg",
        alt: "Living room with a linear ceiling grille and an air-source unit in the garden, seen through the window",
      },
    },
    services: {
      label: "Services",
      title: "Engineering and design integrated into the project",
      lead: "Climate solutions considered from the start, coordinated with architecture and interiors for an efficient, quiet and lasting result.",
      crossLead: "Renovation and interiors in",
      reformas: "Renovation",
      crossAnd: "and",
      interiorismo: "Interiors",
      crossEnd: ". Furniture in",
      mobiliario: "Furniture",
      items: [
        { id: "bombas-de-calor", title: "Heat pumps and VRV", description: "High-efficiency systems for heating and cooling, with independent control by zone.", icon: "heat_pump", image: { src: serviceImages.vrv.src, alt: serviceImages.vrv.altEn } },
        { id: "ventilacion", title: "Ventilation and recovery", description: "Continuous renewal of indoor air with energy recovery, improving air quality and reducing consumption.", icon: "air", image: { src: serviceImages.ventilacion.src, alt: serviceImages.ventilacion.altEn } },
        { id: "aerotermia", title: "Air-source heat pumps", description: "Efficient technology for heating, cooling and domestic hot water from outdoor air.", icon: "sunny", image: { src: serviceImages.aerotermia.src, alt: serviceImages.aerotermia.altEn } },
        { id: "suelo-radiante", title: "Underfloor heating", description: "Even climate through circuits built into the floor, with maximum thermal comfort and no visible grilles.", icon: "waves", image: { src: serviceImages.suelo.src, alt: serviceImages.suelo.altEn } },
        { id: "climatizacion-invisible", title: "Invisible climate", description: "Systems integrated into ceilings, walls and architectural elements, without disturbing the interior.", icon: "visibility", image: { src: serviceImages.invisible.src, alt: serviceImages.invisible.altEn } },
        { id: "acs", title: "Hot water", description: "Domestic hot water production and distribution sized to how each home is actually used.", icon: "water_drop", image: { src: serviceImages.acs.src, alt: serviceImages.acs.altEn } },
        { id: "conductos", title: "Ducts and grilles", description: "Linear grilles and architectural returns aligned with ceilings and joinery, for efficient and discreet air distribution.", icon: "hvac", image: { src: serviceImages.conductos.src, alt: serviceImages.conductos.altEn } },
        { id: "control", title: "Smart control", description: "Management of temperature, zones, schedules and consumption for personal comfort, without complicating daily life.", icon: "thermostat", image: { src: serviceImages.control.src, alt: serviceImages.control.altEn } },
      ] satisfies ClimateService[],
    },
    process: {
      label: "Process",
      title: "From heat load to comfort",
      lead: "Engineering and installation coordinated with renovation and interiors on one schedule.",
      steps: [
        { number: "01", title: "Load and study", description: "Sizing based on orientation, envelope and how rooms are used." },
        { number: "02", title: "Integration in drawings", description: "Ducts, underfloor heating and equipment in the design of the space." },
        { number: "03", title: "Installation", description: "Installation coordinated with the construction programme." },
        { number: "04", title: "Commissioning", description: "Regulation, testing and an explanation of the controls for the client." },
      ] satisfies ProcessStep[],
    },
    faq: [
      { id: "invisible", question: "What does invisible climate mean?", answer: "Grilles, returns and equipment are resolved in the architectural project: clean lines, fewer visible elements and steady comfort." },
      { id: "aerotermia-reforma", question: "Can an air-source heat pump be installed in a renovation?", answer: "Yes, in many cases. We assess the home, the plant space and the envelope to propose the most suitable solution." },
      { id: "ventilacion", question: "Does heat-recovery ventilation replace climate control?", answer: "No. It renews the air and recovers energy. The thermal load is covered by an air-source heat pump, VRV or underfloor heating. They are designed together." },
      { id: "suelo-radiante", question: "Does underfloor heating limit the type of floor?", answer: "Not necessarily. We work with the material design so flooring, thicknesses and performance stay compatible." },
      { id: "solo-clima", question: "Do you do climate without a full renovation?", answer: "The approach is integrated. Climate works best when it is designed with the rest of the project; we review specific cases according to scope." },
      { id: "zona", question: "Where do you install Climate systems?", answer: "In homes in Madrid city and the northwest metropolitan area, within projects coordinated by aireformas." },
    ] satisfies FaqItem[],
    cta: {
      title: "Bring Climate into your project",
      description: "Tell us about the home and the scope. We explain technical options aligned with the design.",
    },
  },
});
