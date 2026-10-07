import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  mobiliarioAdvantages,
  mobiliarioCta,
  mobiliarioFaq,
  mobiliarioGallery,
  mobiliarioHero,
  mobiliarioMeta,
  mobiliarioProcess,
  mobiliarioTypes,
} from "@/content/mobiliario";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: mobiliarioMeta.title,
  description: mobiliarioMeta.description,
  openGraph: {
    title: mobiliarioMeta.title,
    description: mobiliarioMeta.description,
  },
};

export default function MobiliarioPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          mobiliarioFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Mobiliario", href: "/mobiliario" },
        ]}
      />
      <PageHero
        label={mobiliarioHero.label}
        title={mobiliarioHero.title}
        description={mobiliarioHero.description}
        image={mobiliarioHero.image}
        cta={{ label: mobiliarioHero.cta, href: "/contacto" }}
      />

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">SOLUCIONES</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-3xl">
              Carpintería para cada estancia
            </h2>
          </InView>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {mobiliarioTypes.map((type, index) => (
              <InView key={type.title} staggerIndex={index}>
                <article>
                  <div className="image-editorial relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={type.image.src}
                      alt={type.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="image-editorial-target object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="heading-editorial text-2xl">
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
          <SectionLabel variant="light">ENFOQUE</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-6 max-w-2xl">
              Piezas que pertenecen al espacio
            </h2>
          </InView>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mobiliarioAdvantages.map((item, index) => (
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
        title="De la medición a la instalación"
        steps={mobiliarioProcess}
        variant="light"
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
