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
  variant = "dark",
}: ImageGalleryProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "section-y bg-brand-secondary text-white"
          : "section-y border-t border-ink/5 bg-paper text-ink"
      }
    >
      <Container>
        <SectionLabel variant={isDark ? "dark" : "light"}>{label}</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-6 max-w-2xl">
            {title}
          </h2>
        </InView>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <InView key={item.image.src} staggerIndex={index}>
              <figure className="group overflow-hidden rounded-[var(--radius-image)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
                {item.caption ? (
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-current/60">
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
