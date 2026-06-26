<template>
  <div class="page text-center flex flex-col items-center">
    <h2 class="font-bold text-[var(--white-color)]">Let's Build Something.</h2>
    <p class="mt-5 max-w-[720px]">
      Got a product to ship or a gnarly backend problem to untangle? That's exactly my kind of thing. Drop me a line and let's talk.
    </p>

    <LazySocialLinks :links-include="['linkedin', 'discord', 'resume']" v-if="!$config.public.upwork"/>
    <h3 v-else class="text-[var(--primary-color)] font-bold mt-4 glow">
      <LazyNuxtLink target="_blank" href="https://www.upwork.com/freelancers/abdulhaseeb007?mp_source=share">Upwork
      </LazyNuxtLink>
    </h3>
  </div>
</template>
<script setup lang="ts">
</script>