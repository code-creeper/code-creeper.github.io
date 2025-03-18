<script setup lang="ts">
withDefaults(
    defineProps<{
      review?: string;
      clientName?: string;
    }>(),
    {
      review: 'Client Review',
      clientName: 'Client Name',
    }
)
</script>

<template>
  <NuxtLink class="upwork-review-card" target="_blank" href="https://www.upwork.com/freelancers/abdulh143?mp_source=share">
    <h4 class="review">
      "{{review}}"
    </h4>

    <div class="mt-12 flex items-end justify-between">
      <div class="flex items-center gap-3">
        <img class="size-[84px]" src="@/assets/images/upwork.png" alt="Upwork">

        <div>
          <p class="client-name">{{clientName}}</p>
          <div class="flex">
            <LazyIconsStar/>
            <LazyIconsStar/>
            <LazyIconsStar/>
            <LazyIconsStar/>
            <LazyIconsStar/>
          </div>
        </div>
      </div>

      <img class="h-11" src="@/assets/images/upwork-logo.png" alt="Upwork">
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
  font-family: "BIZ UDPMincho", serif;
  font-size: 1.875rem;
  line-height: 2.875rem;
  font-weight: 600;
}

.client-name {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
}
</style>