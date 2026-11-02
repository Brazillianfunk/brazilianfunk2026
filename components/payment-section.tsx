"use client"

// Pagamentos.
//
// Referência: Velto (Fintech App Concept, indicado no Awwwards). Ideias
// aproveitadas: o produto mostrado dentro de um celular, saldo grande com os
// centavos menores, poucas ações bem claras e uma lista de movimentações.
// Cores e componentes são os do site; os valores são ilustrativos.
// Moeda: dólar (os artistas recebem os ganhos em USD).
//
// O celular é interativo: dá para escolher Pix ou PayPal no seletor.

import { useState } from "react"
import { ArrowDownLeft, FileText } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PAYPAL_ICON = "/paypal-icon.png"
const PIX_ICON = "/pix-icon.png"

const LOCALE_FORMAT = { pt: "pt-BR", en: "en-US", es: "es-ES" } as const

// Ganhos de exemplo, só para ilustrar o extrato.
const SAMPLE_EARNINGS = [
  { platform: "Spotify", value: 412.3, color: "#1ED760" },
  { platform: "YouTube Music", value: 186.9, color: "#FF0033" },
  { platform: "TikTok", value: 98.4, color: "#25F4EE" },
]

function useMoney() {
  const { locale } = useTranslation()
  const fmt = new Intl.NumberFormat(LOCALE_FORMAT[locale] ?? "pt-BR", { style: "currency", currency: "USD" })
  return {
    format: (v: number) => fmt.format(v),
    // Separa a parte inteira dos centavos, para mostrar os centavos menores.
    split: (v: number) => {
      const parts = fmt.formatToParts(v)
      const i = parts.findIndex((p) => p.type === "decimal")
      const join = (ps: Intl.NumberFormatPart[]) => ps.map((p) => p.value).join("")
      return i === -1 ? [join(parts), ""] : [join(parts.slice(0, i)).trim(), join(parts.slice(i))]
    },
  }
}

export default function PaymentSection() {
  const { t } = useTranslation()
  const money = useMoney()
  const [method, setMethod] = useState<"pix" | "paypal">("pix")
  const [whole, cents] = money.split(1000)

  const methods = [
    { id: "pix" as const, name: "Pix", meta: "(92) 99999-9999", icon: PIX_ICON },
    { id: "paypal" as const, name: "PayPal", meta: "artista@email.com", icon: PAYPAL_ICON },
  ]
  const selected = methods.find((m) => m.id === method)!

  const featureIcons = [
    <img key="pix" src={PIX_ICON} alt="" className="h-5 w-5 object-contain" />,
    <img key="paypal" src={PAYPAL_ICON} alt="" className="h-5 w-5 object-contain" />,
    <FileText key="doc" className="h-5 w-5 text-background" strokeWidth={2} />,
  ]

  return (
    <section id="pagamentos" className="scroll-mt-24 bg-background px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-16">
        {/* Texto */}
        <div>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-lime">
            {t.payment.overline}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.payment.title}</h2>
          <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">{t.payment.description}</p>

          <ul className="mt-10 max-w-md divide-y divide-border border-y border-border">
            {t.payment.features.map((f, i) => (
              <li key={f.title} className="flex items-start gap-4 py-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-foreground">{featureIcons[i]}</span>
                <div>
                  <p className="font-semibold text-foreground">{f.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Painel com o celular */}
        <div className="relative">
          <div className="relative flex h-[600px] justify-center overflow-hidden rounded-[32px] border border-border bg-card pt-12 md:h-[640px]">
            {/* grade sutil de fundo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
            />

            {/* Celular (sangra pela borda de baixo do painel) */}
            <div className="relative w-[300px] flex-none rounded-[48px] bg-[#1a1a1a] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10 sm:w-[320px]">
              <div className="h-[660px] overflow-hidden rounded-[38px] bg-[#0b0b0b] px-5 pt-3">
                {/* barra de status */}
                <div className="flex items-center justify-between px-1 text-[11px] font-semibold text-foreground">
                  <span>9:41</span>
                  <span aria-hidden="true" className="h-[22px] w-[84px] rounded-full bg-black" />
                  <span aria-hidden="true" className="flex gap-1">
                    <i className="h-2 w-3 rounded-[2px] bg-foreground/80" />
                    <i className="h-2 w-2 rounded-full bg-foreground/80" />
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <img src="/brazilian-funk-logo.png" alt="Brazilian Funk" className="h-3.5 w-auto" />
                  <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-foreground">MC</span>
                </div>

                {/* saldo */}
                <div className="mt-5 rounded-3xl border border-border bg-[#141414] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{t.payment.balanceLabel}</p>
                  <p className="mt-2 font-bold tabular-nums tracking-tight text-foreground">
                    <span className="text-[40px] leading-none">{whole}</span>
                    <span className="text-xl text-muted-foreground">{cents}</span>
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{t.payment.updatedNow}</p>

                  <p className="mt-5 text-[11px] font-medium text-muted-foreground">{t.payment.sendTo}</p>
                  <div role="radiogroup" aria-label={t.payment.chooseMethod} className="mt-2 grid grid-cols-2 gap-1 rounded-full bg-secondary p-1">
                    {methods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        role="radio"
                        aria-checked={method === m.id}
                        onClick={() => setMethod(m.id)}
                        className={cn(
                          "flex h-9 items-center justify-center gap-2 rounded-full text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          method === m.id ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <img src={m.icon} alt="" className="h-4 w-4 object-contain" />
                        {m.name}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 truncate text-center text-[11px] text-muted-foreground">{selected.meta}</p>

                  <Button className="mt-4 w-full" size="md" tabIndex={-1}>
                    {t.payment.withdraw}
                  </Button>
                </div>

                {/* últimos ganhos */}
                <p className="mt-6 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{t.payment.recentLabel}</p>
                <ul className="mt-2 divide-y divide-border">
                  {SAMPLE_EARNINGS.map((e) => (
                    <li key={e.platform} className="flex items-center gap-3 py-3">
                      <span aria-hidden="true" className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-secondary">
                        <i className="h-2.5 w-2.5 rounded-full" style={{ background: e.color }} />
                      </span>
                      <span className="flex-1 text-[13px] font-medium text-foreground">{e.platform}</span>
                      <span className="text-[13px] font-semibold tabular-nums text-brand-lime">+ {money.format(e.value)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* notificação de Pix, fora do painel para não ser cortada */}
          <div className="absolute -top-7 right-3 z-10 flex w-[205px] items-center gap-3 rounded-2xl bg-foreground p-3 text-background shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)] md:-left-16 md:right-auto md:top-56">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-lime text-brand-lime-foreground">
              <ArrowDownLeft className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold">{t.payment.notifTitle}</p>
              <p className="text-base font-bold tabular-nums">{money.format(850)}</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">{t.payment.illustrative}</p>
        </div>
      </div>
    </section>
  )
}
