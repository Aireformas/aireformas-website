import Image from "next/image";
import Link from "next/link";
import { bespokeSection } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function BespokeSection() {
  return (
    <section className="section-y bg-paper text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel variant="light">{bespokeSection.label}</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-8 max-w-md">
                {bespokeSection.title}
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60 md:text-base">
                {bespokeSection.description}
              </p>
              <Link
                href={bespokeSection.href}
                className="text-link-editorial mt-8 inline-block"
              >
                {bespokeSection.cta}
              </Link>
            </InView>
          </div>
          <div className="image-editorial relative aspect-[4/5] overflow-hidden lg:col-span-8 lg:aspect-[16/10]">
            <Image
              src={bespokeSection.image.src}
              alt={bespokeSection.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="image-editorial-target object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
