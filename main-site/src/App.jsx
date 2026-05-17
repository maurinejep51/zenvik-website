import MainLayout from "./layouts/MainLayout"
import HeroSection from "./sections/HeroSection"
import ServicesSection from "./sections/ServicesSection"
import HostingSection from "./sections/HostingSection"
import SoftwareSection from "./sections/SoftwareSection"
import MarketingSection from "./sections/MarketingSection"
import WhyChooseSection from "./sections/WhyChooseSection"
import CTASection from "./sections/CTASection"

function App() {
  return (
    <MainLayout>
      <main className="min-h-screen bg-white text-dark">
        <HeroSection />
        <ServicesSection />
        <HostingSection />
        <SoftwareSection />
        <MarketingSection />
        <WhyChooseSection />
        <CTASection />
      </main>
    </MainLayout>
  )
}

export default App