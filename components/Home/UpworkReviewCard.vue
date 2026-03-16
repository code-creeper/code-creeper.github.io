<script setup lang="ts">
import type {Review} from "~/data/reviews";

const props = defineProps<{
  review: Review
}>()

const CHAR_LIMIT = 250;

const showMore = ref(false);

const comment = computed(() => {
  return showMore.value
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
      "{{ comment }}" <span @click.stop.prevent="seeMoreToggle" class="text-[var(--primary-color)] text-lg">See {{ showMore ? "less" : "more" }}</span>
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

<style scoped>
.upwork-review-card {
  text-align: start;
  padding: 60px 65px;
  border-width: 1px;
  border-color: rgb(83 83 83/1);
  border-radius: 30px;
  color: white;
  transform: scale(0.8);
  opacity: 0.8;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  transition-duration: .2s;
  transition-property: all;
}

.review {
  font-family: "Poppins", serif;
  font-size: 1.875rem;
  line-height: 2.875rem;
  font-weight: 600;
}

.client-name {
  font-size: 1.35rem;
  line-height: 1.75rem;
  font-weight: 700;
}

@media screen and (max-width: 48rem) {
  .upwork-review-card {
    padding: 30px 35px;
  }

  .review {
    font-family: "BIZ UDPMincho", serif;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
  }

  .client-name {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
}
</style>
