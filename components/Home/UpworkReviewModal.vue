<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue';
import type {Review} from "~/data/reviews";

const props = defineProps<{
  review: Review
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop, clicks outside will hit this -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-md" @click="emit('close')"></div>

    <!-- Modal Content -->
    <div class="upwork-review-card block group relative z-10 w-full max-w-7xl max-h-[95vh] flex flex-col" @click.stop>
      <button class="absolute right-4 top-4 text-gray-400 hover:text-white z-20 md:right-6 md:top-6"
              @click="emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <NuxtLink target="_blank" :href="$config.public.upwork_profile_link"
                class="absolute p-4 right-14 top-2 md:right-16 md:top-6 md:hidden group-hover:block">
        <LazyIconsExitPage/>
      </NuxtLink>

      <div class="h-full mt-4 overflow-y-auto">
        <template v-for="(feedback, index) in review.feedbacks" key="index">
          <h4 class="review mt-6 md:mt-2" v-html="feedback.replace(/\n/g, '<br/>')"/>
          <hr class="my-8 mr-4" v-if="index !== review.feedbacks.length - 1"/>
        </template>
      </div>

      <!-- Content Footer -->
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
  </div>
</template>
