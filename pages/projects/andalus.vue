<script setup lang="ts">
import type { TocItem } from "~/components/Project/TableOfContents.vue";

const { activeSections } = useProjectObserver();

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "project-goals", label: "Project Goals" },
  { id: "tech-stack", label: "Tech Stack" },
  {
    id: "features",
    label: "Features",
    children: [
      { id: "feature-classroom", label: "Classroom" },
      { id: "feature-community", label: "Community" },
      { id: "feature-chatbot", label: "Chatbot" },
      { id: "feature-livechat", label: "Livechat" },
      { id: "feature-calendar", label: "Calendar" },
      { id: "feature-leaderboard", label: "Leaderboard" },
      { id: "feature-profile-management", label: "Profile Management" },
      { id: "feature-admin-portal", label: "Admin Portal" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/andalus/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Andalus</h2>
    <p class="text-white/80">
      Andalus Institute is a gamified online academy for learning Arabic, blending structured video courses with live
      speaking sessions, a student community, and points, badges, and streaks that keep learners motivated.
    </p>
    <ProjectLiveLink href="https://www.andalusinstitute.com"/>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          The Andalus Institute is an online academy dedicated to Arabic language learning. It pairs a structured main
          course and unlockable progressive courses — delivered as video lessons with assessments and instructor
          feedback — with a rich set of engagement tools: a community forum, group and live chat, a live-sessions
          calendar, and an in-app AI assistant for help. Gamification runs throughout, with points, badges,
          leaderboards, streak challenges, and an in-app qirat currency that reward consistent study and turn language
          learning into a habit.
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
        <ul class="tech-stack">
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
          <img src="@/assets/images/projects/andalus/classroom.webp"
               alt="Classroom home with the main course and locked progressive courses"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/andalus/class_preview.webp"
               alt="Course preview with intro video, student count, and lesson/assessment stats"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/andalus/class_lesson.webp"
               alt="Lesson player with a module outline, video, and progress tracking"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">The classroom is the heart of the platform, organising Arabic study into a structured
            main course plus progressive courses that unlock as learners advance. Every course has a preview page with an
            intro video, lesson and assessment counts, and enrolment stats, while the lesson player pairs video lessons
            with a module outline, per-lesson progress, in-lesson search, downloadable resources, and "Mark Complete"
            tracking toward the overall Arabic program.</p>
        </section>
        <section class="project-section" id="feature-community">
          <h4 class="font-bold text-white">Community</h4>
          <img src="@/assets/images/projects/andalus/community.webp"
               alt="Community feed with a rich-text post editor and a gamified weekly-strategy panel"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">A social community feed lets students post with a full rich-text editor, attach
            files, and organise discussion by category. A weekly-strategy panel gamifies participation with goals like
            completing a lesson, attending speaking sessions, and interacting with posts — rewarding consistent streaks
            with in-app qirat currency and keeping learners engaged beyond the lessons.</p>
        </section>
        <section class="project-section" id="feature-chatbot">
          <h4 class="font-bold text-white">Chatbot</h4>
          <img src="@/assets/images/projects/andalus/chatbot.webp"
               alt="Andalusi Ai Bot support chat widget open over the community page"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">An in-app AI assistant — the Andalusi Ai Bot — is available across the platform to
            greet students and help them get unstuck. It opens as a support widget, collects a little context, and
            routes learners to answers or the help centre without leaving the page.</p>
        </section>
        <section class="project-section" id="feature-livechat">
          <h4 class="font-bold text-white">Livechat</h4>
          <img src="@/assets/images/projects/andalus/livechat.webp"
               alt="Group live chat with channels like General Chat, Announcements, and Support"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">Beyond one-off support, the platform hosts real-time group chat organised into
            channels — General Chat, Announcements, Support, and custom groups. Students and staff exchange messages in a
            familiar chat interface, giving the community a live, always-on space to talk.</p>
        </section>
        <section class="project-section" id="feature-calendar">
          <h4 class="font-bold text-white">Calendar</h4>
          <img src="@/assets/images/projects/andalus/calender.webp"
               alt="Live sessions calendar in month view with today's and upcoming events"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">A live-sessions calendar lays out the schedule of speaking sessions and events in a
            month view, with today's and upcoming events highlighted alongside. Learners can review what's coming up and
            add sessions straight to their Google Calendar so they never miss one.</p>
        </section>
        <section class="project-section" id="feature-leaderboard">
          <h4 class="font-bold text-white">Leaderboard</h4>
          <img src="@/assets/images/projects/andalus/leaderboard.webp"
               alt="Leaderboard ranking members by points, with badges and program progress"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">The leaderboard turns learning into friendly competition, ranking members by the
            points they earn across the program. Each profile shows rank, points, and progress toward the Arabic program,
            along with earned badges grouped by main-course, progressive-course, and real-life-event achievements.</p>
        </section>
        <section class="project-section" id="feature-profile-management">
          <h4 class="font-bold text-white">Profile Management</h4>
          <img src="@/assets/images/projects/andalus/profile.webp"
               alt="Account settings with Profile, Account, Introduction, Notifications, and Billing tabs"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">A settings area lets students manage their own account across Profile, Account,
            Introduction, Notifications, and Billing tabs. From the Profile tab they can update their picture, name,
            gender, bio, and location, keeping their public presence and preferences up to date.</p>
        </section>
        <section class="project-section" id="feature-admin-portal">
          <h4 class="font-bold text-white">Admin Portal</h4>
          <img src="@/assets/images/projects/andalus/admin_dashboard.webp"
               alt="Admin dashboard with assessments, earnings, subscriptions, and qirat economy stats"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/andalus/admin_students.webp"
               alt="Admin students table with status, subscription, points, and Stripe import"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">A dedicated admin portal gives the team full control over the platform. The dashboard
            surfaces pending assessments, earnings, new students, and the qirat virtual-currency economy, plus monthly,
            yearly, and special subscription metrics. Deeper sections manage students and instructors, courses and
            assessments, badges, announcements, and events — with student records and subscriptions importable directly
            from Stripe.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          Developing the Andalus Institute platform presented several challenges. A significant one was the sheer breadth
          of the product — structured courses, assessments, a community, live and group chat, a calendar, and a full
          gamification economy of points, badges, and virtual currency all had to work together coherently. Integrating
          AI-assisted support added further considerations around content accuracy, user privacy, and blending automated
          help with human instruction — all essential to delivering a high-quality, engaging learning experience.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address these challenges, several initiatives were put in place. Learning was structured into a progressive
          path where courses unlock as students advance, and a gamification layer — points, badges, streak challenges,
          leaderboards, and a qirat reward currency — was built to sustain motivation and cater to different paces,
          keeping each learner engaged through to program completion.
        </p>
        <img src="@/assets/images/projects/andalus/footer.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
    </div>

    <div class="col-span-3 mt-5">
      <div class="sticky top-[120px] flex flex-col gap-2">
        <h4 class="text-white font-bold mb-2">Table of Contents</h4>
        <LazyProjectTableOfContents :items="toc" :active-sections="activeSections"/>
      </div>
    </div>
  </div>
</template>