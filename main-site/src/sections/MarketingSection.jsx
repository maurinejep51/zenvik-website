import { motion } from "framer-motion"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const marketingServices = [
  "Brand Identity Design",
  "Social Media Management",
  "SEO Optimization",
  "Digital Advertising",
  "Content Creation",
  "Corporate Branding",
]

function MarketingSection() {
  return (
    <section className="bg-light py-24">
      <Container>
        <SectionHeader
          eyebrow="Marketing & Branding"
          title="Build A Strong Digital Presence For Your Business"
          description="Beyond technology, Zenvik Technologies helps businesses grow through strategic branding, digital marketing, creative design, and modern online visibility solutions."
          align="center"
        />

        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-8">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex self-start rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-white">
                Growth Solution
              </div>

              <h3 className="text-2xl font-bold text-primary">
                {service}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                Professional digital solutions designed to improve visibility,
                engagement, and business growth.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] bg-primary px-8 py-14 text-center text-white shadow-soft md:px-16"
        >
          <h3 className="text-3xl font-black md:text-4xl">
            Ready To Grow Your Brand?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Let's help your business stand out with modern branding,
            marketing strategies, and digital growth solutions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="#contact"
              variant="accent"
            >
              Request Consultation
            </Button>

            <Button
              href="#services"
              variant="light"
            >
              Explore More Services
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default MarketingSection
