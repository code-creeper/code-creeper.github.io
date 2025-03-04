<template>
  <div class="page">
    <div>
      <h2 class="greet responsive font-bold">Hey there!, I'm-</h2>
    </div>
    <h1 class="my-name">Abdul Haseeb.</h1>
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
}

@media screen and (min-width: 48rem) {
  .page {
    margin-top: 170px;
  }
}
</style>
<script setup lang="ts">
</script>