import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import { PageSection } from "@/components/shared/PageSection";
import { SectionIntro } from "@/components/shared/SectionIntro";
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
  const estudioHero = copy.hero;
  const estudioValues = copy.values.items;
  const estudioTrustStats = copy.stats;
  const estudioProcess = copy.process.steps;
  const estudioTestimonials = copy.testimonials;
  const estudioCta = copy.cta;
  return (
    <>
      <PageHero
        label={estudioHero.label}
        title={estudioHero.title}
        description={estudioHero.description}
        image={estudioHero.image}
        cta={{ label: ui.talk, href: "/contacto" }}
      />

      <PageSection tone="sand" borderTop>
        <SectionIntro label={copy.values.label} title={copy.values.title} />
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {estudioValues.map((value) => (
            <li key={value} className="text-label-uppercase text-warm-label">
              {value}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection tone="cream" compact className="border-y border-outline/10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {estudioTrustStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-headline-lg font-light">{stat.value}</p>
              <p className="text-label-uppercase mt-2 text-warm-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </PageSection>

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
        steps={estudioProcess}
        tone="sand"
        borderTop
      />

      <TestimonialsSection testimonials={estudioTestimonials} />

      <ContactCTA
        label={ui.contact}
        title={estudioCta.title}
        description={estudioCta.description}
        variant="landing"
      />
    </>
  );
}
