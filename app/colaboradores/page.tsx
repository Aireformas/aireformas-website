import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { SplitHero } from "@/components/shared/SplitHero";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { collaboratorsCopy } from "@/content/collaborators";
import { chrome } from "@/content/chrome";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = collaboratorsCopy[await getLocale()].meta;
  return pageMetadata("/colaboradores", meta);
}

export default async function ColaboradoresPage() {
  const locale = await getLocale();
  const copy = collaboratorsCopy[locale];
  const ui = chrome[locale];

  return (
    <>
      <SplitHero
        label={copy.hero.label}
        title={copy.hero.title}
        headline={copy.hero.headline}
        description={copy.hero.description}
        support={copy.hero.support}
        image={copy.hero.image}
        cta={{ label: copy.hero.cta, href: "/contacto" }}
      />

      <TopicGridSection
        label={copy.partners.label}
        title={copy.partners.title}
        lead={copy.partners.lead}
        items={copy.items.map((partner) => ({
          id: partner.name,
          title: partner.name,
          logo: partner.logo,
          description: `${partner.role}. ${partner.description}`,
          href: partner.href,
          linkLabel: partner.visitLabel,
          external: true,
        }))}
        tone="sand"
        borderTop
        columns={2}
      />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
