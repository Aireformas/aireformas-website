import Image from "next/image";
import type { GalleryItem } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ImageGalleryProps = {
  label: string;
  title: string;
  items: GalleryItem[];
  variant?: "light" | "dark";
};

export function ImageGallery({
  label,
  title,
  items,
  variant = "light",
}: ImageGalleryProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "section-y bg-stone text-white"
          : "section-y border-t border-ink/5 bg-paper text-ink"
      }
    >
      <Container>
        <SectionLabel variant={isDark ? "dark" : "light"}>{label}</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-8 max-w-2xl">
            {title}
          </h2>
        </InView>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => (
            <InView key={item.image.src} staggerIndex={index}>
              <figure
                className={
                  index % 2 === 1 ? "lg:mt-10" : index === 2 ? "lg:mt-4" : ""
                }
              >
                <div className="image-editorial relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="image-editorial-target object-cover"
                  />
                </div>
                {item.caption ? (
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-current/50">
                    {item.caption}
                  </figcaption>
                ) : null}
              </figure>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}
