import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Mono, Inter } from "next/font/google";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  JsonLd,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
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
    locale: "es_ES",
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2c4a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} ${dmMono.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
