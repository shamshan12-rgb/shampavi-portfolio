const DEFAULT_STEP = 80

/**
 * Inline style that offsets an item's entrance within its group.
 *
 * The index is capped so a long list (the eight activity cards) never makes
 * the last item sit and wait half a second after it enters the viewport.
 */
export function revealDelay(index, step = DEFAULT_STEP, cap = 3) {
  return { '--reveal-delay': `${Math.min(index, cap) * step}ms` }
}
