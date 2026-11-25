import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Famous Last Words at 1% — the phone's own farewell, in its own voice.
// One concrete log detail (a 2:47 a.m. read receipt), one surprise turn:
// its last act is sending the receipt, not saving itself.
const entry =
  "1%. My final act: sending your 'seen 2:47 a.m.' read receipt. She knows now. Good luck.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// One line, one trailing newline: the gate counts 1-199 characters.
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
