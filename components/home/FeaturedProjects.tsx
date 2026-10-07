import Link from "next/link";
import {
  homeFeaturedProjects,
  homeProjectsSection,
} from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PortfolioProjectsList } from "@/components/shared/PortfolioProjectsList";

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

        <PortfolioProjectsList projects={homeFeaturedProjects} />
      </Container>
    </section>
  );
}
