"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  featuredProject,
  portfolioGridIntro,
  portfolioProjects,
  projectFilterOptions,
  proyectosPageIntro,
  type PortfolioProjectFull,
  type ProjectFilterId,
} from "@/content/proyectos";
import { cn } from "@/lib/cn";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

function projectMatchesFilter(
  project: PortfolioProjectFull,
  filter: ProjectFilterId,
): boolean {
  if (filter === "all") return true;
  return project.categories.includes(filter);
}

function filterCount(filter: ProjectFilterId): number {
  if (filter === "all") return portfolioProjects.length;
  return portfolioProjects.filter((p) => projectMatchesFilter(p, filter)).length;
}

function ProjectInquiryLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b border-primary/40 pb-1 text-label-uppercase text-primary transition-colors hover:text-ink-primary"
    >
      <span>Consultar memoria del proyecto</span>
      <MaterialIcon name="north_east" className="text-xs" />
    </Link>
  );
}

function LargeProjectCard({
  project,
  reversed,
}: {
  project: PortfolioProjectFull;
  reversed: boolean;
}) {
  const imageBlock = (
    <div className={cn("group", reversed ? "md:col-span-8 md:order-2" : "md:col-span-8")}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-editorial bg-sand-container">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover object-[center_42%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 text-label-uppercase text-ink-primary backdrop-blur-sm">
          {project.number}
        </div>
      </div>
    </div>
  );

  const detailsBlock = (
    <div
      className={cn(
        "flex flex-col justify-between space-y-6",
        reversed ? "md:col-span-4 md:order-1 md:pr-6" : "md:col-span-4 md:pl-6",
      )}
    >
      <div className="space-y-3">
        <span className="text-label-uppercase text-tertiary">{project.locationLabel}</span>
        <h3 className="text-headline-md font-light text-ink-primary">{project.title}</h3>
        <p className="text-body-md font-light text-on-surface-variant">
          {project.description}
        </p>
      </div>
      {project.stats.length > 0 ? (
        <div className="space-y-2 border-t border-outline-variant/30 pt-4">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex justify-between text-body-sm"
            >
              <span className="text-outline">{stat.label}</span>
              <span className="font-medium text-ink-primary">{stat.value}</span>
            </div>
          ))}
        </div>
      ) : null}
      <div>
        <ProjectInquiryLink href={project.inquiryHref ?? "/contacto"} />
      </div>
    </div>
  );

  return (
    <article className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
      {reversed ? (
        <>
          {detailsBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {detailsBlock}
        </>
      )}
    </article>
  );
}

function CompactProjectCard({ project }: { project: PortfolioProjectFull }) {
  return (
    <article className="group flex flex-col space-y-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-editorial bg-sand-container">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 text-label-uppercase text-ink-primary backdrop-blur-sm">
          {project.number}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-label-uppercase text-tertiary">{project.locationLabel}</span>
          {project.areaDisplay ? (
            <span className="text-body-sm text-outline">{project.areaDisplay}</span>
          ) : null}
        </div>
        <h3 className="text-headline-sm text-ink-primary">{project.title}</h3>
        <p className="text-body-sm font-light text-on-surface-variant">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function ProyectosPageContent() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects = useMemo(
    () => portfolioProjects.filter((p) => projectMatchesFilter(p, activeFilter)),
    [activeFilter],
  );

  const largeProjects = filteredProjects.filter((p) => p.layout !== "compact");
  const compactProjects = filteredProjects.filter((p) => p.layout === "compact");

  return (
    <div className="flex flex-col gap-0 bg-cream-base pt-28 md:pt-36">
      <section className="mx-auto w-full max-w-7xl px-margin-mobile pb-space-lg pt-6 md:px-margin">
        <div className="flex max-w-3xl flex-col gap-space-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            <span className="text-label-uppercase text-tertiary">
              {proyectosPageIntro.label}
            </span>
          </div>
          <h1 className="text-headline-lg tracking-tight text-ink-primary">
            {proyectosPageIntro.title}
          </h1>
          <p className="mt-1 max-w-2xl text-body-lg font-light text-on-surface-variant">
            {proyectosPageIntro.description}
          </p>
        </div>

        <div className="custom-scroll flex items-center gap-2 overflow-x-auto border-b border-outline-variant/30 pb-2 pt-10">
          {projectFilterOptions.map((option) => {
            const isActive = activeFilter === option.id;
            const count = filterCount(option.id);
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveFilter(option.id)}
                className={cn(
                  "whitespace-nowrap rounded-full px-5 py-2 text-label-uppercase transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-on-surface-variant hover:bg-sand-container hover:text-ink-primary",
                )}
              >
                {option.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-margin-mobile pb-space-2xl md:px-margin">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-editorial bg-sand-container md:aspect-[21/9]">
          <Image
            src={featuredProject.image.src}
            alt={featuredProject.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-primary/80 via-ink-primary/20 to-transparent p-6 text-surface md:p-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-2">
                <span className="text-label-uppercase tracking-widest text-secondary-container">
                  {featuredProject.badge}
                </span>
                <h2 className="text-headline-lg font-light text-white">
                  {featuredProject.title}
                </h2>
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-tertiary-fixed">
                  {featuredProject.meta.map((item, index) => (
                    <li key={item} className="inline-flex items-center gap-6">
                      {index > 0 ? (
                        <span
                          className="inline-block h-1 w-1 rounded-full bg-outline-variant"
                          aria-hidden
                        />
                      ) : null}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={featuredProject.cta.href}
                className="inline-flex items-center gap-2 self-start rounded-full bg-surface px-6 py-3 text-label-uppercase text-ink-primary transition-colors hover:bg-secondary-container hover:text-on-surface-variant md:self-end"
              >
                <span>{featuredProject.cta.label}</span>
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="mx-auto w-full max-w-7xl space-y-space-2xl px-margin-mobile pb-space-2xl md:px-margin"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/30 pb-6 md:flex-row md:items-baseline">
          <div className="space-y-1">
            <span className="text-label-uppercase text-tertiary">
              {portfolioGridIntro.label}
            </span>
            <h2 className="text-headline-md text-ink-primary">
              {portfolioGridIntro.title}
            </h2>
          </div>
          <p className="max-w-sm text-body-sm text-outline">{portfolioGridIntro.lead}</p>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-body-md font-light text-on-surface-variant">
            No hay proyectos en esta categoría por ahora.
          </p>
        ) : (
          <>
            <div className="space-y-space-2xl">
              {largeProjects.map((project) => (
                <LargeProjectCard
                  key={project.slug}
                  project={project}
                  reversed={project.layout === "large-right"}
                />
              ))}
            </div>

            {compactProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-gutter pt-8 md:grid-cols-2">
                {compactProjects.map((project) => (
                  <CompactProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}
