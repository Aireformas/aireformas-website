import Image from "next/image";
import type { ImageAsset } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { sectionShellClass } from "@/lib/sectionSurface";

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
  const surfaceTone = tone === "warm" ? "warm" : "paper";
  const [primary, second, ...rest] = items;

  return (
    <section className={sectionShellClass(surfaceTone, { borderTop: true })}>
      <div className="mx-auto max-w-7xl">
        <SectionIntro label={label} title={title} />

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
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
      </div>
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
        className={`relative overflow-hidden rounded-editorial border border-outline/10 ${
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
          className="object-cover"
        />
      </div>
      <div className={compact ? "mt-3" : "mt-5"}>
        <h3
          className={`font-light text-ink-primary ${
            compact ? "text-headline-sm" : "text-headline-md"
          }`}
        >
          {item.title}
        </h3>
        {!compact ? (
          <p className="mt-3 max-w-md text-body-sm font-light text-on-surface-variant">
            {item.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
