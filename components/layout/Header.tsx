"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-margin-mobile md:px-margin">
        <Logo
          size="header"
          variant="default"
          onNavigate={() => setOpen(false)}
        />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {mainNav.map((item) => {
            if (!item.href) return null;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-label-uppercase transition-colors",
                  active
                    ? "border-b border-primary pb-0.5 text-primary"
                    : "text-on-surface-variant hover:text-ink-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher className="hidden sm:flex" />

          <Link
            href="/contacto"
            className="hidden items-center justify-center rounded-full bg-slate-accent px-6 py-2.5 text-label-uppercase text-surface transition-colors hover:bg-slate-deep lg:inline-flex"
          >
            Hablar de mi proyecto
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
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
          className="border-t border-outline-variant/30 bg-surface md:hidden"
          aria-label="Móvil"
        >
          <ul className="space-y-1 px-margin-mobile py-4">
            {mainNav.map((item) =>
              item.href ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2.5 text-label-uppercase",
                      pathname === item.href
                        ? "text-primary"
                        : "text-on-surface-variant",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : null,
            )}
            <li className="pt-2">
              <Link
                href="/contacto"
                className="inline-flex rounded-full bg-slate-accent px-5 py-2.5 text-label-uppercase text-white"
                onClick={() => setOpen(false)}
              >
                Hablar de mi proyecto
              </Link>
            </li>
            <li className="border-t border-outline-variant/20 pt-4 sm:hidden">
              <LanguageSwitcher onNavigate={() => setOpen(false)} />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
