// Decision logic for the project-screenshot lightbox, kept as a pure function so it can be
// unit-tested without a browser. The layout's delegated click handler calls this and, when it
// returns a target, opens the modal.

export interface LightboxContext {
  /** Current viewport width in px (e.g. window.innerWidth). */
  viewportWidth: number;
  /** True only on a project case-study page (/projects/<slug>), not the gallery or home. */
  isProjectPage: boolean;
}

export interface LightboxTarget {
  src: string;
  alt: string;
}

/** Widths at or below this (the Tailwind `md` breakpoint) skip the lightbox — the image already
 *  spans the device width there, so a full-width modal adds nothing. */
export const LIGHTBOX_MIN_WIDTH = 768;

/**
 * Given a clicked element and the page context, decide whether the lightbox should open and with
 * what image. Returns `null` when it should not (wrong page, too narrow, or not a screenshot).
 */
export function resolveLightboxTarget(
  el: Element | null,
  ctx: LightboxContext
): LightboxTarget | null {
  if (!ctx.isProjectPage) return null;
  if (ctx.viewportWidth <= LIGHTBOX_MIN_WIDTH) return null;

  const img = el?.closest?.('img.rounded-xl') as HTMLImageElement | null;
  if (!img) return null;

  return { src: img.currentSrc || img.src, alt: img.alt };
}
