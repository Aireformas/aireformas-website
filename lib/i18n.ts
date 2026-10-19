export type SiteLocale = "es" | "en";

export const LOCALE_COOKIE = "aireformas-locale";
export const LOCALE_STORAGE_KEY = "aireformas-locale";

export function isSiteLocale(value: string | null | undefined): value is SiteLocale {
  return value === "es" || value === "en";
}

export function defineCopy<T>(copy: Record<SiteLocale, T>): Record<SiteLocale, T> {
  return copy;
}

export function readLocaleCookie(): SiteLocale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE}=(es|en)(?:;|$)`),
  );
  return match && isSiteLocale(match[1]) ? match[1] : null;
}

export function writeLocaleCookie(locale: SiteLocale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
