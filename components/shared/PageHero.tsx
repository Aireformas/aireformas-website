import Image from "next/image";
import Link from "next/link";
import { EditorialPageHeader } from "@/components/shared/EditorialPageHeader";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  layout?: "immersive" | "editorial";
};

export function PageHero({
  label,
  title,
  description,
  image,
  cta,
  secondaryCta,
  layout = "immersive",
}: PageHeroProps) {
  if (layout === "editorial") {
    return (
      <section className="bg-cream-base pb-space-2xl pt-28 px-margin-mobile md:px-margin">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-gutter lg:grid-cols-12">
          <div className="max-w-xl lg:col-span-5">
            <p className="mb-3 text-label-uppercase text-warm-label">{label}</p>
            <h1 className="text-headline-lg text-ink-primary">{title}</h1>
            <p className="mt-6 text-body-lg font-light text-on-surface-variant">
              {description}
            </p>
            {cta ? (
              <Link
                href={cta.href}
                className="mt-8 inline-flex rounded-full bg-slate-accent px-8 py-3.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep"
              >
                {cta.label}
              </Link>
            ) : null}
          </div>
          <div className="overflow-hidden rounded-editorial border border-outline/10 lg:col-span-7">
            <Image
              src={image.src}
              alt={image.alt}
              width={1400}
              height={1050}
              priority
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <EditorialPageHeader
      label={label}
      title={title}
      description={description}
      image={image}
      cta={cta}
      secondaryCta={secondaryCta}
    />
  );
}
