import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
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

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          contactoFaq.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Contacto", href: "/contacto" },
        ]}
      />
      <section className="bg-paper pb-6 pt-4 text-ink">
        <Container>
          <SectionLabel variant="light">{contactoHero.label}</SectionLabel>
          <h1 className="heading-display text-title-page mt-8 max-w-3xl">
            {contactoHero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            {contactoHero.description}
          </p>
          <ul className="mt-8 space-y-2 text-sm text-ink/80">
            <li>
              <a href={site.phoneHref} className="hover:underline">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
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
