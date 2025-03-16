<template>
  <div class="container">
    <img src="~/assets/images/dp.jpeg" class="dp" alt="DP"/>
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