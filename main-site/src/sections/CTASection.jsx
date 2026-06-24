import { motion } from "framer-motion"
import Container from "../components/common/Container"

const ease = [0.22, 1, 0.36, 1]

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0.3) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease },
  }),
}

function CTASection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-b from-primary to-[#0f172a] py-24 text-white sm:py-28 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[36rem] w-[76rem] max-w-[115vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(4,58,126,0.1) 0%, rgba(4,58,126,0.055) 38%, rgba(4,58,126,0) 72%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[47%] -z-10 h-[32rem] w-[68rem] max-w-[105vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(223,164,8,0.065) 0%, rgba(223,164,8,0.035) 38%, rgba(223,164,8,0) 72%)",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[44%] h-28 w-[44rem] max-w-[80vw] -translate-x-1/2 -rotate-[28deg] bg-accent/[0.025] blur-[52px]" />
        <div className="absolute left-1/2 top-[44%] h-28 w-[44rem] max-w-[80vw] -translate-x-1/2 -rotate-[14deg] bg-accent/[0.03] blur-[52px]" />
        <div className="absolute left-1/2 top-[44%] h-28 w-[44rem] max-w-[80vw] -translate-x-1/2 bg-accent/[0.04] blur-[56px]" />
        <div className="absolute left-1/2 top-[44%] h-28 w-[44rem] max-w-[80vw] -translate-x-1/2 rotate-[14deg] bg-accent/[0.03] blur-[52px]" />
        <div className="absolute left-1/2 top-[44%] h-28 w-[44rem] max-w-[80vw] -translate-x-1/2 rotate-[28deg] bg-accent/[0.025] blur-[52px]" />
        <div
          className="absolute bottom-[15%] left-1/2 h-32 w-[115%] -translate-x-1/2 blur-[70px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(223,164,8,0.04) 0%, rgba(223,164,8,0.018) 42%, rgba(223,164,8,0) 76%)",
          }}
        />
      </div>

      <motion.svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, delay: 1.25, ease: "easeOut" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cta-trail-blue-gold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#043a7e" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#dfa408" stopOpacity="0.078" />
          </linearGradient>
          <linearGradient id="cta-trail-gold-blue" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#043a7e" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#dfa408" stopOpacity="0.078" />
          </linearGradient>
          <filter id="cta-trail-blur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <g
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#cta-trail-blur)"
        >
          <path d="M-80 650 C210 610 330 555 600 525" stroke="url(#cta-trail-blue-gold)" />
          <path d="M1280 650 C990 610 870 555 600 525" stroke="url(#cta-trail-gold-blue)" />
          <path d="M-80 20 C210 95 360 245 600 475" stroke="url(#cta-trail-blue-gold)" />
          <path d="M1280 20 C990 95 840 245 600 475" stroke="url(#cta-trail-gold-blue)" />
        </g>
      </motion.svg>

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            variants={revealVariants}
            custom={0.32}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.1] px-4 py-2 text-xs font-bold tracking-[0.26em] text-[#efbd32] shadow-[0_0_24px_rgba(223,164,8,0.06)]"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(223,164,8,0.65)]" aria-hidden="true" />
            NEXT STEP
          </motion.div>

          <h2
            id="cta-heading"
            className="mt-7 text-[2rem] font-black leading-[0.98] tracking-[-0.04em] sm:text-[2.625rem] md:text-[3.25rem] lg:text-[4rem]"
          >
            <motion.span variants={revealVariants} custom={0.48} className="block text-white">
              Your Vision.
            </motion.span>
            <motion.span variants={revealVariants} custom={0.64} className="relative block font-extrabold text-accent">
              <span
                className="absolute left-1/2 top-1/2 -z-10 h-[1.4em] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-accent/[0.07] blur-[42px]"
                aria-hidden="true"
              />
              <span className="relative">Our Expertise.</span>
            </motion.span>
            <motion.span variants={revealVariants} custom={0.8} className="block text-white">
              Exceptional Results.
            </motion.span>
          </h2>

          <motion.p
            variants={revealVariants}
            custom={0.98}
            className="mt-7 max-w-[700px] text-base leading-relaxed text-white/[0.85] sm:text-lg"
          >
            Whether you&apos;re launching something new or improving what already exists, we&apos;re ready to help you take the next step.
          </motion.p>

          <motion.div
            variants={revealVariants}
            custom={1.58}
            className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-[#0f172a] shadow-[0_14px_34px_rgba(223,164,8,0.25)] transition duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_20px_40px_rgba(223,164,8,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f172a] sm:w-auto"
            >
              Start a Project
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/50 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/75 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f172a] sm:w-auto"
            >
              Talk to Our Team
            </a>
          </motion.div>

          <motion.div
            variants={revealVariants}
            custom={1.72}
            className="mt-6 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/55 sm:text-xs sm:tracking-[0.18em]"
          >
            Custom Software <span aria-hidden="true">•</span> Websites <span aria-hidden="true">•</span> Hosting <span aria-hidden="true">•</span> AI Solutions
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection
