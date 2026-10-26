import { InView } from "@/components/motion/InView";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/cn";

export type ServiceAreaGroup = {
  id: string;
  title: string;
  eyebrow: string;
  places: readonly string[];
};

type ServiceAreaSectionProps = {
  label: string;
  title: string;
  lead: string;
  highlight: string;
  groups: readonly ServiceAreaGroup[];
};

export function ServiceAreaSection({
  label,
  title,
  lead,
  highlight,
  groups,
}: ServiceAreaSectionProps) {
  return (
    <section className="border-t border-outline/15 bg-sand-container py-space-2xl px-margin-mobile text-ink-primary md:px-margin">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionIntro label={label} title={title} />
            <InView>
              <p className="-mt-4 max-w-md text-body-md font-light text-on-surface-variant">
                {lead}
              </p>
            </InView>
          </div>

          <InView className="lg:col-span-7 lg:text-right">
            <p className="text-display-hero leading-none text-primary/90">
              {highlight}
            </p>
          </InView>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {groups.map((group, groupIndex) => (
            <InView key={group.id} staggerIndex={groupIndex}>
              <div className="flex items-baseline justify-between gap-4 border-b border-outline/25 pb-4">
                <div>
                  <span className="text-label-uppercase text-warm-label">
                    {group.eyebrow}
                  </span>
                  <h3 className="mt-2 text-headline-sm font-light">{group.title}</h3>
                </div>
                <span className="text-label-uppercase text-warm-label">
                  {String(group.places.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-2">
                {group.places.map((place, index) => {
                  const featured = index === 0;
                  return (
                    <li key={place}>
                      <div
                        className={cn(
                          "group flex items-baseline justify-between gap-6 border-b border-outline/15 py-4 transition-colors",
                          "hover:border-primary/30",
                        )}
                      >
                        <span
                          className={cn(
                            "font-light tracking-tight transition-colors group-hover:text-primary",
                            featured
                              ? "text-headline-md text-ink-primary"
                              : "text-headline-sm text-ink-primary/90",
                          )}
                        >
                          {place}
                        </span>
                        <span className="shrink-0 text-label-uppercase text-warm-label transition-colors group-hover:text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
