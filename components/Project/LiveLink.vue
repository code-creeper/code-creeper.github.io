<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** Full URL of the live project, e.g. "https://capital.club" */
    href: string;
    /** Button label shown before the domain */
    label?: string;
    /** Override the displayed domain (defaults to the host derived from `href`) */
    url?: string;
  }>(),
  { label: "Visit Live Site", url: undefined }
);

// Derive a clean domain (strip protocol, "www.", and trailing slash) unless overridden.
const displayUrl = computed(
  () => props.url ?? props.href.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "")
);
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="live-link"
    :aria-label="`${label} (opens in a new tab)`"
  >
    <span class="live-link__dot" aria-hidden="true"></span>
    <span class="live-link__label">{{ label }}</span>
    <span class="live-link__url">{{ displayUrl }}</span>
    <svg
      class="live-link__arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  </a>
</template>

<style scoped>
.live-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 1.25rem;
  padding: 0.55rem 1.1rem;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--primary-color) 45%, transparent);
  background: color-mix(in srgb, var(--primary-color) 8%, transparent);
  color: var(--white-color);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.live-link:hover {
  border-color: var(--primary-color);
  background: color-mix(in srgb, var(--primary-color) 16%, transparent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--primary-color) 30%, transparent),
    0 8px 28px -12px color-mix(in srgb, var(--primary-color) 70%, transparent);
  transform: translateY(-1px);
}

.live-link__dot {
  position: relative;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: var(--primary-color);
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary-color) 70%, transparent);
  animation: live-pulse 2s ease-out infinite;
}

.live-link__label {
  color: var(--white-color);
}

.live-link__url {
  color: color-mix(in srgb, var(--primary-color) 90%, white);
  font-weight: 500;
  letter-spacing: 0.01em;
}

.live-link__url::before {
  content: "·";
  margin-right: 0.65rem;
  color: rgba(255, 255, 255, 0.35);
}

.live-link__arrow {
  width: 1.05rem;
  height: 1.05rem;
  color: var(--primary-color);
  transition: transform 0.25s ease;
}

.live-link:hover .live-link__arrow {
  transform: translate(2px, -2px);
}

@keyframes live-pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary-color) 65%, transparent);
  }
  70% {
    box-shadow: 0 0 0 0.5rem color-mix(in srgb, var(--primary-color) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary-color) 0%, transparent);
  }
}

@media (prefers-reduced-motion: reduce) {
  .live-link,
  .live-link__arrow {
    transition: none;
  }
  .live-link__dot {
    animation: none;
  }
}

@media (max-width: 480px) {
  .live-link__url {
    display: none;
  }
}
</style>
