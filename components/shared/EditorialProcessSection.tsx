import type { ProcessStep } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type EditorialProcessSectionProps = {
  label: string;
  title: string;
  lead?: string;
  steps: readonly ProcessStep[];
  tone?: "paper" | "warm";
};

export function EditorialProcessSection({
  label,
  title,
  lead,
  steps,
  tone = "paper",
}: EditorialProcessSectionProps) {
  const bg = tone === "warm" ? "bg-paper-warm" : "bg-paper";

  return (
    <section className={`section-y border-t border-ink/5 ${bg} text-ink`}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 lg:pt-2">
            <SectionLabel variant="light">{label}</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-8 max-w-sm">{title}</h2>
            </InView>
            {lead ? (
              <InView staggerIndex={1}>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/55 md:text-base">
                  {lead}
                </p>
              </InView>
            ) : null}
          </div>

          <ol className="lg:col-span-8">
            {steps.map((step, index) => (
              <InView
                key={step.number}
                staggerIndex={index}
                as="li"
                className="group relative list-none border-b border-ink/8 py-10 first:pt-0 last:border-b-0 last:pb-0 md:py-12"
              >
                <div className="flex gap-6 md:gap-10">
                  <div className="w-16 shrink-0 md:w-24">
                    <span
                      className="block font-serif text-[3.5rem] font-normal leading-none tracking-[0.04em] text-ink/[0.12] transition-colors duration-500 group-hover:text-ink/20 md:text-[5rem]"
                      aria-hidden
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-2 md:max-w-lg md:pt-4">
                    <h3 className="heading-editorial text-xl uppercase tracking-[0.14em] md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/60 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </InView>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
