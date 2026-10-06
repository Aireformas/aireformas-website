import Link from "next/link";
import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-brand-secondary text-white">
      <Container className="section-y !py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="footer" />
            <p className="mt-4 max-w-xs text-sm text-white/50">{site.tagline}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Navegación
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.label}>
                  {item.comingSoon || !item.href ? (
                    <span className="text-white/45">
                      {item.label}{" "}
                      <span className="font-mono text-[9px] uppercase tracking-widest">
                        · Próximamente
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/55 transition-colors hover:text-white/90"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              <li>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-white/40 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2">
          <p>{site.copyright}</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <Link href="/legal/terminos" className="hover:text-white/65">
              Términos
            </Link>
            <span aria-hidden>·</span>
            <Link href="/legal/privacidad" className="hover:text-white/65">
              Privacidad
            </Link>
            <span aria-hidden>·</span>
            <Link href="/legal/cookies" className="hover:text-white/65">
              Cookies
            </Link>
            <span aria-hidden>·</span>
            <CookieSettingsLink className="hover:text-white/65">
              Configurar cookies
            </CookieSettingsLink>
          </p>
        </div>
      </Container>
    </footer>
  );
}
