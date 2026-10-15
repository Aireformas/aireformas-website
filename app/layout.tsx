import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LocaleProvider } from "@/components/locale/LocaleProvider";
import {
  JsonLd,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/components/seo/JsonLd";
import { site, siteCopy } from "@/content/site";
import { getLocale } from "@/lib/locale.server";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = siteCopy[locale];
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: copy.tagline,
    applicationName: site.name,
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: site.name,
      statusBarStyle: "default",
    },
    icons: {
      icon: [
        { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      locale: locale === "en" ? "en_GB" : "es_ES",
      type: "website",
      siteName: site.name,
      title: site.name,
      description: copy.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: copy.tagline,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#5A7C93",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} scroll-smooth h-full`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <LocaleProvider locale={locale}>
          <JsonLd data={[organizationJsonLd(locale), webSiteJsonLd(locale)]} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
