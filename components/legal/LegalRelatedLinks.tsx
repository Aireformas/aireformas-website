import Link from "next/link";

const links = [
  { href: "/legal/terminos", label: "Términos y condiciones" },
  { href: "/legal/privacidad", label: "Política de privacidad" },
  { href: "/legal/cookies", label: "Política de cookies" },
] as const;

type LegalRelatedLinksProps = {
  currentPath: string;
};

export function LegalRelatedLinks({ currentPath }: LegalRelatedLinksProps) {
  const items = links.filter((link) => link.href !== currentPath);
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Documentos legales relacionados"
      className="mt-14 border-t border-ink/10 pt-8"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
        También te puede interesar
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
