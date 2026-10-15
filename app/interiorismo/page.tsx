import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import {
  PillarCrossLink,
  PillarCrossLinks,
} from "@/components/shared/PillarCrossLinks";
import { PageSection } from "@/components/shared/PageSection";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { chrome } from "@/content/chrome";
import { interiorismoCopy } from "@/content/interiorismo";
import { getLocale } from "@/lib/locale.server";

export async function generateMetadata(): Promise<Metadata> {
  const meta = interiorismoCopy[await getLocale()].meta;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function InteriorismoPage() {
  const copy = interiorismoCopy[await getLocale()];
  const ui = chrome[await getLocale()];
  const editorialBlock = copy.editorial;
  const interiorismoHero = copy.hero;
  const interiorismoGallery = copy.gallery.items;
  const interiorismoProcess = copy.process.steps;
  const interiorismoServices = copy.services.items;
  return (
    <>
      <PageHero
        label={interiorismoHero.label}
        title={interiorismoHero.title}
        description={interiorismoHero.description}
        image={interiorismoHero.image}
        cta={{ label: ui.talk, href: "/contacto" }}
      />

      <PageSection tone="sand" borderTop>
        <SectionIntro label={editorialBlock.label} title={editorialBlock.title} />
        <div className="grid max-w-4xl gap-5 text-body-md font-light text-on-surface-variant">
          {editorialBlock.paragraphs.map((paragraph) => (
            <InView key={paragraph.slice(0, 24)}>
              <p>{paragraph}</p>
            </InView>
          ))}
        </div>
      </PageSection>

      <TopicGridSection
        label={copy.services.label}
        title={copy.services.title}
        items={interiorismoServices}
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
        items={interiorismoGallery}
      />

      <ProcessGridSection
        label={copy.process.label}
        title={copy.process.title}
        steps={interiorismoProcess}
        tone="sand"
        borderTop
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
