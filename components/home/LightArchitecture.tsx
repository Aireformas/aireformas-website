import Image from "next/image";
import { lightArchitectureSection, homeHero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function LightArchitecture() {
  const sideImages = homeHero.stripImages.slice(1, 3);

  return (
    <section id="luz" className="section-y bg-paper text-ink">
      <Container wide>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <InView className="relative lg:col-span-7">
            <div className="image-editorial relative aspect-[3/4] overflow-hidden md:aspect-[4/5] lg:min-h-[70vh] lg:aspect-auto lg:h-full">
              <Image
                src={lightArchitectureSection.image.src}
                alt={lightArchitectureSection.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="image-editorial-target object-cover"
              />
            </div>
            <p className="mt-4 hidden font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40 lg:block">
              {lightArchitectureSection.label}
            </p>
          </InView>

          <div className="flex flex-col justify-between gap-10 lg:col-span-5 lg:pl-4">
            <div className="flex items-start gap-6">
              <p
                className="hidden shrink-0 font-serif text-sm uppercase tracking-[0.35em] text-ink/50 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
                aria-hidden
              >
                {lightArchitectureSection.verticalLabel}
              </p>
              <div>
                <SectionLabel variant="light" className="lg:hidden">
                  {lightArchitectureSection.label}
                </SectionLabel>
                <InView>
                  <h2 className="heading-display text-title-section mt-6 max-w-sm lg:mt-0">
                    {lightArchitectureSection.title}
                  </h2>
                </InView>
                <p className="mt-6 max-w-xs font-serif text-lg leading-relaxed tracking-[0.04em] text-ink/60 lg:hidden">
                  {lightArchitectureSection.verticalLabel}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {sideImages.map((image, index) => (
                <InView key={image.src} staggerIndex={index}>
                  <div
                    className={`image-editorial relative overflow-hidden ${
                      index === 0 ? "aspect-[3/4]" : "aspect-square md:mt-10"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 20vw"
                      className="image-editorial-target object-cover"
                    />
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
