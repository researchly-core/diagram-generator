# Azure Icons

Azure SVG icon pack used by diagrams.

## Find Icons

Use the generated index:

```bash
node resources/icons/azure/find-icons.mjs "azure openai"
node resources/icons/azure/find-icons.mjs "azure ai search"
node resources/icons/azure/find-icons.mjs "document intelligence"
node resources/icons/azure/find-icons.mjs "key vault"
node resources/icons/azure/find-icons.mjs "container apps"
node resources/icons/azure/find-icons.mjs "private endpoint" --limit 20
```

The helper searches `icon-index.json` and prints matching icon names, categories, repo-relative paths, and known aliases.

## Index

- `icon-index.json` is generated from the SVG filenames in this folder.
- Each entry contains `name`, `category`, `path`, `aliases`, and `keywords`.
- Paths are repo-relative so they can be used directly from project diagrams with the correct relative prefix.

Regenerate the index after replacing or updating the Azure icon pack:

```bash
node resources/icons/azure/build-icon-index.mjs
```

Example entry:

```json
{
  "id": "ai-machine-learning-azure-openai",
  "name": "Azure OpenAI",
  "category": "ai + machine learning",
  "path": "resources/icons/azure/ai + machine learning/03438-icon-service-Azure-OpenAI.svg",
  "aliases": ["openai", "gpt", "llm", "chatgpt", "generative ai"],
  "keywords": ["azure", "openai", "ai", "machine", "learning"]
}
```

## Common Architecture Icons

Good starting points for Azure AI/RAG diagrams:

- Azure OpenAI: `resources/icons/azure/ai + machine learning/03438-icon-service-Azure-OpenAI.svg`
- Azure AI Foundry / AI Studio: `resources/icons/azure/ai + machine learning/03513-icon-service-AI-Studio.svg`
- Azure AI Search: `resources/icons/azure/ai + machine learning/10044-icon-service-Cognitive-Search.svg`
- Document Intelligence / Form Recognizer: `resources/icons/azure/ai + machine learning/00819-icon-service-Form-Recognizers.svg`
- Storage Account: `resources/icons/azure/storage/10086-icon-service-Storage-Accounts.svg`
- Key Vault: `resources/icons/azure/security/10245-icon-service-Key-Vaults.svg`
- Azure Monitor: `resources/icons/azure/monitor/00001-icon-service-Monitor.svg`
- App Service: `resources/icons/azure/app services/10035-icon-service-App-Services.svg`
- Container Apps Environment: `resources/icons/azure/other/02989-icon-service-Container-Apps-Environments.svg`
- Worker Container App: `resources/icons/azure/other/02884-icon-service-Worker-Container-App.svg`
- Kubernetes Service: `resources/icons/azure/compute/10023-icon-service-Kubernetes-Services.svg`

## Guidance

- Prefer official Azure icons for recognizable managed services.
- Prefer generic diagram boxes for custom services or business modules.
- Keep icon sizes consistent within one diagram.
- Do not duplicate icons into project folders; reference this shared resource pack.
