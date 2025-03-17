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
    <img src="@/assets/images/projects/andalus/main.png" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Andalus</h2>
    <p class="text-white/80">
      Andalus Institute is an online platform dedicated to teaching Arabic, offering structured learning with real-time support, live speaking sessions, and a supportive community.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section id="overview">
        <h3 class="heading heading-bl">Overview</h3>
        <p class="text-white/90">
          The Andalus Institute is a comprehensive online platform dedicated to facilitating Arabic language acquisition through a variety of innovative features. At its core is a structured classroom system where learners engage in lessons and complete assignments, all meticulously reviewed by qualified instructors to ensure personalized feedback and effective progression. To enhance motivation and engagement, the platform incorporates a gamified learning experience, featuring a points and badges system, rewards, and leaderboards that encourage healthy competition among students. An integrated community forum allows users to post content and share thoughts, fostering a collaborative and supportive learning environment. Regular live speaking sessions provide practical conversational experience, enhancing learners' fluency and confidence in the language. Additionally, the institute offers AI-powered assistance through features like the AI Chatbot and "My Ustadh," which provide 24/7 support, enabling interactive sessions where the AI corrects and guides Arabic usage in real-time.
        </p>
        <img src="@/assets/images/projects/andalus/login.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section id="project-goals">
        <h3 class="heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The objective of the Andalus Institute project was to create a comprehensive online platform for Arabic language learning, integrating structured lessons, assignments reviewed by qualified instructors, gamified elements such as points, badges, rewards, and leaderboards, an internal community forum for collaborative engagement, interactive speaking sessions, and AI-powered assistance features like chatbots and personalized support, all aimed at enhancing learner engagement and facilitating effective language acquisition.
        </p>
      </section>
      <section id="tech-stack">
        <h3 class="heading heading-bl">Tech Stack</h3>
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
      <section id="features">
        <h3 class="heading heading-bl">Features</h3>
        <h4 class="font-bold text-white">Classroom</h4>
        <img src="@/assets/images/projects/andalus/classroom.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
        <img src="@/assets/images/projects/andalus/class_preview.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
        <img src="@/assets/images/projects/andalus/class_lesson.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Community</h4>
        <img src="@/assets/images/projects/andalus/community.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Chatbot</h4>
        <img src="@/assets/images/projects/andalus/chatbot.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Livechat</h4>
        <img src="@/assets/images/projects/andalus/livechat.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Calendar</h4>
        <img src="@/assets/images/projects/andalus/calender.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Leaderboard</h4>
        <img src="@/assets/images/projects/andalus/leaderboard.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Profile Management</h4>
        <img src="@/assets/images/projects/andalus/profile.png" alt="project screenshot" class="w-full rounded-xl px-5"/>

        <h4 class="font-bold text-white">Admin Portal</h4>
        <img src="@/assets/images/projects/andalus/admin_dashboard.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
        <img src="@/assets/images/projects/andalus/admin_students.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section id="challenges">
        <h3 class="heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Developing the Andalus Institute's online Arabic language learning platform presented several challenges. One significant hurdle was designing a system that accommodates diverse learning styles and paces, necessitating the implementation of adaptive learning technologies to ensure effective personalization. Ensuring the integrity of student assessments posed another challenge, as it required developing reliable methods to accurately evaluate progress and deter academic dishonesty. Fostering active community engagement was also crucial; encouraging consistent participation in forums and collaborative activities was essential to maintain a supportive learning environment and prevent high dropout rates. From a financial perspective, establishing a sustainable economic model was imperative to balance development and operational costs while keeping the platform accessible to a broad audience. Additionally, integrating AI-driven features such as chatbots and personalized support systems required addressing challenges related to content accuracy, user privacy, and the seamless blending of AI with human instructional elements. Addressing these challenges was vital to delivering a high-quality, engaging, and effective language learning experience.
        </p>
      </section>
      <section id="initiatives">
        <h3 class="heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address the challenges encountered during the development of the Andalus Institute's online Arabic language learning platform, several strategic initiatives were implemented. To cater to diverse learning styles and paces, an adaptive learning framework was established, ensuring personalized educational experiences for each student. Comprehensive assessment mechanisms were developed to accurately evaluate student progress and uphold academic integrity, incorporating various evaluation methods to ensure fairness and reliability. To foster a vibrant community, initiatives such as interactive forums, group discussions, and collaborative projects were introduced, encouraging active participation and peer-to-peer learning. A sustainable financial model was devised, balancing operational costs with affordable pricing structures, ensuring accessibility without compromising the quality of education. Additionally, advanced AI technologies were integrated to provide personalized support, including AI chatbots and virtual assistants, enhancing the learning experience by offering real-time assistance and feedback. Collectively, these initiatives contributed to the development of a dynamic, supportive, and effective online Arabic language learning environment.
        </p>
        <img src="@/assets/images/projects/andalus/footer.png" alt="project screenshot" class="w-full rounded-xl px-5"/>
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