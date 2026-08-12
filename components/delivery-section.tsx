"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Composição baseada no modelo "steps.tsx" (Ark UI) enviado — indicadores
// circulares conectados por uma linha — reconstruída sem a dependência
// @ark-ui/react (seção informativa, não precisa de um wizard interativo) e
// usando exclusivamente cores, fonte, espaçamentos e border-radius que já
// existem no projeto. Nenhuma cor, sombra ou padrão novo foi introduzido.

import { UploadCloud, RefreshCw, Globe2, CheckCircle2 } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

const STEP_ICONS = [UploadCloud, RefreshCw, Globe2, CheckCircle2]

export default function DeliverySection() {
  const { t } = useTranslation()
  const steps = t.delivery.steps.map((label, i) => ({ label, icon: STEP_ICONS[i] }))

  return (
    <section className="bg-background px-4 py-24 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {t.delivery.title}
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          {t.delivery.description}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        {/* Mobile: timeline vertical (evita overflow horizontal) */}
        <div className="relative flex flex-col gap-8 md:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[22px] top-6 w-0.5 bg-primary/30"
          />
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-foreground">{step.label}</p>
              </div>
            )
          })}
        </div>

        {/* Desktop/tablet: linha horizontal, igual à composição do modelo enviado */}
        <div className="hidden md:flex md:items-start md:justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <div key={index} className="contents">
                <div className="flex flex-col items-center text-center md:w-32">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {step.label}
                  </p>
                </div>
                {!isLast && (
                  <div className="mt-[22px] h-0.5 flex-1 bg-primary/30" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
