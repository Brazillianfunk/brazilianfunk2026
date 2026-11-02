"use client"

import { ReleaseWallHero } from "@/components/ui/release-wall-hero"
import { useTranslation } from "@/lib/i18n/use-translation"

const RELEASES = Array.from({ length: 29 }, (_, i) => ({
  cover: `/lancamentos/lancamento-${String(i + 1).padStart(2, "0")}.jpg`,
}))

export default function ReleaseWallHeroSection() {
  const { t } = useTranslation()
  return (
    <ReleaseWallHero
      releases={RELEASES}
      eyebrow={t.hero.titleLine1}
      title={t.hero.titleLine2.replace(/ do /i, "\ndo ")}
      intro={t.hero.description}
      cta={{ label: t.hero.cta, href: "/solicitar-acesso" }}
      labels={{ pause: t.hero.pause, play: t.hero.play, wall: t.hero.wallLabel }}
    />
  )
}
