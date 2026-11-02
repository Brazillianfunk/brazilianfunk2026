import type React from "react"
import { cn } from "@/lib/utils"

// Mini equalizador (4 barras) — o "tocando agora" da distribuidora.
// Só transform: scaleY em CSS, roda na GPU e para com "reduzir movimento".
export function Equalizer({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("eq", className)}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} style={{ "--d": `${[-0.2, -0.65, -0.4, -0.9][i]}s` } as React.CSSProperties} />
      ))}
    </span>
  )
}
