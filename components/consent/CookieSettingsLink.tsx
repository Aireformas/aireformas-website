"use client";

import type { ReactNode } from "react";
import { openCookieSettings } from "@/lib/cookies/consent";

type CookieSettingsLinkProps = {
  className?: string;
  children: ReactNode;
};

export function CookieSettingsLink({ className, children }: CookieSettingsLinkProps) {
  return (
    <button type="button" onClick={() => openCookieSettings()} className={className}>
      {children}
    </button>
  );
}
