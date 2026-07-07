# Diagram Generator

Reusable workspace for creating polished, customer-facing architecture diagrams with HTML and CSS.

The goal is to let AI generate diagrams for many projects while this repository improves over time: shared styles, layout patterns, icon catalogs, prompts, review checklists, and export workflows should become reusable building blocks instead of one-off artifacts.

## What This Repo Is For

- High-level customer architecture diagrams
- C4-style views, from context down to containers and components
- Deep-dive system diagrams for engineers and technical stakeholders
- HTML/CSS diagrams that can be reviewed, versioned, exported, and refined
- Reusable AI instructions for consistent visual and architectural quality

## Folder Structure

```text
.
├── AGENTS.md                  # Instructions for AI agents working in this repo
├── README.md                  # Project overview and workflow
├── docs/                      # Diagram standards, decision records, references
├── examples/                  # Small finished diagrams used as quality references
├── exports/                   # Generated PNG/PDF/SVG outputs; usually not source of truth
├── projects/                  # Customer/project-specific diagram workspaces
├── prompts/                   # Reusable prompts and intake templates
├── resources/                 # External visual/reference assets
│   └── icons/
│       └── azure/             # Azure icon pack
├── src/                       # Reusable diagram system code
│   ├── components/            # HTML snippets or web components for nodes, groups, legends
│   ├── diagram-css/           # Shared visual language: tokens, themes, layout utilities
│   └── layouts/               # Reusable layout patterns
└── templates/                 # Copyable starter diagrams
```

## Recommended Project Layout

Each project in `projects/` should be self-contained:

```text
projects/acme-platform/
├── README.md                  # Project-specific context and diagram index
├── brief.md                   # Inputs, audience, constraints, source links
├── diagrams/
│   ├── 01-context.html
│   ├── 02-container.html
│   └── 03-deep-dive.html
├── notes/
│   └── architecture-decisions.md
└── exports/
    ├── 01-context.png
    └── 02-container.pdf
```

Use this naming convention for diagrams:

- `01-context` for the audience, users, external systems, and business capability view
- `02-container` for deployable applications, databases, queues, APIs, and cloud services
- `03-component-*` for internals of one container or domain
- `04-sequence-*` for important runtime flows
- `05-deployment-*` for environments, regions, networking, and operations

## Diagram Principles

- Start with the audience and decision the diagram must support.
- Prefer a clean C4-like progression: context, container, component, deployment, runtime.
- Keep customer-facing diagrams calm, legible, and selective.
- Use official service icons when they help recognition; use plain labeled boxes when icons add noise.
- Make ownership, trust boundaries, data movement, and integrations visually obvious.
- Avoid cramming multiple abstraction levels into one diagram.
- Treat HTML files as source of truth; exports are generated deliverables.

## AI Workflow

1. Capture inputs in a project `brief.md`.
2. Ask AI to choose the right diagram level before drawing.
3. Generate or update an HTML diagram using shared CSS from `src/diagram-css/`.
4. Review the diagram against `AGENTS.md`.
5. Export to `projects/<name>/exports/` for delivery.
6. Promote reusable patterns back into `src/`, `templates/`, `prompts/`, or `docs/`.

## Resource Packs

External assets belong in `resources/`.

Current packs:

- `resources/icons/azure/` - Azure service SVG icons

Future examples:

- `resources/icons/aws/`
- `resources/icons/gcp/`
- `resources/logos/customers/`
- `resources/fonts/`
- `resources/reference-screenshots/`

When adding a resource pack, include a short note in `docs/` or the relevant folder explaining source, license, version/date, and intended use.

## Reuse Strategy

Reusable things should graduate out of customer project folders:

- A visual pattern used twice goes into `src/layouts/`.
- A repeated diagram element goes into `src/components/`.
- A repeated prompt goes into `prompts/`.
- A repeated quality rule goes into `AGENTS.md`.
- A finished diagram that represents the desired quality bar goes into `examples/`.

## Next Good Additions

- Base CSS tokens for typography, colors, spacing, arrows, groups, and legends
- A context diagram template
- A container diagram template
- A Playwright export script for PNG/PDF generation
- An icon index/search helper for Azure icons
- A diagram review checklist in `docs/`
