# Nijjar Immigration Services — Website

Marketing site for Nijjar Immigration Services. Plain HTML/CSS/JS, bundled with Vite.
No framework. Hash-based routing.

## Build

```bash
npm install --no-package-lock
npm run build && cp -r dist out
```

## Deploy (Render)

Build command: `npm install && node node_modules/vite/bin/vite.js build && cp -r dist out`
Publish directory: `out/`

## Pages

- `/` — Home
- `#/about` — About
- `#/practice` — Practice areas index
- `#/practice/:slug` — Practice detail (10 areas)
- `#/contact` — Contact
- `#/assessment` — Free assessment booking
- `#/privacy` / `#/tos` — Legal placeholders
- `#/404` — Not found

## Color palette (preserved)

- Black: `#1a1a1a`
- Gold: `#E2A322`
- White: `#FFFFFF`
