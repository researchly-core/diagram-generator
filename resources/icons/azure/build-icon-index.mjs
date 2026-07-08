#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(rootDir, "icon-index.json");

const aliases = new Map([
  ["Azure OpenAI", ["openai", "gpt", "llm", "chatgpt", "generative ai"]],
  ["AI Studio", ["azure ai foundry", "foundry", "ai foundry"]],
  ["Cognitive Search", ["azure ai search", "ai search", "vector search", "hybrid search", "retrieval", "rag"]],
  ["Form Recognizers", ["document intelligence", "document ai", "ocr", "layout extraction"]],
  ["Storage Accounts", ["blob storage", "data lake", "azure storage"]],
  ["Storage Queues", ["queue storage", "azure queue"]],
  ["Key Vaults", ["key vault", "secrets", "certificates"]],
  ["Monitor", ["application insights", "observability", "logs", "metrics"]],
  ["App Services", ["web app", "web apps", "app service"]],
  ["Function Apps", ["azure functions", "functions", "serverless"]],
  ["Container Apps Environments", ["azure container apps", "container apps", "container apps environment", "aca", "aca environment"]],
  ["Worker Container App", ["azure container apps", "container apps", "container app", "aca", "aca app"]],
  ["Kubernetes Services", ["aks", "azure kubernetes service"]],
  ["API Management Services", ["api management", "apim", "api gateway"]],
  ["Event Hubs", ["event hub", "streaming", "event ingestion"]],
  ["Service Bus", ["message bus", "queues", "topics"]],
  ["Azure Cosmos DB", ["cosmos", "cosmosdb", "document database"]],
  ["SQL Database", ["azure sql", "sql server"]],
  ["Virtual Networks", ["vnet", "network boundary"]],
  ["Private Link", ["private endpoint", "privatelink"]],
]);

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile() && entry.name.endsWith(".svg")) return [fullPath];
    return [];
  });
};

const toTitle = (filePath) => {
  const fileName = path.basename(filePath, ".svg");
  return fileName
    .replace(/^\d+\s*-?\s*/, "")
    .replace(/^icon-service-/, "")
    .replace(/^icon-/, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const tokenize = (...values) =>
  [
    ...new Set(
      values
        .join(" ")
        .toLowerCase()
        .replace(/[()]/g, " ")
        .replace(/&/g, " and ")
        .split(/[^a-z0-9]+/)
        .filter(Boolean),
    ),
  ];

const icons = walk(rootDir)
  .sort()
  .map((filePath) => {
    const relativePath = path.relative(process.cwd(), filePath).split(path.sep).join("/");
    const category = path.relative(rootDir, path.dirname(filePath)).split(path.sep).join("/");
    const name = toTitle(filePath);
    const iconAliases = aliases.get(name) ?? [];

    return {
      id: `${toSlug(category)}-${toSlug(name)}`,
      name,
      category,
      path: relativePath,
      aliases: iconAliases,
      keywords: tokenize(name, category, ...iconAliases),
    };
  });

fs.writeFileSync(indexPath, `${JSON.stringify(icons, null, 2)}\n`);
console.log(`Wrote ${icons.length} Azure icons to ${path.relative(process.cwd(), indexPath)}`);
