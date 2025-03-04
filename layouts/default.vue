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
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75rem;
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

@media screen and (min-width: 48rem) {
  nav {
    padding: 12px 22px;
  }

  nav > ul {
    display: flex;
  }
}
</style>