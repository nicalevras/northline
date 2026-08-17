# Northline

TanStack Start site for the Title II municipal accessibility practice.

Working name lives in `src/site.ts` — change it there.

Needs Node 22 (Homebrew: `export PATH="/opt/homebrew/opt/node@22/bin:$PATH"`). Vite 8 will not build on Node 20.10.

```bash
cd ada-municipal-compliance/website
npm install
npm run dev
```

Opens at http://localhost:3000.

Pages prerender to static HTML at build time. The contact form still runs on the Worker and writes to a Cloudflare KV namespace (`INQUIRIES`). Wire email later.

```bash
npm run deploy   # vite build && wrangler deploy
```

The site is meant to meet its own bar: one `h1` per page, skip link, labeled fields, visible focus, real text for fees — no overlay, no “ADA certified” banner.
