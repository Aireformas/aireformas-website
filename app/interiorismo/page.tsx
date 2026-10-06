import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
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

export default function InteriorismoPage() {
  return (
    <>
      <PageHero
        layout="editorial"
        label={interiorismoHero.label}
        title={interiorismoHero.title}
        description={interiorismoHero.description}
        image={interiorismoHero.image}
        cta={{ label: "Contactar", href: "#contacto" }}
      />

      <section className="section-y border-t border-ink/5 bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">ENFOQUE</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-3xl">
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
            <h2 className="heading-display text-title-section mt-6 max-w-2xl">
              Interiorismo integral
            </h2>
          </InView>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {interiorismoServices.map((service, index) => (
              <InView
                key={service.title}
                staggerIndex={index}
                as="li"
                className="list-none rounded-[var(--radius-card)] border border-ink/8 bg-paper p-6"
              >
                <h3 className="font-serif text-2xl tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </InView>
            ))}
          </ul>
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
