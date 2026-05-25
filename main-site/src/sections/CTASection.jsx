import { motion } from "framer-motion"
import Container from "../components/common/Container"
import Button from "../components/ui/Button"

function CTASection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-primary px-8 py-14 shadow-soft md:p-16"
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

            <div className="flex flex-col gap-4 lg:items-end">
              <Button
                href="https://portal.zenviktechnologies.com"
                variant="accent"
                className="w-full lg:w-auto"
              >
                Visit Client Portal
              </Button>

              <Button
                href="#contact"
                variant="light"
                className="w-full lg:w-auto"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection
