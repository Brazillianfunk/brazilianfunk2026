"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

// Tela de entrada da home: as barras do mapa da logo acendem em verde
// conforme a página carrega, com um contador até 100; no fim, o fundo
// preto sobe com a borda em arco e revela o topo.
//
// Regras para não atrapalhar quem quer usar o site:
// - só na primeira visita da sessão (voltar para a home não mostra de novo);
// - acompanha o carregamento real (evento "load"), com um tempo mínimo
//   curto para a animação ser legível e um limite de segurança;
// - quem pediu "reduzir movimento" no aparelho não vê a tela;
// - se o JavaScript falhar, um CSS esconde a tela sozinho depois de 6s.

const KEY = "bf-intro-visto"
const MIN_MS = 1100 // tempo mínimo na tela
const MAX_MS = 5000 // limite de segurança
const EXIT_MS = 900 // duração da cortina subindo

// Roda antes da tela ser pintada: se já viu nesta sessão, esconde na hora
// (sem "piscar" a tela preta para quem volta para a home).
// O atributo no <html> some quando o React assume a página, então também
// deixamos uma marca em window, que o React não toca.
const PRE_PAINT = `try{if(sessionStorage.getItem("${KEY}")){window.__bfIntroVisto=1;document.documentElement.setAttribute("data-intro-visto","")}}catch(e){}`

// useLayoutEffect roda antes da pintura no navegador; no servidor não existe.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const [done, setDone] = useState(false)

  useIsoLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const skip =
      (window as Window & { __bfIntroVisto?: number }).__bfIntroVisto === 1 ||
      document.documentElement.hasAttribute("data-intro-visto") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (skip) {
      setDone(true)
      return
    }
    try {
      sessionStorage.setItem(KEY, "1")
    } catch {}

    root.style.animation = "none" // o JS assume o controle do fallback de CSS
    const start = performance.now()
    let loaded = document.readyState === "complete"
    let shown = 0
    let raf = 0
    let exitTimer = 0
    const onLoad = () => (loaded = true)
    window.addEventListener("load", onLoad)

    const tick = (now: number) => {
      const t = now - start
      // Sobe rápido até ~90% com o tempo; os últimos 10% só quando a página
      // terminou de carregar (ou ao bater o limite de segurança).
      const timed = 90 * (1 - Math.exp(-t / 700))
      const target = (loaded && t >= MIN_MS) || t >= MAX_MS ? 100 : timed
      shown += (target - shown) * 0.18
      if (target === 100 && shown > 99.5) shown = 100
      root.style.setProperty("--p", `${shown}%`)
      if (countRef.current) countRef.current.textContent = String(Math.round(shown))

      if (shown >= 100) {
        root.classList.add("intro-out")
        exitTimer = window.setTimeout(() => setDone(true), EXIT_MS)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(exitTimer)
      window.removeEventListener("load", onLoad)
    }
  }, [])

  if (done) return null

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: PRE_PAINT }} />
      <div ref={rootRef} className="intro" aria-hidden="true">
        <div className="intro-curtain">
          <div className="intro-logo">
            <span className="intro-mark intro-mark-dim" />
            <span className="intro-mark intro-mark-fill" />
          </div>
          <span className="intro-label">Brazilian Funk</span>
          <span ref={countRef} className="intro-count">
            0
          </span>
        </div>
      </div>
    </>
  )
}
