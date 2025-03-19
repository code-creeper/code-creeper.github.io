<script setup lang="ts">
import {onBeforeUnmount, onMounted} from 'vue';

const parallaxAnimation = () => {
  const cards = document.querySelectorAll(".upwork-review-card");

  cards.forEach((el) => {
    const rect = el.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    // Check if top of the card is visible or bottom is still in the viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      // Start when the top of the card appears at the bottom of the viewport
      const start = windowHeight;
      // End when the bottom of the card reaches the top of the viewport
      const end = -rect.height;

      // Calculate progress percentage
      let percentage = ((rect.top - start) / (end - start)) * 100;

      // Calculate opacity (0.8 at 0%, 1 at 100%)
      const opacity = 0.8 + (percentage / 100) * (1 - 0.8);

      // Calculate scale (0.8 at 0%, 1.1 at 100%)
      const scale = 0.8 + (percentage / 100) * (1.12 - 0.8);

      // Clamp percentage between 0 and 100
      percentage = Math.max(0, Math.min(100, percentage));

      // Apply transformation or other effects based on the percentage
      el.style.opacity = opacity.toFixed(2);
      el.style.transform = `scale(${scale.toFixed(2)})`;
      // console.log(`Card: ${el.classList} -> ${percentage.toFixed(2)}%`);
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', parallaxAnimation);
  parallaxAnimation();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', parallaxAnimation);
});
</script>


<template>
  <div class="radialBackground">
    <div class="page text-center">
      <h2 class="heading">My clients simply love <span class="text-[var(--primary-color)]">what I do</span></h2>
      <h4 class="line max-w-4xl mx-auto">Proud to serve as the innovation partner for industry leaders who
        have experienced my expertise and excellence firsthand.</h4>

      <div class="flex flex-col gap-y-5 md:gap-y-6 mt-28">
        <LazyHomeUpworkReviewCard
            review="Abdul delivered exceptional work on the Responsive Questionnaire Development project. He was professional, met all deadlines, and showed great skill in his field. His attention to detail and clear communication made the collaboration seamless. I highly recommend Abdul for any project and look forward to working with him again."
            clientName="Emil Rustemovich"
        />
        <LazyHomeUpworkReviewCard
            review="Abdul was amazing to work with. he took a complicated set up and made it work perfectly in Laravel and for that I very much appreciate his effort. He is very knowledgeable and very quick and accurate with his work so we wasted no time in getting this done."
            clientName="Jeff Lewis"
        />
        <LazyHomeUpworkReviewCard
            review="Abdul delivered exceptional work on the Responsive Questionnaire Development project. He was professional, met all deadlines, and showed great skill in his field. His attention to detail and clear communication made the collaboration seamless. I highly recommend Abdul for any project and look forward to working with him again."
            clientName="Sam Ingwer"
        />
        <LazyHomeUpworkReviewCard
            review="Abdul continues to impress me with his skill. He never lets me down and always produces fantastic code."
            clientName="Jeff Lewis"
        />
        <LazyHomeUpworkReviewCard
            review="Great programmer and great person. Supporting a lot working hard and professional.very very recommended."
            clientName="Sam Ingwer"
        />
        <LazyHomeUpworkReviewCard
            review="5 Star review"
            clientName="Waerme Wimmer"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.heading {
  line-height: 55px;
  font-size: 3rem;
  color: white;
  letter-spacing: -2px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 2.375rem;
}

.line {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: white;
  font-weight: 400;
  text-align: center;
}

.radialBackground {
  background-image: radial-gradient(circle at -30% 25%, rgb(6, 96, 41) 0px, transparent 30%),
  radial-gradient(circle at 120% 72%, rgb(6, 96, 41) 0px, transparent 30%);
}

@media screen and (max-width: 48rem) {
  .radialBackground {
    background-image: radial-gradient(circle at -30% 20%, rgb(6, 96, 41) 0px, transparent 22%),
    radial-gradient(circle at 120% 83%, rgb(6, 96, 41) 0px, transparent 22%);
  }
}
</style>