import './Certifications.css'

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7 3h10a2 2 0 0 1 2 2v10.2l-3.5-1.8L12 16.2l-3.5-2.8L5 15.2V5a2 2 0 0 1 2-2zm0 16.4 5-4 5 4V21l-5-2.2L7 21v-1.6z"
      />
    </svg>
  )
}

const certifications = [
  {
    title: 'Java Programming',
    institution: 'SLIIT',
    resultLabel: 'Grade',
    result: 'B',
    description:
      'Hands-on learning in core Java programming, including Object-Oriented Programming, operators and control flow, Java APIs, concurrency and multithreading, collections and generics, and application development and deployment.',
  },
  {
    title: 'Diploma in ICT — Level 3',
    institution: 'IDM Achievers International Campus',
    resultLabel: 'Result',
    result: 'Distinction',
    description:
      'Developed fundamental computing knowledge, software application skills, and practical ICT competencies.',
  },
  {
    title: 'Diploma in English — Level 3',
    institution: 'IDM Achievers International Campus',
    resultLabel: 'Result',
    result: 'Distinction',
    description:
      'Developed skills in English grammar, writing, communication, and practical language use.',
  },
  {
    title: 'Public Speaking, DynEd & Interactive English Courses',
    institution: 'American Corner, Jaffna',
    description:
      'Developed public speaking and presentation skills, completed adaptive English learning through DynEd, and improved conversational English through interactive sessions with native speakers.',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <h2 className="certifications-heading">Certifications</h2>

      <div className="cert-grid">
        {certifications.map((item) => (
          <article key={item.title} className="cert-card">
            <div className="cert-top">
              <span className="cert-icon" aria-hidden="true">
                <CertificateIcon />
              </span>
              {item.result ? (
                <p className="cert-result">
                  <span>{item.resultLabel}</span>
                  <strong>{item.result}</strong>
                </p>
              ) : null}
            </div>

            <h3>{item.title}</h3>
            <p className="cert-institution">{item.institution}</p>
            <p className="cert-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
