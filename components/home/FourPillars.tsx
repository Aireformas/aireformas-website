import Link from "next/link";
import { chrome } from "@/content/chrome";
import { homeCopy } from "@/content/home";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getLocale } from "@/lib/locale.server";

const pillarMeta = [
  { icon: "architecture", span: "md:col-span-7", card: "bg-cream-base/90" },
  { icon: "home_work", span: "md:col-span-5", card: "bg-sand-container/90" },
  { icon: "chair", span: "md:col-span-5", card: "bg-sand-container/90" },
  { icon: "air", span: "md:col-span-7", card: "bg-cream-base/90" },
] as const;

export async function FourPillars() {
  const locale = await getLocale();
  const fourPillarsSection = homeCopy[locale].pillars;
  const homePillars = fourPillarsSection.items;
  const ui = chrome[locale];
  return (
    <section className="bg-sand-panel py-space-2xl text-ink-primary px-margin-mobile md:px-margin">
      <div className="mx-auto max-w-7xl">
        <div className="mb-space-xl max-w-2xl">
          <span className="mb-2 block text-label-uppercase font-semibold text-deep-brown">
            {fourPillarsSection.label}
          </span>
          <h2 className="text-headline-lg">{fourPillarsSection.title}</h2>
          <p className="mt-3 text-body-md text-on-surface-variant">
            {fourPillarsSection.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {homePillars.map((pillar, index) => {
            const meta = pillarMeta[index];
            if (!meta) return null;
            return (
              <div
                key={pillar.title}
                className={`${meta.span} flex flex-col justify-between rounded-editorial border border-white/30 p-8 backdrop-blur md:p-10 ${meta.card}`}
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-label-uppercase text-warm-label">
                      {pillar.eyebrow}
                    </span>
                    <MaterialIcon name={meta.icon} className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-headline-md mb-4 font-light">{pillar.title}</h3>
                  <p className="mb-6 max-w-lg text-body-md text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
                {pillar.href ? (
                  <div className="flex items-center justify-end border-t border-outline/15 pt-6">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center space-x-1 text-label-uppercase text-primary transition-colors hover:text-slate-deep"
                    >
                      <span>{ui.discover}</span>
                      <MaterialIcon name="arrow_forward" className="text-xs" />
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
