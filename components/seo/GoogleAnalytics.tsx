"use client";

import Script from "next/script";
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

function sendPageView(url: string): void {
  if (typeof window.gtag !== "function" || !measurementId) {
    return;
  }
  window.gtag("config", measurementId, {
    page_path: url,
  });
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const sync = () => {
      setAnalyticsEnabled(analyticsAllowed());
    };
    sync();
    window.addEventListener(CONSENT_UPDATED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!analyticsEnabled) {
      return;
    }
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    sendPageView(path);
  }, [analyticsEnabled, pathname, searchParams]);

  if (!analyticsEnabled || !measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
