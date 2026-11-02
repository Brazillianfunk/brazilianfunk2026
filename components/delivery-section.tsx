"use client"

import { ScrollTimeline } from "@/components/ui/scroll-timeline"
import { useTranslation } from "@/lib/i18n/use-translation"

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
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.delivery.title}</h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{t.delivery.description}</p>
      </div>

      <ScrollTimeline steps={steps} className="mx-auto mt-16 max-w-4xl md:mt-20" />
    </section>
  )
}
