export type SiteLocale = "es" | "en";

export const LOCALE_COOKIE = "aireformas-locale";
export const LOCALE_STORAGE_KEY = "aireformas-locale";

export function isSiteLocale(value: string | null | undefined): value is SiteLocale {
  return value === "es" || value === "en";
}

export function defineCopy<T>(copy: Record<SiteLocale, T>): Record<SiteLocale, T> {
  return copy;
}

export function writeLocaleCookie(locale: SiteLocale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
