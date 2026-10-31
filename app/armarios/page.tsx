import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import {
  faqPageJsonLd,
  JsonLd,
  servicePageJsonLd,
} from "@/components/seo/JsonLd";
import { CatalogFilter } from "@/components/shared/CatalogFilter";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import { SplitHero } from "@/components/shared/SplitHero";
import { armariosCopy } from "@/content/armarios";
import { chrome } from "@/content/chrome";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = armariosCopy[await getLocale()].meta;
  return pageMetadata("/armarios", meta);
}

export default async function ArmariosPage() {
  const locale = await getLocale();
  const copy = armariosCopy[locale];
  const ui = chrome[locale];

  return (
    <>
      <JsonLd
        data={[
          servicePageJsonLd({
            name: locale === "es" ? "Armarios a medida" : "Bespoke wardrobes",
            description: copy.meta.description,
            path: "/armarios",
          }),
          faqPageJsonLd(
            copy.faq.map((f) => ({ question: f.question, answer: f.answer })),
          ),
        ]}
      />
      <SplitHero
        label={copy.hero.label}
        title={copy.hero.title}
        headline={copy.hero.headline}
        description={copy.hero.description}
        support={copy.hero.support}
        image={copy.hero.image}
        cta={{ label: copy.hero.cta, href: "/contacto" }}
        secondaryCta={{
          label: locale === "es" ? "Ver cocinas" : "See kitchens",
          href: "/cocinas",
        }}
        chips={copy.hero.chips}
      />

      <CatalogFilter
        label={copy.catalog.label}
        title={copy.catalog.title}
        panels={copy.catalog.panels}
        finishes={copy.catalog.finishes}
      />

      <ProcessGridSection
        label={copy.process.label}
        title={copy.process.title}
        lead={copy.process.lead}
        steps={copy.process.steps}
        tone="sand"
        borderTop
        layout="path"
      />

      <FaqAccordion label={ui.faqLabel} title={ui.faqTitle} items={copy.faq} />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
        service="armarios"
      />
    </>
  );
}
