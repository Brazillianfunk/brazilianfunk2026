"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Pra ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button"

interface AnimatedMarqueeHeroProps {
  titleLine1: string
  titleLine2: string
  description: string
  ctaText: string
  images: string[]
  // Fonte separada pra parede de fundo — não precisa ser a mesma lista
  // da esteira. Se não vier, cai de volta pra `images`.
  wallImages?: string[]
  className?: string
}

// Botão "Solicitar Acesso" — metal líquido animado (shader WebGL),
// substituindo o pill sólido anterior. Envolvido em mt-8 pra manter o
// mesmo espaçamento de antes em relação à descrição acima.
const ActionButton = ({ children }: { children: string }) => (
  <div className="mt-8">
    <LiquidMetalButton label={children} href="/solicitar-acesso" />
  </div>
)

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  titleLine1,
  titleLine2,
  description,
  ctaText,
  images,
  wallImages,
  className,
}) => {
  // Mesmas variantes de animação do template original
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  // Mesma duplicação de imagens para loop contínuo do template original
  const duplicatedImages = [...images, ...images]

  // Grade da parede de fundo: preenche várias linhas repetindo as mesmas
  // capas (o navegador baixa cada arquivo uma única vez e reaproveita do
  // cache — não pesa rede extra). O scroll vertical é feito por
  // @keyframes puro (ver .hero-wall-track em globals.css), não por JS a
  // cada frame — por isso continua leve mesmo animando o tempo todo.
  // Usa `wallImages` (lista maior, só pra atmosfera de fundo) — a esteira
  // continua com a lista original de `images`, sem alteração.
  const sourceForWall = wallImages ?? images
  const WALL_COLUMNS = 7
  const WALL_ROWS = 6
  const wallTiles = Array.from({ length: WALL_COLUMNS * WALL_ROWS }, (_, i) => sourceForWall[i % sourceForWall.length])

  return (
    <section
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 text-center",
        className
      )}
    >
      {/* Fundo: parede de capas rolando, atrás de todo o conteúdo. Em
          tons de cinza (dessaturada) para funcionar como atmosfera —
          quem chama atenção de verdade é a esteira colorida abaixo. */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden" style={{ perspective: "900px" }}>
        <div
          className="h-[130%] w-[110%] -translate-x-[5%]"
          style={{ transform: "rotateX(8deg)", transformOrigin: "top" }}
        >
          <div className="hero-wall-track flex flex-col gap-2">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${WALL_COLUMNS}, minmax(0, 1fr))` }}
              >
                {wallTiles.map((src, i) => (
                  <img
                    key={`${copy}-${i}`}
                    src={src}
                    alt=""
                    loading={copy === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-square w-full rounded-sm object-cover grayscale"
                    style={{ filter: "grayscale(1) brightness(0.55)" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.55) 22%, rgba(5,5,5,0.3) 45%, rgba(5,5,5,0.75) 62%, #050505 80%)",
          }}
        />
      </div>

      <div className="relative z-30 flex flex-col items-center">
        {/* Título principal — duas linhas fixas (não depende da largura da
            tela pra quebrar): "A Distribuidora" sempre em cima, "Musical
            do Funk" sempre embaixo. Cada linha é seu próprio bloco, então
            a quebra é garantida por HTML, não por quebra natural de texto.
            Mesma animação com stagger por palavra do original, agora
            aplicada dentro de cada linha. */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-5xl font-bold tracking-tighter text-foreground md:text-7xl"
        >
          <span className="block">
            {titleLine1.split(" ").map((word, i) => (
              <motion.span key={`l1-${i}`} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
          <span className="block">
            {titleLine2.split(" ").map((word, i) => (
              <motion.span key={`l2-${i}`} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div initial="hidden" animate="show" variants={FADE_IN_ANIMATION_VARIANTS} transition={{ delay: 0.6 }}>
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Marquee de imagens — puramente decorativo (pointer-events-none
          garante que nunca intercepta cliques no botão/conteúdo acima,
          independente de z-index). Corrigido para já aparecer preenchido
          ao carregar (antes começava deslocado -100%, criando um vão
          vazio até as capas "chegarem" rolando; agora começa em 0% e
          roda -50% do trilho duplicado, um loop contínuo e sem costura).
          Abertura em fade-in. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-1/3 w-full [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] md:h-2/5"
      >
        <div className="hero-marquee-track flex h-full gap-4">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 flex-shrink-0 md:h-64"
              style={{ rotate: `${index % 2 === 0 ? -2 : 5}deg` }}
            >
              <img
                src={src}
                alt={`Lançamento em destaque ${(index % images.length) + 1}`}
                loading={index < images.length ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full rounded-2xl border border-white/10 object-cover opacity-60 transition-opacity duration-300 hover:opacity-100"
                style={{
                  boxShadow:
                    "0 20px 45px -12px rgba(0,0,0,0.85), 0 8px 20px -8px rgba(16,196,122,0.12)",
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
