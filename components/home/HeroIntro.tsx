import Link from "next/link";
import { homeHero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroIntro() {
  return (
    <section className="section-y-compact bg-brand-taupe-light text-ink">
      <Container>
        <InView>
          <SectionLabel variant="light">{homeHero.pillars}</SectionLabel>
          <p
            aria-hidden
            className="text-hero-editorial mt-5 max-w-4xl text-ink md:mt-6"
          >
            {homeHero.titleLine1}
            <br />
            {homeHero.titleLine2}
          </p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/65 md:mt-6 md:text-base">
            {homeHero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 md:mt-10">
            <Link href={homeHero.primaryCta.href} className="text-link-editorial">
              {homeHero.primaryCta.label}
            </Link>
            <Link
              href={homeHero.secondaryCta.href}
              className="border-b border-ink/30 pb-0.5 text-[0.6875rem] font-semibold tracking-[0.08em] text-ink/70 transition-colors hover:border-accent hover:text-accent"
            >
              {homeHero.secondaryCta.label}
            </Link>
          </div>
        </InView>
      </Container>
    </section>
  );
}
