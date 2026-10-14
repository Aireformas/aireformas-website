import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { EditorialFeatureGrid } from "@/components/shared/EditorialFeatureGrid";
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
  mobiliarioAdvantages,
  mobiliarioCta,
  mobiliarioEditorial,
  mobiliarioFaq,
  mobiliarioGallery,
  mobiliarioHero,
  mobiliarioMeta,
  mobiliarioProcess,
  mobiliarioProcessSection,
  mobiliarioTypes,
} from "@/content/mobiliario";

export const metadata: Metadata = {
  title: mobiliarioMeta.title,
  description: mobiliarioMeta.description,
  openGraph: {
    title: mobiliarioMeta.title,
    description: mobiliarioMeta.description,
  },
};

export default function MobiliarioPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          mobiliarioFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <PageHero
        label={mobiliarioHero.label}
        title={mobiliarioHero.title}
        description={mobiliarioHero.description}
        image={mobiliarioHero.image}
        cta={{ label: mobiliarioHero.cta, href: "/contacto" }}
      />

      <PhilosophyBandSection
        label={mobiliarioEditorial.label}
        title={mobiliarioEditorial.title}
        paragraphs={mobiliarioEditorial.paragraphs}
        image={mobiliarioEditorial.image}
        headingId="mobiliario-philosophy"
      />

      <EditorialFeatureGrid
        label="SOLUCIONES"
        title="Carpintería para cada estancia"
        items={mobiliarioTypes}
        tone="paper"
      />

      <TopicGridSection
        label="ENFOQUE"
        title="Piezas que pertenecen al espacio"
        items={mobiliarioAdvantages}
        tone="sand"
        borderTop
        footer={
          <PillarCrossLinks>
            Obra e interiorismo en <PillarCrossLink href="/reformas">Reformas</PillarCrossLink> e{" "}
            <PillarCrossLink href="/interiorismo">Interiorismo</PillarCrossLink>. Climatización en{" "}
            <PillarCrossLink href="/climate">Climate</PillarCrossLink>.
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

      <ImageGallery label="GALERÍA" title="Detalle de carpintería" items={mobiliarioGallery} />

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={mobiliarioFaq} />

      <ContactCTA
        label="CONTACTO"
        title={mobiliarioCta.title}
        description={mobiliarioCta.description}
        variant="landing"
      />
    </>
  );
}
