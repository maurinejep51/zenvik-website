import { motion } from "framer-motion"
import { projects } from "../data/projects"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

function PortfolioSection() {
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
    <section id="portfolio" className="bg-light py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Our Work"
          title="Portfolio & Case Studies"
          description="Discover how Zenvik Technologies delivers enterprise-grade solutions across web development, custom software, and hosting infrastructure."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,21rem),1fr))] gap-6 lg:mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 flex items-start justify-between">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  {project.category}
                </span>
                <div className="text-3xl font-bold text-primary/20 transition-colors duration-300 group-hover:text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600 transition-colors duration-300">
                {project.description}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:text-accent group/link"
                >
                  <span>Learn More</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[2rem] bg-primary px-8 py-10 text-center text-white shadow-soft md:p-10"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Ready to Build Something Great?
          </p>

          <h3 className="text-4xl font-black leading-tight md:text-5xl">
            Start Your Next Project Today
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Whether you need a custom software solution, enterprise hosting infrastructure, or a modern website,
            our team of experts is ready to deliver exceptional results.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="#contact"
              variant="accent"
            >
              Start a Project
            </Button>

            <Button
              href="https://portal.zenviktechnologies.com"
              variant="light"
            >
              View Our Services
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default PortfolioSection
