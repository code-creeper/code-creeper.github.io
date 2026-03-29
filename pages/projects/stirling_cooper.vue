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
      { id: "feature-academy", label: "Academy" },
      { id: "feature-streak", label: "Streak" },
      { id: "feature-rank-and-achievement", label: "Rank & Achievement" },
      { id: "feature-quiz", label: "Quiz" },
      { id: "feature-livestream-and-community", label: "Livestream & Community" },
      { id: "feature-leaderboard", label: "Leaderboard" },
      { id: "feature-livechat", label: "Live Chat" },
      { id: "feature-purchase", label: "Purchase" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/stirling_cooper/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Stirling Cooper</h2>
    <p class="text-white/80">
      Striling Cooper is a high-end brand that offers a wide range of products and tutorials on bedroom performance.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Stirling Cooper is an educational platform designed for adults, offering a range of products and books
          tailored to their needs. The platform provides a comprehensive learning experience with features such as an
          academy, live streaming, live chat, community engagement, a leaderboard, and a referral system. Additionally,
          it enhances user engagement through a badge system based on progress, lesson streaks, quizzes, and a
          structured lesson unlocking mechanism. Users can also earn experience points by achieving milestones, such as
          completing lessons.
        </p>
        <img src="@/assets/images/projects/stirling_cooper/payment.webp" alt="project screenshot"
             class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          I created ths application stand alone without any team, I design both frontend and backed which was adventure
          for me, I efficiently manage the business login and the standard of code along with other responsibilities to
          keep it open for ups calling.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Tailwind:</span>Applied utility-first CSS for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-academy">
          <h4 class="font-bold text-white">Academy</h4>
          <img src="@/assets/images/projects/stirling_cooper/lesson.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-streak">
          <h4 class="font-bold text-white">Streak</h4>
          <img src="@/assets/images/projects/stirling_cooper/streak.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-rank-and-achievement">
          <h4 class="font-bold text-white">Rank & Achievement</h4>
          <img src="@/assets/images/projects/stirling_cooper/rank.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-quiz">
          <h4 class="font-bold text-white">Quiz</h4>
          <img src="@/assets/images/projects/stirling_cooper/quiz.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/stirling_cooper/success-quiz.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/stirling_cooper/success-quiz.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-livestream-and-community">
          <h4 class="font-bold text-white">LiveStream & Community</h4>
          <img src="@/assets/images/projects/stirling_cooper/community.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-leaderboard">
          <h4 class="font-bold text-white">Leaderboard</h4>
          <img src="@/assets/images/projects/stirling_cooper/leaderboard.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-livechat">
          <h4 class="font-bold text-white">Live Chat</h4>
          <img src="@/assets/images/projects/stirling_cooper/chat.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/stirling_cooper/chat-reaction.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-purchase">
          <h4 class="font-bold text-white">Purchase</h4>
          <img src="@/assets/images/projects/stirling_cooper/books.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Keeping the track record of streak, achievement and badges was a challenge, and showing them after lesson
          completion was a bit tricky. Also, the live chat and live stream was a bit challenging to implement.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          Stirling Cooper's initiatives focus on expanding course offerings, gamifying learning with badges and
          rewards, and enhancing community interaction through forums and live webinars. The platform aims to improve
          technology with a mobile app and AI chat support while boosting engagement through achievement-based rewards
          and subscription tiers. Monetization will include premium courses, corporate partnerships, and product
          expansion, creating a dynamic and interactive learning experience for adults.
        </p>
        <img src="@/assets/images/projects/stirling_cooper/setting.webp" alt="project screenshot"
             class="w-full rounded-xl px-5"/>
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