import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#F5F2ED",
          color: "#2C2824",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 52,
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: 920,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Espacios pensados al detalle
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 20,
            lineHeight: 1.45,
            maxWidth: 780,
            opacity: 0.7,
          }}
        >
          {site.shortTagline}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#1b2c4a",
            opacity: 0.85,
          }}
        >
          Interior Design · Renovation · Furniture · Climate
        </div>
      </div>
    ),
    { ...size },
  );
}
