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
  {
    label: { es: "Servicios", en: "Services" },
    items: [
      { href: "/interiorismo", label: { es: "Interiorismo", en: "Interiors" } },
      { href: "/reformas", label: { es: "Reformas", en: "Renovation" } },
      { href: "/mobiliario", label: { es: "Mobiliario", en: "Furniture" } },
      { href: "/climate", label: { es: "Climate", en: "Climate" } },
    ],
  },
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact" } },
];

export const headerCta: Localized = {
  es: "Hablar de mi proyecto",
  en: "Start a project",
};

export const footerNav: Record<SiteLocale, { label: string; href: string }[]> = {
  es: [
    { label: "Proyectos", href: "/proyectos" },
    { label: "Interiorismo", href: "/interiorismo" },
    { label: "Reformas", href: "/reformas" },
    { label: "Mobiliario", href: "/mobiliario" },
    { label: "Climate", href: "/climate" },
    { label: "Estudio", href: "/estudio" },
    { label: "Contacto", href: "/contacto" },
  ],
  en: [
    { label: "Projects", href: "/proyectos" },
    { label: "Interiors", href: "/interiorismo" },
    { label: "Renovation", href: "/reformas" },
    { label: "Furniture", href: "/mobiliario" },
    { label: "Climate", href: "/climate" },
    { label: "Studio", href: "/estudio" },
    { label: "Contact", href: "/contacto" },
  ],
};

export type { SiteLocale };
