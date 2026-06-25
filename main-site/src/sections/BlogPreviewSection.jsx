import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Container from "../components/common/Container"
import aiOperationsImage from "../assets/insights/ai-operations.png"
import hostingInfrastructureImage from "../assets/insights/hosting-infrastructure.png"
import scalableSoftwareImage from "../assets/insights/scalable-software.png"

const CATEGORIES = [
  "Software Development",
  "Hosting & Cloud",
  "AI & Automation",
  "Cybersecurity",
  "Web Development",
  "Digital Marketing",
]

const ARTICLES = [
  {
    id: 1,
    title: "How Businesses Are Using AI To Improve Operations",
    slug: "how-businesses-are-using-ai-to-improve-operations",
    excerpt:
      "Explore practical ways organizations are implementing AI-powered solutions to improve efficiency, automate repetitive tasks, and support business growth.",
    featured_image: aiOperationsImage,
    category: "AI & Automation",
    author: "Zenvik Team",
    publish_date: "June 18, 2026",
    reading_time: "6 Min Read",
    featured: true,
    status: "published",
  },
  {
    id: 2,
    title: "Choosing The Right Hosting Infrastructure For Growth",
    slug: "choosing-the-right-hosting-infrastructure-for-growth",
    excerpt:
      "Understand how modern hosting environments support scalability, security, and long-term performance.",
    featured_image: hostingInfrastructureImage,
    category: "Hosting & Cloud",
    author: "Zenvik Team",
    publish_date: "June 12, 2026",
    reading_time: "5 Min Read",
    featured: false,
    status: "published",
  },
  {
    id: 3,
    title: "Building Scalable Digital Solutions For Modern Businesses",
    slug: "building-scalable-digital-solutions-for-modern-businesses",
    excerpt:
      "Discover the key principles behind reliable, maintainable, and scalable software systems.",
    featured_image: scalableSoftwareImage,
    category: "Software Development",
    author: "Zenvik Team",
    publish_date: "June 5, 2026",
    reading_time: "7 Min Read",
    featured: false,
    status: "published",
  },
]

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function ArticleMeta({ article, showReadingTime = false }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em]">
      <span className="insights-category-badge relative overflow-hidden rounded-full border border-accent/20 bg-gradient-to-r from-accent/[0.08] via-accent/[0.16] to-accent/[0.08] px-3 py-1 text-[#7a6200] transition duration-300 group-hover:brightness-110">
        <span className="relative z-10">{article.category}</span>
        <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 [animation:project-badge-shine_7s_ease-in-out_infinite]" aria-hidden="true" />
      </span>
      <span className="h-1 w-1 rounded-full bg-primary/25" aria-hidden="true" />
      <time className="text-slate-500">{article.publish_date}</time>
      {showReadingTime && (
        <>
          <span className="h-1 w-1 rounded-full bg-primary/25" aria-hidden="true" />
          <span className="text-slate-500">{article.reading_time}</span>
        </>
      )}
    </div>
  )
}

function ArticleLink({ slug }) {
  return (
    <a
      href={`/blog/${slug}`}
      className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
    >
      Read Article
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  )
}

function FeaturedArticle({ article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
      className="group relative isolate grid overflow-hidden rounded-[2rem] border border-primary/[0.12] bg-[linear-gradient(145deg,#ffffff_0%,#ffffff_72%,rgba(4,58,126,0.025)_100%)] shadow-[0_10px_34px_rgba(15,23,42,0.055),inset_0_0_0_1px_rgba(4,58,126,0.025)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_16px_42px_rgba(4,58,126,0.105),inset_0_0_22px_rgba(4,58,126,0.035)] lg:grid-cols-[2fr_3fr]"
    >
      <div className="relative z-[1] overflow-hidden border-b border-primary/20 bg-[#f8fbff] shadow-[inset_0_0_0_1px_rgba(4,58,126,0.18)] transition duration-300 group-hover:border-primary/40 group-hover:shadow-[inset_0_0_0_1px_rgba(4,58,126,0.32)] lg:border-b-0 lg:border-r">
        <img
          src={article.featured_image}
          alt=""
          className="h-full min-h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:min-h-[20rem]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20 transition duration-300 group-hover:ring-primary/40" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary/15 to-transparent" aria-hidden="true" />
      </div>

      <div className="relative z-[1] flex flex-col justify-center p-6 sm:p-8 lg:px-11 lg:py-9">
        <ArticleMeta article={article} showReadingTime />
        <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.025em] text-primary sm:text-4xl">
          {article.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {article.excerpt}
        </p>
        <div className="mt-1">
          <ArticleLink slug={article.slug} />
        </div>
      </div>
    </motion.article>
  )
}

function SecondaryArticle({ article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/[0.12] bg-[linear-gradient(145deg,#ffffff_0%,#ffffff_72%,rgba(4,58,126,0.025)_100%)] shadow-[0_8px_28px_rgba(15,23,42,0.05),inset_0_0_0_1px_rgba(4,58,126,0.025)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_14px_36px_rgba(4,58,126,0.1),inset_0_0_22px_rgba(4,58,126,0.035)]"
    >
      <div className="relative z-[1] aspect-[16/6.8] shrink-0 overflow-hidden border-b border-primary/20 bg-[#f8fbff] shadow-[inset_0_0_0_1px_rgba(4,58,126,0.18)] transition duration-300 group-hover:border-primary/40 group-hover:shadow-[inset_0_0_0_1px_rgba(4,58,126,0.32)]">
        <img
          src={article.featured_image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20 transition duration-300 group-hover:ring-primary/40" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-primary/15 to-transparent" aria-hidden="true" />
      </div>

      <div className="relative z-[1] flex flex-1 flex-col p-5 sm:px-6 sm:py-5">
        <ArticleMeta article={article} />
        <h3 className="mt-3 text-2xl font-bold leading-tight text-primary sm:text-[1.5rem]">
          {article.title}
        </h3>
        <p className="mt-2.5 line-clamp-2 leading-relaxed text-slate-600">
          {article.excerpt}
        </p>
        <ArticleLink slug={article.slug} />
      </div>
    </motion.article>
  )
}

function ExploreMoreInsights() {
  return (
    <motion.div
      className="relative mt-3 isolate flex flex-col items-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary to-[#0f172a] px-8 py-10 text-center text-white sm:px-12 sm:py-11"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[34%] -z-10 h-40 w-[42rem] max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-accent/[0.055] blur-[70px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1, ease: "easeOut" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[65rem] max-w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#1d5fa9]/[0.08] blur-[90px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-1/2 top-[72%] -z-10 h-16 w-[46rem] max-w-[85%] -translate-x-1/2 -translate-y-1/2 bg-accent/[0.04] blur-[40px]" aria-hidden="true" />

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl font-black sm:text-3xl"
      >
        Explore More Insights
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 max-w-2xl leading-relaxed text-white/75"
      >
        Browse our knowledge center for technology trends, implementation guides, business strategies, and expert insights from the Zenvik team.
      </motion.p>

      <motion.svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.52 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="insights-trail-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#043a7e" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#dfa408" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="insights-trail-right" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#043a7e" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#dfa408" stopOpacity="0.05" />
          </linearGradient>
          <filter id="insights-trail-blur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <g
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#insights-trail-blur)"
        >
          <motion.path
            d="M-60 250 C230 230 390 220 600 245"
            stroke="url(#insights-trail-left)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, delay: 0.55, ease: "easeOut" }}
          />
          <motion.path
            d="M1260 250 C970 230 810 220 600 245"
            stroke="url(#insights-trail-right)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, delay: 0.55, ease: "easeOut" }}
          />
        </g>
      </motion.svg>

      <motion.a
        href="/blog"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-6 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-[#0f172a] shadow-[0_14px_32px_rgba(223,164,8,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f172a]"
      >
        Browse Knowledge Center
      </motion.a>
    </motion.div>
  )
}

function BlogPreviewSection() {
  const [activeCategory, setActiveCategory] = useState(null)
  const publishedArticles = ARTICLES.filter((article) => article.status === "published")
  const visibleArticles = activeCategory
    ? publishedArticles.filter((article) => article.category === activeCategory)
    : publishedArticles
  const featuredArticle =
    visibleArticles.find((article) => article.featured) ?? visibleArticles[0]
  const secondaryArticles = visibleArticles.filter(
    (article) => article.id !== featuredArticle?.id,
  )

  const handleCategoryChange = (category) => {
    setActiveCategory((current) => (current === category ? null : category))
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20" aria-labelledby="insights-heading">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(4,58,126,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(4,58,126,0.65)_1px,transparent_1px)] bg-[size:84px_84px]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 1000" preserveAspectRatio="none">
          <g fill="none" stroke="#043a7e" strokeWidth="1.2">
            <path d="M-40 190 H250 Q290 190 290 230 V320 H520" />
            <path d="M1240 410 H960 Q920 410 920 450 V560 H670" />
            <path d="M80 850 V730 Q80 690 120 690 H400" />
          </g>
          <g fill="#043a7e">
            <circle cx="290" cy="320" r="4" />
            <circle cx="920" cy="560" r="4" />
            <circle cx="120" cy="690" r="4" />
          </g>
        </svg>
      </div>

      <Container className="relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mx-auto max-w-[1180px]"
        >
          <motion.div className="max-w-3xl">
            <motion.p
              variants={revealVariants}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold"
            >
              LATEST INSIGHTS
            </motion.p>
            <motion.h2
              id="insights-heading"
              variants={revealVariants}
              className="text-3xl font-black leading-tight text-primary sm:text-4xl md:text-5xl"
            >
              Insights, Trends &amp; Practical Technology Knowledge
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-4 text-lg leading-relaxed text-slate-600"
            >
              Explore practical insights, industry trends, implementation strategies, technology innovations, and business-focused digital knowledge from the Zenvik team.
            </motion.p>
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="mx-auto mt-7 flex max-w-5xl flex-wrap items-center justify-center gap-2.5"
            aria-label="Filter insights by category"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`group/chip relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                    isActive
                      ? "border-primary bg-primary text-white"
                      : "border-primary/10 bg-white text-primary hover:border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-accent transition-all duration-300 ${
                      isActive ? "w-1/2" : "w-0 group-hover/chip:w-1/2"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </motion.div>

          <motion.div variants={revealVariants} className="mt-10">
            <AnimatePresence mode="wait">
              {featuredArticle ? (
                <FeaturedArticle key={featuredArticle.id} article={featuredArticle} />
              ) : (
                <motion.div
                  key="empty-insights"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-[2rem] border border-primary/[0.08] bg-[#f8fbff] px-6 py-16 text-center"
                >
                  <p className="font-semibold text-primary">
                    New insights in this category are being prepared.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={revealVariants}>
            <AnimatePresence mode="popLayout">
              {secondaryArticles.length > 0 && (
                <motion.div
                  key={activeCategory ?? "all-secondary-articles"}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mt-5 grid items-stretch gap-5 md:grid-cols-2"
                >
                  {secondaryArticles.slice(0, 2).map((article) => (
                    <SecondaryArticle key={article.id} article={article} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <ExploreMoreInsights />
        </motion.div>
      </Container>
    </section>
  )
}

export default BlogPreviewSection
