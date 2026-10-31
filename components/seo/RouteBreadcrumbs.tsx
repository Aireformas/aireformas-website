"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/components/locale/LocaleProvider";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import type { SiteLocale } from "@/lib/i18n";

const labels: Record<SiteLocale, Record<string, string>> = {
  es: {
    "/estudio": "Estudio",
    "/interiorismo": "Interiorismo",
    "/reformas": "Reformas",
    "/mobiliario": "Mobiliario",
    "/armarios": "Armarios",
    "/cocinas": "Cocinas",
    "/climate": "Climate",
    "/proyectos": "Proyectos",
    "/contacto": "Contacto",
    "/preguntas-frecuentes": "Preguntas frecuentes",
    "/legal/privacidad": "Política de privacidad",
    "/legal/terminos": "Términos y condiciones",
    "/legal/cookies": "Política de cookies",
  },
  en: {
    "/estudio": "Studio",
    "/interiorismo": "Interiors",
    "/reformas": "Renovation",
    "/mobiliario": "Furniture",
    "/armarios": "Wardrobes",
    "/cocinas": "Kitchens",
    "/climate": "Climate",
    "/proyectos": "Projects",
    "/contacto": "Contact",
    "/preguntas-frecuentes": "FAQ",
    "/legal/privacidad": "Privacy policy",
    "/legal/terminos": "Terms and conditions",
    "/legal/cookies": "Cookie policy",
  },
};

export function RouteBreadcrumbs() {
  const pathname = usePathname();
  const locale = useLocale();
  const label = labels[locale][pathname];
  if (!label) return null;

  return (
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "aireformas", href: "/" },
        { name: label, href: pathname },
      ])}
    />
  );
}
