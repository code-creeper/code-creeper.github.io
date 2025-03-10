<template>
  <div class="w-full grid rounded-[10px] overflow-hidden card">
    <img src="@/assets/images/project-img.webp" alt="Project Image" />

    <div class="px-4 py-2 space-y-2">
      <div class="flex justify-between items-center gap-2 text-white">
        <h4 class="fs-large">creative@home</h4>
        <ExitPage />
      </div>

      <hr class="w-full border-white/30">

      <p class="text-[1rem]">
        A website that provides roadmap for various fields in Programming and help people learn to code for free.
      </p>

    </div>


  </div>

</template>

<style scoped>
.card{
  outline: 1px solid rgba(255, 255, 255, 0.16);
  background-color: var(--card-bg-color);
}
</style>
<script setup lang="ts">
import ExitPage from "~/components/Icons/ExitPage.vue";
</script>