import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";
import {
  estudioCta,
  estudioHero,
  estudioMeta,
  estudioProcess,
  estudioTestimonials,
  estudioTrustStats,
  estudioValues,
} from "@/content/estudio";

export const metadata: Metadata = {
  title: estudioMeta.title,
  description: estudioMeta.description,
  openGraph: {
    title: estudioMeta.title,
    description: estudioMeta.description,
  },
};

export default function EstudioPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Estudio", href: "/estudio" },
        ]}
      />
      <PageHero
        label={estudioHero.label}
        title={estudioHero.title}
        description={estudioHero.description}
        image={estudioHero.image}
        layout="editorial"
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <section className="section-y border-t border-ink/5 bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">VALORES</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-2xl">
              Lo que guía cada proyecto
            </h2>
          </InView>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {estudioValues.map((value) => (
              <li
                key={value}
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/50"
              >
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-ink/5 bg-paper py-12 text-ink">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {estudioTrustStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl tracking-[0.06em]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ink/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y border-t border-ink/5 bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">ZONA</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-2xl">
              Dónde trabajamos
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
              {site.entityDescription}
            </p>
          </InView>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.areaServed.map((place) => (
              <li
                key={place}
                className="text-sm text-ink/60 after:content-[','] last:after:content-['']"
              >
                {place}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessSteps
        label="PROCESO"
        title="Nuestra forma de trabajar"
        steps={estudioProcess}
        variant="light"
      />

      <TestimonialsSection testimonials={estudioTestimonials} />

      <ContactCTA
        label="CONTACTO"
        title={estudioCta.title}
        description={estudioCta.description}
        variant="light"
      />
    </>
  );
}
