<script setup lang="ts">
import type {Review} from "~/data/reviews";

const props = defineProps<{
  review: Review
}>()

const CHAR_LIMIT = 250;

const showMore = ref(false);
const rawComment = computed(() => '"' + props.review.feedbacks?.[0] + '"' || "");
const contentExceeded = computed(() => rawComment.value.length > (CHAR_LIMIT + 20));
const comment = computed(() => {
  if (showMore.value || !contentExceeded.value) {
    return rawComment.value.replace(/\n/g, "<br/>");
  }
  return rawComment.value.slice(0, CHAR_LIMIT) + "...";
});

const hasMore = props.review.feedbacks?.length > 1
const moreCount = props.review.feedbacks?.length - 1

const reviewTextRef = ref<HTMLElement | null>(null);

const seeMoreToggle = async (event : MouseEvent) => {
  event.stopPropagation();
  
  if (!reviewTextRef.value) {
    showMore.value = !showMore.value;
    return;
  }
  
  const el = reviewTextRef.value;
  const startHeight = el.getBoundingClientRect().height;
  
  const targetShowMore = !showMore.value;
  showMore.value = targetShowMore;
  
  await nextTick();
  
  const endHeight = el.getBoundingClientRect().height;
  
  if (!targetShowMore) {
    showMore.value = true;
    await nextTick();
  }
  
  const animation = el.animate([
    { height: `${startHeight}px` },
    { height: `${endHeight}px` }
  ], {
    duration: 350,
    easing: 'ease-in-out'
  });
  
  animation.onfinish = async () => {
    if (!targetShowMore) {
      showMore.value = false;
    }
    el.style.height = '';
  };
}

</script>

<template>
  <div class="upwork-review-card block group">
    <NuxtLink target="_blank" :href="$config.public.upwork_profile_link" class="absolute p-4 right-2 top-2 md:right-6 md:top-6 md:hidden group-hover:block"><LazyIconsExitPage/></NuxtLink>
    <div ref="reviewTextRef" class="overflow-hidden will-change-[height] mt-2 md:mt-0">
      <h4 class="review">
        <span v-html="comment"></span>
        <span v-if="contentExceeded" @click.stop.prevent="seeMoreToggle" class="text-[var(--primary-color)] text-lg text-nowrap cursor-pointer">&nbsp See {{ showMore ? "less" : "more" }}</span>
      </h4>
    </div>

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
  </div>
</template>
