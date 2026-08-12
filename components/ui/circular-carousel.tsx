"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Port literal do circular-carousel.tsx enviado como referência. A
// matemática de posicionamento (seno/cosseno pro arco), as animações
// framer-motion, o autoplay com pausa no hover/foco, a navegação por
// teclado e os dots — tudo igual ao original. As únicas trocas foram de
// cor: "zinc-800/900" e "white/N%" (que não existem como tokens aqui)
// viraram --card/--background e --border/--foreground/--muted-foreground
// do projeto, mantendo a mesma paleta monocromática do original (a
// referência não usa nenhuma cor de destaque, só tons de cinza/branco).

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CarouselItem {
  id: string
  title: string
  description: string
  tag?: string
}

export interface CircularCarouselProps {
  items: CarouselItem[]
  activeIndex?: number
  onActiveChange?: (index: number) => void
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

// VISIBLE_COUNT é só o limite de quantos itens ficam visíveis ao mesmo
// tempo quando há MUITOS itens (ex: 10, 20...) — não deve ser usado na
// matemática do ângulo quando o total de itens é MENOR que esse limite
// (era exatamente esse o bug: com 4 itens reais e VISIBLE_COUNT=5 fixo
// na fórmula do ângulo, o arco saía torto/assimétrico, um lado bem mais
// aberto que o outro). Agora a distribuição usa sempre o total real.
const VISIBLE_COUNT = 5

function getItemPosition(
  index: number,
  activeIndex: number,
  total: number,
  radiusX: number,
  radiusY: number
) {
  const spread = Math.min(VISIBLE_COUNT, total)
  const offset = index - activeIndex
  const half = Math.floor(spread / 2)
  let adjustedOffset = offset

  if (offset > half) adjustedOffset = offset - total
  if (offset < -half) adjustedOffset = offset + total

  if (Math.abs(adjustedOffset) > half * 2) return null

  const angle = (adjustedOffset / spread) * Math.PI
  const x = Math.sin(angle) * radiusX
  const y = -Math.cos(angle) * radiusY

  const distance = Math.abs(adjustedOffset)
  const maxDistance = half + 1
  const scale = Math.max(0, 1 - (distance / maxDistance) * 0.3)
  const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7)
  const zIndex = spread - distance

  return { x, y, scale, opacity, zIndex, adjustedOffset }
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
}: CircularCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isInView, setIsInView] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  // Raio do arco responsivo — antes era um valor fixo em pixels (220),
  // que em telas estreitas (celular) empurrava os cards das pontas pra
  // fora da área visível, quebrando a centralização. Agora é calculado a
  // partir da largura real do container, então sempre cabe.
  const [radius, setRadius] = useState({ x: 220, y: 100 })
  useEffect(() => {
    const track = trackRef.current
    if (!track || typeof ResizeObserver === "undefined") return
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 512
      // Card tem w-52 (208px) — reserva metade dele + uma margem, pra
      // nenhum card ficar cortado nas pontas do arco.
      const maxX = Math.max(60, width / 2 - 130)
      setRadius({ x: Math.min(220, maxX), y: Math.min(100, maxX * 0.45) })
    })
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  const activeIndex = controlledIndex ?? internalIndex
  const total = items.length

  const goTo = useCallback(
    (index: number) => {
      const newIndex = ((index % total) + total) % total
      if (controlledIndex === undefined) {
        setInternalIndex(newIndex)
      }
      onActiveChange?.(newIndex)
    },
    [total, controlledIndex, onActiveChange]
  )

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  // Pausa o autoplay quando o carrossel sai da tela ao rolar — mesmo
  // padrão já usado no logo-carousel.tsx, pra não gastar ciclo nenhum
  // com algo que o usuário não está vendo.
  useEffect(() => {
    const el = containerRef.current
    if (!el || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!autoPlay || isHovered || isFocused || !isInView) return
    intervalRef.current = setInterval(next, autoPlayInterval)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoPlay, autoPlayInterval, isHovered, isFocused, isInView, next])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    const el = containerRef.current
    el?.addEventListener("keydown", handler)
    return () => el?.removeEventListener("keydown", handler)
  }, [next, prev])

  const activeItem = items[activeIndex]

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Carrossel circular"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn("relative flex flex-col items-center justify-center gap-8 outline-none", className)}
    >
      {/* Trilha circular */}
      <div ref={trackRef} className="relative h-[320px] w-full max-w-lg">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i, activeIndex, total, radius.x, radius.y)
            if (!pos) return null

            const isActive = i === activeIndex

            return (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => goTo(i)}
                aria-label={item.title}
                aria-selected={isActive}
                role="option"
                className={cn(
                  "absolute left-1/2 top-1/2 flex h-40 w-52 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-start justify-between rounded-2xl border border-border bg-gradient-to-b from-card/90 to-background/90 p-4 backdrop-blur-sm transition-shadow duration-300",
                  isActive
                    ? "shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]"
                    : "shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.4)]"
                )}
                style={{ transformOrigin: "center center" }}
              >
                {item.tag && (
                  <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/70">
                    {item.tag}
                  </span>
                )}
                <div className="w-full">
                  <h3
                    className={cn(
                      "font-semibold leading-tight transition-colors duration-300",
                      isActive ? "text-base text-foreground" : "text-sm text-foreground/80"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 line-clamp-3 text-xs leading-relaxed transition-colors duration-300",
                      isActive ? "text-muted-foreground" : "text-muted-foreground/60"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Contador central */}
      <motion.div
        key={activeItem.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
      >
        <span className="text-5xl font-bold tracking-tight text-foreground/90">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="mt-1 text-xs text-muted-foreground">de {String(total).padStart(2, "0")}</span>
      </motion.div>

      {/* Controles */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          aria-label="Item anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          <ChevronLeft className="size-5" />
        </motion.button>

        <div className="flex items-center gap-1.5" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex ? "w-6 bg-foreground/80" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
              )}
              aria-label={`Ir para o item ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          aria-label="Próximo item"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          <ChevronRight className="size-5" />
        </motion.button>
      </div>
    </div>
  )
}

export default CircularCarousel
