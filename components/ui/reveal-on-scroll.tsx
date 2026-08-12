"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Wrapper genérico: quando o elemento entra na viewport, troca de
// opacity-0/translate-y-6 pra opacity-100/translate-y-0 com uma transição
// CSS. Usa IntersectionObserver (dispara uma vez, depois desconecta —
// mesmo padrão já usado no carrossel de logos e no carrossel de Suporte,
// não fica rodando nada em background). Respeita prefers-reduced-motion
// via motion-reduce: do Tailwind.

import { useEffect, useRef, useState } from "react"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
}

export function RevealOnScroll({ children, className }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  )
}
