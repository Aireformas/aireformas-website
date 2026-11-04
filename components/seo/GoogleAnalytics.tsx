"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CONSENT_UPDATED_EVENT,
  readStoredConsent,
} from "@/lib/cookies/consent";
import { getGoogleAnalyticsMeasurementId } from "@/lib/google/analytics";

const measurementId = getGoogleAnalyticsMeasurementId();

function analyticsAllowed(): boolean {
  return Boolean(measurementId && readStoredConsent()?.analytics);
}

function syncGtagConsent(): void {
  if (typeof window.gtag !== "function") {
    return;
  }
  const stored = readStoredConsent();
  window.gtag("consent", "update", {
    analytics_storage: stored?.analytics ? "granted" : "denied",
    ad_storage: stored?.marketing ? "granted" : "denied",
    ad_user_data: stored?.marketing ? "granted" : "denied",
    ad_personalization: stored?.marketing ? "granted" : "denied",
  });
}

function ensureGtagScript(): void {
  if (!measurementId || typeof document === "undefined") {
    return;
  }
  const src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  if (document.querySelector(`script[src="${src}"]`)) {
    return;
  }
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function sendPageView(url: string): void {
  if (typeof window.gtag !== "function" || !measurementId || !analyticsAllowed()) {
    return;
  }
  window.gtag("config", measurementId, {
    page_path: url,
  });
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [trackPageViews, setTrackPageViews] = useState(false);

  useEffect(() => {
    const sync = () => {
      syncGtagConsent();
      const allowed = analyticsAllowed();
      if (allowed) {
        ensureGtagScript();
      }
      setTrackPageViews(allowed);
    };
    sync();
    window.addEventListener(CONSENT_UPDATED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!trackPageViews) {
      return;
    }
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    sendPageView(path);
  }, [trackPageViews, pathname, searchParams]);

  return null;
}
