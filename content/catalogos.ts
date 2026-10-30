import { defineCopy } from "@/lib/i18n";
import type { ImageAsset } from "@/lib/types";

export type CatalogItem = {
  id: string;
  pdfSrc: string;
  title: string;
  subtitle: string;
  description: string;
  cover: ImageAsset;
};

const catalogRegistry = [
  {
    id: "flow-jotajotape",
    pdfSrc: "/catalogs/Catalogo_FLOW_jotajotape-compressed.pdf",
    coverSrc: "/catalogs/flow-jotajotape-cover.jpg",
    coverWidth: 1200,
    coverHeight: 463,
  },
] as const;

type CatalogLocaleCopy = {
  title: string;
  subtitle: string;
  description: string;
  coverAlt: string;
};

function buildItems(
  labels: Record<(typeof catalogRegistry)[number]["id"], CatalogLocaleCopy>,
): CatalogItem[] {
  return catalogRegistry.map((entry) => {
    const copy = labels[entry.id];
    return {
      id: entry.id,
      pdfSrc: entry.pdfSrc,
      title: copy.title,
      subtitle: copy.subtitle,
      description: copy.description,
      cover: {
        src: entry.coverSrc,
        alt: copy.coverAlt,
        width: entry.coverWidth,
        height: entry.coverHeight,
      },
    };
  });
}

export const catalogosCopy = defineCopy({
  es: {
    meta: {
      title: "Catálogos",
      description:
        "Consulta nuestras colecciones de materiales, revestimientos y soluciones para interiorismo y reforma. Descarga o visualiza cada catálogo en el navegador.",
    },
    hero: {
      label: "Recursos",
      title: "Catálogos",
      headline: "Materiales y colecciones para tu proyecto",
      description: "Selecciones curadas de fabricantes y proveedores con los que trabajamos.",
      support:
        "Explora acabados, revestimientos y propuestas decorativas. Abre cada catálogo aquí mismo o descárgalo para revisarlo con calma.",
      cta: "Hablar de mi proyecto",
      image: {
        src: "/images/mobiliario/mobiliario-hero.jpg",
        alt: "Detalle de carpintería y materiales en un interior contemporáneo",
      },
    },
    grid: {
      label: "COLECCIONES",
      title: "Catálogos disponibles",
      lead: "Haz clic en una ficha para ver el PDF en pantalla completa.",
    },
    viewer: {
      close: "Cerrar catálogo",
      openTab: "Abrir en nueva pestaña",
      download: "Descargar PDF",
    },
    items: buildItems({
      "flow-jotajotape": {
        title: "Flow",
        subtitle: "Jota Jota Pe",
        description: "Colección de revestimientos y soluciones decorativas Flow.",
        coverAlt: "Portada del catálogo Flow de Jota Jota Pe",
      },
    }),
    cta: {
      label: "Contacto",
      title: "¿Buscas un material concreto?",
      description:
        "Cuéntanos qué acabado o colección te interesa y te orientamos dentro del proyecto.",
    },
  },
  en: {
    meta: {
      title: "Catalogs",
      description:
        "Browse our material, surface and interior collections. View or download each catalog in your browser.",
    },
    hero: {
      label: "Resources",
      title: "Catalogs",
      headline: "Materials and collections for your project",
      description: "Curated selections from manufacturers and suppliers we work with.",
      support:
        "Explore finishes, surfaces and decorative proposals. Open each catalog here or download it for later.",
      cta: "Start a project",
      image: {
        src: "/images/mobiliario/mobiliario-hero.jpg",
        alt: "Cabinetry and material detail in a contemporary interior",
      },
    },
    grid: {
      label: "COLLECTIONS",
      title: "Available catalogs",
      lead: "Click a card to view the PDF in full screen.",
    },
    viewer: {
      close: "Close catalog",
      openTab: "Open in new tab",
      download: "Download PDF",
    },
    items: buildItems({
      "flow-jotajotape": {
        title: "Flow",
        subtitle: "Jota Jota Pe",
        description: "Flow decorative surfaces and wall covering collection.",
        coverAlt: "Cover of the Flow catalog by Jota Jota Pe",
      },
    }),
    cta: {
      label: "Contact",
      title: "Looking for a specific material?",
      description:
        "Tell us which finish or collection interests you and we will guide you within your project.",
    },
  },
});
