import { motion } from "framer-motion"
import Button from "../components/ui/Button"
import Container from "../components/common/Container"

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-white blur-3xl" />
      </div>

      <Container className="relative grid min-h-[88vh] items-center gap-10 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Enterprise ICT & Hosting Solutions
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Powering Modern Businesses Through Technology
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold/90">
            Empowering Growth Through Technology
          </p>

          <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
            Hosting, software development, websites, branding, digital marketing,
            and enterprise ICT solutions built for modern businesses and growing brands.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="#services"
              variant="accent"
            >
              Explore Services
            </Button>

            <Button
              href="https://portal.zenviktechnologies.com"
              variant="light"
            >
              Client Portal
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/70">
            <span>Secure Hosting</span>
            <span>Custom Software</span>
            <span>Business Websites</span>
            <span>Digital Growth</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-soft backdrop-blur-xl md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <h3 className="text-lg font-bold">Hosting</h3>
                <p className="mt-2 text-sm text-white/70">
                  Fast, secure & scalable infrastructure.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <h3 className="text-lg font-bold">Software</h3>
                <p className="mt-2 text-sm text-white/70">
                  Custom systems & SaaS platforms.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <h3 className="text-lg font-bold">Websites</h3>
                <p className="mt-2 text-sm text-white/70">
                  Modern conversion-focused experiences.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-5">
                <h3 className="text-lg font-bold">Marketing</h3>
                <p className="mt-2 text-sm text-white/70">
                  Branding & digital growth strategies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HeroSection
