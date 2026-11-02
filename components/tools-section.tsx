"use client"

// Ferramentas.
//
// Referência no 21st.dev: "Feature Tab Switcher" (feature-11). À esquerda,
// a lista das ferramentas; ao escolher uma, o painel da direita mostra uma
// prévia da interface daquela ferramenta. Mesmo painel (cartão escuro com
// borda) usado em Pagamentos, para as seções conversarem entre si.

import { useState } from "react"
import { BarChart3, Barcode, Check, FileBarChart, Link2, Plus, Split } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { SectionBadge } from "@/components/ui/section-badge"
import { cn } from "@/lib/utils"

const TOOL_ICONS = [BarChart3, Split, FileBarChart, Link2, Barcode, Plus]

type Mock = ReturnType<typeof useTranslation>["t"]["tools"]["mock"]

function AnalyticsMock({ m }: { m: Mock }) {
  const bars = [38, 52, 46, 61, 58, 72, 66, 80, 74, 88, 84, 96]
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{m.streams}</p>
          <p className="mt-1 text-3xl font-bold tabular-nums text-foreground">1,24 mi</p>
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{m.last28}</span>
      </div>
      <div className="mt-auto flex h-40 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className={cn("flex-1 rounded-t-md", i === bars.length - 1 ? "bg-primary" : "bg-white/15")} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">{m.listeners}</span>
        <span className="font-semibold tabular-nums text-foreground">
          312 mil <span className="text-brand-lime">+18%</span>
        </span>
      </div>
    </div>
  )
}

function RoyaltiesMock({ m }: { m: Mock }) {
  const rows = [
    { name: m.artist, pct: 50, color: "bg-primary" },
    { name: m.producer, pct: 30, color: "bg-white/60" },
    { name: m.label, pct: 20, color: "bg-white/25" },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <div className="flex h-3 overflow-hidden rounded-full">
        {rows.map((r) => (
          <div key={r.name} className={r.color} style={{ width: `${r.pct}%` }} />
        ))}
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 py-4">
            <span className={cn("h-2.5 w-2.5 rounded-full", r.color)} />
            <span className="flex-1 text-sm font-medium text-foreground">{r.name}</span>
            <span className="text-sm font-semibold tabular-nums text-foreground">{r.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ReportsMock({ m }: { m: Mock }) {
  const rows = [
    { region: "Brasil", pct: 62 },
    { region: "Portugal", pct: 14 },
    { region: "Estados Unidos", pct: 9 },
    { region: "Angola", pct: 6 },
    { region: "Outros", pct: 9 },
  ]
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex justify-between border-b border-border pb-3 text-xs uppercase tracking-wide text-muted-foreground">
        <span>{m.region}</span>
        <span>{m.share}</span>
      </div>
      <ul>
        {rows.map((r) => (
          <li key={r.region} className="grid grid-cols-[1fr_120px_44px] items-center gap-3 border-b border-border py-3.5 text-sm">
            <span className="font-medium text-foreground">{r.region}</span>
            <span className="h-1.5 rounded-full bg-white/10">
              <span className="block h-1.5 rounded-full bg-primary" style={{ width: `${r.pct}%` }} />
            </span>
            <span className="text-right font-semibold tabular-nums text-foreground">{r.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SmartLinkMock({ m }: { m: Mock }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-[260px] rounded-3xl border border-border bg-background p-4">
        <img src="/lancamentos/lancamento-04.jpg" alt="" className="aspect-square w-full rounded-2xl object-cover" />
        <p className="mt-3 font-bold text-foreground">Sentadinha Muito Diferente</p>
        <p className="text-xs text-muted-foreground">Dyamante DJ</p>
        <div className="mt-4 grid gap-2">
          <span className="flex h-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{m.presave}</span>
          <span className="flex h-10 items-center justify-center rounded-full border border-white/25 text-sm font-semibold text-foreground">{m.listenNow}</span>
        </div>
        <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">bfunk.co/sentadinha</p>
      </div>
    </div>
  )
}

function CodesMock({ m }: { m: Mock }) {
  const codes = [
    { label: "ISRC", value: "BR-BFK-26-00042" },
    { label: "UPC", value: "0 198765 432109" },
  ]
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      {codes.map((c) => (
        <div key={c.label} className="rounded-2xl border border-border bg-background p-5">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
          <p className="mt-2 font-mono text-xl font-medium tracking-wide text-foreground">{c.value}</p>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-brand-lime">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
            {m.generated}
          </p>
        </div>
      ))}
    </div>
  )
}

function MoreMock({ m }: { m: Mock }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <div className="grid grid-cols-3 gap-3 opacity-80">
        {TOOL_ICONS.slice(0, 5).map((Icon, i) => (
          <span key={i} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-foreground/70">
            <Icon className="h-6 w-6" />
          </span>
        ))}
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Plus className="h-6 w-6" />
        </span>
      </div>
      <p className="max-w-[220px] text-lg font-semibold text-foreground">{m.more}</p>
    </div>
  )
}

const MOCKS = [AnalyticsMock, RoyaltiesMock, ReportsMock, SmartLinkMock, CodesMock, MoreMock]

export default function ToolsSection() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const Panel = MOCKS[active]

  return (
    <section id="ferramentas" className="scroll-mt-24 bg-background px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <SectionBadge>{t.tools.badge}</SectionBadge>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.tools.title}</h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{t.tools.description}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10">
          <div role="tablist" aria-label={t.tools.badge} className="divide-y divide-border border-y border-border">
            {t.tools.items.map((tool, i) => {
              const Icon = TOOL_ICONS[i]
              const isActive = i === active
              return (
                <button
                  key={tool.title}
                  type="button"
                  role="tab"
                  id={`tool-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="tool-panel"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "flex w-full items-start gap-4 px-2 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 flex-none items-center justify-center rounded-lg border transition-colors",
                      isActive ? "border-transparent bg-foreground text-background" : "border-border text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-semibold">{tool.title}</span>
                    <span className={cn("mt-1 block text-sm leading-relaxed", isActive ? "text-muted-foreground" : "hidden md:block md:text-muted-foreground/70")}>
                      {tool.desc}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="md:sticky md:top-28 md:self-start">
            <div
              id="tool-panel"
              role="tabpanel"
              aria-labelledby={`tool-tab-${active}`}
              className="relative h-[420px] overflow-hidden rounded-[32px] border border-border bg-card p-8"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
              />
              <div key={active} className="relative h-full animate-in fade-in duration-300">
                <Panel m={t.tools.mock} />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t.tools.mock.illustrative}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
