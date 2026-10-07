import Image from "next/image";
import { homeHero } from "@/content/home";

export function Hero() {
  return (
    <section
      className="relative h-[100dvh] min-h-[32rem] w-full overflow-hidden bg-paper"
      aria-label="Portada"
    >
      <h1 className="sr-only">{homeHero.seoTitle}</h1>
      <Image
        src={homeHero.heroImage.src}
        alt={homeHero.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  );
}
