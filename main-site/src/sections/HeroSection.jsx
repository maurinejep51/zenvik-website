import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Button from "../components/ui/Button"
import Container from "../components/common/Container"

const ecosystemNodes = [
  { label: "Cloud Infrastructure", icon: "cloud", x: 50, y: 10, className: "left-1/2 top-[7%] -translate-x-1/2" },
  { label: "AI & Automation", icon: "ai", x: 84, y: 28, className: "right-[2%] top-[22%]" },
  { label: "Software Engineering", icon: "code", x: 82, y: 74, className: "right-[3%] bottom-[18%]" },
  { label: "Web Platforms", icon: "web", x: 50, y: 92, className: "bottom-[4%] left-1/2 -translate-x-1/2" },
  { label: "Digital Growth", icon: "growth", x: 16, y: 74, className: "bottom-[18%] left-[2%]" },
  { label: "ICT & Security", icon: "security", x: 16, y: 28, className: "left-[2%] top-[22%]" },
]

const signalTokens = ["<>", "</>", "{}", "01", "API", "AI"]

const particles = [
  "left-[8%] top-[18%]",
  "left-[24%] top-[72%]",
  "left-[46%] top-[12%]",
  "right-[14%] top-[18%]",
  "right-[22%] bottom-[18%]",
  "right-[45%] bottom-[9%]",
]

function BackgroundParticles() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {particles.map((position, index) => (
        <motion.span
          key={position}
          className={`absolute h-1.5 w-1.5 rounded-full bg-white/30 ${position}`}
          animate={{ opacity: [0.12, 0.4, 0.12], y: [0, -10, 0] }}
          transition={{
            duration: 4 + index * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        />
      ))}
    </div>
  )
}

function NodeIcon({ type }) {
  const commonProps = {
    className: "h-3.5 w-3.5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.9",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  }

  if (type === "cloud") {
    return (
      <svg {...commonProps}>
        <path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.2 8.7 4.5 4.5 0 0 0 7 18Z" />
      </svg>
    )
  }

  if (type === "ai") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="7" width="10" height="10" rx="3" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M9.4 12c1.4-3 3.8-3 5.2 0" />
      </svg>
    )
  }

  if (type === "code") {
    return (
      <svg {...commonProps}>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" />
      </svg>
    )
  }

  if (type === "web") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 10h16.4M3.8 14h16.4M12 3.5a12 12 0 0 1 0 17M12 3.5a12 12 0 0 0 0 17" />
      </svg>
    )
  }

  if (type === "growth") {
    return (
      <svg {...commonProps}>
        <path d="M4 18h16M6 15l4-4 3 3 5-7" />
        <path d="M14 7h4v4" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3 5.5 6v5.5c0 4 2.6 7.4 6.5 9 3.9-1.6 6.5-5 6.5-9V6L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.4-3.7" />
    </svg>
  )
}

function ConnectionLines({ activeNode, isGlobeHovered }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {ecosystemNodes.map((node, index) => (
        <g key={node.label}>
          <motion.path
            d={`M50 50 L${node.x} ${node.y}`}
            stroke={activeNode === index ? "#dfa408" : "#ffffff"}
            strokeOpacity={activeNode === index ? "0.72" : "0.18"}
            strokeWidth={activeNode === index ? "0.48" : "0.32"}
            strokeDasharray="1.8 2.6"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{
              duration: activeNode === index ? 2.9 : isGlobeHovered ? 3.8 + index * 0.2 : 4.5 + index * 0.25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </g>
      ))}
    </svg>
  )
}

function DataSignalSystem({ activeNode, isGlobeHovered }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[15] h-full w-full overflow-visible"
      fill="none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {ecosystemNodes.map((node, index) => {
        const endX = 50 + (node.x - 50) * 0.8
        const endY = 50 + (node.y - 50) * 0.8
        const isActive = activeNode === index
        const signalDuration = isActive ? 2.55 : isGlobeHovered ? 2.7 + index * 0.1 : 3 + index * 0.14
        const token = signalTokens[index % signalTokens.length]
        const travelX = endX - 50
        const travelY = endY - 50

        return (
          <text
            key={node.label}
            x="50"
            y="50"
            fill={isActive || index % 2 === 0 ? "#dfa408" : "rgba(219,234,254,0.92)"}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
            fontSize="10"
            fontWeight="500"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              filter: isActive
                ? "drop-shadow(0 0 5px rgba(223,164,8,0.45))"
                : "drop-shadow(0 0 4px rgba(219,234,254,0.25))",
            }}
          >
            {token}
            <animateMotion
              path={`M0 0 L${travelX} ${travelY}`}
              dur={`${signalDuration}s`}
              begin={`${index * 0.38}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values={`${isActive ? 0.84 : 0.72};${isActive ? 0.62 : 0.48};0`}
              dur={`${signalDuration}s`}
              begin={`${index * 0.38}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="font-size"
              values="10;8;6.5"
              dur={`${signalDuration}s`}
              begin={`${index * 0.38}s`}
              repeatCount="indefinite"
            />
          </text>
        )
      })}
    </svg>
  )
}

function TechOrbitRing({
  angle = 0,
  color,
  duration,
  isActive,
  reverse = false,
  strokeWidth = 2.2,
  opacity = 1,
}) {
  return (
    <motion.g
      animate={{ rotate: reverse ? -360 : 360 }}
      style={{
        filter: isActive ? `drop-shadow(0 0 10px ${color})` : "none",
        transformBox: "view-box",
        transformOrigin: "120px 120px",
      }}
      transition={{
        duration: isActive ? duration * 0.82 : duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <g transform={`rotate(${angle} 120 120)`}>
        <path
          d="M36 120 C36 86 204 86 204 120 C204 154 36 154 36 120"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={opacity}
          strokeWidth={strokeWidth}
        />
      </g>
    </motion.g>
  )
}

function TechOrbitFrontArc({
  angle = 0,
  color,
  duration,
  isActive,
  reverse = false,
  strokeWidth = 2.2,
  opacity = 1,
}) {
  return (
    <motion.g
      animate={{ rotate: reverse ? -360 : 360 }}
      style={{
        transformBox: "view-box",
        transformOrigin: "120px 120px",
      }}
      transition={{
        duration: isActive ? duration * 0.82 : duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <g transform={`rotate(${angle} 120 120)`}>
        <path
          d="M44 120 C58 146 184 146 198 120"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={opacity}
          strokeWidth={strokeWidth}
        />
      </g>
    </motion.g>
  )
}

function LayeredTechOrb({ isActive }) {
  return (
    <motion.svg
      className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]"
      fill="none"
      viewBox="0 0 240 240"
      animate={{ scale: isActive ? [1, 1.018, 1] : [1, 1.008, 1] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="tech-orb-core" cx="42%" cy="34%" r="62%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.44)" />
          <stop offset="42%" stopColor="rgba(4,58,126,0.34)" />
          <stop offset="100%" stopColor="rgba(15,23,42,0.08)" />
        </radialGradient>
        <radialGradient id="tech-orb-glow" cx="50%" cy="50%" r="58%">
          <stop offset="0%" stopColor="rgba(223,164,8,0.16)" />
          <stop offset="58%" stopColor="rgba(4,58,126,0.1)" />
          <stop offset="100%" stopColor="rgba(4,58,126,0)" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="120" r="95" fill="url(#tech-orb-glow)" />
      <motion.circle
        cx="120"
        cy="120"
        r="38"
        fill="none"
        stroke="#dfa408"
        strokeOpacity="0.16"
        strokeWidth="1.5"
        animate={{ opacity: isActive ? [0.14, 0.36, 0.14] : [0.1, 0.24, 0.1], r: [36, 44, 36] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <TechOrbitRing
        angle={0}
        color="#dfa408"
        duration={23}
        isActive={isActive}
        strokeWidth={2.4}
      />
      <TechOrbitRing
        angle={-34}
        color="#7a6200"
        duration={29}
        isActive={isActive}
        reverse
        strokeWidth={2.4}
      />
      <circle
        cx="120"
        cy="120"
        r="48"
        fill="url(#tech-orb-core)"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.4"
      />
      <circle cx="106" cy="102" r="11" fill="rgba(255,255,255,0.18)" />
      <path
        d="M88 120 C104 104 134 104 152 119 C135 137 106 138 88 120"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.12)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <TechOrbitFrontArc
        angle={0}
        color="#dfa408"
        duration={23}
        isActive={isActive}
        strokeWidth={2.4}
      />
      <TechOrbitFrontArc
        angle={-34}
        color="#7a6200"
        duration={29}
        isActive={isActive}
        reverse
        strokeWidth={2.4}
        opacity={0.94}
      />
      <motion.circle
        cx="120"
        cy="120"
        r="4"
        fill="#dfa408"
        animate={{ opacity: isActive ? [0.45, 0.86, 0.45] : [0.32, 0.62, 0.32] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}

function TechnologyGlobe({ activeNode, isGlobeHovered, setIsGlobeHovered }) {
  const isActive = activeNode !== null || isGlobeHovered

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-10 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
      style={{
        boxShadow: isActive
          ? "0 0 104px rgba(223,164,8,0.25)"
          : "0 0 80px rgba(223,164,8,0.16)",
      }}
      onHoverStart={() => setIsGlobeHovered(true)}
      onHoverEnd={() => setIsGlobeHovered(false)}
      aria-hidden="true"
    >
      <div className="absolute inset-5 rounded-full border border-white/20" />
      <div className="absolute inset-9 rounded-full border border-white/15" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.3),transparent_23%),radial-gradient(circle_at_70%_75%,rgba(223,164,8,0.2),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
      <LayeredTechOrb isActive={isActive} />
    </motion.div>
  )
}

function EcosystemNode({ activeNode, node, index, setActiveNode }) {
  const isActive = activeNode === index

  return (
    <motion.div
      className={`absolute z-20 flex max-w-[9.25rem] items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[0.64rem] font-bold leading-tight text-white backdrop-blur-md transition-colors duration-300 sm:max-w-[10.5rem] sm:px-3 sm:text-[0.72rem] ${node.className} ${isActive ? "border-accent/45 bg-white/14 shadow-[0_12px_32px_rgba(223,164,8,0.22)]" : "border-white/14 bg-white/8 shadow-[0_10px_28px_rgba(0,0,0,0.16)]"}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.25 + index * 0.08 }}
      onHoverStart={() => setActiveNode(index)}
      onHoverEnd={() => setActiveNode(null)}
    >
      <motion.span
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
        animate={{ opacity: isActive ? [0.28, 0.7, 0.28] : [0.14, 0.32, 0.14], scale: isActive ? [1, 1.08, 1] : [1, 1.05, 1] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.22,
        }}
      />
      <span className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isActive ? "bg-accent/22 text-accent" : "bg-white/10 text-white/78"}`}>
        <NodeIcon type={node.icon} />
      </span>
      <span className="relative">{node.label}</span>
    </motion.div>
  )
}

function HeroVisual({ exitOpacity, exitScale }) {
  const [activeNode, setActiveNode] = useState(null)
  const [isGlobeHovered, setIsGlobeHovered] = useState(false)

  return (
    <motion.div
      className="relative mx-auto h-[26.5rem] w-full max-w-[41rem] lg:h-[36rem]"
      style={{ opacity: exitOpacity, scale: exitScale }}
    >
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-3xl lg:h-[28rem] lg:w-[28rem]" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
      <ConnectionLines activeNode={activeNode} isGlobeHovered={isGlobeHovered} />
      <TechnologyGlobe
        activeNode={activeNode}
        isGlobeHovered={isGlobeHovered}
        setIsGlobeHovered={setIsGlobeHovered}
      />
      <DataSignalSystem activeNode={activeNode} isGlobeHovered={isGlobeHovered} />
      {ecosystemNodes.map((node, index) => (
        <EcosystemNode
          key={node.label}
          activeNode={activeNode}
          node={node}
          index={index}
          setActiveNode={setActiveNode}
        />
      ))}
    </motion.div>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const heroVisualOpacity = useTransform(scrollY, [180, 720], [1, 0.36])
  const heroVisualScale = useTransform(scrollY, [180, 720], [1, 0.96])

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-primary pt-24 text-white lg:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_46%,rgba(223,164,8,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.78),rgba(4,58,126,0.78)_42%,rgba(15,23,42,0.44))]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:54px_54px] opacity-45" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0f172a]/35 to-transparent" aria-hidden="true" />
      <BackgroundParticles />

      <Container className="relative grid min-h-[calc(90vh-6rem)] items-center gap-10 py-12 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            TECH SOLUTIONS • CLOUD • AI • DIGITAL GROWTH
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Building Technology That Powers Business Growth
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/82 md:text-lg">
            Helping businesses grow through innovative technology solutions and digital transformation. We design, build, and scale software, cloud, AI, web, and ICT solutions that drive measurable results.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#contact" variant="accent" className="text-primary">
              Get Started
            </Button>

            <Button href="#portfolio" variant="light">
              View Our Work
            </Button>
          </div>

          <p className="mt-7 max-w-3xl text-sm font-semibold leading-relaxed text-white/75">
            Innovative • Scalable • Secure • Reliable
          </p>
        </motion.div>

        <HeroVisual exitOpacity={heroVisualOpacity} exitScale={heroVisualScale} />
      </Container>
    </section>
  )
}

export default HeroSection
