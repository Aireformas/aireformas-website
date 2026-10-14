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
import {
  editorialBlock,
  interiorismoCta,
  interiorismoGallery,
  interiorismoHero,
  interiorismoMeta,
  interiorismoProcess,
  interiorismoServices,
} from "@/content/interiorismo";

export const metadata: Metadata = {
  title: interiorismoMeta.title,
  description: interiorismoMeta.description,
  openGraph: {
    title: interiorismoMeta.title,
    description: interiorismoMeta.description,
  },
};

export default function InteriorismoPage() {
  return (
    <>
      <PageHero
        label={interiorismoHero.label}
        title={interiorismoHero.title}
        description={interiorismoHero.description}
        image={interiorismoHero.image}
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <PageSection tone="sand" borderTop>
        <SectionIntro label="ENFOQUE" title={editorialBlock.title} />
        <div className="grid max-w-4xl gap-5 text-body-md font-light text-on-surface-variant">
          {editorialBlock.paragraphs.map((paragraph) => (
            <InView key={paragraph.slice(0, 24)}>
              <p>{paragraph}</p>
            </InView>
          ))}
        </div>
      </PageSection>

      <TopicGridSection
        label="SERVICIOS"
        title="Interiorismo integral"
        items={interiorismoServices}
        tone="cream"
        footer={
          <PillarCrossLinks>
            Reforma y obra en <PillarCrossLink href="/reformas">Reformas</PillarCrossLink>
            . Carpintería en{" "}
            <PillarCrossLink href="/mobiliario">Mobiliario</PillarCrossLink>. Climatización en{" "}
            <PillarCrossLink href="/climate">Climate</PillarCrossLink>.
          </PillarCrossLinks>
        }
      />

      <ImageGallery
        label="PROYECTOS"
        title="Antes y después · selección reciente"
        items={interiorismoGallery}
      />

      <ProcessGridSection
        label="PROCESO"
        title="Cómo desarrollamos tu interior"
        steps={interiorismoProcess}
        tone="sand"
        borderTop
      />

      <ContactCTA
        label="CONTACTO"
        title={interiorismoCta.title}
        description={interiorismoCta.description}
        variant="landing"
      />
    </>
  );
}
