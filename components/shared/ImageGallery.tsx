import Image from "next/image";
import type { GalleryItem } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";
import {
  getSectionSurface,
  sectionShellClass,
  type SectionSurfaceTone,
} from "@/lib/sectionSurface";

type ImageGalleryProps = {
  label: string;
  title: string;
  items: GalleryItem[];
  variant?: "light" | "dark";
  tone?: SectionSurfaceTone;
};

export function ImageGallery({
  label,
  title,
  items,
  variant = "light",
  tone,
}: ImageGalleryProps) {
  const resolvedTone =
    tone ?? (variant === "dark" ? "taupeDark" : "warm");
  const surface = getSectionSurface(resolvedTone);

  return (
    <section className={sectionShellClass(resolvedTone, { borderTop: true })}>
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          label={label}
          title={title}
          dark={surface.onBrand}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => (
            <InView key={item.image.src} staggerIndex={index}>
              <figure
                className={
                  index % 2 === 1 ? "lg:mt-10" : index === 2 ? "lg:mt-4" : ""
                }
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-editorial border border-outline/10">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {item.caption ? (
                  <figcaption className={`mt-3 text-label-uppercase ${surface.faint}`}>
                    {item.caption}
                  </figcaption>
                ) : null}
              </figure>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
