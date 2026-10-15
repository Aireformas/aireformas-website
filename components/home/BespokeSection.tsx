import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/content/home";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getLocale } from "@/lib/locale.server";
import { cn } from "@/lib/cn";

export async function BespokeSection() {
  const bespokeSection = homeCopy[await getLocale()].bespoke;
  const [hero, mid, lower] = bespokeSection.teasers;

  return (
    <section
      className="bg-deep-brown py-space-2xl text-surface px-margin-mobile md:px-margin"
      id="mobiliario"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <div className="md:col-span-5 md:pr-6">
          <span className="mb-3 block text-label-uppercase text-tertiary-fixed">
            {bespokeSection.label}
          </span>
          <h2 className="text-headline-lg mb-6 leading-tight text-white">
            {bespokeSection.title}
          </h2>
          <p className="mb-8 text-body-lg font-light leading-relaxed text-surface/85">
            {bespokeSection.description}
          </p>
          <Link
            href={bespokeSection.href}
            className="inline-flex items-center space-x-2 border-b border-tertiary-fixed pb-1 text-label-uppercase text-tertiary-fixed transition-colors hover:text-white"
          >
            <span>{bespokeSection.cta}</span>
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-2 md:gap-4">
            <TeaserCard
              category={hero.category}
              image={hero.image}
              priority
              className="col-span-2 aspect-16/10 md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-110"
            />
            <TeaserCard
              category={mid.category}
              image={mid.image}
              className="aspect-4/5 md:col-span-5 md:aspect-auto"
            />
            <TeaserCard
              category={lower.category}
              image={lower.image}
              className="aspect-4/5 md:col-span-5 md:mt-0 md:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type TeaserCardProps = {
  category: string;
  image: { src: string; alt: string };
  className?: string;
  priority?: boolean;
};

function TeaserCard({ category, image, className, priority }: TeaserCardProps) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-editorial border border-white/10 shadow-2xl",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-deep-brown/75 px-3 py-1 text-label-uppercase text-surface backdrop-blur-sm">
        {category}
      </figcaption>
    </figure>
  );
}
