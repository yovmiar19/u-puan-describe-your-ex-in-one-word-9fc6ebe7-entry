// Describe Your Ex in One Word — make.fun entry
// Writes the picked word to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Unforgettable";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate: exactly one word, 1-111 characters, nothing attached.
function checkGate(word: string): void {
  if (word.length < 1 || word.length > 111) {
    throw new Error(`Gate failed: word must be 1-111 chars, got ${word.length}`);
  }
  if (word.trim().split(/\s+/).length !== 1) {
    throw new Error("Gate failed: entry must be exactly one word");
  }
}

function main(): void {
  checkGate(WORD);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, WORD, "utf8");
  console.log("Wrote entry:", WORD);
}

main();
