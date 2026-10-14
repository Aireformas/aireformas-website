import Image from "next/image";
import Link from "next/link";
import {
  homeFeaturedProjects,
  homeProjectsSection,
} from "@/content/home";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function FeaturedProjects() {
  return (
    <section
      className="bg-cream-base py-space-2xl px-margin-mobile md:px-margin"
      id="proyectos"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-space-lg flex flex-col justify-between border-b border-outline/15 pb-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-label-uppercase text-warm-label">
              03 / PROYECTOS SELECCIONADOS
            </span>
            <h2 className="text-headline-lg text-ink-primary">
              {homeProjectsSection.title}
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="mt-4 inline-flex items-center space-x-2 text-label-uppercase text-primary transition-colors hover:text-slate-deep md:mt-0"
          >
            <span>Ver todos</span>
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>

        <div className="space-y-space-2xl">
          {homeFeaturedProjects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12"
              >
                <div
                  className={`group overflow-hidden rounded-editorial border border-outline/15 md:col-span-8 ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1200}
                    height={800}
                    className="h-[460px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div
                  className={`md:col-span-4 ${reversed ? "md:order-1 md:pr-6" : "md:pl-6"}`}
                >
                  <span className="mb-2 block text-label-uppercase text-warm-label">
                    {project.location}
                  </span>
                  <h3 className="text-headline-md mb-3 font-light text-ink-primary">
                    {project.typology}
                  </h3>
                  <div className="flex items-center space-x-6 border-t border-outline/20 pt-4 text-body-sm text-outline">
                    <span>{project.location}</span>
                    <span aria-hidden>•</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
