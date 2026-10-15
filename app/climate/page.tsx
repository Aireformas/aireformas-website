import type { Metadata } from "next";
import { ClimateHero } from "@/components/climate/ClimateHero";
import { ClimateServices } from "@/components/climate/ClimateServices";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { chrome } from "@/content/chrome";
import { climateCopy } from "@/content/climate";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = climateCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function ClimatePage() {
  const copy = climateCopy[await getLocale()];
  const ui = chrome[await getLocale()];
  const climateHero = copy.hero;
  const climateFaq = copy.faq;
  const climateProcess = copy.process.steps;
  const climateProcessSection = copy.process;
  const climateServices = copy.services.items;
  const climateServicesIntro = copy.services;
  const climateCta = copy.cta;
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          climateFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <ClimateHero
        label={climateHero.label}
        title={climateHero.title}
        headline={climateHero.headline}
        description={climateHero.description}
        support={climateHero.support}
        image={climateHero.image}
        cta={{ label: climateHero.cta, href: "/contacto" }}
        services={climateServices}
      />

      <ClimateServices
        label={climateServicesIntro.label}
        title={climateServicesIntro.title}
        lead={climateServicesIntro.lead}
        items={climateServices}
        footer={
          <PillarCrossLinks>
            {copy.services.crossLead}{" "}
            <PillarCrossLink href="/reformas">{copy.services.reformas}</PillarCrossLink>{" "}
            {copy.services.crossAnd}{" "}
            <PillarCrossLink href="/interiorismo">{copy.services.interiorismo}</PillarCrossLink>
            {copy.services.crossEnd}{" "}
            <PillarCrossLink href="/mobiliario">{copy.services.mobiliario}</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <ProcessGridSection
        label={climateProcessSection.label}
        title={climateProcessSection.title}
        lead={climateProcessSection.lead}
        steps={climateProcess}
        tone="sand"
        borderTop
      />

      <FaqAccordion label={ui.faqLabel} title={ui.faqTitle} items={climateFaq} />

      <ContactCTA
        label={ui.contact}
        title={climateCta.title}
        description={climateCta.description}
        variant="landing"
      />
    </>
  );
}
