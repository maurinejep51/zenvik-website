import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Container from "../components/common/Container"
import Button from "../components/ui/Button"
import usePageMetadata from "../hooks/usePageMetadata"
import { legalDocuments } from "../data/legalDocuments"
import { siteConfig } from "../constants/site"
import legalCenterHero from "../../legal_samples/hero image.jpg"
import clarificationImage from "../../legal_samples/customer support.jpg"

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const documentSections = {
  terms: [
    "Terms Overview",
    "Services & Agreements",
    "Accounts & Client Responsibilities",
    "Billing & Payments",
    "Intellectual Property",
    "Suspension & Termination",
    "Liability & Disclaimers",
    "Governing Law",
    "Contact Information",
  ],
  privacy: [
    "Privacy Overview",
    "Information We Collect",
    "How We Use Information",
    "Cookies & Tracking",
    "Data Sharing",
    "Data Security",
    "User Rights",
    "Contact Information",
  ],
  refund: [
    "Refund Overview",
    "Eligible Refunds",
    "Non-Refundable Services",
    "Refund Request Process",
    "Review Timeline",
    "Approved Refunds",
    "Contact Information",
  ],
  aup: [
    "AUP Overview",
    "Prohibited Activities",
    "Hosting & Server Abuse",
    "Security Violations",
    "Email & Spam Rules",
    "Enforcement Actions",
    "Reporting Abuse",
  ],
  sla: [
    "SLA Overview",
    "Service Availability",
    "Support Commitments",
    "Maintenance Windows",
    "Service Credits",
    "Exclusions",
    "Contact Information",
  ],
}

const documentIntroductions = {
  terms: "Placeholder structure for the terms governing Zenvik Technologies services, agreements, client responsibilities, billing, and general use.",
  privacy: "Placeholder structure for how privacy practices, information handling, cookies, data security, and user rights will be documented.",
  refund: "Placeholder structure for refund eligibility, non-refundable services, request handling, review timelines, and approved refund processing.",
  aup: "Placeholder structure for acceptable use standards, prohibited activities, hosting rules, security violations, and abuse reporting.",
  sla: "Placeholder structure for service availability, support commitments, maintenance windows, service credits, exclusions, and related contact guidance.",
}

function toKebabCase(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function getAnchorFromHref(href) {
  return href.split("#")[1]
}

function BlueprintPattern({ light = true }) {
  const stroke = light ? "#043a7e" : "#ffffff"
  const goldOpacity = light ? "0.12" : "0.1"
  const lineOpacity = light ? "0.045" : "0.055"

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 620" fill="none" preserveAspectRatio="none">
        <path d="M80 120H410L520 220H760" stroke={stroke} strokeOpacity={lineOpacity} strokeWidth="1" />
        <path d="M890 80H1040V250H1130" stroke={stroke} strokeOpacity={lineOpacity} strokeWidth="1" />
        <path d="M130 520H320L410 430H620" stroke={stroke} strokeOpacity={lineOpacity} strokeWidth="1" />
        <path d="M720 460H910L994 374H1140" stroke={stroke} strokeOpacity={lineOpacity} strokeWidth="1" />
        <circle cx="410" cy="120" r="4" fill="#dfa408" fillOpacity={goldOpacity} />
        <circle cx="520" cy="220" r="3" fill="#dfa408" fillOpacity={goldOpacity} />
        <circle cx="1040" cy="250" r="4" fill="#dfa408" fillOpacity={goldOpacity} />
        <circle cx="410" cy="430" r="3" fill="#dfa408" fillOpacity={goldOpacity} />
        <circle cx="994" cy="374" r="3" fill="#dfa408" fillOpacity={goldOpacity} />
      </svg>
    </div>
  )
}

function ImagePanel({ src, alt, dark = false }) {
  return (
    <motion.div
      variants={reveal}
      className={`relative overflow-hidden rounded-[2rem] border shadow-soft ${
        dark
          ? "border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.22)]"
          : "border-primary/15 bg-white shadow-[0_18px_44px_rgba(4,58,126,0.12)]"
      }`}
    >
      <div className={`absolute inset-0 z-10 ${dark ? "bg-gradient-to-r from-primary/18 via-transparent to-dark/12" : "bg-gradient-to-r from-primary/12 via-transparent to-accent/[0.04]"}`} aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        className="aspect-video h-full w-full object-cover"
      />
    </motion.div>
  )
}

function PlaceholderBlock() {
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-primary/15 bg-[#f8fbff] px-5 py-6 text-slate-500">
      Policy content placeholder — ready for individual legal review and refinement.
    </div>
  )
}

export default function LegalCenter() {
  const documents = useMemo(() => (
    legalDocuments.map((document) => {
      const id = getAnchorFromHref(document.href)
      const sections = documentSections[document.key].map((title) => ({
        title,
        id: `${id}-${toKebabCase(title)}`,
      }))

      return {
        ...document,
        id,
        sections,
        introduction: documentIntroductions[document.key],
      }
    })
  ), [])

  const [activeDocumentId, setActiveDocumentId] = useState(() => {
    if (typeof window === "undefined") return documents[0].id

    const hash = window.location.hash.slice(1)
    return documents.some((document) => document.id === hash) ? hash : documents[0].id
  })
  const [activeSectionId, setActiveSectionId] = useState(() => {
    if (typeof window === "undefined") return documents[0].sections[0].id

    const hash = window.location.hash.slice(1)
    const selectedDocument = documents.find((document) => document.id === hash) || documents[0]
    return selectedDocument.sections[0].id
  })

  const activeDocument = documents.find((document) => document.id === activeDocumentId) || documents[0]

  usePageMetadata({
    title: "Legal Center | Zenvik Technologies",
    description:
      "Access the legal documents governing the use of Zenvik Technologies services.",
    canonical: `${siteConfig.websiteUrl}/legal`,
    image: `${siteConfig.websiteUrl}/og-image.png`,
  })

  useEffect(() => {
    const syncDocumentFromHash = () => {
      const hash = window.location.hash.slice(1)
      const selectedDocument = documents.find((document) => document.id === hash)

      if (selectedDocument) {
        setActiveDocumentId(selectedDocument.id)
        setActiveSectionId(selectedDocument.sections[0].id)
      }
    }

    syncDocumentFromHash()
    window.addEventListener("hashchange", syncDocumentFromHash)

    return () => window.removeEventListener("hashchange", syncDocumentFromHash)
  }, [documents])

  useEffect(() => {
    const updateActiveSection = () => {
      const sectionOffset = 180
      let currentSection = activeDocument.sections[0]
      for (const section of activeDocument.sections) {
        const element = window.document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= sectionOffset) {
          currentSection = section
        }
      }

      setActiveSectionId(currentSection.id)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [activeDocument])

  const selectDocument = (id) => {
    const selectedDocument = documents.find((document) => document.id === id)
    if (!selectedDocument) return

    setActiveDocumentId(selectedDocument.id)
    setActiveSectionId(selectedDocument.sections[0].id)
    window.history.replaceState(null, "", `/legal#${selectedDocument.id}`)

    window.requestAnimationFrame(() => {
      window.document.getElementById("legal-documents")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  const scrollToSection = (id) => {
    const element = window.document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#043a7e] via-[#062f67] to-[#0f172a] pt-28 pb-14 text-white lg:pb-20">
        <BlueprintPattern light={false} />
        <motion.div
          className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#1f6fc8]/20 blur-3xl"
          animate={{ x: [0, -34, 0], y: [0, 24, 0], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute left-[36%] top-20 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl"
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.35, 0.58, 0.35] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <Container className="relative">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.09 }}
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
          >
            <div>
              <motion.div variants={reveal} className="flex items-center gap-3 text-sm text-white/65">
                <a href="/" className="transition hover:text-white">Home</a>
                <span className="text-white/35">/</span>
                <span className="font-semibold text-white">Legal Center</span>
              </motion.div>
              <motion.p variants={reveal} className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                LEGAL CENTER
              </motion.p>
              <motion.h1 variants={reveal} className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Policies, Agreements &amp; Legal Information
              </motion.h1>
              <motion.p variants={reveal} className="mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
                Access the legal documents governing the use of Zenvik Technologies services, including our terms, privacy practices, service commitments, and acceptable use requirements.
              </motion.p>
              <motion.div variants={reveal} className="mt-8">
                <Button href="#legal-documents" variant="accent" className="!text-dark">
                  Explore Legal Documents
                </Button>
              </motion.div>
            </div>

            <ImagePanel
              src={legalCenterHero}
              alt="Business professionals confirming a trusted technology service agreement"
            />
          </motion.div>
        </Container>
      </section>

      <section id="legal-documents" className="scroll-mt-24 bg-white py-[100px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
            <aside className="lg:hidden">
              <div className="space-y-4 rounded-3xl border border-primary/[0.1] bg-white p-4 shadow-soft">
                <div>
                  <label htmlFor="mobile-legal-documents" className="block text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    Legal Documents
                  </label>
                  <select
                    id="mobile-legal-documents"
                    value={activeDocumentId}
                    onChange={(event) => selectDocument(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-primary/15 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-primary outline-none focus:border-primary"
                  >
                    {documents.map((document) => (
                      <option key={document.id} value={document.id}>{document.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mobile-page-sections" className="block text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    On This Page
                  </label>
                  <select
                    id="mobile-page-sections"
                    value={activeSectionId}
                    onChange={(event) => scrollToSection(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-primary/15 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-primary outline-none focus:border-primary"
                  >
                    {activeDocument.sections.map((section) => (
                      <option key={section.id} value={section.id}>{section.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </aside>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <nav className="rounded-3xl border border-primary/[0.1] bg-white p-5 shadow-soft" aria-label="Legal documents">
                  <p className="px-2 pb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    LEGAL DOCUMENTS
                  </p>
                  <div className="space-y-1.5">
                    {documents.map((document) => (
                      <button
                        type="button"
                        key={document.id}
                        onClick={() => selectDocument(document.id)}
                        className={`w-full rounded-full px-4 py-3 text-left text-sm font-semibold transition duration-300 ${
                          activeDocumentId === document.id
                            ? "bg-primary text-white shadow-[0_10px_22px_rgba(4,58,126,0.18)]"
                            : "text-slate-600 hover:bg-primary/[0.06] hover:text-primary"
                        }`}
                      >
                        {document.title}
                      </button>
                    ))}
                  </div>
                </nav>

                <nav className="rounded-3xl border border-primary/[0.1] bg-white p-5 shadow-soft" aria-label="Current legal document sections">
                  <p className="px-2 pb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    ON THIS PAGE
                  </p>
                  <div className="space-y-1.5">
                    {activeDocument.sections.map((section) => (
                      <button
                        type="button"
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full rounded-full px-4 py-2.5 text-left text-sm font-semibold transition duration-300 ${
                          activeSectionId === section.id
                            ? "bg-primary text-white"
                            : "text-slate-600 hover:bg-primary/[0.06] hover:text-primary"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <section
                key={activeDocument.id}
                id={activeDocument.id}
                className="scroll-mt-28 rounded-[2rem] border border-primary/[0.12] bg-white p-5 text-dark shadow-[0_14px_38px_rgba(4,58,126,0.075)] sm:p-7 lg:p-9"
              >
                  <div className="border-b border-primary/[0.08] pb-7">
                    <p className="text-sm font-bold uppercase tracking-[0.26em] text-gold">
                      Legal Document
                    </p>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                      {activeDocument.title}
                    </h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                      {activeDocument.introduction}
                    </p>
                  </div>

                  <div className="mt-7 space-y-6">
                    {activeDocument.sections.map((section) => (
                      <article
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-28 rounded-3xl border border-[rgba(4,58,126,0.12)] bg-white p-8 text-dark shadow-[0_10px_30px_rgba(15,23,42,0.045)]"
                      >
                        <h3 className="text-xl font-bold text-primary">
                          {section.title}
                        </h3>
                        <PlaceholderBlock />
                      </article>
                    ))}
                  </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b4a91] via-[#043a7e] to-[#0f172a] py-14 text-white shadow-[inset_0_0_140px_rgba(15,23,42,0.3)] lg:py-20">
        <BlueprintPattern light={false} />
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-primary/35 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent/[0.08] blur-3xl" aria-hidden="true" />

        <Container className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.09 }}
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
          >
            <div>
              <motion.p variants={reveal} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                SUPPORT
              </motion.p>
              <motion.h2 variants={reveal} className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Need Clarification?
              </motion.h2>
              <motion.p variants={reveal} className="mt-4 max-w-xl text-lg leading-relaxed text-white/78">
                Have questions about our policies or agreements? Our team is ready to help.
              </motion.p>
              <motion.div variants={reveal} className="mt-8">
                <Button
                  href="/contact"
                  variant="accent"
                  className="!bg-accent !text-dark hover:brightness-110 hover:shadow-[0_12px_28px_rgba(223,164,8,0.22)]"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            <ImagePanel
              src={clarificationImage}
              alt="Customer support professionals assisting with policy and agreement questions"
              dark
            />
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
