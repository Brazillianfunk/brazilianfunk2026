"use client"

import { ScrollTimeline } from "@/components/ui/scroll-timeline"
import { useTranslation } from "@/lib/i18n/use-translation"
import { SectionBadge } from "@/components/ui/section-badge"

// Entrega: as quatro etapas do envio até as lojas, numa linha do tempo que
// se desenha conforme a pessoa rola a página.
export default function DeliverySection() {
  const { t } = useTranslation()
  const steps = t.delivery.steps.map((title, i) => ({
    id: String(i + 1),
    badge: `${t.delivery.stepLabel} ${i + 1}`,
    title,
    description: t.delivery.stepDescriptions[i],
  }))

  return (
    <section className="bg-background px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <SectionBadge>{t.delivery.badge}</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.delivery.title}</h2>
          </div>
          <p className="max-w-sm text-base text-muted-foreground md:text-lg">{t.delivery.description}</p>
        </div>
      </div>

      <ScrollTimeline steps={steps} className="mx-auto mt-16 max-w-4xl md:mt-20" />
    </section>
  )
}
