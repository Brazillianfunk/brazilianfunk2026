"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Estrutura baseada no modelo "creative-pricing.tsx" enviado como
// referência: grade de cartões levemente inclinados, com uma camada de
// fundo defasada (borda grossa + sombra sólida, sem blur) que se desloca
// no hover, dando profundidade sem depender de nenhuma animação
// contínua/automática — ao contrário do carrossel circular anterior, que
// em duas tentativas nunca ficou centralizado/ordenado de forma
// confiável, aqui a posição de cada cartão é fixa por CSS, não calculada
// em JS a cada renderização.
//
// Adaptações em relação à referência: removido o estilo "escrita à mão"
// (fonte handwritten, emojis ✨⭐️✎✏️, paleta clara âmbar/azul) — não
// combina com a identidade escura/premium já estabelecida no resto do
// site. Também removidos os elementos que só fazem sentido pra um card
// de preço (valor em $, "/month", botão "Get Started", selo "Popular!"),
// já que aqui é suporte, não planos — nenhuma das 4 opções deveria
// parecer "menos importante" que as outras.
//
// Os ícones do lucide-react foram substituídos pelas 4 imagens enviadas
// (já vêm recortadas em círculo, com fundo transparente) — uma por
// pilar de suporte, na mesma ordem do dicionário de tradução.

import { useTranslation } from "@/lib/i18n/use-translation"

const IMAGES = [
  "/suporte/suporte-humanizado.png",
  "/suporte/suporte-ar.png",
  "/suporte/suporte-feedback.png",
  "/suporte/suporte-solicitacoes.png",
]

// Inclinação sutil alternada por cartão — mesmo espírito do modelo de
// referência (cada card com uma leve rotação própria), só com ângulos
// bem menores, pra ficar discreto e não brigar com o tom minimalista do
// site.
const ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"]

export default function SupportSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center md:mb-20">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.support.title}</h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          {t.support.description}
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.support.items.map((item, index) => {
          return (
            <div key={index} className={`group relative ${ROTATIONS[index]} transition-transform duration-300 hover:rotate-0`}>
              {/* Camada de fundo defasada — borda + sombra sólida branca,
                  sem blur. Se desloca no hover, dando a sensação de
                  "levantar" o cartão, sem nenhuma animação
                  automática/contínua. */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-border bg-card shadow-[6px_6px_0_0_rgba(245,244,240,0.35)] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_0_rgba(245,244,240,0.45)]"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col p-6">
                <div className="mb-4 h-12 w-12 overflow-hidden rounded-full border-2 border-border">
                  <img src={IMAGES[index]} alt="" className="h-full w-full object-cover" />
                </div>

                {item.tag && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/70">
                    {item.tag}
                  </span>
                )}

                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
