import Section from './Section.jsx'
import Button from './Button.jsx'
import { site } from '../data/site.js'

function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m Shampavi, a second-year BSc Applied Mathematics and
            Computing undergraduate at the University of Vavuniya, with an
            interdisciplinary academic foundation in Computer Science,
            Applied Mathematics, Pure Mathematics, and Statistics. This
            combination has strengthened my analytical thinking, logical
            reasoning, problem-solving, and computational skills.
          </p>

          <p>
            I&apos;m particularly interested in Data Science and technology,
            with a growing passion for transforming raw data into meaningful
            insights and developing practical, data-driven solutions. I
            continuously work to expand my technical knowledge through
            academic projects, self-learning, and hands-on experience with
            programming, data analytics, and modern computing tools.
          </p>

          <p>
            Beyond academics, I actively engage in leadership, volunteering,
            and professional communities. I&apos;m an Alumni Member of the
            Youth Forum at American Corner Jaffna, an AIESECer, an IEEE
            member, and a Director of Club Service at Rotaract. Through these
            experiences, I have developed valuable skills in leadership, team
            coordination, communication, project planning, collaboration, and
            community engagement.
          </p>

          <p>
            I&apos;m eager to continue developing my technical and professional
            capabilities, collaborate with like-minded individuals, and explore
            opportunities where mathematics, computing, and data science can be
            applied to solve real-world problems.
          </p>

          <div className="hero-actions">
            <Button
              href={site.email ? `mailto:${site.email}` : undefined}
              variant="secondary"
              disabled={!site.email}
            >
              Email
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About