import Link from "next/link";
import { chrome } from "@/content/chrome";
import { getLocale } from "@/lib/locale.server";

type LegalRelatedLinksProps = {
  currentPath: string;
};

export async function LegalRelatedLinks({ currentPath }: LegalRelatedLinksProps) {
  const ui = chrome[await getLocale()];
  const links = [
    { href: "/legal/terminos", label: ui.termsFull },
    { href: "/legal/privacidad", label: ui.privacyFull },
    { href: "/legal/cookies", label: ui.cookiesFull },
  ];
  const items = links.filter((link) => link.href !== currentPath);
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label={ui.legalNav}
      className="mt-14 border-t border-ink/10 pt-8"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
        {ui.legalAlso}
      </p>
      <ul className="mt-3 flex flex-col gap-2 text-sm">
        {items.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-medium underline underline-offset-2 hover:text-ink/75">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
