import type { ProcessStep } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

type ProcessStepsProps = {
  label: string;
  title: string;
  steps: ProcessStep[];
  variant?: "light" | "dark";
};

export function ProcessSteps({
  label,
  title,
  steps,
  variant = "light",
}: ProcessStepsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "section-y bg-brand-secondary text-white"
          : "section-y border-t border-ink/5 bg-paper text-ink"
      }
    >
      <Container>
        <SectionLabel variant={isDark ? "dark" : "light"}>{label}</SectionLabel>
        <InView className="mt-6">
          <h2
            className="heading-display text-title-section mt-4 max-w-3xl"
          >
            {title}
          </h2>
        </InView>
        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <InView
              key={step.number}
              staggerIndex={index}
              as="li"
              className="list-none border-t border-current/15 pt-6"
            >
              <span className="font-mono text-sm text-current/50">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-current/70">
                {step.description}
              </p>
            </InView>
          ))}
        </ol>
      </Container>
    </section>
  );
}
