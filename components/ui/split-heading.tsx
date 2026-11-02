import type React from "react"
import { cn } from "@/lib/utils"

// Título que entra palavra por palavra (desfoque → nítido) conforme a
// seção aparece na tela. Tudo em CSS (animation-timeline: view()), sem JS.
// O texto completo fica num aria-label e cada palavra é só visual, então
// leitores de tela leem a frase inteira. Sem suporte ou com "reduzir
// movimento", as palavras aparecem paradas, normalmente.
export function SplitHeading({
  as: Tag = "h2",
  text,
  className,
}: {
  as?: "h1" | "h2" | "h3"
  text: string
  className?: string
}) {
  const words = text.split(/\s+/).filter(Boolean)
  return (
    <Tag className={cn(className)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="split-word" style={{ "--i": i } as React.CSSProperties}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  )
}
