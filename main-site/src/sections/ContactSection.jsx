import { motion } from "framer-motion"
import { useState } from "react"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-white py-16 lg:py-20">
      <Container>
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's Build Something Great Together"
          description="Have a question or ready to start a project? Our mission is to empower businesses through innovative technology and creative digital experiences that drive measurable growth."
        />

        <div className="mt-10 grid gap-6 lg:mt-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-3 xl:grid-cols-1"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-light p-5 shadow-soft">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Email</h3>
              <p className="mt-2 text-slate-600">
                <a
                  href="mailto:info@zenviktechnologies.com"
                  className="text-primary transition hover:text-gold"
                >
                  info@zenviktechnologies.com
                </a>
              </p>
            </div>

            <div className="h-full rounded-3xl border border-slate-200 bg-light p-5 shadow-soft">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Phone</h3>
              <p className="mt-2 text-slate-600">
                <a
                  href="tel:+254700000000"
                  className="text-primary transition hover:text-gold"
                >
                  +254 (0) 700 000 000
                </a>
              </p>
            </div>

            <div className="h-full rounded-3xl border border-slate-200 bg-light p-5 shadow-soft">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Location</h3>
              <p className="mt-2 text-slate-600">
                Nairobi, Kenya
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-light p-6 shadow-soft"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-primary">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-primary">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="hosting">Hosting & Cloud Solutions</option>
                  <option value="software">Custom Software Development</option>
                  <option value="websites">Website Development</option>
                  <option value="marketing">Digital Marketing & Branding</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-primary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <Button
                as="button"
                type="submit"
                variant="accent"
                className="w-full justify-center"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
