import { motion } from "framer-motion"
import { useState } from "react"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const contactDetails = [
  {
    title: "Email",
    value: "info@zenviktechnologies.com",
    href: "mailto:info@zenviktechnologies.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Phone",
    value: "+254 717 990 272",
    href: "tel:+254717990272",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    title: "Location",
    value: "Nairobi, Kenya",
    icon: (
      <>
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
      </>
    ),
  },
]

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
    <section id="contact" className="relative isolate overflow-hidden bg-white py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[24rem]" aria-hidden="true">
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 380"
          preserveAspectRatio="none"
        >
          <g
            fill="none"
            stroke="#043a7e"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.055"
          >
            <path d="M-40 90 C170 90 235 178 405 178 S655 100 790 145 S1015 240 1240 155" />
            <path d="M40 285 C210 230 320 250 445 205 S665 135 790 188 S985 285 1165 240" />
            <path d="M190 45 C300 110 345 145 405 178" />
            <path d="M790 145 C845 105 900 80 980 62" />
          </g>
          <g fill="#dfa408" opacity="0.12">
            <circle cx="405" cy="178" r="3" />
            <circle cx="790" cy="145" r="2.5" />
            <circle cx="445" cy="205" r="2.5" />
            <circle cx="790" cy="188" r="3" />
            <circle cx="980" cy="62" r="2" />
          </g>
        </svg>
      </div>

      <Container className="relative">
        <div className="relative">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Let's Discuss Your Project"
            description="Tell us about your goals, requirements, or ideas, and we'll help you identify the right path forward."
          />
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-1">
              {contactDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-light px-4 py-3.5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {detail.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-primary">{detail.title}</h3>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-0.5 block break-words text-sm text-slate-600 transition hover:text-gold"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-slate-600">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary px-6 py-6 text-white shadow-[0_14px_36px_rgba(4,58,126,0.16)]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-accent/20" aria-hidden="true" />
              <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="relative text-xl font-bold">Already a Client?</h3>
              <p className="relative mt-2 max-w-md text-sm leading-relaxed text-white/75">
                Manage your services and support through the client portal.
              </p>
              <a
                href="https://portal.zenviktechnologies.com/"
                className="relative mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-[#0f172a] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-primary"
              >
                Open Client Portal
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-light p-6 shadow-soft sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <option value="software-development">Software Development</option>
                  <option value="website-development">Website Development</option>
                  <option value="hosting-cloud">Hosting & Cloud</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="marketing-branding">Marketing & Branding</option>
                  <option value="ict-services">ICT Services</option>
                  <option value="other">Other</option>
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
