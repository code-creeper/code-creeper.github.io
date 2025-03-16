<template>
  <div class="page text-center flex flex-col items-center">
    <h2 class="font-bold text-[var(--white-color)]">Stay In Touch.</h2>
    <p class="mt-8">
      I'm currently specializing in <span class="text-[var(--primary-color)]">DevOps</span>.
      <br>
      Feel free to get in touch and talk more about your projects.
    </p>

    <LazySocialLinks :links-include="['linkedin', 'discord', 'resume']"/>
  </div>
</template>