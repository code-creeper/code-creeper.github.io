<script setup lang="ts">
import Capitalclub from "~/assets/images/projects/capitalclub/main.png";
import Tabootv from "~/assets/images/projects/tabootv/main.png";
import StirlingCooper from "assets/images/projects/stirling_cooper/main.png";
</script>

<template>
  <div class="page grid md:grid-cols-2 gap-8">
    <div class="h-32">
      <h3 class="font-bold text-[var(--white-color)]">All Creative Works.</h3>
      <p class="responsive mt-1">Here's some of my projects that I have worked on.</p>

      <p class="responsive text-[var(--primary-color)] cursor-pointer">Explore more <span
          class="text-2xl font-medium">→</span></p>
    </div>
    <HomeProjectCard
        :image="Capitalclub"
        title="Capitalclub"
        description="Capital Club is a private ecosystem and Academy, It offers members access to exclusive courses, networking events, and a VIP marketplace with discounted products and services."
        to="/projects/capitalclub"
    />
    <HomeProjectCard
        :image="Tabootv"
        title="Tabootv"
        description="Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community while offering greater control and flexibility compared to YouTube."
        to="/projects/tabootv"
        class="md:-translate-y-[50%]"/>
    <HomeProjectCard
        :image="StirlingCooper"
        title="Stirling Cooper"
        description="Striling Cooper is a high-end brand that offers a wide range of products and tutorials on bedroom performance."
        to="/projects/stirling_cooper"
    />
  </div>
</template>