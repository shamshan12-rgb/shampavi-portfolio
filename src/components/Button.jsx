function Button({
  href,
  children,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const className = `btn btn-${variant}${disabled ? ' is-disabled' : ''}`

  // `rest` is spread first so the attributes this component owns
  // (className, href, disabled state) always win, while anything the caller
  // adds — `aria-label` on the icon-only social buttons, for instance —
  // still reaches the rendered element.
  if (href && !disabled) {
    return (
      <a {...rest} className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button
      {...rest}
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      title={disabled ? 'To be added' : rest.title}
    >
      {children}
    </button>
  )
}

export default Button
