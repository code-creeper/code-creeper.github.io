<script setup lang="ts">
const config = useRuntimeConfig();
const domain = config.public.domain || "zrinasoft.com";

if (process.dev && !config.public.domain) {
  console.warn("NUXT_PUBLIC_DOMAIN is not set. Falling back to 'zrinasoft.com'.");
}

useHead({
  title: "Abdul Haseeb - Full-Stack Developer | Laravel & Vue.js Expert",
  meta: [
    { name: "description", content: "I'm Abdul Haseeb, a full-stack developer specializing in Laravel, Vue.js, DevOps and modern web technologies. Let's build something amazing together!" },

    // Open Graph (Facebook, LinkedIn)
    { property: "og:title", content: "Abdul Haseeb - Full-Stack Developer" },
    { property: "og:description", content: "Laravel, Vue.js, and DevOps. Crafting scalable, high-performance web applications." },
    { property: "og:image", content: "/portfolio-preview.png" },
    { property: "og:url", content: `https://${domain}` },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Abdul Haseeb - Full-Stack Developer" },
    { name: "twitter:description", content: "Passionate about Laravel, Vue.js, and creating seamless digital experiences." },
    { name: "twitter:image", content: "/portfolio-preview.png" },

    // Another important meta
    { name: "author", content: "Abdul Haseeb" },
    { name: "robots", content: "index, follow" },
  ],
  link: [
    { rel: "canonical", href: `https://${domain}` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abdul Haseeb",
        "url": `https://${domain}`,
        "sameAs": [
          "https://github.com/code-creeper",
          "https://www.linkedin.com/in/codecreeper/",
          "mailto:abdulhaseebkhan407@gmail.com"
        ],
        "jobTitle": "Full-Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open to Work"
        },
        "knowsAbout": ["Laravel", "Vue.js", "React.js", "Typescript", "Inertia.js", "Tailwind CSS", "Docker", "AWS"],
      }),
    },
  ],
});
</script>

<template>
  <NuxtRouteAnnouncer/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
