import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { PageSection } from "@/components/shared/PageSection";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
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
      <PageHero
        label={contactoHero.label}
        title={contactoHero.title}
        description={contactoHero.description}
        image={contactoHero.image}
        cta={{ label: site.phone, href: site.phoneHref }}
        secondaryCta={{ label: "Enviar email", href: site.emailHref }}
      />

      <PageSection tone="sand" borderTop compact>
        <SectionLabel variant="light">DATOS</SectionLabel>
        <ul className="mt-6 space-y-4 text-body-md text-ink-primary">
          <li>
            <span className="mb-1 block text-label-uppercase text-warm-label">
              Teléfono
            </span>
            <a href={site.phoneHref} className="text-link-editorial">
              {site.phone}
            </a>
          </li>
          <li>
            <span className="mb-1 block text-label-uppercase text-warm-label">
              WhatsApp
            </span>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-link-editorial"
            >
              <WhatsAppIcon branded className="h-4 w-4" />
              {site.phone}
            </a>
          </li>
          <li>
            <span className="mb-1 block text-label-uppercase text-warm-label">
              Email
            </span>
            <a href={site.emailHref} className="text-link-editorial">
              {site.email}
            </a>
          </li>
          <li className="max-w-md font-light text-on-surface-variant">{site.address}</li>
        </ul>
      </PageSection>

      <FaqAccordion label="FAQ" title="Preguntas frecuentes" items={contactoFaq} />

      <ContactCTA
        label={contactoSection.label}
        title={contactoSection.title}
        description={contactoSection.description}
        variant="landing"
      />
    </>
  );
}
