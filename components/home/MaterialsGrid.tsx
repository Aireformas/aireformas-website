import Image from "next/image";
import { materialTiles, materialsSection } from "@/content/home";
import { SectionIntro } from "@/components/shared/SectionIntro";

export function MaterialsGrid() {
  return (
    <section className="bg-sand-container py-space-2xl px-margin-mobile md:px-margin">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          label={materialsSection.label}
          title={materialsSection.title}
          lead={materialsSection.lead}
          className="max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {materialTiles.map((tile) => (
            <div
              key={tile.id}
              className="flex flex-col justify-between rounded-editorial border border-outline/10 bg-cream-base p-5"
            >
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={tile.image.src}
                  alt={tile.image.alt}
                  width={600}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-headline-sm mb-1 font-light text-ink-primary">
                  {tile.title}
                </h4>
                <p className="text-body-sm font-light text-on-surface-variant">
                  {tile.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
