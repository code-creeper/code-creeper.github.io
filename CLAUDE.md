# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Recent changes:** Read latest 3-5 entries in `CHANGELOG.md` for context.

## Commands

Package manager is **pnpm** (see `packageManager` in `package.json`). Dev server runs on `http://localhost:3000`.

- `pnpm install` — install dependencies
- `pnpm dev` — start dev server
- `pnpm generate` — produce a static site in `.output/public` (this is the production build used for deployment, not `build`)
- `pnpm build` / `pnpm preview` — SSR server build + local preview

There is no test suite, linter, or formatter configured.

## Architecture

This is a single-developer personal portfolio site for Abdul Haseeb, built with **Nuxt 4** (Vue 3, `<script setup lang="ts">`), Tailwind CSS, and statically generated. Nuxt modules in use: `@nuxtjs/tailwindcss`, `@nuxt/fonts`, `@nuxt/image`, `nuxt-aos` (scroll animations).

- **`app.vue`** — root; holds all SEO/`useHead` metadata (Open Graph, Twitter cards, JSON-LD Person schema). The site domain is read from `config.public.domain` and woven into canonical/OG URLs, so SEO is domain-aware.
- **`layouts/default.vue`** — global nav + footer wrapping every page.
- **`pages/index.vue`** — home, composed of `Home/*` section components (`Intro`, `About`, `Projects`, `UpworkReviews`, `StayInTouch`).
- **`pages/projects/`** — `index.vue` is the project gallery; each `<project>.vue` (andalus, capitalclub, ezelogs, stirling_cooper, tabootv, warroom) is a standalone case-study page. New project pages follow the andalus.vue pattern: `<section id="...">` blocks paired with a `TableOfContents` driven by `useProjectObserver`.

### Key conventions

- **Auto-imports & component naming**: Nuxt auto-imports components by path. A file at `components/Home/UpworkReviews.vue` is used as `<HomeUpworkReviews/>`; `components/Project/TableOfContents.vue` is `<ProjectTableOfContents/>`. The `Lazy*` prefix (e.g. `<LazyHomeUpworkReviewCard/>`) lazy-loads a component. Composables in `composables/` (e.g. `useProjectObserver`) are auto-imported too.
- **Scroll-spy TOC**: `composables/useProjectObserver.ts` uses an `IntersectionObserver` over every `section[id]` to track visible sections; project pages feed its `activeSections` to the recursive `TableOfContents` component to highlight the current section.
- **Upwork gating**: `config.public.upwork` (env `NUXT_PUBLIC_UPWORK`) is a feature flag. When true, social links are hidden and Upwork review cards/CTAs are shown instead (see `Intro.vue`, `StayInTouch.vue`, `UpworkReviews.vue`). The GitHub Pages deploy sets it `true`.
- **Content data**: client testimonials live in `data/reviews.ts` as a typed `Review[]`, consumed by the Upwork review components.
- **Styling**: global CSS variables (colors, fluid type) are defined in `assets/css/main.css` `:root` — use vars like `var(--primary-color)`, `var(--black-color)` rather than hardcoding. Tailwind utilities are used alongside scoped `<style>` blocks.

## Configuration & Deployment

Runtime config is environment-driven via `nuxt.config.ts` `runtimeConfig.public` (see `.env.example`):

- `NUXT_PUBLIC_UPWORK` — Upwork feature flag (above)
- `NUXT_PUBLIC_DOMAIN` — canonical domain for SEO (defaults to `zrinasoft.com`)
- `NUXT_BASE_URL` — app base URL
- `UPWORK_PROFILE_LINK` — Upwork profile URL

Two deploy targets, each on its own branch:

- **GitHub Pages** (`.github/workflows/github-pages.yml`) — on push to `master`, runs `pnpm generate` with `NUXT_PUBLIC_UPWORK=true` and `NUXT_PUBLIC_DOMAIN=code-creeper.github.io`, publishes `.output/public` to `gh-pages`.
- **EC2** (`.github/workflows/deploy-ec2.yml`) — on push to `ec2`, SSHes into the host and rebuilds inside the `portfolio_node_container` Docker container (`docker-compose.yml`, Node 22 alpine, port 3000).
