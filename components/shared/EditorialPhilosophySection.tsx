import Image from "next/image";
import type { ImageAsset } from "@/lib/types";
import { InView } from "@/components/motion/InView";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type EditorialPhilosophySectionProps = {
  label: string;
  verticalLabel: string;
  title: string;
  paragraphs: readonly string[];
  image: ImageAsset;
  tone?: "paper" | "warm";
};

export function EditorialPhilosophySection({
  label,
  verticalLabel,
  title,
  paragraphs,
  image,
  tone = "paper",
}: EditorialPhilosophySectionProps) {
  const bg = tone === "warm" ? "bg-paper-warm" : "bg-paper";

  return (
    <section className={`section-y border-t border-ink/5 ${bg} text-ink`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <InView className="lg:col-span-5">
            <div className="image-editorial relative aspect-[3/4] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="image-editorial-target object-cover"
              />
            </div>
          </InView>

          <div className="flex gap-8 lg:col-span-7 lg:pl-6">
            <p
              className="mt-2 hidden shrink-0 font-serif text-xs uppercase tracking-[0.35em] text-ink/40 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
              aria-hidden
            >
              {verticalLabel}
            </p>

            <div className="min-w-0 max-w-xl">
              <SectionLabel variant="light">{label}</SectionLabel>
              <InView>
                <h2 className="heading-display text-title-section mt-8">{title}</h2>
              </InView>
              <div className="mt-10 space-y-6 font-serif text-xl leading-relaxed tracking-[0.06em] text-ink/65 md:text-2xl md:leading-[1.55]">
                {paragraphs.map((paragraph) => (
                  <InView key={paragraph.slice(0, 32)}>
                    <p>{paragraph}</p>
                  </InView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
