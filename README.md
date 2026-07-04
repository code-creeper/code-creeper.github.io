# Abdul Haseeb — Portfolio

Personal portfolio site for **Abdul Haseeb**, a Senior Full-Stack Engineer. Built with **Nuxt 4** (Vue 3, `<script setup lang="ts">`) and Tailwind CSS, and shipped as a statically generated site.

## Tech Stack

- **[Nuxt 4](https://nuxt.com)** (Vue 3, TypeScript) — statically generated (SSG)
- **Tailwind CSS** (`@nuxtjs/tailwindcss`) + global CSS variables in `assets/css/main.css`
- **Nuxt modules:** `@nuxt/fonts`, `@nuxt/image`, `nuxt-aos` (scroll animations)
- **Vitest** + jsdom for unit tests
- **pnpm** as the package manager

## Getting Started

Requires **pnpm** (see the `packageManager` field in `package.json`).

```bash
pnpm install   # install dependencies
pnpm dev       # start the dev server on http://localhost:3000
```

Copy `.env.example` to `.env` and adjust as needed (see [Configuration](#configuration)).

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server on `http://localhost:3000` |
| `pnpm generate` | **Production build** — static site in `.output/public` (used for deployment) |
| `pnpm build` / `pnpm preview` | SSR server build + local preview |
| `pnpm test` | Run the Vitest unit tests once |
| `pnpm test:watch` | Run the tests in watch mode |

> The deployed artifact is produced by `pnpm generate`, **not** `pnpm build`.

## Project Structure

```
app.vue                 # root — all SEO/useHead metadata (OG, Twitter, JSON-LD)
layouts/default.vue     # global nav + footer; hosts the project-image lightbox
pages/
  index.vue             # home, composed of Home/* section components
  projects/
    index.vue           # project gallery
    <slug>.vue          # one case-study page per project
    PATTERN.md          # the shared structure every project page follows
components/             # auto-imported by path (e.g. Home/, Project/, Icons/)
composables/            # auto-imported (e.g. useProjectObserver — scroll-spy TOC)
data/reviews.ts         # typed client testimonials
utils/lightbox.ts       # lightbox trigger logic (unit-tested)
assets/css/main.css     # :root design tokens (colors, fluid type)
tests/                  # Vitest unit tests
```

### Conventions

- **Auto-imports:** components are referenced by path — `components/Home/UpworkReviews.vue` → `<HomeUpworkReviews/>`; the `Lazy*` prefix lazy-loads. Composables and `utils/` are auto-imported too.
- **Project pages:** every page under `pages/projects/` shares one structure. **Read `pages/projects/PATTERN.md` before adding or editing one.**
- **Upwork gating:** `config.public.upwork` (env `NUXT_PUBLIC_UPWORK`) toggles between showing social links and Upwork review cards/CTAs.
- **Styling:** use the CSS variables in `assets/css/main.css` (e.g. `var(--primary-color)`) rather than hardcoding colors.

## Testing

Testing is deliberately minimal — Vitest + jsdom cover only genuine logic (e.g. `utils/lightbox.ts`), not presentational markup or copy.

```bash
pnpm test
```

## Configuration

Runtime config is environment-driven (`nuxt.config.ts` → `runtimeConfig.public`). See `.env.example`:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NUXT_PUBLIC_UPWORK` | Upwork feature flag (hide socials, show Upwork reviews) | `false` |
| `NUXT_PUBLIC_DOMAIN` | Canonical domain for SEO (canonical/OG URLs) | `zrinasoft.com` |
| `NUXT_BASE_URL` | App base URL | `/` |
| `UPWORK_PROFILE_LINK` | Upwork profile URL | — |

## Deployment

Two targets, each on its own branch:

- **GitHub Pages** (`.github/workflows/github-pages.yml`) — on push to `master`, runs `pnpm generate` with `NUXT_PUBLIC_UPWORK=true` and `NUXT_PUBLIC_DOMAIN=code-creeper.github.io`, then publishes `.output/public` to the `gh-pages` branch.
- **EC2** (`.github/workflows/deploy-ec2.yml`) — on push to `ec2`, SSHes into the host and rebuilds inside the `portfolio_node_container` Docker container (Node 22 alpine, port 3000).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md) for notable changes.
