import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "public/images/projects/new");
const outDir = path.join(root, "public/images/projects/gallery");
const LONG_EDGE = 1400;
const QUALITY = 68;

await fs.mkdir(outDir, { recursive: true });

const files = (await fs.readdir(srcDir)).filter((name) =>
  /\.jpe?g$/i.test(name),
);

for (const file of files) {
  const input = path.join(srcDir, file);
  const id = path.parse(file).name.toLowerCase().replace(/_/g, "-");
  const output = path.join(outDir, `${id}.webp`);
  const meta = await sharp(input).metadata();
  const width = meta.width ?? LONG_EDGE;
  const height = meta.height ?? LONG_EDGE;
  const landscape = width >= height;
  const pipeline = sharp(input).rotate();

  if (landscape) {
    pipeline.resize({ width: LONG_EDGE, withoutEnlargement: true });
  } else {
    pipeline.resize({ height: LONG_EDGE, withoutEnlargement: true });
  }

  const info = await pipeline
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(output);

  console.log(
    `${file} → ${path.basename(output)} (${info.width}×${info.height}, ${(info.size / 1024).toFixed(0)}KB)`,
  );
}
