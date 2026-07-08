# Diagram Generator

Reusable workspace for creating polished, customer-facing architecture diagrams with HTML and CSS.

The goal is to let AI generate diagrams for many projects while this repository improves over time: shared styles, reusable components, icon catalogs, brand profiles, prompts, and export workflows should become building blocks instead of one-off artifacts.

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
├── docs/                      # Shared standards, brand profiles, references
├── examples/                  # Generic examples that are not tied to one customer project
├── exports/                   # Generic/generated exports, not source of truth
├── projects/                  # Customer/project-specific workspaces
├── resources/                 # External assets such as cloud icons
└── src/                       # Reusable diagram system code
    ├── components/            # Copyable HTML snippets for diagram building blocks
    └── diagram-css/           # Shared tokens, utilities, component CSS, themes
```

The current top-level structure is intentionally small. Customer-specific diagrams, data, source notes, and exports belong under `projects/<project-name>/`.

## Current Project

```text
projects/primetals/
├── data/
│   └── modules.json           # Synced Notion Modulübersicht rows
├── diagrams/
│   └── module-architecture.html
├── docs/
│   └── architecture.md        # Markdown base from the Notion Architektur page
└── exports/
    └── module-architecture.png
```

The Primetals diagram renders from `projects/primetals/data/modules.json`.

## Recommended Project Layout

Each project in `projects/` should be self-contained:

```text
projects/acme-platform/
├── README.md                  # Project-specific context and diagram index
├── brief.md                   # Inputs, audience, constraints, source links
├── data/                      # JSON/CSV/source extracts used by diagrams
├── diagrams/
│   ├── 01-context.html
│   ├── 02-container.html
│   └── 03-deep-dive.html
├── docs/
│   └── architecture.md
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

1. Capture inputs in a project `brief.md` or project `docs/`.
2. Put structured source data under `projects/<name>/data/`.
3. Generate or update HTML diagrams under `projects/<name>/diagrams/`.
4. Reuse shared CSS from `src/diagram-css/` and snippets from `src/components/`.
5. Export deliverables to `projects/<name>/exports/`.
6. Promote reusable patterns back into `src/`, `docs/`, or future templates.

## Resource Packs

External assets belong in `resources/`.

Current packs:

- `resources/icons/azure/` - Azure service SVG icons, searchable with `node resources/icons/azure/find-icons.mjs "<service name>"`

The Azure icon pack includes:

- `resources/icons/azure/icon-index.json` - generated catalog of all SVG icons
- `resources/icons/azure/find-icons.mjs` - search helper for names, categories, and aliases
- `resources/icons/azure/build-icon-index.mjs` - index generator to rerun when the icon pack changes

Future examples:

- `resources/icons/aws/`
- `resources/icons/gcp/`
- `resources/logos/customers/`
- `resources/fonts/`
- `resources/reference-screenshots/`

When adding a resource pack, include a short note in `docs/` or the relevant folder explaining source, license, version/date, and intended use.

## Brand Profiles

Customer or internal visual identity belongs in `docs/brand-profiles/` and `src/diagram-css/themes/`.

Current profiles:

- `docs/brand-profiles/researchly.json` - Researchly-inspired style profile
- `src/diagram-css/themes/researchly.css` - CSS variables and small overrides for the Researchly style

Use `docs/brand-profile-template.md` when adding a new customer CI.

## Examples

Generic examples live in `examples/`.

Current examples:

- `examples/researchly-azure-ai-architecture.html` - wide Azure AI architecture example inspired by the provided reference diagram and Researchly style

Project-specific examples should move into `projects/<name>/diagrams/` once they become real customer/project work.

## Components

Reusable HTML snippets live in `src/components/`.

Current components:

- `diagram-zone.html` - numbered top-level diagram section
- `subpanel.html` - nested panel inside a zone
- `service-row.html` - icon plus service label row
- `list-item.html` - boxed source/search/input item
- `pipeline.html` - horizontal processing pipeline
- `stage.html` - application/use-case stage
- `metric.html` - evaluation metric tile

The diagrams remain plain HTML. Components are copyable snippets styled by `src/diagram-css/base.css` and the active theme. Example markup may include `data-component` attributes so humans, AI agents, and future scripts can recognize reusable blocks.

## Utility CSS

The project uses a small in-house utility layer instead of a framework like Tailwind.

- `src/diagram-css/base.css` defines tokens and component styles.
- `src/diagram-css/utilities.css` defines reusable layout utilities such as `u-grid`, `u-cols-2`, `u-gap-12`, `u-items-center`, and `u-panel`.
- Theme files in `src/diagram-css/themes/` override brand variables.

Use component classes for meaning and utility classes for simple layout adjustments.

## Preview In VS Code

Use the Run and Debug panel to preview diagrams:

1. Open `Run and Debug`.
2. Select `Preview Researchly Example (Edge)`, `Preview Primetals Module Architecture (Edge)`, or `Preview Current HTML File (Edge)`.
3. Press `F5`.

The launch configuration starts a local server on `http://localhost:8080` and opens the selected diagram in Edge.

## Empty/Future Folders

Some early scaffold folders were intentionally left out of the active structure:

- `templates/` is useful once we have stable starter diagrams. Until then, generic examples and components are enough.
- `src/layouts/` is useful once repeated layout patterns emerge. Right now layouts are still evolving inside diagrams and CSS.
- `prompts/` is useful once repeated generation prompts stabilize. Until then, `AGENTS.md` carries the main AI guidance.

These folders should only stay if they receive real content soon; otherwise they can be removed and recreated when needed.

## Reuse Strategy

Reusable things should graduate out of customer project folders:

- A repeated diagram element goes into `src/components/`.
- A repeated CSS pattern goes into `src/diagram-css/`.
- A repeated quality rule goes into `AGENTS.md`.
- A customer-independent example goes into `examples/`.
- A stable starter diagram can become a future `templates/` entry.
