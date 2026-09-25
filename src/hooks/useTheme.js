import { useCallback, useEffect, useState } from 'react'

export const THEME_STORAGE_KEY = 'theme'

const DARK = 'dark'
const LIGHT = 'light'

/** The stored choice, or null when the visitor has never picked one. */
function readStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return stored === LIGHT || stored === DARK ? stored : null
  } catch {
    // Private mode / storage disabled: fall back to the system preference.
    return null
  }
}

/**
 * Owns the `data-theme` attribute on <html>.
 *
 * The inline boot script in index.html has already resolved and stamped
 * the theme before first paint, so this starts from what is on the page
 * rather than re-deciding (which would cause a flash on hydrationless
 * first render).
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === LIGHT ? LIGHT : DARK,
  )

  useEffect(() => {
    const root = document.documentElement

    // First run: the boot script already painted this theme, so there is
    // nothing to cross-fade. Only a real change animates.
    if (root.dataset.theme === theme) return undefined

    root.classList.add('theme-transition')
    root.dataset.theme = theme

    const timer = setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 400)

    return () => clearTimeout(timer)
  }, [theme])

  // With no explicit choice stored, keep following the OS setting.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)')

    const handleChange = (event) => {
      if (!readStoredTheme()) setTheme(event.matches ? LIGHT : DARK)
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === DARK ? LIGHT : DARK
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next)
      } catch {
        // Nothing to persist to; the choice still applies for this visit.
      }
      return next
    })
  }, [])

  return [theme, toggleTheme]
}
