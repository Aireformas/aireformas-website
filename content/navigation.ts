import type { SiteLocale } from "@/lib/i18n";

type Localized = Record<SiteLocale, string>;

export type HeaderNavLink = {
  href: string;
  label: Localized;
};

export type HeaderNavGroup = {
  label: Localized;
  items: HeaderNavLink[];
};

export type HeaderNavEntry = HeaderNavLink | HeaderNavGroup;

export function isNavGroup(entry: HeaderNavEntry): entry is HeaderNavGroup {
  return "items" in entry;
}

export const headerNav: HeaderNavEntry[] = [
  { href: "/estudio", label: { es: "Estudio", en: "Studio" } },
  {
    label: { es: "Servicios", en: "Services" },
    items: [
      { href: "/interiorismo", label: { es: "Interiorismo", en: "Interiors" } },
      { href: "/reformas", label: { es: "Reformas", en: "Renovation" } },
      { href: "/mobiliario", label: { es: "Mobiliario", en: "Furniture" } },
      { href: "/climate", label: { es: "Climate", en: "Climate" } },
    ],
  },
  { href: "/armarios", label: { es: "Armarios", en: "Wardrobes" } },
  { href: "/cocinas", label: { es: "Cocinas", en: "Kitchens" } },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact" } },
];

export const headerCta: Localized = {
  es: "Hablar de mi proyecto",
  en: "Start a project",
};

export const footerNav: Record<SiteLocale, { label: string; href: string }[]> = {
  es: [
    { label: "Sobre nosotros", href: "/estudio" },
    { label: "Interiorismo", href: "/interiorismo" },
    { label: "Reformas", href: "/reformas" },
    { label: "Mobiliario", href: "/mobiliario" },
    { label: "Armarios", href: "/armarios" },
    { label: "Cocinas", href: "/cocinas" },
    { label: "Climate", href: "/climate" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Contacto", href: "/contacto" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  ],
  en: [
    { label: "About", href: "/estudio" },
    { label: "Interiors", href: "/interiorismo" },
    { label: "Renovation", href: "/reformas" },
    { label: "Furniture", href: "/mobiliario" },
    { label: "Wardrobes", href: "/armarios" },
    { label: "Kitchens", href: "/cocinas" },
    { label: "Climate", href: "/climate" },
    { label: "Projects", href: "/proyectos" },
    { label: "Contact", href: "/contacto" },
    { label: "FAQ", href: "/preguntas-frecuentes" },
  ],
};

export type { SiteLocale };
