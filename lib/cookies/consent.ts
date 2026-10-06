export const CONSENT_STORAGE_KEY = "aireformas_cookie_consent";
export const CONSENT_COOKIE_NAME = "aireformas_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_DAYS = 365;

export type CookieConsentState = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export type CookieConsentChoice = "all" | "necessary" | "custom";

export function consentFromChoice(
  choice: CookieConsentChoice,
  custom?: Pick<CookieConsentState, "analytics" | "marketing">,
): CookieConsentState {
  if (choice === "all") {
    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
  }
  if (choice === "necessary") {
    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };
  }
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: custom?.analytics ?? false,
    marketing: custom?.marketing ?? false,
    updatedAt: new Date().toISOString(),
  };
}

export function parseConsent(raw: string | null): CookieConsentState | null {
  if (!raw) {
    return null;
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "version" in parsed &&
      parsed.version === CONSENT_VERSION &&
      "necessary" in parsed &&
      parsed.necessary === true &&
      "analytics" in parsed &&
      typeof parsed.analytics === "boolean" &&
      "marketing" in parsed &&
      typeof parsed.marketing === "boolean" &&
      "updatedAt" in parsed &&
      typeof parsed.updatedAt === "string"
    ) {
      return parsed as CookieConsentState;
    }
  } catch {
    return null;
  }
  return null;
}

export function readConsentFromDocument(): CookieConsentState | null {
  if (typeof document === "undefined") {
    return null;
  }
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!match) {
    return null;
  }
  const value = decodeURIComponent(match.split("=").slice(1).join("="));
  return parseConsent(value);
}

export function persistConsent(state: CookieConsentState): void {
  if (typeof window === "undefined") {
    return;
  }
  const encoded = encodeURIComponent(JSON.stringify(state));
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${CONSENT_COOKIE_NAME}=${encoded}; path=/; max-age=${maxAge}; SameSite=Lax`;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
}

export function readStoredConsent(): CookieConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }
  const fromCookie = readConsentFromDocument();
  if (fromCookie) {
    return fromCookie;
  }
  return parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
}

export const COOKIE_SETTINGS_EVENT = "aireformas:open-cookie-settings";

export function openCookieSettings(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT));
}
