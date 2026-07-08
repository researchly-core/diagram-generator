# AGENTS.md

Guidance for AI agents creating or editing diagrams in this repository.

## Mission

Create excellent architecture diagrams with HTML and CSS. Diagrams should be clear enough for customers, precise enough for architects, and maintainable enough to reuse across future projects.

This repo should improve over time. When a pattern, prompt, component, style, or checklist becomes reusable, extract it from the current project and place it in the shared folders.

## Repository Map

- `projects/` contains customer or product-specific work. Project diagrams, data, docs, and exports should stay inside the project folder.
- `src/diagram-css/` contains shared styling, design tokens, themes, and layout utilities.
- `src/components/` contains reusable diagram elements.
- `resources/` contains external assets such as cloud icons, logos, fonts, and references.
- `docs/` contains standards, decisions, quality checklists, and references.
- `examples/` contains generic finished diagrams that represent the quality bar and are not tied to a single customer project.
- `exports/` contains generic generated deliverables only. Project-specific exports belong under `projects/<project-name>/exports/`.

Future folders should be created only when they have real content:

- `templates/` for stable starter diagrams.
- `src/layouts/` for repeated composition patterns.
- `prompts/` for reusable intake or generation prompts.

## Diagram Quality Bar

Every diagram should have:

- A clear title and diagram level: context, container, component, deployment, or runtime.
- A visible audience fit: executive, customer, architect, engineer, operator, or security.
- Consistent spacing, alignment, typography, and line weights.
- Clear grouping for boundaries such as organization, tenant, region, network, trust zone, or runtime.
- Labeled relationships that explain why systems communicate.
- A legend only when visual encodings are not obvious.
- Enough detail to answer the intended question, but no more.

Avoid:

- Mixing too many abstraction levels in one view.
- Decorative icons without architectural meaning.
- Tiny unreadable labels.
- Crossed lines where a simple layout change would remove them.
- Vendor icon overload when a plain component box is clearer.
- Large blocks of explanatory text inside the diagram.

## C4-Like Levels

Use these levels unless the project asks for something else:

- `Context`: people, external systems, major platform boundary, primary value exchange.
- `Container`: apps, services, databases, queues, APIs, major cloud services, deployable units.
- `Component`: internals of one container, modules, adapters, jobs, handlers, repositories.
- `Runtime`: sequence or flow for one important use case.
- `Deployment`: environments, regions, network boundaries, compute/runtime placement, operations.

## HTML/CSS Rules

- Prefer semantic HTML with CSS classes over inline styles.
- Reuse shared CSS from `src/diagram-css/` when available.
- Reuse snippets from `src/components/` for common structures such as zones, subpanels, service rows, stages, pipelines, and metrics.
- Keep `data-component` attributes when using a shared snippet so future AI passes can recognize reusable blocks.
- Use `src/diagram-css/utilities.css` for small layout needs such as grid columns, gaps, alignment, and simple panels.
- Prefer meaningful component classes first, then add utility classes only where they reduce one-off CSS.
- Keep each diagram responsive enough to inspect on common desktop widths.
- Use CSS variables for colors, spacing, typography, and shadows.
- Use SVG only where it is the right primitive for arrows, connectors, or icons.
- Do not encode critical architecture only in color; pair color with labels, borders, or grouping.
- Keep source diagrams readable for humans. This repository values maintainability over clever generation.

## Visual Style

Default style should be customer-facing and calm:

- White or very light backgrounds.
- Subtle grouping surfaces.
- Strong readable labels.
- Restrained accent colors.
- Consistent icon sizing.
- Clear directional flow.
- Rounded corners only where they improve scanability.

Use deeper technical styling only for deep-dive diagrams, and still keep the information hierarchy clean.

## Asset Rules

- Put third-party assets under `resources/`.
- Do not duplicate large icon packs in project folders.
- Reference icons by path from the shared resource pack.
- For Azure diagrams, search the shared catalog before choosing icons: `node resources/icons/azure/find-icons.mjs "<service name>"`.
- When adding a new resource pack, document its source, license, and date.
- Prefer official cloud/vendor icons for recognizable managed services.
- Prefer generic boxes for custom services unless a logo is truly useful.

## Project Workflow

For a new project:

1. Create `projects/<project-name>/`.
2. Add `brief.md` with audience, purpose, scope, known systems, constraints, and source links.
3. Add source data under `projects/<project-name>/data/` when diagrams are data-driven.
4. Add diagrams under `projects/<project-name>/diagrams/`.
5. Add generated deliverables under `projects/<project-name>/exports/`.
6. Add project-specific notes under `projects/<project-name>/docs/`.

For existing projects:

1. Read the project brief and existing diagrams first.
2. Identify the diagram level and audience before editing.
3. Keep changes scoped to the requested diagram unless extracting shared improvements.
4. Promote reusable improvements into shared folders.
5. Update the project README or diagram index when adding or renaming diagrams.

## AI Prompting Expectations

When generating a diagram, first reason about:

- Who is the audience?
- What decision or explanation should this diagram support?
- Which C4-like level is appropriate?
- What belongs outside the boundary?
- What relationships need labels?
- Which details should be intentionally omitted?

If inputs are incomplete, make reasonable assumptions and list them in the project brief or diagram notes.

## Review Checklist

Before finishing, check:

- The diagram answers one clear question.
- The abstraction level is consistent.
- Layout has no obvious overlaps, clipping, or unreadable text.
- Relationship labels are meaningful.
- Boundaries and ownership are visible.
- Icons are relevant and consistently sized.
- The source file is easy for the next AI or human to modify.
- Any reusable improvement was moved to the right shared folder.

## Change Discipline

- Do not overwrite unrelated project diagrams.
- Do not move or delete resource packs unless explicitly asked.
- Keep generated exports separate from source HTML.
- Prefer small reusable improvements over broad rewrites.
- When making a significant style or structure decision, document it in `docs/`.
