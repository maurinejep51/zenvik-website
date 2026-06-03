import { motion } from "framer-motion"
import { coreServices } from "../data/services"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"

function ServicesSection() {
  return (
    <section id="services" className="bg-light py-24">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Complete ICT & Digital Solutions"
          description="Zenvik Technologies delivers enterprise-grade hosting, software, websites, branding, marketing, and ICT infrastructure solutions tailored for modern businesses."
        />

        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-primary">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-semibold text-accent transition group-hover:tracking-wide"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
