import Section from './Section.jsx'
import './Projects.css'

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"

    >
      <div className="projects-grid">
        <article className="project-card" data-reveal style={{ '--reveal-delay': '80ms' }}>
          <div className="project-cover">
            <img
              src={`${import.meta.env.BASE_URL}f1658e44-b765-4188-94cc-d75f614de44c.png`}
              alt="MediGuardian AI healthcare platform dashboard"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="project-number">01</div>

          <div className="project-content">
            <span className="project-type">
              AI-Powered Medical Record Intelligence Platform
            </span>

            <h3>MediGuardian AI</h3>

            <p>
              An AI-powered healthcare platform that helps users understand and
              organize their medical records. It extracts information from
              medical documents, builds a unified patient timeline, cross-checks
              prescriptions for potential conflicts, analyzes laboratory trends,
              provides evidence-based medical document Q&amp;A, and helps users
              discover nearby healthcare providers.
            </p>

            <div className="project-tech">
              <span>AI</span>
              <span>Healthcare</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>FastAPI</span>
              <span>Python</span>
              <span>Supabase</span>
              <span>PostgreSQL</span>
              <span>pgvector</span>
              <span>RAG</span>
              <span>Tesseract OCR</span>
              <span>Leaflet</span>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/Arankan05/YGC-AI-Medical-Intelligence"
                className="project-button primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MediGuardian AI source code on GitHub"
              >
                GitHub
              </a>
              <a
                href="https://ygc-ai-medical-intelligence.vercel.app/sign-in"
                className="project-button secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MediGuardian AI live demo"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="project-card" data-reveal style={{ '--reveal-delay': '160ms' }}>
          <div className="project-cover">
            <img
              src={`${import.meta.env.BASE_URL}7f229096-2650-48ff-a9dd-7455a70a3442.png`}
              alt="Amazon India Sales Analysis dashboard"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="project-number">02</div>

          <div className="project-content">
            <span className="project-type">
              Data Analytics Mini Project
            </span>

            <h3>Amazon India Sales Analysis</h3>

            <p>
              An exploratory data analytics project based on an Amazon India
              sales dataset. The data was cleaned and analyzed using Python
              in Google Colab to identify sales trends, patterns, and key
              insights. An accompanying Excel dashboard was developed to
              present the findings through visual reports.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Google Colab</span>
              <span>Microsoft Excel</span>
              <span>Data Analytics</span>
            </div>

            <div className="project-actions">
              <a
                href="https://drive.google.com/drive/folders/1Jmvslphm7KUSZMl75gTJlXBXGOxLGeX5"
                className="project-button primary"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </article>
      </div>
    </Section>
  )
}

export default Projects
