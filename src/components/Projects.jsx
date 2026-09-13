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
        <article className="project-card">
          <div className="project-number">01</div>

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