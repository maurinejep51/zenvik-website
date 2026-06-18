import { motion } from "framer-motion"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const blogArticles = [
  {
    title: "The Future of Cloud Hosting: Trends to Watch",
    category: "Cloud Infrastructure",
    excerpt:
      "Explore the latest developments in cloud hosting technology and how they can benefit your business. From serverless computing to edge cloud, discover what's next.",
    date: "May 15, 2024",
  },
  {
    title: "Building Scalable SaaS Applications in 2024",
    category: "Software Development",
    excerpt:
      "Learn best practices for developing scalable software-as-a-service applications. We cover architecture patterns, database optimization, and deployment strategies.",
    date: "May 10, 2024",
  },
  {
    title: "Website Performance Optimization Guide",
    category: "Web Development",
    excerpt:
      "A comprehensive guide to improving your website's performance. Discover techniques to speed up load times, improve SEO, and enhance user experience.",
    date: "May 5, 2024",
  },
]

function BlogPreviewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-light py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Latest Insights"
          title="Tech News & Industry Expertise"
          description="Stay informed with the latest trends, best practices, and insights from our team of experienced tech professionals."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"
        >
          {blogArticles.map((article) => (
            <motion.article
              key={article.title}
              variants={cardVariants}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  {article.category}
                </span>
                <span className="text-xs text-slate-500">{article.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-primary leading-tight transition-colors duration-300">
                {article.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600 transition-colors duration-300">
                {article.excerpt}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:text-gold group/link"
                >
                  <span>Read More</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-4 rounded-3xl bg-primary px-8 py-10 text-center text-white md:px-10"
        >
          <p className="text-4xl font-black leading-tight">
            More Articles Coming Soon
          </p>
          <p className="max-w-2xl text-lg text-white/80">
            Subscribe to our blog for regular updates on hosting, software development, and digital solutions.
          </p>
          <Button
            href="#contact"
            variant="accent"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default BlogPreviewSection
