"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Fiel ao modelo "features-4.tsx" enviado: título + parágrafo centralizados,
// e um grid dividido por linhas finas (divide-x divide-y border) — sem
// cards com fundo colorido, sem destaque verde, sem sombra. Ícones e texto
// na cor padrão do tema (foreground/muted-foreground), igual ao original.
//
// O briefing trouxe só os nomes das 5 ferramentas — os textos de descrição
// de cada item foram inferidos a partir do nome de cada recurso. Fácil de
// ajustar se quiser outro texto.

import { BarChart3, Split, FileBarChart, Link2, Barcode, Settings } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

const TOOL_ICONS = [BarChart3, Split, FileBarChart, Link2, Barcode, Settings]

export default function ToolsSection() {
  const { t } = useTranslation()
  const tools = t.tools.items.map((item, i) => ({ ...item, icon: TOOL_ICONS[i] }))

  return (
    <section id="ferramentas" className="bg-background py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-8">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.tools.title}
          </h2>
          <p className="text-muted-foreground">
            {t.tools.description}
          </p>
        </div>

        <div className="relative mx-auto grid max-w-2xl divide-x divide-y divide-border border border-border bg-[#1c1c1c] *:p-12 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <tool.icon className="size-4 text-foreground" />
                <h3 className="text-sm font-medium text-foreground">{tool.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
