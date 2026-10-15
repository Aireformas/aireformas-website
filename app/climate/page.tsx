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
import {
  climateCta,
  climateFaq,
  climateHero,
  climateMeta,
  climateProcess,
  climateProcessSection,
  climateServices,
  climateServicesIntro,
} from "@/content/climate";

export const metadata: Metadata = {
  title: climateMeta.title,
  description: climateMeta.description,
  openGraph: {
    title: climateMeta.title,
    description: climateMeta.description,
  },
};

export default function ClimatePage() {
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
            Reforma e interiorismo en <PillarCrossLink href="/reformas">Reformas</PillarCrossLink> e{" "}
            <PillarCrossLink href="/interiorismo">Interiorismo</PillarCrossLink>. Mobiliario en{" "}
            <PillarCrossLink href="/mobiliario">Mobiliario</PillarCrossLink>.
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

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={climateFaq} />

      <ContactCTA
        label="CONTACTO"
        title={climateCta.title}
        description={climateCta.description}
        variant="landing"
      />
    </>
  );
}
