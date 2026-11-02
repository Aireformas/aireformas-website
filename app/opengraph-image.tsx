import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.shortTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public", site.logo.src.replace(/^\//, "")),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 80px",
          background: "#F4F1EC",
          color: "#2E2A26",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={520}
          height={Math.round((520 * site.logo.height) / site.logo.width)}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 36,
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Espacios pensados al detalle
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            lineHeight: 1.45,
            textAlign: "center",
            maxWidth: 820,
            color: "#5E5247",
          }}
        >
          {site.shortTagline}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5A7C93",
          }}
        >
          {site.brandLine}
        </div>
      </div>
    ),
    { ...size },
  );
}
