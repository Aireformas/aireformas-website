import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { EditorialFeatureGrid } from "@/components/shared/EditorialFeatureGrid";
import { PageHero } from "@/components/shared/PageHero";
import { PhilosophyBandSection } from "@/components/shared/PhilosophyBandSection";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import { PageSection } from "@/components/shared/PageSection";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { TopicGridSection } from "@/components/shared/TopicGridSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { chrome } from "@/content/chrome";
import { estudioCopy } from "@/content/estudio";
import { site, siteCopy } from "@/content/site";
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
      <PageHero
        label={copy.hero.label}
        title={copy.hero.title}
        description={copy.hero.description}
        image={copy.hero.image}
        cta={{ label: ui.talk, href: "/contacto" }}
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

      <PageSection tone="cream">
        <SectionIntro label={copy.zone.label} title={copy.zone.title} />
        <InView>
          <p className="-mt-6 max-w-2xl text-body-md font-light text-on-surface-variant">
            {siteCopy[locale].entityDescription}
          </p>
        </InView>
        <ul className="mt-8 flex flex-wrap gap-2">
          {site.areaServed.map((place) => (
            <li
              key={place}
              className="text-label-uppercase text-warm-label after:content-[','] last:after:content-['']"
            >
              {place}
            </li>
          ))}
        </ul>
      </PageSection>

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
