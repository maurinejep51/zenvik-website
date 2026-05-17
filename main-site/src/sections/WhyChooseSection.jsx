import { motion } from "framer-motion"

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
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-black leading-tight text-primary md:text-5xl">
            Built For Businesses That Want Technology To Work Better
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Zenvik Technologies combines infrastructure, software, websites,
            branding, marketing, and ICT support under one professional
            technology partner.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-light p-6 shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-primary">{reason}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection