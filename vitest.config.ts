import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // jsdom gives us Element.closest / img.src for the DOM-reading util.
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],
  },
});
