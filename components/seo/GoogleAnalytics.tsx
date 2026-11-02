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
      setTrackPageViews(analyticsAllowed());
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
