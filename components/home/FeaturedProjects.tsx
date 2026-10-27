import Link from "next/link";
import { chrome } from "@/content/chrome";
import { homeCopy } from "@/content/home";
import { homeGalleryItems, proyectosCopy } from "@/content/proyectos";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ProjectMasonry } from "@/components/shared/ProjectMasonry";
import { getLocale } from "@/lib/locale.server";

export async function FeaturedProjects() {
  const locale = await getLocale();
  const homeProjectsSection = homeCopy[locale].projects;
  const gallery = homeGalleryItems(proyectosCopy[locale].gallery);
  const ui = chrome[locale];

  return (
    <section
      className="bg-sand-container py-space-2xl px-margin-mobile md:px-margin"
      id="proyectos"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-space-lg flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mb-2 block text-label-uppercase text-warm-label">
              {homeProjectsSection.label}
            </span>
            <h2 className="text-headline-lg text-ink-primary">
              {homeProjectsSection.title}
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2 self-start text-label-uppercase text-primary transition-colors hover:text-slate-deep md:self-auto"
          >
            <span>{ui.viewAll}</span>
            <MaterialIcon
              name="arrow_forward"
              className="text-sm transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <ProjectMasonry
          items={gallery}
          href="/proyectos"
          priorityCount={2}
          desktopColumns={3}
          variant="pack"
          accent="editorial"
        />
      </div>
    </section>
  );
}
