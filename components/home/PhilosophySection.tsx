import Image from "next/image";
import { philosophySection } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PhilosophySection() {
  return (
    <section
      className="section-y border-t border-ink/5 bg-paper text-ink"
      aria-labelledby="philosophy-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <InView className="lg:col-span-5">
            <div className="image-editorial relative aspect-[3/4] overflow-hidden">
              <Image
                src={philosophySection.image.src}
                alt={philosophySection.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="image-editorial-target object-cover"
              />
            </div>
          </InView>

          <div className="flex gap-8 lg:col-span-7 lg:pl-6">
            <p
              className="mt-2 hidden shrink-0 font-serif text-xs uppercase tracking-[0.35em] text-ink/40 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
              aria-hidden
            >
              {philosophySection.verticalLabel}
            </p>

            <div className="min-w-0 max-w-xl">
              <SectionLabel variant="light">{philosophySection.label}</SectionLabel>
              <InView>
                <h2
                  id="philosophy-heading"
                  className="heading-display text-title-section mt-8"
                >
                  {philosophySection.title}
                </h2>
              </InView>
              <div className="mt-10 space-y-6 font-serif text-xl leading-relaxed tracking-[0.06em] text-ink/65 md:text-2xl md:leading-[1.55]">
                {philosophySection.paragraphs.map((paragraph) => (
                  <InView key={paragraph}>
                    <p>{paragraph}</p>
                  </InView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
