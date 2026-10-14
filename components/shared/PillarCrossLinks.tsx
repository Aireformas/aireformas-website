import Link from "next/link";
import type { ReactNode } from "react";

type PillarCrossLinksProps = {
  children: ReactNode;
};

export function PillarCrossLinks({ children }: PillarCrossLinksProps) {
  return (
    <p className="mt-10 max-w-2xl text-body-md font-light text-on-surface-variant">
      {children}
    </p>
  );
}

type PillarCrossLinkProps = {
  href: string;
  children: ReactNode;
};

export function PillarCrossLink({ href, children }: PillarCrossLinkProps) {
  return (
    <Link
      href={href}
      className="text-label-uppercase text-primary transition-colors hover:text-slate-deep"
    >
      {children}
    </Link>
  );
}
