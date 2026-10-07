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
      <section className="bg-paper pb-12 pt-6 text-ink md:pb-16 md:pt-8 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="max-w-xl lg:col-span-5">
              <SectionLabel variant="light">{label}</SectionLabel>
              <h1 className="heading-display text-title-page mt-8">{title}</h1>
              <p className="mt-6 text-base leading-relaxed text-ink/60 md:text-lg">
                {description}
              </p>
              {cta ? (
                <div className="mt-8">
                  <Button href={cta.href} variant="editorial">
                    {cta.label}
                  </Button>
                </div>
              ) : null}
            </div>
            <div className="image-editorial relative aspect-[4/5] overflow-hidden lg:col-span-7 lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="image-editorial-target object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-stone text-white pt-16">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone/25" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone/90 via-stone/40 to-transparent"
        aria-hidden
      />
      <Container className="relative z-10 py-20 md:py-28">
        <SectionLabel className="text-white/70">{label}</SectionLabel>
        <h1 className="heading-display text-title-page mt-8 max-w-3xl text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {description}
        </p>
        {cta ? (
          <div className="mt-8">
            <Button href={cta.href} variant="editorial" className="border-white/40 text-white hover:border-white hover:text-white">
              {cta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
