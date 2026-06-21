import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Container from "../components/common/Container"

// ─── Icons — enterprise line style, gold on dark ──────────────────────────────

function IconConnectedLayers() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-full w-full">
      <rect x="6"  y="17" width="28" height="7"  rx="3.5" stroke="#dfa408" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="10" y="10" width="20" height="7"  rx="3.5" stroke="#7a6200" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="3"  y="24" width="34" height="7"  rx="3.5" stroke="#dfa408" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 17v-1M20 17v-1M26 17v-1" stroke="#dfa408" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M11 24v-1M20 24v-1M29 24v-1" stroke="#7a6200" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function IconCloudInfra() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M11 29h18a7 7 0 0 0 1-13.93A9.5 9.5 0 0 0 11.2 17 7.5 7.5 0 0 0 11 29Z" stroke="#dfa408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 33h10M18 36h4" stroke="#7a6200" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M15 29v4M20 29v4M25 29v4" stroke="#dfa408" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconCodeBrackets() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-full w-full">
      <rect x="5" y="7" width="30" height="26" rx="5" stroke="#dfa408" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M5 13h30" stroke="#dfa408" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9.5"  cy="10" r="1.1" fill="#7a6200" />
      <circle cx="13"   cy="10" r="1.1" fill="#dfa408" />
      <circle cx="16.5" cy="10" r="1.1" fill="#dfa408" opacity="0.5" />
      <path d="M15 21l-4 4 4 4"  stroke="#7a6200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 21l4 4-4 4"   stroke="#7a6200" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 18l-4 12"     stroke="#dfa408" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="20" cy="20" r="14" stroke="#dfa408" strokeWidth="1.8" />
      <circle cx="20" cy="20" r="9"  stroke="#7a6200" strokeWidth="1.7" />
      <circle cx="20" cy="20" r="4"  stroke="#dfa408" strokeWidth="1.7" />
      <circle cx="20" cy="20" r="1.4" fill="#dfa408" />
      <path d="M27 8l2 2-4 4-2-2 4-4Z" stroke="#dfa408" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M29 10l2-2" stroke="#dfa408" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconGrowthArrow() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M5 32l8-9 6 5 11-14" stroke="#dfa408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 14h6v6"           stroke="#dfa408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 36h26"             stroke="#7a6200" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="13" cy="23" r="1.8" fill="#7a6200" />
      <circle cx="19" cy="28" r="1.8" fill="#7a6200" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-full w-full">
      <path d="M20 4 34 9v10c0 9-5.5 15-14 18C11.5 34 6 28 6 19V9l14-5Z" stroke="#dfa408" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 20l5 5 9-11" stroke="#7a6200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Card data ────────────────────────────────────────────────────────────────

const reasons = [
  {
    Icon: IconConnectedLayers,
    title: "Technology Ecosystem",
    description: "All technology services delivered through one connected and reliable technology partner.",
  },
  {
    Icon: IconCloudInfra,
    title: "Hosting & Infrastructure",
    description: "Reliable hosting, cloud infrastructure, business email, domains, and security foundations.",
  },
  {
    Icon: IconCodeBrackets,
    title: "Custom Development",
    description: "Tailored websites, software platforms, portals, and business systems built around your needs.",
  },
  {
    Icon: IconTarget,
    title: "Business-Focused Solutions",
    description: "Technology solutions aligned with operational efficiency, customer growth, and business objectives.",
  },
  {
    Icon: IconGrowthArrow,
    title: "Built To Scale",
    description: "Modern solutions designed to support long-term growth without limiting future opportunities.",
  },
  {
    Icon: IconShield,
    title: "Long-Term Partnership",
    description: "Ongoing support, maintenance, guidance, and technology improvements beyond project delivery.",
  },
]

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 14 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.52, delay, ease: "easeOut" },
})

const fadeIn = (delay = 0) => ({
  initial:  { opacity: 0 },
  animate:  { opacity: 1 },
  transition: { duration: 0.45, delay, ease: "easeOut" },
})

// ─── Section ──────────────────────────────────────────────────────────────────

function WhyChooseSection() {
  const sectionRef = useRef(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px 0px" })

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background: "linear-gradient(145deg, #0f172a 0%, #062561 38%, #043a7e 62%, #0f172a 100%)",
      }}
    >
      {/* ── Background depth — three layers ──────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Layer 1: dark gradient base is on the section itself */}

        {/* Layer 2: technology light columns */}

        {/* Column A — left content area, tall, blue */}
        <motion.div
          className="absolute bottom-0 left-[8%] w-[90px] rounded-t-full"
          style={{
            height: "72%",
            background: "linear-gradient(to top, rgba(4,58,126,0.28) 0%, rgba(4,58,126,0.12) 55%, transparent 100%)",
            filter: "blur(38px)",
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Column B — behind left card column, medium, accent blue */}
        <motion.div
          className="absolute bottom-0 left-[52%] w-[60px] rounded-t-full"
          style={{
            height: "55%",
            background: "linear-gradient(to top, rgba(4,58,126,0.22) 0%, rgba(6,37,97,0.1) 60%, transparent 100%)",
            filter: "blur(30px)",
          }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Column C — behind right card column, narrower, gold-tinted */}
        <motion.div
          className="absolute bottom-0 left-[70%] w-[48px] rounded-t-full"
          style={{
            height: "44%",
            background: "linear-gradient(to top, rgba(122,98,0,0.09) 0%, rgba(4,58,126,0.14) 40%, transparent 100%)",
            filter: "blur(26px)",
          }}
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Column D — upper-right, short, narrow */}
        <motion.div
          className="absolute right-[14%] top-0 w-[40px] rounded-b-full"
          style={{
            height: "38%",
            background: "linear-gradient(to bottom, rgba(4,58,126,0.20) 0%, rgba(4,58,126,0.06) 70%, transparent 100%)",
            filter: "blur(24px)",
          }}
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Column E — bottom-right accent, widest, very soft */}
        <motion.div
          className="absolute bottom-0 right-[4%] w-[110px] rounded-t-full"
          style={{
            height: "50%",
            background: "linear-gradient(to top, rgba(4,58,126,0.18) 0%, rgba(6,37,97,0.06) 65%, transparent 100%)",
            filter: "blur(50px)",
          }}
          animate={{ opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        />

        {/* Gold accent highlights — tiny, low opacity, within columns */}
        <motion.div
          className="absolute left-[8%] w-[28px]"
          style={{
            bottom: "30%",
            height: "80px",
            background: "linear-gradient(to top, transparent, rgba(223,164,8,0.07), transparent)",
            filter: "blur(14px)",
          }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute left-[70%] w-[22px]"
          style={{
            bottom: "18%",
            height: "60px",
            background: "linear-gradient(to top, transparent, rgba(122,98,0,0.08), transparent)",
            filter: "blur(12px)",
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Layer 3: soft atmospheric glow overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(4,58,126,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 78% 25%, rgba(4,58,126,0.14) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] xl:gap-14">

          {/* ── Left: text ──────────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0)}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#dfa408]"
            >
              Why Choose Zenvik
            </motion.p>

            {/* Headline + sweep */}
            <div className="relative overflow-hidden rounded-sm">
              <motion.h2
                {...fadeUp(0.28)}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                className="text-[2rem] font-black leading-tight text-white md:text-[2.55rem]"
              >
                Technology That Powers Business Growth, Innovation &amp; Scale
              </motion.h2>

              {/* Gold light sweep behind headline */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                initial={{ x: "-110%", opacity: 0 }}
                animate={isInView ? { x: "210%", opacity: [0, 1, 0] } : { x: "-110%", opacity: 0 }}
                transition={{ duration: 1.1, delay: 0.68, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(223,164,8,0.18) 45%, rgba(223,164,8,0.08) 55%, transparent 100%)",
                }}
              />
            </div>

            {/* Description */}
            <motion.p
              {...fadeIn(0.95)}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              className="mt-5 text-base leading-relaxed text-white/70 md:text-[1.0625rem]"
            >
              Zenvik Technologies brings together software, websites, hosting, AI,
              marketing, and ICT services into one connected technology ecosystem
              designed to help businesses launch, grow, automate, secure, and scale.
            </motion.p>

            {/* Supporting line */}
            <motion.p
              {...fadeIn(1.2)}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              className="mt-4 text-sm font-semibold tracking-wide text-[#dfa408]/80"
            >
              Built on expertise. Focused on results.
            </motion.p>
          </div>

          {/* ── Right: cards grid ────────────────────────────────────────── */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ Icon, title, description }, index) => {
              const cardDelay  = 1.32 + index * 0.13
              const lineDelay  = cardDelay + 0.22

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, filter: "blur(7px)", y: 10 }}
                  animate={
                    isInView
                      ? { opacity: 1, filter: "blur(0px)", y: 0 }
                      : { opacity: 0, filter: "blur(7px)", y: 10 }
                  }
                  transition={{ duration: 0.55, delay: cardDelay, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { type: "spring", stiffness: 340, damping: 22 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl p-5 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)"
                    e.currentTarget.style.background   = "rgba(255,255,255,0.10)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"
                    e.currentTarget.style.background   = "rgba(255,255,255,0.07)"
                  }}
                >
                  {/* Gold accent line — top edge */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-4 top-0 h-px origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.45, delay: lineDelay, ease: "easeOut" }}
                    style={{
                      width: "calc(100% - 2rem)",
                      background: "linear-gradient(90deg, #dfa408, #7a6200 70%, transparent)",
                    }}
                  />
                  {/* Hover: line expands briefly */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-60"
                    style={{ background: "linear-gradient(90deg, #dfa408, transparent)" }}
                  />

                  {/* Icon */}
                  <div className="mb-4 h-9 w-9 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(223,164,8,0.55)]">
                    <Icon />
                  </div>

                  <h3 className="text-sm font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/58">{description}</p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default WhyChooseSection
