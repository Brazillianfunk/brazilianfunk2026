"use client"

import { ReleaseWallHero, type PaletteName } from "@/components/ui/release-wall-hero"
import { useTranslation } from "@/lib/i18n/use-translation"

const RELEASES = Array.from({ length: 29 }, (_, i) => ({
  cover: `/lancamentos/lancamento-${String(i + 1).padStart(2, "0")}.jpg`,
}))

export default function ReleaseWallHeroSection({ palette }: { palette?: PaletteName }) {
  const { t } = useTranslation()
  return (
    <ReleaseWallHero
      releases={RELEASES}
      eyebrow={t.hero.titleLine1}
      title={t.hero.titleLine2.replace(/ do /i, "\ndo ")}
      intro={t.hero.description}
      cta={{ label: t.hero.cta, href: "/solicitar-acesso" }}
      palette={palette}
      labels={{ wall: t.hero.wallLabel }}
    />
  )
}
