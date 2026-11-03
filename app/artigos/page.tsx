import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SectionBadge } from "@/components/ui/section-badge"
import { ArticlesIndex } from "@/components/artigos/articles-index"

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Guias para artistas, DJs e gravadoras de funk: lançamentos, Spotify e outras plataformas, royalties e carreira.",
  alternates: { canonical: "/artigos" },
}

export default function ArtigosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="px-4 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <SectionBadge>Artigos</SectionBadge>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Guias para quem lança funk
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Lançamentos, Spotify e outras plataformas, royalties e carreira, explicados de forma direta.
          </p>
          <ArticlesIndex />
        </div>
      </section>
      <Footer />
    </main>
  )
}
