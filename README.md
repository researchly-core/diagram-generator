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
│   ├── diagram-css/           # Shared visual language: tokens, utilities, themes
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

## Brand Profiles

Customer or internal visual identity belongs in `docs/brand-profiles/` and `src/diagram-css/themes/`.

Current profiles:

- `docs/brand-profiles/researchly.json` - Researchly-inspired style profile
- `src/diagram-css/themes/researchly.css` - CSS variables and small overrides for the Researchly style

Use `docs/brand-profile-template.md` when adding a new customer CI.

## Examples

Current examples:

- `examples/researchly-azure-ai-architecture.html` - wide Azure AI architecture example inspired by the provided reference diagram and Researchly style

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

The examples remain plain HTML. Components are copyable snippets styled by `src/diagram-css/base.css` and the active theme. Example markup may include `data-component` attributes so humans, AI agents, and future scripts can recognize reusable blocks.

## Utility CSS

The project uses a small in-house utility layer instead of a framework like Tailwind.

- `src/diagram-css/base.css` defines tokens and component styles.
- `src/diagram-css/utilities.css` defines reusable layout utilities such as `u-grid`, `u-cols-2`, `u-gap-12`, `u-items-center`, and `u-panel`.
- Theme files in `src/diagram-css/themes/` override brand variables.

Use component classes for meaning and utility classes for simple layout adjustments.

## Preview In VS Code

Use the Run and Debug panel to preview diagrams:

1. Open `Run and Debug`.
2. Select `Preview Researchly Example (Chrome)` or `Preview Researchly Example (Edge)`.
3. Press `F5`.

The launch configuration starts a local server on `http://localhost:8080` and opens the example diagram.

To preview the currently open HTML file, select `Preview Current HTML File (Chrome)`.

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
