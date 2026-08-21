# Public Layer

Public Layer's prerendered one-page site for its Title II municipal accessibility
practice. It uses TanStack Start, React, Tailwind CSS, Vite, and Cloudflare
Workers.

## Local development

Node 22.12 or newer is required.

```bash
npm install
npm run dev
```

The local site opens at <http://localhost:3000>.

## Quality checks

```bash
npm run typecheck
npm run build
```

`npm run check` runs both. The production build prerenders the homepage to static
HTML while preserving TanStack Start's server fallback for unknown routes.

## Project structure

- `src/routes` owns URL-level concerns only.
- `src/pages` composes complete pages from named sections.
- `src/components` contains reusable UI and focused interactive elements.
- `src/content` contains structured business copy used by page sections.
- `src/site.ts` is the single source for site identity, metadata, contact
  details, and the assessment email link.
- `src/start.ts` applies response headers to server-rendered fallbacks; static
  assets use the matching rules in `public/_headers`.

Before launch, replace the placeholder `hello@publiclayer.example` address in
`src/site.ts`. If the production domain changes, update `site.url`,
`public/robots.txt`, and `public/sitemap.xml` together.

## Deployment

```bash
npm run deploy
```

Cloudflare's Vite integration serves the hashed static assets and deploys the
TanStack Start server entry. Security and caching headers live in
`public/_headers`; Workers observability is enabled in `wrangler.jsonc`.
