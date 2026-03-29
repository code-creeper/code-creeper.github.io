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
      { id: "feature-reaction", label: "Reaction" },
      { id: "feature-sticker", label: "Stickers" },
      { id: "feature-reply", label: "Reply" },
      { id: "feature-links-with-preview", label: "Sharing Links with Preview" },
      { id: "feature-voice-notes", label: "Voice Notes" },
      { id: "feature-files-and-videos", label: "Sharing Files & Videos" },
      { id: "feature-admin-portal", label: "Admin Portal" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/warroom/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Warroom</h2>
    <p class="text-white/80">
      Warroom is open communication platform for quick and easy communication between team members and individual while
      sharing links, emojis, stikers, voice notes and files.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Warroom is a dynamic communication platform designed for seamless and efficient collaboration. It enables team
          members and individuals to exchange messages, share links, emojis, stickers, voice notes, and files
          effortlessly.
        </p>
        <img src="@/assets/images/projects/warroom/home.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The goal of Warroom is to provide a seamless and efficient communication platform that enables both teams and
          individuals to collaborate effortlessly. It is designed to support real-time messaging with instant delivery
          and synchronization across devices, ensuring smooth interactions.
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

        <section class="project-section" id="feature-reaction">
          <h4 class="font-bold text-white">Reaction</h4>
          <img src="@/assets/images/projects/warroom/react.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-sticker">
          <h4 class="font-bold text-white">Stickers</h4>
          <img src="@/assets/images/projects/warroom/sticker.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-reply">
          <h4 class="font-bold text-white">Reply</h4>
          <img src="@/assets/images/projects/warroom/reply.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-links-with-preview">
          <h4 class="font-bold text-white">Sharing Links with Preview</h4>
          <img src="@/assets/images/projects/warroom/link_preview.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-voice-notes">
          <h4 class="font-bold text-white">Voice Notes</h4>
          <img src="@/assets/images/projects/warroom/voice.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-files-and-videos">
          <h4 class="font-bold text-white">Sharing Files & Videos</h4>
          <img src="@/assets/images/projects/warroom/file_and_video.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-admin-portal">
          <h4 class="font-bold text-white">Admin Portal</h4>
          <img src="@/assets/images/projects/warroom/admin.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          One of the primary challenges in developing Warroom is ensuring real-time, seamless communication without
          latency issues, especially when handling large files, voice notes, and multimedia sharing.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address these challenges, Warroom takes several key initiatives. The platform leverages advanced WebSocket
          technology for instant message delivery and real-time collaboration. Optimized media handling and compression
          techniques are implemented to support high-speed file sharing without compromising quality.
        </p>
        <img src="@/assets/images/projects/warroom/footer.jpg" alt="project screenshot" class="w-full rounded-xl px-5"/>
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