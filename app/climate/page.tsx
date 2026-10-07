import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { EditorialComfortSection } from "@/components/shared/EditorialComfortSection";
import { EditorialProcessSection } from "@/components/shared/EditorialProcessSection";
import { PageHero } from "@/components/shared/PageHero";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
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

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Climate", href: "/climate" },
] as const;

export default function ClimatePage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          climateFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <PageHero
        breadcrumbs={[...breadcrumbs]}
        label={climateHero.label}
        title={climateHero.title}
        description={climateHero.description}
        image={climateHero.image}
        cta={{ label: climateHero.cta, href: "/contacto" }}
      />

      <EditorialComfortSection
        label="COMFORT"
        temperature={climateComfort.temperature}
        title={climateComfort.headline}
        subline={climateComfort.subline}
        tags={climateComfort.tags}
        image={climateComfort.image}
        link={{ label: "Hablar de mi proyecto", href: "/contacto" }}
        tone="warm"
      />

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">SERVICIOS</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-8 max-w-3xl">
              Ingeniería integrada en el proyecto
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {climateServices.map((item, index) => (
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
            Reforma e interiorismo en <PillarCrossLink href="/reformas">Reformas</PillarCrossLink> e{" "}
            <PillarCrossLink href="/interiorismo">Interiorismo</PillarCrossLink>. Mobiliario en{" "}
            <PillarCrossLink href="/mobiliario">Mobiliario</PillarCrossLink>.
          </PillarCrossLinks>
        </Container>
      </section>

      <EditorialProcessSection
        label={climateProcessSection.label}
        title={climateProcessSection.title}
        lead={climateProcessSection.lead}
        steps={climateProcess}
        tone="warm"
      />

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={climateFaq} />

      <ContactCTA
        label="CONTACTO"
        title={climateCta.title}
        description={climateCta.description}
        variant="light"
      />
    </>
  );
}
