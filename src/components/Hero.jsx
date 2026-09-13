import { site } from '../data/site.js'
import './Hero.css'

function DataIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="hero-data-icon"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M12 1v5M12 18v5M1 12h5M18 12h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-copy">
        <div className="hero-status">
          <span className="status-dot"></span>

          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <p className="eyebrow">Portfolio / 2026</p>

        <h1>
          {site.name}
          <span className="hero-accent">.</span>
        </h1>

        <p className="headline">
          {site.headline}
        </p>

        <p className="lede">
          {site.intro}
        </p>

        <div className="hero-data-line">
          <DataIcon />

          <div>
            <span className="data-label">
              FOCUS AREA
            </span>

            <strong>
              DATA SCIENCE • COMPUTING • MATHEMATICS
            </strong>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
        <div className="hero-orbit orbit-three"></div>

        <div className="hero-core">
          <div className="core-ring"></div>

          <div className="hero-photo">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Shampavi"
            />
          </div>
        </div>

        <div className="hero-node node-a"></div>
        <div className="hero-node node-b"></div>
        <div className="hero-node node-c"></div>
        <div className="hero-node node-d"></div>

        <div className="hero-code code-one">
          01 10 01
        </div>

        <div className="hero-code code-two">
          PYTHON
        </div>

        <div className="hero-code code-three">
          JAVA
        </div>

        <div className="hero-code code-four">
          ANALYTICS
        </div>

        <div className="hero-mini-chart">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero