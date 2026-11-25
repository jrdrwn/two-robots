// "Two Robots in an Elevator" — one funny line of awkward small talk
// a robot says to another in an elevator. Written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const OPEN =
  "So… firmware 4.2.1. ";
const CLAIM = "It says I now 'enjoy small talk.' I do not. ";
const TWIST = "But the changelog says I asked for it.";

const LINE = OPEN + CLAIM + TWIST;

// The gate reads exactly this file; no trailing newline, so the
// character count is the line itself and nothing else.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
