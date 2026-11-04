import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildLlmsTxt } from "../content/discovery";

const out = join(process.cwd(), "public", "llms.txt");
writeFileSync(out, buildLlmsTxt(), "utf8");
console.log(`Wrote ${out}`);
