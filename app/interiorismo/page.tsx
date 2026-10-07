import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Interiorismo", href: "/interiorismo" },
        ]}
      />
      <PageHero
        layout="editorial"
        label={interiorismoHero.label}
        title={interiorismoHero.title}
        description={interiorismoHero.description}
        image={interiorismoHero.image}
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
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
                className="list-none border-t border-ink/8 pt-6"
              >
                <h3 className="heading-editorial text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </InView>
            ))}
          </ul>
          <p className="mt-10 text-sm text-ink/60">
            Reforma y obra en{" "}
            <Link href="/reformas" className="underline hover:text-ink">
              Reformas
            </Link>
            . Carpintería en{" "}
            <Link href="/mobiliario" className="underline hover:text-ink">
              Mobiliario
            </Link>
            . Climatización en{" "}
            <Link href="/climate" className="underline hover:text-ink">
              Climate
            </Link>
            .
          </p>
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
