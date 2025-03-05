<template>
  <div>
    <nav>
      <ApplicationLogo/>

      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Blogs</li>
      </ul>
    </nav>
    <slot/>
    <footer>
      <p>
        Designed and Developed by <span class="text-[var(--primary-color)]">Abdul Haseeb</span>.
        <br>
        Built with <span class="text-[var(--primary-color)]">Nuxt.js.</span> Hosted on <span class="text-[var(--primary-color)]">AWS EC2</span> with <span class="text-[var(--primary-color)]">Docker</span>.
      </p>
    </footer>
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 130px;
  position: sticky;
  top: 0;
  background: var(--black-color);
  z-index: 10;
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

nav > ul {
  display: none;
}

nav > ul > li {
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--white-color);
  cursor: pointer;
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

@media screen and (min-width: 48rem) {
  nav {
    padding: 12px 22px;
    margin-bottom: 170px;
  }

  nav > ul {
    display: none;
  }

  footer {
    padding: 24px 44px;
    margin-top: 170px;
  }
}
</style>