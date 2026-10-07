import Image from "next/image";
import Link from "next/link";
import { fourPillarsSection, homePillars } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FourPillars() {
  const [primary, second, ...rest] = homePillars;

  return (
    <section id="pilares" className="section-y bg-paper-warm text-ink">
      <Container>
        <SectionLabel variant="light">{fourPillarsSection.label}</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-8 max-w-3xl">
            {fourPillarsSection.title}
          </h2>
        </InView>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {primary ? (
            <InView className="lg:col-span-7">
              <PillarBlock pillar={primary} large />
            </InView>
          ) : null}

          <div className="flex flex-col gap-10 lg:col-span-5 lg:gap-8 lg:pt-8">
            {second ? (
              <InView>
                <PillarBlock pillar={second} />
              </InView>
            ) : null}

            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {rest.map((pillar, index) => (
                <InView key={pillar.title} staggerIndex={index}>
                  <PillarBlock pillar={pillar} compact />
                </InView>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type PillarBlockProps = {
  pillar: (typeof homePillars)[number];
  large?: boolean;
  compact?: boolean;
};

function PillarBlock({ pillar, large = false, compact = false }: PillarBlockProps) {
  const content = (
    <article className="group">
      <div
        className={`image-editorial relative overflow-hidden ${
          large
            ? "aspect-[4/5] lg:aspect-[5/6]"
            : compact
              ? "aspect-square"
              : "aspect-[4/3]"
        }`}
      >
        <Image
          src={pillar.image.src}
          alt={pillar.image.alt}
          fill
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 55vw"
              : compact
                ? "(max-width: 1024px) 45vw, 20vw"
                : "(max-width: 1024px) 100vw, 40vw"
          }
          className="image-editorial-target object-cover"
        />
      </div>
      <div className={compact ? "mt-3" : "mt-5"}>
        <div className="flex items-start gap-3">
          {!compact ? (
            <p
              className="mt-1 hidden shrink-0 font-serif text-[10px] uppercase tracking-[0.3em] text-ink/35 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
              aria-hidden
            >
              {pillar.title}
            </p>
          ) : null}
          <div>
            <h3
              className={`heading-editorial tracking-[0.12em] uppercase ${
                compact ? "text-lg" : "text-2xl md:text-3xl"
              }`}
            >
              {pillar.title}
            </h3>
            {!compact ? (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
                {pillar.description}
              </p>
            ) : null}
            {pillar.href ? (
              <span className="text-link-editorial mt-4 inline-block text-[0.65rem]">
                Descubrir
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );

  if (!pillar.href) return content;
  return (
    <Link href={pillar.href} className="block">
      {content}
    </Link>
  );
}
