import { motion } from "framer-motion"
import Container from "../components/common/Container"
import SectionHeader from "../components/common/SectionHeader"
import Button from "../components/ui/Button"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and websites",
    price: "Custom",
    features: [
      "5 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Email Hosting (10 accounts)",
      "24/7 Support",
    ],
    recommended: false,
  },
  {
    name: "Professional",
    description: "For growing businesses and applications",
    price: "Custom",
    features: [
      "50 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Email Hosting (50 accounts)",
      "Advanced Security",
      "Daily Backups",
      "24/7 Priority Support",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations and custom needs",
    price: "Custom",
    features: [
      "Unlimited Storage",
      "Unlimited Bandwidth",
      "Custom Domains",
      "Unlimited Email Hosting",
      "Dedicated Support",
      "Custom Infrastructure",
      "SLA Guarantee",
    ],
    recommended: false,
  },
]

function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="pricing" className="bg-light py-24">
      <Container>
        <SectionHeader
          eyebrow="Pricing Plans"
          title="Flexible Hosting & Service Packages"
          description="Choose the right plan for your business. All plans include professional support and enterprise-grade security. Available in multiple currencies for regional markets."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition duration-300 ${
                plan.recommended
                  ? "border-gold bg-white shadow-lg ring-2 ring-gold"
                  : "border-slate-200 bg-white shadow-soft hover:shadow-lg"
              } ${!plan.recommended && "hover:-translate-y-1"}`}
            >
              {plan.recommended && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/10 to-primary/5" />
              )}

              <div className={`flex h-full flex-col p-8 ${plan.recommended ? "bg-white/95 backdrop-blur-sm" : ""}`}>
                {plan.recommended && (
                  <div className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1 text-sm font-semibold text-gold">
                    Recommended
                  </div>
                )}

                <h3 className="text-2xl font-bold text-primary">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-black text-primary">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="ml-2 text-slate-600">/month</span>
                  )}
                </div>

                {plan.price === "Custom" && (
                  <p className="mt-2 text-sm text-gold font-semibold">
                    Contact us for custom pricing
                  </p>
                )}

                <div className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button
                    href="https://portal.zenviktechnologies.com"
                    variant={plan.recommended ? "accent" : "outline"}
                    className="w-full justify-center"
                  >
                    {plan.recommended ? "Get Started" : "Learn More"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-6 rounded-3xl bg-primary px-8 py-16 text-center text-white md:px-12"
        >
          <p className="text-4xl font-black leading-tight">
            Need a Custom Solution?
          </p>
          <p className="max-w-2xl text-lg text-white/80">
            Our enterprise packages can be customized to meet your unique business requirements.
          </p>
          <Button
            href="#contact"
            variant="accent"
          >
            Contact Our Sales Team
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default PricingSection
