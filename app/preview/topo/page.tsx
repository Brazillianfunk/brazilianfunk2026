import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ReleaseWallHeroSection from "@/components/release-wall-hero-section"
import type { PaletteName } from "@/components/ui/release-wall-hero"

const CORES: PaletteName[] = ["noite", "preto", "esmeralda", "verde", "azul"]

// Página de prévia para comparar o novo topo. Não aparece no Google.
// Troque a cor com ?cor=noite | preto | esmeralda | verde | azul
export const dynamic = "force-dynamic"

export const metadata: Metadata = { title: "Prévia do topo", robots: { index: false, follow: false } }

export default function PreviewTopo({ searchParams }: { searchParams: { cor?: string } }) {
  const cor = (CORES.includes(searchParams.cor as PaletteName) ? searchParams.cor : "noite") as PaletteName
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ReleaseWallHeroSection palette={cor} />
    </main>
  )
}
