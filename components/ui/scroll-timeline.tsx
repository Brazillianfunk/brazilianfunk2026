"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Linha do tempo que se desenha conforme a página rola.
// Adaptada do "scroll-timeline" (21st.dev). Mudanças:
// - Todo o conteúdo fica legível desde o início (o original deixava os itens
//   com 30% de opacidade até a linha chegar). A linha e os pontos só realçam
//   a etapa em que a pessoa está.
// - Cores do site (linha e pontos no azul dos botões).
// - Cálculo da rolagem no máximo uma vez por quadro (requestAnimationFrame),
//   com listener passivo, para não pesar no celular.
// - Com "reduzir movimento" ativo, a linha aparece completa e sem animação.

export interface TimelineStep {
  id: string
  badge: string
  title: string
  description?: string
}

export function ScrollTimeline({ steps, className }: { steps: TimelineStep[]; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1)
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // A linha acompanha o meio da tela.
      const scrolledPast = window.innerHeight / 2 - rect.top
      setProgress(Math.max(0, Math.min(1, scrolledPast / rect.height)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Linha de fundo */}
      <div aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 bg-border md:left-1/2" />
      {/* Linha que se desenha com a rolagem */}
      <div
        aria-hidden="true"
        className="absolute left-4 top-0 w-0.5 -translate-x-1/2 bg-primary md:left-1/2"
        style={{ height: `${progress * 100}%` }}
      />

      <ol className="relative flex flex-col gap-14 md:gap-20">
        {steps.map((step, index) => {
          const threshold = index / (steps.length - 1 || 1)
          const isActive = progress >= threshold - 0.05
          const isEven = index % 2 === 0

          return (
            <li key={step.id} className={cn("relative flex w-full flex-col items-start md:flex-row", isEven && "md:flex-row-reverse")}>
              {/* Ponto */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-4 top-0 z-10 mt-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-2 transition-all duration-500 md:left-1/2",
                  isActive
                    ? "scale-125 border-primary bg-background shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]"
                    : "border-border bg-secondary"
                )}
              />

              <div className="hidden w-1/2 md:block" />

              <div className={cn("w-full pl-12 md:w-1/2 md:pl-0", isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left")}>
                <span
                  className={cn(
                    "mb-3 inline-block rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors duration-500",
                    isActive ? "border-primary/50 text-foreground" : "border-border text-muted-foreground"
                  )}
                >
                  {step.badge}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{step.title}</h3>
                {step.description && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
