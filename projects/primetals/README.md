# Primetals

Project workspace for Primetals architecture diagrams and source data.

## Contents

- `data/modules.json` - synced Notion `Modulübersicht` rows used by the module architecture diagram
- `diagrams/module-architecture.html` - customer-facing module architecture diagram
- `diagrams/azure-native-service-architecture.html` - Azure-native service architecture based on `docs/architecture.md`
- `diagrams/open-source-azure-architecture.html` - Azure-hosted open-source architecture option for lower lock-in
- `docs/architecture.md` - Markdown base derived from the Notion `Architektur` page
- `exports/module-architecture.png` - rendered export of the module architecture diagram
- `exports/azure-native-service-architecture.png` - rendered export of the Azure-native service architecture
- `exports/open-source-azure-architecture.png` - rendered export of the open-source Azure architecture

## Preview

Use the VS Code launch configuration:

```text
Preview Primetals Module Architecture (Edge)
Preview Primetals Azure Native Architecture (Edge)
Preview Primetals Open Source Azure Architecture (Edge)
```

The module architecture diagram fetches `../data/modules.json`, so it should be opened through the local server, not directly from the filesystem.
