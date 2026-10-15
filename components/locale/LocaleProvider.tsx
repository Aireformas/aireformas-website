"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { LOCALE_STORAGE_KEY, type SiteLocale } from "@/lib/i18n";

const LocaleContext = createContext<SiteLocale>("es");

type LocaleProviderProps = {
  locale: SiteLocale;
  children: ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): SiteLocale {
  return useContext(LocaleContext);
}
