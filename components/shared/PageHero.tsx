import Image from "next/image";
import { PageIntro } from "@/components/shared/PageIntro";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  label,
  title,
  description,
  image,
  cta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <div className="bg-cream-base">
      <PageIntro
        label={label}
        title={title}
        description={description}
        cta={cta}
        secondaryCta={secondaryCta}
      />
      <section className="mx-auto w-full max-w-7xl px-margin-mobile pb-space-2xl md:px-margin">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-editorial bg-sand-container md:aspect-[21/9]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}
