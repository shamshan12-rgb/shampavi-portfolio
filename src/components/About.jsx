import Section from './Section.jsx'

function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="about-grid">
        <div className="about-copy" data-reveal style={{ '--reveal-delay': '80ms' }}>
          <p>
            I&apos;m Shampavi, a second-year BSc Applied Mathematics and
            Computing undergraduate at the University of Vavuniya, with a
            strong academic foundation in Computer Science, Mathematics, and
            Statistics. I&apos;m passionate about Data Science and technology,
            with a strong interest in turning data into meaningful insights
            and building practical, data-driven solutions.
          </p>

          <p>
            Alongside academics, I actively engage in leadership, volunteering,
            and professional communities through AIESEC, IEEE, Rotaract, and
            the Youth Forum at American Corner Jaffna. These experiences have
            strengthened my leadership, teamwork, communication, and project
            coordination skills. I&apos;m continually exploring new
            technologies and opportunities to apply mathematics and computing
            to real-world challenges.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About