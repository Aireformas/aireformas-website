import Image from "next/image";
import Link from "next/link";
import { homeServices } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { InView } from "@/components/motion/InView";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServicesGrid() {
  return (
    <section id="servicios" className="section-y bg-paper text-ink">
      <Container>
        <SectionLabel variant="light">SERVICIOS</SectionLabel>
        <InView>
          <h2 className="heading-display text-title-section mt-6 max-w-3xl">
            Soluciones integrales para tu hogar
          </h2>
        </InView>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {homeServices.map((service, index) => {
            const card = (
              <article className="group h-full overflow-hidden rounded-[var(--radius-card)] border border-ink/8 bg-paper text-ink">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {service.title}
                    </h3>
                    {service.comingSoon ? (
                      <span className="shrink-0 font-mono text-[9px] uppercase tracking-widest text-ink/45">
                        Próximamente
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {service.description}
                  </p>
                  {!service.comingSoon && service.href ? (
                    <span className="mt-5 inline-block text-sm font-medium underline-offset-4 group-hover:underline">
                      Ver más
                    </span>
                  ) : null}
                </div>
              </article>
            );

            return (
              <InView key={service.title} staggerIndex={index}>
                {service.comingSoon || !service.href ? (
                  <div className="h-full opacity-90">{card}</div>
                ) : (
                  <Link href={service.href} className="block h-full">
                    {card}
                  </Link>
                )}
              </InView>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
