import { site, siteCopy } from "@/content/site";
import type { SiteLocale } from "@/lib/i18n";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function organizationJsonLd(locale: SiteLocale): Record<string, unknown> {
  const copy = siteCopy[locale];
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: copy.entityDescription,
    telephone: site.phone,
    email: site.email,
    logo: `${site.url}${site.logo.src}`,
    areaServed: site.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    knowsAbout: copy.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressCountry: site.addressCountry,
    },
  };
}

export function webSiteJsonLd(locale: SiteLocale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: siteCopy[locale].tagline,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: locale === "en" ? "en-GB" : "es-ES",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${site.url}${item.href}`,
    })),
  };
}

export function faqPageJsonLd(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
