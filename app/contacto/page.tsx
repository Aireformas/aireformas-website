import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  contactoFaq,
  contactoHero,
  contactoMeta,
  contactoSection,
} from "@/content/contacto";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: contactoMeta.title,
  description: contactoMeta.description,
  openGraph: {
    title: contactoMeta.title,
    description: contactoMeta.description,
  },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Contacto", href: "/contacto" },
] as const;

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          contactoFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <PageHero
        breadcrumbs={[...breadcrumbs]}
        label={contactoHero.label}
        title={contactoHero.title}
        description={contactoHero.description}
        image={contactoHero.image}
        cta={{ label: site.phone, href: site.phoneHref }}
        secondaryCta={{ label: "Enviar email", href: site.emailHref }}
      />

      <section className="border-b border-ink/5 bg-paper-warm py-12 text-ink md:py-14">
        <Container>
          <SectionLabel variant="light">DATOS</SectionLabel>
          <ul className="mt-8 space-y-3 text-sm text-ink/80 md:text-base">
            <li>
              <a href={site.phoneHref} className="text-link-editorial">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="text-link-editorial">
                {site.email}
              </a>
            </li>
            <li className="max-w-md leading-relaxed text-ink/70">{site.address}</li>
          </ul>
        </Container>
      </section>

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={contactoFaq} />

      <ContactCTA
        label={contactoSection.label}
        title={contactoSection.title}
        description={contactoSection.description}
        variant="light"
      />
    </>
  );
}
