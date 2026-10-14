import Image from "next/image";
import Link from "next/link";
import { homeHero } from "@/content/home";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-end justify-start overflow-hidden pb-space-2xl pt-28 px-margin-mobile md:px-margin"
      aria-label="Portada"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={homeHero.heroImage.src}
          alt={homeHero.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.88] contrast-[0.98]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
      </div>

      <div className="relative z-10 max-w-4xl text-surface">
        <h1 className="sr-only">{homeHero.seoTitle}</h1>
        <p className="mb-4 text-label-uppercase text-surface/80">
          {homeHero.pillars}
        </p>
        <p
          aria-hidden
          className="text-display-hero mb-6 leading-tight text-white"
        >
          {homeHero.titleLine1}
          <br />
          {homeHero.titleLine2}
        </p>
        <p className="mb-10 max-w-2xl text-body-lg font-light text-surface/90">
          {homeHero.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={homeHero.primaryCta.href}
            className="rounded-full bg-slate-accent px-8 py-3.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep"
          >
            {homeHero.primaryCta.label}
          </Link>
          <Link
            href={homeHero.secondaryCta.href}
            className="rounded-full border border-white/50 px-8 py-3.5 text-label-uppercase text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            {homeHero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
