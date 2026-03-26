<script setup lang="ts">
import type {Review} from "~/data/reviews";

const props = defineProps<{
  review: Review
}>()
</script>

<template>
  <div class="upwork-review-card block group">
    <NuxtLink target="_blank" :href="$config.public.upwork_profile_link"
              class="absolute p-4 right-2 top-2 md:right-6 md:top-6 md:hidden group-hover:block">
      <LazyIconsExitPage/>
    </NuxtLink>

    <template v-for="(feedback, key) in review.feedbacks" :key>
      <h4 class="review mt-2 md:mt-0" v-html="feedback.replace(/\n/g, '<br/>')"/>
      <br/>
    </template>

    <div class="mt-6 md:mt-10 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img class="size-[64px] md:size-[84px]" src="@/assets/images/upwork.png" alt="Upwork">

        <div>
          <p class="client-name">{{ review.client_name }}</p>
          <div class="flex">
            <LazyIconsStar/>
            <LazyIconsStar/>
            <LazyIconsStar/>
            <LazyIconsStar/>
            <LazyIconsStar/>
          </div>
        </div>
      </div>

      <img class="h-8 md:h-11 hidden sm:block" src="@/assets/images/upwork-logo.png" alt="Upwork">
    </div>
  </div>
</template>
