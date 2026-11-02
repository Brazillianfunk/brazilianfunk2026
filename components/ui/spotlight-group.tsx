"use client"

import { useRef } from "react"
import type React from "react"

// Luz que segue o cursor nos cards (estilo "spotlight border").
// Um único listener no grupo grava a posição do mouse em variáveis CSS
// de cada card [data-spot]; o brilho é desenhado em CSS (.spot).
// Em toque não faz nada (só pointerType "mouse").
export function SpotlightGroup({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      ref.current?.querySelectorAll<HTMLElement>("[data-spot]").forEach((el) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${clientX - r.left}px`)
        el.style.setProperty("--my", `${clientY - r.top}px`)
      })
    })
  }

  return (
    <div ref={ref} className={className} onPointerMove={onMove}>
      {children}
    </div>
  )
}
