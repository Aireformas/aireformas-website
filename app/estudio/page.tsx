import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessGridSection } from "@/components/shared/ProcessGridSection";
import { PageSection } from "@/components/shared/PageSection";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { site } from "@/content/site";
import {
  estudioCta,
  estudioHero,
  estudioMeta,
  estudioProcess,
  estudioTestimonials,
  estudioTrustStats,
  estudioValues,
} from "@/content/estudio";

export const metadata: Metadata = {
  title: estudioMeta.title,
  description: estudioMeta.description,
  openGraph: {
    title: estudioMeta.title,
    description: estudioMeta.description,
  },
};

export default function EstudioPage() {
  return (
    <>
      <PageHero
        label={estudioHero.label}
        title={estudioHero.title}
        description={estudioHero.description}
        image={estudioHero.image}
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <PageSection tone="sand" borderTop>
        <SectionIntro label="VALORES" title="Lo que guía cada proyecto" />
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
        <SectionIntro label="ZONA" title="Dónde trabajamos" />
        <InView>
          <p className="-mt-6 max-w-2xl text-body-md font-light text-on-surface-variant">
            {site.entityDescription}
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
        label="PROCESO"
        title="Nuestra forma de trabajar"
        steps={estudioProcess}
        tone="sand"
        borderTop
      />

      <TestimonialsSection testimonials={estudioTestimonials} />

      <ContactCTA
        label="CONTACTO"
        title={estudioCta.title}
        description={estudioCta.description}
        variant="landing"
      />
    </>
  );
}
