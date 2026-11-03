"use client"

import { useEffect, useRef, useState } from "react"

// Número que conta de 0 até o valor quando aparece na tela.
// O HTML já chega com o valor final (bom para SEO e para quem está sem
// JavaScript); a contagem só roda uma vez, ao entrar na tela, e não roda
// para quem ativou "reduzir movimento".
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1200,
  format,
  className,
}: {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  /** Formata o número exibido (ex.: 1240000 → "1,24 mi"). Sem isso, arredonda. */
  format?: (n: number) => string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) return // já visível ao carregar: não anima
    setValue(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(eased * to)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format ? format(value) : Math.round(value)}
      {suffix}
    </span>
  )
}
