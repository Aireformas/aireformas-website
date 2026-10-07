import Image from "next/image";
import { materialTiles, materialsSection } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function MaterialsGrid() {
  return (
    <section className="section-y bg-paper-warm text-ink">
      <Container>
        <SectionLabel variant="light">{materialsSection.label}</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-8 max-w-2xl">
            {materialsSection.title}
          </h2>
        </InView>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {materialTiles.map((tile, index) => (
            <InView key={tile.id} staggerIndex={index}>
              <div
                className={`group ${
                  index % 2 === 1 ? "md:mt-10" : index === 2 ? "md:mt-4" : ""
                }`}
              >
                <div className="image-editorial relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={tile.image.src}
                    alt={tile.image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="image-editorial-target object-cover"
                  />
                </div>
                <div className="mt-4">
                  <p className="heading-editorial text-lg tracking-[0.14em] uppercase">
                    {tile.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/55 md:text-sm">
                    {tile.caption}
                  </p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}
