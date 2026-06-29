import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { motion } from "framer-motion"
import Container from "../components/common/Container"
import Button from "../components/ui/Button"
import usePageMetadata from "../hooks/usePageMetadata"
import { legalContent } from "../data/legalContent"
import { siteConfig } from "../constants/site"
import legalCenterHero from "../../legal_img/hero.jpg"
import clarificationImage from "../assets/legal/legal-clarification-cta-sample.jpg"

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function BlueprintPattern({ light = true }) {
  const stroke = light ? "#043a7e" : "#ffffff"
  const goldOpacity = light ? "0.12" : "0.1"
  const lineOpacity = light ? "0.035" : "0.065"

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

function LegalContentBlock({ block }) {
  if (block.type === "heading") {
    return (
      <h4 className="pt-3 text-base font-bold leading-relaxed text-gold sm:text-lg">
        {block.text}
      </h4>
    )
  }

  if (block.type === "listItem") {
    return (
      <div
        className="flex gap-3 leading-7 text-slate-700"
        style={{ paddingLeft: `${Math.min(block.level, 3) * 1.25}rem` }}
      >
        <span className="mt-[0.68rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <span>{block.text}</span>
      </div>
    )
  }

  return <p className="leading-7 text-slate-700">{block.text}</p>
}

function estimateReadingTime(document) {
  const wordCount = document.sections.reduce(
    (documentTotal, section) => documentTotal + section.blocks.reduce(
      (sectionTotal, block) => sectionTotal + block.text.trim().split(/\s+/).length,
      0,
    ),
    0,
  )

  return Math.max(1, Math.ceil(wordCount / 225))
}

function interpolateBrandColor(progress) {
  const blue = [4, 58, 126]
  const gold = [223, 164, 8]
  const channel = (index) => Math.round(blue[index] + (gold[index] - blue[index]) * progress)

  return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`
}

export default function LegalCenter() {
  const documents = legalContent

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
  const [openSectionIds, setOpenSectionIds] = useState(() => {
    if (typeof window === "undefined") return new Set([documents[0].sections[0].id])

    const hash = window.location.hash.slice(1)
    const selectedDocument = documents.find((document) => document.id === hash) || documents[0]
    return new Set([selectedDocument.sections[0].id])
  })
  const [readingProgress, setReadingProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false)
  const documentAreaRef = useRef(null)
  const prePrintOpenSectionsRef = useRef(null)

  const activeDocument = documents.find((document) => document.id === activeDocumentId) || documents[0]
  const readingTime = estimateReadingTime(activeDocument)
  const progressColor = interpolateBrandColor(readingProgress)
  const activeTocTextColor = readingProgress > 0.62 ? "#0f172a" : "#ffffff"

  const handleDocumentScroll = (event) => {
    if (!window.matchMedia("(min-width: 1024px)").matches) return

    const element = event.currentTarget
    const availableDistance = Math.max(1, element.scrollHeight - element.clientHeight)
    const progress = Math.min(1, Math.max(0, element.scrollTop / availableDistance))

    setReadingProgress(progress)
    setShowBackToTop(element.scrollTop > 280)
  }

  usePageMetadata({
    title: "Legal Center | Zenvik Technologies Ltd",
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
        setOpenSectionIds(new Set([selectedDocument.sections[0].id]))
        setReadingProgress(0)
        setShowBackToTop(false)
      }
    }

    syncDocumentFromHash()
    window.addEventListener("hashchange", syncDocumentFromHash)

    return () => window.removeEventListener("hashchange", syncDocumentFromHash)
  }, [documents])

  useEffect(() => {
    const updateActiveSection = () => {
      const documentArea = documentAreaRef.current
      const usesDocumentScroll = window.matchMedia("(min-width: 1024px)").matches
      const sectionOffset = usesDocumentScroll && documentArea
        ? documentArea.getBoundingClientRect().top + 24
        : 180
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
    const documentArea = documentAreaRef.current
    documentArea?.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      documentArea?.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [activeDocument, openSectionIds])

  useEffect(() => {
    const handleBeforePrint = () => {
      if (!prePrintOpenSectionsRef.current) {
        prePrintOpenSectionsRef.current = new Set(openSectionIds)
      }

      flushSync(() => {
        setOpenSectionIds(new Set(activeDocument.sections.map((section) => section.id)))
      })
    }

    const handleAfterPrint = () => {
      const previousOpenSections = prePrintOpenSectionsRef.current
      if (!previousOpenSections) return

      flushSync(() => {
        setOpenSectionIds(new Set(previousOpenSections))
      })
      prePrintOpenSectionsRef.current = null
    }

    window.addEventListener("beforeprint", handleBeforePrint)
    window.addEventListener("afterprint", handleAfterPrint)

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint)
      window.removeEventListener("afterprint", handleAfterPrint)
    }
  }, [activeDocument, openSectionIds])

  useEffect(() => {
    const updateReadingProgress = () => {
      const element = documentAreaRef.current
      if (!element) return

      const usesDocumentScroll = window.matchMedia("(min-width: 1024px)").matches
      let progress
      let hasScrolledDown

      if (usesDocumentScroll) {
        const availableDistance = Math.max(1, element.scrollHeight - element.clientHeight)
        progress = Math.min(1, Math.max(0, element.scrollTop / availableDistance))
        hasScrolledDown = element.scrollTop > 280
      } else {
        const headerOffset = 96
        const rect = element.getBoundingClientRect()
        const availableDistance = Math.max(1, rect.height - window.innerHeight + headerOffset)
        progress = Math.min(1, Math.max(0, (headerOffset - rect.top) / availableDistance))
        hasScrolledDown = rect.top < -280
      }

      setReadingProgress(progress)
      setShowBackToTop(hasScrolledDown)
    }

    const frame = window.requestAnimationFrame(updateReadingProgress)
    window.addEventListener("scroll", updateReadingProgress, { passive: true })
    window.addEventListener("resize", updateReadingProgress)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateReadingProgress)
      window.removeEventListener("resize", updateReadingProgress)
    }
  }, [activeDocument, openSectionIds])

  const selectDocument = (id) => {
    const selectedDocument = documents.find((document) => document.id === id)
    if (!selectedDocument) return

    setActiveDocumentId(selectedDocument.id)
    setActiveSectionId(selectedDocument.sections[0].id)
    setOpenSectionIds(new Set([selectedDocument.sections[0].id]))
    setReadingProgress(0)
    setShowBackToTop(false)
    window.history.replaceState(null, "", `/legal#${selectedDocument.id}`)

    window.requestAnimationFrame(() => {
      documentAreaRef.current?.scrollTo({ top: 0 })
      window.document.getElementById("legal-documents")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  const scrollToSection = (id) => {
    setOpenSectionIds((current) => {
      const next = new Set(current)
      next.add(id)
      return next
    })

    window.requestAnimationFrame(() => {
      const element = window.document.getElementById(id)
      const documentArea = documentAreaRef.current
      if (!element || !documentArea) return

      if (window.matchMedia("(min-width: 1024px)").matches) {
        const top = documentArea.scrollTop
          + element.getBoundingClientRect().top
          - documentArea.getBoundingClientRect().top
          - 16
        documentArea.scrollTo({ top, behavior: "smooth" })
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  }

  const toggleSection = (id) => {
    setOpenSectionIds((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const expandAllSections = () => {
    setOpenSectionIds(new Set(activeDocument.sections.map((section) => section.id)))
  }

  const collapseAllSections = () => {
    setOpenSectionIds(new Set())
  }

  const scrollToDocumentTop = () => {
    const documentArea = documentAreaRef.current
    if (!documentArea) return

    if (window.matchMedia("(min-width: 1024px)").matches) {
      documentArea.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      documentArea.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const downloadCurrentDocumentPdf = async () => {
    if (isDownloadingPdf) return

    setIsDownloadingPdf(true)
    try {
      const { generateLegalPdf } = await import("../utils/generateLegalPdf")
      await generateLegalPdf(activeDocument)
    } catch (error) {
      console.error("Unable to generate legal document PDF.", error)
    } finally {
      setIsDownloadingPdf(false)
    }
  }

  return (
    <main className="legal-center-page min-h-screen bg-white text-slate-900">
      <section className="legal-print-hide relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#043a7e] to-[#416f9d] pt-28 pb-14 text-white lg:pb-20">
        <BlueprintPattern light={false} />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-white/[0.14]"
          aria-hidden="true"
        />
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
              <motion.p variants={reveal} className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
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

      <section id="legal-documents" className="legal-print-section relative scroll-mt-24 overflow-visible bg-gradient-to-b from-[#eef5fc] via-[#f8fbff] to-[#f2f7fc] py-[100px]">
        <BlueprintPattern />
        <div
          className="pointer-events-none absolute right-0 top-[12%] h-[46rem] w-[46rem] max-w-full rounded-full bg-primary/[0.045] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[8%] top-[9%] h-px w-[34%] bg-gradient-to-r from-transparent via-accent/[0.13] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[18%] left-[4%] h-px w-[28%] bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid items-start gap-10 lg:h-[calc(100vh-2rem)] lg:min-h-[960px] lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:items-stretch lg:gap-8 xl:min-h-[1020px] xl:gap-10">
            <aside className="legal-print-hide lg:hidden">
              <div className="rounded-3xl border border-primary/[0.12] border-t-2 border-t-primary/45 bg-[#f8fbff] p-5 shadow-[0_14px_34px_rgba(4,58,126,0.1)]">
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
              </div>
            </aside>

            <aside className="legal-print-hide hidden min-h-0 flex-col gap-3 lg:flex">
              <nav className="flex max-h-[42%] min-h-0 shrink-0 flex-col rounded-3xl border border-primary/[0.12] border-t-2 border-t-primary/45 bg-[#f8fbff] p-5 shadow-[0_14px_34px_rgba(4,58,126,0.1)]" aria-label="Legal documents">
                  <p className="px-2 pb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    LEGAL DOCUMENTS
                  </p>
                  <div className="min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1">
                    {documents.map((document) => (
                      <button
                        type="button"
                        key={document.id}
                        onClick={() => selectDocument(document.id)}
                        className={`w-full rounded-full px-4 py-2.5 text-left text-sm font-semibold transition duration-300 ${
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

              <nav className="flex min-h-0 flex-1 flex-col rounded-3xl border border-primary/[0.12] border-t-2 border-t-primary/45 bg-[#f8fbff] p-5 shadow-[0_14px_34px_rgba(4,58,126,0.1)]" aria-label="Current legal document sections">
                  <p className="px-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                    TABLE OF CONTENTS
                  </p>
                  <div className="mt-4 h-1.5 shrink-0 overflow-hidden rounded-full bg-primary/[0.08]">
                    <div
                      className="h-full rounded-full transition-[width,background-color] duration-300"
                      style={{ width: `${readingProgress * 100}%`, backgroundColor: progressColor }}
                      role="progressbar"
                      aria-label="Document reading progress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow={Math.round(readingProgress * 100)}
                    />
                  </div>
                  <p className="mt-2 px-2 text-right text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {Math.round(readingProgress * 100)}% read
                  </p>
                  <div className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1">
                    {activeDocument.sections.map((section) => (
                      <button
                        type="button"
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full rounded-full px-3.5 py-2 text-left text-sm font-semibold transition duration-300 ${
                          activeSectionId === section.id
                            ? "shadow-[0_8px_18px_rgba(4,58,126,0.16)]"
                            : "text-slate-600 hover:bg-primary/[0.06] hover:text-primary"
                        }`}
                        style={activeSectionId === section.id
                          ? { backgroundColor: progressColor, color: activeTocTextColor }
                          : undefined}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
              </nav>
            </aside>

            <div
              className="legal-document-scroll min-w-0 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:pr-2"
              ref={documentAreaRef}
              onScroll={handleDocumentScroll}
            >
              <nav className="legal-print-hide mb-5 rounded-2xl border border-primary/[0.14] bg-[#f8fbff] p-3 shadow-[0_10px_28px_rgba(4,58,126,0.12)] lg:hidden" aria-label="Current legal document sections">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="mobile-page-sections" className="shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                    Contents
                  </label>
                  <span className="text-[0.68rem] font-bold text-slate-500">
                    {Math.round(readingProgress * 100)}%
                  </span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-primary/[0.08]">
                  <div
                    className="h-full rounded-full transition-[width,background-color] duration-300"
                    style={{ width: `${readingProgress * 100}%`, backgroundColor: progressColor }}
                    role="progressbar"
                    aria-label="Document reading progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={Math.round(readingProgress * 100)}
                  />
                </div>
                <select
                  id="mobile-page-sections"
                  value={activeSectionId}
                  onChange={(event) => scrollToSection(event.target.value)}
                  className="mt-2 w-full rounded-xl border bg-white px-3 py-2 text-sm font-semibold text-primary outline-none"
                  style={{ borderColor: progressColor }}
                >
                  {activeDocument.sections.map((section) => (
                    <option key={section.id} value={section.id}>{section.title}</option>
                  ))}
                </select>
              </nav>

              <section
                key={activeDocument.id}
                id={activeDocument.id}
                className="legal-print-document relative scroll-mt-28 rounded-[2rem] border border-primary/[0.14] bg-white p-5 pt-7 text-dark shadow-[0_18px_48px_rgba(4,58,126,0.09)] sm:p-7 sm:pt-9 lg:p-9 lg:pt-11"
              >
                  <div className="legal-print-only legal-print-corporate-header">
                    <div className="legal-print-header-row">
                      <div className="legal-print-logo">
                        <img src="/logo.png" alt="Zenvik Technologies Ltd" />
                      </div>
                      <div className="legal-print-title-block">
                        <p>Legal Center | Zenvik Technologies Ltd</p>
                        <h1>{activeDocument.title}</h1>
                      </div>
                      <div className="legal-print-dates">
                        <span>Version 1.0</span>
                        <span>Last Updated: June 2026</span>
                      </div>
                    </div>
                  </div>

                  <section className="legal-print-only legal-print-toc" aria-label="Printed table of contents">
                    <h2>Table of Contents</h2>
                    <ol>
                      {activeDocument.sections.map((section) => (
                        <li key={`print-${section.id}`}>
                          <a href={`#${section.id}`}>{section.title}</a>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <div className="legal-screen-document-header rounded-3xl border border-primary/[0.08] bg-gradient-to-br from-[#f8fbff] via-white to-primary/[0.025] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-7">
                    <p className="text-sm font-bold uppercase tracking-[0.26em] text-gold">
                      Legal Document
                    </p>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-primary sm:text-4xl">
                      {activeDocument.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <span>Last Updated: June 2026</span>
                      <span className="hidden text-primary/25 sm:inline" aria-hidden="true">•</span>
                      <span>{readingTime} min read</span>
                    </div>
                    <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
                      {activeDocument.description}
                    </p>

                    <div className="legal-print-hide mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={expandAllSections}
                        className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary transition duration-300 hover:border-primary/40 hover:bg-primary/[0.05]"
                      >
                        Expand All
                      </button>
                      <button
                        type="button"
                        onClick={collapseAllSections}
                        className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary transition duration-300 hover:border-primary/40 hover:bg-primary/[0.05]"
                      >
                        Collapse All
                      </button>
                      <button
                        type="button"
                        onClick={downloadCurrentDocumentPdf}
                        disabled={isDownloadingPdf}
                        className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(4,58,126,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#062f67] hover:shadow-[0_14px_28px_rgba(4,58,126,0.24)] disabled:cursor-wait disabled:opacity-60"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                          <path d="M5 17v3h14v-3" />
                        </svg>
                        {isDownloadingPdf ? "Generating PDF…" : "Download PDF"}
                      </button>
                    </div>
                    <p className="legal-print-hide mt-3 text-xs leading-relaxed text-slate-500">
                      Download the official PDF version for saving or printing.
                    </p>
                  </div>

                  <div className="mt-7 space-y-6">
                    {activeDocument.sections.map((section) => {
                      const isOpen = openSectionIds.has(section.id)

                      return (
                        <article
                          key={section.id}
                          id={section.id}
                          className="group scroll-mt-28 rounded-3xl border border-primary/[0.16] bg-white px-6 py-5 text-dark shadow-[0_10px_28px_rgba(4,58,126,0.065)] transition duration-300 hover:border-primary/25 hover:shadow-[0_14px_34px_rgba(4,58,126,0.1)] sm:px-8 sm:py-6"
                        >
                          <h3 className="legal-print-section-title hidden text-xl font-bold text-primary">
                            {section.title}
                          </h3>
                          <button
                            type="button"
                            onClick={() => toggleSection(section.id)}
                            className="legal-accordion-trigger flex w-full items-center justify-between gap-5 text-left"
                            aria-expanded={isOpen}
                            aria-controls={`${section.id}-content`}
                          >
                            <span className="text-lg font-bold leading-snug text-primary sm:text-xl">
                              {section.title}
                            </span>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/[0.07] text-primary transition duration-300 group-hover:bg-primary/[0.11]" aria-hidden="true">
                              <svg
                                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </span>
                          </button>
                          <div className="mt-3 h-0.5 w-12 rounded-full bg-accent/75 transition duration-300 group-hover:w-16 group-hover:bg-accent" aria-hidden="true" />
                          <div
                            id={`${section.id}-content`}
                            className="legal-accordion-content mt-6 max-w-[78ch] space-y-4"
                            hidden={!isOpen}
                          >
                          {section.blocks.map((block, index) => (
                            <LegalContentBlock
                              key={`${section.id}-${index}`}
                              block={block}
                            />
                          ))}
                          </div>
                        </article>
                      )
                    })}
                  </div>

                  <div className="legal-print-only legal-print-footer">
                    <span>© 2026 Zenvik Technologies Ltd. All Rights Reserved.</span>
                    <span>Website: https://zenviktechnologies.com/</span>
                  </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <section className="legal-print-hide relative overflow-hidden bg-white bg-[linear-gradient(180deg,rgba(4,58,126,0.1)_0%,rgba(4,58,126,0.42)_38%,rgba(4,58,126,0.62)_70%,rgba(4,58,126,0.24)_100%)] py-12 text-dark shadow-[inset_0_0_64px_rgba(4,58,126,0.04)] lg:py-14">
        <BlueprintPattern />
        <motion.div
          className="pointer-events-none absolute left-[16%] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[#2d7bc7]/18 blur-3xl"
          animate={{ x: [0, 38, 0], scale: [0.94, 1.06, 0.94], opacity: [0.45, 0.68, 0.45] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent/[0.075] blur-3xl"
          animate={{ opacity: [0.38, 0.62, 0.38], y: [12, -8, 12] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <Container className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.09 }}
            className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
          >
            <div className="rounded-[2rem] border border-white/55 bg-white/55 p-6 shadow-[0_18px_44px_rgba(4,58,126,0.12)] backdrop-blur-sm sm:p-8">
              <motion.p variants={reveal} className="text-sm font-bold uppercase tracking-[0.3em] text-[#654f00]">
                SUPPORT
              </motion.p>
              <motion.h2 variants={reveal} className="mt-3 text-3xl font-black leading-tight text-[#082f63] sm:text-4xl">
                Need Clarification?
              </motion.h2>
              <motion.p variants={reveal} className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                Have questions about our policies or agreements? Our team is ready to help.
              </motion.p>
              <motion.div variants={reveal} className="mt-6">
                <Button
                  href="/contact"
                  variant="accent"
                  className="!bg-accent !text-dark shadow-[0_10px_24px_rgba(122,98,0,0.22)] hover:brightness-110 hover:shadow-[0_14px_30px_rgba(122,98,0,0.3)]"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            <ImagePanel
              src={clarificationImage}
              alt="Customer support professionals assisting with policy and agreement questions"
            />
          </motion.div>
        </Container>
      </section>

      <button
        type="button"
        onClick={scrollToDocumentTop}
        className={`legal-print-hide fixed bottom-6 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(4,58,126,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#062f67] sm:left-7 ${
          showBackToTop ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-3 opacity-0"
        }`}
        aria-label="Back to top of legal document"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 15 6-6 6 6" />
        </svg>
        <span className="hidden sm:inline">Back to Top</span>
      </button>
    </main>
  )
}
