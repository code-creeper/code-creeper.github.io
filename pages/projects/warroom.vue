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
      Warroom is a private, uncensored community messaging platform built for Andrew Tate — a space where a creator's
      members talk freely in groups and direct messages, with full admin control over who's in the room.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Warroom is a private, uncensored messaging platform built for Andrew Tate's members-only community. Rather
          than relying on mainstream platforms that could moderate or remove content, the client wanted a space they
          fully control, where their audience can speak freely. Members chat in shared groups and one-to-one private
          conversations with a full set of modern messaging features — reactions, stickers, replies, voice notes, link
          previews, and file and video sharing — while real-time touches like typing indicators and delivery receipts
          keep conversations feeling live. Admins retain complete control, creating groups and inviting, removing, or
          banning members as needed.
        </p>
        <img src="@/assets/images/projects/warroom/home.webp" alt="project screenshot" class="w-full rounded-xl"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The goal was to give the client a self-owned, censorship-resistant home for their community — a fast, reliable
          web app for real-time messaging that they, not a third-party platform, ultimately control. It needed instant
          message delivery and synchronisation, a rich chat experience on par with mainstream messengers, and the
          moderation tools an admin needs to keep a large, active community in order.
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
          <img src="@/assets/images/projects/warroom/react.webp"
               alt="Emoji reaction bar over a chat message with reactions shown beneath messages"
               class="w-full rounded-xl"/>
          <p class="text-white/90">Members can react to any message with emoji, tapping a quick reaction bar to add a
            thumbs-up, heart, laugh, and more. Reactions sit neatly beneath the message, giving people a lightweight way
            to respond without cluttering the conversation.</p>
        </section>
        <section class="project-section" id="feature-sticker">
          <h4 class="font-bold text-white">Stickers</h4>
          <img src="@/assets/images/projects/warroom/sticker.webp"
               alt="Sticker picker with custom stickers and emoji, with a sticker sent in chat"
               class="w-full rounded-xl"/>
          <p class="text-white/90">A built-in sticker pack — including custom, on-brand designs — lets members express
            themselves beyond plain text. Stickers and emoji are picked from the same tray in the composer and render
            large in the chat for extra emphasis.</p>
        </section>
        <section class="project-section" id="feature-reply">
          <h4 class="font-bold text-white">Reply</h4>
          <img src="@/assets/images/projects/warroom/reply.webp"
               alt="A chat message quoting an earlier message as a threaded reply"
               class="w-full rounded-xl"/>
          <p class="text-white/90">Any message can be quoted and replied to directly, so threads stay easy to follow even
            in a busy group. The original message is shown above the reply, making it clear exactly what someone is
            responding to.</p>
        </section>
        <section class="project-section" id="feature-links-with-preview">
          <h4 class="font-bold text-white">Sharing Links with Preview</h4>
          <img src="@/assets/images/projects/warroom/link_preview.webp"
               alt="Shared URLs rendered as rich preview cards with title, description, and image"
               class="w-full rounded-xl"/>
          <p class="text-white/90">When a member shares a URL, Warroom automatically fetches a rich preview — the page
            title, description, and image — and renders it as a tidy card. Links become scannable at a glance instead of
            raw text.</p>
        </section>
        <section class="project-section" id="feature-voice-notes">
          <h4 class="font-bold text-white">Voice Notes</h4>
          <img src="@/assets/images/projects/warroom/voice.webp"
               alt="Inline voice-note players with playback and volume controls in the chat"
               class="w-full rounded-xl"/>
          <p class="text-white/90">Members can record and send voice notes straight from the composer, and play them back
            inline with scrubbing and volume controls. It's a fast, natural way to communicate when typing isn't
            convenient.</p>
        </section>
        <section class="project-section" id="feature-files-and-videos">
          <h4 class="font-bold text-white">Sharing Files & Videos</h4>
          <img src="@/assets/images/projects/warroom/file_and_video.webp"
               alt="Downloadable file chips and an inline video player in the chat"
               class="w-full rounded-xl"/>
          <p class="text-white/90">Beyond text, members can share files and videos of all kinds. Documents appear as
            downloadable chips, while videos play inline with full playback controls and a fullscreen option — all backed
            by AWS S3 storage.</p>
        </section>
        <section class="project-section" id="feature-admin-portal">
          <h4 class="font-bold text-white">Admin Portal</h4>
          <img src="@/assets/images/projects/warroom/admin.webp"
               alt="Admin analytics dashboard with active-user charts and member demographics"
               class="w-full rounded-xl"/>
          <p class="text-white/90">A separate admin portal gives the client full command of the community. Alongside user
            management and group management — creating groups and inviting, removing, or banning members — it surfaces
            analytics such as daily and monthly active users, top-performing groups, and a breakdown of where members are
            based.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Warroom's biggest challenge was delivering real-time, seamless messaging without latency — especially when
          handling large files, voice notes, and video. On top of that, building a platform the client fully owns and
          controls meant getting the moderation model right: admins needed reliable tools to create groups and invite,
          remove, or ban members, so a large and active community could stay well-managed.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address these challenges, Warroom takes several key initiatives. The platform leverages advanced WebSocket
          technology for instant message delivery and real-time collaboration. Optimized media handling and compression
          techniques are implemented to support high-speed file sharing without compromising quality.
        </p>
        <img src="@/assets/images/projects/warroom/footer.jpg" alt="project screenshot" class="w-full rounded-xl"/>
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