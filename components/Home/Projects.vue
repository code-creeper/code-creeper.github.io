<template>
  <div class="page grid md:grid-cols-2 gap-8">
    <div class="h-32">
      <h3 class="font-bold text-[var(--white-color)]">All Creative Works.</h3>
      <p class="responsive mt-1">Here's some of my projects that I have worked on.</p>

      <p class="responsive text-[var(--primary-color)] cursor-pointer">Explore more <span class="text-2xl font-medium">→</span></p>
    </div>
    <div>
      <HomeProjectsCard />
    </div>
    <div class="md:-translate-y-[50%]">
      <HomeProjectsCard />
    </div>
    <div>
      <HomeProjectsCard />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>