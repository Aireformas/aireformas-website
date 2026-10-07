import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { InView } from "@/components/motion/InView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
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

export default function ProyectosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Proyectos", href: "/proyectos" },
        ]}
      />
      <PageHero
        label={proyectosHero.label}
        title={proyectosHero.title}
        description={proyectosHero.description}
        image={proyectosHero.image}
        layout="editorial"
        cta={{ label: "Hablar de mi proyecto", href: "/contacto" }}
      />

      <section className="section-y bg-paper text-ink">
        <Container>
          <SectionLabel variant="light">PORTFOLIO</SectionLabel>
          <div className="mt-10 grid gap-8 md:gap-12">
            {projectCards.map((project, index) => (
              <InView key={project.slug} staggerIndex={index}>
                <article className="grid gap-6 lg:grid-cols-12 lg:items-end">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:col-span-8 lg:aspect-[16/10]">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:col-span-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                      {project.location}
                    </p>
                    <h2 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">
                      {project.typology}
                    </h2>
                    <p className="mt-2 text-sm text-ink/60">{project.area}</p>
                    {project.href ? (
                      <Link
                        href={project.href}
                        className="mt-6 inline-block border-b border-ink/30 pb-1 text-xs font-medium uppercase tracking-widest"
                      >
                        Ver proyecto
                      </Link>
                    ) : (
                      <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        Ficha próximamente
                      </span>
                    )}
                  </div>
                </article>
              </InView>
            ))}
          </div>
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
