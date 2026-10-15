import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { ClimateService } from "@/content/climate";
import type { ImageAsset } from "@/lib/types";

type ClimateHeroProps = {
  label: string;
  title: string;
  headline: string;
  description: string;
  support: string;
  image: ImageAsset;
  cta: { label: string; href: string };
  services: readonly ClimateService[];
};

export function ClimateHero({
  label,
  title,
  headline,
  description,
  support,
  image,
  cta,
  services,
}: ClimateHeroProps) {
  return (
    <section className="bg-cream-base px-margin-mobile pb-space-2xl pt-34 md:px-margin md:pt-42">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="relative aspect-16/10 overflow-hidden rounded-editorial bg-sand-container lg:col-span-7">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-5">
          <span className="text-label-uppercase text-warm-label">{label}</span>
          <h1 className="mt-3 text-display-hero text-primary">{title}</h1>
          <p className="mt-4 text-headline-sm font-light text-ink-primary">{headline}</p>
          <p className="mt-2 text-body-lg font-light text-on-surface-variant">{description}</p>
          <p className="mt-4 max-w-md text-body-md font-light text-on-surface-variant">{support}</p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-outline/15 bg-white/70 px-3 py-2 text-[0.75rem] leading-none text-ink-primary transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <MaterialIcon name={service.icon} className="text-[18px] text-primary" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href={cta.href}
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-2.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
