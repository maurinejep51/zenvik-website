import { motion } from "framer-motion"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const softwareSolutions = [
  "Business Management Systems",
  "Property Management Systems",
  "Custom SaaS Platforms",
  "E-commerce Platforms",
  "API Integrations",
  "Automation Systems",
]

function SoftwareSection() {
  return (
    <section id="software" className="bg-dark py-24 text-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Software Development"
              title="Scalable Software Built For Real Businesses"
              description="We design and develop enterprise-grade software solutions, automation systems, business platforms, and SaaS applications tailored for modern organizations and growing companies."
              light
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {softwareSolutions.map((solution) => (
                <div
                  key={solution}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                >
                  {solution}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href="#contact"
                variant="accent"
              >
                Start Your Project
              </Button>

              <Button
                href="#services"
                variant="light"
              >
                Explore Solutions
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="rounded-3xl bg-primary p-6">
                  <h3 className="text-xl font-bold">Custom Systems</h3>
                  <p className="mt-3 text-white/80">
                    Tailored software solutions for unique business workflows.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/5 p-6">
                  <h3 className="text-xl font-bold">Enterprise Automation</h3>
                  <p className="mt-3 text-slate-300">
                    Streamline operations through modern digital automation.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/5 p-6">
                  <h3 className="text-xl font-bold">Scalable Architecture</h3>
                  <p className="mt-3 text-slate-300">
                    Built for future growth, performance, and long-term scalability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default SoftwareSection
