import { site } from "@/content/site";

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

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.entityDescription,
    telephone: site.phone,
    email: site.email,
    logo: `${site.url}${site.logo.src}`,
    areaServed: site.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    knowsAbout: [...site.knowsAbout],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressCountry: site.addressCountry,
    },
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.tagline,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "es-ES",
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
