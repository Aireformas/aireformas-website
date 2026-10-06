import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Interiorismo", href: "/interiorismo" },
  { label: "Armarios a medida", href: "/servicios/armarios" },
  { label: "Reformas integrales", href: null, comingSoon: true },
  { label: "Cocinas", href: null, comingSoon: true },
  { label: "Baños", href: null, comingSoon: true },
  { label: "Proyectos", href: null, comingSoon: true },
  { label: "Contacto", href: null, comingSoon: true },
];

export const footerNav: NavItem[] = mainNav;
