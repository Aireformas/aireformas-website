import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
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

export default function ReformasPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          reformasFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Reformas", href: "/reformas" },
        ]}
      />
      <PageHero
        label={reformasHero.label}
        title={reformasHero.title}
        description={reformasHero.description}
        image={reformasHero.image}
        cta={{ label: reformasHero.cta, href: "/contacto" }}
      />

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">ALCANCE</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-3xl">
              Obra coordinada con el diseño
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reformasScope.map((item, index) => (
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
          <p className="mt-10 text-sm text-ink/60">
            Climatización e instalaciones técnicas en{" "}
            <Link href="/climate" className="underline hover:text-ink">
              AIREFORMAS Climate
            </Link>
            . Mobiliario e interiorismo en{" "}
            <Link href="/mobiliario" className="underline hover:text-ink">
              Mobiliario
            </Link>{" "}
            e{" "}
            <Link href="/interiorismo" className="underline hover:text-ink">
              Interiorismo
            </Link>
            .
          </p>
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
