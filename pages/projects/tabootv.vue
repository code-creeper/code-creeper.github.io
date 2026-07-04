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
      { id: "feature-series", label: "Series" },
      { id: "feature-shorts", label: "Shorts" },
      { id: "feature-comment-reply-reaction", label: "Comment, Reply & Reactions" },
      { id: "feature-community", label: "Community" },
      { id: "feature-live-chat", label: "Live Chat" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/tabootv/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Tabootv</h2>
    <p class="text-white/80">
      Taboo.tv is a creator-driven video streaming platform built for raw, unfiltered storytelling — real-world travel
      and culture with no censorship and full creative control, outside the constraints of mainstream platforms like
      YouTube.
    </p>
    <ProjectLiveLink href="https://taboo.tv"/>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Taboo.tv is a video streaming platform for raw, unfiltered creator content — real-world travel and culture
          from the places most media won't go. It brings together short-form Shorts, full-length videos, and
          multi-episode series, wrapped in a social layer of community posts, threaded comments, reactions, and live
          chat. Access is subscription-based, and the catalogue is built around creators whose series document journeys
          across South America and beyond.
        </p>
        <img src="@/assets/images/projects/tabootv/home.webp" alt="project screenshot" class="w-full rounded-xl"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          I led the development of Taboo.tv, a platform offering unfiltered travel and cultural content, by integrating
          React, Vue.js, JavaScript, HTML, CSS, and Tailwind on the front-end, and leveraging Laravel and AWS on the
          back-end.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Tailwind & Vuetify:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-series">
          <h4 class="font-bold text-white">Series</h4>
          <img src="@/assets/images/projects/tabootv/series.webp"
               alt="Series page with a featured trailer, episode count, and numbered episode cards"
               class="w-full rounded-xl"/>
          <p class="text-white/90">Content is organised into multi-episode series, each with a featured trailer, an
            episode count, and a synopsis. Members can start a series and move through its parts in order — for example
            a four-part journey across South America — with episode cards previewing every instalment.</p>
        </section>

        <section class="project-section" id="feature-shorts">
          <h4 class="font-bold text-white">Shorts</h4>
          <img src="@/assets/images/projects/tabootv/shorts.webp"
               alt="Vertical short-form video feed with mute, reaction, and comment controls"
               class="w-full rounded-xl"/>
          <p class="text-white/90">A vertical, swipeable feed of short-form videos in the style of TikTok or Reels.
            Viewers scroll between clips with on-screen controls for mute, reactions, and comments, making it easy to
            sample bite-sized content between longer watches.</p>
        </section>

        <section class="project-section" id="feature-comment-reply-reaction">
          <h4 class="font-bold text-white">Comment, Reply & Reactions</h4>
          <img src="@/assets/images/projects/tabootv/comments.webp"
               alt="Video watch page with a fire reaction count and a threaded comments section"
               class="w-full rounded-xl"/>
          <p class="text-white/90">Every video carries a full engagement layer beneath it. Members can react with a fire
            button, leave comments, reply to one another in threads, and like or dislike individual replies — turning
            each video into a conversation rather than a one-way broadcast.</p>
        </section>

        <section class="project-section" id="feature-community">
          <h4 class="font-bold text-white">Community</h4>
          <img src="@/assets/images/projects/tabootv/community.webp"
               alt="Community news feed with a creator post, image, reactions, and comments"
               class="w-full rounded-xl"/>
          <p class="text-white/90">A dedicated Community feed lets creators post text-and-image updates straight to
            their audience, who can react and comment in return. A separate Creators view and members-only posts give
            the platform a social home that lives beyond the video catalogue.</p>
        </section>

        <section class="project-section" id="feature-live-chat">
          <h4 class="font-bold text-white">Live Chat</h4>
          <img src="@/assets/images/projects/tabootv/live-chat.webp"
               alt="Live chat panel open alongside the home page with timestamped messages"
               class="w-full rounded-xl"/>
          <p class="text-white/90">A real-time Live Chat panel runs alongside the site, letting members talk to each
            other live with instant message delivery, timestamps, and emoji. It adds a sense of shared, in-the-moment
            presence to the viewing experience.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Like any project, Taboo.tv came with its share of challenges. Delivery meant coordinating closely with several
          teams — design, mobile, and QA — to ship a seamless experience across web and app. Handling large video
          uploads to AWS S3 introduced complexity around file chunking and reliable delivery, and supporting multiple
          payment methods and gateways made subscription management a demanding part of the build.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          I led our team in adopting agile methodologies, which enhanced our collaboration and adaptability.
          Implementing a continuous delivery pipeline allowed us to automate testing and deployment, resulting in
          faster, more reliable releases without compromising quality.
        </p>
        <img src="@/assets/images/projects/tabootv/features.webp" alt="project screenshot"
             class="w-full rounded-xl"/>
      </section>
    </div>

    <div class="col-span-3 mt-5">
      <div class="sticky top-[120px] flex flex-col gap-2">
        <h4 class="text-white font-bold mb-2">Table of Contents</h4>
        <LazyProjectTableOfContents :items="toc" :active-sections="activeSections"/>
      </div>
    </div>
  </div>
</template>