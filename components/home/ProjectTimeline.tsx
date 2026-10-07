import Image from "next/image";
import {
  projectTimelineSection,
  projectTimelineSteps,
} from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

const aspectByIndex = [
  "aspect-[3/4]",
  "aspect-[4/5] md:mt-12",
  "aspect-square md:mt-6",
  "aspect-[3/4] md:mt-16",
] as const;

export function ProjectTimeline() {
  return (
    <section className="section-y border-t border-ink/5 bg-paper text-ink">
      <Container>
        <SectionLabel variant="light">{projectTimelineSection.label}</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-8 max-w-3xl">
            {projectTimelineSection.title}
          </h2>
        </InView>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {projectTimelineSteps.map((step, index) => (
            <InView key={step.phase} staggerIndex={index}>
              <figure>
                <div
                  className={`image-editorial relative overflow-hidden ${aspectByIndex[index] ?? "aspect-[3/4]"}`}
                >
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="image-editorial-target object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40">
                    {step.phase}
                  </p>
                  <p className="heading-editorial mt-2 text-lg">{step.title}</p>
                </figcaption>
              </figure>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}
