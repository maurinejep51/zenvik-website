function App() {
  return (
    <main className="min-h-screen bg-white text-dark">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Zenvik Technologies
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Full-Service ICT, Hosting & Software Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A modern digital technology company delivering hosting, software development,
            websites, branding, marketing, and enterprise ICT solutions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-accent px-8 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-1"
            >
              Explore Services
            </a>

            <a
              href="https://portal.zenviktechnologies.com"
              className="rounded-full border border-primary px-8 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Visit Client Portal
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App