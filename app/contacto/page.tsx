import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { PageSection } from "@/components/shared/PageSection";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { chrome } from "@/content/chrome";
import { contactoCopy } from "@/content/contacto";
import { site, siteCopy } from "@/content/site";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = contactoCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function ContactoPage() {
  const locale = await getLocale();
  const copy = contactoCopy[locale];
  const ui = chrome[locale];
  const contactoFaq = copy.faq;
  const contactoHero = copy.hero;
  const contactoSection = copy.section;
  const place = siteCopy[locale];
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
        secondaryCta={{ label: ui.sendEmail, href: site.emailHref }}
      />

      <PageSection tone="sand" borderTop compact>
        <SectionLabel variant="light">{ui.data}</SectionLabel>
        <ul className="mt-6 space-y-4 text-body-md text-ink-primary">
          <li>
            <span className="mb-1 block text-label-uppercase text-warm-label">
              {ui.phone}
            </span>
            <a href={site.phoneHref} className="text-link-editorial">
              {site.phone}
            </a>
          </li>
          <li>
            <span className="mb-1 block text-label-uppercase text-warm-label">
              {ui.whatsapp}
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
              {ui.email}
            </span>
            <a href={site.emailHref} className="text-link-editorial">
              {site.email}
            </a>
          </li>
          <li className="max-w-md font-light text-on-surface-variant">{place.address}</li>
        </ul>
      </PageSection>

      <FaqAccordion label={ui.faqLabel} title={ui.faqTitle} items={contactoFaq} />

      <ContactCTA
        label={contactoSection.label}
        title={contactoSection.title}
        description={contactoSection.description}
        variant="landing"
      />
    </>
  );
}
