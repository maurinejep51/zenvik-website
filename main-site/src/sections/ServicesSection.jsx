import { motion } from "framer-motion"
import { coreServices } from "../data/services"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"

const technologyBackgroundItems = [
  { type: "laravel", left: "7%", top: "9%", size: "clamp(5rem, 11vw, 10rem)", rotate: "-10deg", color: "#043a7e" },
  { type: "wordpress", left: "70%", top: "7%", size: "clamp(5rem, 10vw, 9.5rem)", rotate: "8deg", color: "#7a6200" },
  { type: "react", left: "24%", top: "30%", size: "clamp(6rem, 12vw, 11.5rem)", rotate: "9deg", color: "#043a7e" },
  { type: "mysql", left: "77%", top: "34%", size: "clamp(5.5rem, 11vw, 10rem)", rotate: "-8deg", color: "#dfa408" },
  { type: "cloud", left: "6%", top: "53%", size: "clamp(5.5rem, 11vw, 10.5rem)", rotate: "4deg", color: "#043a7e" },
  { type: "ai", left: "57%", top: "55%", size: "clamp(5rem, 10vw, 9.5rem)", rotate: "-5deg", color: "#7a6200" },
  { type: "cyber", left: "14%", top: "76%", size: "clamp(5rem, 11vw, 10rem)", rotate: "-7deg", color: "#dfa408" },
  { type: "hosting", left: "73%", top: "75%", size: "clamp(5.5rem, 11vw, 10.5rem)", rotate: "7deg", color: "#043a7e" },
  { type: "software", left: "40%", top: "86%", size: "clamp(5rem, 10vw, 9.5rem)", rotate: "-3deg", color: "#7a6200" },
]

function TechnologyBackgroundIcon({ type }) {
  if (type === "laravel") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <path d="M18 31 52 14l34 17v38L52 87 18 69V31Z" />
        <path d="M52 14v73M18 31l34 18 34-18M18 69l34-20 34 20" />
        <path d="m52 49 24 13-24 13-24-13 24-13Z" />
      </svg>
    )
  }

  if (type === "wordpress") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="44" />
        <path d="M29 42c9-7 19-10 31-10 12 0 23 4 31 11M34 38l21 52 13-34 13 34 16-44M48 46h38M63 46c8 10 11 22 7 34" />
      </svg>
    )
  }

  if (type === "react") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <ellipse cx="60" cy="60" rx="45" ry="17" />
        <ellipse cx="60" cy="60" rx="45" ry="17" transform="rotate(60 60 60)" />
        <ellipse cx="60" cy="60" rx="45" ry="17" transform="rotate(120 60 60)" />
        <circle cx="60" cy="60" r="7" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (type === "mysql") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <ellipse cx="60" cy="28" rx="38" ry="16" />
        <path d="M22 28v54c0 9 17 16 38 16s38-7 38-16V28M22 55c0 9 17 16 38 16s38-7 38-16" />
        <path d="M36 48c14 7 34 7 48 0" />
      </svg>
    )
  }

  if (type === "cloud") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <path d="M34 82h51a20 20 0 0 0 3-39 30 30 0 0 0-56-7A24 24 0 0 0 34 82Z" />
        <path d="M38 95h44M49 104h22" />
      </svg>
    )
  }

  if (type === "ai") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <rect x="29" y="29" width="62" height="62" rx="18" />
        <path d="M41 52h-20M41 68h-20M79 52h20M79 68h20M52 41v-20M68 41v-20M52 79v20M68 79v20" />
        <path d="M48 61c6-15 20-15 25 0 6 17-23 16-13 31M48 72c9 5 17-6 26 0" />
      </svg>
    )
  }

  if (type === "cyber") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <path d="M60 14 96 28v30c0 25-14 42-36 53-22-11-36-28-36-53V28l36-14Z" />
        <path d="m43 62 12 12 25-31" />
        <path d="M37 93c15 7 31 7 46 0" />
      </svg>
    )
  }

  if (type === "hosting") {
    return (
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
        <rect x="27" y="18" width="66" height="84" rx="10" />
        <path d="M41 37h38M41 58h38M41 79h38" />
        <circle cx="41" cy="37" r="3" fill="currentColor" stroke="none" />
        <circle cx="41" cy="58" r="3" fill="currentColor" stroke="none" />
        <circle cx="41" cy="79" r="3" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return (
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" viewBox="0 0 120 120">
      <rect x="21" y="25" width="78" height="70" rx="12" />
      <path d="M21 47h78M45 66l-13 11 13 11M75 66l13 11-13 11M64 62l-8 30" />
    </svg>
  )
}

function TechnologyBackgroundLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {technologyBackgroundItems.map((item) => (
        <div
          key={item.type}
          className="absolute"
          style={{
            color: item.color,
            height: item.size,
            left: item.left,
            opacity: 0.04,
            top: item.top,
            transform: `rotate(${item.rotate})`,
            width: item.size,
          }}
        >
          <TechnologyBackgroundIcon type={item.type} />
        </div>
      ))}

      <svg
        className="absolute inset-0 h-full w-full"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 1440 980"
      >
        <path
          d="M110 190h160c84 0 96 86 176 86h232M908 210h170c70 0 92 72 166 72h112M148 742h198c88 0 98-94 186-94h180M820 712h210c80 0 98-82 190-82h116"
          stroke="#043a7e"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
        <path
          d="M1190 90 1324 142v94c0 70-50 122-134 154-84-32-134-84-134-154v-94l134-52Z"
          stroke="#dfa408"
          strokeOpacity="0.045"
          strokeWidth="2"
        />
        <path
          d="M190 500h120a46 46 0 0 0 8-91 72 72 0 0 0-136-14 52 52 0 0 0 8 105Z"
          stroke="#043a7e"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
        <path
          d="M600 136c42-34 78 34 120 0s78 34 120 0M600 184c42-34 78 34 120 0s78 34 120 0"
          stroke="#7a6200"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
        <path
          d="M1030 520c0 25-58 45-130 45s-130-20-130-45 58-45 130-45 130 20 130 45ZM770 520v96c0 25 58 45 130 45s130-20 130-45v-96"
          stroke="#043a7e"
          strokeOpacity="0.04"
          strokeWidth="2"
        />
        <path
          d="M438 820 512 776l74 44v78l-74 44-74-44v-78Z"
          stroke="#dfa408"
          strokeOpacity="0.045"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}

function ServiceStage({ children }) {
  return (
    <div className="relative h-32 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(223,164,8,0.13),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(4,58,126,0.08),transparent_34%),linear-gradient(135deg,#ffffff,#f8fbff_58%,#ffffff)]" />
      <svg className="relative h-full w-full" fill="none" viewBox="0 0 220 128" aria-hidden="true">
        {children}
      </svg>
    </div>
  )
}

function DiagramNode({ x, y, width = 34, height = 20, rx = 7, fill = "rgba(4,58,126,0.07)" }) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={rx}
      fill={fill}
      stroke="rgba(4,58,126,0.2)"
      strokeWidth="1.4"
    />
  )
}

function GoldLine({ d, opacity = 0.72 }) {
  return (
    <path d={d} stroke="#dfa408" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={opacity} strokeWidth="1.6" />
  )
}

function ServiceVisual({ type, index }) {
  const delay = index * 0.08

  if (type === "cloud") {
    return (
      <ServiceStage>
        <GoldLine d="M101 47 L63 88" />
        <GoldLine d="M110 48 L110 88" />
        <GoldLine d="M119 47 L157 88" />
        <path d="M79 45h66a15 15 0 0 0 2-29 28 28 0 0 0-53-5 22 22 0 0 0-15 34Z" fill="rgba(4,58,126,0.08)" stroke="rgba(4,58,126,0.68)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        {[38, 92, 146].map((x) => (
          <g key={x}>
            <DiagramNode x={x} y="88" width="36" height="24" rx="7" />
            <circle cx={x + 8} cy="100" r="2.2" fill="#dfa408" />
            <path d={`M${x + 15} 100h13`} stroke="rgba(4,58,126,0.42)" strokeLinecap="round" strokeWidth="1.4" />
        </g>
      ))}
        {["M101 47 L63 88", "M110 48 L110 88", "M119 47 L157 88"].map((path, item) => (
          <circle key={path} r="2.8" fill="#dfa408">
            <animateMotion dur="4s" begin={`${delay + item * 0.22}s`} repeatCount="indefinite" path={path} />
            <animate attributeName="opacity" values="0;1;0.65;0" dur="4s" begin={`${delay + item * 0.22}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </ServiceStage>
    )
  }

  if (type === "website") {
    return (
      <ServiceStage>
        <GoldLine d="M98 84 L64 103" opacity={0.64} />
        <GoldLine d="M110 84 L110 100" opacity={0.64} />
        <GoldLine d="M122 84 L156 98" opacity={0.64} />
        <rect x="56" y="18" width="108" height="66" rx="10" fill="rgba(4,58,126,0.08)" stroke="rgba(4,58,126,0.28)" strokeWidth="1.6" />
        <rect x="64" y="27" width="92" height="9" rx="4.5" fill="rgba(4,58,126,0.1)" />
        <rect x="64" y="27" width="14" height="9" rx="4.5" fill="#dfa408" opacity="0.9">
          <animate attributeName="width" values="14;92;14" dur="3.8s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.38;0.95;0.38" dur="3.8s" begin={`${delay}s`} repeatCount="indefinite" />
        </rect>
        <rect x="68" y="44" width="48" height="18" rx="6" fill="rgba(4,58,126,0.58)" />
        <rect x="122" y="44" width="26" height="18" rx="6" fill="rgba(223,164,8,0.72)" />
        <rect x="68" y="68" width="35" height="8" rx="4" fill="rgba(4,58,126,0.14)" />
        <rect x="110" y="68" width="38" height="8" rx="4" fill="rgba(4,58,126,0.12)" />
        <path d="M52 103h24v12H52zM48 115h32" stroke="rgba(4,58,126,0.5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <rect x="99" y="100" width="22" height="18" rx="4" stroke="rgba(4,58,126,0.5)" strokeWidth="1.8" />
        <rect x="148" y="98" width="16" height="25" rx="5" stroke="rgba(4,58,126,0.5)" strokeWidth="1.8" />
        {["M98 84 L64 103", "M110 84 L110 100", "M122 84 L156 98"].map((path, item) => (
          <circle key={path} r="2.6" fill="#dfa408">
            <animateMotion dur="4s" begin={`${delay + item * 0.18}s`} repeatCount="indefinite" path={path} />
            <animate attributeName="opacity" values="0;1;0.65;0" dur="4s" begin={`${delay + item * 0.18}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </ServiceStage>
    )
  }

  if (type === "software") {
    return (
      <ServiceStage>
        <GoldLine d="M88 55 L80 47M132 55 L140 47M88 72 L80 84M132 72 L140 84M44 64H40M176 64h4" />
        <DiagramNode x="88" y="46" width="44" height="34" rx="11" fill="rgba(4,58,126,0.1)" />
        <rect x="98" y="58" width="24" height="9" rx="4.5" fill="#dfa408" opacity="0.78" />
        {[44, 140, 44, 140].map((x, item) => (
          <g key={`${x}-${item}`}>
            <DiagramNode x={x} y={item < 2 ? 25 : 84} width="36" height="22" rx="8" fill={item % 2 ? "rgba(223,164,8,0.22)" : "rgba(4,58,126,0.08)"} />
            <path d={`M${x + 9} ${item < 2 ? 36 : 95}h18`} stroke="rgba(4,58,126,0.44)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        ))}
        <circle cx="32" cy="64" r="8" fill="rgba(223,164,8,0.2)" stroke="#dfa408" strokeWidth="1.6" />
        <circle cx="188" cy="64" r="8" fill="rgba(223,164,8,0.2)" stroke="#dfa408" strokeWidth="1.6" />
        {["M88 55 L80 47", "M132 55 L140 47", "M88 72 L80 84", "M132 72 L140 84", "M44 64 H40", "M176 64 h4"].map((path, item) => (
          <circle key={path} r="2.6" fill="#dfa408">
            <animateMotion dur="4.2s" begin={`${delay + item * 0.16}s`} repeatCount="indefinite" path={path} />
            <animate attributeName="opacity" values="0;1;0.7;0" dur="4.2s" begin={`${delay + item * 0.16}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </ServiceStage>
    )
  }

  if (type === "ai") {
    return (
      <ServiceStage>
        {[["110 42", "110 28"], ["132 52", "151 41"], ["132 76", "151 87"], ["110 86", "110 102"], ["88 76", "69 87"], ["88 52", "69 41"]].map(([from, to]) => (
          <GoldLine key={to} d={`M${from} L${to}`} opacity={0.58} />
        ))}
        <rect x="86" y="40" width="48" height="48" rx="12" fill="rgba(4,58,126,0.1)" stroke="rgba(4,58,126,0.44)" strokeWidth="1.8" />
        {[94, 102, 118, 126].map((x) => (
          <path key={`chip-pin-top-${x}`} d={`M${x} 40v-7M${x} 88v7`} stroke="rgba(4,58,126,0.36)" strokeLinecap="round" strokeWidth="1.5" />
        ))}
        {[48, 56, 72, 80].map((y) => (
          <path key={`chip-pin-side-${y}`} d={`M86 ${y}h-7M134 ${y}h7`} stroke="rgba(4,58,126,0.36)" strokeLinecap="round" strokeWidth="1.5" />
        ))}
        <motion.g
          animate={{ rotate: 360 }}
          style={{ transformBox: "view-box", transformOrigin: "110px 64px" }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="110" cy="64" r="13" fill="rgba(223,164,8,0.16)" stroke="#dfa408" strokeWidth="1.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <path key={angle} d="M110 47v7" stroke="#dfa408" strokeLinecap="round" strokeWidth="2" transform={`rotate(${angle} 110 64)`} />
          ))}
          <circle cx="110" cy="64" r="4" fill="#dfa408" />
        </motion.g>
        {[[110, 28], [151, 41], [151, 87], [110, 102], [69, 87], [69, 41]].map(([x, y], item) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="6" fill={item % 2 ? "rgba(223,164,8,0.22)" : "rgba(4,58,126,0.08)"} stroke="rgba(4,58,126,0.34)" strokeWidth="1.4" />
            <circle r="2" fill="#dfa408">
              <animateMotion dur="4.4s" begin={`${delay + item * 0.18}s`} repeatCount="indefinite" path={`M${x} ${y} L110 64 L${x} ${y}`} />
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="4.4s" begin={`${delay + item * 0.18}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </ServiceStage>
    )
  }

  if (type === "marketing") {
    return (
      <ServiceStage>
        <rect x="48" y="24" width="124" height="78" rx="13" fill="rgba(4,58,126,0.06)" stroke="rgba(4,58,126,0.18)" strokeWidth="1.4" />
        <path d="M62 88V40M62 88h92" stroke="rgba(4,58,126,0.32)" strokeLinecap="round" strokeWidth="1.4" />
        <path d="M66 76h82M66 62h82M66 48h82" stroke="rgba(4,58,126,0.1)" strokeLinecap="round" strokeWidth="1" />
        <path d="M68 82 C82 74 91 78 101 65 S122 55 132 43 145 38 154 32" stroke="rgba(4,58,126,0.13)" strokeLinecap="round" strokeWidth="6" />
        <path d="M68 82 C82 74 91 78 101 65 S122 55 132 43 145 38 154 32" stroke="#dfa408" strokeLinecap="round" strokeWidth="2.2" />
        {[[68, 82], [101, 65], [132, 43], [154, 32]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#dfa408" stroke="#ffffff" strokeWidth="1" />
        ))}
        {[[48, 92, "S"], [78, 74, "C"], [116, 52, "SEO"], [156, 32, "AD"]].map(([x, y, label]) => (
          <g key={label}>
            <circle cx={x} cy={y} r="9" fill="rgba(4,58,126,0.08)" stroke="rgba(4,58,126,0.24)" strokeWidth="1.5" />
            <text x={x} y={Number(y) + 3} textAnchor="middle" fontSize={label === "SEO" ? "6" : "7"} fontWeight="800" fill="#dfa408">{label}</text>
          </g>
        ))}
        <rect x="139" y="20" width="34" height="18" rx="7" fill="rgba(4,58,126,0.08)" stroke="rgba(4,58,126,0.2)" strokeWidth="1.4" />
        <path d="M147 31h5l4-6 4 8 4-5h3" stroke="#dfa408" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        <circle r="3" fill="#dfa408">
          <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite" path="M68 82 C82 74 91 78 101 65 S122 55 132 43 145 38 154 32" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
        </circle>
      </ServiceStage>
    )
  }

  return (
    <ServiceStage>
      <path d="M110 24v66M92 90h36M99 100h22" stroke="rgba(4,58,126,0.55)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M110 24 87 90M110 24l23 66M97 58h26" stroke="rgba(4,58,126,0.42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <circle cx="110" cy="24" r="6" fill="#dfa408" stroke="rgba(4,58,126,0.2)" strokeWidth="1.4" />
      {[16, 27, 38].map((offset, item) => (
        <g key={offset}>
          <motion.path
            d={`M${110 - offset} ${24 + item * 7} C${92 - offset} ${42 + item * 7} ${92 - offset} ${58 - item * 2} ${110 - offset} ${76 - item * 3}`}
            stroke="#dfa408"
            strokeLinecap="round"
            strokeOpacity="0.42"
            strokeWidth="1.5"
            animate={{ opacity: [0.2, 0.75, 0.2] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: delay + item * 0.22 }}
          />
          <motion.path
            d={`M${110 + offset} ${24 + item * 7} C${128 + offset} ${42 + item * 7} ${128 + offset} ${58 - item * 2} ${110 + offset} ${76 - item * 3}`}
            stroke="#dfa408"
            strokeLinecap="round"
            strokeOpacity="0.42"
            strokeWidth="1.5"
            animate={{ opacity: [0.2, 0.75, 0.2] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: delay + item * 0.22 }}
          />
        </g>
      ))}
      {["M110 100 L110 24", "M110 24 L97 58 L87 90", "M110 24 L123 58 L133 90"].map((path, item) => (
        <circle key={path} r="2.8" fill="#dfa408">
          <animateMotion dur="4.2s" begin={`${delay + item * 0.22}s`} repeatCount="indefinite" path={path} />
          <animate attributeName="opacity" values="0;1;0.7;0" dur="4.2s" begin={`${delay + item * 0.22}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </ServiceStage>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-light py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(4,58,126,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(4,58,126,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(223,164,8,0.045),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(4,58,126,0.04),transparent_30%)]" />
      <TechnologyBackgroundLayer />
      <motion.span
        className="absolute left-[12%] top-24 h-2 w-2 rounded-full bg-accent"
        animate={{ opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[16%] top-44 h-2 w-2 rounded-full bg-primary"
        animate={{ opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Our Services"
          title="Explore Zenvik Services"
          description="Start with a quick overview of our core solutions, then continue to the dedicated service pages for deeper details."
        />

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-6 lg:mt-12">
          {coreServices.map((service, index) => {
            const isExternal = service.href.startsWith("http")

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
              >
                <div className="bg-primary p-5">
                  <ServiceVisual type={service.visual} index={index} />
                </div>

                <div className="flex flex-1 flex-col bg-primary p-6 text-white">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 leading-relaxed text-white/78">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-5 inline-flex self-start font-semibold text-accent transition duration-200 hover:brightness-110"
                  >
                    Explore Solution →
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
