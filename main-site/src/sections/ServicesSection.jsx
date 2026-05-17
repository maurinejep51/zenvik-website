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

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white p-8 shadow-soft transition hover:-translate-y-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-primary">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-8">
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