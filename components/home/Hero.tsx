import Image from "next/image";
import Link from "next/link";
import { chrome } from "@/content/chrome";
import { homeCopy } from "@/content/home";
import { getLocale } from "@/lib/locale.server";

export async function Hero() {
  const locale = await getLocale();
  const homeHero = homeCopy[locale].hero;
  const ui = chrome[locale];
  return (
    <section
      className="relative flex min-h-screen items-end justify-start overflow-hidden pb-space-2xl pt-28 px-margin-mobile md:px-margin"
      aria-label={ui.cover}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={homeHero.heroImage.src}
          alt={homeHero.heroImage.alt}
          fill
          priority
          quality={68}
          sizes="100vw"
          className="object-cover brightness-[0.88] contrast-[0.98]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
      </div>

      <div className="relative z-10 max-w-4xl text-surface">
        <h1 className="sr-only">{homeHero.seoTitle}</h1>
        <p className="mb-4 text-label-uppercase text-white">
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
            className="rounded-full bg-slate-deep px-8 py-3.5 text-label-uppercase text-white transition-colors hover:bg-primary"
          >
            {homeHero.primaryCta.label}
          </Link>
          <Link
            href={homeHero.secondaryCta.href}
            className="rounded-full border border-white/80 px-8 py-3.5 text-label-uppercase text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            {homeHero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
