import Image from "next/image";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export type EditorialBreadcrumb = {
  name: string;
  href: string;
};

type EditorialPageHeaderProps = {
  label: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  breadcrumbs?: EditorialBreadcrumb[];
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function EditorialPageHeader({
  label,
  title,
  description,
  image,
  breadcrumbs,
  cta,
  secondaryCta,
}: EditorialPageHeaderProps) {
  return (
    <>
      <section
        className="relative h-[52vh] min-h-[22rem] max-h-[40rem] w-full overflow-hidden bg-paper md:h-[58vh]"
        aria-label={label}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <section className="border-b border-ink/5 bg-paper py-14 text-ink md:py-16 lg:py-20">
        <Container>
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} embedded /> : null}
          <InView>
            <SectionLabel variant="light">{label}</SectionLabel>
            <h1 className="text-hero-editorial mt-8 max-w-4xl text-ink">{title}</h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/65 md:text-base">
              {description}
            </p>
            {cta || secondaryCta ? (
              <div className="mt-10 flex flex-wrap items-center gap-8">
                {cta ? (
                  <Link href={cta.href} className="text-link-editorial">
                    {cta.label}
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="border-b border-ink/30 pb-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </InView>
        </Container>
      </section>
    </>
  );
}
