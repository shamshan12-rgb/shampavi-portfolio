import { useState } from 'react'
import { navLinks, site } from '../data/site.js'
import useTheme from '../hooks/useTheme.js'
import ThemeToggle from './ThemeToggle.jsx'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          {site.name}
        </a>

        {/* Desktop navigation */}
        <nav className="nav-desktop" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
            className="theme-toggle-header"
          />
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`menu-icon ${
              isOpen ? 'is-open' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`nav-mobile ${
          isOpen ? 'is-open' : ''
        }`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}

        <ThemeToggle
          theme={theme}
          onToggle={toggleTheme}
          className="theme-toggle-inline"
        />
      </nav>
    </header>
  )
}

export default Navbar
