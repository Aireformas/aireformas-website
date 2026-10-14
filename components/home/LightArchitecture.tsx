import Image from "next/image";
import { homeHero, lightArchitectureSection } from "@/content/home";

export function LightArchitecture() {
  const sideImages = homeHero.stripImages.slice(1, 3);

  return (
    <section className="bg-cream-base py-space-2xl px-margin-mobile md:px-margin" id="estudio">
      <div className="mx-auto max-w-7xl">
        <div className="mb-space-xl grid grid-cols-1 items-start gap-gutter md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="mb-3 block text-label-uppercase text-warm-label">
              {lightArchitectureSection.label}
            </span>
            <h2 className="text-headline-lg leading-tight text-ink-primary">
              {lightArchitectureSection.title}
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="text-body-lg font-light leading-relaxed text-on-surface-variant">
              {lightArchitectureSection.lead}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-end gap-gutter md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-editorial border border-outline/10">
              <Image
                src={lightArchitectureSection.image.src}
                alt={lightArchitectureSection.image.alt}
                width={1400}
                height={1050}
                className="h-[520px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-label-uppercase text-warm-label">
              <span>{lightArchitectureSection.verticalLabel}</span>
              <span>Madrid · aireformas</span>
            </div>
          </div>

          <div className="flex flex-col gap-gutter md:col-span-5 md:pl-4">
            {sideImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-editorial border border-outline/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  className="h-64 w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
