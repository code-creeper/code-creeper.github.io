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
    <img src="@/assets/images/projects/capitalclub/main.png" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Capitalclub</h2>
    <p class="text-white/80">
      Capital Club is a private ecosystem and Academy, It offers members access to exclusive courses, networking events,
      and a VIP marketplace with discounted products and services.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Capital Club is a program, established by OnMarket, that offers loyal and accredited members exclusive access
          to private investments, early notifications of deals, and equity crowdfunding (ECF) private deal rooms,
          including access to early-stage companies. It is mainly focused on entrepreneurs, investors, and business
          owners to get benefit from its academy and lectures .
        </p>
        <img src="@/assets/images/projects/capitalclub/academy.png" alt="project screenshot"
             class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The primary goal of the Capital Club project was to develop a highly reactive, user-friendly, and professional
          web application that fosters a global network of entrepreneurs. Capital Club now connects over 15,000 members
          across 72 countries, offering access to exclusive courses, networking events, and a VIP marketplace with
          discounted products and services.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">React.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Tailwind:</span>Applied utility-first CSS for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-notes-with-lesson">
          <h4 class="font-bold text-white">Side notes with lesson</h4>
          <img src="@/assets/images/projects/capitalclub/lesson-notes.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-favourite-lesson-and-notes">
          <h4 class="font-bold text-white">Favourite lessons & notes</h4>
          <img src="@/assets/images/projects/capitalclub/favourite.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-profile-management">
          <h4 class="font-bold text-white">Profile Management</h4>
          <img src="@/assets/images/projects/capitalclub/profile.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-discord-integration">
          <h4 class="font-bold text-white">Discord Integration</h4>
          <img src="@/assets/images/projects/capitalclub/discord.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          The project faced several significant challenges that required strategic solutions. Meeting an urgent deadline
          necessitated meticulous planning and efficient execution to deliver the project on time. Frequent design
          revisions demanded adaptability and close collaboration with the design team to ensure alignment with evolving
          requirements. Managing large file uploads to AWS S3 introduced complexities in file chunking and integration,
          requiring robust handling to maintain system performance. Ensuring cross-platform compatibility was essential
          to provide a consistent user experience across various devices and browsers, involving comprehensive testing
          and optimization. Implementing robust security measures was crucial to protect user data and maintain trust,
          addressing potential vulnerabilities proactively.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To overcome the challenges encountered during the project, the team implemented several strategic initiatives.
          Adopting an agile methodology allowed for iterative development and rapid response to changing requirements,
          enhancing flexibility and collaboration among team members. Implementing a continuous delivery pipeline
          enabled automated testing and deployment, ensuring swift and reliable releases while maintaining high-quality
          standards. Embracing a microservices architecture facilitated modular development, allowing individual
          components to be developed, tested, and deployed independently, thereby improving scalability and
          maintainability. Additionally, integrating DevOps practices fostered a culture of shared responsibility
          between development and operations teams, streamlining processes and reducing deployment times. These combined
          efforts were pivotal in delivering a robust, user-friendly, and professional web application that met both
          user expectations and business objectives.
        </p>
        <img src="@/assets/images/projects/capitalclub/logo.png" alt="project screenshot"
             class="w-full rounded-xl px-5"/>
      </section>
    </div>

    <div class="col-span-3 mt-5">
      <div class="sticky top-[120px] flex flex-col gap-2">
        <h4 class="text-white font-bold mb-2">Table of Contents</h4>
        <ul class="table-of-content">
          <li>
            <a href="#overview" :class="{'text-white': activeSections.includes('overview')}">Overview</a></li>
          <li>
            <a href="#project-goals" :class="{'text-white': activeSections.includes('project-goals')}">Project Goals</a>
          </li>
          <li>
            <a href="#tech-stack" :class="{'text-white': activeSections.includes('tech-stack')}">Tech Stack</a>
          </li>
          <li>
            <a href="#features" :class="{'text-white': activeSections.includes('features')}">Features</a>
          </li>
          <li>
            <ul>
              <li>
                <a href="#feature-notes-with-lesson"
                     :class="{'text-white': activeSections.includes('feature-notes-with-lesson')}">
                  Notes with Lesson
                </a>
              </li>
              <li>
                <a href="#feature-favourite-lesson-and-notes" :class="{'text-white': activeSections.includes('feature-favourite-lesson-and-notes')}">
                  Favourite Lesson & Notes
                </a>
              </li>
              <li>
                <a href="#feature-profile-management"
                     :class="{'text-white': activeSections.includes('feature-profile-management')}">
                  Profile Management
                </a>
              </li>
              <li>
                <a href="#feature-discord-integration" :class="{'text-white': activeSections.includes('feature-discord-integration')}">
                  Discord Integration
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#challenges" :class="{'text-white': activeSections.includes('challenges')}">Challenges</a>
          </li>
          <li>
            <a href="#initiatives" :class="{'text-white': activeSections.includes('initiatives')}">Initiatives</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>