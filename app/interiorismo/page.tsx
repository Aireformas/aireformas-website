import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { SplitHero } from "@/components/shared/SplitHero";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { chrome } from "@/content/chrome";
import { interiorismoCopy } from "@/content/interiorismo";
import { getLocale } from "@/lib/locale.server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const meta = interiorismoCopy[await getLocale()].meta;
  return pageMetadata("/interiorismo", meta);
}

export default async function InteriorismoPage() {
  const copy = interiorismoCopy[await getLocale()];
  const ui = chrome[await getLocale()];

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
        chips={copy.hero.chips.map((chip) => ({
          ...chip,
          href: `#${chip.id}`,
        }))}
      />

      <PhilosophyBandSection
        label={copy.editorial.label}
        title={copy.editorial.title}
        paragraphs={copy.editorial.paragraphs}
        image={copy.editorial.image}
        headingId="interiorismo-enfoque"
      />

      <TopicGridSection
        label={copy.services.label}
        title={copy.services.title}
        items={copy.services.items}
        tone="cream"
        footer={
          <PillarCrossLinks>
            {copy.services.crossLead}{" "}
            <PillarCrossLink href="/reformas">{copy.services.reformas}</PillarCrossLink>
            {copy.services.crossMid}{" "}
            <PillarCrossLink href="/mobiliario">{copy.services.mobiliario}</PillarCrossLink>
            {copy.services.crossEnd}{" "}
            <PillarCrossLink href="/climate">{copy.services.climate}</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <ImageGallery
        label={copy.gallery.label}
        title={copy.gallery.title}
        items={copy.gallery.items}
      />

      <ProcessGridSection
        label={copy.process.label}
        title={copy.process.title}
        steps={copy.process.steps}
        tone="sand"
        borderTop
      />

      <ContactCTA
        label={ui.contact}
        title={copy.cta.title}
        description={copy.cta.description}
        variant="landing"
        service="interiorismo"
      />
    </>
  );
}
