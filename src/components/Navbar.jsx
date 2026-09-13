import { useState } from 'react'
import { navLinks, site } from '../data/site.js'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
      </nav>
    </header>
  )
}

export default Navbar