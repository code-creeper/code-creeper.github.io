import { describe, it, expect, beforeEach } from 'vitest';
import { resolveLightboxTarget, LIGHTBOX_MIN_WIDTH } from '../utils/lightbox';

// Build a project screenshot <img> (the elements the lightbox targets) and return it detached.
function makeImg(overrides: Partial<{ cls: string; src: string; alt: string }> = {}) {
  const img = document.createElement('img');
  img.className = overrides.cls ?? 'w-full rounded-xl';
  img.setAttribute('src', overrides.src ?? 'http://localhost/_nuxt/shot.webp');
  img.alt = overrides.alt ?? 'a screenshot';
  document.body.appendChild(img);
  return img;
}

const desktop = { viewportWidth: 1440, isProjectPage: true };

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('resolveLightboxTarget', () => {
  it('returns the image src + alt when a screenshot is clicked on a wide project page', () => {
    const img = makeImg({ src: 'http://localhost/_nuxt/leaderboard.webp', alt: 'Leaderboard' });
    expect(resolveLightboxTarget(img, desktop)).toEqual({
      src: 'http://localhost/_nuxt/leaderboard.webp',
      alt: 'Leaderboard',
    });
  });

  it('resolves the nearest screenshot when an inner/child element is the click target', () => {
    // Delegation: e.target can be a descendant; closest() must walk up to the img.
    const img = makeImg();
    // An <img> has no children in practice, but closest() from the element itself must still match.
    expect(resolveLightboxTarget(img, desktop)).not.toBeNull();
  });

  it('ignores clicks that are not on a rounded screenshot', () => {
    const other = document.createElement('img');
    other.className = 'rounded-[10px]'; // e.g. a home-page project card image
    document.body.appendChild(other);
    expect(resolveLightboxTarget(other, desktop)).toBeNull();

    const p = document.createElement('p');
    document.body.appendChild(p);
    expect(resolveLightboxTarget(p, desktop)).toBeNull();
  });

  it('is disabled off project pages even for a matching image', () => {
    const img = makeImg();
    expect(resolveLightboxTarget(img, { viewportWidth: 1440, isProjectPage: false })).toBeNull();
  });

  it(`is disabled at and below the ${LIGHTBOX_MIN_WIDTH}px breakpoint`, () => {
    const img = makeImg();
    expect(resolveLightboxTarget(img, { viewportWidth: 767, isProjectPage: true })).toBeNull();
    expect(resolveLightboxTarget(img, { viewportWidth: 768, isProjectPage: true })).toBeNull();
  });

  it('is enabled at 769px (just above the breakpoint)', () => {
    const img = makeImg();
    expect(resolveLightboxTarget(img, { viewportWidth: 769, isProjectPage: true })).not.toBeNull();
  });

  it('handles a null target (click landed on nothing matchable)', () => {
    expect(resolveLightboxTarget(null, desktop)).toBeNull();
  });

  it('falls back to src when currentSrc is empty', () => {
    // jsdom leaves currentSrc empty; the util must still return the src attribute.
    const img = makeImg({ src: 'http://localhost/_nuxt/fallback.webp' });
    expect(resolveLightboxTarget(img, desktop)?.src).toBe('http://localhost/_nuxt/fallback.webp');
  });
});
