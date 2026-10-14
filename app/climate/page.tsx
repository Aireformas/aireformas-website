import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { ThermalComfortSection } from "@/components/shared/ThermalComfortSection";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import {
  climateComfort,
  climateCta,
  climateFaq,
  climateHero,
  climateMeta,
  climateProcess,
  climateProcessSection,
  climateServices,
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
      <PageHero
        label={climateHero.label}
        title={climateHero.title}
        description={climateHero.description}
        image={climateHero.image}
        cta={{ label: climateHero.cta, href: "/contacto" }}
      />

      <ThermalComfortSection
        label="COMFORT"
        temperature={climateComfort.temperature}
        title={climateComfort.headline}
        subline={climateComfort.subline}
        tags={climateComfort.tags}
        image={climateComfort.image}
        link={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <TopicGridSection
        label="SERVICIOS"
        title="Ingeniería integrada en el proyecto"
        items={climateServices}
        tone="cream"
        borderTop
        columns={3}
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
