import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { DistributionShowcase } from "@/components/shared/DistributionShowcase";
import { EditorialFeatureGrid } from "@/components/shared/EditorialFeatureGrid";
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
import { mobiliarioCopy } from "@/content/mobiliario";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = mobiliarioCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function MobiliarioPage() {
  const copy = mobiliarioCopy[await getLocale()];
  const ui = chrome[await getLocale()];
  const mobiliarioAdvantages = copy.approach.items;
  const mobiliarioEditorial = copy.editorial;
  const mobiliarioFaq = copy.faq;
  const mobiliarioGallery = copy.gallery.items;
  const mobiliarioHero = copy.hero;
  const mobiliarioProcess = copy.process.steps;
  const mobiliarioProcessSection = copy.process;
  const mobiliarioTypes = copy.solutions.items;
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          mobiliarioFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <SplitHero
        label={mobiliarioHero.label}
        title={mobiliarioHero.title}
        headline={mobiliarioHero.headline}
        description={mobiliarioHero.description}
        support={mobiliarioHero.support}
        image={mobiliarioHero.image}
        cta={{ label: mobiliarioHero.cta, href: "/contacto" }}
        chips={mobiliarioHero.chips}
      />

      <PhilosophyBandSection
        label={mobiliarioEditorial.label}
        title={mobiliarioEditorial.title}
        paragraphs={mobiliarioEditorial.paragraphs}
        image={mobiliarioEditorial.image}
        headingId="mobiliario-philosophy"
      />

      <EditorialFeatureGrid
        label={copy.solutions.label}
        title={copy.solutions.title}
        items={mobiliarioTypes}
        tone="paper"
      />

      <DistributionShowcase
        label={copy.distributions.label}
        title={copy.distributions.title}
        lead={copy.distributions.lead}
        hint={copy.distributions.hint}
        items={copy.distributions.items}
        tone="warm"
      />

      <TopicGridSection
        label={copy.approach.label}
        title={copy.approach.title}
        items={mobiliarioAdvantages}
        tone="sand"
        borderTop
        footer={
          <PillarCrossLinks>
            {copy.approach.crossLead}{" "}
            <PillarCrossLink href="/reformas">{copy.approach.reformas}</PillarCrossLink>{" "}
            {copy.approach.crossAnd}{" "}
            <PillarCrossLink href="/interiorismo">{copy.approach.interiorismo}</PillarCrossLink>
            {copy.approach.crossEnd}{" "}
            <PillarCrossLink href="/climate">{copy.approach.climate}</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <ProcessGridSection
        label={mobiliarioProcessSection.label}
        title={mobiliarioProcessSection.title}
        lead={mobiliarioProcessSection.lead}
        steps={mobiliarioProcess}
        tone="cream"
        borderTop
      />

      <ImageGallery label={copy.gallery.label} title={copy.gallery.title} items={mobiliarioGallery} />

      <FaqAccordion label={ui.faqLabel} title={ui.faqTitle} items={mobiliarioFaq} />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
