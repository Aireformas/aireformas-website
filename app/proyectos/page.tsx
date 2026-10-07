import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { PageHero } from "@/components/shared/PageHero";
import { PortfolioProjectsList } from "@/components/shared/PortfolioProjectsList";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  projectCards,
  proyectosCta,
  proyectosHero,
  proyectosMeta,
} from "@/content/proyectos";

export const metadata: Metadata = {
  title: proyectosMeta.title,
  description: proyectosMeta.description,
  openGraph: {
    title: proyectosMeta.title,
    description: proyectosMeta.description,
  },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
] as const;

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[...breadcrumbs]}
        label={proyectosHero.label}
        title={proyectosHero.title}
        description={proyectosHero.description}
        image={proyectosHero.image}
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">PORTFOLIO</SectionLabel>
          <InView>
            <h2 className="heading-display text-title-section mt-8 max-w-2xl">
              Viviendas recientes
            </h2>
          </InView>
          <PortfolioProjectsList projects={projectCards} />
        </Container>
      </section>

      <ContactCTA
        label="CONTACTO"
        title={proyectosCta.title}
        description={proyectosCta.description}
        variant="light"
      />
    </>
  );
}
