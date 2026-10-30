import { readFile } from "node:fs/promises";
import path from "node:path";
import { getCatalogRegistryEntry } from "@/content/catalogos";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const entry = getCatalogRegistryEntry(id);
  if (!entry || !entry.pdfSrc.startsWith("/catalogs/")) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const relativePath = entry.pdfSrc.replace(/^\//, "");
  const filePath = path.join(process.cwd(), "public", relativePath);

  let file: Buffer;
  try {
    file = await readFile(filePath);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const safeName = entry.downloadFilename.replace(/[^\w.-]+/g, "-");

  return new NextResponse(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${safeName}"`,
      "Content-Length": String(file.length),
      "Cache-Control": "private, max-age=3600",
    },
  });
}
