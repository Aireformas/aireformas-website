import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { SplitHero } from "@/components/shared/SplitHero";
import { contactoCopy } from "@/content/contacto";
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
  const copy = contactoCopy[await getLocale()];

  return (
    <>
      <SplitHero
        label={copy.hero.label}
        title={copy.hero.title}
        headline={copy.hero.headline}
        description={copy.hero.description}
        support={copy.hero.support}
        image={copy.hero.image}
        cta={{ label: copy.hero.cta, href: "#escribir" }}
        chips={copy.hero.chips}
      />

      <ContactCTA
        id="escribir"
        label={copy.section.label}
        title={copy.section.title}
        description={copy.section.description}
        variant="landing"
      />
    </>
  );
}
