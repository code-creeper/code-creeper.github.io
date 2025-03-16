<template>
  <div class="page text-center flex flex-col items-center">
    <h2 class="font-bold text-[var(--white-color)]">Stay In Touch.</h2>
    <p class="mt-5">
      I'm currently specializing in <span class="text-[var(--primary-color)]">DevOps</span>.
      <br>
      Feel free to get in touch and talk more about your projects.
    </p>

    <LazySocialLinks :links-include="['linkedin', 'discord', 'resume']" v-if="!$config.public.upwork"/>
    <h3 v-else class="text-[var(--primary-color)] font-bold mt-4 glow">
      <LazyNuxtLink target="_blank" href="https://www.upwork.com/freelancers/abdulh143?mp_source=share">Upwork
      </LazyNuxtLink>
    </h3>
  </div>
</template>
<script setup lang="ts">
</script>