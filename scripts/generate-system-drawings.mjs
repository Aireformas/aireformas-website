/**
 * Clean isometric line drawings for Cubos / Up&Down.
 * Solid faces + consistent stroke. Original art, catalog-inspired configs.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "images", "armarios", "sistemas");
const STROKE = "#7A6A4E";
const FILL = "#FFFFFF";
const W = 900;
const H = 900;
const COS = Math.cos(Math.PI / 6);
const SIN = Math.sin(Math.PI / 6);

function iso(x, y, z) {
  return { x: (x - y) * COS, y: (x + y) * SIN - z };
}

function face(pts) {
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ") + " Z";
  return `<path d="${d}" fill="${FILL}" stroke="${STROKE}"/>`;
}

function edge(a, b) {
  return `<path d="M${a.x.toFixed(2)},${a.y.toFixed(2)} L${b.x.toFixed(2)},${b.y.toFixed(2)}" fill="none" stroke="${STROKE}"/>`;
}

function handle(cx, cy, cz, len = 0.34) {
  const a = iso(cx - len / 2, cy, cz);
  const b = iso(cx + len / 2, cy, cz);
  const m = iso(cx, cy + 0.05, cz - 0.035);
  return `<path d="M${a.x.toFixed(2)},${a.y.toFixed(2)} Q${m.x.toFixed(2)},${m.y.toFixed(2)} ${b.x.toFixed(2)},${b.y.toFixed(2)}" fill="none" stroke="${STROKE}"/>`;
}

function knob(cx, cy, cz, r = 0.04) {
  const c = iso(cx, cy, cz);
  return `<circle cx="${c.x.toFixed(2)}" cy="${c.y.toFixed(2)}" r="${r}" fill="${FILL}" stroke="${STROKE}"/>`;
}

/** Visible faces only (front / right / top) — cleaner catalog look */
function box(x, y, z, w, d, h, { openFront = false, openTop = false } = {}) {
  const p = (dx, dy, dz) => iso(x + dx, y + dy, z + dz);
  const out = [];
  // right side first (farther in our view)
  out.push(face([p(w, 0, 0), p(w, d, 0), p(w, d, h), p(w, 0, h)]));
  if (!openFront) {
    out.push(face([p(0, 0, 0), p(w, 0, 0), p(w, 0, h), p(0, 0, h)]));
  } else {
    // open: draw left wall + back wall + floor rim
    out.push(face([p(0, 0, 0), p(0, d, 0), p(0, d, h), p(0, 0, h)]));
    out.push(face([p(0, d, 0), p(w, d, 0), p(w, d, h), p(0, d, h)]));
    out.push(edge(p(0, 0, 0), p(w, 0, 0)));
    out.push(edge(p(w, 0, 0), p(w, 0, h)));
    out.push(edge(p(w, 0, h), p(0, 0, h)));
    out.push(edge(p(0, 0, h), p(0, 0, 0)));
  }
  if (!openTop) {
    out.push(face([p(0, 0, h), p(w, 0, h), p(w, d, h), p(0, d, h)]));
  } else {
    out.push(edge(p(0, 0, h), p(w, 0, h)));
    out.push(edge(p(w, 0, h), p(w, d, h)));
    out.push(edge(p(w, d, h), p(0, d, h)));
    out.push(edge(p(0, d, h), p(0, 0, h)));
  }
  return out.join("\n");
}

function shelfBoard(x, y, z, w, d) {
  return face([iso(x, y, z), iso(x + w, y, z), iso(x + w, y + d, z), iso(x, y + d, z)]);
}

function openUnit(x, y, z, w, d, h, levels) {
  const parts = [box(x, y, z, w, d, h, { openFront: true })];
  for (let i = 1; i < levels; i += 1) {
    parts.push(shelfBoard(x, y, z + (h * i) / levels, w, d));
  }
  return parts.join("\n");
}

function plinth(x, y, w, d, ph = 0.14) {
  const i = 0.06;
  return box(x + i, y + i, 0, w - i * 2, d - i * 2, ph);
}

function closedBase({ w, h, d = 1.0 }) {
  const ph = 0.14;
  return [
    plinth(0, 0, w, d, ph),
    box(0, 0, ph, w, d, h),
    handle(w / 2, -0.01, ph + h * 0.55, Math.min(0.4, w * 0.3)),
  ].join("\n");
}

function openBase({ w, h, d = 1.0, split = false, midShelf = false }) {
  const ph = 0.14;
  const parts = [plinth(0, 0, w, d, ph), box(0, 0, ph, w, d, h, { openFront: true })];
  parts.push(shelfBoard(0, 0, ph, w, d));
  if (split) {
    parts.push(
      face([
        iso(w / 2, 0, ph),
        iso(w / 2, d, ph),
        iso(w / 2, d, ph + h),
        iso(w / 2, 0, ph + h),
      ]),
    );
  }
  if (midShelf || h > 1.0) {
    parts.push(shelfBoard(0, 0, ph + h * 0.5, w, d));
  }
  return parts.join("\n");
}

function corner({ w, d = 1.3, h = 0.72, lids = 1, tall = false }) {
  const bodyH = tall ? h * 1.2 : h;
  // closed body with open top cavity
  const parts = [
    box(0, 0, 0, w, d, bodyH, { openTop: true }),
    // inner floor
    shelfBoard(0.08, 0.08, 0.12, w - 0.16, d - 0.16),
  ];
  const lidW = lids === 2 ? (w - 0.18) / 2 : w - 0.16;
  for (let i = 0; i < lids; i += 1) {
    const lx = 0.08 + i * (lidW + 0.06);
    // hinge on far (back) edge of top, lid swings up toward viewer
    const hingeL = iso(lx, d - 0.1, bodyH);
    const hingeR = iso(lx + lidW, d - 0.1, bodyH);
    const tipL = iso(lx, 0.15, bodyH + 0.58);
    const tipR = iso(lx + lidW, 0.15, bodyH + 0.58);
    parts.push(face([hingeL, hingeR, tipR, tipL]));
    // gas strut
    parts.push(edge(iso(lx + lidW * 0.75, d - 0.1, bodyH), iso(lx + lidW * 0.55, 0.45, bodyH + 0.28)));
  }
  return parts.join("\n");
}

function singularLow() {
  const w = 1.05;
  const d = 1.5;
  const h = 0.48;
  const pull = 0.82;
  return [
    box(0, 0, 0, w, d, h),
    box(0.05, -pull, 0.04, w - 0.1, pull, h - 0.08),
    handle(w / 2, -pull, h * 0.45, 0.28),
  ].join("\n");
}

function singularDoors() {
  const w = 1.15;
  const d = 1.0;
  const h = 1.35;
  return [
    box(0, 0, 0, w, d, h),
    edge(iso(w / 2, 0, 0.03), iso(w / 2, 0, h - 0.03)),
    knob(w / 2 - 0.1, 0, h * 0.5),
    knob(w / 2 + 0.1, 0, h * 0.5),
  ].join("\n");
}

function singularTall() {
  const w = 1.0;
  const d = 1.35;
  const h = 1.5;
  const pull = 0.7;
  const drawerH = h * 0.55;
  return [
    box(0, 0, 0, w, d, h, { openFront: true }),
    shelfBoard(0, 0, 0, w, d),
    shelfBoard(0, 0, drawerH + 0.08, w, d),
    shelfBoard(0, 0, h * 0.72, w, d),
    // drawer pulled toward viewer
    box(0.06, -pull, 0.08, w - 0.12, pull, drawerH),
    handle(w / 2, -pull, 0.08 + drawerH * 0.5, 0.28),
  ].join("\n");
}

function nest({ slim }) {
  const w = 2.45;
  const d = 1.4;
  const h = 0.48;
  const parts = [box(0, 0, 0, w, d, h)];
  if (slim) {
    const n = 4;
    const dw = (w - 0.16) / n;
    for (let i = 0; i < n; i += 1) {
      const pull = 0.48 + i * 0.1;
      parts.push(box(0.08 + i * dw, -pull, 0.04, dw - 0.04, pull, h - 0.08));
      // slats on first drawer
      if (i === 0) {
        for (let s = 0; s < 5; s += 1) {
          const sx = 0.12 + i * dw + ((s + 0.5) / 5) * (dw - 0.12);
          parts.push(edge(iso(sx, -pull + 0.08, h - 0.06), iso(sx, -0.08, h - 0.06)));
        }
      }
      parts.push(handle(0.08 + i * dw + dw / 2, -pull, h * 0.45, 0.16));
    }
  } else {
    const pull = 0.92;
    parts.push(box(0.08, -pull, 0.04, w - 0.16, pull, h - 0.08));
    parts.push(handle(w / 2, -pull, h * 0.45, 0.36));
  }
  return parts.join("\n");
}

function shelf({ narrow }) {
  const w = narrow ? 0.78 : 1.2;
  const d = 0.82;
  const h = 3.0;
  return openUnit(0, 0, 0, w, d, h, narrow ? 5 : 4);
}

function wardrobe({ rail }) {
  const w = rail ? 1.15 : 0.88;
  const d = 0.92;
  const h = rail ? 3.2 : 2.65;
  if (!rail) return openUnit(0, 0, 0, w, d, h, 3);
  const lower = h * 0.4;
  return [
    openUnit(0, 0, 0, w, d, lower, 3),
    box(0, 0, lower, w, d, h - lower, { openFront: true }),
    edge(iso(0.12, 0.18, h * 0.82), iso(w - 0.12, 0.18, h * 0.82)),
    edge(iso(0.12, d - 0.18, h * 0.82), iso(w - 0.12, d - 0.18, h * 0.82)),
    edge(iso(0.12, 0.18, h * 0.82), iso(0.12, d - 0.18, h * 0.82)),
    edge(iso(w - 0.12, 0.18, h * 0.82), iso(w - 0.12, d - 0.18, h * 0.82)),
  ].join("\n");
}

function slats(x, y, z, w, d, n = 11) {
  const parts = [
    box(x, y, z, w, 0.05, 0.08),
    box(x, y + d - 0.05, z, w, 0.05, 0.08),
    box(x, y, z, 0.05, d, 0.08),
    box(x + w - 0.05, y, z, 0.05, d, 0.08),
  ];
  for (let i = 0; i < n; i += 1) {
    const t = (i + 0.5) / n;
    const sx = x + 0.08 + t * (w - 0.16);
    parts.push(box(sx - 0.02, y + 0.07, z + 0.025, 0.04, d - 0.14, 0.035));
  }
  return parts.join("\n");
}

function leg(x, y, z, d) {
  return [
    edge(iso(x, y, z), iso(x, y, 0)),
    edge(iso(x, y + d, z), iso(x, y + d, 0)),
    edge(iso(x, y, 0), iso(x, y + d, 0)),
  ].join("\n");
}

function hBed(kind) {
  const cw = 2.15;
  const cd = 0.46;
  let ch = 1.35;
  let bedZ = 0.2;
  let twin = false;
  let high = false;
  let doors = false;
  if (kind === "doble") {
    ch = 2.55;
    twin = true;
  } else if (kind === "alta") {
    ch = 2.15;
    bedZ = 1.12;
    high = true;
  } else if (kind === "puertas") {
    ch = 2.65;
    doors = true;
  }

  const parts = [box(0, 0, 0, cw, cd, ch, { openFront: true })];
  if (!high && !twin && !doors) {
    parts.push(openUnit(0.06, 0.04, bedZ + 0.42, cw - 0.12, cd - 0.08, ch - bedZ - 0.48, 3));
  } else if (twin) {
    parts.push(openUnit(0.06, 0.04, 1.88, cw - 0.12, cd - 0.08, ch - 1.95, 2));
  } else if (high) {
    parts.push(edge(iso(0, 0, bedZ - 0.04), iso(cw, 0, bedZ - 0.04)));
  }

  const draw = (z) => {
    const bw = cw - 0.1;
    const bl = 2.0;
    parts.push(slats(0.05, -bl, z, bw, bl, 12));
    parts.push(leg(0.05 + bw * 0.78, -bl + 0.1, z, bl - 0.22));
  };
  draw(bedZ);
  if (twin) draw(1.28);

  if (doors) {
    const dz = 1.02;
    const dh = ch - dz - 0.04;
    for (let i = 0; i < 4; i += 1) {
      const dw = cw / 4;
      const swing = 0.26 + (i % 2) * 0.1;
      parts.push(
        face([
          iso(i * dw, 0, dz),
          iso(i * dw + dw * 0.88, -swing, dz),
          iso(i * dw + dw * 0.88, -swing, dz + dh),
          iso(i * dw, 0, dz + dh),
        ]),
      );
    }
    parts.push(openUnit(0.06, 0.04, dz, cw - 0.12, cd - 0.08, dh, 3));
  }
  return parts.join("\n");
}

function vBed(altillo) {
  const cw = 1.08;
  const cd = 0.46;
  const ch = altillo ? 2.9 : 2.35;
  const bl = 2.05;
  const parts = [];
  if (altillo) {
    parts.push(openUnit(0, 0, 0, cw, cd, ch - 0.48, 5));
    parts.push(box(0, 0, ch - 0.48, cw, cd, 0.48));
    parts.push(edge(iso(cw / 2, 0, ch - 0.48), iso(cw / 2, 0, ch)));
  } else {
    parts.push(openUnit(0, 0, 0, cw, cd, ch, 5));
  }
  const z = 0.3;
  parts.push(slats(0.04, -bl, z, cw - 0.08, bl, 13));
  parts.push(leg(0.04 + (cw - 0.08) * 0.78, -bl + 0.12, z, bl - 0.24));
  return parts.join("\n");
}

function svg(body, ox, oy, scale) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="100%" height="100%" fill="#FFFFFF"/>
  <g transform="translate(${ox},${oy}) scale(${scale})" stroke-width="${(2.35 / scale).toFixed(4)}" stroke-linejoin="round" stroke-linecap="round">
    ${body}
  </g>
</svg>`;
}

const pieces = [
  { id: "base-cerrado-bajo", scale: 120, oy: 0.58, body: () => closedBase({ w: 1.4, h: 0.48 }) },
  { id: "base-cerrado-medio", scale: 110, oy: 0.58, body: () => closedBase({ w: 1.4, h: 0.78 }) },
  { id: "base-cerrado-hondo", scale: 100, oy: 0.58, body: () => closedBase({ w: 1.4, h: 1.12 }) },
  { id: "base-abierto-division", scale: 110, oy: 0.58, body: () => openBase({ w: 1.4, h: 0.78, split: true }) },
  { id: "base-abierto-hueco", scale: 110, oy: 0.58, body: () => openBase({ w: 1.4, h: 0.78 }) },
  { id: "base-abierto-dos-huecos", scale: 100, oy: 0.58, body: () => openBase({ w: 1.4, h: 1.12, split: true, midShelf: true }) },
  { id: "rincon-doble-tapa", scale: 85, oy: 0.62, body: () => corner({ w: 2.0, lids: 2 }) },
  { id: "rincon-doble-alto", scale: 78, oy: 0.62, body: () => corner({ w: 1.8, lids: 2, tall: true }) },
  { id: "rincon-una-tapa", scale: 85, oy: 0.62, body: () => corner({ w: 1.7, lids: 1 }) },
  { id: "rincon-estrecho", scale: 90, oy: 0.62, body: () => corner({ w: 1.15, d: 1.45, lids: 1, tall: true }) },
  { id: "singular-cajon-bajo", scale: 95, oy: 0.52, body: () => singularLow() },
  { id: "singular-dos-puertas", scale: 92, oy: 0.6, body: () => singularDoors() },
  { id: "singular-cajon-alto", scale: 85, oy: 0.58, body: () => singularTall() },
  { id: "nido-cajones-finos", scale: 78, oy: 0.52, body: () => nest({ slim: true }) },
  { id: "nido-cajon-ancho", scale: 78, oy: 0.52, body: () => nest({ slim: false }) },
  { id: "estanteria-estrecha", scale: 62, oy: 0.74, body: () => shelf({ narrow: true }) },
  { id: "estanteria-ancha", scale: 62, oy: 0.74, body: () => shelf({ narrow: false }) },
  { id: "armario-puerta-balda", scale: 62, oy: 0.74, body: () => wardrobe({ rail: false }) },
  { id: "armario-barra-baldas", scale: 58, oy: 0.76, body: () => wardrobe({ rail: true }) },
  { id: "cama-baja", scale: 56, oy: 0.52, ox: 0.4, body: () => hBed("baja") },
  { id: "cama-doble", scale: 50, oy: 0.6, ox: 0.4, body: () => hBed("doble") },
  { id: "cama-alta", scale: 52, oy: 0.58, ox: 0.4, body: () => hBed("alta") },
  { id: "cama-4-puertas", scale: 50, oy: 0.6, ox: 0.4, body: () => hBed("puertas") },
  { id: "cama-vertical", scale: 56, oy: 0.6, ox: 0.46, body: () => vBed(false) },
  { id: "cama-vertical-altillo", scale: 54, oy: 0.64, ox: 0.46, body: () => vBed(true) },
];

async function main() {
  await mkdir(OUT, { recursive: true });
  // remove obsolete zocalo/sin-zocalo files later via shell
  for (const piece of pieces) {
    const ox = W * (piece.ox ?? 0.5);
    const oy = H * (piece.oy ?? 0.6);
    await sharp(Buffer.from(svg(piece.body(), ox, oy, piece.scale))).png().toFile(path.join(OUT, `${piece.id}.png`));
    console.log("wrote", piece.id);
  }
  console.log(`done ${pieces.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
