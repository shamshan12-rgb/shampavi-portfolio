function Card({ title, meta, children, className = '' }) {
  return (
    <article className={`card ${className}`.trim()}>
      {meta ? <p className="card-meta">{meta}</p> : null}
      {title ? <h3>{title}</h3> : null}
      {children}
    </article>
  )
}

export default Card
