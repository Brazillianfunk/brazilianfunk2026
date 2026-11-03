"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

// Card "Divisão de Royalties": uma faixa real do catálogo e quem recebe,
// no formato da tela de split da plataforma (referência: Symphonic
// SplitShare + Leads Data Table do 21st.dev). Ao aparecer na tela, as
// porcentagens contam de 0 até o valor, uma depois da outra, e o total fecha em 100%.
// Porcentagens de exemplo. Sem JS ou com "reduzir movimento": tudo preenchido.

const TRACK = { title: "A Hora É Essa", cover: "/lancamentos/lancamento-23.jpg" }

export function RoyaltySplitPanel() {
  const { t } = useTranslation()
  const m = t.tools.mock
  const rows = [
    { name: "Mc Lysa", role: m.artist, img: "/royalties/lysa.jpg", pct: 40 },
    { name: "MC Nito", role: m.feat, img: "/royalties/mc-nito.jpg", pct: 30 },
    { name: "DJ DN de Papucaia", role: m.production, img: "/royalties/dj-dn.jpg", pct: 30 },
  ]

  const ref = useRef<HTMLDivElement>(null)
  // null = valores finais (SSR, sem JS ou "reduzir movimento"); array = contagem em andamento
  const [vals, setVals] = useState<number[] | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight) return // já está visível ao carregar: fica no valor final
    setVals(rows.map(() => 0))
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const DUR = 900
        const STAGGER = 220
        const tick = (now: number) => {
          let running = false
          const next = rows.map((row, i) => {
            const p = Math.min(1, Math.max(0, (now - start - i * STAGGER) / DUR))
            if (p < 1) running = true
            return Math.round((1 - Math.pow(1 - p, 3)) * row.pct)
          })
          setVals(next)
          if (running) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const current = vals ?? rows.map((r) => r.pct)
  const total = current.reduce((sum, v) => sum + v, 0)

  return (
    <div ref={ref} aria-hidden="true" className="overflow-hidden rounded-2xl border border-border text-xs">
      <div className="flex items-center gap-3 border-b border-border bg-white/[0.03] p-3">
        <img src={TRACK.cover} alt="" className="h-10 w-10 flex-none rounded-md object-cover" />
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-foreground">{TRACK.title}</p>
          <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{m.autoSplit}</p>
        </div>
        <div className="ml-auto flex">
          {rows.map((r) => (
            <img key={r.img} src={r.img} alt="" className="-ml-2 h-6 w-6 rounded-full border-2 border-card object-cover" />
          ))}
        </div>
      </div>

      {rows.map((r, i) => {
        return (
          <div key={r.name} className="grid grid-cols-[28px_1fr_64px] items-center gap-3 border-b border-white/5 px-3 py-2.5">
            <img src={r.img} alt="" className="h-7 w-7 rounded-full object-cover" />
            <div className="min-w-0 leading-tight">
              <p className="truncate font-semibold text-foreground">{r.name}</p>
              <p className="text-[11px] text-muted-foreground">{r.role}</p>
            </div>
            <span
              className={cn(
                "rounded-lg border bg-background px-2 py-1.5 text-right font-bold tabular-nums text-foreground transition-colors duration-300",
                current[i] > 0 && current[i] < r.pct ? "border-white/40" : "border-white/15"
              )}
            >
              {current[i]}%
            </span>
          </div>
        )
      })}

      <div className="flex items-center justify-between px-3 py-2.5 text-muted-foreground">
        <span>{m.total}</span>
        <span className={cn("inline-flex items-center gap-1 font-bold tabular-nums", total === 100 ? "text-brand-lime" : "text-foreground")}>
          {total}%{total === 100 && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
        </span>
      </div>
    </div>
  )
}
