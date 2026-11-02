import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ReleaseWallHeroSection from "@/components/release-wall-hero-section"

// Página de prévia para comparar o novo topo. Não aparece no Google.
export const metadata: Metadata = { title: "Prévia do topo", robots: { index: false, follow: false } }

export default function PreviewTopo() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ReleaseWallHeroSection />
    </main>
  )
}
