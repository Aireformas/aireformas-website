import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { PageHero } from "@/components/shared/PageHero";
import { chrome } from "@/content/chrome";
import { contactoCopy } from "@/content/contacto";
import { site } from "@/content/site";
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

  return (
    <>
      <PageHero
        label={copy.hero.label}
        title={copy.hero.title}
        description={copy.hero.description}
        image={copy.hero.image}
        cta={{ label: site.phone, href: site.phoneHref }}
        secondaryCta={{ label: ui.sendEmail, href: site.emailHref }}
      />

      <ContactCTA
        label={copy.section.label}
        title={copy.section.title}
        description={copy.section.description}
        variant="landing"
      />
    </>
  );
}
