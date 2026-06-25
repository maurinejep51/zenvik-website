import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Container from "../components/common/Container"

const developmentTechnologies = [
  { name: "Laravel", color: "#ff2d20", mark: "laravel", tooltip: "Scalable application development" },
  { name: "PHP", color: "#777bb4", mark: "php", tooltip: "Reliable web backends" },
  { name: "JavaScript", color: "#d4b830", mark: "javascript", tooltip: "Interactive web experiences" },
  { name: "TypeScript", color: "#3178c6", mark: "typescript", tooltip: "Type-safe application development" },
  { name: "React", color: "#61dafb", mark: "react", tooltip: "Modern frontend interfaces" },
  { name: "Next.js", color: "#000000", mark: "next", tooltip: "High-performance web apps" },
  { name: "Node.js", color: "#339933", mark: "nodejs", tooltip: "Scalable server applications" },
  { name: "MySQL", color: "#00758f", mark: "mysql", tooltip: "Reliable structured data" },
  { name: "GitHub", color: "#181717", mark: "github", tooltip: "Collaborative source control" },
]

const infrastructureTechnologies = [
  { name: "cPanel", color: "#ff6c2c", mark: "cpanel", tooltip: "Hosting control management" },
  { name: "WHM", color: "#ff6c2c", mark: "whm", tooltip: "Server and account administration" },
  { name: "WHMCS", color: "#315d9a", mark: "whmcs", tooltip: "Billing and client automation" },
  { name: "LiteSpeed", color: "#d71920", mark: "litespeed", tooltip: "Fast web delivery" },
  { name: "CloudLinux", color: "#6db33f", mark: "cloudlinux", tooltip: "Stable hosting environments" },
  { name: "Linux", color: "#333333", mark: "linux", tooltip: "Reliable server operating systems" },
  { name: "Cloudflare", color: "#f38020", mark: "cloudflare", tooltip: "Performance and security" },
  { name: "Docker", color: "#2496ed", mark: "docker", tooltip: "Portable application delivery" },
  { name: "Ubuntu", color: "#e95420", mark: "ubuntu", tooltip: "Secure open-source infrastructure" },
]

const ecosystemTechnologies = [
  { name: "OpenAI", color: "#10a37f", mark: "openai", tooltip: "AI-powered automation" },
  { name: "Google", color: "#4285f4", mark: "google", tooltip: "Cloud and workspace systems" },
  { name: "Meta", color: "#0866ff", mark: "meta", tooltip: "Digital audience platforms" },
  { name: "Anthropic", color: "#d97757", mark: "anthropic", tooltip: "Responsible AI systems" },
  { name: "n8n", color: "#ea4b71", mark: "n8n", tooltip: "Flexible workflow automation" },
  { name: "Zapier", color: "#ff4f00", mark: "zapier", tooltip: "Connected business workflows" },
  { name: "Make", color: "#6d00cc", mark: "make", tooltip: "Visual process automation" },
  { name: "HubSpot", color: "#ff7a59", mark: "hubspot", tooltip: "Customer relationship automation" },
  { name: "ChatGPT", color: "#10a37f", mark: "chatgpt", tooltip: "Conversational AI assistance" },
]

const technologyGroups = [
  {
    title: "Development Ecosystem",
    description: "Modern frameworks and databases powering scalable digital products.",
    technologies: developmentTechnologies,
  },
  {
    title: "Infrastructure & Hosting Ecosystem",
    description: "Enterprise-grade platforms powering secure and reliable infrastructure.",
    technologies: infrastructureTechnologies,
  },
  {
    title: "AI & Automation Ecosystem",
    description: "Intelligent technologies and business platforms driving automation and growth.",
    technologies: ecosystemTechnologies,
  },
]

function createTechnologySets(technologies, visibleCount) {
  const setCount = Math.ceil(technologies.length / visibleCount)

  return Array.from({ length: setCount }, (_, setIndex) =>
    Array.from(
      { length: visibleCount },
      (_, logoIndex) =>
        technologies[(setIndex * visibleCount + logoIndex) % technologies.length],
    ),
  )
}

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

  if (type === "javascript" || type === "typescript") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <rect x="4" y="4" width="28" height="28" rx="2" fill="currentColor" />
        <text x="27" y="27" textAnchor="end" fontSize="12" fontWeight="900" fill="white">
          {type === "javascript" ? "JS" : "TS"}
        </text>
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

  if (type === "nodejs") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 3 31 10.5v15L18 33 5 25.5v-15L18 3Z" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M12 23V13l12 10V13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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

  if (type === "github") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r="15" fill="currentColor" />
        <path d="M12 27c0-3 1-4 3-5-4 0-7-2-7-7 0-2 1-4 2-5 0-1 0-3 1-4 3 0 5 2 7 2s4-2 7-2c1 1 1 3 1 4 1 1 2 3 2 5 0 5-3 7-7 7 2 1 3 2 3 5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "whm") {
    return (
      <svg viewBox="0 0 48 36" aria-hidden="true">
        <path d="M5 9l5 18 6-12 6 12 5-18M30 27V9l6 11 7-11v18" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === "linux") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M12 15c0-7 2-11 6-11s6 4 6 11c4 4 5 9 3 15H9c-2-6-1-11 3-15Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
        <circle cx="21" cy="13" r="1" fill="currentColor" />
        <path d="m16 17 2 2 2-2M11 29l-4 3M25 29l4 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === "ubuntu") {
    return (
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="18" cy="5" r="3" fill="currentColor" />
        <circle cx="29" cy="24" r="3" fill="currentColor" />
        <circle cx="7" cy="24" r="3" fill="currentColor" />
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

  if (type === "anthropic") {
    return (
      <svg viewBox="0 0 42 36" aria-hidden="true">
        <path d="m7 30 10-24h7l11 24M12 20h18M21 6v24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === "n8n") {
    return (
      <svg viewBox="0 0 46 36" aria-hidden="true">
        <path d="M7 22 16 11l9 14 9-13 6 9" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        <g fill="white" stroke="currentColor" strokeWidth="2">
          <circle cx="7" cy="22" r="3" /><circle cx="16" cy="11" r="3" /><circle cx="25" cy="25" r="3" /><circle cx="34" cy="12" r="3" /><circle cx="40" cy="21" r="3" />
        </g>
      </svg>
    )
  }

  if (type === "zapier") {
    return (
      <svg viewBox="0 0 42 36" aria-hidden="true">
        <path d="M21 4v28M7 11l28 14M7 25l28-14M5 18h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="21" cy="18" r="5" fill="white" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    )
  }

  if (type === "make") {
    return (
      <svg viewBox="0 0 44 36" aria-hidden="true">
        <path d="M5 28V8l10 13L22 8l7 13L39 8v20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === "hubspot") {
    return (
      <svg viewBox="0 0 40 36" aria-hidden="true">
        <path d="M18 18 9 9M18 18l11-8M18 18v10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="18" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="7" cy="7" r="3" fill="currentColor" /><circle cx="31" cy="8" r="3" fill="currentColor" /><circle cx="18" cy="31" r="3" fill="currentColor" />
      </svg>
    )
  }

  if (type === "chatgpt") {
    return (
      <svg viewBox="0 0 38 36" aria-hidden="true">
        <path d="M19 5c5-3 10 1 10 6 5 2 6 8 2 12 0 5-5 8-10 6-4 4-10 2-11-3-5-2-5-9-1-12 0-5 5-8 10-6Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="m12 13 7 4 7-4M12 23l7-4 7 4M19 9v8M19 19v8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
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
  const visibleLogoCount = typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 3
  const technologySets = createTechnologySets(group.technologies, visibleLogoCount)
  const visibleTechnologies = technologySets[visibleSetIndex % technologySets.length]
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
  const [visibleLogoCount, setVisibleLogoCount] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 3,
  )

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    const updateVisibleLogoCount = () => {
      setVisibleLogoCount(desktopQuery.matches ? 4 : 3)
      setVisibleSets(technologyGroups.map(() => 0))
    }

    desktopQuery.addEventListener("change", updateVisibleLogoCount)
    return () => desktopQuery.removeEventListener("change", updateVisibleLogoCount)
  }, [])

  useEffect(() => {
    const fadeOutTimer = window.setTimeout(() => {
      setPhase("out")
    }, 6100)

    const swapTimer = window.setTimeout(() => {
      setVisibleSets((currentSets) => currentSets.map((setIndex, groupIndex) => {
        if (groupIndex !== activeGroup) return setIndex

        const setCount = Math.ceil(
          technologyGroups[groupIndex].technologies.length / visibleLogoCount,
        )
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
  }, [activeGroup, visibleLogoCount])

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
            OUR TECHNOLOGIES
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.46, ease: "easeOut" }} className="text-2xl font-black leading-tight text-primary sm:text-[2.1rem] md:text-[2.55rem]">
            Technologies &amp; Platforms
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.48, ease: "easeOut" }} className="mt-3 text-base leading-relaxed text-slate-600">
            Trusted technologies, enterprise infrastructure, AI platforms, and development frameworks powering the solutions we design, build, and support.
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
