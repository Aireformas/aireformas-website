import type { ProcessStep } from "@/lib/types";
import { cn } from "@/lib/cn";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";

type ProcessGridSectionProps = {
  label: string;
  title: string;
  lead?: string;
  steps: readonly ProcessStep[];
  tone?: "cream" | "sand";
  borderTop?: boolean;
  borderBottom?: boolean;
  id?: string;
  /** `path` = timeline creativa (armarios/cocinas). `grid` = rejilla clásica. */
  layout?: "grid" | "path";
};

const toneClass = {
  cream: "bg-cream-base text-ink-primary",
  sand: "bg-sand-container text-ink-primary",
} as const;

export function ProcessGridSection({
  label,
  title,
  lead,
  steps,
  tone = "cream",
  borderTop = false,
  borderBottom = false,
  id,
  layout = "grid",
}: ProcessGridSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-space-2xl px-margin-mobile md:px-margin",
        toneClass[tone],
        borderTop && "border-t border-outline/15",
        borderBottom && "border-b border-outline/15",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro label={label} title={title} lead={lead} />

        {layout === "path" ? (
          <ProcessPath steps={steps} />
        ) : (
          <div className="grid grid-cols-1 gap-x-gutter gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-outline/25 pt-6">
                <span className="text-numeral-display mb-2 block leading-none text-sand-panel">
                  {step.number}
                </span>
                <h3 className="text-headline-sm mb-2 font-light text-ink-primary">
                  {step.title}
                </h3>
                <p className="text-body-sm font-light text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProcessPath({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <ol className="relative mt-2">
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-[1.15rem] w-px bg-outline/25 md:left-0 md:right-0 md:top-11 md:bottom-auto md:h-px md:w-auto"
        aria-hidden
      />

      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => (
          <InView
            key={step.number}
            as="li"
            staggerIndex={index}
            className={cn(
              "relative list-none pl-12 md:pl-0",
              index % 2 === 1 && "md:mt-10",
            )}
          >
            <span
              className="absolute top-1 left-0 flex h-9 w-9 items-center justify-center rounded-full border border-outline/20 bg-cream-base text-label-uppercase text-slate-deep shadow-sm md:relative md:mb-5 md:h-11 md:w-11"
              aria-hidden
            >
              {step.number}
            </span>

            <div className="rounded-editorial border border-outline/12 bg-white/60 p-5 backdrop-blur-sm md:bg-sand-container/50">
              <p className="text-label-uppercase text-warm-label">Paso {step.number}</p>
              <h3 className="mt-2 text-headline-sm font-light text-ink-primary">{step.title}</h3>
              <p className="mt-2 text-body-sm font-light leading-relaxed text-on-surface-variant">
                {step.description}
              </p>
            </div>
          </InView>
        ))}
      </div>
    </ol>
  );
}
