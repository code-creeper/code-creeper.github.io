<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="relative">
      <img src="~/assets/images/dots.svg" class="dots" alt="Dots"/>
      <h3 class="text-[var(--primary-color)] responsive font-bold relative">Hey there!, I'm-</h3>
      <h1 class="text-[var(--white-color)] relative">Abdul Haseeb Khan.</h1>
    </div>

    <div class="mt-8 md:mt-10 transition-all duration-300 ease-in-out">
      <h3 class="font-semibold responsive max-w-[890px]">
        <span style="color: var(--white-color)">Software Engineer.</span>
        A self-taught developer with an interest in AI 🤖.
      </h3>
    </div>

    <div class="mt-8 md:mt-10 transition-all duration-300 ease-in-out">
      <p class="responsive">
        🚀 Currently specializing DevOps
        <br>
        ⚡ Full Stack Developer at
        <LazyNuxtLink target="_blank" href="https://www.upwork.com/freelancers/abdulh143?mp_source=share"
                  class="text-[var(--primary-color)] font-bold">Upwork
        </LazyNuxtLink>
      </p>
    </div>

    <LazySocialLinks v-if="!$config.public.upwork"/>
  </div>
</template>

<style scoped>

.dots {
  width: 70px;
  position: absolute;
  top: -15px;
  left: calc(2.5rem * -1);
  transition: all 0.3s ease-in-out;
  filter: invert(0.1);
  z-index: 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 3rem;
  margin-top: 32px;
  font-weight: bold;
  color: var(--white-color);
  transition: all 0.3s ease-in-out;
}

ul > li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media screen and (min-width: 48rem) {

  .dots {
    width: 150px;
  }

  ul {
    margin-top: 40px;
  }
}
</style>