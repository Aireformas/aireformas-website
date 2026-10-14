import Image from "next/image";
import type { ImageAsset } from "@/lib/types";

type PhilosophyBandSectionProps = {
  label: string;
  title: string;
  paragraphs: readonly string[];
  image: ImageAsset;
  headingId?: string;
};

export function PhilosophyBandSection({
  label,
  title,
  paragraphs,
  image,
  headingId = "philosophy-heading",
}: PhilosophyBandSectionProps) {
  return (
    <section
      className="border-t border-white/10 bg-deep-brown py-space-2xl text-surface px-margin-mobile md:px-margin"
      aria-labelledby={headingId}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-editorial border border-white/10 shadow-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1500}
              className="h-[600px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-6 md:pl-8">
          <span className="mb-4 block text-label-uppercase text-tertiary-fixed">
            {label}
          </span>
          <h2
            id={headingId}
            className="text-headline-lg mb-8 leading-tight text-white"
          >
            {title}
          </h2>
          <div className="space-y-6 text-body-lg font-light text-surface/90">
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 32)}
                className={
                  index === 0
                    ? "border-l-2 border-tertiary-fixed/40 pl-5 font-normal text-white"
                    : index === paragraphs.length - 1
                      ? "border-l-2 border-transparent pl-5 text-tertiary-fixed"
                      : "border-l-2 border-transparent pl-5"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
