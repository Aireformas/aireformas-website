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
          ? "section-y bg-stone text-white"
          : "section-y border-t border-ink/5 bg-paper text-ink"
      }
    >
      <Container>
        <SectionLabel variant={isDark ? "dark" : "light"}>{label}</SectionLabel>
        <InView className="mt-8">
          <h2 className="heading-display text-title-section max-w-3xl">{title}</h2>
        </InView>
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <InView
              key={step.number}
              staggerIndex={index}
              as="li"
              className="list-none border-t border-current/12 pt-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-current/40">
                {step.number}
              </span>
              <h3 className="heading-editorial mt-4 text-xl uppercase tracking-[0.12em] md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-current/60">
                {step.description}
              </p>
            </InView>
          ))}
        </ol>
      </Container>
    </section>
  );
}
