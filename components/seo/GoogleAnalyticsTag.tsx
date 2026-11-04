import Script from "next/script";
import { getGoogleAnalyticsMeasurementId } from "@/lib/google/analytics";

export function GoogleAnalyticsTag() {
  const measurementId = getGoogleAnalyticsMeasurementId();
  if (!measurementId) {
    return null;
  }

  return (
    <Script id="google-analytics-consent" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });
        gtag('js', new Date());
      `}
    </Script>
  );
}
