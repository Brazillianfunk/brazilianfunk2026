"use client"

import { WavyRibbon } from "@/components/ui/wavy-ribbon"
import { useTranslation } from "@/lib/i18n/use-translation"

// Faixa ondulada entre o topo e a seção de Distribuição. Sobe um pouco por
// cima do fim do topo (margem negativa) para costurar as duas seções.
export default function SectionRibbon() {
  const { t } = useTranslation()
  return (
    <div className="pointer-events-none relative z-10 -mt-6 md:-mt-10">
      <WavyRibbon text={t.distribution.ribbon} />
    </div>
  )
}
