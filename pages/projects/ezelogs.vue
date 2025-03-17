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
    <img src="@/assets/images/projects/ezelogs/main.png" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Ezelogs</h2>
    <p class="text-white/80">
      Ezelogs is a comprehensive project management software designed to enhance efficiency in construction projects.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section id="overview">
        <h3 class="heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Ezelogs is a comprehensive project management software designed to enhance efficiency in construction projects. It offers tools for time logs, daily logs, safety logs, performance logs, and project management logs, enabling users to monitor project costs, workforce performance, and daily profits. The platform is accessible via web, Android, and iOS, allowing real-time data access from any location. Ezelogs also provides features like resource planning, safety and compliance reports, and effective communication management to streamline workflows and improve project outcomes.
        </p>
        <img src="@/assets/images/projects/ezelogs/home.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section id="project-goals">
        <h3 class="heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          Ezelogs Construction Software aims to revolutionize the construction industry by providing a comprehensive, user-friendly platform that streamlines project management processes. The primary goal is to enhance efficiency and productivity across all phases of construction projects. Key objectives include offering advanced tools for effective communication, resource planning, safety compliance, and performance monitoring. By integrating features such as accounting and financial management, team collaboration, and real-time data access across multiple platforms, Ezelogs seeks to empower construction professionals to manage projects more effectively, reduce delays, and ensure successful project outcomes.
        </p>
      </section>
      <section id="tech-stack">
        <h3 class="heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul>
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Bootstrap:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Mysql:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section id="features">
        <h3 class="heading heading-bl">Features</h3>
        <h4 class="font-bold text-white">Dashboard</h4>
        <img src="@/assets/images/projects/ezelogs/dashboard.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Project Users</h4>
        <img src="@/assets/images/projects/ezelogs/project_users.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Project Chat</h4>
        <img src="@/assets/images/projects/ezelogs/project_chat.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Documet Control</h4>
        <img src="@/assets/images/projects/ezelogs/document_control.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Time Sheet</h4>
        <img src="@/assets/images/projects/ezelogs/time_sheet_report.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
        <img src="@/assets/images/projects/ezelogs/time_sheet_list.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Bid Management</h4>
        <img src="@/assets/images/projects/ezelogs/bid_management.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section id="challenges">
        <h3 class="heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Implementing Ezelogs Construction Software entails addressing several challenges to ensure its effective integration into existing workflows. One primary challenge is the resistance to change commonly observed among construction professionals accustomed to traditional project management methods. Overcoming this requires comprehensive training and demonstrating the software's tangible benefits to encourage adoption. Another significant challenge is ensuring seamless integration with existing systems and processes to prevent data silos and maintain operational continuity. Additionally, managing the learning curve associated with new technology necessitates ongoing support and resources to facilitate user proficiency. Addressing these challenges is crucial for maximizing the software's potential to streamline project management and enhance overall efficiency.
        </p>
      </section>
      <section id="initiatives">
        <h3 class="heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address the challenges inherent in implementing Ezelogs Construction Software, several strategic initiatives have been undertaken. A key focus is on delivering comprehensive training programs to facilitate user adoption and proficiency, thereby minimizing resistance to change. The software is designed for seamless integration with existing systems, ensuring operational continuity and preventing data silos. Recognizing the importance of user support, Ezelogs offers ongoing assistance to help users navigate the learning curve associated with new technology. Additionally, the platform emphasizes user-friendly interfaces and intuitive design to enhance accessibility for construction professionals. These initiatives collectively aim to streamline project management processes, improve efficiency, and promote the successful adoption of Ezelogs within the construction industry.
        </p>
        <img src="@/assets/images/projects/ezelogs/footer.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
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