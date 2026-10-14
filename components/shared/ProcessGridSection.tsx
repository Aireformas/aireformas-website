import type { ProcessStep } from "@/lib/types";
import { cn } from "@/lib/cn";
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
      </div>
    </section>
  );
}
