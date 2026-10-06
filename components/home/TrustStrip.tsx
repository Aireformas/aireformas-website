import { trustStats } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";

export function TrustStrip() {
  return (
    <section className="border-y border-ink/5 bg-paper py-10 text-ink md:py-12">
      <Container>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustStats.map((stat, index) => (
            <InView key={stat.label} staggerIndex={index} as="li" className="list-none">
              <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                {stat.label}
              </p>
            </InView>
          ))}
        </ul>
      </Container>
    </section>
  );
}
