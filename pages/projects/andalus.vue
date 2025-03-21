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
    <img src="@/assets/images/projects/andalus/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Andalus</h2>
    <p class="text-white/80">
      Andalus Institute is an online platform dedicated to teaching Arabic, offering structured learning with real-time
      support, live speaking sessions, and a supportive community.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          The Andalus Institute is an online platform dedicated to Arabic language learning. It offers structured
          lessons with personalized feedback from qualified instructors, gamified elements like points, badges, and
          leaderboards to boost motivation, and a community forum for collaborative learning. Additionally, the platform
          provides regular live speaking sessions to enhance conversational skills and features AI-powered tools, such
          as the AI Chatbot and "My Ustadh," which offer 24/7 support by correcting and guiding Arabic usage in
          real-time.
        </p>
        <img src="@/assets/images/projects/andalus/login.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The objective of the Andalus Institute project was to create a comprehensive online platform for Arabic
          language learning, integrating structured lessons, assignments reviewed by qualified instructors, gamified
          elements such as points, badges, rewards, and leaderboards, an internal community forum for collaborative
          engagement, interactive speaking sessions, and AI-powered assistance features like chatbots and personalized
          support, all aimed at enhancing learner engagement and facilitating effective language acquisition.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul>
          <li><span class="font-bold">jQuery:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Bootstrap:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-classroom">
          <h4 class="font-bold text-white">Classroom</h4>
          <img src="@/assets/images/projects/andalus/classroom.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/andalus/class_preview.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/andalus/class_lesson.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-community">
          <h4 class="font-bold text-white">Community</h4>
          <img src="@/assets/images/projects/andalus/community.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-chatbot">
          <h4 class="font-bold text-white">Chatbot</h4>
          <img src="@/assets/images/projects/andalus/chatbot.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-livechat">
          <h4 class="font-bold text-white">Livechat</h4>
          <img src="@/assets/images/projects/andalus/livechat.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-calendar">
          <h4 class="font-bold text-white">Calendar</h4>
          <img src="@/assets/images/projects/andalus/calender.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-leaderboard">
          <h4 class="font-bold text-white">Leaderboard</h4>
          <img src="@/assets/images/projects/andalus/leaderboard.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-profile-management">
          <h4 class="font-bold text-white">Profile Management</h4>
          <img src="@/assets/images/projects/andalus/profile.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-admin-portal">
          <h4 class="font-bold text-white">Admin Portal</h4>
          <img src="@/assets/images/projects/andalus/admin_dashboard.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/andalus/admin_students.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Developing the Andalus Institute's online Arabic language learning platform presented several challenges. One
          significant hurdle was integration of AI-driven features such as chatbots and personalized support systems
          required addressing challenges related to content accuracy, user privacy, and the seamless blending of AI with
          human instructional elements. Addressing these challenges was vital to delivering a high-quality, engaging,
          and effective language learning experience..
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address the challenges encountered during the development several strategic initiatives were implemented.
          To cater to diverse learning styles and paces, an adaptive learning framework was established, ensuring
          personalized educational experiences for each student.
        </p>
        <img src="@/assets/images/projects/andalus/footer.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
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
                <a href="#feature-classroom"
                   :class="{'text-white': activeSections.includes('feature-classroom')}">
                  Classroom
                </a>
              </li>
              <li>
                <a href="#feature-community"
                   :class="{'text-white': activeSections.includes('feature-community')}">
                  Community
                </a>
              </li>
              <li>
                <a href="#feature-chatbot"
                   :class="{'text-white': activeSections.includes('feature-chatbot')}">
                  Chatbot
                </a>
              </li>
              <li>
                <a href="#feature-livechat"
                   :class="{'text-white': activeSections.includes('feature-livechat')}">
                  Livechat
                </a>
              </li>
              <li>
                <a href="#feature-calendar"
                   :class="{'text-white': activeSections.includes('feature-calendar')}">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#feature-leaderboard"
                   :class="{'text-white': activeSections.includes('feature-leaderboard')}">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#feature-profile-management"
                   :class="{'text-white': activeSections.includes('feature-profile-management')}">
                  Profile Management
                </a>
              </li>
              <li>
                <a href="#feature-admin-portal"
                   :class="{'text-white': activeSections.includes('feature-admin-portal')}">
                  Admin Portal
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