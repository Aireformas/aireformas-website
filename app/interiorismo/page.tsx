import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  editorialBlock,
  interiorismoCta,
  interiorismoGallery,
  interiorismoHero,
  interiorismoMeta,
  interiorismoProcess,
  interiorismoServices,
} from "@/content/interiorismo";

export const metadata: Metadata = {
  title: interiorismoMeta.title,
  description: interiorismoMeta.description,
  openGraph: {
    title: interiorismoMeta.title,
    description: interiorismoMeta.description,
  },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Interiorismo", href: "/interiorismo" },
] as const;

export default function InteriorismoPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[...breadcrumbs]}
        label={interiorismoHero.label}
        title={interiorismoHero.title}
        description={interiorismoHero.description}
        image={interiorismoHero.image}
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <section className="section-y border-t border-ink/5 bg-paper-warm text-ink">
        <Container>
          <SectionLabel variant="light">ENFOQUE</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-8 max-w-3xl">
              {editorialBlock.title}
            </h2>
          </InView>
          <div className="mt-8 grid max-w-4xl gap-5 text-sm leading-relaxed text-ink/70 md:text-base">
            {editorialBlock.paragraphs.map((paragraph) => (
              <InView key={paragraph.slice(0, 24)}>
                <p>{paragraph}</p>
              </InView>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">SERVICIOS</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-8 max-w-2xl">
              Interiorismo integral
            </h2>
          </InView>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {interiorismoServices.map((service, index) => (
              <InView
                key={service.title}
                staggerIndex={index}
                as="li"
                className="list-none border-t border-ink/8 pt-6"
              >
                <h3 className="heading-editorial text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </InView>
            ))}
          </ul>
          <PillarCrossLinks>
            Reforma y obra en <PillarCrossLink href="/reformas">Reformas</PillarCrossLink>
            . Carpintería en{" "}
            <PillarCrossLink href="/mobiliario">Mobiliario</PillarCrossLink>. Climatización en{" "}
            <PillarCrossLink href="/climate">Climate</PillarCrossLink>.
          </PillarCrossLinks>
        </Container>
      </section>

      <ImageGallery
        label="PROYECTOS"
        title="Antes y después · selección reciente"
        items={interiorismoGallery}
        variant="light"
      />

      <ProcessSteps
        label="PROCESO"
        title="Cómo desarrollamos tu interior"
        steps={interiorismoProcess}
        variant="light"
      />

      <ContactCTA
        label="CONTACTO"
        title={interiorismoCta.title}
        description={interiorismoCta.description}
        variant="light"
      />
    </>
  );
}
