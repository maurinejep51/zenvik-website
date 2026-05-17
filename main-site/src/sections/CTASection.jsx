import { motion } from "framer-motion"

function CTASection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2.5rem] bg-primary p-10 md:p-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Let’s Build Something Powerful
              </p>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Ready To Transform Your Business Through Technology?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                From hosting and websites to enterprise software and branding,
                Zenvik Technologies delivers scalable digital solutions built
                for modern businesses and ambitious brands.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <a
                href="https://portal.zenviktechnologies.com"
                className="w-full rounded-full bg-accent px-8 py-5 text-center text-lg font-semibold text-white transition hover:-translate-y-1 lg:w-auto"
              >
                Visit Client Portal
              </a>

              <a
                href="#contact"
                className="w-full rounded-full border border-white/20 px-8 py-5 text-center text-lg font-semibold text-white transition hover:bg-white hover:text-primary lg:w-auto"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection