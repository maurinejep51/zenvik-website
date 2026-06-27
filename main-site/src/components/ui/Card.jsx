function Card({ children, className = "", as = "div", href, ...props }) {
  const Component = as

  return (
    <Component
      href={href}
      className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-soft ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card
