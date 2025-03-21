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
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Ezelogs is a comprehensive project management software designed to enhance efficiency in construction
          projects. It offers tools for time logs, daily logs, safety logs, performance logs, and project management
          logs, enabling users to monitor project costs, workforce performance, and daily profits. The platform is
          accessible via web, Android, and iOS, allowing real-time data access from any location. Ezelogs also provides
          features like resource planning, safety and compliance reports, and effective communication management to
          streamline workflows and improve project outcomes.
        </p>
        <img src="@/assets/images/projects/ezelogs/home.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The primary goal was to enhance efficiency and productivity across all phases of construction projects. Key
          objectives include offering advanced tools for effective communication, resource planning, safety compliance,
          and performance monitoring.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Bootstrap:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Mysql:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-dashboard">
          <h4 class="font-bold text-white">Dashboard</h4>
          <img src="@/assets/images/projects/ezelogs/dashboard.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-project-users">
          <h4 class="font-bold text-white">Project Users</h4>
          <img src="@/assets/images/projects/ezelogs/project_users.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-project-chat">
          <h4 class="font-bold text-white">Project Chat</h4>
          <img src="@/assets/images/projects/ezelogs/project_chat.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-document-control">
          <h4 class="font-bold text-white">Document Control</h4>
          <img src="@/assets/images/projects/ezelogs/document_control.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-timesheet">
          <h4 class="font-bold text-white">Timesheet</h4>
          <img src="@/assets/images/projects/ezelogs/time_sheet_report.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/ezelogs/time_sheet_list.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-bid-management">
          <h4 class="font-bold text-white">Bid Management</h4>
          <img src="@/assets/images/projects/ezelogs/bid_management.png" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          One of the primary challenge was the resistance to change commonly observed among construction professionals
          accustomed to traditional project management methods. Overcoming this requires comprehensive training and
          demonstrating the software's tangible benefits to encourage adoption.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address the challenges inherent in implementing Ezelogs Construction Software, several strategic
          initiatives have been undertaken. A key focus is on delivering comprehensive training programs to facilitate
          user adoption and proficiency, thereby minimizing resistance to change.
        </p>
        <img src="@/assets/images/projects/ezelogs/footer.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
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
                <a href="#feature-dashboard"
                   :class="{'text-white': activeSections.includes('feature-dashboard')}">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#feature-project-users"
                   :class="{'text-white': activeSections.includes('feature-project-users')}">
                  Project Users
                </a>
              </li>
              <li>
                <a href="#feature-project-chat"
                   :class="{'text-white': activeSections.includes('feature-project-chat')}">
                  Project Chat
                </a>
              </li>
              <li>
                <a href="#feature-document-control"
                   :class="{'text-white': activeSections.includes('feature-document-control')}">
                  Document Control
                </a>
              </li>
              <li>
                <a href="#feature-timesheet"
                   :class="{'text-white': activeSections.includes('feature-timesheet')}">
                  Timesheet
                </a>
              </li>
              <li>
                <a href="#feature-bid-management"
                   :class="{'text-white': activeSections.includes('feature-bid-management')}">
                  Bid Management
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