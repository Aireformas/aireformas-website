import { howWeWorkSection, howWeWorkSteps } from "@/content/home";
import { InView } from "@/components/motion/InView";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HowWeWork() {
  return (
    <section className="section-y border-t border-ink/5 bg-paper text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:pt-2">
            <SectionLabel variant="light">{howWeWorkSection.label}</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-6 max-w-sm">
                {howWeWorkSection.title}
              </h2>
            </InView>
            <InView staggerIndex={1}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/65">
                {howWeWorkSection.lead}
              </p>
            </InView>
          </div>

          <ol className="lg:col-span-8">
            {howWeWorkSteps.map((step, index) => (
              <InView
                key={step.number}
                staggerIndex={index}
                as="li"
                className="group relative list-none border-b border-ink/8 py-8 first:pt-0 last:border-b-0 last:pb-0 md:py-10"
              >
                <div className="flex gap-5 md:gap-8">
                  <div className="w-16 shrink-0 md:w-20">
                    <span
                      className="block text-[3rem] font-medium leading-none tracking-[-0.04em] text-ink/[0.14] transition-colors duration-500 group-hover:text-ink/25 md:text-[4.25rem]"
                      aria-hidden
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 pt-1 md:max-w-lg">
                    <h3 className="font-display text-xl font-semibold uppercase tracking-[-0.02em] md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/70">
                      {step.description}
                    </p>
                    <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-ink/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Paso {step.number}
                    </span>
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
