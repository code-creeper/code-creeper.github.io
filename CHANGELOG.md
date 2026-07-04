# Changelog

All notable changes to this app will be documented in this file.

## 2026-07-04

### Added
- **Project screenshots — click-to-zoom lightbox**: Clicking any screenshot on a project case-study page (`/projects/<slug>`) opens it full-size in a scrollable modal, so tall screenshots can be read in full instead of being shrunk to the content column. Closes on Esc, backdrop click, or the ✕ button; the modal widens to 1500/1750px on `xl`/`2xl`. Implemented via a single delegated click listener in `layouts/default.vue` (no per-image markup), a new `components/Project/Lightbox.vue`, and a `zoom-in` hover affordance on `img.rounded-xl`. Disabled at ≤768px, where images already span the device width.

### Changed
- **Project images**: Dropped `px-5` horizontal padding from in-section screenshots so the lightbox hover ring hugs the image edges; `PATTERN.md` updated to the padding-free convention.

## 2026-06-28

### Changed
- **SEO (app.vue)**: Aligned all metadata with the updated "Senior Full-Stack Engineer" positioning — page title, description, Open Graph and Twitter card titles/descriptions, plus the JSON-LD `jobTitle` and an expanded `knowsAbout` skill list (Laravel, PHP, SaaS, Vue/Nuxt, React, Python/FastAPI/Django, Docker, AWS, Linux).

## 2026-06-26

### Changed
- **Home/Intro**: New headline "Senior Full-Stack Engineer | Laravel, SaaS & Scalable Web Apps" with a supporting subline; trimmed the older role/specialty lines. Added a hand-drawn SVG curve underline to the Upwork link to distinguish it from the green title text.
- **Home/About**: Rewrote the About Me copy (backend/SaaS/Laravel focused) with highlighted tech keywords, and widened the text column to a 60/40 split (`md:grid-cols-[3fr_2fr]`).
