import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { SplitHero } from "@/components/shared/SplitHero";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { chrome } from "@/content/chrome";
import { reformasCopy } from "@/content/reformas";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = reformasCopy[await getLocale()].meta;
  return pageMetadata("/reformas", meta);
}

export default async function ReformasPage() {
  const copy = reformasCopy[await getLocale()];
  const ui = chrome[await getLocale()];

  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          copy.faq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <SplitHero
        label={copy.hero.label}
        title={copy.hero.title}
        headline={copy.hero.headline}
        description={copy.hero.description}
        support={copy.hero.support}
        image={copy.hero.image}
        cta={{ label: copy.hero.cta, href: "/contacto" }}
        chips={copy.hero.chips.map((chip) => ({
          ...chip,
          href: `#${chip.id}`,
        }))}
      />

      <PhilosophyBandSection
        label={copy.editorial.label}
        title={copy.editorial.title}
        paragraphs={copy.editorial.paragraphs}
        image={copy.editorial.image}
        headingId="reformas-philosophy"
      />

      <TopicGridSection
        label={copy.scope.label}
        title={copy.scope.title}
        items={copy.scope.items}
        tone="cream"
        borderTop
        columns={3}
        footer={
          <PillarCrossLinks>
            {copy.scope.crossLead}{" "}
            <PillarCrossLink href="/climate">{copy.scope.climate}</PillarCrossLink>
            {copy.scope.crossMid}{" "}
            <PillarCrossLink href="/mobiliario">{copy.scope.mobiliario}</PillarCrossLink>{" "}
            {copy.scope.crossAnd}{" "}
            <PillarCrossLink href="/interiorismo">{copy.scope.interiorismo}</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <TopicGridSection
        label={copy.professional.label}
        title={copy.professional.title}
        lead={copy.professional.lead}
        items={copy.professional.items}
        tone="sand"
        borderTop
        columns={2}
        footer={
          <PillarCrossLinks>
            {copy.professional.crossLead}{" "}
            <PillarCrossLink href="/mobiliario">
              {copy.professional.mobiliario}
            </PillarCrossLink>
            {copy.professional.crossMid}{" "}
            <PillarCrossLink href="/climate">{copy.professional.climate}</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <ProcessGridSection
        label={copy.process.label}
        title={copy.process.title}
        lead={copy.process.lead}
        steps={copy.process.steps}
        tone="cream"
        borderTop
      />

      <ImageGallery label={copy.gallery.label} title={copy.gallery.title} items={copy.gallery.items} />

      <FaqAccordion label={ui.faqLabel} title={ui.faqTitle} items={copy.faq} />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
