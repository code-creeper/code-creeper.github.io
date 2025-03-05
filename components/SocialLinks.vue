<script setup lang="ts">
import IconsGithub from "~/components/Icons/Github.vue";
import IconsLinkedin from "~/components/Icons/Linkedin.vue";
import IconsEmail from "~/components/Icons/Email.vue";
import IconsResume from "~/components/Icons/Resume.vue";
import IconsDiscord from "~/components/Icons/Discord.vue";

type LinkType = "linkedin" | "github" | "email" | "resume" | "discord";

interface LinkItem {
  icon: typeof IconsGithub; // All icons are Vue components
  href: string;
  text: string;
}

const props = withDefaults(
    defineProps<{
      linksInclude?: LinkType[];
    }>(),
    {
      linksInclude: () => ["github", "linkedin", "email"] as LinkType[],
    }
);

// Define the links mapping with proper typing
const links: Record<LinkType, LinkItem> = {
  linkedin: {
    icon: IconsLinkedin,
    href: "https://www.linkedin.com/in/codecreeper/",
    text: "Linkedin",
  },
  github: {
    icon: IconsGithub,
    href: "https://github.com/code-creeper/",
    text: "Github",
  },
  email: {
    icon: IconsEmail,
    href: "mailto:abdulhaseebkhan407@gmail.com",
    text: "Email",
  },
  resume: {
    icon: IconsResume,
    href: "mailto:abdulhaseebkhan407@gmail.com",
    text: "Resume",
  },
  discord: {
    icon: IconsDiscord,
    href: "https://discordapp.com/users/916982643378245653",
    text: "Discord",
  },
};
</script>

<template>
  <ul>
    <LazyNuxtLink v-for="linkKey in props.linksInclude" :key="linkKey" target="_blank" :href="links[linkKey].href">
      <li>
        <component :is="links[linkKey].icon"/> {{ links[linkKey].text }}
      </li>
    </LazyNuxtLink>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 3rem;
  margin-top: 32px;
  font-weight: bold;
  color: var(--white-color);
  transition: all 0.3s ease-in-out;
}

ul > a > li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media screen and (min-width: 48rem) {
  ul {
    margin-top: 40px;
  }
}
</style>
