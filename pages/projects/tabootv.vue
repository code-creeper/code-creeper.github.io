<script setup lang="ts">
import User from "~/components/Icons/User.vue";

const observer = ref<IntersectionObserver | null>(null);
const activeSections = ref<string[]>([]);

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      if (!activeSections.value.includes(sectionId)) {
        activeSections.value.push(sectionId);
      }
    } else {
      activeSections.value = activeSections.value.filter(id => id !== sectionId);
    }
  });
};

onMounted(() => {
  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };
  observer.value = new IntersectionObserver(handleIntersect, options);
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  sections.forEach((section) => {
    observer.value?.observe(section);
  });
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/tabootv/main.png" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Tabootv</h2>
    <p class="text-white/80">
      Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community while offering greater control and flexibility compared to YouTube.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section id="overview">
        <h3 class="heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Taboo.tv is a video streaming platform that offers raw and unfiltered content about travel and world cultures. It provides short-form videos, long-form documentaries, and multi-episode series, focusing on authentic cultural experiences worldwide. Users can engage with the community through live chats, comments, and reactions. Access requires creating an account and subscribing to monthly, yearly, or lifetime plans.
        </p>
        <img src="@/assets/images/projects/tabootv/home.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section id="project-goals">
        <h3 class="heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          As a Full Stack PHP Laravel Developer, I contributed to the development of Taboo.tv, a video streaming platform that offers raw and unfiltered content about travel and world cultures. My role encompassed designing and implementing both the front-end and back-end components of the platform, ensuring a seamless user experience and robust functionality. This involved integrating technologies such as React, Vue.js, JavaScript, HTML, CSS, and Tailwind for the front-end, and leveraging Laravel for the back-end infrastructure. Additionally, I utilized AWS services to enhance the platform's scalability and performance. My contributions aimed to create an engaging and reliable platform for users to explore diverse cultural content.
        </p>
      </section>
      <section id="tech-stack">
        <h3 class="heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul>
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Tailwind & Vuetify:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section id="features">
        <h3 class="heading heading-bl">Features</h3>
        <h4 class="font-bold text-white">Series</h4>
        <img src="@/assets/images/projects/tabootv/series.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Shorts</h4>
        <img src="@/assets/images/projects/tabootv/shorts.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Comment, Reply and Reactions</h4>
        <img src="@/assets/images/projects/tabootv/comments.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Community</h4>
        <img src="@/assets/images/projects/tabootv/community.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Live Chat</h4>
        <img src="@/assets/images/projects/tabootv/live-chat.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

      </section>
      <section id="challenges">
        <h3 class="heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          As usual each project has some challenging points, In Tabootv I have to deal with multiple team design team, mobile team and QA team to issue the seamless deliver of the project, Managing large file uploads to AWS S3 introduced complexities in file chunking and integration. It has multiple payment method and gatways which becomes challenging to manage users subscriptions.
        </p>
      </section>
      <section id="initiatives">
        <h3 class="heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          The team tackled project challenges by adopting key strategies. Using an agile approach allowed for continuous development and quick adjustments to changing needs, improving teamwork and flexibility. A continuous delivery pipeline ensured automated testing and deployment, leading to faster, more reliable releases without compromising quality.
        </p>
        <img src="@/assets/images/projects/tabootv/features.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
    </div>

    <div class="col-span-3 mt-5">
      <div class="sticky top-[120px] flex flex-col gap-2">
        <h4 class="text-white font-bold mb-2">Table of Contents</h4>
        <a href="#overview" :class="{'text-white': activeSections.includes('overview')}">Overview</a>
        <a href="#project-goals" :class="{'text-white': activeSections.includes('project-goals')}">Project Goals</a>
        <a href="#tech-stack" :class="{'text-white': activeSections.includes('tech-stack')}">Tech Stack</a>
        <a href="#features" :class="{'text-white': activeSections.includes('features')}">Features</a>
        <a href="#challenges" :class="{'text-white': activeSections.includes('challenges')}">Challenges</a>
        <a href="#initiatives" :class="{'text-white': activeSections.includes('initiatives')}">Initiatives</a>
      </div>
    </div>
  </div>

</template>

<style scoped>
section {
  @apply space-y-4 scroll-mt-[200px];
}

a {
  font-size: 15px;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
}

.heading {
  padding-left: 16px;
  padding-bottom: 6px;
  padding-top: 10px;
  font-weight: bold;
  color: white;
  position: relative;
}

ul > li {
  color: white !important;
  display: flex;
  align-items: center;
  column-gap: 10px;
}
</style>