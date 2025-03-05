<template>
  <div class="container">
    <img src="~/assets/images/dp.jpeg" class="dp" alt="DP"/>
    <img src="~/assets/images/dots.svg" class="dots" alt="Dots"/>
    <div class="icon laravel">
      <LazyIconsLaravel/>
    </div>

    <div class="icon php">
      <LazyIconsPhp/>
    </div>

    <div class="icon js">
      <LazyIconsJs/>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: fit-content;
}

.icon {
  position: absolute;
  animation: float 2s infinite ease-in-out;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.container:hover .icon {
  opacity: 1;
  visibility: visible;
}

@keyframes float {
  0%, 100% {
    transform: translateY(-50%) translateY(-10px); /* Slight upward movement */
  }
  50% {
    transform: translateY(-50%) translateY(10px); /* Slight downward movement */
  }
}

.laravel {
  top: 0;
  transform: translate(0, 0);
}

.php {
  top: 80px;
  left: -80px;
  transform: translate(20px, 20px);
}

.js {
  top: 180px;
  left: -80px;
  transform: translate(20px, 20px);
}

.dp {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(100%) drop-shadow(0px 0px 153px var(--primary-color));
  transition: filter 0.5s ease-in-out;
}

.container:hover .dp {
  filter: grayscale(0%) drop-shadow(0px 0px 153px var(--primary-color));
}

.dots {
  width: 100px;
  position: absolute;
  top: -15px;
  right: -32px;
  transition: all 0.3s ease-in-out;
  filter: invert(0.1);
}

@media screen and (min-width: 80rem) {
  .dots {
    width: 150px;
    right: -64px;
  }

  .dp {
    width: 350px;
    height: 350px;
  }
}
</style>
<script setup lang="ts">
</script>