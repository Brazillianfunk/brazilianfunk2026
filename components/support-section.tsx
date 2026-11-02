"use client"

// Suporte.
//
// Referência no 21st.dev: "Features 9" (meschacirung), uma grade com linhas
// finas dividindo as células, cada uma com um rótulo pequeno, título e
// texto. Substitui os cards inclinados com sombra branca, que não
// combinavam com o resto do site. Título à esquerda com o selo, como nas
// outras seções.

import { useTranslation } from "@/lib/i18n/use-translation"
import { SectionBadge } from "@/components/ui/section-badge"

const IMAGES = [
  "/suporte/suporte-humanizado.png",
  "/suporte/suporte-ar.png",
  "/suporte/suporte-feedback.png",
  "/suporte/suporte-solicitacoes.png",
]

export default function SupportSection() {
  const { t } = useTranslation()

  return (
    <section className="theme-lime px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <SectionBadge>{t.support.badge}</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.support.title}</h2>
          </div>
          <p className="max-w-sm text-base text-muted-foreground md:text-lg">{t.support.description}</p>
        </div>

        <div className="reveal mt-14 grid overflow-hidden rounded-[32px] border border-border bg-background sm:grid-cols-2">
          {t.support.items.map((item, index) => (
            <article
              key={item.title}
              className="flex gap-5 border-border p-8 transition-colors hover:bg-card md:p-10 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="relative h-14 w-14 flex-none">
                <img src={IMAGES[index]} alt="" className="h-14 w-14 rounded-full border border-border object-cover" />
                {index === 0 && (
                  <span aria-hidden="true" className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5">
                    <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-brand-lime" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-brand-lime" />
                  </span>
                )}
              </span>
              <div>
                {item.tag && <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.tag}</p>}
                <h3 className="mt-2 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
