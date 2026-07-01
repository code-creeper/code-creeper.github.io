<script setup lang="ts">
import Capitalclub from "~/assets/images/projects/capitalclub/main.webp";
import Tabootv from "~/assets/images/projects/tabootv/main.webp";
import StirlingCooper from "assets/images/projects/stirling_cooper/main.webp";
import Andalus from "assets/images/projects/andalus/main.webp";
</script>

<template>
  <div class="page grid md:grid-cols-2 gap-8">
    <div class="h-32">
      <h3 class="font-bold text-[var(--white-color)]">All Creative Works.</h3>
      <p class="responsive mt-1">Here's some of my projects that I have worked on.</p>

      <NuxtLink to="/projects"><p class="responsive text-[var(--primary-color)] cursor-pointer">Explore more <span
          class="text-2xl font-medium">→</span></p></NuxtLink>
    </div>
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
        class="md:-translate-y-[50%]"/>
    <HomeProjectCard
        :image="Andalus"
        title="Andalus"
        description="A gamified online academy for learning Arabic — structured video courses, live speaking sessions, a community, and points, badges, and streaks that keep learners motivated."
        to="/projects/andalus"
    />
  </div>
</template>