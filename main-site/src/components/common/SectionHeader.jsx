function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "mx-auto text-center" : ""

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${light ? "text-accent" : "text-gold"}`}>
          {eyebrow}
        </p>
      )}

      <h2 className={`text-3xl font-black leading-tight sm:text-4xl md:text-5xl ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
