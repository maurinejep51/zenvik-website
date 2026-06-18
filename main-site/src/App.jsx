import MainLayout from "./layouts/MainLayout"
import HeroSection from "./sections/HeroSection"
import PartnersTechnologiesSection from "./sections/PartnersTechnologiesSection"
import ServicesSection from "./sections/ServicesSection"
import WhyChooseSection from "./sections/WhyChooseSection"
import PortfolioSection from "./sections/PortfolioSection"
import ContactSection from "./sections/ContactSection"
import BlogPreviewSection from "./sections/BlogPreviewSection"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"

function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, "") : "/"

  const content =
    pathname === "/privacy-policy"
      ? <PrivacyPolicy />
      : pathname === "/terms-and-conditions"
      ? <TermsAndConditions />
      : (
        <main className="min-h-screen bg-white text-dark">
          <HeroSection />
          <PartnersTechnologiesSection />
          <ServicesSection />
          <WhyChooseSection />
          <PortfolioSection />
          <BlogPreviewSection />
          <ContactSection />
        </main>
      )

  return <MainLayout>{content}</MainLayout>
}

export default App
