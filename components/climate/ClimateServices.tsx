import Image from "next/image";
import type { ReactNode } from "react";
import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";
import type { ClimateService } from "@/content/climate";

type ClimateServicesProps = {
  label: string;
  title: string;
  lead: string;
  items: readonly ClimateService[];
  footer?: ReactNode;
};

export function ClimateServices({ label, title, lead, items, footer }: ClimateServicesProps) {
  return (
    <section
      id="servicios"
      className="border-t border-outline/15 bg-cream-base px-margin-mobile py-space-2xl md:px-margin"
    >
      <div className="mx-auto max-w-7xl">
        <SectionIntro label={label} title={title} lead={lead} />

        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <InView key={item.id} staggerIndex={index} as="li" className="list-none">
              <article id={item.id} className="scroll-mt-28">
                <div className="relative aspect-4/3 overflow-hidden rounded-editorial bg-sand-container">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 320px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-headline-sm font-light text-ink-primary">{item.title}</h3>
                <p className="mt-2 text-body-sm font-light text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            </InView>
          ))}
        </ul>

        {footer}
      </div>
    </section>
  );
}
