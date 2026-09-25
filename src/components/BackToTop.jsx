import { useEffect, useRef, useState } from 'react'
import './BackToTop.css'

/* Appears once the hero is mostly scrolled past. */
const SHOW_AFTER_VIEWPORTS = 0.6

/* Gap kept between the button and the footer's top edge. */
const FOOTER_GAP = 12

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
    </svg>
  )
}

/**
 * Floating scroll-to-top control.
 *
 * Hidden via `visibility` rather than unmounting, so it leaves the tab order
 * and the accessibility tree while out of view but can still fade in and out.
 */
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const footer = document.querySelector('.site-footer')

    const update = () => {
      const pastHero =
        window.scrollY > window.innerHeight * SHOW_AFTER_VIEWPORTS

      /* Measured against the button's own box rather than a fixed offset:
         the footer is shorter than the button's corner on wide screens, so
         a constant clearance could never be reached there. */
      const button = buttonRef.current
      const clearOfFooter =
        !footer ||
        !button ||
        footer.getBoundingClientRect().top >=
          button.getBoundingClientRect().bottom + FOOTER_GAP

      setIsVisible(pastHero && clearOfFooter)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUpIcon />
    </button>
  )
}

export default BackToTop
