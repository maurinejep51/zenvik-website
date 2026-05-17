import MainLayout from "./layouts/MainLayout"
import HeroSection from "./sections/HeroSection"
import ServicesSection from "./sections/ServicesSection"
import HostingSection from "./sections/HostingSection"
import SoftwareSection from "./sections/SoftwareSection"
import MarketingSection from "./sections/MarketingSection"
import WhyChooseSection from "./sections/WhyChooseSection"

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
      </main>
    </MainLayout>
  )
}

export default App