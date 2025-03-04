<template>
  <div class="page grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-12">
    <div>
      <h2 class="font-bold text-[var(--white-color)]">⚡ About Me</h2>
      <p class="mt-3">
        Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever
        since.
        <br>
        <br>
        I really liked to build stuff using no-code tools back in 2010, and from that, I explored how to code myself,
        fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked
        in a Recruitment Company and a SaaS Company I'm interested in building something awesome with code and automate
        tasks with code, currently focused on Web & Mobile Development, Open Source and Competitive Programming
        <br>
        <br>
        When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play
        basketball! 🏀
      </p>
    </div>

    <div class="flex justify-center">
      <div class="relative w-fit">
        <img src="~/assets/images/dp.jpeg" class="dp" alt="DP"/>
        <img src="~/assets/images/dots.svg" class="dots" alt="Dots"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dp {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
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