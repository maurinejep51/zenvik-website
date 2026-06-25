import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"

// ─── Project data — structured for future backend integration ─────────────────

const projects = [
  {
    id: "property-management-platform",
    title: "Property Management Platform",
    category: "Software Development",
    summary: "A complete digital property management ecosystem for landlords, tenants, payments, maintenance, and operations.",
    image: null,
    project_url: "#",
    project_status: "Enterprise",
    technologies: ["Laravel", "React", "MySQL"],
    featured: true,
    status: "published",
    sort_order: 1,
  },
  {
    id: "corporate-business-website",
    title: "Corporate Business Website",
    category: "Website Development",
    summary: "A modern business website focused on branding, lead generation, customer engagement, and growth.",
    image: null,
    project_url: "#",
    project_status: "Live",
    technologies: ["React", "PHP", "Cloudflare"],
    featured: true,
    status: "published",
    sort_order: 2,
  },
  {
    id: "hosting-client-portal",
    title: "Hosting & Client Portal",
    category: "Hosting & Infrastructure",
    summary: "A hosting ecosystem with account management, billing automation, support systems, and infrastructure management.",
    image: null,
    project_url: "#",
    project_status: "Featured",
    technologies: ["WHMCS", "PHP", "Cloudflare"],
    featured: true,
    status: "published",
    sort_order: 3,
  },
  {
    id: "ai-automation-platform",
    title: "AI Automation Platform",
    category: "AI Solutions",
    summary: "An intelligent automation solution designed to streamline operations, customer engagement, and productivity.",
    image: null,
    project_url: "#",
    project_status: "Case Study",
    technologies: ["OpenAI", "Node.js", "React"],
    featured: true,
    status: "published",
    sort_order: 4,
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { value: 125, suffix: "+", label: "Websites Built", icon: "web" },
  { value: 35,  suffix: "+", label: "Software Systems", icon: "software" },
  { value: 200, suffix: "+", label: "Websites Hosted", icon: "hosting" },
  { value: 360, suffix: "+", label: "Projects Delivered", icon: "delivery" },
]

// ─── Category badge styles ────────────────────────────────────────────────────

const badgeStyle = {
  "Software Development":     "text-primary ring-1 ring-primary/16",
  "Website Development":      "text-[#7a6200] ring-1 ring-[#dfa408]/20",
  "Hosting & Infrastructure": "text-primary ring-1 ring-primary/16",
  "AI Solutions":             "text-[#7a6200] ring-1 ring-[#dfa408]/20",
}

// ─── Stat card with count-up + gold accent line ───────────────────────────────

function MetricIcon({ type }) {
  const paths = {
    web: <><circle cx="12" cy="12" r="8" /><path d="M4.5 10h15M4.5 14h15M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" /></>,
    software: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
    hosting: <><rect x="4" y="5" width="16" height="6" rx="2" /><rect x="4" y="13" width="16" height="6" rx="2" /><path d="M8 8h.01M8 16h.01M12 8h5M12 16h5" /></>,
    delivery: <><path d="M5 12h14M13 6l6 6-6 6" /><circle cx="5" cy="12" r="2" /></>,
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function StatCard({ value, suffix, label, icon, delay, isActive }) {
  const count    = useMotionValue(0)
  const display  = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (!isActive) return
    const ctrl = animate(count, value, {
      duration: 1.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    })
    return ctrl.stop
  }, [isActive, count, delay, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(4,58,126,0.12)", transition: { type: "spring", stiffness: 340, damping: 22 } }}
      className="relative z-10 flex h-full min-h-[6.5rem] flex-col items-center justify-center overflow-hidden rounded-xl border border-primary/[0.12] bg-white px-4 py-3 text-center shadow-[0_5px_18px_rgba(15,23,42,0.045)] transition-colors duration-300 hover:border-primary/25"
    >
      <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" aria-hidden="true" />
      <span className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/[0.07] text-primary">
        <MetricIcon type={icon} />
      </span>
      <p className="text-4xl font-black tabular-nums leading-none text-primary lg:text-[2.65rem]">
        <motion.span>{display}</motion.span>{suffix}
      </p>

      {/* Gold accent line — expands from the center after counting */}
      <motion.div
        className="mx-auto mt-2 h-[2px] w-10 origin-center rounded-full bg-accent"
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : {}}
        transition={{ duration: 0.45, delay: delay + 1.5, ease: "easeOut" }}
      />

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-dark/80">
        {label}
      </p>
    </motion.div>
  )
}

// ─── Preview illustrations ────────────────────────────────────────────────────

function PreviewPropertyMgmt() {
  return (
    <svg viewBox="0 0 480 270" fill="none" className="h-full w-full" aria-hidden="true">
      <rect width="480" height="270" fill="#0e1c30" />
      <rect width="68" height="270" fill="#0a1525" />
      <rect x="14" y="20" width="40" height="8" rx="4" fill="#1e3a5f" />
      {[52, 72, 92, 112, 132].map((y) => (
        <g key={y}>
          <rect x="10" y={y} width="8" height="8" rx="2" fill={y === 52 ? "#043a7e" : "#1a2d45"} />
          <rect x="22" y={y + 1} width="28" height="6" rx="3" fill={y === 52 ? "#1e3a6e" : "#152234"} />
        </g>
      ))}
      <rect x="68" y="0" width="412" height="38" fill="#0c1828" />
      <rect x="84" y="13" width="80" height="12" rx="6" fill="#152234" />
      <circle cx="434" cy="19" r="10" fill="#1e3a5f" />
      <circle cx="458" cy="19" r="8" fill="#162840" />
      {[84, 212, 340].map((x) => (
        <rect key={x} x={x} y="52" width={x === 340 ? 120 : 118} height="62" rx="10" fill="#112033" stroke="#1e3a5f" strokeWidth="1" />
      ))}
      <rect x="96" y="63" width="36" height="7" rx="3.5" fill="#1a2d45" />
      <text x="96" y="100" fill="#dfa408" fontSize="18" fontWeight="800" fontFamily="system-ui">87%</text>
      <rect x="96" y="107" width="55" height="5" rx="2.5" fill="#1a2d45" />
      <rect x="96" y="107" width="48" height="5" rx="2.5" fill="#dfa408" opacity="0.7" />
      <rect x="224" y="63" width="36" height="7" rx="3.5" fill="#1a2d45" />
      <text x="224" y="99" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="system-ui">$24.8K</text>
      <text x="224" y="111" fill="#22c55e" fontSize="8" fontFamily="system-ui">+12.4%</text>
      <rect x="352" y="63" width="36" height="7" rx="3.5" fill="#1a2d45" />
      <text x="352" y="100" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="system-ui">142</text>
      <rect x="84" y="126" width="188" height="132" rx="10" fill="#0d1a2b" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="96" y="136" width="80" height="8" rx="4" fill="#1a2d45" />
      {[155, 179, 203, 227].map((y, i) => (
        <g key={y}>
          <circle cx="100" cy={y + 4} r="5" fill={i === 0 ? "#ef4444" : i === 1 ? "#dfa408" : "#22c55e"} opacity="0.9" />
          <rect x="111" y={y} width="90" height="7" rx="3.5" fill="#1e3050" />
          <rect x="111" y={y + 10} width="50" height="5" rx="2.5" fill="#152234" />
          <rect x="215" y={y} width="40" height="16" rx="4" fill="#152234" />
        </g>
      ))}
      <rect x="282" y="126" width="178" height="132" rx="10" fill="#0d1a2b" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="294" y="136" width="60" height="8" rx="4" fill="#1a2d45" />
      {["J", "S", "M", "A"].map((letter, i) => (
        <g key={letter}>
          <circle cx="302" cy={160 + i * 24} r="10" fill="#1e3a5f" />
          <text x="302" y={164 + i * 24} textAnchor="middle" fill="#dfa408" fontSize="8" fontWeight="700" fontFamily="system-ui">{letter}</text>
          <rect x="318" y={154 + i * 24} width="60" height="6" rx="3" fill="#1e3050" />
          <rect x="318" y={163 + i * 24} width="40" height="5" rx="2.5" fill="#152234" />
          <circle cx="440" cy={160 + i * 24} r="4" fill={i === 0 ? "#ef4444" : "#22c55e"} />
        </g>
      ))}
    </svg>
  )
}

function PreviewCorporateWebsite() {
  return (
    <svg viewBox="0 0 480 270" fill="none" className="h-full w-full" aria-hidden="true">
      <rect width="480" height="270" fill="#eef3fb" />
      <rect x="24" y="14" width="432" height="242" rx="10" fill="#ffffff" stroke="#d1ddf0" strokeWidth="1.5" />
      <rect x="24" y="14" width="432" height="34" rx="10" fill="#f1f5fd" />
      <rect x="24" y="38" width="432" height="10" fill="#f1f5fd" />
      <circle cx="42" cy="31" r="5" fill="#ef4444" opacity="0.7" />
      <circle cx="57" cy="31" r="5" fill="#dfa408" opacity="0.7" />
      <circle cx="72" cy="31" r="5" fill="#22c55e" opacity="0.7" />
      <rect x="90" y="25" width="220" height="12" rx="6" fill="#ffffff" stroke="#d1ddf0" strokeWidth="1" />
      <rect x="100" y="29" width="100" height="4" rx="2" fill="#d1ddf0" />
      <rect x="24" y="48" width="432" height="36" fill="#043a7e" />
      <rect x="38" y="58" width="40" height="8" rx="4" fill="rgba(255,255,255,0.9)" />
      {[100, 130, 160, 190, 220].map((x) => (
        <rect key={x} x={x} y={60} width="22" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      ))}
      <rect x="402" y="55" width="42" height="18" rx="6" fill="#dfa408" />
      <rect x="410" y="60" width="26" height="8" rx="4" fill="rgba(255,255,255,0.9)" />
      <rect x="24" y="84" width="432" height="98" fill="#043a7e" />
      <rect x="80" y="100" width="180" height="12" rx="6" fill="rgba(255,255,255,0.9)" />
      <rect x="80" y="118" width="140" height="8" rx="4" fill="rgba(255,255,255,0.55)" />
      <rect x="80" y="132" width="110" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
      <rect x="80" y="150" width="78" height="22" rx="8" fill="#dfa408" />
      <rect x="168" y="150" width="68" height="22" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="370" cy="133" r="46" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
      <circle cx="370" cy="133" r="28" fill="rgba(223,164,8,0.1)" stroke="rgba(223,164,8,0.2)" strokeWidth="1.5" />
      {[36, 176, 316].map((x) => (
        <g key={x}>
          <rect x={x} y="196" width={x === 316 ? 120 : 130} height="60" rx="8" fill="#f8fbff" stroke="#e2eaf6" strokeWidth="1" />
          <rect x={x + 12} y="208" width="30" height="8" rx="4" fill="#043a7e" opacity="0.15" />
          <rect x={x + 12} y="222" width="90" height="5" rx="2.5" fill="#d1ddf0" />
          <rect x={x + 12} y="231" width="70" height="5" rx="2.5" fill="#e2eaf6" />
          <rect x={x + 12} y="244" width="50" height="5" rx="2.5" fill="#e2eaf6" />
        </g>
      ))}
    </svg>
  )
}

function PreviewHostingPortal() {
  return (
    <svg viewBox="0 0 480 270" fill="none" className="h-full w-full" aria-hidden="true">
      <rect width="480" height="270" fill="#0b1929" />
      <rect width="480" height="44" fill="#091422" />
      <rect x="16" y="14" width="56" height="16" rx="5" fill="#112038" />
      <rect x="84" y="17" width="40" height="10" rx="5" fill="#152a45" />
      <rect x="132" y="17" width="40" height="10" rx="5" fill="#152a45" />
      <circle cx="440" cy="22" r="10" fill="#1e3a5f" />
      <circle cx="462" cy="22" r="8" fill="#152234" />
      <rect x="16" y="54" width="28" height="6" rx="3" fill="#1e3a5f" />
      <path d="M49 57l4 3-4 3" stroke="#2a4a7f" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="58" y="54" width="40" height="6" rx="3" fill="#1e3a5f" />
      {[
        { x: 16,  color: "#22c55e", pct: 94 },
        { x: 168, color: "#22c55e", pct: 98 },
        { x: 320, color: "#dfa408", pct: 67 },
      ].map(({ x, color, pct }) => (
        <g key={x}>
          <rect x={x} y="72" width="140" height="68" rx="10" fill="#0f2035" stroke="#1e3a5f" strokeWidth="1" />
          <circle cx={x + 16} cy="90" r="5" fill={color} />
          <rect x={x + 26} y="86" width="55" height="7" rx="3.5" fill="#1e3050" />
          <rect x={x + 12} y="103" width="116" height="5" rx="2.5" fill="#152234" />
          <rect x={x + 12} y="103" width={Math.round(pct * 1.16)} height="5" rx="2.5" fill={color} opacity="0.7" />
          <rect x={x + 12} y="117" width="60" height="6" rx="3" fill="#152234" />
        </g>
      ))}
      <rect x="16" y="152" width="282" height="58" rx="10" fill="#0f2035" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="28" y="162" width="60" height="7" rx="3.5" fill="#1e3050" />
      <rect x="28" y="176" width="180" height="6" rx="3" fill="#152234" />
      <rect x="28" y="187" width="140" height="6" rx="3" fill="#152234" />
      <rect x="218" y="162" width="64" height="24" rx="7" fill="#043a7e" />
      <rect x="226" y="168" width="48" height="12" rx="4" fill="rgba(255,255,255,0.9)" />
      <rect x="310" y="152" width="154" height="58" rx="10" fill="#0f2035" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="322" y="162" width="50" height="7" rx="3.5" fill="#1e3050" />
      {["#ef4444", "#dfa408", "#22c55e"].map((color, i) => (
        <g key={color}>
          <circle cx="330" cy={179 + i * 14} r="4" fill={color} />
          <rect x="340" y={175 + i * 14} width="90" height="6" rx="3" fill="#152234" />
        </g>
      ))}
      <rect x="16" y="222" width="96" height="30" rx="8" fill="#043a7e" />
      <rect x="28" y="231" width="72" height="12" rx="4" fill="rgba(255,255,255,0.85)" />
      <rect x="124" y="222" width="96" height="30" rx="8" fill="#0f2035" stroke="#1e3a5f" strokeWidth="1" />
      <rect x="136" y="231" width="72" height="12" rx="4" fill="#1e3050" />
    </svg>
  )
}

function PreviewAIPlatform() {
  return (
    <svg viewBox="0 0 480 270" fill="none" className="h-full w-full" aria-hidden="true">
      <rect width="480" height="270" fill="#090f1e" />
      {[
        { x: 16,  val: "1,284" },
        { x: 136, val: "98.6%" },
        { x: 256, val: "4.2s" },
        { x: 376, val: "94" },
      ].map(({ x, val }) => (
        <g key={x}>
          <rect x={x} y="12" width="108" height="44" rx="8" fill="#0e1a2e" stroke="#1a3050" strokeWidth="1" />
          <text x={x + 10} y="36" fill="#dfa408" fontSize="13" fontWeight="800" fontFamily="system-ui">{val}</text>
          <rect x={x + 10} y="44" width="70" height="5" rx="2.5" fill="#152234" />
        </g>
      ))}
      {[
        { x: 20,  color: "#043a7e", center: false },
        { x: 108, color: "#062561", center: false },
        { x: 196, color: "#7a6200", center: true },
        { x: 284, color: "#062561", center: false },
        { x: 372, color: "#043a7e", center: false },
      ].map(({ x, color, center }, i) => (
        <g key={x}>
          {i < 4 && (
            <>
              <line x1={x + 78} y1="145" x2={x + 108} y2="145" stroke="#1e3050" strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx={x + 93} cy="145" r="3" fill="#dfa408" opacity="0.75">
                <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin={`${i * 0.48}s`} repeatCount="indefinite" />
              </circle>
            </>
          )}
          <rect x={x} y="118" width="78" height="54" rx="10" fill={color} stroke={center ? "#dfa408" : "#1e3a5f"} strokeWidth={center ? "1.5" : "1"} />
          {center && <rect x={x} y="118" width="78" height="54" rx="10" fill="rgba(223,164,8,0.06)" />}
          <rect x={x + 10} y="130" width="52" height="7" rx="3.5" fill="rgba(255,255,255,0.15)" />
          <rect x={x + 10} y="142" width="40" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
          <rect x={x + 10} y="154" width="52" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
          <rect x={x + 10} y="178" width="52" height="7" rx="3.5" fill="#1e3050" />
        </g>
      ))}
      <circle cx="235" cy="145" r="14" fill="rgba(223,164,8,0.12)" stroke="rgba(223,164,8,0.3)" strokeWidth="1" />
      <circle cx="235" cy="145" r="6" fill="#dfa408" opacity="0.8" />
      <rect x="16" y="198" width="224" height="60" rx="10" fill="#0e1a2e" stroke="#1a3050" strokeWidth="1" />
      <rect x="28" y="208" width="60" height="7" rx="3.5" fill="#1e3050" />
      {["#22c55e", "#dfa408", "#22c55e"].map((color, i) => (
        <g key={i}>
          <circle cx="32" cy={224 + i * 14} r="3.5" fill={color} />
          <rect x="42" y={220 + i * 14} width="140" height="6" rx="3" fill="#152234" />
          <rect x="194" y={220 + i * 14} width="30" height="6" rx="3" fill="#0f1c2e" />
        </g>
      ))}
      <rect x="252" y="198" width="80" height="60" rx="10" fill="#0e1a2e" stroke="#1a3050" strokeWidth="1" />
      <circle cx="292" cy="228" r="20" stroke="#1e3050" strokeWidth="3" />
      <circle cx="292" cy="228" r="20" stroke="#dfa408" strokeWidth="3" strokeDasharray="105 20" strokeLinecap="round" transform="rotate(-90 292 228)" />
      <text x="292" y="232" textAnchor="middle" fill="#dfa408" fontSize="11" fontWeight="800" fontFamily="system-ui">84%</text>
      <rect x="344" y="198" width="120" height="60" rx="10" fill="#0e1a2e" stroke="#1a3050" strokeWidth="1" />
      {["#dfa408", "#3b82f6", "#22c55e"].map((color, i) => (
        <g key={i}>
          <circle cx="356" cy={211 + i * 16} r="4" fill={color} />
          <rect x="366" y={207 + i * 16} width="60" height="6" rx="3" fill="#152234" />
          <rect x="430" y={207 + i * 16} width="26" height="6" rx="3" fill="#0f1c2e" />
        </g>
      ))}
    </svg>
  )
}

const previewMap = {
  "property-management-platform": PreviewPropertyMgmt,
  "corporate-business-website":   PreviewCorporateWebsite,
  "hosting-client-portal":        PreviewHostingPortal,
  "ai-automation-platform":       PreviewAIPlatform,
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const Preview  = previewMap[project.id]
  const badge    = badgeStyle[project.category] ?? badgeStyle["Software Development"]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.13, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 320, damping: 24 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/[0.12] bg-white shadow-soft transition duration-300 hover:border-primary/25 hover:shadow-[0_14px_34px_rgba(4,58,126,0.11)]"
    >
      <span className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-[#0f172a]/70 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/85 backdrop-blur-md">
        {project.project_status}
      </span>

      {/* ── Premium preview stage ─────────────────────────────── */}
      <div
        className="relative h-44 shrink-0 overflow-hidden border-b border-primary/20 transition-colors duration-300 group-hover:border-primary/40 sm:h-48"
        style={{
          background: "linear-gradient(145deg, #062561 0%, #043a7e 55%, #0e1c30 100%)",
          boxShadow: "inset 0 0 0 1px rgba(4,58,126,0.18)",
        }}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#071426]/80 px-3 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/55" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="ml-2 h-1.5 w-20 rounded-full bg-white/10" />
        </div>
        {/* Gold radial glow — resting state */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-400"
          style={{ background: "radial-gradient(ellipse 90% 55% at 50% 115%, rgba(223,164,8,0.13) 0%, transparent 65%)" }}
        />
        {/* Gold radial glow — hover (stronger) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(ellipse 90% 55% at 50% 115%, rgba(223,164,8,0.24) 0%, transparent 65%)" }}
        />
        {/* Glass shimmer — top edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16"
          style={{ background: "linear-gradient(to bottom, rgba(248,251,255,0.07) 0%, transparent 100%)" }}
        />
        {/* Subtle inner border highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />

        {/* Mockup — centered at 82% width, drop shadow for depth */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ padding: "34px 10px 0" }}>
          <motion.div
            className="w-[82%] overflow-hidden rounded-lg border border-primary/40 transition duration-500 group-hover:scale-[1.02] group-hover:border-primary/60"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)" }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={isInView ? { clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
          >
            {Preview && <Preview />}
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0e1c30]/45 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.13 + 0.2 }}
          className={`relative inline-block self-start overflow-hidden rounded-full bg-gradient-to-r from-[#dfa408]/[0.08] via-[#dfa408]/[0.16] to-[#dfa408]/[0.08] px-3 py-1 text-xs font-semibold transition duration-300 group-hover:brightness-110 ${badge}`}
        >
          <span className="relative z-10">{project.category}</span>
          <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 [animation:project-badge-shine_7s_ease-in-out_infinite]" aria-hidden="true" />
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: index * 0.13 + 0.3 }}
          className="mt-2.5 text-lg font-bold text-primary"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: index * 0.13 + 0.4 }}
          className="mt-2 flex-1 text-sm leading-relaxed text-slate-500"
        >
          {project.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.13 + 0.5 }}
          className="mt-5"
        >
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-primary/10 bg-primary/[0.035] px-2.5 py-1 text-[0.68rem] font-semibold text-primary/70 transition duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.065] group-hover:text-primary"
              >
                {technology}
              </span>
            ))}
          </div>
          <a
            href={project.project_url}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
          >
            View Project <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </motion.article>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

function FeaturedProjectsSection() {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="featured-projects" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(4,58,126,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(4,58,126,0.7)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 900" preserveAspectRatio="none">
          <g fill="none" stroke="#043a7e" strokeWidth="1.2">
            <path d="M40 180 H300 Q340 180 340 220 V330 H690 Q730 330 730 370 V470 H1160" />
            <path d="M120 760 V650 Q120 610 160 610 H510 Q550 610 550 570 V510 H1040 Q1080 510 1080 470 V300" />
          </g>
          <g fill="#043a7e">
            <circle cx="340" cy="330" r="4" /><circle cx="730" cy="470" r="4" />
            <circle cx="550" cy="510" r="4" /><circle cx="1080" cy="300" r="4" />
          </g>
        </svg>
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow="Our Work"
            title="Projects That Deliver Real Business Results"
            description="Explore how Zenvik Technologies transforms ideas into scalable digital solutions through custom software, websites, hosting infrastructure, and intelligent automation."
          />
        </motion.div>

        {/* Stats strip */}
        <div className="relative mt-10 lg:mt-12">
          <motion.div
            className="pointer-events-none absolute inset-x-[10%] top-7 h-28 rounded-[50%] bg-primary/[0.08] blur-[54px]"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" }}
            aria-hidden="true"
          />
          <motion.p
            className="relative mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gold"
            initial={{ opacity: 0, y: 12 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            PROJECT METRICS
            <motion.span
              className="mx-auto mt-2 block h-[2px] w-12 origin-center rounded-full bg-accent"
              initial={{ scaleX: 0 }}
              animate={sectionInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.62, ease: "easeOut" }}
              aria-hidden="true"
            />
          </motion.p>
          <div className="relative grid grid-cols-1 gap-2 rounded-2xl border border-primary/[0.06] bg-light/60 p-1.5 sm:grid-cols-2 lg:grid-cols-4">
            <span className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 h-px bg-primary/[0.07]" aria-hidden="true" />
            {stats.map(({ value, suffix, label, icon }, i) => (
              <StatCard
                key={label}
                value={value}
                suffix={suffix}
                label={label}
                icon={icon}
                delay={0.55 + i * 0.12}
                isActive={sectionInView}
              />
            ))}
          </div>
        </div>

        {/* Projects 2×2 grid */}
        <div className="mt-12 grid items-stretch gap-7 sm:grid-cols-2 lg:mt-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProjectsSection
