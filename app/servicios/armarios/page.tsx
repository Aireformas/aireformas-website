import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  armariosAdvantages,
  armariosCta,
  armariosFaq,
  armariosGallery,
  armariosHero,
  armariosMeta,
  armariosProcess,
  wardrobeTypes,
} from "@/content/armarios";

export const metadata: Metadata = {
  title: armariosMeta.title,
  description: armariosMeta.description,
  openGraph: {
    title: armariosMeta.title,
    description: armariosMeta.description,
  },
};

export default function ArmariosPage() {
  return (
    <>
      <PageHero
        label={armariosHero.label}
        title={armariosHero.title}
        description={armariosHero.description}
        image={armariosHero.image}
        cta={{ label: armariosHero.cta, href: "#contacto" }}
      />

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">TIPOS</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-3xl">
              Soluciones para cada estancia
            </h2>
          </InView>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {wardrobeTypes.map((type, index) => (
              <InView key={type.title} staggerIndex={index}>
                <article className="overflow-hidden rounded-[var(--radius-card)] border border-ink/8 bg-paper">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={type.image.src}
                      alt={type.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl tracking-tight">
                      {type.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {type.description}
                    </p>
                  </div>
                </article>
              </InView>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y border-t border-ink/5 bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">VENTAJAS</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-2xl">
              Calidad en cada detalle
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {armariosAdvantages.map((item, index) => (
              <InView key={item.title} staggerIndex={index}>
                <div className="rounded-[var(--radius-card)] border border-ink/8 bg-paper p-6">
                  <h3 className="font-serif text-xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps
        label="PROCESO"
        title="De la medición a la instalación"
        steps={armariosProcess}
        variant="light"
      />

      <ImageGallery
        label="GALERÍA"
        title="Trabajos recientes"
        items={armariosGallery}
        variant="light"
      />

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={armariosFaq} />

      <ContactCTA
        label="PRESUPUESTO"
        title={armariosCta.title}
        description={armariosCta.description}
        variant="light"
      />
    </>
  );
}
