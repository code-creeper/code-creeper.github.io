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
      { id: "feature-notes-with-lesson", label: "Lesson Notes" },
      { id: "feature-favourite-lesson-and-notes", label: "Favourites & Saved Notes" },
      { id: "feature-profile-management", label: "Profile Management" },
      { id: "feature-discord-integration", label: "Discord Integration" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/capitalclub/main.webp" alt="Project Image" class="w-full rounded-xl" />
    <h2 class="fs-large text-white font-bold mt-3">Capitalclub</h2>
    <p class="text-white/80">
      Capital Club is an invite-only platform for entrepreneurs that pairs an on-demand Academy with a private global
      network. Members unlock expert-led video courses, connect with a community of founders and operators, and get
      gated access to an exclusive Discord.
    </p>
    <ProjectLiveLink href="https://capital.club" />
    <hr class="w-full border border-white/30 my-5" />
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          This project involved building a modern membership platform for a fast-growing entrepreneur community. The
          product brings together an on-demand Academy of expert-led video courses, a private members' network, and a
          gated Discord community into a single, cohesive experience.
          <br />
          <br />
          The client approached us after experiencing delays and inconsistent progress with previous development
          efforts, which significantly reduced the available timeline. The goal was to stabilize the project and deliver
          a reliable, production-ready platform within a tight deadline.
        </p>
        <img src="@/assets/images/projects/capitalclub/academy.webp" alt="project screenshot"
          class="w-full rounded-xl px-5" />
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The primary goal was to deliver a highly responsive, polished, and professional web application capable of
          serving a global network of 15,000+ entrepreneurs across 73+ countries — a platform that could scale with the
          community while keeping the learning and networking experience fast and intuitive.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">React.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Tailwind:</span>Applied utility-first CSS for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-notes-with-lesson">
          <h4 class="font-bold text-white">Lesson Notes</h4>
          <img src="@/assets/images/projects/capitalclub/lesson-notes.webp" alt="Lesson player with a side notes panel"
            class="w-full rounded-xl px-5" />
          <p class="text-white/90">A dedicated notes panel sits alongside the video player, letting members capture key
            takeaways without leaving the lesson. Notes save automatically as you type and stay tied to each individual
            lesson, so members can pick up exactly where they left off. The player also surfaces module progress,
            favourites, and a distraction-free study mode.</p>
        </section>
        <section class="project-section" id="feature-favourite-lesson-and-notes">
          <h4 class="font-bold text-white">Favourites &amp; Saved Notes</h4>
          <img src="@/assets/images/projects/capitalclub/favourite.webp"
            alt="Dashboard showing favourited courses and saved notes grouped by course" class="w-full rounded-xl px-5" />
          <p class="text-white/90">A personal library brings everything a member has bookmarked into one place.
            Favourited courses are pinned for quick access, while saved notes are grouped by course so members can jump
            straight back to the material that matters most to them.</p>
        </section>
        <section class="project-section" id="feature-profile-management">
          <h4 class="font-bold text-white">Profile Management</h4>
          <img src="@/assets/images/projects/capitalclub/profile.webp"
            alt="Member profile settings with Profile, Billing, and Account tabs" class="w-full rounded-xl px-5" />
          <p class="text-white/90">Members manage their account from a single settings hub split into Profile, Billing,
            and Account tabs. From here they can update personal information such as name, email, phone, and country,
            review their membership and billing details, and reach support — all wrapped in the same clean, on-brand
            interface as the rest of the platform.</p>
        </section>
        <section class="project-section" id="feature-discord-integration">
          <h4 class="font-bold text-white">Discord Integration</h4>
          <img src="@/assets/images/projects/capitalclub/discord.webp"
            alt="Member-gated screen to join the Capital Club Discord community" class="w-full rounded-xl px-5" />
          <p class="text-white/90">The platform links directly to the community's private Discord, available only to
            active Capital Club members. Connecting an account authenticates the member and assigns the appropriate
            role, giving them access to the right channels the moment they join.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          The project came with several significant challenges. Picking up work that had stalled under a previous team
          meant first understanding and stabilizing an unfamiliar codebase, all while working against a compressed
          deadline. Frequent design revisions added further pressure, demanding adaptability and close, continuous
          collaboration with the design team to keep momentum without sacrificing quality.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          By adopting agile methodologies, tightening the feedback loop with the design team, and setting up a reliable
          build-and-deploy pipeline, we improved our flexibility, collaboration, and delivery speed. These practices
          were pivotal in turning a stalled project into a robust, user-friendly platform that met both member
          expectations and the client's business objectives.
        </p>
        <img src="@/assets/images/projects/capitalclub/logo.webp" alt="project screenshot"
          class="w-full rounded-xl px-5" />
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