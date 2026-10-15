import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PageHero } from "@/components/shared/PageHero";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { chrome } from "@/content/chrome";
import { reformasCopy } from "@/content/reformas";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = reformasCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function ReformasPage() {
  const copy = reformasCopy[await getLocale()];
  const ui = chrome[await getLocale()];
  const reformasEditorial = copy.editorial;
  const reformasFaq = copy.faq;
  const reformasGallery = copy.gallery.items;
  const reformasHero = copy.hero;
  const reformasProcess = copy.process.steps;
  const reformasProcessSection = copy.process;
  const reformasScope = copy.scope.items;
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          reformasFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <PageHero
        label={reformasHero.label}
        title={reformasHero.title}
        description={reformasHero.description}
        image={reformasHero.image}
        cta={{ label: reformasHero.cta, href: "/contacto" }}
      />

      <PhilosophyBandSection
        label={reformasEditorial.label}
        title={reformasEditorial.title}
        paragraphs={reformasEditorial.paragraphs}
        image={reformasEditorial.image}
        headingId="reformas-philosophy"
      />

      <TopicGridSection
        label={copy.scope.label}
        title={copy.scope.title}
        items={reformasScope}
        tone="cream"
        borderTop
        columns={3}
        footer={
          <PillarCrossLinks>
            {copy.scope.crossLead}{" "}
            <PillarCrossLink href="/climate">{copy.scope.climate}</PillarCrossLink>
            {copy.scope.crossMid} <PillarCrossLink href="/mobiliario">{copy.scope.mobiliario}</PillarCrossLink>{" "}
            {copy.scope.crossAnd}{" "}
            <PillarCrossLink href="/interiorismo">{copy.scope.interiorismo}</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <ProcessGridSection
        label={reformasProcessSection.label}
        title={reformasProcessSection.title}
        lead={reformasProcessSection.lead}
        steps={reformasProcess}
        tone="sand"
        borderTop
      />

      <ImageGallery label={copy.gallery.label} title={copy.gallery.title} items={reformasGallery} />

      <FaqAccordion label={ui.faqLabel} title={ui.faqTitle} items={reformasFaq} />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
