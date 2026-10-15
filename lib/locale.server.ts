import { cookies, headers } from "next/headers";
import { cache } from "react";
import { isSiteLocale, LOCALE_COOKIE, type SiteLocale } from "@/lib/i18n";

export const getLocale = cache(async (): Promise<SiteLocale> => {
  const stored = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isSiteLocale(stored)) return stored;

  const accept = (await headers()).get("accept-language") ?? "";
  const primary = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  return primary.startsWith("en") ? "en" : "es";
});
