import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { EditorialFeatureGrid } from "@/components/shared/EditorialFeatureGrid";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import { ServiceAreaSection } from "@/components/shared/ServiceAreaSection";
import { SplitHero } from "@/components/shared/SplitHero";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { chrome } from "@/content/chrome";
import { estudioCopy } from "@/content/estudio";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = estudioCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function EstudioPage() {
  const locale = await getLocale();
  const copy = estudioCopy[locale];
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
        chips={copy.hero.chips}
      />

      <PhilosophyBandSection
        label={copy.editorial.label}
        title={copy.editorial.title}
        paragraphs={copy.editorial.paragraphs}
        image={copy.editorial.image}
        headingId="estudio-manifiesto"
      />

      <TopicGridSection
        label={copy.principles.label}
        title={copy.principles.title}
        items={copy.principles.items}
        tone="cream"
        columns={3}
        borderTop
      />

      <EditorialFeatureGrid
        label={copy.scopes.label}
        title={copy.scopes.title}
        items={copy.scopes.items}
        tone="warm"
      />

      <ServiceAreaSection
        label={copy.zone.label}
        title={copy.zone.title}
        lead={copy.zone.lead}
        highlight={copy.zone.highlight}
        groups={copy.zone.groups}
      />

      <ProcessGridSection
        label={copy.process.label}
        title={copy.process.title}
        steps={copy.process.steps}
        tone="sand"
        borderTop
      />

      <TestimonialsSection testimonials={copy.testimonials} />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
      />
    </>
  );
}
