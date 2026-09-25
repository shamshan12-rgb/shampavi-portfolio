import { useEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'
const REVEALED_CLASS = 'is-revealed'
const READY_CLASS = 'reveal-ready'

/**
 * Reveals every `[data-reveal]` element once it scrolls into view.
 *
 * The hiding half of the effect lives behind `.reveal-ready`, which this
 * hook puts on <html> only when it can actually reveal things again. With
 * JavaScript off, without IntersectionObserver, or when the visitor has
 * asked for reduced motion, the class is never added and the page renders
 * exactly as it would have without the animation.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement

    const canAnimate =
      'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canAnimate) return undefined

    root.classList.add(READY_CLASS)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add(REVEALED_CLASS)
          observer.unobserve(entry.target)
        }
      },
      {
        // Threshold 0 rather than a ratio: an element taller than the
        // viewport can never reach a ratio, and would stay hidden.
        threshold: 0,
        rootMargin: '0px 0px -60px 0px',
      },
    )

    document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      root.classList.remove(READY_CLASS)
    }
  }, [])
}
