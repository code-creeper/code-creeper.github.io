<script setup lang="ts">
import type {Review} from "~/data/reviews";

const props = defineProps<{
  review: Review
}>()

const CHAR_LIMIT = 250;

const showMore = ref(false);
const contentExceeded = Number(props.review.feedbacks?.[0]?.length) > (CHAR_LIMIT + 20);
const comment = computed(() => {
  return showMore.value || !contentExceeded
      ? props.review.feedbacks?.[0]
      : props.review.feedbacks?.[0]?.slice(0, CHAR_LIMIT) + '...';
})

const hasMore = props.review.feedbacks?.length > 1
const moreCount = props.review.feedbacks?.length - 1

const seeMoreToggle = (event : MouseEvent) => {
  event.stopPropagation();
  showMore.value = !showMore.value;
}

</script>

<template>
  <NuxtLink class="upwork-review-card" target="_blank"
            :href="$config.public.upwork_profile_link">
    <h4 class="review">
      <template v-if="contentExceeded && showMore">
        <span v-html="comment"></span>
      </template>
      <template v-else>
        "{{ comment }}"
      </template>
      <span v-if="contentExceeded" @click.stop.prevent="seeMoreToggle" class="text-[var(--primary-color)] text-lg text-nowrap">See {{ showMore ? "less" : "more" }}</span>
    </h4>

    <div class="mt-3" v-if="hasMore">
      <p class="text-[var(--primary-color)] text-lg">Show {{moreCount}} more</p>
    </div>

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
  </NuxtLink>
</template>
