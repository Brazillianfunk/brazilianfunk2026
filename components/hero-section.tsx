"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Pra ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------

import { AnimatedMarqueeHero } from "@/components/ui/hero"
import { useTranslation } from "@/lib/i18n/use-translation"

// Esteira de capas (primeiro plano) — as 12 originais, sem alteração.
const RELEASE_IMAGES = [
  "/lancamentos/lancamento-01.jpg",
  "/lancamentos/lancamento-02.jpg",
  "/lancamentos/lancamento-03.jpg",
  "/lancamentos/lancamento-04.jpg",
  "/lancamentos/lancamento-05.jpg",
  "/lancamentos/lancamento-06.jpg",
  "/lancamentos/lancamento-07.jpg",
  "/lancamentos/lancamento-08.jpg",
  "/lancamentos/lancamento-09.jpg",
  "/lancamentos/lancamento-10.jpg",
  "/lancamentos/lancamento-11.jpg",
  "/lancamentos/lancamento-12.jpg",
]

// Parede de fundo — as 29 capas (12 originais + 17 novas), só pra ter
// menos repetição na grade de atmosfera. Não mexe na esteira.
const WALL_IMAGES = [
  "/lancamentos/lancamento-01.jpg",
  "/lancamentos/lancamento-02.jpg",
  "/lancamentos/lancamento-03.jpg",
  "/lancamentos/lancamento-04.jpg",
  "/lancamentos/lancamento-05.jpg",
  "/lancamentos/lancamento-06.jpg",
  "/lancamentos/lancamento-07.jpg",
  "/lancamentos/lancamento-08.jpg",
  "/lancamentos/lancamento-09.jpg",
  "/lancamentos/lancamento-10.jpg",
  "/lancamentos/lancamento-11.jpg",
  "/lancamentos/lancamento-12.jpg",
  "/lancamentos/lancamento-13.jpg",
  "/lancamentos/lancamento-14.jpg",
  "/lancamentos/lancamento-15.jpg",
  "/lancamentos/lancamento-16.jpg",
  "/lancamentos/lancamento-17.jpg",
  "/lancamentos/lancamento-18.jpg",
  "/lancamentos/lancamento-19.jpg",
  "/lancamentos/lancamento-20.jpg",
  "/lancamentos/lancamento-21.jpg",
  "/lancamentos/lancamento-22.jpg",
  "/lancamentos/lancamento-23.jpg",
  "/lancamentos/lancamento-24.jpg",
  "/lancamentos/lancamento-25.jpg",
  "/lancamentos/lancamento-26.jpg",
  "/lancamentos/lancamento-27.jpg",
  "/lancamentos/lancamento-28.jpg",
  "/lancamentos/lancamento-29.jpg",
]

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <AnimatedMarqueeHero
      titleLine1={t.hero.titleLine1}
      titleLine2={t.hero.titleLine2}
      description={t.hero.description}
      ctaText={t.hero.cta}
      images={RELEASE_IMAGES}
      wallImages={WALL_IMAGES}
    />
  )
}
