import Image from "next/image";
import {
  projectTimelineSection,
  projectTimelineSteps,
} from "@/content/home";
import { SectionIntro } from "@/components/shared/SectionIntro";

export function ProjectTimeline() {
  return (
    <section className="bg-cream-base py-space-2xl px-margin-mobile md:px-margin">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          label={projectTimelineSection.label}
          title={projectTimelineSection.title}
          lead={projectTimelineSection.lead}
        />

        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {projectTimelineSteps.map((step, index) => (
            <div key={step.phase} className="flex flex-col">
              <div className="group relative mb-4 overflow-hidden rounded-editorial border border-outline/15">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={700}
                  height={900}
                  className="h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-label-uppercase ${
                    index === projectTimelineSteps.length - 1
                      ? "bg-slate-accent text-surface"
                      : "bg-ink-primary/80 text-surface backdrop-blur-sm"
                  }`}
                >
                  Fase 0{index + 1}
                </span>
              </div>
              <span className="mb-1 text-label-uppercase text-warm-label">
                {step.phase}
              </span>
              <h4 className="text-headline-sm font-light text-ink-primary">
                {step.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
