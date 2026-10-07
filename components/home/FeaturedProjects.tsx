import Image from "next/image";
import Link from "next/link";
import {
  homeFeaturedProjects,
  homeProjectsSection,
} from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedProjects() {
  return (
    <section id="proyectos" className="section-y bg-paper text-ink">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel variant="light">{homeProjectsSection.label}</SectionLabel>
            <InView>
              <h2 className="heading-display text-title-section mt-8 max-w-2xl">
                {homeProjectsSection.title}
              </h2>
            </InView>
          </div>
          <Link
            href="/proyectos"
            className="text-link-editorial mb-1 hidden shrink-0 sm:inline-block"
          >
            Ver todos
          </Link>
        </div>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
          {homeFeaturedProjects.map((project, index) => {
            const offset = index % 2 === 1;
            return (
              <InView key={project.slug} staggerIndex={index}>
                <article className="grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div
                    className={`image-editorial relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[16/9] ${
                      offset
                        ? "lg:col-span-8 lg:col-start-5"
                        : "lg:col-span-8"
                    }`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="image-editorial-target object-cover"
                    />
                  </div>

                  <div
                    className={`flex gap-5 ${
                      offset
                        ? "lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:self-center"
                        : "lg:col-span-3 lg:col-start-10"
                    }`}
                  >
                    <p
                      className="mt-1 hidden shrink-0 font-serif text-[11px] uppercase tracking-[0.32em] text-ink/35 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
                      aria-hidden
                    >
                      {project.location}
                    </p>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40 lg:hidden">
                        {project.location}
                      </p>
                      <h3 className="heading-editorial mt-3 text-3xl md:text-4xl">
                        {project.typology}
                      </h3>
                      <p className="mt-2 text-sm text-ink/50">{project.area}</p>
                      <Link
                        href="/proyectos"
                        className="text-link-editorial mt-6 inline-block"
                      >
                        Ver proyecto
                      </Link>
                    </div>
                  </div>
                </article>
              </InView>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
