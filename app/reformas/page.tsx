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
import {
  reformasCta,
  reformasEditorial,
  reformasFaq,
  reformasGallery,
  reformasHero,
  reformasMeta,
  reformasProcess,
  reformasProcessSection,
  reformasScope,
} from "@/content/reformas";

export const metadata: Metadata = {
  title: reformasMeta.title,
  description: reformasMeta.description,
  openGraph: {
    title: reformasMeta.title,
    description: reformasMeta.description,
  },
};

export default function ReformasPage() {
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
        label="ALCANCE"
        title="Obra coordinada con el diseño"
        items={reformasScope}
        tone="cream"
        borderTop
        columns={3}
        footer={
          <PillarCrossLinks>
            Climatización e instalaciones técnicas en{" "}
            <PillarCrossLink href="/climate">AIREFORMAS Climate</PillarCrossLink>. Mobiliario e
            interiorismo en <PillarCrossLink href="/mobiliario">Mobiliario</PillarCrossLink> e{" "}
            <PillarCrossLink href="/interiorismo">Interiorismo</PillarCrossLink>.
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

      <ImageGallery label="RESULTADO" title="Espacios terminados" items={reformasGallery} />

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={reformasFaq} />

      <ContactCTA
        label="CONTACTO"
        title={reformasCta.title}
        description={reformasCta.description}
        variant="landing"
      />
    </>
  );
}
