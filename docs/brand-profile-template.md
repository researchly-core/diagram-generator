# Brand Profile Template

Use this template when creating a customer or internal visual identity for diagrams.

Store machine-readable profiles in `docs/brand-profiles/<brand>.json` and matching CSS themes in `src/diagram-css/themes/<brand>.css`.

## Required Fields

```json
{
  "name": "Customer or internal brand name",
  "source": {
    "website": "https://example.com",
    "capturedAt": "YYYY-MM-DD",
    "notes": "Where the style was inferred from."
  },
  "identity": {
    "positioning": "Short description of brand personality.",
    "audience": ["Customer", "Architect", "Executive"],
    "tone": ["clear", "premium", "technical"]
  },
  "colors": {
    "background": "#ffffff",
    "surface": "#f8fafc",
    "surfaceStrong": "#eef4ff",
    "text": "#0f172a",
    "muted": "#64748b",
    "primary": "#2563eb",
    "primaryDark": "#1e40af",
    "accent": "#7c3aed",
    "warning": "#f59e0b",
    "success": "#16a34a",
    "border": "#d8e2f0"
  },
  "typography": {
    "fontFamily": "Inter, Arial, sans-serif",
    "titleWeight": 750,
    "labelWeight": 700,
    "bodyWeight": 500
  },
  "shape": {
    "radiusSmall": "8px",
    "radiusMedium": "12px",
    "radiusLarge": "18px",
    "borderWidth": "1.5px"
  },
  "diagramStyle": {
    "density": "high",
    "iconStyle": "official-cloud-icons",
    "connectorStyle": "blue-directional-arrows",
    "groupStyle": "light-panels-with-numbered-badges"
  }
}
```

## Guidance

- Keep brand profiles descriptive enough for AI agents to apply the style without visiting the website again.
- Put exact colors in JSON and expose them as CSS variables in the theme file.
- If the style is inferred from public pages, record the date and URL.
- Use one profile per customer, product, or internal brand.
