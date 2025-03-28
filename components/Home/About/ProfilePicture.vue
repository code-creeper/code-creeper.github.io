<template>
  <div class="container glow">
    <img src="~/assets/images/dp.webp" class="dp" alt="DP"/>
    <img src="~/assets/images/dots.svg" class="dots" alt="Dots"/>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: fit-content;
}

.dp {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  transition: filter 1s ease-in-out;
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