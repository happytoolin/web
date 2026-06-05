# happytoolin web

Astro monorepo for Happy Tooling web properties.

## Sites

- `apps/home` -> `happytoolin.com`
- `apps/alur` -> `alur.happytoolin.com`
- `apps/bin` -> `bin.happytoolin.com`

## Commands

```bash
pnpm install
pnpm dev:home
pnpm dev:alur
pnpm dev:bin
pnpm build
```

## Cloudflare Workers

Each app has its own `wrangler.jsonc` with a custom-domain route:

- `apps/home/wrangler.jsonc` -> `happytoolin.com`
- `apps/alur/wrangler.jsonc` -> `alur.happytoolin.com`
- `apps/bin/wrangler.jsonc` -> `bin.happytoolin.com`

Deploy one site:

```bash
pnpm deploy:home
pnpm deploy:alur
pnpm deploy:bin
```

Validate all Worker bundles without deploying:

```bash
pnpm deploy:dry-run
```

The Astro Cloudflare adapter redirects Wrangler to the generated `dist/server/wrangler.json` at deploy time. Static assets, including `robots.txt` and the generated sitemap, are emitted under `dist/client`.
