import Image from "next/image";
import Link from "next/link";

type EditorialPageHeaderProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function EditorialPageHeader({
  label,
  title,
  description,
  image,
  cta,
  secondaryCta,
}: EditorialPageHeaderProps) {
  return (
    <section
      className="relative flex min-h-[72vh] items-end justify-start overflow-hidden pb-space-2xl pt-28 px-margin-mobile md:min-h-[70vh] md:px-margin"
      aria-label={label}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.88] contrast-[0.98]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
      </div>

      <div className="relative z-10 max-w-4xl text-surface">
        <p className="mb-4 text-label-uppercase text-surface/80">{label}</p>
        <h1 className="text-display-hero mb-6 leading-tight text-white">{title}</h1>
        <p className="mb-10 max-w-2xl text-body-lg font-light text-surface/90">
          {description}
        </p>
        {cta || secondaryCta ? (
          <div className="flex flex-wrap items-center gap-4">
            {cta ? (
              <Link
                href={cta.href}
                className="rounded-full bg-slate-accent px-8 py-3.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep"
              >
                {cta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-white/50 px-8 py-3.5 text-label-uppercase text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
