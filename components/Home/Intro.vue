<template>
  <div class="page">
    <div class="relative">
      <NuxtImg src="/images/dots.svg" class="dots"/>
      <h2 class="text-[var(--primary-color)] responsive font-bold relative z-10">Hey there!, I'm-</h2>
      <h1 class="text-[var(--white-color)] relative z-10">Abdul Haseeb.</h1>
    </div>

    <div class="mt-8 md:mt-10">
      <h2 class="font-semibold responsive max-w-[890px]">
        <span style="color: var(--white-color)">Software Engineer.</span>
        A self-taught developer with an interest in Computer Science.
      </h2>
    </div>

    <div class="mt-8 md:mt-10">
      <p class="responsive">
        🚀 Currently specializing DevOps
        <br>
        ⚡ Full Stack Developer at <NuxtLink target="_blank" href="https://www.upwork.com/freelancers/abdulh143?mp_source=share" class="text-[var(--primary-color)]">Upwork</NuxtLink>
      </p>
    </div>

    <ul class="mt-8 md:mt-10 font-bold text-[var(--white-color)] flex items-center gap-12 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
      <li><IconsGithub/> <NuxtLink target="_blank" href="https://github.com/code-creeper/">Github</NuxtLink></li>
      <li><IconsLinkedin/> <NuxtLink target="_blank" href="https://www.linkedin.com/in/codecreeper/">Linkedin</NuxtLink></li>
      <li><IconsEmail/> <NuxtLink target="_blank" href="mailto:abdulhaseebkhan407@gmail.com">Email</NuxtLink></li>
    </ul>
  </div>
</template>

<style scoped>
.greet {
  color: var(--primary-color);
}

.page {
  margin-top: 130px;
  transition: all 0.3s ease-in-out;
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

@media screen and (min-width: 48rem) {
  .page {
    margin-top: 170px;
  }

  .dots {
    width: 150px;
  }

  .breaking-words {
    display: block;
  }
}
</style>
<script setup lang="ts">
</script>