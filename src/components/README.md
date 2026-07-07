# Diagram Components

Reusable HTML snippets for architecture diagrams.

These are framework-free components: copy the snippet into a diagram and change the text, icons, and classes. Styling comes from `src/diagram-css/base.css` plus the active theme file.

## Components

- `diagram-zone.html` - numbered top-level diagram section
- `subpanel.html` - nested panel inside a zone
- `service-row.html` - icon plus service label row
- `list-item.html` - boxed list item for sources, search features, and inputs
- `pipeline.html` - horizontal processing pipeline with milestones
- `stage.html` - application/use-case stage
- `metric.html` - evaluation metric tile

## Usage

1. Copy a snippet from this folder.
2. Paste it into a diagram HTML file.
3. Replace placeholders such as `{{number}}`, `{{title}}`, `{{icon}}`, and `{{label}}`.
4. Keep the existing class names unless you intentionally change the shared CSS.

Prefer improving these snippets when a pattern repeats across examples or projects.
