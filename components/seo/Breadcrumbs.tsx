import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  embedded?: boolean;
};

export function Breadcrumbs({ items, embedded = false }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav
        aria-label="Breadcrumb"
        className={
          embedded
            ? "mb-6 font-mono text-[10px] uppercase tracking-[0.2em]"
            : "container-site pb-2 pt-20 lg:pt-24"
        }
      >
        <ol
          className={
            embedded
              ? "flex flex-wrap items-center gap-2 text-ink/45"
              : "flex flex-wrap items-center gap-2 text-xs text-ink/50"
          }
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden className="text-ink/30">
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span className="text-ink/70">{item.name}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-ink"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
