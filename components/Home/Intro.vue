<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="relative">
      <img src="~/assets/images/dots.svg" class="dots" alt="Dots"/>
      <h3 class="text-[var(--primary-color)] responsive font-bold relative">Hey there!, I'm-</h3>
      <h1 class="text-[var(--white-color)] relative">Abdul Haseeb.</h1>
    </div>

    <div class="mt-8 md:mt-10 transition-all duration-300 ease-in-out">
      <h3 class="font-semibold responsive max-w-[890px]">
        <span style="color: var(--white-color)">Senior Full-Stack Engineer</span>
        <span class="text-[var(--primary-color)]"> | Laravel, SaaS &amp; Scalable Web Apps</span>
      </h3>
    </div>

    <div class="mt-8 md:mt-10 transition-all duration-300 ease-in-out">
      <p class="responsive max-w-[890px]">
        I build robust backend systems and polished UIs, Laravel at the core, and I
        adapt fast to whatever your stack needs.
      </p>
    </div>

    <div class="mt-6 md:mt-8 transition-all duration-300 ease-in-out">
      <p class="responsive">
        ⚡ Full Stack Developer at
        <LazyNuxtLink target="_blank" :href="$config.public.upwork_profile_link"
                  class="text-[var(--primary-color)] font-bold upwork-link">Upwork
        </LazyNuxtLink>
      </p>
    </div>

    <LazySocialLinks v-if="!$config.public.upwork"/>
  </div>
</template>

<style scoped>

.upwork-link {
  position: relative;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
}

.upwork-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 8px;
  background: no-repeat center / 100% 100%
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'%3E%3Cpath d='M1 4 Q50 12 99 3' fill='none' stroke='%232ed06e' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
}

.upwork-link:hover {
  opacity: 0.75;
}

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