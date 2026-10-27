import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { faqPageJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageIntro } from "@/components/shared/PageIntro";
import { chrome } from "@/content/chrome";
import { faqCopy } from "@/content/faq";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = faqCopy[await getLocale()].meta;
  return pageMetadata("/preguntas-frecuentes", meta);
}

export default async function PreguntasFrecuentesPage() {
  const locale = await getLocale();
  const copy = faqCopy[locale];
  const ui = chrome[locale];

  return (
    <>
      <JsonLd
        data={faqPageJsonLd(
          copy.items.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />
      <div className="bg-cream-base">
        <PageIntro
          label={copy.hero.label}
          title={copy.hero.title}
          description={copy.hero.description}
          cta={{ label: ui.talk, href: "/contacto" }}
        />
      </div>

      <FaqAccordion items={copy.items} hideIntro />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
