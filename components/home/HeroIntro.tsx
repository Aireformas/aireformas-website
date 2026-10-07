import Link from "next/link";
import { homeHero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";

export function HeroIntro() {
  return (
    <section className="border-b border-ink/5 bg-paper py-16 text-ink md:py-20 lg:py-24">
      <Container>
        <InView>
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
            {homeHero.pillars}
          </p>
          <p
            aria-hidden
            className="text-hero-editorial mt-6 max-w-4xl text-ink"
          >
            {homeHero.titleLine1}
            <br />
            {homeHero.titleLine2}
          </p>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/65 md:text-base">
            {homeHero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link href={homeHero.primaryCta.href} className="text-link-editorial">
              {homeHero.primaryCta.label}
            </Link>
            <Link
              href={homeHero.secondaryCta.href}
              className="border-b border-ink/30 pb-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:border-accent hover:text-accent"
            >
              {homeHero.secondaryCta.label}
            </Link>
          </div>
        </InView>
      </Container>
    </section>
  );
}
