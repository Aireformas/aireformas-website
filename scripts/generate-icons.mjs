import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "public", "logo-airereformas-transparent.png");

/** Slate profundo de marca — apple / maskable. */
const slate = { r: 63, g: 93, b: 115, alpha: 1 };
/** Cream de marca — apple touch (encaja con highlights del isotipo). */
const cream = { r: 244, g: 241, b: 236, alpha: 1 };
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

/**
 * Recorta el isotipo (cuatro cintas) del logo transparente, sin wordmark.
 */
async function markPng() {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const rowCount = (y) => {
    let count = 0;
    for (let x = 0; x < info.width; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] > 12) count += 1;
    }
    return count;
  };

  // Primer hueco horizontal (≥10px) = separación icono / wordmark.
  let seenContent = false;
  let emptyRun = 0;
  let markBottom = Math.floor(info.height * 0.55);
  for (let y = 0; y < info.height; y += 1) {
    const count = rowCount(y);
    if (count >= 10) {
      seenContent = true;
      emptyRun = 0;
      continue;
    }
    if (!seenContent) continue;
    emptyRun += 1;
    if (emptyRun >= 10) {
      markBottom = y - emptyRun + 1;
      break;
    }
  }

  let minX = info.width;
  let minY = info.height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < markBottom; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] <= 12) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  const width = maxX - minX + 1;
  const height = maxY - minY + 1;
  const side = Math.max(width, height);
  const padX = Math.floor((side - width) / 2);
  const padY = Math.floor((side - height) / 2);

  const square = await sharp(src)
    .extract({ left: minX, top: minY, width, height })
    .extend({
      top: padY,
      bottom: side - height - padY,
      left: padX,
      right: side - width - padX,
      background: transparent,
    })
    .png()
    .toBuffer();

  return scrubFringe(square);
}

/** Quita halos claros semi-transparentes del downscale. */
async function scrubFringe(buffer) {
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha === 0) continue;
    if (alpha < 48) {
      data[i + 3] = 0;
      continue;
    }
    const luma = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    // Halo típico al exportar el logo: borde claro semitransparente.
    if (alpha < 210 && luma > 175) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

async function composeIcon(
  size,
  { padding = 0.14, background = transparent, sharpen = true } = {},
) {
  const inner = Math.max(1, Math.round(size * (1 - padding * 2)));
  // Upscale path: render large then downscale for cleaner edges.
  const render = Math.max(inner * 4, 256);
  let logo = sharp(await markPng())
    .resize(render, render, {
      fit: "contain",
      background: transparent,
      kernel: sharp.kernel.lanczos3,
    })
    .resize(inner, inner, {
      fit: "contain",
      background: transparent,
      kernel: sharp.kernel.lanczos3,
    });

  if (sharpen && size <= 64) {
    logo = logo.sharpen({ sigma: 0.45, m1: 0.8, m2: 0.4 });
  }

  let logoBuf = await logo.png().toBuffer();
  if (background.alpha === 0) {
    logoBuf = await scrubFringe(logoBuf);
  }

  return sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite([{ input: logoBuf, gravity: "centre" }])
    .png()
    .toBuffer();
}

await mkdir(path.join(root, "public", "icons"), { recursive: true });

const mark = await markPng();
await sharp(mark).png().toFile(path.join(root, "public", "icons", "mark.png"));

// Favicons / app icon: transparente (sin caja en tabs).
await sharp(await composeIcon(64, { padding: 0.1 })).toFile(path.join(root, "app", "icon.png"));
await sharp(await composeIcon(16, { padding: 0.06 })).toFile(
  path.join(root, "public", "icons", "favicon-16x16.png"),
);
await sharp(await composeIcon(32, { padding: 0.08 })).toFile(
  path.join(root, "public", "icons", "favicon-32x32.png"),
);

// Apple touch: cream de marca (sin halo; iOS pide fondo opaco).
await sharp(await composeIcon(180, { padding: 0.16, background: cream, sharpen: false })).toFile(
  path.join(root, "public", "apple-icon.png"),
);
await sharp(await composeIcon(180, { padding: 0.16, background: cream, sharpen: false })).toFile(
  path.join(root, "app", "apple-icon.png"),
);

// PWA
await sharp(await composeIcon(192, { padding: 0.12, background: transparent, sharpen: false })).toFile(
  path.join(root, "public", "icons", "icon-192.png"),
);
await sharp(await composeIcon(512, { padding: 0.12, background: transparent, sharpen: false })).toFile(
  path.join(root, "public", "icons", "icon-512.png"),
);
await sharp(await composeIcon(512, { padding: 0.22, background: slate, sharpen: false })).toFile(
  path.join(root, "public", "icons", "icon-512-maskable.png"),
);

console.log("Icons generated: transparent favicon + cream apple + slate maskable");
