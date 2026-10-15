import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/content/home";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getLocale } from "@/lib/locale.server";

export async function BespokeSection() {
  const bespokeSection = homeCopy[await getLocale()].bespoke;
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
          <div className="overflow-hidden rounded-editorial border border-white/10 shadow-2xl">
            <Image
              src={bespokeSection.image.src}
              alt={bespokeSection.image.alt}
              width={1200}
              height={900}
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
