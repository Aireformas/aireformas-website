import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { EditorialFeatureGrid } from "@/components/shared/EditorialFeatureGrid";
import { EditorialPhilosophySection } from "@/components/shared/EditorialPhilosophySection";
import { EditorialProcessSection } from "@/components/shared/EditorialProcessSection";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PageHero } from "@/components/shared/PageHero";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
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

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Mobiliario", href: "/mobiliario" },
] as const;

export default function MobiliarioPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          mobiliarioFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <PageHero
        breadcrumbs={[...breadcrumbs]}
        label={mobiliarioHero.label}
        title={mobiliarioHero.title}
        description={mobiliarioHero.description}
        image={mobiliarioHero.image}
        cta={{ label: mobiliarioHero.cta, href: "/contacto" }}
      />

      <EditorialPhilosophySection
        label={mobiliarioEditorial.label}
        verticalLabel={mobiliarioEditorial.verticalLabel}
        title={mobiliarioEditorial.title}
        paragraphs={mobiliarioEditorial.paragraphs}
        image={mobiliarioEditorial.image}
        tone="warm"
      />

      <EditorialFeatureGrid
        label="SOLUCIONES"
        title="Carpintería para cada estancia"
        items={mobiliarioTypes}
        tone="paper"
      />

      <section className="section-y border-t border-ink/5 bg-paper-warm text-ink">
        <Container>
          <SectionLabel variant="light">ENFOQUE</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-8 max-w-2xl">
              Piezas que pertenecen al espacio
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mobiliarioAdvantages.map((item, index) => (
              <InView key={item.title} staggerIndex={index}>
                <div className="border-t border-ink/8 pt-6">
                  <h3 className="heading-editorial text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </div>
              </InView>
            ))}
          </div>
          <PillarCrossLinks>
            Obra e interiorismo en <PillarCrossLink href="/reformas">Reformas</PillarCrossLink> e{" "}
            <PillarCrossLink href="/interiorismo">Interiorismo</PillarCrossLink>. Climatización en{" "}
            <PillarCrossLink href="/climate">Climate</PillarCrossLink>.
          </PillarCrossLinks>
        </Container>
      </section>

      <EditorialProcessSection
        label={mobiliarioProcessSection.label}
        title={mobiliarioProcessSection.title}
        lead={mobiliarioProcessSection.lead}
        steps={mobiliarioProcess}
      />

      <ImageGallery
        label="GALERÍA"
        title="Detalle de carpintería"
        items={mobiliarioGallery}
        variant="light"
      />

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={mobiliarioFaq} />

      <ContactCTA
        label="CONTACTO"
        title={mobiliarioCta.title}
        description={mobiliarioCta.description}
        variant="light"
      />
    </>
  );
}
