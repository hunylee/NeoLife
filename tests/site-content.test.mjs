import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

const pageSource = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const cssSource = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const rulesSource = readFileSync(new URL("../AGENTS.md", import.meta.url), "utf8");
const appSource = `${pageSource}\n${cssSource}`;

test("site implementation does not render the source PDF as a PDF viewer", () => {
  assert.doesNotMatch(pageSource, /<iframe|<embed|<object|PDF_PATH|Original PDF/i);
  assert.doesNotMatch(cssSource, /pdf-viewer|page-flatbar|viewer-frame/i);
  assert.match(rulesSource, /iframe.+embed.+object/);
});

test("site keeps a compact responsive prototype structure", () => {
  assert.ok(pageSource.split("\n").length <= 180, "page.tsx should stay compact");
  assert.ok(cssSource.split("\n").length <= 320, "globals.css should stay compact");
  assert.doesNotMatch(pageSource, /from "\.\/data"/);

  for (const label of ["서비스", "시장", "비즈니스", "투자"]) {
    assert.match(appSource, new RegExp(label));
  }

  for (const label of ["5,000억", "37조", "111억", "10-2026-0034858", "10-2026-0078271", "010-7370-8381"]) {
    assert.match(appSource, new RegExp(label));
  }
});
