"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-brand-secondary text-white">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo size="header" onNavigate={() => setOpen(false)} />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {mainNav.slice(0, 3).map((item) => {
            if (!item.href) return null;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-normal transition-colors duration-200",
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-white/50 hover:text-white/85",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="group relative">
            <button
              type="button"
              className="rounded-full px-3.5 py-1.5 text-sm font-normal text-white/50 transition-colors duration-200 hover:text-white/85"
              aria-haspopup="true"
            >
              Más servicios
            </button>
            <div className="invisible absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[240px] rounded-[var(--radius-card)] border border-white/10 bg-brand-secondary p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="space-y-0.5">
                {mainNav.slice(3).map((item) => (
                  <li key={item.label}>
                    {item.comingSoon || !item.href ? (
                      <span className="flex items-center justify-between rounded-[var(--radius-image)] px-3 py-2.5 text-sm text-white/45">
                        {item.label}
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
                          Próximamente
                        </span>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-[var(--radius-image)] px-3 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/8"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-full border border-white/20 bg-white/95 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-white lg:inline-flex"
          >
            Presupuesto
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
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
          className="border-t border-white/10 bg-brand-secondary lg:hidden"
          aria-label="Móvil"
        >
          <div className="container-site py-4">
            <ul className="space-y-0.5">
              {mainNav.map((item) => (
                <li key={item.label}>
                  {item.comingSoon || !item.href ? (
                    <span className="flex items-center justify-between rounded-[var(--radius-image)] px-3 py-3 text-sm text-white/45">
                      {item.label}
                      <span className="font-mono text-[9px] uppercase tracking-widest">
                        Próximamente
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-[var(--radius-image)] px-3 py-3 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-white/12 text-white"
                          : "text-white/75 hover:bg-white/6",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="#contacto"
                  className="flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  Pide presupuesto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
