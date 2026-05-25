function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
  as = "a",
  type = "button",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-center text-sm font-semibold transition duration-300"

  const variants = {
    primary:
      "bg-primary text-white hover:-translate-y-0.5 hover:shadow-soft",

    accent:
      "bg-accent text-white hover:-translate-y-0.5 hover:shadow-soft",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",

    light:
      "border border-white/20 text-white hover:bg-white hover:text-primary",
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={classes}>
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
    >
      {children}
    </a>
  )
}

export default Button
