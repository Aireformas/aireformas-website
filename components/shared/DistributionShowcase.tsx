import Image from "next/image";
import type { DistributionItem } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  getSectionSurface,
  type SectionSurfaceTone,
} from "@/lib/sectionSurface";
import { cn } from "@/lib/cn";

type DistributionShowcaseProps = {
  label: string;
  title: string;
  lead: string;
  hint: string;
  items: DistributionItem[];
  tone?: SectionSurfaceTone;
};

export function DistributionShowcase({
  label,
  title,
  lead,
  hint,
  items,
  tone = "warm",
}: DistributionShowcaseProps) {
  const surface = getSectionSurface(tone);

  return (
    <section
      className={cn(
        "border-t border-outline/10 py-space-2xl",
        surface.section,
      )}
      aria-labelledby="distributions-heading"
    >
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            label={label}
            title={title}
            lead={lead}
            titleId="distributions-heading"
            dark={surface.onBrand}
            className="mb-0"
            titleClassName="max-w-xl"
          />
          <p
            className={cn(
              "hidden shrink-0 items-center gap-2 text-label-uppercase sm:inline-flex",
              surface.faint,
            )}
          >
            <span>{hint}</span>
            <MaterialIcon name="arrow_forward" className="text-base" />
          </p>
        </div>
      </div>

      <div
        className="custom-scroll mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pl-margin-mobile md:gap-6 md:pl-margin"
        role="list"
        tabIndex={0}
        aria-label={title}
      >
        {items.map((item, index) => {
          const isPanorama = item.aspect === "panorama";
          return (
            <InView
              key={item.id}
              as="article"
              role="listitem"
              staggerIndex={index}
              className={cn(
                "group relative shrink-0 snap-center",
                isPanorama
                  ? "w-[min(82vw,520px)] sm:w-120 lg:w-140"
                  : "w-[min(72vw,300px)] sm:w-70 lg:w-80",
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-editorial border border-outline/10",
                  isPanorama ? "aspect-4/3" : "aspect-3/4",
                )}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={
                    isPanorama
                      ? "(max-width: 768px) 82vw, 560px"
                      : "(max-width: 768px) 72vw, 320px"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream-base/90 px-3 py-1 text-label-uppercase text-ink-primary backdrop-blur-sm">
                  {item.number}
                </span>
              </div>
              <div className="mt-4 pr-2">
                <span className={cn("block text-label-uppercase", surface.faint)}>
                  {item.category}
                </span>
                <h3 className="text-headline-sm mt-1 font-light text-ink-primary">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-body-sm font-light leading-relaxed",
                    surface.muted,
                  )}
                >
                  {item.caption}
                </p>
              </div>
            </InView>
          );
        })}
        <div className="w-5 shrink-0 snap-end md:w-16" aria-hidden />
      </div>
    </section>
  );
}
