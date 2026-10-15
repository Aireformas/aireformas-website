"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { useLocale } from "@/components/locale/LocaleProvider";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { chrome } from "@/content/chrome";
import { headerCta, headerNav, isNavGroup } from "@/content/navigation";
import { cn } from "@/lib/cn";
import {
  isSiteLocale,
  LOCALE_STORAGE_KEY,
  writeLocaleCookie,
  type SiteLocale,
} from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const ui = chrome[locale];
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (!isSiteLocale(stored) || stored === locale) return;
    writeLocaleCookie(stored);
    router.refresh();
  }, [locale, router]);

  function chooseLocale(next: SiteLocale) {
    if (next === locale) return;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    writeLocaleCookie(next);
    document.documentElement.lang = next;
    router.refresh();
  }

  function closeMenus() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-margin-mobile md:px-margin">
        <Logo size="header" variant="default" onNavigate={closeMenus} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label={ui.mainNav}>
          {headerNav.map((entry) => {
            if (isNavGroup(entry)) {
              const active = entry.items.some((item) => pathname === item.href);
              return (
                <div key={entry.label.es} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-0.5 text-label-uppercase transition-colors",
                      active
                        ? "border-b border-primary pb-0.5 text-primary"
                        : "text-on-surface-variant hover:text-ink-primary",
                    )}
                    aria-haspopup="true"
                  >
                    {entry.label[locale]}
                    <MaterialIcon
                      name="expand_more"
                      className="text-[1.05rem] leading-none transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="min-w-44 rounded-editorial border border-outline-variant/30 bg-surface/95 py-2 shadow-sm backdrop-blur-md">
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block px-4 py-2 text-label-uppercase transition-colors",
                              pathname === item.href
                                ? "text-primary"
                                : "text-on-surface-variant hover:text-ink-primary",
                            )}
                          >
                            {item.label[locale]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            const active = pathname === entry.href;
            return (
              <Link
                key={entry.href}
                href={entry.href}
                className={cn(
                  "text-label-uppercase transition-colors",
                  active
                    ? "border-b border-primary pb-0.5 text-primary"
                    : "text-on-surface-variant hover:text-ink-primary",
                )}
              >
                {entry.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher locale={locale} onChange={chooseLocale} />

          <Link
            href="/contacto"
            className="hidden items-center justify-center rounded-full bg-slate-accent px-6 py-2.5 text-label-uppercase text-surface transition-colors hover:bg-slate-deep lg:inline-flex"
          >
            {headerCta[locale]}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-outline-variant/30 bg-surface lg:hidden"
          aria-label={ui.mobileNav}
        >
          <ul className="space-y-1 px-margin-mobile py-4">
            {headerNav.map((entry) => {
              if (isNavGroup(entry)) {
                return (
                  <li key={entry.label.es}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-label-uppercase text-on-surface-variant"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      {entry.label[locale]}
                      <MaterialIcon
                        name="expand_more"
                        className={cn(
                          "text-[1.05rem] transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {servicesOpen ? (
                      <ul className="pb-2 pl-3">
                        {entry.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block py-2 text-label-uppercase",
                                pathname === item.href
                                  ? "text-primary"
                                  : "text-on-surface-variant",
                              )}
                              onClick={closeMenus}
                            >
                              {item.label[locale]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              }

              return (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    className={cn(
                      "block py-2.5 text-label-uppercase",
                      pathname === entry.href
                        ? "text-primary"
                        : "text-on-surface-variant",
                    )}
                    onClick={closeMenus}
                  >
                    {entry.label[locale]}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contacto"
                className="inline-flex rounded-full bg-slate-accent px-5 py-2.5 text-label-uppercase text-white"
                onClick={closeMenus}
              >
                {headerCta[locale]}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
