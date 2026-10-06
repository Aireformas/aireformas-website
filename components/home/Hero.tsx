import Image from "next/image";
import Link from "next/link";
import { homeHero } from "@/content/home";

export function Hero() {
  const fullTitle = `${homeHero.titleLine1} ${homeHero.titleLine2}`;

  return (
    <section className="flex min-h-[calc(100dvh-4rem)] flex-col bg-[var(--color-hero-bg)] text-ink lg:min-h-[calc(100dvh-4.5rem)]">
      <h1 className="sr-only">{fullTitle}</h1>

      <div className="container-site shrink-0 pt-4 pb-2 sm:pt-5 md:pt-8 md:pb-4 lg:pt-10 lg:pb-6">
        <p className="max-w-[12.5rem] text-[0.625rem] font-medium uppercase leading-[1.65] tracking-[0.14em] text-ink/75 sm:max-w-[14rem] md:max-w-xs md:text-[0.6875rem]">
          {homeHero.intro}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center pb-16 pt-2 md:pb-20 lg:pb-24">
        <p
          aria-hidden
          className="text-hero-editorial container-site mb-5 text-right font-medium uppercase leading-[0.92] tracking-[-0.03em] md:mb-10 lg:mb-14 xl:mb-16"
        >
          {homeHero.titleLine1}
        </p>

        <div className="flex w-full shrink-0 snap-x snap-mandatory items-stretch justify-start gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-2.5 md:px-8 lg:my-2 lg:gap-3 [&::-webkit-scrollbar]:hidden">
          {homeHero.stripImages.map((image, index) => (
            <div
              key={image.src}
              className="image-hover-shimmer relative h-[28vh] min-h-[160px] max-h-[280px] w-[22vw] min-w-[72px] max-w-[100px] shrink-0 snap-center overflow-hidden bg-ink/[0.06] sm:min-w-[88px] sm:max-w-[112px] md:h-[36vh] md:max-h-none md:max-w-[152px] lg:h-[38vh] lg:max-w-[172px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 4}
                sizes="(max-width: 768px) 88px, 172px"
                className="image-hover-shimmer-target object-cover object-center contrast-[1.02] saturate-[1.06]"
              />
            </div>
          ))}
        </div>

        <p
          aria-hidden
          className="text-hero-editorial container-site mt-5 text-right font-medium uppercase leading-[0.92] tracking-[-0.03em] md:mt-10 md:ml-auto md:max-w-[90%] lg:mt-12"
        >
          {homeHero.titleLine2}
        </p>

        <div className="container-site mt-6 flex flex-wrap items-center justify-end gap-5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] md:mt-8 lg:mt-10">
          <Link
            href="#contacto"
            className="text-ink/70 transition-colors hover:text-ink"
          >
            Pide presupuesto
          </Link>
          <Link
            href="#servicios"
            className="border-b border-ink/30 pb-0.5 text-ink transition-colors hover:border-ink"
          >
            Ver servicios
          </Link>
        </div>
      </div>

      <Link
        href="#servicios"
        className="container-site shrink-0 pb-5 text-[0.625rem] font-medium uppercase tracking-[0.22em] text-ink/55 transition-colors hover:text-ink md:pb-7 md:text-[0.6875rem]"
      >
        {homeHero.scrollLabel}
      </Link>
    </section>
  );
}
