<script setup lang="ts">
import Capitalclub from "~/assets/images/projects/capitalclub/main.png";
import Tabootv from "~/assets/images/projects/tabootv/main.png";
import StirlingCooper from "assets/images/projects/stirling_cooper/main.png";
import Andalus from "assets/images/projects/andalus/main.png";
import Warroom from "assets/images/projects/warroom/main.png";
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
      />
      <HomeProjectCard
        :image="StirlingCooper"
        title="Stirling Cooper"
        description="Striling Cooper is a high-end brand that offers a wide range of products and tutorials on bedroom performance."
        to="/projects/stirling_cooper"
    />
      <HomeProjectCard
        :image="Andalus"
        title="Andalus"
        description="Andalus Institute is an online platform dedicated to teaching Arabic, offering structured learning with real-time support, live speaking sessions, and a supportive community."
        to="/projects/andalus"
    />
      <HomeProjectCard
        :image="Warroom"
        title="Warroom"
        description="Warroom is open communication platform for quick and easy communication between team members and individual while sharing links, emojis, stikers, voice notes and files."
        to="/projects/warroom"
      />
      <HomeProjectCard/>
      <HomeProjectCard/>
    </div>
  </div>

</template>

<style scoped>

</style>