import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "public", "logo-airereformas-transparent.png");
const cream = { r: 244, g: 241, b: 236, alpha: 1 };

/** Isotipo (marca, sin wordmark) recortado del logo transparente. */
async function markPng() {
  return sharp(src).extract({ left: 91, top: 48, width: 298, height: 216 }).png().toBuffer();
}

async function iconBuffer(size, padding = 0.16) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(await markPng())
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  return sharp({
    create: { width: size, height: size, channels: 4, background: cream },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

await mkdir(path.join(root, "public", "icons"), { recursive: true });

await sharp(await iconBuffer(32, 0.12)).toFile(path.join(root, "app", "icon.png"));
await sharp(await iconBuffer(180)).toFile(path.join(root, "public", "apple-icon.png"));
await sharp(await iconBuffer(192)).toFile(path.join(root, "public", "icons", "icon-192.png"));
await sharp(await iconBuffer(512)).toFile(path.join(root, "public", "icons", "icon-512.png"));
await sharp(await iconBuffer(512, 0.22)).toFile(
  path.join(root, "public", "icons", "icon-512-maskable.png"),
);
await sharp(await iconBuffer(16, 0.1)).toFile(
  path.join(root, "public", "icons", "favicon-16x16.png"),
);
await sharp(await iconBuffer(32, 0.12)).toFile(
  path.join(root, "public", "icons", "favicon-32x32.png"),
);

console.log("Icons generated from logo isotipo");
