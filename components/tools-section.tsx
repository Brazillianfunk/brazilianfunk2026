"use client"

// Ferramentas.
//
// Referência no 21st.dev: "Feature Section with Bento Grid" (tommyjepsen) e
// "Features 8" (meschacirung): cards de tamanhos diferentes, os maiores com
// um pedacinho visual do produto. As barras do gráfico crescem e a barra de
// royalties se preenche conforme a seção entra na tela (só CSS).

import { BarChart3, Barcode, FileBarChart, Link2, Plus, Split } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { SectionBadge } from "@/components/ui/section-badge"
import { cn } from "@/lib/utils"

const ICONS = [BarChart3, Split, FileBarChart, Link2, Barcode, Plus]
const BARS = [30, 44, 38, 56, 50, 68, 62, 80, 72, 92]

const card = "group relative overflow-hidden rounded-[24px] border border-border bg-card transition-colors duration-300 hover:border-white/25"

export default function ToolsSection() {
  const { t, locale } = useTranslation()
  const streams = new Intl.NumberFormat({ pt: "pt-BR", en: "en-US", es: "es-ES" }[locale] ?? "pt-BR", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(1240000)
  const items = t.tools.items

  return (
    <section id="ferramentas" className="relative scroll-mt-24 overflow-hidden bg-background px-4 py-24 md:py-32">
      {/* grade de pontos bem sutil ao fundo */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <SectionBadge>{t.tools.badge}</SectionBadge>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.tools.title}</h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{t.tools.description}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Analytics: card grande com gráfico */}
          <article className={cn(card, "reveal-scale flex min-h-[320px] flex-col justify-between p-8 lg:col-span-2")}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.tools.mock.streams}</p>
                <p className="mt-1 flex items-baseline gap-3">
                  <span className="text-4xl font-bold tabular-nums tracking-tight text-foreground">{streams}</span>
                  <span className="text-sm font-semibold tabular-nums text-brand-lime">+18%</span>
                </p>
              </div>
              <span className="whitespace-nowrap rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t.tools.mock.last28}</span>
            </div>
            <div aria-hidden="true" className="mt-6 flex h-32 items-end gap-2">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className={cn("grow-bar flex-1 rounded-t-md transition-colors duration-300", i === BARS.length - 1 ? "bg-primary" : "bg-white/15 group-hover:bg-white/25")}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-6">
              <BarChart3 className="h-5 w-5 text-foreground" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{items[0].title}</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">{items[0].desc}</p>
            </div>
          </article>

          {/* Royalties: barra dividida */}
          <article className={cn(card, "reveal-scale flex min-h-[320px] flex-col justify-between p-8")}>
            <div aria-hidden="true">
              <div className="grow-x flex h-3 overflow-hidden rounded-full">
                <div className="w-1/2 bg-primary" />
                <div className="w-[30%] bg-white/60" />
                <div className="w-[20%] bg-white/25" />
              </div>
              <div className="mt-4 grid grid-cols-3 text-xs text-muted-foreground">
                <span>{t.tools.mock.artist} 50%</span>
                <span className="text-center">{t.tools.mock.producer} 30%</span>
                <span className="text-right">{t.tools.mock.label} 20%</span>
              </div>
            </div>
            <div>
              <Split className="h-5 w-5 text-foreground" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{items[1].title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{items[1].desc}</p>
            </div>
          </article>

          {/* Relatórios, Smart Link, Códigos */}
          {[2, 3, 4].map((i) => {
            const Icon = ICONS[i]
            return (
              <article key={i} className={cn(card, "reveal-scale p-8")}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-transparent group-hover:bg-foreground group-hover:text-background">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-10 text-lg font-semibold text-foreground">{items[i].title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{items[i].desc}</p>
              </article>
            )
          })}

          {/* +Recursos */}
          <article className={cn(card, "reveal-scale flex items-center justify-between gap-6 p-8 lg:col-span-3")}>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{items[5].title}</h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">{items[5].desc}</p>
            </div>
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-90">
              <Plus className="h-5 w-5" />
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}
