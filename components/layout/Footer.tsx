import Link from "next/link";
import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-accent text-white">
      <Container className="section-y !py-16 md:!py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo size="footer" variant="white" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {site.shortTagline}
            </p>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
              {site.brandLine}
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Navegación
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              {footerNav.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Contacto
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/65">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2">
          <p>{site.copyright}</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <Link href="/legal/terminos" className="hover:text-white/70">
              Términos
            </Link>
            <span aria-hidden>·</span>
            <Link href="/legal/privacidad" className="hover:text-white/70">
              Privacidad
            </Link>
            <span aria-hidden>·</span>
            <Link href="/legal/cookies" className="hover:text-white/70">
              Cookies
            </Link>
            <span aria-hidden>·</span>
            <CookieSettingsLink className="hover:text-white/70">
              Configurar cookies
            </CookieSettingsLink>
          </p>
        </div>
      </Container>
    </footer>
  );
}
