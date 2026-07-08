#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(__dirname, "icon-index.json");
const args = process.argv.slice(2);
const limitIndex = args.findIndex((arg) => arg === "--limit" || arg === "-l");
const limit =
  limitIndex >= 0 && args[limitIndex + 1]
    ? Number.parseInt(args.splice(limitIndex, 2)[1], 10)
    : 12;
const query = args.join(" ").trim().toLowerCase();

if (!query) {
  console.error("Usage: node resources/icons/azure/find-icons.mjs <search terms> [--limit 20]");
  console.error("Example: node resources/icons/azure/find-icons.mjs azure openai");
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error("Azure icon index is missing.");
  console.error("Run: node resources/icons/azure/build-icon-index.mjs");
  process.exit(1);
}

const icons = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const terms = query.split(/\s+/).filter(Boolean);

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const scoreIcon = (icon) => {
  const haystack = [
    icon.name,
    icon.category,
    icon.path,
    ...(icon.aliases ?? []),
    ...icon.keywords,
  ].join(" ");

  const normalizedName = normalize(icon.name);
  const normalizedHaystack = normalize(haystack);
  const normalizedQuery = normalize(query);

  let score = 0;
  if (normalizedName === normalizedQuery) score += 100;
  if ((icon.aliases ?? []).some((alias) => normalize(alias) === normalizedQuery)) score += 90;
  if (normalizedName.includes(normalizedQuery)) score += 40;
  if (normalizedHaystack.includes(normalizedQuery)) score += 30;

  for (const term of terms) {
    if (normalizedName === term) score += 50;
    if (normalizedName.includes(term)) score += 10;
    if (normalize(icon.category).includes(term)) score += 5;
    if (icon.keywords.includes(term)) score += 8;
    if (normalizedHaystack.includes(term)) score += 2;
  }
  return score;
};

const matches = icons
  .map((icon) => ({ icon, score: scoreIcon(icon) }))
  .filter((match) => match.score > 0)
  .sort((a, b) => b.score - a.score || a.icon.name.localeCompare(b.icon.name))
  .slice(0, Number.isFinite(limit) && limit > 0 ? limit : 12);

if (matches.length === 0) {
  console.log(`No Azure icons found for: ${query}`);
  process.exit(0);
}

for (const { icon } of matches) {
  console.log(`${icon.name} [${icon.category}]`);
  console.log(`  ${icon.path}`);
  if (icon.aliases?.length) {
    console.log(`  aliases: ${icon.aliases.join(", ")}`);
  }
}
