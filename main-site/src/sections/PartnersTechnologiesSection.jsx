import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Container from "../components/common/Container"

const developmentTechnologies = [
  { name: "Laravel", color: "#ff2d20", mark: "laravel", tooltip: "Scalable application development" },
  { name: "PHP", color: "#777bb4", mark: "php", tooltip: "Reliable web backends" },
  { name: "React", color: "#61dafb", mark: "react", tooltip: "Modern frontend interfaces" },
  { name: "Next.js", color: "#000000", mark: "next", tooltip: "High-performance web apps" },
  { name: "Flutter", color: "#02569b", mark: "flutter", tooltip: "Cross-platform mobile apps" },
  { name: "MySQL", color: "#00758f", mark: "mysql", tooltip: "Reliable structured data" },
  { name: "PostgreSQL", color: "#336791", mark: "postgresql", tooltip: "Advanced relational data" },
]

const infrastructureTechnologies = [
  { name: "Cloudflare", color: "#f38020", mark: "cloudflare", tooltip: "Performance and security" },
  { name: "LiteSpeed", color: "#d71920", mark: "litespeed", tooltip: "Fast web delivery" },
  { name: "cPanel", color: "#ff6c2c", mark: "cpanel", tooltip: "Hosting control management" },
  { name: "WHMCS", color: "#315d9a", mark: "whmcs", tooltip: "Billing and client automation" },
  { name: "Docker", color: "#2496ed", mark: "docker", tooltip: "Portable application delivery" },
  { name: "CloudLinux", color: "#6db33f", mark: "cloudlinux", tooltip: "Stable hosting environments" },
]

const ecosystemTechnologies = [
  { name: "OpenAI", color: "#10a37f", mark: "openai", tooltip: "AI-powered automation" },
  { name: "Microsoft", color: "#5e5e5e", mark: "microsoft", tooltip: "Business productivity tools" },
  { name: "Google", color: "#4285f4", mark: "google", tooltip: "Cloud and workspace systems" },
  { name: "Meta", color: "#0866ff", mark: "meta", tooltip: "Digital audience platforms" },
  { name: "Stripe", color: "#635bff", mark: "stripe", tooltip: "Online payment systems" },
  { name: "PayPal", color: "#003087", mark: "paypal", tooltip: "Global payment processing" },
]

const technologyGroups = [
  {
    title: "Development Ecosystem",
    description: "Modern frameworks and databases powering scalable digital products.",
    technologySets: [
      developmentTechnologies.slice(0, 4),
      developmentTechnologies.slice(4),
    ],
  },
  {
    title: "Infrastructure & Hosting Ecosystem",
    description: "Enterprise-grade platforms powering secure and reliable infrastructure.",
    technologySets: [
      infrastructureTechnologies.slice(0, 3),
      infrastructureTechnologies.slice(3),
    ],
  },
  {
    title: "AI & Business Ecosystem",
    description: "Intelligent technologies and business platforms driving automation and growth.",
    technologySets: [
      ecosystemTechnologies.slice(0, 3),
      ecosystemTechnologies.slice(3),
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function LogoMark({ type }) {
  if (type === "laravel") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M6 8 18 2l12 6v13L18 34 6 27V8Z" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M6 8 18 15l12-7M18 15v19M6 20l12 7 12-7" fill="none" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    )
  }

  if (type === "php") {
    return (
      <svg viewBox="0 0 48 36" aria-hidden="true">
        <ellipse cx="24" cy="18" rx="21" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="24" y="22" textAnchor="middle" fontSize="12" fontWeight="800" fill="currentColor">PHP</text>
      </svg>
    )
  }

  if (type === "react") {
    return (
      <svg viewBox="0 0 42 36" aria-hidden="true">
        <circle cx="21" cy="18" r="3" fill="currentColor" />
        <ellipse cx="21" cy="18" rx="18" ry="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="21" cy="18" rx="18" ry="6.5" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 21 18)" />
        <ellipse cx="21" cy="18" rx="18" ry="6.5" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 21 18)" />
      </svg>
    )
  }

  if (type === "next") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M11 25V11l15 18M25 11v14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "flutter") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M23 4 7 20l5 5L33 4H23Z" fill="currentColor" opacity="0.95" />
        <path d="M18 25 12 31l6 5h10L18 25Z" fill="currentColor" opacity="0.55" />
        <path d="M23 17 14 26l5 5 14-14H23Z" fill="currentColor" opacity="0.8" />
      </svg>
    )
  }

  if (type === "mysql") {
    return (
      <svg viewBox="0 0 44 36" aria-hidden="true">
        <path d="M6 23c7-11 21-15 32-10-4 1-6 3-8 7 4-1 7 0 9 3-10-1-18 2-25 9 1-4 1-7-8-9Z" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
        <path d="M29 13c2 1 4 3 5 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "postgresql") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M10 24c-3-3-4-8-2-13 3-8 17-8 20 0 2 5 1 10-2 13-2 2-5 1-6-1l-2-4-2 4c-1 2-4 3-6 1Z" fill="none" stroke="currentColor" strokeWidth="2.3" />
        <path d="M18 18v14M14 12h.1M22 12h.1" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "cloudflare") {
    return (
      <svg viewBox="0 0 46 36" aria-hidden="true">
        <path d="M17 24H8c0-5 4-9 9-9 1-6 7-10 13-7 4 2 6 6 6 10 4 0 7 3 7 6H17Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M12 28h24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "litespeed") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M23 3 8 20h9l-4 13 15-18h-9l4-12Z" fill="currentColor" />
      </svg>
    )
  }

  if (type === "cpanel") {
    return (
      <svg viewBox="0 0 38 36" aria-hidden="true">
        <path d="M24 12a8 8 0 1 0 0 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M27 12h3a5 5 0 0 1 0 10h-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "whmcs") {
    return (
      <svg viewBox="0 0 42 36" aria-hidden="true">
        <path d="M8 20a8 8 0 0 1 12-10l2 2 2-2a8 8 0 1 1 0 16l-2-2-2 2A8 8 0 0 1 8 20Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 14h12M16 22h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "docker") {
    return (
      <svg viewBox="0 0 48 36" aria-hidden="true">
        <path d="M9 18h5v-5h5v5h5v-5h5v5h5c2 0 4-1 5-3 1 3 0 6-2 8-3 4-8 6-15 6-8 0-13-4-15-11h2Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 18h20" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    )
  }

  if (type === "cloudlinux") {
    return (
      <svg viewBox="0 0 42 36" aria-hidden="true">
        <path d="M21 4c8 0 14 6 14 14s-6 14-14 14S7 26 7 18 13 4 21 4Z" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M15 23c2-7 6-10 12-11-1 7-5 11-12 11Z" fill="currentColor" opacity="0.85" />
      </svg>
    )
  }

  if (type === "openai") {
    return (
      <svg viewBox="0 0 38 36" aria-hidden="true">
        <path d="M19 4 9 10v12l10 6 10-6V10L19 4Z" fill="none" stroke="currentColor" strokeWidth="2.3" />
        <path d="M19 4v24M9 10l20 12M29 10 9 22" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  if (type === "microsoft") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M6 6h11v11H6V6Zm13 0h11v11H19V6ZM6 19h11v11H6V19Zm13 0h11v11H19V19Z" fill="currentColor" />
      </svg>
    )
  }

  if (type === "google") {
    return (
      <svg viewBox="0 0 40 36" aria-hidden="true">
        <path d="M32 18h-12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M31 12a13 13 0 1 0 1 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "meta") {
    return (
      <svg viewBox="0 0 48 36" aria-hidden="true">
        <path d="M6 24c3-11 7-16 12-16 4 0 7 4 10 9 3-5 6-9 10-9 5 0 8 5 4 14-2 5-7 6-11 0l-3-5-3 5c-4 6-9 5-11 0Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === "stripe") {
    return (
      <svg viewBox="0 0 42 36" aria-hidden="true">
        <path d="M29 10c-3-2-12-3-14 2-2 7 15 4 13 12-2 7-13 5-18 2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 44 36" aria-hidden="true">
      <path d="M9 13h14a7 7 0 0 1 0 14H9V13Zm19 0h7v14h-7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LogoItem({ logo, index, groupIndex }) {
  return (
    <motion.div
      className="tech-logo"
      style={{
        "--logo-color": logo.color,
        "--logo-delay": `${index * 1.05}s`,
        "--group-delay": `${groupIndex * 8}s`,
      }}
      data-tooltip={logo.tooltip}
    >
      <span className="tech-logo-mark">
        <LogoMark type={logo.mark} />
      </span>
      <span className="tech-logo-name">{logo.name}</span>
    </motion.div>
  )
}

function TechnologyGroup({ group, index, activeGroup, phase, visibleSetIndex }) {
  const isActive = activeGroup === index
  const visibleTechnologies = group.technologySets[visibleSetIndex]
  const isFadingOut = isActive && phase === "out"
  const isFadingIn = isActive && phase === "in"
  const isSignaling = isActive && phase === "signal"

  return (
    <motion.div
      className="partners-ecosystem-group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.34 }}
      transition={{ staggerChildren: 0.1, delayChildren: index * 0.08 }}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.48, ease: "easeOut" }} className="text-center">
        <h3 className="text-sm font-black uppercase tracking-[0.26em] text-primary">
          {group.title}
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#7a6200]">
          {group.description}
        </p>
      </motion.div>

      <motion.div
        className={`tech-strip ${isSignaling ? "is-signaling" : ""} ${isFadingOut ? "is-fading-out" : ""} ${isFadingIn ? "is-fading-in" : ""}`}
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="tech-strip-signal"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.22 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.95, delay: 0.16, ease: "easeOut" }}
          aria-hidden="true"
        />
        <span className="tech-strip-idle-pulse" aria-hidden="true" />
        <span className="tech-strip-signal-node" aria-hidden="true" />
        <motion.div
          key={`${group.title}-${visibleSetIndex}`}
          className="tech-strip-logos"
          initial={{ opacity: 0, scale: 0.94, rotateX: -18 }}
          animate={{ opacity: isFadingOut ? 0 : 1, scale: isFadingOut ? 0.92 : 1, rotateX: isFadingOut ? 18 : 0 }}
          transition={{ duration: isFadingOut ? 0.42 : 0.56, ease: "easeOut" }}
          style={{ transformPerspective: 900, transformOrigin: "center center" }}
        >
          {visibleTechnologies.map((logo, logoIndex) => (
            <LogoItem key={logo.name} logo={logo} index={logoIndex} groupIndex={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function PartnersTechnologiesSection() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [phase, setPhase] = useState("signal")
  const [visibleSets, setVisibleSets] = useState(() => technologyGroups.map(() => 0))

  useEffect(() => {
    const fadeOutTimer = window.setTimeout(() => {
      setPhase("out")
    }, 6100)

    const swapTimer = window.setTimeout(() => {
      setVisibleSets((currentSets) => currentSets.map((setIndex, groupIndex) => {
        if (groupIndex !== activeGroup) return setIndex

        const setCount = technologyGroups[groupIndex].technologySets.length
        return (setIndex + 1) % setCount
      }))
      setPhase("in")
    }, 6700)

    const nextTimer = window.setTimeout(() => {
      setActiveGroup((currentGroup) => (currentGroup + 1) % technologyGroups.length)
      setPhase("signal")
    }, 8000)

    return () => {
      window.clearTimeout(fadeOutTimer)
      window.clearTimeout(swapTimer)
      window.clearTimeout(nextTimer)
    }
  }, [activeGroup])

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="partners-blueprint" aria-hidden="true">
        <span className="blueprint-line blueprint-line-top-a" />
        <span className="blueprint-line blueprint-line-top-b" />
        <span className="blueprint-line blueprint-line-top-c" />
        <span className="blueprint-line blueprint-line-top-d" />
        <span className="blueprint-line blueprint-line-top-e" />
        <span className="blueprint-line blueprint-line-bottom-a" />
        <span className="blueprint-line blueprint-line-bottom-b" />
        <span className="blueprint-line blueprint-line-bottom-c" />
        <span className="blueprint-line blueprint-line-bottom-d" />
        <span className="blueprint-line blueprint-line-bottom-e" />
        <span className="blueprint-node blueprint-node-top-a" />
        <span className="blueprint-node blueprint-node-top-b" />
        <span className="blueprint-node blueprint-node-top-c" />
        <span className="blueprint-node blueprint-node-top-d" />
        <span className="blueprint-node blueprint-node-bottom-a" />
        <span className="blueprint-node blueprint-node-bottom-b" />
        <span className="blueprint-node blueprint-node-bottom-c" />
        <span className="blueprint-node blueprint-node-bottom-d" />
        <span className="blueprint-pulse blueprint-pulse-top" />
        <span className="blueprint-pulse blueprint-pulse-bottom" />
      </div>

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.11 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.42, ease: "easeOut" }} className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            PARTNERS & TECHNOLOGIES
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.46, ease: "easeOut" }} className="text-2xl font-black leading-tight text-primary sm:text-[2.1rem] md:text-[2.55rem]">
            Powered By Industry-Leading Technologies
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.48, ease: "easeOut" }} className="mt-3 text-base leading-relaxed text-slate-600">
            Zenvik Technologies delivers modern digital solutions using trusted platforms, enterprise-grade infrastructure, development frameworks, AI technologies, and business ecosystems.
          </motion.p>
        </motion.div>

        <div className="mt-7 space-y-6 sm:mt-8 lg:mt-9 lg:space-y-7">
          {technologyGroups.map((group, index) => (
            <TechnologyGroup
              key={group.title}
              group={group}
              index={index}
              activeGroup={activeGroup}
              phase={phase}
              visibleSetIndex={visibleSets[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PartnersTechnologiesSection
