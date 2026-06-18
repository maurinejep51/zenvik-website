import { motion } from "framer-motion"
import Container from "../components/common/Container"

const reasons = [
  "Full-service ICT partner",
  "Hosting-first digital infrastructure",
  "Custom software capability",
  "Business-focused solutions",
  "Scalable modern technology",
  "Reliable support and guidance",
]

function WhyChooseSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-black leading-tight text-primary md:text-5xl">
              Built For Businesses That Want Technology To Work Better
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Zenvik Technologies combines infrastructure, software, websites,
              branding, marketing, and ICT support under one professional
              technology partner.
            </p>
            <p className="mt-3 text-sm font-medium text-slate-500">
              Local insight, global standards.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full rounded-3xl border border-slate-200 bg-light p-5 shadow-soft"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-primary">{reason}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseSection
