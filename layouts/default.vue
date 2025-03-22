<template>
  <div>
    <div class="w-full sticky top-0 z-10 bg-[var(--black-color)] mb-[30px] md:mb-[120px]">
      <nav>
        <ApplicationLogo/>

        <ul>
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects">
              Projects
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <slot/>
    <footer>
      <p>
        Designed and Developed by <span class="text-[var(--primary-color)]">Abdul Haseeb</span>.
        <br>
        Built with <span class="text-[var(--primary-color)]">Nuxt.js.</span> Hosted on <span
          class="text-[var(--primary-color)]">AWS EC2</span> with <span
          class="text-[var(--primary-color)]">Docker</span>.
      </p>
    </footer>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75rem;
  width: 100%;
  margin-inline: auto;
  padding: 4px 12px;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
}

nav > ul > li {
  padding-inline: 16px;
  padding-block: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 3px;

  &:hover {
    background-color: rgba(46, 45, 45, 0.42);
  }
}

footer {
  text-align: center;
  max-width: 75rem;
  width: 100%;
  margin-top: 130px;
  margin-inline: auto;
  padding: 8px 24px;
  transition: all 0.3s ease-in-out;
}

nav > ul {
  display: flex;
  align-items: center;
}

@media screen and (min-width: 48rem) {
  nav {
    padding: 12px 22px;
  }

  nav > ul > li {
    padding-block: 6px;
    padding-inline: 16px;
    font-size: 16px;
    font-weight: 600;
    color: var(--white-color);
    cursor: pointer;
    border-radius: 3px;
  }

  footer {
    padding: 24px 44px;
    margin-top: 170px;
  }
}
</style>
<script setup lang="ts">
</script>