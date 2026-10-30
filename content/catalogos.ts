import { defineCopy } from "@/lib/i18n";
import type { ImageAsset } from "@/lib/types";

export type CatalogItem = {
  id: string;
  pdfSrc: string;
  downloadSrc: string;
  downloadFilename: string;
  title: string;
  subtitle: string;
  description: string;
  cover: ImageAsset;
};

export const catalogRegistry = [
  {
    id: "flow-jotajotape",
    pdfSrc: "/catalogs/Catalogo_FLOW_jotajotape-compressed.pdf",
    downloadFilename: "Catalogo-Flow-JotaJotaPe.pdf",
    coverSrc: "/catalogs/flow-jotajotape-cover.jpg",
    coverWidth: 1200,
    coverHeight: 463,
  },
] as const;

export type CatalogRegistryId = (typeof catalogRegistry)[number]["id"];

export function getCatalogRegistryEntry(id: string) {
  return catalogRegistry.find((entry) => entry.id === id);
}

export function catalogDownloadPath(id: CatalogRegistryId): string {
  return `/api/catalogos/${id}/download`;
}

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
      downloadSrc: catalogDownloadPath(entry.id),
      downloadFilename: entry.downloadFilename,
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
        src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
        alt: "Vestidor a medida con librería integrada, puertas de cristal e iluminación",
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
      openInBrowser: "Ver catálogo",
      download: "Descargar PDF",
      mobileLead:
        "En el móvil el PDF se abre con el visor del navegador. Al descargar, en iPhone puedes usar Compartir → Guardar en Archivos.",
    },
    items: buildItems({
      "flow-jotajotape": {
        title: "Flow",
        subtitle: "JotaJotaPe",
        description:
          "Mobiliario juvenil y modular de la colección Flow de JotaJotaPe.",
        coverAlt: "Portada del catálogo Flow de mobiliario JotaJotaPe",
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
        src: "/images/distributions/73_ARMARIO_jotajotape_NEXT.jpg",
        alt: "Custom walk-in dressing room with integrated bookcase, glass doors and lighting",
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
      openInBrowser: "View catalog",
      download: "Download PDF",
      mobileLead:
        "On mobile, the PDF opens in your browser viewer. To save it on iPhone, use Share → Save to Files after downloading.",
    },
    items: buildItems({
      "flow-jotajotape": {
        title: "Flow",
        subtitle: "JotaJotaPe",
        description: "Youth and modular furniture from JotaJotaPe's Flow collection.",
        coverAlt: "Cover of the JotaJotaPe Flow furniture catalog",
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
