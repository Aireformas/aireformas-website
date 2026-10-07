import Image from "next/image";
import Link from "next/link";
import { comfortSection } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ComfortSection() {
  return (
    <section className="section-y border-t border-ink/5 bg-paper text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="image-editorial relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-[5/4]">
            <Image
              src={comfortSection.image.src}
              alt={comfortSection.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="image-editorial-target object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <SectionLabel variant="light">{comfortSection.label}</SectionLabel>
            <InView>
              <p className="mt-10 font-serif text-6xl tracking-[0.08em] md:text-7xl">
                {comfortSection.temperature}
              </p>
              <h2 className="heading-display text-title-section mt-6 max-w-md">
                {comfortSection.title}
              </h2>
              <p className="mt-4 font-serif text-xl text-ink/65">
                {comfortSection.subline}
              </p>
            </InView>
            <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {comfortSection.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink/45"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Link
              href={comfortSection.link.href}
              className="text-link-editorial mt-10 inline-block"
            >
              {comfortSection.link.label} →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
