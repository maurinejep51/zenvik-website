import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const faqs = [
  {
    question: "What hosting solutions do you offer?",
    answer:
      "We provide comprehensive hosting solutions including web hosting, cloud infrastructure, email hosting, and dedicated server options. Each plan is customizable to meet your specific business requirements with 24/7 support included.",
  },
  {
    question: "How long does custom software development typically take?",
    answer:
      "Project timelines vary depending on complexity and scope. Simple projects typically take 4-6 weeks, while larger enterprise applications may require 3-6 months. We'll provide a detailed timeline during the consultation phase.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes, we offer comprehensive post-deployment support including maintenance, updates, bug fixes, and performance optimization. Our support team is available 24/7 to assist with any technical issues.",
  },
  {
    question: "What is your uptime guarantee?",
    answer:
      "We guarantee 99.9% uptime on all our hosting packages backed by our Service Level Agreement. In the rare event of downtime exceeding this threshold, we provide service credits.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can modify your plan at any time. Whether you need more resources as your business grows or want to streamline your services, we'll make the transition smooth with minimal disruption.",
  },
]

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="bg-white py-24">
      <Container>
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our hosting services, software development, and support offerings."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between bg-white px-5 py-5 text-left transition-colors duration-300 hover:bg-light md:px-8 md:py-6"
              >
                <h3 className="text-lg font-bold text-primary">
                  {faq.question}
                </h3>
                <motion.svg
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 h-5 w-5 flex-shrink-0 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200 bg-light"
                  >
                    <div className="px-5 py-5 leading-relaxed text-slate-700 md:px-8 md:py-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-6 rounded-3xl bg-light px-8 py-16 text-center md:px-12"
        >
          <p className="text-4xl font-black text-primary leading-tight">
            Have More Questions?
          </p>
          <p className="max-w-2xl text-lg text-slate-600">
            Can't find the answer you're looking for? Our support team is ready to help. Contact us today.
          </p>
          <Button
            href="#contact"
            variant="primary"
          >
            Contact Support
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default FAQSection
