import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "public", "logo-isotipo@2x.png");
const brand = { r: 27, g: 44, b: 74, alpha: 1 };

/** Isotipo sólido blanco, misma silueta que el PNG de marca */
async function whiteLogoPng(size) {
  const alpha = await sharp(src)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .ensureAlpha()
    .extractChannel("alpha")
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .joinChannel(alpha)
    .png()
    .toBuffer();
}

async function iconBuffer(size, padding = 0.14) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await whiteLogoPng(inner);
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: brand,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

await mkdir(path.join(root, "public", "icons"), { recursive: true });
await mkdir(path.join(root, "app"), { recursive: true });

await sharp(await iconBuffer(32, 0.16)).toFile(path.join(root, "app", "icon.png"));
await sharp(await iconBuffer(180)).toFile(path.join(root, "app", "apple-icon.png"));
await sharp(await iconBuffer(192)).toFile(path.join(root, "public", "icons", "icon-192.png"));
await sharp(await iconBuffer(512)).toFile(path.join(root, "public", "icons", "icon-512.png"));
await sharp(await iconBuffer(512, 0.22)).toFile(
  path.join(root, "public", "icons", "icon-512-maskable.png"),
);

await sharp(await iconBuffer(16, 0.12)).toFile(
  path.join(root, "public", "icons", "favicon-16x16.png"),
);
await sharp(await iconBuffer(32, 0.16)).toFile(
  path.join(root, "public", "icons", "favicon-32x32.png"),
);

const ogLogo = await whiteLogoPng(320);
const og = sharp({
  create: { width: 1200, height: 630, channels: 4, background: brand },
}).composite([{ input: ogLogo, gravity: "centre" }]);

await og.clone().png().toFile(path.join(root, "app", "opengraph-image.png"));
await og.clone().png().toFile(path.join(root, "app", "twitter-image.png"));

console.log("Icons generated (white isotipo on brand background)");
