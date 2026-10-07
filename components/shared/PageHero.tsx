import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  EditorialPageHeader,
  type EditorialBreadcrumb,
} from "@/components/shared/EditorialPageHeader";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  layout?: "immersive" | "editorial";
  breadcrumbs?: EditorialBreadcrumb[];
};

export function PageHero({
  label,
  title,
  description,
  image,
  cta,
  secondaryCta,
  layout = "immersive",
  breadcrumbs,
}: PageHeroProps) {
  if (layout === "editorial") {
    return (
      <section className="border-b border-ink/5 bg-paper pb-12 pt-6 text-ink md:pb-16 md:pt-8 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="max-w-xl lg:col-span-5">
              <SectionLabel variant="light">{label}</SectionLabel>
              <h1 className="heading-display text-title-page mt-8">{title}</h1>
              <p className="mt-6 text-base leading-relaxed text-ink/60 md:text-lg">
                {description}
              </p>
              {cta ? (
                <div className="mt-8">
                  <Link href={cta.href} className="text-link-editorial">
                    {cta.label}
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="image-editorial relative aspect-[4/5] overflow-hidden lg:col-span-7 lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="image-editorial-target object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <EditorialPageHeader
      label={label}
      title={title}
      description={description}
      image={image}
      breadcrumbs={breadcrumbs}
      cta={cta}
      secondaryCta={secondaryCta}
    />
  );
}
