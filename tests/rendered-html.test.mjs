import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../app/Portfolio.tsx", import.meta.url), "utf8");

test("includes every experience bullet and project link", () => {
  assert.equal((source.match(/source: "https:\/\/github\.com\/devthedevil\//g) ?? []).length, 16);
  assert.equal((source.match(/demo: "https:\/\//g) ?? []).length, 4);
  assert.equal((source.match(/^\s{6}"(?:Designed and implemented|Designed a declarative|Built secure|Hardened low-level|Optimized security-critical|Engineered mandatory|Shipped user-facing|Implemented application|Analyzed framework|Navigated kernel|Architected default-deny|Designed isolation|Drove adoption|Partnered with|Broke multi-year)/gm) ?? []).length, 15);
});

test("honors profile, publication, and layout requirements", () => {
  assert.match(source, /ieeexplore\.ieee\.org\/document\/10094480/);
  assert.match(source, /leetcode\.com\/u\/dev_kumar_dklv/);
  assert.match(source, /Dev-Kumar-Resume\.docx/);
  assert.doesNotMatch(source, /linkedin/i);
  assert.doesNotMatch(source, /<footer/i);
});

test("shows technical demos only when supplied and keeps diagrams interactive", () => {
  assert.match(source, /project\.demo && <a href=\{project\.demo\}/);
  assert.equal((source.match(/Technical Demo/g) ?? []).length, 1);
  assert.match(source, /policies\.map/);
  assert.match(source, /filters\.map/);
});
