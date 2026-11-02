"use client"

import * as React from "react"

/*
 * Faixa ondulada ("wavy ribbon") que atravessa a tela entre duas seções,
 * com o texto correndo por dentro da curva. Inspirada na transição do site
 * sweet-tape.com.
 *
 * - O texto segue o mesmo caminho da faixa (SVG <textPath>) e anda em loop
 *   contínuo, sem costura: a frase é repetida e o deslocamento volta ao
 *   início quando anda exatamente o tamanho de uma repetição.
 * - No celular a faixa não encolhe até ficar ilegível: o desenho mantém
 *   largura mínima e mostra só o trecho do meio.
 * - Para quando sai da tela e fica parada para quem ativou "reduzir
 *   movimento" no aparelho.
 * - Leitores de tela leem a frase uma vez só (o SVG é decorativo).
 */

export type WavyRibbonProps = {
  /** Frase que se repete ao longo da faixa. */
  text: string
  /** Separador entre as repetições. */
  separator?: string
  /** Cor da faixa. */
  color?: string
  /** Cor do texto. */
  ink?: string
  /** Pixels por segundo (na escala do desenho de 1440px). */
  speed?: number
  className?: string
}

// Desenho em 1440 x 160. Onda suave, quase horizontal: a faixa marca a
// passagem entre as seções sem roubar a cena.
const VIEW_W = 1440
const VIEW_H = 160
const PATH = "M -200 100 C 160 125, 480 50, 820 75 S 1360 115, 1640 55"
const BAND = 52

export function WavyRibbon({
  text,
  // Espaços comuns se juntam num só dentro do SVG; por isso espaços fixos.
  separator = "\u00A0\u00A0\u00A0•\u00A0\u00A0\u00A0",
  color = "hsl(var(--brand-lime))",
  ink = "#050505",
  speed = 35,
  className = "",
}: WavyRibbonProps) {
  const uid = "wr" + React.useId().replace(/[^a-zA-Z0-9]/g, "")
  const rootRef = React.useRef<HTMLDivElement | null>(null)
  const textPathRef = React.useRef<SVGTextPathElement | null>(null)
  const measureRef = React.useRef<SVGTextElement | null>(null)
  const unit = (text.replace(/ {2,}/g, (m) => "\u00A0".repeat(m.length)) + separator).toUpperCase()
  // Repetições suficientes para cobrir o caminho inteiro mais uma de folga.
  const repeated = Array.from({ length: 8 }, () => unit).join("")

  React.useEffect(() => {
    const tp = textPathRef.current
    const measure = measureRef.current
    const root = rootRef.current
    if (!tp || !measure || !root) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    let unitWidth = measure.getComputedTextLength()
    let offset = 0
    let last = 0
    let raf = 0
    let visible = true

    const tick = (now: number) => {
      if (last) offset -= ((now - last) / 1000) * speed
      last = now
      if (unitWidth > 0 && offset <= -unitWidth) offset += unitWidth
      tp.setAttribute("startOffset", String(offset))
      raf = requestAnimationFrame(tick)
    }
    const start = () => {
      if (raf || reduce.matches || !visible) return
      last = 0
      raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    // A largura da frase depende da fonte; mede de novo quando ela carregar.
    document.fonts?.ready.then(() => {
      unitWidth = measure.getComputedTextLength()
    })

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      visible ? start() : stop()
    })
    io.observe(root)
    const onReduce = () => (reduce.matches ? stop() : start())
    reduce.addEventListener("change", onReduce)
    start()
    return () => {
      stop()
      io.disconnect()
      reduce.removeEventListener("change", onReduce)
    }
  }, [speed, unit])

  const textStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "0.14em",
    fill: ink,
  }

  return (
    <div ref={rootRef} className={`relative w-full overflow-hidden ${className}`}>
      <span className="sr-only">{text}</span>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="relative left-1/2 block h-auto w-[max(100%,1100px)] -translate-x-1/2"
      >
        <defs>
          <path id={uid} d={PATH} />
        </defs>
        <use href={`#${uid}`} fill="none" stroke={color} strokeWidth={BAND} />
        <text style={textStyle} dominantBaseline="central">
          <textPath ref={textPathRef} href={`#${uid}`} startOffset="0">
            {repeated}
          </textPath>
        </text>
        {/* mede uma repetição para o loop ficar sem costura */}
        <text ref={measureRef} style={{ ...textStyle, visibility: "hidden" }} x="0" y="-100">
          {unit}
        </text>
      </svg>
    </div>
  )
}
