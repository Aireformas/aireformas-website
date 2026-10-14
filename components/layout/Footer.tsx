import Link from "next/link";
import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-margin-mobile py-space-2xl md:px-margin">
        <div className="grid grid-cols-1 items-start gap-gutter border-b border-white/10 pb-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="footer" variant="white" />
            <p className="mt-6 max-w-sm text-body-sm font-light text-white/70">
              {site.shortTagline}
            </p>
            <p className="mt-4 text-label-uppercase text-white/50">
              {site.brandLine.toUpperCase()}
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="mb-4 block text-label-uppercase text-white/40">
              Navegación
            </span>
            <ul className="grid grid-cols-2 gap-y-2.5 text-body-sm">
              {footerNav.map((item) =>
                item.href ? (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="mb-4 block text-label-uppercase text-white/40">
              Contacto
            </span>
            <p className="mb-1 text-body-sm text-white/80">
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <p className="mb-3 text-body-sm text-white/80">
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="text-body-sm text-white/60">{site.address}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-body-sm text-white/60 md:flex-row">
          <p>{site.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 text-label-uppercase text-white/70">
            <Link href="/legal/terminos" className="hover:text-white">
              Términos
            </Link>
            <Link href="/legal/privacidad" className="hover:text-white">
              Privacidad
            </Link>
            <Link href="/legal/cookies" className="hover:text-white">
              Cookies
            </Link>
            <CookieSettingsLink className="hover:text-white">
              Configurar cookies
            </CookieSettingsLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
