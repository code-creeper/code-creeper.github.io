<script setup lang="ts">
import type { TocItem } from "~/components/Project/TableOfContents.vue";

const { activeSections } = useProjectObserver();

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "project-goals", label: "Project Goals" },
  { id: "tech-stack", label: "Tech Stack" },
  {
    id: "features",
    label: "Features",
    children: [
      { id: "feature-discover", label: "Discover & Browse" },
      { id: "feature-series", label: "Series & Chapters" },
      { id: "feature-reviews", label: "Reviews" },
      { id: "feature-bookmarks", label: "Bookmarks & Tracking" },
      { id: "feature-history", label: "Reading History" },
      { id: "feature-notifications", label: "Notifications" },
      { id: "feature-profile", label: "Profile & Settings" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/toraka/main.webp" alt="Project Image" class="w-full rounded-xl" />
    <h2 class="fs-large text-white font-bold mt-3">Toraka</h2>
    <p class="text-white/80">
      Toraka is a manga, manhwa, and webtoon tracker and reader that brings thousands of series from across the web into
      one place — discover new titles, follow chapters as they release, and keep your reading progress in sync.
    </p>
    <ProjectLiveLink href="https://toraka.com" />
    <hr class="w-full border border-white/30 my-5" />
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Toraka is a discovery and tracking platform for manga, manhwa, and webtoons. It aggregates thousands of series
          from many scanlation sources into a single, fast interface where readers can browse and search a catalogue of
          3,000+ titles, open rich series pages, and jump straight to the chapters they want.
          <br />
          <br />
          Every reader gets a personal library: bookmark series, track current versus latest chapters across sources,
          rate and review titles, and get notified the moment a new chapter drops — with reading history and an activity
          profile tying it all together.
        </p>
        <img src="@/assets/images/projects/toraka/login.webp" alt="Toraka sign-in screen with email and Google login"
          class="w-full rounded-xl px-5" />
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The goal was to build a fast, modern reading companion that unifies fragmented scanlation sources into one
          dependable place to discover and follow series. It needed to handle a large catalogue and a high update
          frequency with a snappy, app-like experience — instant search, real-time chapter tracking across sources, and
          a personal library that stays in sync wherever a reader left off.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Java (Micronaut):</span>Powered a fast, lightweight backend API.</li>
          <li><span class="font-bold">Keycloak:</span>Handled authentication and identity management.</li>
          <li><span class="font-bold">React:</span>Built a dynamic, app-like user interface.</li>
          <li><span class="font-bold">TanStack Router:</span>Handled type-safe client-side routing.</li>
          <li><span class="font-bold">TanStack Query:</span>Managed server state, data fetching, and caching.</li>
          <li><span class="font-bold">Tailwind:</span>Applied utility-first CSS for responsive design.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-discover">
          <h4 class="font-bold text-white">Discover & Browse</h4>
          <img src="@/assets/images/projects/toraka/browse.webp"
            alt="Browse page searching 3,000+ series with filter controls" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/top_series.webp"
            alt="Top Series ranking of the most popular series this month" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/recently_updated.webp"
            alt="Recently updated feed of the latest chapter releases" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/search_anywhere.webp"
            alt="Global command-palette search modal for finding any series" class="w-full rounded-xl px-5" />
          <p class="text-white/90">Discovery sits at the heart of Toraka. The home page surfaces trending and top series
            alongside a live "recently updated" feed, while a full Browse view lets readers search 3,000+ titles and
            filter by status, source, genre, author, artist, type, and more. A global command-palette search (⌘K) makes
            jumping to any series instant from anywhere in the app.</p>
        </section>

        <section class="project-section" id="feature-series">
          <h4 class="font-bold text-white">Series & Chapters</h4>
          <img src="@/assets/images/projects/toraka/series_page.webp"
            alt="Series detail page with synopsis, genres, score, and official sources" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/series_chapters.webp"
            alt="Chapters tab listing every chapter with its source and release time" class="w-full rounded-xl px-5" />
          <p class="text-white/90">Each series has a rich detail page: cover art, alternative titles, synopsis, genres,
            score, status, popularity rank, and the official sources it's drawn from. A Chapters tab lists every chapter
            with its scanlation source and release time, sortable newest- or oldest-first, so readers can pick up exactly
            where they need to.</p>
        </section>

        <section class="project-section" id="feature-reviews">
          <h4 class="font-bold text-white">Reviews</h4>
          <img src="@/assets/images/projects/toraka/series_reviews.webp"
            alt="Reviews tab with recommend votes and an add-review button" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/add_review.webp"
            alt="Write-a-review modal with recommend / don't-recommend and a text field" class="w-full rounded-xl px-5" />
          <p class="text-white/90">Readers can share their take on any series with a simple recommend / don't-recommend
            review and a short write-up. Reviews appear on the series page with helpful votes and replies, and a quick
            modal lets anyone add their own in a few clicks.</p>
        </section>

        <section class="project-section" id="feature-bookmarks">
          <h4 class="font-bold text-white">Bookmarks & Tracking</h4>
          <img src="@/assets/images/projects/toraka/bookmarks_grid_view.webp"
            alt="Bookmarks library in grid view showing current and latest chapters" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/bookmarks_list_view.webp"
            alt="Bookmarks library in list view with reading-status badges" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/udpate_bookmark.webp"
            alt="Update reading progress modal with chapter, source, status, tags, and rating"
            class="w-full rounded-xl px-5" />
          <p class="text-white/90">Bookmarks turn Toraka into a personal reading tracker. Members build a library they can
            view as a grid or a list, filter and sort by status, source, tags, and type, and see current-versus-latest
            chapter at a glance. An update modal captures everything about a title — current chapter, source, reading
            status, tags, notes, a 1–10 rating, favourite and hidden flags, and even a binge mode.</p>
        </section>

        <section class="project-section" id="feature-history">
          <h4 class="font-bold text-white">Reading History</h4>
          <img src="@/assets/images/projects/toraka/reading_history.webp"
            alt="Reading history grouped by day showing chapter jumps, sources, and timestamps"
            class="w-full rounded-xl px-5" />
          <p class="text-white/90">A detailed history logs every chapter a reader opens, grouped by day and showing the
            chapter jump, source, and timestamp. It makes it easy to retrace steps across dozens of ongoing series and
            pick back up without losing the thread.</p>
        </section>

        <section class="project-section" id="feature-notifications">
          <h4 class="font-bold text-white">Notifications</h4>
          <img src="@/assets/images/projects/toraka/notifications.webp"
            alt="Notifications panel with new-chapter alerts and unread/all tabs" class="w-full rounded-xl px-5" />
          <p class="text-white/90">When a followed series releases a new chapter, Toraka notifies the reader. A
            notifications panel separates unread from all alerts, links straight to the new chapter, and supports marking
            chapters as read or clearing everything at once.</p>
        </section>

        <section class="project-section" id="feature-profile">
          <h4 class="font-bold text-white">Profile & Settings</h4>
          <img src="@/assets/images/projects/toraka/profile_view.webp"
            alt="Public profile with bio, reading stats, and an activity feed" class="w-full rounded-xl px-5" />
          <img src="@/assets/images/projects/toraka/profile_settings.webp"
            alt="Account settings with profile info, social links, and import/export" class="w-full rounded-xl px-5" />
          <p class="text-white/90">Each member has a public profile with a bio, follower counts, reading stats, and an
            activity feed, plus tabs for their reviews and bookmarks. Settings cover profile visibility, account details,
            and social links, and — usefully for a tracker — importing bookmarks from Comick, MAL, or Kenmei and
            exporting the whole library to CSV.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          The hardest part was unifying many independent scanlation sources into one coherent catalogue — matching the
          same series across sources, reconciling differing chapter numbering, and keeping a large, frequently-updated
          library fast to browse and search. Delivering real-time chapter tracking and notifications across thousands of
          titles, without the interface ever feeling sluggish, took careful data modelling and caching.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To keep the experience fast and app-like, the frontend leans on TanStack Query for aggressive caching and
          background refetching and TanStack Router for type-safe navigation, while a lightweight Micronaut backend serves
          the aggregated catalogue efficiently. Global search, grid and list library views, cross-source progress
          tracking, and import/export from other trackers make Toraka a genuinely central home for a reader's collection.
        </p>
        <img src="@/assets/images/projects/toraka/footer.webp" alt="project screenshot" class="w-full rounded-xl px-5" />
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
