<template>
  <div class="page">
    <div class="relative">
      <h2 class="greet responsive font-bold">Hey there!, I'm-</h2>
      <NuxtImg src="/images/dots.svg" class="dots"/>
    </div>
    <h1 class="my-name">Abdul Haseeb.</h1>

    <div class="mt-8 md:mt-10">
      <h2 class="font-semibold responsive">
        <span style="color: var(--white-color)">Software Engineer.</span>
        A self-taught developer with an <span class="breaking-words">interest in Computer Science.</span>
      </h2>
    </div>

    <div class="mt-8 md:mt-10">
      <p class="responsive">
        🚀 Currently specializing in Frontend (React / Next.js)
        <br>
        ⚡ Frontend Engineer at Pabbl
      </p>
    </div>
  </div>
</template>

<style scoped>
.greet {
  color: var(--primary-color);
}

.my-name {
  color: var(--white-color)
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
}

.breaking-words {
  display: unset;
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