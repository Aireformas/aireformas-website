"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale/LocaleProvider";
import { chrome } from "@/content/chrome";
import {
  proyectosCopy,
  type PortfolioProjectFull,
  type ProjectCategory,
  type ProjectFilterId,
} from "@/content/proyectos";
import { cn } from "@/lib/cn";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PageIntro } from "@/components/shared/PageIntro";

function matchesFilter(
  categories: readonly ProjectCategory[],
  filter: ProjectFilterId,
): boolean {
  if (filter === "all") return true;
  return categories.includes(filter);
}

function filterCount(
  filter: ProjectFilterId,
  featuredCategories: readonly ProjectCategory[],
  projects: readonly PortfolioProjectFull[],
): number {
  const featured = matchesFilter(featuredCategories, filter) ? 1 : 0;
  const rest = projects.filter((project) => matchesFilter(project.categories, filter)).length;
  return featured + rest;
}

function ProjectInquiryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b border-primary/40 pb-1 text-label-uppercase text-primary transition-colors hover:text-ink-primary"
    >
      <span>{label}</span>
      <MaterialIcon name="north_east" className="text-xs" />
    </Link>
  );
}

function LargeProjectCard({
  project,
  reversed,
  inquiryLabel,
  areaLabel,
}: {
  project: PortfolioProjectFull;
  reversed: boolean;
  inquiryLabel: string;
  areaLabel: string;
}) {
  const stats =
    project.stats.length > 0 || !project.areaDisplay
      ? project.stats
      : [{ label: areaLabel, value: project.areaDisplay }];

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
      {stats.length > 0 ? (
        <div className="space-y-2 border-t border-outline-variant/30 pt-4">
          {stats.map((stat) => (
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
        <ProjectInquiryLink href={project.inquiryHref ?? "/contacto"} label={inquiryLabel} />
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
  const locale = useLocale();
  const copy = proyectosCopy[locale];
  const ui = chrome[locale].projects;
  const featuredProject = copy.featured;
  const portfolioProjects = copy.projects;
  const projectFilterOptions = copy.filters;
  const proyectosPageIntro = copy.intro;
  const portfolioGridIntro = copy.grid;
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects = useMemo(
    () => portfolioProjects.filter((project) => matchesFilter(project.categories, activeFilter)),
    [portfolioProjects, activeFilter],
  );

  const showFeatured = matchesFilter(featuredProject.categories, activeFilter);
  const wideProjects = filteredProjects.filter((p) => p.layout !== "compact");
  const narrowProjects = filteredProjects.filter((p) => p.layout === "compact");
  const promoteLoneCompact = narrowProjects.length === 1;
  const largeProjects = promoteLoneCompact ? [...wideProjects, ...narrowProjects] : wideProjects;
  const compactProjects = promoteLoneCompact ? [] : narrowProjects;
  const hasResults = showFeatured || filteredProjects.length > 0;

  return (
    <div className="flex flex-col gap-0 bg-cream-base">
      <PageIntro
        label={proyectosPageIntro.label}
        title={proyectosPageIntro.title}
        description={proyectosPageIntro.description}
      >
        <div
          role="group"
          aria-label={ui.filter}
          className="custom-scroll flex items-center gap-2 overflow-x-auto border-b border-outline-variant/30 pb-2 pt-10"
        >
          {projectFilterOptions.map((option) => {
            const isActive = activeFilter === option.id;
            const count = filterCount(option.id, featuredProject.categories, portfolioProjects);
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
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
      </PageIntro>

      {showFeatured ? (
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
      ) : null}

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

        {!hasResults ? (
          <p className="text-body-md font-light text-on-surface-variant">
            {ui.empty}
          </p>
        ) : filteredProjects.length === 0 ? (
          <p className="text-body-md font-light text-on-surface-variant">
            {ui.featuredOnly}
          </p>
        ) : (
          <>
            {largeProjects.length > 0 ? (
              <div className="space-y-space-2xl">
                {largeProjects.map((project, index) => (
                  <LargeProjectCard
                    key={project.slug}
                    project={project}
                    reversed={index % 2 === 1}
                    inquiryLabel={ui.inquiry}
                    areaLabel={ui.area}
                  />
                ))}
              </div>
            ) : null}

            {compactProjects.length > 0 ? (
              <div
                className={cn(
                  "grid grid-cols-1 gap-gutter",
                  largeProjects.length > 0 && "pt-8",
                  compactProjects.length > 1 && "md:grid-cols-2",
                )}
              >
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
