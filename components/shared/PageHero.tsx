import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
  layout?: "default" | "editorial";
};

export function PageHero({
  label,
  title,
  description,
  image,
  cta,
  layout = "default",
}: PageHeroProps) {
  if (layout === "editorial") {
    return (
      <section className="bg-paper pb-10 pt-20 text-ink md:pb-14 md:pt-24 lg:pb-16 lg:pt-[7.5rem]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="max-w-xl lg:-translate-y-3">
              <SectionLabel variant="light">{label}</SectionLabel>
              <h1 className="heading-display text-title-page mt-6">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                {description}
              </p>
              {cta ? (
                <div className="mt-8">
                  <Button href={cta.href}>{cta.label}</Button>
                </div>
              ) : null}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] lg:aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-secondary text-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-secondary/30" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-secondary/45 to-brand-secondary/20"
        aria-hidden
      />
      <Container className="relative z-10 py-20 md:py-28">
        <SectionLabel className="border-white/25 bg-white/10 text-white">
          {label}
        </SectionLabel>
        <h1 className="heading-display text-title-page mt-6 max-w-3xl text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white md:text-xl [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
          {description}
        </p>
        {cta ? (
          <div className="mt-8">
            <Button href={cta.href} variant="primary-light">
              {cta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
