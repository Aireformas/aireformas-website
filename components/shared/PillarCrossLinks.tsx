import Link from "next/link";
import type { ReactNode } from "react";

type PillarCrossLinksProps = {
  children: ReactNode;
};

export function PillarCrossLinks({ children }: PillarCrossLinksProps) {
  return (
    <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink/60">{children}</p>
  );
}

type PillarCrossLinkProps = {
  href: string;
  children: ReactNode;
};

export function PillarCrossLink({ href, children }: PillarCrossLinkProps) {
  return (
    <Link href={href} className="text-link-editorial text-ink/70">
      {children}
    </Link>
  );
}
