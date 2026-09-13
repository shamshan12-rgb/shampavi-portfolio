function Button({
  href,
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
}) {
  const className = `btn btn-${variant}${disabled ? ' is-disabled' : ''}`

  if (href && !disabled) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      title={disabled ? 'To be added' : undefined}
    >
      {children}
    </button>
  )
}

export default Button
