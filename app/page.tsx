import Navbar from "@/components/navbar"
import ReleaseWallHeroSection from "@/components/release-wall-hero-section"
import DistributionSection from "@/components/distribution-section"
import PaymentSection from "@/components/payment-section"
import DeliverySection from "@/components/delivery-section"
import ToolsSection from "@/components/tools-section"
import SupportSection from "@/components/support-section"
import BlogSection from "@/components/blog-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ReleaseWallHeroSection />
      <DistributionSection />
      <PaymentSection />
      <DeliverySection />
      <ToolsSection />
      <SupportSection />
      <BlogSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
