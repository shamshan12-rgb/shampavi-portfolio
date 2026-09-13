import './Education.css'

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 4 2 9l10 5 8-4v5.5h2V9L12 4zm-6 8.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.8l-6 3-6-3z"
      />
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 3 3 8v2h18V8L12 3zm-7 9v7H4v2h16v-2h-1v-7h-2v7h-3v-5H10v5H7v-7H5z"
      />
    </svg>
  )
}

const education = [
  {
    featured: true,
    icon: CapIcon,
    institution: 'University of Vavuniya',
    qualification: 'BSc Applied Mathematics and Computing',
    dates: '2025 – 2029',
    status: 'Currently in 2nd Year',
    coursework: [
      'Computer Science',
      'Pure Mathematics',
      'Applied Mathematics',
      'Statistics',
    ],
  },
  {
    icon: SchoolIcon,
    institution: "Vembadi Girls' High School, Jaffna",
    qualification: 'G.C.E. Advanced Level — Physical Science Stream',
    dates: '2023',
    results: [
      { subject: 'Combined Mathematics', grade: 'B' },
      { subject: 'Chemistry', grade: 'C' },
      { subject: 'Physics', grade: 'S' },
    ],
  },
  {
    icon: SchoolIcon,
    institution: "Vembadi Girls' High School, Jaffna",
    qualification: 'G.C.E. Ordinary Level',
    results: [
      { subject: 'Mathematics', grade: 'A' },
      { subject: 'English', grade: 'A' },
      { subject: 'ICT', grade: 'A' },
      { subject: 'English Literature', grade: 'B' },
      { subject: 'Sinhala Language', grade: 'B' },
      { subject: 'Tamil Language', grade: 'B' },
      { subject: 'Science', grade: 'B' },
      { subject: 'Religion', grade: 'A' },
      { subject: 'History', grade: 'A' },
      { subject: 'Commerce', grade: 'A' },
    ],
  },
]

function Education() {
  return (
    <section id="education" className="section education-section">
      <h2 className="education-heading">Education</h2>

      <ol className="education-timeline">
        {education.map((item) => {
          const Icon = item.icon

          return (
            <li
              key={`${item.institution}-${item.qualification}`}
              className={`edu-card${item.featured ? ' is-featured' : ''}`}
            >
              <span className="edu-marker" aria-hidden="true">
                <Icon />
              </span>

              <article>
                <p className="edu-institution">{item.institution}</p>
                <h3>{item.qualification}</h3>

                <div className="edu-meta">
                  {item.dates ? <span>{item.dates}</span> : null}
                  {item.status ? <span className="edu-status">{item.status}</span> : null}
                </div>

                {item.coursework ? (
                  <div className="edu-block">
                    <h4>Relevant Coursework</h4>
                    <ul className="edu-tags">
                      {item.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {item.results ? (
                  <div className="edu-block">
                    <h4>Results</h4>
                    <ul className="edu-results">
                      {item.results.map((result) => (
                        <li key={result.subject}>
                          <span>{result.subject}</span>
                          <span className="edu-grade">{result.grade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Education
