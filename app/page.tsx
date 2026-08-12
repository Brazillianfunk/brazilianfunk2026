import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import DistributionSection from "@/components/distribution-section"
import PaymentSection from "@/components/payment-section"
import DeliverySection from "@/components/delivery-section"
import ToolsSection from "@/components/tools-section"
import SupportSection from "@/components/support-section"
import BlogSection from "@/components/blog-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RevealOnScroll>
        <DistributionSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <PaymentSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <DeliverySection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ToolsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <SupportSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <BlogSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <FaqSection />
      </RevealOnScroll>
      <Footer />
      {/* Próximas seções entram aqui */}
    </main>
  )
}
