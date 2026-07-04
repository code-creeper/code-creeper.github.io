<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const open = ref(false);
const src = ref('');
const alt = ref('');
const overflowing = ref(false);
const scrollFrame = ref<HTMLElement | null>(null);

function show(nextSrc: string, nextAlt = '') {
  src.value = nextSrc;
  alt.value = nextAlt;
  overflowing.value = false;
  open.value = true;
  document.body.style.overflow = 'hidden';
}

function close() {
  open.value = false;
  document.body.style.overflow = '';
}

// Show the "scroll to see more" cue only when the image overflows the frame.
function onImageLoad() {
  const frame = scrollFrame.value;
  if (!frame) return;
  overflowing.value = frame.scrollHeight > frame.clientHeight + 4;
}

function onFrameScroll() {
  overflowing.value = false;
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});

defineExpose({ show });
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-8">
        <!-- Backdrop, clicks outside will hit this -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md" @click="close"></div>

        <!-- Stage: capped height, inner frame scrolls for tall screenshots -->
        <div class="relative z-10 flex w-full max-w-[1200px] xl:max-w-[1500px] 2xl:max-w-[1750px] max-h-[92vh] flex-col" @click.stop>
          <button
            class="absolute -right-2 -top-2 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-[var(--card-bg-color)] text-white transition hover:bg-[var(--primary-color)] hover:text-black md:-right-3 md:-top-3"
            aria-label="Close image"
            @click="close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div ref="scrollFrame" class="overflow-auto rounded-xl border border-white/15 bg-black" @scroll="onFrameScroll">
            <img :src="src" :alt="alt" class="w-full h-auto" @load="onImageLoad" />
          </div>

          <div class="mt-3 flex items-center justify-between gap-4 px-1 text-sm text-white/60">
            <span class="text-white/80 line-clamp-1">{{ alt }}</span>
            <span class="hidden shrink-0 sm:inline">Esc &middot; backdrop &middot; &times; to close</span>
          </div>

          <div
            v-if="overflowing"
            class="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur"
          >
            &darr; scroll to see the full image
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
