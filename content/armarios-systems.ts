import { defineCopy } from "@/lib/i18n";
import type { FurnitureProgram, SystemsSheetCopy } from "@/lib/types";

const IMG = "/images/armarios/sistemas";

const programsEs: readonly FurnitureProgram[] = [
  {
    id: "cubos",
    name: "Cubos",
    tagline: "Camas modulares",
    lead: "Sistema de piezas que se suman a lo ancho y a lo alto. Con ellas se arma cama, estantería, armario o escritorio.",
    families: [
      {
        id: "bases",
        title: "Módulos base",
        subtitle: "Base modules",
        span: "full",
        pieces: [
          {
            id: "base-cerrado-bajo",
            name: "Cajón bajo",
            src: `${IMG}/base-cerrado-bajo.png`,
            alt: "Módulo base bajo con frente cerrado",
          },
          {
            id: "base-cerrado-medio",
            name: "Cajón medio",
            src: `${IMG}/base-cerrado-medio.png`,
            alt: "Módulo base medio con frente cerrado",
          },
          {
            id: "base-cerrado-hondo",
            name: "Cajón hondo",
            src: `${IMG}/base-cerrado-hondo.png`,
            alt: "Módulo base alto con frente cerrado",
          },
          {
            id: "base-abierto-division",
            name: "Abierto con división",
            src: `${IMG}/base-abierto-division.png`,
            alt: "Módulo base abierto con división interior",
          },
          {
            id: "base-abierto-hueco",
            name: "Abierto de un hueco",
            src: `${IMG}/base-abierto-hueco.png`,
            alt: "Módulo base abierto de un hueco",
          },
          {
            id: "base-abierto-dos-huecos",
            name: "Abierto con dos huecos",
            src: `${IMG}/base-abierto-dos-huecos.png`,
            alt: "Módulo base abierto con dos huecos",
          },
        ],
      },
      {
        id: "rincon",
        title: "Módulos rincón",
        subtitle: "Corner modules",
        span: "half",
        pieces: [
          {
            id: "rincon-doble-tapa",
            name: "Doble tapa",
            src: `${IMG}/rincon-doble-tapa.png`,
            alt: "Módulo rincón con dos tapas alzadas",
          },
          {
            id: "rincon-doble-alto",
            name: "Doble alto",
            src: `${IMG}/rincon-doble-alto.png`,
            alt: "Módulo rincón alto con dos tapas alzadas",
          },
          {
            id: "rincon-una-tapa",
            name: "Una tapa",
            src: `${IMG}/rincon-una-tapa.png`,
            alt: "Módulo rincón con una tapa alzada",
          },
          {
            id: "rincon-estrecho",
            name: "Estrecho",
            src: `${IMG}/rincon-estrecho.png`,
            alt: "Módulo rincón estrecho con tapa alzada",
          },
        ],
      },
      {
        id: "singulares",
        title: "Módulos singulares",
        subtitle: "Singular modules",
        span: "half",
        pieces: [
          {
            id: "singular-cajon-bajo",
            name: "Cajón extraído",
            src: `${IMG}/singular-cajon-bajo.png`,
            alt: "Módulo singular con cajón extraído",
          },
          {
            id: "singular-dos-puertas",
            name: "Dos puertas",
            src: `${IMG}/singular-dos-puertas.png`,
            alt: "Módulo singular cerrado con dos puertas",
          },
          {
            id: "singular-cajon-alto",
            name: "Extraíble alto",
            src: `${IMG}/singular-cajon-alto.png`,
            alt: "Módulo singular alto con cajón extraído",
          },
        ],
      },
      {
        id: "nido",
        title: "Módulos nido",
        subtitle: "Nest modules",
        span: "third",
        pieces: [
          {
            id: "nido-cajones-finos",
            name: "Cajones finos",
            src: `${IMG}/nido-cajones-finos.png`,
            alt: "Módulo nido con cajones finos extraídos",
          },
          {
            id: "nido-cajon-ancho",
            name: "Cajón ancho",
            src: `${IMG}/nido-cajon-ancho.png`,
            alt: "Módulo nido con un cajón ancho extraído",
          },
        ],
      },
      {
        id: "estanteria",
        title: "Módulos estantería",
        subtitle: "Shelf modules",
        span: "third",
        pieces: [
          {
            id: "estanteria-estrecha",
            name: "Columna estrecha",
            src: `${IMG}/estanteria-estrecha.png`,
            alt: "Estantería estrecha de cinco huecos",
          },
          {
            id: "estanteria-ancha",
            name: "Columna ancha",
            src: `${IMG}/estanteria-ancha.png`,
            alt: "Estantería ancha de cuatro huecos",
          },
        ],
      },
      {
        id: "armario",
        title: "Módulos armario",
        subtitle: "Wardrobe modules",
        span: "third",
        pieces: [
          {
            id: "armario-puerta-balda",
            name: "Puerta y balda",
            src: `${IMG}/armario-puerta-balda.png`,
            alt: "Armario con baldas",
          },
          {
            id: "armario-barra-baldas",
            name: "Barra y baldas",
            src: `${IMG}/armario-barra-baldas.png`,
            alt: "Armario alto con barra y baldas",
          },
        ],
      },
    ],
  },
  {
    id: "up-down",
    name: "Up&Down",
    tagline: "Camas abatibles",
    lead: "Cama abatible sin marco. Abierta ocupa menos fondo; plegada devuelve el suelo. Altillo, puertas y complementos interiores.",
    families: [
      {
        id: "fondo-45",
        title: "Camas abatibles fondo 45",
        subtitle: "Folding beds depth 45",
        span: "full",
        pieces: [
          {
            id: "cama-baja",
            name: "Cama baja",
            src: `${IMG}/cama-baja.png`,
            alt: "Cama abatible horizontal baja",
          },
          {
            id: "cama-doble",
            name: "Cama doble",
            src: `${IMG}/cama-doble.png`,
            alt: "Dos camas abatibles en el mismo frente",
          },
          {
            id: "cama-alta",
            name: "Cama alta",
            src: `${IMG}/cama-alta.png`,
            alt: "Cama abatible horizontal alta",
          },
          {
            id: "cama-4-puertas",
            name: "Cama 4 puertas plegables",
            src: `${IMG}/cama-4-puertas.png`,
            alt: "Cama abatible con cuatro puertas plegables",
          },
        ],
      },
      {
        id: "verticales",
        title: "Camas verticales",
        subtitle: "Vertical folding beds",
        span: "full",
        pieces: [
          {
            id: "cama-vertical",
            name: "Cama vertical",
            src: `${IMG}/cama-vertical.png`,
            alt: "Cama abatible vertical sin altillo",
          },
          {
            id: "cama-vertical-altillo",
            name: "Cama vertical con altillo",
            src: `${IMG}/cama-vertical-altillo.png`,
            alt: "Cama abatible vertical con altillo",
          },
        ],
      },
    ],
  },
];

const programsEn: readonly FurnitureProgram[] = [
  {
    id: "cubos",
    name: "Cubos",
    tagline: "Modular beds",
    lead: "A system of pieces that add width and height. With them you build a bed, shelf, wardrobe or desk.",
    families: [
      {
        id: "bases",
        title: "Base modules",
        subtitle: "Módulos base",
        span: "full",
        pieces: [
          {
            id: "base-cerrado-bajo",
            name: "Low drawer",
            src: `${IMG}/base-cerrado-bajo.png`,
            alt: "Low closed base module",
          },
          {
            id: "base-cerrado-medio",
            name: "Mid drawer",
            src: `${IMG}/base-cerrado-medio.png`,
            alt: "Mid-height closed base module",
          },
          {
            id: "base-cerrado-hondo",
            name: "Deep drawer",
            src: `${IMG}/base-cerrado-hondo.png`,
            alt: "Tall closed base module",
          },
          {
            id: "base-abierto-division",
            name: "Open with divider",
            src: `${IMG}/base-abierto-division.png`,
            alt: "Open base module with divider",
          },
          {
            id: "base-abierto-hueco",
            name: "Open single bay",
            src: `${IMG}/base-abierto-hueco.png`,
            alt: "Open base module with one bay",
          },
          {
            id: "base-abierto-dos-huecos",
            name: "Open twin bays",
            src: `${IMG}/base-abierto-dos-huecos.png`,
            alt: "Open base module with two bays",
          },
        ],
      },
      {
        id: "rincon",
        title: "Corner modules",
        subtitle: "Módulos rincón",
        span: "half",
        pieces: [
          {
            id: "rincon-doble-tapa",
            name: "Twin lids",
            src: `${IMG}/rincon-doble-tapa.png`,
            alt: "Corner module with two lids raised",
          },
          {
            id: "rincon-doble-alto",
            name: "Tall twin lids",
            src: `${IMG}/rincon-doble-alto.png`,
            alt: "Tall corner module with two lids raised",
          },
          {
            id: "rincon-una-tapa",
            name: "Single lid",
            src: `${IMG}/rincon-una-tapa.png`,
            alt: "Corner module with one lid raised",
          },
          {
            id: "rincon-estrecho",
            name: "Narrow",
            src: `${IMG}/rincon-estrecho.png`,
            alt: "Narrow corner module with lid raised",
          },
        ],
      },
      {
        id: "singulares",
        title: "Singular modules",
        subtitle: "Módulos singulares",
        span: "half",
        pieces: [
          {
            id: "singular-cajon-bajo",
            name: "Pull-out drawer",
            src: `${IMG}/singular-cajon-bajo.png`,
            alt: "Singular module with drawer pulled out",
          },
          {
            id: "singular-dos-puertas",
            name: "Two doors",
            src: `${IMG}/singular-dos-puertas.png`,
            alt: "Singular closed module with two doors",
          },
          {
            id: "singular-cajon-alto",
            name: "Tall pull-out",
            src: `${IMG}/singular-cajon-alto.png`,
            alt: "Singular tall module with drawer pulled out",
          },
        ],
      },
      {
        id: "nido",
        title: "Nest modules",
        subtitle: "Módulos nido",
        span: "third",
        pieces: [
          {
            id: "nido-cajones-finos",
            name: "Slim drawers",
            src: `${IMG}/nido-cajones-finos.png`,
            alt: "Nest module with slim drawers pulled out",
          },
          {
            id: "nido-cajon-ancho",
            name: "Wide drawer",
            src: `${IMG}/nido-cajon-ancho.png`,
            alt: "Nest module with one wide drawer pulled out",
          },
        ],
      },
      {
        id: "estanteria",
        title: "Shelf modules",
        subtitle: "Módulos estantería",
        span: "third",
        pieces: [
          {
            id: "estanteria-estrecha",
            name: "Narrow column",
            src: `${IMG}/estanteria-estrecha.png`,
            alt: "Narrow open shelf column",
          },
          {
            id: "estanteria-ancha",
            name: "Wide column",
            src: `${IMG}/estanteria-ancha.png`,
            alt: "Wide open shelf column",
          },
        ],
      },
      {
        id: "armario",
        title: "Wardrobe modules",
        subtitle: "Módulos armario",
        span: "third",
        pieces: [
          {
            id: "armario-puerta-balda",
            name: "Door and shelf",
            src: `${IMG}/armario-puerta-balda.png`,
            alt: "Wardrobe with shelves",
          },
          {
            id: "armario-barra-baldas",
            name: "Rail and shelves",
            src: `${IMG}/armario-barra-baldas.png`,
            alt: "Tall wardrobe with hanging rail and shelves",
          },
        ],
      },
    ],
  },
  {
    id: "up-down",
    name: "Up&Down",
    tagline: "Folding beds",
    lead: "Frameless folding bed. Open it takes less depth; folded it returns the floor. Top cabinet, doors and interior fittings.",
    families: [
      {
        id: "fondo-45",
        title: "Folding beds depth 45",
        subtitle: "Camas abatibles fondo 45",
        span: "full",
        pieces: [
          {
            id: "cama-baja",
            name: "Low bed",
            src: `${IMG}/cama-baja.png`,
            alt: "Low horizontal folding bed",
          },
          {
            id: "cama-doble",
            name: "Double bed",
            src: `${IMG}/cama-doble.png`,
            alt: "Two horizontal folding beds on one front",
          },
          {
            id: "cama-alta",
            name: "High bed",
            src: `${IMG}/cama-alta.png`,
            alt: "High horizontal folding bed",
          },
          {
            id: "cama-4-puertas",
            name: "Bed with 4 folding doors",
            src: `${IMG}/cama-4-puertas.png`,
            alt: "Folding bed with four folding doors",
          },
        ],
      },
      {
        id: "verticales",
        title: "Vertical folding beds",
        subtitle: "Camas verticales",
        span: "full",
        pieces: [
          {
            id: "cama-vertical",
            name: "Vertical bed",
            src: `${IMG}/cama-vertical.png`,
            alt: "Vertical folding bed without top cabinet",
          },
          {
            id: "cama-vertical-altillo",
            name: "Vertical bed with top cabinet",
            src: `${IMG}/cama-vertical-altillo.png`,
            alt: "Vertical folding bed with top storage",
          },
        ],
      },
    ],
  },
];

export const armariosSystemsCopy = defineCopy<SystemsSheetCopy>({
  es: {
    label: "PROGRAMAS",
    title: "Piezas que se suman",
    lead: "Dos sistemas, mismos criterios de medida. Mira cada módulo.",
    programs: programsEs,
  },
  en: {
    label: "PROGRAMMES",
    title: "Pieces that add up",
    lead: "Two systems, same measuring rules. See each module.",
    programs: programsEn,
  },
});
