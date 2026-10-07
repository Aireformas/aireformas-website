import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  reformasCta,
  reformasFaq,
  reformasGallery,
  reformasHero,
  reformasMeta,
  reformasProcess,
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

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Reformas", href: "/reformas" },
] as const;

export default function ReformasPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          reformasFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <PageHero
        breadcrumbs={[...breadcrumbs]}
        label={reformasHero.label}
        title={reformasHero.title}
        description={reformasHero.description}
        image={reformasHero.image}
        cta={{ label: reformasHero.cta, href: "/contacto" }}
      />

      <section className="section-y bg-paper-warm text-ink">
        <Container>
          <SectionLabel variant="light">ALCANCE</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-8 max-w-3xl">
              Obra coordinada con el diseño
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reformasScope.map((item, index) => (
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
            Climatización e instalaciones técnicas en{" "}
            <PillarCrossLink href="/climate">AIREFORMAS Climate</PillarCrossLink>. Mobiliario e
            interiorismo en <PillarCrossLink href="/mobiliario">Mobiliario</PillarCrossLink> e{" "}
            <PillarCrossLink href="/interiorismo">Interiorismo</PillarCrossLink>.
          </PillarCrossLinks>
        </Container>
      </section>

      <ProcessSteps
        label="PROCESO"
        title="Del espacio vacío a la casa terminada"
        steps={reformasProcess}
        variant="light"
      />

      <ImageGallery
        label="RESULTADO"
        title="Espacios terminados"
        items={reformasGallery}
        variant="light"
      />

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={reformasFaq} />

      <ContactCTA
        label="CONTACTO"
        title={reformasCta.title}
        description={reformasCta.description}
        variant="light"
      />
    </>
  );
}
