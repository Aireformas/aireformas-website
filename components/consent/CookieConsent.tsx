"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { cookieBanner, cookiePreferences } from "@/content/cookies";
import {
  COOKIE_SETTINGS_EVENT,
  type CookieConsentChoice,
  type CookieConsentState,
  consentFromChoice,
  persistConsent,
  readStoredConsent,
} from "@/lib/cookies/consent";
import { cn } from "@/lib/cn";

type Panel = "banner" | "preferences" | null;

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-7 w-12 shrink-0 rounded-full border transition-colors",
        disabled
          ? "cursor-not-allowed border-white/15 bg-white/10"
          : "border-white/25 bg-white/10 hover:border-white/40",
        checked && !disabled && "border-white/50 bg-white/25",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
          checked && "translate-x-5",
        )}
      />
    </button>
  );
}

export function CookieConsent() {
  const titleId = useId();
  const [panel, setPanel] = useState<Panel>(null);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const applyConsent = useCallback((choice: CookieConsentChoice, custom?: CookieConsentState) => {
    const state =
      choice === "custom" && custom
        ? custom
        : consentFromChoice(choice, { analytics, marketing });
    persistConsent(state);
    setPanel(null);
    window.dispatchEvent(
      new CustomEvent("aireformas:consent-updated", { detail: state }),
    );
  }, [analytics, marketing]);

  useEffect(() => {
    const stored = readStoredConsent();
    setHydrated(true);
    if (!stored) {
      setPanel("banner");
      return;
    }
    setAnalytics(stored.analytics);
    setMarketing(stored.marketing);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const stored = readStoredConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setPanel("preferences");
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  if (!hydrated || panel === null) {
    return null;
  }

  const isBanner = panel === "banner";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-brand-secondary p-5 text-white shadow-2xl md:p-6">
        <p
          id={titleId}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50"
        >
          {isBanner ? cookieBanner.title : cookiePreferences.title}
        </p>

        {isBanner ? (
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {cookieBanner.description}{" "}
            <Link href="/legal/cookies" className="underline underline-offset-2 hover:text-white">
              {cookieBanner.policyLink}
            </Link>
            {" · "}
            <Link href="/legal/privacidad" className="underline underline-offset-2 hover:text-white">
              {cookieBanner.privacyLink}
            </Link>
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            <li className="flex gap-4 border-b border-white/10 pb-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{cookiePreferences.necessary.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  {cookiePreferences.necessary.description}
                </p>
              </div>
              <Toggle
                checked
                disabled
                onChange={() => undefined}
                label={cookiePreferences.necessary.title}
              />
            </li>
            <li className="flex gap-4 border-b border-white/10 pb-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{cookiePreferences.analytics.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  {cookiePreferences.analytics.description}
                </p>
              </div>
              <Toggle
                checked={analytics}
                onChange={setAnalytics}
                label={cookiePreferences.analytics.title}
              />
            </li>
            <li className="flex gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{cookiePreferences.marketing.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  {cookiePreferences.marketing.description}
                </p>
              </div>
              <Toggle
                checked={marketing}
                onChange={setMarketing}
                label={cookiePreferences.marketing.title}
              />
            </li>
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2 md:gap-3">
          {isBanner ? (
            <>
              <button
                type="button"
                onClick={() => applyConsent("all")}
                className="rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium text-brand-secondary transition-opacity hover:opacity-90"
              >
                {cookieBanner.acceptAll}
              </button>
              <button
                type="button"
                onClick={() => applyConsent("necessary")}
                className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60"
              >
                {cookieBanner.rejectOptional}
              </button>
              <button
                type="button"
                onClick={() => setPanel("preferences")}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-white/70 underline-offset-2 hover:text-white hover:underline"
              >
                {cookieBanner.configure}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() =>
                  applyConsent("custom", consentFromChoice("custom", { analytics, marketing }))
                }
                className="rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium text-brand-secondary transition-opacity hover:opacity-90"
              >
                {cookiePreferences.save}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (readStoredConsent()) {
                    setPanel(null);
                  } else {
                    setPanel("banner");
                  }
                }}
                className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60"
              >
                {cookiePreferences.close}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
