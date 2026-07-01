<script setup lang="ts">
import Capitalclub from "~/assets/images/projects/capitalclub/main.webp";
import Tabootv from "~/assets/images/projects/tabootv/main.webp";
import StirlingCooper from "assets/images/projects/stirling_cooper/main.webp";
import Andalus from "assets/images/projects/andalus/main.webp";
import Warroom from "assets/images/projects/warroom/main.webp";
import Ezelogs from "assets/images/projects/ezelogs/main.webp";
import Toraka from "assets/images/projects/toraka/main.webp";
</script>

<template>
  <div class="page">
    <h2 class="fs-large font-bold text-white">Projects</h2>
    <p class="text-white mt-5 text-[1rem]">I love building projects and practice my engineering skills, here's an
      archive of things
      that I've worked on.
    </p>

    <hr class="w-full border border-white/20 my-10"/>

    <div class="grid md:grid-cols-2 gap-6">
      <HomeProjectCard
          :image="Toraka"
          title="Toraka"
          description="A manga, manhwa, and webtoon tracker and reader that unifies thousands of series from many sources — discover titles, follow chapters, bookmark, review, and track your reading."
          to="/projects/toraka"
      />
      <HomeProjectCard
          :image="Capitalclub"
          title="Capitalclub"
          description="An invite-only platform for entrepreneurs pairing an on-demand Academy of expert-led video courses with a private global network and gated access to an exclusive Discord community."
          to="/projects/capitalclub"
      />
      <HomeProjectCard
          :image="Tabootv"
          title="Tabootv"
          description="A creator-driven video streaming platform for raw, unfiltered travel and culture — Shorts, videos, and series with a social layer of comments, reactions, community, and live chat."
          to="/projects/tabootv"
      />
      <HomeProjectCard
          :image="Ezelogs"
          title="Ezelogs"
          description="A construction management platform uniting field logs, documents, timesheets, project chat, and bid management to keep teams efficient from preconstruction through closeout."
          to="/projects/ezelogs"
      />
      <HomeProjectCard
          :image="Andalus"
          title="Andalus"
          description="A gamified online academy for learning Arabic — structured video courses, live speaking sessions, a community, and points, badges, and streaks that keep learners motivated."
          to="/projects/andalus"
      />
      <HomeProjectCard
          :image="Warroom"
          title="Warroom"
          description="A private, uncensored community messaging platform built for Andrew Tate — group and private chat with reactions, voice notes, and file sharing, plus full admin control over members."
          to="/projects/warroom"
      />
      <HomeProjectCard
          :image="StirlingCooper"
          title="Stirling Cooper"
          description="A gamified adult e-learning academy — expert-led video courses on intimacy and relationships, with quizzes, streaks, ranks, leaderboards, livestreams, and a community."
          to="/projects/stirling_cooper"
      />
    </div>
  </div>

</template>

<style scoped>

</style>