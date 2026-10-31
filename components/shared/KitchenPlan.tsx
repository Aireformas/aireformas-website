import type { CatalogPlanKind } from "@/lib/types";

type KitchenPlanProps = {
  kind: CatalogPlanKind;
  label: string;
};

export function KitchenPlan({ kind, label }: KitchenPlanProps) {
  return (
    <figure className="w-[min(72vw,260px)] sm:w-60 md:w-70">
      <div className="flex aspect-4/5 items-center justify-center rounded-editorial border border-outline/12 bg-sand-container text-ink-primary">
        <svg viewBox="0 0 120 120" className="h-28 w-28 md:h-32 md:w-32" aria-hidden="true">
          <PlanShape kind={kind} />
        </svg>
      </div>
      <figcaption className="mt-2.5 text-body-sm font-light text-on-surface-variant">
        {label}
      </figcaption>
    </figure>
  );
}

function PlanShape({ kind }: { kind: CatalogPlanKind }) {
  if (kind === "line") {
    return <rect x="14" y="78" width="92" height="16" rx="1" fill="currentColor" />;
  }
  if (kind === "parallel") {
    return (
      <>
        <rect x="14" y="22" width="92" height="16" rx="1" fill="currentColor" />
        <rect x="14" y="82" width="92" height="16" rx="1" fill="currentColor" />
      </>
    );
  }
  if (kind === "l") {
    return (
      <>
        <rect x="14" y="22" width="16" height="76" rx="1" fill="currentColor" />
        <rect x="14" y="82" width="92" height="16" rx="1" fill="currentColor" />
      </>
    );
  }
  if (kind === "u") {
    return (
      <>
        <rect x="14" y="22" width="16" height="76" rx="1" fill="currentColor" />
        <rect x="90" y="22" width="16" height="76" rx="1" fill="currentColor" />
        <rect x="14" y="82" width="92" height="16" rx="1" fill="currentColor" />
      </>
    );
  }
  return (
    <>
      <rect x="14" y="82" width="92" height="16" rx="1" fill="currentColor" />
      <rect x="46" y="36" width="28" height="62" rx="1" fill="currentColor" />
    </>
  );
}
