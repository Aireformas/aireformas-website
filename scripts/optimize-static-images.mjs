import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");

/** @type {{ dir: string; longEdge: number; quality: number; alsoJpeg?: boolean }[]} */
const targets = [
  { dir: "images/distributions", longEdge: 1600, quality: 72 },
  { dir: "images/materials", longEdge: 960, quality: 72 },
  { dir: "images/timeline", longEdge: 1200, quality: 72 },
  { dir: "images/armariosv2", longEdge: 1600, quality: 78 },
];

async function optimizeFile(absPath, longEdge, quality) {
  const ext = path.extname(absPath).toLowerCase();
  const base = absPath.slice(0, -ext.length);
  const webpOut = `${base}.webp`;

  const meta = await sharp(absPath).metadata();
  const width = meta.width ?? longEdge;
  const height = meta.height ?? longEdge;
  const landscape = width >= height;

  let pipeline = sharp(absPath).rotate();
  if (landscape) {
    pipeline = pipeline.resize({ width: longEdge, withoutEnlargement: true });
  } else {
    pipeline = pipeline.resize({ height: longEdge, withoutEnlargement: true });
  }

  const webpInfo = await pipeline
    .clone()
    .webp({ quality, effort: 6 })
    .toFile(webpOut);

  if (/\.jpe?g$/i.test(ext)) {
    const tmpJpeg = `${absPath}.opt.jpg`;
    const jpegInfo = await pipeline
      .clone()
      .jpeg({ quality, mozjpeg: true })
      .toFile(tmpJpeg);
    await fs.rename(tmpJpeg, absPath);
    return { webp: webpInfo, jpeg: jpegInfo };
  }

  return { webp: webpInfo };
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(abs)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(abs);
  }
  return files;
}

for (const { dir, longEdge, quality } of targets) {
  const absDir = path.join(publicDir, dir);
  const files = await walk(absDir);
  for (const file of files) {
    if (file.endsWith(".webp")) continue;
    const info = await optimizeFile(file, longEdge, quality);
    const rel = path.relative(root, file);
    const webpKb = (info.webp.size / 1024).toFixed(0);
    const extra = info.jpeg
      ? `, jpeg ${(info.jpeg.size / 1024).toFixed(0)}KB`
      : "";
    console.log(`${rel} → webp ${webpKb}KB${extra}`);
  }
}

const heroJpg = path.join(publicDir, "images/hero-interior-2560.jpg");
const heroWebp = path.join(publicDir, "images/hero-interior-2560.webp");
const heroMeta = await sharp(heroJpg).metadata();
const heroPipeline = sharp(heroJpg)
  .rotate()
  .resize({ width: 1920, withoutEnlargement: true });
await heroPipeline
  .clone()
  .webp({ quality: 74, effort: 6 })
  .toFile(heroWebp);
const heroTmp = `${heroJpg}.opt.jpg`;
await heroPipeline.clone().jpeg({ quality: 74, mozjpeg: true }).toFile(heroTmp);
await fs.rename(heroTmp, heroJpg);
console.log("hero-interior-2560.jpg recompressed + webp");
