# Stevens Water — Redesign Concept

Modern redesign concept for [stevenswater.com](https://stevenswater.com), built with **React + Vite** (HTML/CSS/JS, no CMS).

- Home page demo: hero, category cards, featured instruments, M2M band, brands, about, footer
- Product data sourced from the Shopify export (`products_export_1.csv`)
- **Order via Email** flow: product order modal pre-fills an email to the sales team (no checkout/payment integration yet — placeholder address in `src/data/products.js`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

Deployed automatically to GitHub Pages on push to `main` (see `.github/workflows/deploy.yml`).

> Design note: full multi-page design lives in Figma; this repo currently implements the home page concept.
