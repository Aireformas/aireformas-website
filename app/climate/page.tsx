import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  climateComfort,
  climateCta,
  climateFaq,
  climateHero,
  climateMeta,
  climateProcess,
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
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Climate", href: "/climate" },
        ]}
      />
      <PageHero
        label={climateHero.label}
        title={climateHero.title}
        description={climateHero.description}
        image={climateHero.image}
        cta={{ label: climateHero.cta, href: "/contacto" }}
      />

      <section className="section-y bg-stone text-white">
        <Container>
          <SectionLabel variant="dark">COMFORT</SectionLabel>
          <InView>
            <p className="mt-10 font-serif text-6xl tracking-[0.08em] md:text-7xl">
              {climateComfort.temperature}
            </p>
            <h2 className="heading-display text-title-section mt-6 max-w-2xl">
              {climateComfort.headline}
            </h2>
            <p className="mt-4 font-serif text-xl text-white/70">
              {climateComfort.subline}
            </p>
          </InView>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {climateComfort.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">SERVICIOS</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-3xl">
              Ingeniería integrada en el proyecto
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {climateServices.map((item, index) => (
              <InView key={item.title} staggerIndex={index}>
                <div className="border-t border-ink/8 pt-6">
                  <h3 className="heading-editorial text-xl">
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
        title="De la carga térmica al confort"
        steps={climateProcess}
        variant="light"
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
