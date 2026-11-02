"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

/*
 * Hero "parede de lançamentos".
 *
 * Adaptado do componente "Duotone Team Roster" (21st.dev): título pesado
 * embaixo à esquerda sobre um campo de cor, e ao lado colunas de capas que
 * deslizam devagar em sentidos opostos. Passar o mouse (ou focar com o teclado) destaca a capa.
 *
 * Diferenças em relação ao original: capas quadradas em vez de retratos,
 * capas com as cores originais (sem o filtro de duas cores), fundo preto
 * do site, fonte Inter, botão padrão do site,
 * textos traduzidos, sem os cards de "membro da equipe" (entram quando
 * houver nome/artista/link de cada lançamento).
 *
 * Abaixo de ~700px as colunas viram uma faixa horizontal acima do título.
 * Com "reduzir movimento" ativo, as colunas ficam paradas.
 */

export type Release = {
  cover: string
  /** Texto alternativo. Quando houver título/artista, use "Título, Artista". */
  alt?: string
}

export type Palette = {
  ground: string
  deep: string
  hot: string
  glow: string
  ink: string
}

// Fundo preto do site (#050505). "noite" deixa um brilho verde discreto
// atrás do título, caso queiram testar depois.
export const PALETTES = {
  preto: { ground: "#050505", deep: "#050505", hot: "#0a0a0a", glow: "#111111", ink: "#f5f4f0" },
  noite: { ground: "#050505", deep: "#060908", hot: "#0c3322", glow: "#10533a", ink: "#f5f4f0" },
} satisfies Record<string, Palette>
export type PaletteName = keyof typeof PALETTES




/** Distribui as capas nas colunas, alternando, e completa colunas curtas. */
function dealColumns<T>(items: T[], columns: number, minPerColumn: number) {
  const out: { item: T; dup: boolean }[][] = Array.from({ length: columns }, () => [])
  items.forEach((item, i) => out[i % columns].push({ item, dup: false }))
  for (let c = 0; c < columns; c++) {
    let k = c * 3 + 1
    while (out[c].length < minPerColumn && items.length) {
      out[c].push({ item: items[k % items.length], dup: true })
      k += columns + 1
    }
  }
  return out
}

function layoutFor(width: number, columns: number) {
  if (width > 0 && width < 700) return 0
  if (width > 0 && width < 1000) return 2
  return columns
}

const useIsoLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

const css = `
.rwh{position:relative;isolation:isolate;overflow:hidden;width:100%;container-type:inline-size;color:var(--rwh-ink);background:var(--rwh-ground);--rwh-ease:cubic-bezier(.23,1,.32,1);--rwh-gap:14px;--rwh-pad:clamp(20px,3.2cqw,48px)}
.rwh *,.rwh *::before,.rwh *::after{box-sizing:border-box}
.rwh-field{position:absolute;inset:0;z-index:-2;background:radial-gradient(38cqw 46cqw at 0% 100%,var(--rwh-ground) 0%,color-mix(in srgb,var(--rwh-ground) 55%,var(--rwh-deep)) 72%,transparent 100%),radial-gradient(70% 62% at 30% 40%,color-mix(in srgb,var(--rwh-hot) 75%,var(--rwh-glow)) 0%,var(--rwh-hot) 22%,color-mix(in srgb,var(--rwh-hot) 45%,var(--rwh-deep)) 48%,transparent 78%),radial-gradient(60% 90% at 78% 30%,color-mix(in srgb,var(--rwh-hot) 55%,var(--rwh-deep)) 0%,transparent 70%),linear-gradient(98deg,var(--rwh-ground) 0%,var(--rwh-deep) 16%,transparent 42%),linear-gradient(0deg,var(--rwh-ground) 0%,color-mix(in srgb,var(--rwh-deep) 85%,transparent) 30%,transparent 62%),var(--rwh-deep)}
.rwh-grain{position:absolute;inset:-50%;z-index:-1;pointer-events:none;opacity:.18;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.6 -.35'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");background-size:220px 220px}
.rwh-in{position:relative;display:grid;grid-template-columns:minmax(0,44fr) minmax(0,56fr);height:100%}
.rwh[data-cols="2"] .rwh-in{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
.rwh-copy{position:relative;z-index:5;grid-row:1;grid-column:1;pointer-events:none;display:flex;flex-direction:column;justify-content:flex-end;padding:var(--rwh-pad);padding-right:clamp(16px,2cqw,32px);min-width:0}
.rwh-title{margin:0;font-weight:900;line-height:.86;letter-spacing:-.045em;color:var(--rwh-ink);font-size:var(--rwh-ts,clamp(56px,9cqw,180px));text-transform:uppercase;text-shadow:0 .02em .14em color-mix(in srgb,var(--rwh-ground) 30%,transparent)}
.rwh-eyebrow{display:block;font-size:.34em;line-height:1;letter-spacing:-.02em;margin:0 0 .18em .03em;white-space:nowrap}
.rwh-line{display:block;clip-path:inset(-30% -400% 0 -10%);padding-bottom:.04em;margin-bottom:-.04em}
.rwh-line>span{display:inline-block;white-space:nowrap;animation:rwh-line-in 900ms var(--rwh-ease) both;animation-delay:calc(120ms + var(--i,0) * 60ms)}
.rwh-intro,.rwh-actions{pointer-events:auto}
.rwh-intro{margin:clamp(18px,2.2cqw,28px) 0 0;max-width:40ch;font-size:clamp(15px,1.15cqw,18px);line-height:1.55;color:color-mix(in srgb,var(--rwh-ink) 86%,transparent);text-wrap:pretty}
.rwh-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;margin-top:clamp(20px,2.4cqw,32px)}
.rwh-wall{position:relative;z-index:1;grid-row:1;grid-column:2;display:grid;grid-template-columns:repeat(var(--rwh-cols),minmax(0,1fr));gap:var(--rwh-gap);padding:0 var(--rwh-pad) 0 clamp(8px,1cqw,16px);height:100%;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 6%,#000 94%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 6%,#000 94%,transparent 100%)}
.rwh-col{position:relative;min-width:0;animation:rwh-rise 1100ms var(--rwh-ease) both;animation-delay:calc(var(--ci) * 90ms)}
.rwh-track{display:flex;flex-direction:column;will-change:transform;animation:rwh-up var(--rwh-dur) linear infinite;animation-delay:var(--rwh-phase)}
.rwh-col[data-dir="down"] .rwh-track{animation-name:rwh-down}
.rwh[data-paused] .rwh-track,.rwh[data-offscreen] .rwh-track,.rwh-wall:hover .rwh-track,.rwh-wall:focus-within .rwh-track,.rwh[data-paused] .rwh-strip-track,.rwh[data-offscreen] .rwh-strip-track{animation-play-state:paused}
.rwh-card{position:relative;margin:0 0 var(--rwh-gap);aspect-ratio:1/1;border-radius:10px;overflow:hidden;background:var(--rwh-deep);transition:transform 260ms var(--rwh-ease),opacity 260ms ease;outline:none}
.rwh-card img{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;transition:opacity 300ms ease,transform 300ms var(--rwh-ease)}
.rwh-card:hover,.rwh-card:focus-visible{transform:translateY(-4px) scale(1.02);z-index:2}
.rwh-card:focus-visible{box-shadow:0 0 0 2px var(--rwh-ground),0 0 0 4px var(--rwh-ink)}
.rwh-wall:hover .rwh-card:not(:hover){opacity:.7}
.rwh-pause{position:absolute;right:var(--rwh-pad);bottom:14px;z-index:6;display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 12px;border:0;border-radius:999px;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--rwh-ink) 32%,transparent);background:color-mix(in srgb,var(--rwh-ground) 88%,transparent);color:var(--rwh-ink);font:600 12px/1 inherit;cursor:pointer}
.rwh-pause:focus-visible{outline:2px solid var(--rwh-ink);outline-offset:3px}
.rwh-pause i{display:inline-block;width:8px;height:9px;border-left:3px solid currentColor;border-right:3px solid currentColor}
.rwh[data-paused] .rwh-pause i{border-right:0;border-left:8px solid currentColor;border-top:4.5px solid transparent;border-bottom:4.5px solid transparent;width:0;height:0}
.rwh-strip{display:none}
.rwh[data-mode="strip"] .rwh-in{display:flex;flex-direction:column;height:auto}
.rwh[data-mode="strip"] .rwh-wall{display:none}
.rwh[data-mode="strip"] .rwh-strip{display:block;position:relative;order:-1;overflow:hidden;padding:20px 0 4px;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%)}
.rwh-strip-track{display:flex;width:max-content;padding-left:20px;will-change:transform;animation:rwh-left var(--rwh-sdur) linear infinite}
.rwh-strip .rwh-card{width:clamp(150px,44cqw,220px);margin:0 10px 0 0;flex:none}
.rwh[data-mode="strip"] .rwh-copy{padding:20px 20px 36px}
.rwh[data-mode="strip"] .rwh-pause{position:static;margin-left:auto}
@keyframes rwh-up{from{transform:translate3d(0,0,0)}to{transform:translate3d(0,-50%,0)}}
@keyframes rwh-down{from{transform:translate3d(0,-50%,0)}to{transform:translate3d(0,0,0)}}
@keyframes rwh-left{from{transform:translate3d(0,0,0)}to{transform:translate3d(calc(-50% + 10px),0,0)}}
@keyframes rwh-rise{from{opacity:0;transform:translate3d(0,56px,0)}to{opacity:1;transform:none}}
@keyframes rwh-line-in{from{transform:translate3d(0,104%,0)}to{transform:none}}
@media (prefers-reduced-motion:reduce){
.rwh-track{animation:none;transform:translate3d(0,calc(-50% * var(--rwh-rest,0)),0)}
.rwh-strip-track{animation:none}
.rwh-col,.rwh-line>span{animation:none}
.rwh-card,.rwh-card img{transition-duration:1ms}
.rwh-card:hover,.rwh-card:focus-visible{transform:none}
.rwh-pause{display:none}
}
`

export type ReleaseWallHeroProps = {
  releases: Release[]
  eyebrow: string
  /** Use "\n" para quebrar linhas; cada linha é ajustada à largura da coluna. */
  title: string
  intro: string
  cta: { label: string; href: string }
  secondaryCta?: { label: string; href: string } | null
  labels: { pause: string; play: string; wall: string }
  columns?: number
  /** Segundos para uma coluna deslizar o tamanho de uma capa. */
  driftSeconds?: number
  height?: string
  palette?: PaletteName
}

export function ReleaseWallHero({
  releases,
  eyebrow,
  title,
  intro,
  cta,
  secondaryCta = null,
  labels,
  columns = 3,
  driftSeconds = 9,
  height = "calc(100svh - 72px)",
  palette = "preto",
}: ReleaseWallHeroProps) {
  const pal = PALETTES[palette]
  const uid = "rwh" + React.useId().replace(/[^a-zA-Z0-9]/g, "")
  const titleId = uid + "-title"
  const rootRef = React.useRef<HTMLElement | null>(null)
  const copyRef = React.useRef<HTMLDivElement | null>(null)
  const titleRef = React.useRef<HTMLHeadingElement | null>(null)
  const [cols, setCols] = React.useState(columns)
  const [titleSize, setTitleSize] = React.useState(0)
  const [minPer, setMinPer] = React.useState(4)
  const [paused, setPaused] = React.useState(false)
  const [offscreen, setOffscreen] = React.useState(false)

  const lines = title.split("\n").map((l) => l.trim()).filter(Boolean)
  const plan = React.useMemo(() => dealColumns(releases, Math.max(1, cols), cols ? minPer : 0), [releases, cols, minPer])

  // Mede o container: escolhe o layout e ajusta o título à coluna.
  useIsoLayoutEffect(() => {
    const root = rootRef.current
    const copy = copyRef.current
    const head = titleRef.current
    if (!root || !copy || !head) return
    const fit = () => {
      const rect = root.getBoundingClientRect()
      const next = layoutFor(rect.width, columns)
      setCols((c) => (c === next ? c : next))
      const cur = parseFloat(getComputedStyle(head).fontSize) || 100
      let widest = 0
      head.querySelectorAll(".rwh-line > span").forEach((s) => {
        widest = Math.max(widest, (s as HTMLElement).offsetWidth)
      })
      const cs = getComputedStyle(copy)
      const avail = copy.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
      if (next > 0) {
        const wallW = rect.width * (next === 2 ? 0.5 : 0.56)
        const cardH = (wallW - 14 * (next + 1)) / next + 14
        const need = Math.max(3, Math.ceil(rect.height / Math.max(80, cardH)) + 1)
        setMinPer((m) => (m === need ? m : need))
      }
      const strip = next === 0
      const maxByHeight = strip ? 120 : Math.max(56, (rect.height * 0.46) / Math.max(1, lines.length + 0.5))
      const size = widest > 0 ? (avail / ((widest / cur) * 100)) * 100 : 0
      setTitleSize(Math.max(40, Math.min(200, maxByHeight, Math.floor(size * 10) / 10)))
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(root)
    return () => ro.disconnect()
  }, [columns, title, lines.length])

  // Para de animar quando ninguém está vendo.
  React.useEffect(() => {
    const root = rootRef.current
    if (!root || typeof IntersectionObserver === "undefined") return
    const io = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting), { threshold: 0 })
    io.observe(root)
    return () => io.disconnect()
  }, [])

  const card = (r: Release, key: string, dup: boolean) => (
    <div key={key} className="rwh-card" tabIndex={dup ? -1 : 0} aria-hidden={dup ? true : undefined} role={dup ? undefined : "img"} aria-label={dup ? undefined : r.alt}>
      <img src={r.cover} alt="" width={480} height={480} loading="lazy" decoding="async" draggable={false} />
    </div>
  )

  const pauseButton = (
    <button type="button" className="rwh-pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
      <i aria-hidden="true" />
      {paused ? labels.play : labels.pause}
    </button>
  )

  const phases = [0, 0.38, 0.71, 0.18]
  const rootStyle = {
    "--rwh-ground": pal.ground,
    "--rwh-deep": pal.deep,
    "--rwh-hot": pal.hot,
    "--rwh-glow": pal.glow,
    "--rwh-ink": pal.ink,
    "--rwh-cols": String(cols || 1),
    "--rwh-ts": titleSize ? titleSize + "px" : undefined,
    "--rwh-sdur": Math.max(20, releases.length * driftSeconds * 0.5) + "s",
    height: cols === 0 ? "auto" : height,
    minHeight: cols === 0 ? undefined : "620px",
  } as React.CSSProperties

  return (
    <section
      ref={rootRef}
      className="rwh"
      style={rootStyle}
      aria-labelledby={titleId}
      data-mode={cols === 0 ? "strip" : "columns"}
      data-cols={cols || undefined}
      data-paused={paused ? "" : undefined}
      data-offscreen={offscreen ? "" : undefined}
    >
      <style>{css}</style>
      <div className="rwh-field" aria-hidden="true" />
      <div className="rwh-grain" aria-hidden="true" />
      {cols !== 0 ? pauseButton : null}

      <div className="rwh-in">
        <div className="rwh-copy" ref={copyRef}>
          <h1 className="rwh-title" id={titleId} ref={titleRef}>
            <span className="rwh-eyebrow">{eyebrow} </span>
            {lines.map((l, i) => (
              <span className="rwh-line" key={i} style={{ "--i": i } as React.CSSProperties}>
                <span>{l}</span>
                {i < lines.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className="rwh-intro">{intro}</p>
          <div className="rwh-actions">
            <Button href={cta.href} size="lg">
              {cta.label}
              <span aria-hidden="true">→</span>
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} size="lg" variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
            {cols === 0 ? pauseButton : null}
          </div>
        </div>

        {cols === 0 ? (
          <div className="rwh-strip" role="group" aria-label={labels.wall}>
            <div className="rwh-strip-track">
              {[0, 1].map((copy) => releases.map((r, i) => card(r, `s${copy}-${i}`, copy === 1)))}
            </div>
          </div>
        ) : (
          <div className="rwh-wall" role="group" aria-label={labels.wall}>
            {plan.map((col, c) => {
              const dur = Math.max(6, col.length * driftSeconds)
              const phase = phases[c % phases.length]
              return (
                <div
                  className="rwh-col"
                  key={c}
                  data-dir={c % 2 ? "down" : "up"}
                  style={{ "--ci": c, "--rwh-dur": dur + "s", "--rwh-phase": -(dur * phase) + "s", "--rwh-rest": c % 2 ? 1 - phase : phase } as React.CSSProperties}
                >
                  <div className="rwh-track">
                    {[0, 1].map((copy) => col.map((e, i) => card(e.item, `${c}-${copy}-${i}`, e.dup || copy === 1)))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
