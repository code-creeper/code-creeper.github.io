---
name: refresh-project-page
description: Rewrite and fact-check the content of a project case-study page under pages/projects/*.vue. Crawls the project's live URL (if available) and analyzes each feature screenshot to update copy, enhance the writing, and remove false or unverifiable claims. If no live link is available, asks the user targeted questions first and updates content from the answers. Use when the user asks to update/refresh/rewrite/fact-check a project page's content, fill in placeholder copy, or describe features from their images.
---

# Refresh a project case-study page

This portfolio has standalone case-study pages at `pages/projects/<project>.vue` (e.g. `capitalclub.vue`, `andalus.vue`). Each follows the same structure: a hero (image + title + intro), then `Overview`, `Project Goals`, `Tech Stack`, `Features` (each feature is a `<section>` with an `<img>` + description), `Challenges`, and `Initiatives`, plus a `TableOfContents` driven by the `toc` array. Feature screenshots live in `assets/images/projects/<project>/`.

Your job: make the page's written content **accurate, well-written, and free of false or invented claims**, grounded in real evidence (the live site and the actual screenshots) — not assumptions.

## Step 1 — Read the page and gather evidence

1. Read the target page `pages/projects/<project>.vue`. Note the `toc` array, every `<section id>`, and every `<img src>` in the Features section.
2. **Read every feature screenshot** with the Read tool (they render visually) — the images in `assets/images/projects/<project>/`. These are the primary source of truth for what each feature actually does.
3. Determine the **live URL**:
   - Look for an existing `live-link` / anchor in the page.
   - Otherwise ask the user for it, OR proceed to the "No live link" path below.

## Step 2 — Decide the path

**If a live URL is available:** crawl it with WebFetch. Ask it to describe what the platform is, its purpose, target audience, headline/tagline copy, main sections, and any concrete claims (member counts, countries, course names, "featured on", etc.). Many of these sites are invite-only, so you may only reach the public landing page — that's fine; combine it with the screenshots.

**If NO live link is available (or the user says there isn't one):** do NOT invent content. Ask the user a short batch of targeted questions with AskUserQuestion, then update the copy from their answers combined with what the screenshots show. Cover at minimum:
- What is the product, in one line? Who is it for?
- What is its real category (e.g. education/academy, marketplace, SaaS, community/network, fintech)? — this is the field most likely to be wrong in existing copy.
- Is the tech stack listed on the page accurate? Any corrections?
- Any hard numbers worth citing (users, countries, scale) and are they confirmed?
- Anything currently on the page that is false or exaggerated and should be removed?

Only update content from answers when the live link is unavailable — when the live link IS available, prefer the crawl + screenshots as the source and use questions only to resolve genuine ambiguity.

## Step 3 — Rewrite the content

Work section by section:

- **Hero intro + Overview** — state what the product actually is. This is where miscategorization usually hides (e.g. a page calling an education/community platform an "investment platform"). Fix it. Keep any true narrative about the engagement (tight deadline, stalled prior work, etc.).
- **Project Goals** — tie to confirmed facts (real member counts, countries, scale) where available.
- **Tech Stack** — treat as the developer's own knowledge; keep unless the user corrects it. Do not disprove or rewrite the stack from screenshots. Only fix grammar/spacing.
- **Features** — go image by image. For each feature `<section>`, look at its screenshot and write a 2-4 sentence description of what that screen actually shows and does. Update the `<h4>` heading, the matching `toc` label, and the `alt` text to match. Replace any `[Placeholder ...]` text.
- **Challenges / Initiatives** — keep them truthful. Remove invented architecture buzzwords (e.g. "microservices architecture" on a monolith) and anything not supported by evidence.

## Rules

- **Never invent facts.** If you can't verify something and can't confirm it with the user, leave it out rather than guess.
- **Remove false or exaggerated claims** even if they sound impressive.
- Match the existing tone and Tailwind/CSS conventions on the page. Reuse the shared classes (`project-section`, `project-heading heading-bl`, `text-white/90`, etc.) — see CLAUDE.md and `andalus.vue` for the canonical pattern.
- Keep `toc` labels, section `id`s, `<h4>` headings, and `alt` text consistent with each other after any rename.
- Fix typos and grammar throughout the copy you touch.
- This is a content task — don't restructure the page layout or components unless asked.

## Finish

Summarize for the user: what was factually wrong and corrected, what each feature description now says (and that it came from the screenshot), and any claims you kept but couldn't independently verify (e.g. the tech stack) so they can confirm.
