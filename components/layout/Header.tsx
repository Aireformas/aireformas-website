"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { mainNav } from "@/content/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        solid
          ? "border-b border-white/10 bg-accent/95 shadow-[0_8px_32px_rgba(27,44,74,0.28)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-0",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo
          size="header"
          variant="white"
          onNavigate={() => setOpen(false)}
          className={cn(
            "transition-[filter] duration-500",
            !solid && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
          )}
        />

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Principal"
        >
          {mainNav.map((item) => {
            if (!item.href) return null;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 xl:px-3",
                  !solid && "drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]",
                  active
                    ? "text-white underline decoration-white/50 underline-offset-8"
                    : "text-white/75 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className={cn(
              "hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors duration-300 hover:text-white lg:inline-flex",
              !solid && "drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]",
            )}
          >
            Hablar de mi proyecto
          </Link>

          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center text-white/85 transition-colors hover:text-white xl:hidden",
              !solid && "drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]",
            )}
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
          className="border-t border-white/10 bg-accent xl:hidden"
          aria-label="Móvil"
        >
          <div className="container-site py-4">
            <ul className="space-y-0.5">
              {mainNav.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-1 py-3 text-xs uppercase tracking-[0.2em] transition-colors",
                        pathname === item.href
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contacto"
                  className="inline-block border-b border-white/40 pb-1 text-xs font-medium uppercase tracking-[0.18em] text-white"
                  onClick={() => setOpen(false)}
                >
                  Hablar de mi proyecto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
