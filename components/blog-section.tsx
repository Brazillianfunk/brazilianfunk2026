// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Estética do card vem do card-grid.tsx enviado como referência (imagem,
// título, link com seta, elevação no hover). A disposição é um carrossel
// horizontal — mas, diferente da primeira tentativa (scroll nativo do
// navegador, que ficou imprevisível), agora o movimento é controlado
// inteiramente por JS: um índice de posição, deslocamento por
// transform/translateX com transição suave, botões que desabilitam nas
// pontas. Sem depender de física de scroll do navegador. Reaproveita o
// mesmo estilo de seta já usado no carrossel de Suporte
// (circular-carousel.tsx).
//
// Categoria e data: o modelo original não tinha esses campos, mas o
// briefing listou como conteúdo obrigatório. Usei o mesmo estilo de
// "pill" que já existe no carrossel de Suporte.
//
// IMAGENS: por enquanto é um placeholder visual (ícone + gradiente sutil),
// não uma foto real — troque pelo campo imageSrc quando tiver as imagens
// reais das matérias.

"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Newspaper } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"

interface ArticleAsset {
  id: number
  imageSrc: string
  categoryKey: "noticias" | "cultura" | "tecnologia" | "lancamentos"
  linkHref: string
}

// Só o que não muda com o idioma (imagem, link do Instagram e a categoria
// como chave de lookup no dicionário). Título e data vêm de t.blog.articles,
// casados pelo mesmo índice — cada matéria continua indo pro link certo.
const ARTICLE_ASSETS: ArticleAsset[] = [
  {
    id: 1,
    imageSrc: "/blog/noticia-sxsw-2026.jpg",
    categoryKey: "noticias",
    linkHref: "https://www.instagram.com/p/DVeiBvzEat4/?igsh=NW8yMDJmcDg3bG55",
  },
  {
    id: 2,
    imageSrc: "/blog/noticia-cultura-baixada-santista.jpg",
    categoryKey: "cultura",
    linkHref: "https://www.instagram.com/p/DVjpw9Mjcte/?igsh=emwyOTZveXIyZmt2",
  },
  {
    id: 3,
    imageSrc: "/blog/noticia-tecnologia-songdna.jpg",
    categoryKey: "tecnologia",
    linkHref: "https://www.instagram.com/p/DXP9jSmFrK4/?igsh=MW1sYWdhOHhqYTVhcQ%3D%3D",
  },
  {
    id: 4,
    imageSrc: "/blog/noticia-lancamentos-semana.jpg",
    categoryKey: "lancamentos",
    linkHref: "https://www.instagram.com/p/Davyy7tFnMs/?igsh=am1seHM2d280Z2hk",
  },
]

const CARD_WIDTH = 320
const CARD_GAP = 24
const STEP = CARD_WIDTH + CARD_GAP

export default function BlogSection() {
  const { t } = useTranslation()
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  const ARTICLES = ARTICLE_ASSETS.map((asset, i) => ({
    ...asset,
    category: t.blog.categories[asset.categoryKey],
    title: t.blog.articles[i].title,
    date: t.blog.articles[i].date,
    linkText: t.blog.readMore,
  }))

  // Mede a largura real do viewport em pixels — recalcula ao
  // redimensionar (ResizeObserver, não fica escutando "resize" sem
  // necessidade). Trabalhar direto em pixels (em vez de "quantos cards
  // cabem", que precisa arredondar) é o que garante nunca sobrar espaço
  // vazio no fim do carrossel, não importa quantos cards existam.
  useEffect(() => {
    const el = viewportRef.current
    if (!el || !("ResizeObserver" in window)) return
    const observer = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const trackWidth = ARTICLES.length * CARD_WIDTH + (ARTICLES.length - 1) * CARD_GAP
  const maxTranslate = Math.max(0, trackWidth - viewportWidth)
  const maxIndex = maxTranslate === 0 ? 0 : Math.ceil(maxTranslate / STEP)
  const translateX = Math.min(activeIndex * STEP, maxTranslate)

  useEffect(() => {
    // Se a tela cresceu e o índice atual ficou fora do alcance, recua.
    setActiveIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  return (
    <section id="noticias" className="bg-background px-4 py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end md:mb-16">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.blog.heading}</h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              {t.blog.subtitle}
            </p>
          </div>
          <div className="flex flex-none items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label={t.blog.prevAria}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-foreground/5"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={activeIndex >= maxIndex}
              aria-label={t.blog.nextAria}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/5 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-foreground/5"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: -translateX }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          >
            {ARTICLES.map((article) => (
              <motion.a
                key={article.id}
                href={article.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: CARD_WIDTH }}
                className="group block flex-none overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/30"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex h-full flex-col">
                  {/* Imagem (placeholder por enquanto — ver nota no topo do arquivo) */}
                  <div className="relative h-48 w-full overflow-hidden bg-background">
                    {article.imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={article.imageSrc}
                        alt={article.title}
                        className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-background">
                        <Newspaper className="size-8 text-muted-foreground/40" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/70">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="mb-4 flex-grow text-lg font-semibold text-card-foreground">{article.title}</h3>
                    <div className="mt-auto flex items-center text-sm font-medium" style={{ color: "#FFCB00" }}>
                      {article.linkText}
                      <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
