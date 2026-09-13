function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  )
}

export default Section
