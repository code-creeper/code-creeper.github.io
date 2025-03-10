<script setup lang="ts">

import User from "~/components/Icons/User.vue";
</script>

<template>
  <div class="page">
    <img src="@/assets/images/project-img.webp" alt="Project Image" class="w-full rounded-xl"/>

    <h2 class="fs-large text-white font-bold mt-3">Taboo Tv</h2>
    <p class="text-white/80">Fitness app packed with features like calorie counter, workouts, and measurement journal to
      help users achieve their fitness goals.</p>

    <div class="flex items-center gap-2 my-2">
      <User/>
      <p class="text-sm text-white">Full-time at Taboo Tv</p>
    </div>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <h3 class="heading heading-bl">Overview</h3>
      <p class="text-white/90">
        GGL (Gak Gendut Lagi) is a fitness app packed with features like calorie counting, a measurement journal,
        workout tutorials, meal planning, and personalized mentoring to help users achieve their fitness goals.
      </p>
      <img src="@/assets/images/ssproject.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>

      <h3 class="heading heading-bl">Project Goals</h3>
      <p class="text-white/90">The primary goal of this project was to rebuild the web app of GGL from scratch. The
        existing web app was outdated, both in terms of design and technology, and it did not align with the current
        mobile app's features and aesthetics. The objective was to "migrate" the web app using modern technologies and
        design principles consistent with the mobile app, ensuring a seamless and cohesive user experience across all
        platforms.
      </p>

      <h3 class="heading heading-bl">Tech Stack</h3>
      <p class="text-white/90">To achieve this, the following technologies were used:</p>
      <ul>
        <li><span class="font-bold">Next.js:</span>For server-side rendering and optimized web performance.</li>
        <li><span class="font-bold">Chakra Ui:</span>To implement a cohesive and responsive design system.</li>
        <li><span class="font-bold">Rematch:</span>For efficient and maintainable state management.</li>
      </ul>

      <h3 class="heading heading-bl">Features</h3>
      <h4 class="font-bold text-white">Meal Plan (Calories Counter)</h4>
      <img src="@/assets/images/ssproject.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>

      <h4 class="font-bold text-white">Toturial</h4>
      <img src="@/assets/images/ssproject.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>

      <h3 class="heading heading-bl">Challanges</h3>
      <p class="text-white/90">One of the main challenges was developing the web app in parallel with the mobile team.
        Since the mobile team began their development earlier, maintaining zero feature disparity with the mobile app
        became crucial. Ensuring consistency across both platforms in terms of design and functionality required
        meticulous attention to detail and continuous communication between teams.</p>

      <h3 class="heading heading-bl">Initiatives</h3>
      <p class="text-white/90">To make the app lightning-fast & improve user experience, I focused on optimizing the
        app’s performance. By implementing an effective caching strategy, I achieved a significant boost in loading
        speed:
      </p>


      <h4 class="font-bold text-white">Before Dashboard</h4>
      <img src="@/assets/images/project-img.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>


      <h4 class="font-bold text-white">After Dashboard</h4>
      <img src="@/assets/images/project-img.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>

      <p class="text-white/90">This optimization resulted in a 33.8% improvement in the dashboard’s loading speed.
        Testing across various pages, including the dashboard, meal plan, and measurement pages, showed an average
        performance increase of 39%.
      </p>
      <p class="text-white/90">Details of this optimization process were documented in my college thesis and later
        published in the Journal of Informatics and Computer Science (JINACS). You can read the publication here.</p>


    </div>
  </div>

</template>

<style scoped>
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