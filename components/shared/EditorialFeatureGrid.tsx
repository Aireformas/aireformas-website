import Image from "next/image";
import type { ImageAsset } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export type EditorialFeatureItem = {
  title: string;
  description: string;
  image: ImageAsset;
};

type EditorialFeatureGridProps = {
  label: string;
  title: string;
  items: readonly EditorialFeatureItem[];
  tone?: "paper" | "warm";
};

export function EditorialFeatureGrid({
  label,
  title,
  items,
  tone = "warm",
}: EditorialFeatureGridProps) {
  const bg = tone === "warm" ? "bg-paper-warm" : "bg-paper";
  const [primary, second, ...rest] = items;

  return (
    <section className={`section-y border-t border-ink/5 ${bg} text-ink`}>
      <Container>
        <SectionLabel variant="light">{label}</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-8 max-w-3xl">{title}</h2>
        </InView>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {primary ? (
            <InView className="lg:col-span-7">
              <FeatureBlock item={primary} large />
            </InView>
          ) : null}

          <div className="flex flex-col gap-10 lg:col-span-5 lg:gap-8 lg:pt-8">
            {second ? (
              <InView>
                <FeatureBlock item={second} />
              </InView>
            ) : null}

            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {rest.map((item, index) => (
                <InView key={item.title} staggerIndex={index}>
                  <FeatureBlock item={item} compact />
                </InView>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type FeatureBlockProps = {
  item: EditorialFeatureItem;
  large?: boolean;
  compact?: boolean;
};

function FeatureBlock({ item, large = false, compact = false }: FeatureBlockProps) {
  return (
    <article>
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
          src={item.image.src}
          alt={item.image.alt}
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
              {item.title}
            </p>
          ) : null}
          <div>
            <h3
              className={`heading-editorial tracking-[0.12em] uppercase ${
                compact ? "text-lg" : "text-2xl md:text-3xl"
              }`}
            >
              {item.title}
            </h3>
            {!compact ? (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
                {item.description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
