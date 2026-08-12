"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------

import { LogoCarousel, type Logo } from "@/components/ui/logo-carousel"
import { useTranslation } from "@/lib/i18n/use-translation"

// Catálogo de plataformas — nomes escritos (wordmark), com a cor oficial de
// cada marca usada apenas no glow sutil por trás do texto.
const platformLogos: Logo[] = [
  { name: "Spotify", id: 1, color: "#1ED760" },
  { name: "Apple Music", id: 2, color: "#FA243C" },
  { name: "TikTok", id: 3, color: "#049629" },
  { name: "Amazon Music", id: 4, color: "#049629" },
  { name: "Deezer", id: 5, color: "#A238FF" },
  { name: "Instagram", id: 6, color: "#FF0069" },
  { name: "YouTube Music", id: 7, color: "#FF0000" },
  { name: "SoundCloud", id: 8, color: "#FF5500" },
  { name: "TIDAL", id: 9, color: "#049629" },
  { name: "iHeartRadio", id: 10, color: "#C6002B" },
  { name: "Pandora", id: 11, color: "#224099" },
  { name: "Shazam", id: 12, color: "#0088FF" },
]

export default function DistributionSection() {
  const { t } = useTranslation()
  return (
    <section id="distribuicao" className="relative overflow-hidden bg-background px-4 py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {t.distribution.badge}
        </span>

        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {t.distribution.title}
        </h2>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          {t.distribution.description}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <LogoCarousel columnCount={4} logos={platformLogos} />
      </div>
    </section>
  )
}
