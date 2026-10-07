import type { GalleryItem } from "@/lib/types";

export const proyectosMeta = {
  title: "Proyectos",
  description:
    "Proyectos de interiorismo y reforma en Madrid, Pozuelo, Boadilla y noroeste. Viviendas residenciales diseñadas y ejecutadas por aireformas.",
};

export const proyectosHero = {
  label: "PROYECTOS",
  title: "Viviendas diseñadas para ser vividas",
  description:
    "Selección de proyectos residenciales. Cada uno integra diseño, obra, mobiliario y confort.",
  image: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90",
    alt: "Proyecto residencial aireformas",
  },
};

export type ProjectCard = {
  slug: string;
  location: string;
  typology: string;
  area: string;
  image: GalleryItem["image"];
  href: string | null;
};

export const projectCards: ProjectCard[] = [
  {
    slug: "pozuelo-residential",
    location: "Pozuelo",
    typology: "Residential",
    area: "240 m²",
    image: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
      alt: "Vivienda unifamiliar en Pozuelo, salón con luz natural",
    },
    href: null,
  },
  {
    slug: "madrid-apartment",
    location: "Madrid",
    typology: "Apartment",
    area: "175 m²",
    image: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
      alt: "Piso en Madrid, salón integrado con cocina",
    },
    href: null,
  },
  {
    slug: "boadilla-villa",
    location: "Boadilla",
    typology: "Villa",
    area: "310 m²",
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
      alt: "Chalet en Boadilla, cocina y zona de día",
    },
    href: null,
  },
];

export const proyectosCta = {
  title: "¿Tu vivienda puede ser el próximo proyecto?",
  description: "Hablemos de distribución, materiales y alcance.",
};
