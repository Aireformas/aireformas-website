import type { NavItem } from "@/lib/types";

export type SiteLocale = "es" | "en";

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
  { href: "/proyectos", label: { es: "Proyectos", en: "Projects" } },
  {
    label: { es: "Servicios", en: "Services" },
    items: [
      { href: "/interiorismo", label: { es: "Interiorismo", en: "Interiors" } },
      { href: "/reformas", label: { es: "Reformas", en: "Renovation" } },
      { href: "/mobiliario", label: { es: "Mobiliario", en: "Furniture" } },
      { href: "/climate", label: { es: "Climate", en: "Climate" } },
    ],
  },
  { href: "/estudio", label: { es: "Estudio", en: "Studio" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact" } },
];

export const headerCta: Localized = {
  es: "Hablar de mi proyecto",
  en: "Start a project",
};

export const footerNav: NavItem[] = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Interiorismo", href: "/interiorismo" },
  { label: "Reformas", href: "/reformas" },
  { label: "Mobiliario", href: "/mobiliario" },
  { label: "Climate", href: "/climate" },
  { label: "Estudio", href: "/estudio" },
  { label: "Contacto", href: "/contacto" },
];
