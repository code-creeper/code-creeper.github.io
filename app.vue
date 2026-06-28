<script setup lang="ts">
const config = useRuntimeConfig();
const domain = config.public.domain || "zrinasoft.com";

if (process.dev && !config.public.domain) {
  console.warn("NUXT_PUBLIC_DOMAIN is not set. Falling back to 'zrinasoft.com'.");
}

useHead({
  title: "Abdul Haseeb - Senior Full-Stack Engineer | Laravel, SaaS & Scalable Web Apps",
  meta: [
    { name: "description", content: "I'm Abdul Haseeb, a senior full-stack engineer with 6+ years building multi-tenant SaaS, Stripe billing, real-time systems and scalable APIs. Laravel at the core, plus Vue/Nuxt, React, Python, Docker and AWS. Let's build something amazing together!" },

    // Open Graph (Facebook, LinkedIn)
    { property: "og:title", content: "Abdul Haseeb - Senior Full-Stack Engineer" },
    { property: "og:description", content: "6+ years building multi-tenant SaaS, billing systems and scalable APIs. Laravel at the core, end to end from schema to ship." },
    { property: "og:image", content: "/portfolio-preview.png" },
    { property: "og:url", content: `https://${domain}` },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Abdul Haseeb - Senior Full-Stack Engineer" },
    { name: "twitter:description", content: "Senior full-stack engineer specializing in Laravel, SaaS and scalable web apps, owning products from schema to ship." },
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
        "jobTitle": "Senior Full-Stack Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open to Work"
        },
        "knowsAbout": ["Laravel", "PHP", "SaaS", "Vue.js", "Nuxt.js", "React.js", "Typescript", "Inertia.js", "Tailwind CSS", "Python", "FastAPI", "Django", "Docker", "AWS", "Linux"],
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
