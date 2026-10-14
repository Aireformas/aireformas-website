import { methodologyPillars, methodologySection } from "@/content/proyectos";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SectionIntro } from "@/components/shared/SectionIntro";

export function ProyectosMethodology() {
  return (
    <section className="bg-sand-container py-space-2xl px-margin-mobile md:px-margin">
      <div className="mx-auto max-w-7xl space-y-space-xl">
        <SectionIntro
          label={methodologySection.label}
          title={methodologySection.title}
          lead={methodologySection.lead}
          className="max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-gutter pt-4 md:grid-cols-3">
          {methodologyPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col justify-between space-y-6 rounded-editorial border border-outline-variant/30 bg-surface p-8"
            >
              <div className="space-y-4">
                <span className="text-numeral-display block text-outline-variant">
                  {pillar.number}
                </span>
                <h3 className="text-headline-sm text-ink-primary">{pillar.title}</h3>
                <p className="text-body-md font-light text-on-surface-variant">
                  {pillar.description}
                </p>
              </div>
              <div className="flex items-center gap-2 border-t border-outline-variant/20 pt-4 text-label-uppercase text-primary">
                <MaterialIcon name={pillar.icon} className="text-sm" />
                <span>{pillar.footnote}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
