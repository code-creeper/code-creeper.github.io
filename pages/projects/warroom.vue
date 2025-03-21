<script setup lang="ts">
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
    <img src="@/assets/images/projects/warroom/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Warroom</h2>
    <p class="text-white/80">
      Warroom is open communication platform for quick and easy communication between team members and individual while
      sharing links, emojis, stikers, voice notes and files.
    </p>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Warroom is a dynamic communication platform designed for seamless and efficient collaboration. It enables team
          members and individuals to exchange messages, share links, emojis, stickers, voice notes, and files
          effortlessly.
        </p>
        <img src="@/assets/images/projects/warroom/home.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The goal of Warroom is to provide a seamless and efficient communication platform that enables both teams and
          individuals to collaborate effortlessly. It is designed to support real-time messaging with instant delivery
          and synchronization across devices, ensuring smooth interactions.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Tailwind & Vuetify:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Postgres:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-reaction">
          <h4 class="font-bold text-white">Reaction</h4>
          <img src="@/assets/images/projects/warroom/react.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-sticker">
          <h4 class="font-bold text-white">Stickers</h4>
          <img src="@/assets/images/projects/warroom/sticker.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-reply">
          <h4 class="font-bold text-white">Reply</h4>
          <img src="@/assets/images/projects/warroom/reply.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-links-with-preview">
          <h4 class="font-bold text-white">Sharing Links with Preview</h4>
          <img src="@/assets/images/projects/warroom/link_preview.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-voice-notes">
          <h4 class="font-bold text-white">Voice Notes</h4>
          <img src="@/assets/images/projects/warroom/voice.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-files-and-videos">
          <h4 class="font-bold text-white">Sharing Files & Videos</h4>
          <img src="@/assets/images/projects/warroom/file_and_video.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
        <section class="project-section" id="feature-admin-portal">
          <h4 class="font-bold text-white">Admin Portal</h4>
          <img src="@/assets/images/projects/warroom/admin.webp" alt="project screenshot"
               class="w-full rounded-xl px-5"/>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          One of the primary challenges in developing Warroom is ensuring real-time, seamless communication without
          latency issues, especially when handling large files, voice notes, and multimedia sharing.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address these challenges, Warroom takes several key initiatives. The platform leverages advanced WebSocket
          technology for instant message delivery and real-time collaboration. Optimized media handling and compression
          techniques are implemented to support high-speed file sharing without compromising quality.
        </p>
        <img src="@/assets/images/projects/warroom/footer.jpg" alt="project screenshot" class="w-full rounded-xl px-5"/>
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
                <a href="#feature-reaction"
                   :class="{'text-white': activeSections.includes('feature-reaction')}">
                  Reaction
                </a>
              </li>
              <li>
                <a href="#feature-sticker"
                   :class="{'text-white': activeSections.includes('feature-sticker')}">
                  Stickers
                </a>
              </li>
              <li>
                <a href="#feature-reply"
                   :class="{'text-white': activeSections.includes('feature-reply')}">
                  Reply
                </a>
              </li>
              <li>
                <a href="#feature-links-with-preview"
                   :class="{'text-white': activeSections.includes('feature-links-with-preview')}">
                  Sharing Links with Preview
                </a>
              </li>
              <li>
                <a href="#feature-voice-notes"
                   :class="{'text-white': activeSections.includes('feature-voice-notes')}">
                  Voice Notes
                </a>
              </li>
              <li>
                <a href="#feature-files-and-videos"
                   :class="{'text-white': activeSections.includes('feature-files-and-videos')}">
                  Sharing Files & Videos
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