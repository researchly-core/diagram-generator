# Primetals

Project workspace for Primetals architecture diagrams and source data.

## Contents

- `data/modules.json` - synced Notion `Modulübersicht` rows used by the module architecture diagram
- `diagrams/module-architecture.html` - customer-facing module architecture diagram
- `docs/architecture.md` - Markdown base derived from the Notion `Architektur` page
- `exports/module-architecture.png` - rendered export of the module architecture diagram

## Preview

Use the VS Code launch configuration:

```text
Preview Primetals Module Architecture (Edge)
```

The HTML diagram fetches `../data/modules.json`, so it should be opened through the local server, not directly from the filesystem.
