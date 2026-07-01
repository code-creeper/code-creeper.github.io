# Project Case-Study Page Pattern

Read this before adding or editing a `pages/projects/*.vue` page. Every project page shares the
**same structure** — copy it exactly. Canonical example: `andalus.vue`.

## Structure

Two `.page` blocks in `<template>`:

1. **Hero** — `<div class="page">`: `main.webp` image → `<h2 class="fs-large">` title → intro `<p class="text-white/80">` → optional `<ProjectLiveLink href="https://..." />` (live-site pill, auto-derives the domain) → `<hr>`.
2. **Body** — `<div class="page grid grid-cols-6 md:grid-cols-10 gap-6">`: a content column (`col-span-7`) of sections + a sticky TOC column (`col-span-3`).

Sections, in this order (each is `<section class="project-section" id="...">` with an `<h3 class="project-heading heading-bl">` heading):

`overview` → `project-goals` → `tech-stack` → `features` → `challenges` → `initiatives`

`features` wraps one nested `<section id="feature-*">` per feature, each with an `<h4 class="font-bold text-white">`, `<img>`(s), and a describing `<p>`.

## Scroll-spy TOC (don't break)

`useProjectObserver()` observes **every `section[id]`** and drives `activeSections`; the `toc` array feeds `<LazyProjectTableOfContents>`. So:

- Every `toc` `id` **must match** a `<section id>`. Feature ids go under the `features` item's `children`.
- Keep `<section id>`, its `<h4>` text, and the `toc` label in sync when adding/renaming a feature.

Auto-imported (no manual imports): `useProjectObserver`, `<LazyProjectTableOfContents>` (type `TocItem`).

## Styling

Use shared classes, never hardcode colors (use `var(--primary-color)` etc.):
`.page`, `.project-section`, `.project-heading heading-bl`, `.tech-stack`, `.fs-large`.
Body copy `text-white/90` (hero intro `text-white/80`). Images: hero `w-full rounded-xl`, in-section `w-full rounded-xl px-5`. Add a scoped `<style>` only for page-specific bits.

## Template

Copy `andalus.vue` (or the block below), replace `SLUG`/`Title`/copy, keep the structure.

```vue
<script setup lang="ts">
import type { TocItem } from "~/components/Project/TableOfContents.vue";
const { activeSections } = useProjectObserver();
const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "project-goals", label: "Project Goals" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "features", label: "Features", children: [
    { id: "feature-one", label: "Feature One" },
  ]},
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/SLUG/main.webp" alt="Project Image" class="w-full rounded-xl" />
    <h2 class="fs-large text-white font-bold mt-3">Title</h2>
    <p class="text-white/80">What the product is and who it's for.</p>
    <ProjectLiveLink href="https://example.com" /> <!-- optional; omit if no live site -->
    <hr class="w-full border border-white/30 my-5" />
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">What it is + engagement context.</p>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">The objective.</p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>
        <section class="project-section" id="feature-one">
          <h4 class="font-bold text-white">Feature One</h4>
          <img src="@/assets/images/projects/SLUG/feature-one.webp" alt="what this screen shows"
            class="w-full rounded-xl px-5" />
          <p class="text-white/90">2–4 sentences on what this screen does.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">Difficulties faced.</p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">How they were addressed.</p>
      </section>
    </div>
    <div class="col-span-3 mt-5">
      <div class="sticky top-[120px] flex flex-col gap-2">
        <h4 class="text-white font-bold mb-2">Table of Contents</h4>
        <LazyProjectTableOfContents :items="toc" :active-sections="activeSections" />
      </div>
    </div>
  </div>
</template>
```

A feature may hold multiple `<img>`s. Don't reorder the top-level sections.

## Also required

- **Register the card** in `pages/projects/index.vue`: import `main.webp`, add a `<HomeProjectCard :image title description to="/projects/SLUG" />`. A page is unlinked until you do this.
- Images go in `assets/images/projects/SLUG/` as `.webp`.
- Keep content accurate — no invented claims. If a live URL / screenshots exist, use the `refresh-project-page` skill to write and fact-check feature copy.
