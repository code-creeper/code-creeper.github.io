<script setup lang="ts">
import ExitPage from "~/components/Icons/ExitPage.vue";
import Placeholder from "~/assets/images/projects/capitalclub/main.png"

withDefaults(
    defineProps<{
      image?: string;
      title?: string;
      description?: string;
      to?: string;
    }>(),
    {
      image: Placeholder,
      title: 'Project Title',
      description: 'This is the dummy description for the project.',
      to: '/projects/project',
    }
);

</script>

<template>
  <div class="w-full grid rounded-[10px] overflow-hidden card glow glow-md resize">
    <img :src="image" alt="Project Image" />
    <div class="px-4 py-2 space-y-2">
      <div class="flex justify-between items-center gap-2 text-white">
        <h4 class="fs-large">{{title}}</h4>
        <NuxtLink :to>
          <ExitPage />
        </NuxtLink>
      </div>

      <hr class="w-full border-white/30">

      <p class="text-[1rem]">{{description}} </p>
    </div>
  </div>
</template>

<style scoped>
.card{
  outline: 1px solid rgba(255, 255, 255, 0.16);
  background-color: var(--card-bg-color);
}

.resize {
  transition: all 0.5s ease-in-out;
}

.resize:hover {
  scale: 1.03;
}
</style>