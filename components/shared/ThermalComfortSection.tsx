import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "@/lib/types";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type ThermalComfortSectionProps = {
  label: string;
  temperature: string;
  temperatureNote?: string;
  title: string;
  subline: string;
  tags: readonly string[];
  image: ImageAsset;
  link?: { label: string; href: string };
  id?: string;
};

export function ThermalComfortSection({
  label,
  temperature,
  temperatureNote = "Constante todo el año",
  title,
  subline,
  tags,
  image,
  link,
  id,
}: ThermalComfortSectionProps) {
  return (
    <section
      id={id}
      className="border-t border-outline/15 bg-cream-base py-space-2xl px-margin-mobile md:px-margin"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-editorial border border-outline/15 shadow-sm">
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1200}
              className="h-[540px] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-5 md:pl-6">
          <span className="mb-3 block text-label-uppercase text-warm-label">
            {label}
          </span>
          <div className="mb-3 flex items-baseline">
            <span className="text-[5.5rem] font-extralight leading-none tracking-tighter text-primary">
              {temperature}
            </span>
            <span className="ml-4 text-label-uppercase text-outline">
              {temperatureNote}
            </span>
          </div>
          <h3 className="text-headline-md mb-2 font-light text-ink-primary">
            {title}
          </h3>
          <p className="mb-6 text-body-lg font-normal text-primary">{subline}</p>
          <div className="mb-8 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-outline/10 bg-sand-container px-4 py-2 text-label-uppercase text-ink-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          {link ? (
            <Link
              href={link.href}
              className="group inline-flex items-center space-x-2 text-label-uppercase text-primary transition-colors hover:text-slate-deep"
            >
              <span className="border-b border-primary pb-0.5 group-hover:border-slate-deep">
                {link.label}
              </span>
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
