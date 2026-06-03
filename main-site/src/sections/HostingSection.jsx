import { motion } from "framer-motion"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const hostingFeatures = [
  "High Performance Hosting",
  "Free SSL Certificates",
  "Professional Email Hosting",
  "Domain Registration",
  "Daily Backups",
  "24/7 Technical Support",
]

function HostingSection() {
  return (
    <section id="hosting" className="bg-white py-24">
      <Container className="grid items-center gap-12 lg:gap-16 xl:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Hosting & Cloud Solutions"
            title="Reliable Infrastructure For Modern Businesses"
            description="From websites and business emails to enterprise cloud infrastructure, Zenvik Technologies provides secure, scalable, and performance-focused hosting solutions designed for growth."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {hostingFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-light px-5 py-4 font-medium text-slate-700"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href="https://portal.zenviktechnologies.com"
              variant="primary"
            >
              View Hosting Plans
            </Button>

            <Button
              href="#contact"
              variant="outline"
            >
              Request Consultation
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl justify-self-center xl:max-w-none"
        >
          <div className="rounded-[2rem] bg-primary p-8 text-white shadow-soft md:p-10">
            <div className="grid gap-6">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <h3 className="text-xl font-bold">99.9% Uptime</h3>
                <p className="mt-2 text-white/70">
                  Reliable infrastructure with enterprise-grade stability.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <h3 className="text-xl font-bold">Fast Deployment</h3>
                <p className="mt-2 text-white/70">
                  Quick setup for websites, emails, and hosting services.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <h3 className="text-xl font-bold">Secure Environment</h3>
                <p className="mt-2 text-white/70">
                  Security-first hosting with backups and protection layers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HostingSection
