import { motion } from "framer-motion"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"

const STEPS = [
  {
    number: "01",
    icon: "compass",
    iconLabel: "Compass",
    title: "Strategy & Discovery",
    desc: "Understand goals, challenges, requirements, and business opportunities.",
  },
  {
    number: "02",
    icon: "blueprint",
    iconLabel: "Blueprint",
    title: "Planning & Solution Design",
    desc: "Define architecture, workflows, technologies, and project roadmap.",
  },
  {
    number: "03",
    icon: "code",
    iconLabel: "Code brackets",
    title: "Development & Implementation",
    desc: "Build, integrate, test, and optimize the solution.",
  },
  {
    number: "04",
    icon: "rocket",
    iconLabel: "Rocket launch",
    title: "Launch & Deployment",
    desc: "Deploy securely, configure infrastructure, and prepare for production.",
  },
  {
    number: "05",
    icon: "growth",
    iconLabel: "Growth arrow",
    title: "Growth & Support",
    desc: "Monitor, improve, maintain, and scale the solution over time.",
  },
]

const ICON_PATHS = {
  compass: (
    <>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="3" className="fill-[#dfa408] stroke-[#dfa408]" />
      <path d="m39.5 24.5-5.2 9.8-9.8 5.2 5.2-9.8 9.8-5.2Z" />
      <path d="M32 6v5M32 53v5M6 32h5M53 32h5" className="stroke-[#dfa408]" />
    </>
  ),
  blueprint: (
    <>
      <path d="M12 14h35a5 5 0 0 1 5 5v31H17a5 5 0 0 1-5-5V14Z" />
      <path d="M17 50a5 5 0 0 1 0-10h35" />
      <path d="M22 23h20M22 30h13M42 30h4" className="stroke-[#dfa408]" />
      <path d="M22 36h24M22 45h18" />
    </>
  ),
  code: (
    <>
      <path d="m24 18-14 14 14 14M40 18l14 14-14 14" />
      <path d="m36 13-8 38" className="stroke-[#dfa408]" />
      <circle cx="32" cy="32" r="25" opacity=".16" />
    </>
  ),
  rocket: (
    <>
      <path d="M37 11c7-4 13-3 16-2 1 3 2 9-2 16L37 39 25 27l12-16Z" />
      <path d="M25 27 15 29l-5 8 15 2M37 39l-2 10 8 5 2-15" />
      <circle cx="42" cy="20" r="4" className="stroke-[#dfa408]" />
      <path d="M24 40c-5 1-9 5-10 10 5-1 9-5 10-10Z" className="stroke-[#dfa408]" />
    </>
  ),
  growth: (
    <>
      <path d="M10 50h44M15 44l12-12 9 8 16-19" />
      <path d="M40 21h12v12" className="stroke-[#dfa408]" />
      <path d="M16 20v18M27 14v14M38 10v21" opacity=".22" />
      <circle cx="27" cy="32" r="3" className="fill-[#dfa408] stroke-[#dfa408]" />
    </>
  ),
}

function ProcessIcon({ name, label }) {
  return (
    <div
      className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary/15 bg-white shadow-[0_10px_28px_rgba(4,58,126,0.12)]"
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 fill-none stroke-primary"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICON_PATHS[name]}
      </svg>
      <span className="absolute -bottom-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-white" />
    </div>
  )
}

function StepItem({ step, align = "left" }) {
  const alignment =
    align === "center"
      ? "items-start text-left lg:items-center lg:text-center"
      : align === "right"
        ? "items-start text-left lg:ml-auto lg:items-end lg:text-right"
        : "items-start text-left"
  const numberAlignment =
    align === "center"
      ? "left-0 lg:left-1/2 lg:-translate-x-1/2"
      : align === "right"
        ? "left-0 lg:left-auto lg:right-0"
        : "left-0"

  return (
    <article className={`relative flex w-full max-w-xl flex-col py-6 ${alignment}`}>
      <span
        className={`pointer-events-none absolute -top-3 select-none text-[7rem] font-black leading-none tracking-[-0.08em] text-primary/[0.12] sm:text-[8rem] ${numberAlignment}`}
        aria-hidden="true"
      >
        {step.number}
      </span>

      <div className="relative z-10 mt-12 sm:mt-14">
        <ProcessIcon name={step.icon} label={step.iconLabel} />
      </div>

      <h3 className="relative z-10 mt-5 text-xl font-bold leading-tight text-primary sm:text-2xl">
        <span className="sr-only">Step {step.number}: </span>
        {step.title}
      </h3>

      <p className="relative z-10 mt-2 max-w-md text-sm leading-6 text-[#475569] sm:text-base sm:leading-6">
        {step.desc}
      </p>
    </article>
  )
}

function JourneyPath({ className = "", d, highlightD }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="#043a7e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d={highlightD}
        fill="none"
        stroke="#dfa408"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.65, ease: "easeOut" }}
      />
    </svg>
  )
}

function ProcessSection() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fbff 48%, #eef5ff 100%)",
      }}
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-[24%] top-[27%] h-[52%] w-[54%] rounded-[44%_56%_48%_52%/52%_42%_58%_48%]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(223,164,8,0.025) 0%, rgba(223,164,8,0.018) 42%, rgba(223,164,8,0) 74%)",
          }}
        />

        <svg
          className="h-full w-full"
          viewBox="0 0 1200 1000"
          preserveAspectRatio="none"
        >
          {/* Layer 2: four partial engineering arcs */}
          <g
            fill="none"
            stroke="#043a7e"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.05"
          >
            <path d="M-180 160 A340 340 0 0 1 160 -180" />
            <path d="M1020 -150 A360 360 0 0 1 1370 245" />
            <path d="M-155 745 A330 330 0 0 1 185 1080" />
            <path d="M855 1110 A430 430 0 0 1 1370 665" />
          </g>

          {/* Layer 3: registration and alignment markers */}
          <g
            fill="none"
            stroke="#043a7e"
            strokeWidth="1"
            opacity="0.055"
          >
            <g transform="translate(25 47)">
              <circle r="8" />
              <path d="M-13 0H13M0-13V13" />
            </g>
            <g transform="translate(127 7)">
              <path d="M-12 5A13 13 0 0 1 5-12" />
              <path d="M-9 0H9M0-9V9" />
            </g>
            <g transform="translate(1063 22)">
              <circle r="7" />
              <path d="M-12 0H12M0-12V12" />
            </g>
            <g transform="translate(1165 118)">
              <path d="M-11 6A13 13 0 0 1 6-11" />
              <path d="M-9 0H9M0-9V9" />
            </g>
            <g transform="translate(1190 211)">
              <circle r="6" />
              <path d="M-11 0H11M0-11V11" />
            </g>
            <g transform="translate(18 810)">
              <circle r="6" />
              <path d="M-11 0H11M0-11V11" />
            </g>
            <g transform="translate(92 936)">
              <path d="M-11-6A13 13 0 0 0 6 11" />
              <path d="M-9 0H9M0-9V9" />
            </g>
            <g transform="translate(935 976)">
              <circle r="7" />
              <path d="M-12 0H12M0-12V12" />
            </g>
            <g transform="translate(1082 895)">
              <path d="M-6 11A13 13 0 0 0 11-6" />
              <path d="M-9 0H9M0-9V9" />
            </g>
            <g transform="translate(1170 770)">
              <circle r="6" />
              <path d="M-11 0H11M0-11V11" />
            </g>
            <g transform="translate(332 421)">
              <circle r="5" />
              <path d="M-18 0H18M0-18V18M5-5l16-16" />
            </g>
            <g transform="translate(792 625)">
              <circle r="5" />
              <path d="M-18 0H18M0-18V18M-5 5l-16 16" />
            </g>
          </g>

          <g fill="#dfa408" opacity="0.13">
            <circle cx="25" cy="47" r="3" />
            <circle cx="1063" cy="22" r="2.5" />
            <circle cx="1190" cy="211" r="2" />
            <circle cx="18" cy="810" r="2.5" />
            <circle cx="935" cy="976" r="3" />
            <circle cx="1170" cy="770" r="2.5" />
            <circle cx="332" cy="421" r="2.5" />
            <circle cx="792" cy="625" r="2.5" />
          </g>
        </svg>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader
            eyebrow="OUR PROCESS"
            title="From Strategy To Success"
            description="A proven approach that combines planning, design, development, deployment, and continuous improvement to deliver technology solutions that create measurable business value."
          />
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-6xl lg:mt-16">
          <div
            className="absolute bottom-24 left-[5.5rem] top-24 w-px bg-primary/25 lg:hidden"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 gap-x-24 gap-y-8 pl-14 lg:grid-cols-2 lg:gap-y-10 lg:pl-0">
            <StepItem step={STEPS[0]} />
            <StepItem step={STEPS[1]} align="right" />

            <JourneyPath
              className="hidden h-24 w-full lg:col-span-2 lg:block"
              d="M60 30 H250 Q290 30 290 60 T330 90 H740"
              highlightD="M60 30 H170"
            />

            <StepItem step={STEPS[2]} />
            <StepItem step={STEPS[3]} align="right" />

            <JourneyPath
              className="hidden h-24 w-full lg:col-span-2 lg:block"
              d="M60 25 H700 Q740 25 740 60 T700 95 H400"
              highlightD="M700 95 H590"
            />

            <div className="lg:col-span-2 lg:flex lg:justify-center">
              <StepItem step={STEPS[4]} align="center" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-20 left-[5.2rem] top-[7.4rem] flex flex-col justify-between lg:hidden" aria-hidden="true">
            {STEPS.map((step) => (
              <span key={step.number} className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-white" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection
