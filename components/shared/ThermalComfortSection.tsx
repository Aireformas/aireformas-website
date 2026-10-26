import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "@/lib/types";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type ThermalComfortSectionProps = {
  label: string;
  claim: string;
  claimNote?: string;
  title: string;
  subline: string;
  tags: readonly string[];
  image: ImageAsset;
  link?: { label: string; href: string };
  id?: string;
};

export function ThermalComfortSection({
  label,
  claim,
  claimNote = "Confort térmico todo el año",
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

        <div className="min-w-0 md:col-span-5 md:pl-6">
          <span className="mb-3 block text-label-uppercase text-warm-label">
            {label}
          </span>
          <div className="mb-4">
            <p className="text-balance text-[clamp(2.15rem,4.2vw,3.25rem)] font-extralight leading-[0.98] tracking-tight text-primary">
              {claim}
            </p>
            <p className="mt-3 text-balance text-label-uppercase text-outline">
              {claimNote}
            </p>
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
