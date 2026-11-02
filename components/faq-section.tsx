"use client"

// Perguntas frequentes + chamada final.
//
// Referência no 21st.dev: "Two Column FAQ" (faq-6) e "FAQ Section": título,
// texto e um atalho para falar com a equipe à esquerda; perguntas à direita.
// A chamada final segue o mesmo painel com borda de Ferramentas e Pagamentos.

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "@/components/ui/section-badge"

const CTA_COVERS = [1, 2, 3, 5, 6, 8, 9, 11, 12, 14].map((n) => `/lancamentos/lancamento-${String(n).padStart(2, "0")}.jpg`)

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5592981755727&text=Ol%C3%A1%2C+Brazilian+Funk.+Podem+me+ajudar+%3F&type=phone_number&app_absent=0"

export default function FaqSection() {
  const { t } = useTranslation()
  return (
    <section id="faq" className="bg-background px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <div>
            <SectionBadge>{t.faq.badge}</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.faq.heading}</h2>
            <p className="mt-6 max-w-sm text-base text-muted-foreground md:text-lg">{t.faq.subtitle}</p>
            <Button href={WHATSAPP_URL} variant="secondary" className="mt-8" target="_blank" rel="noopener noreferrer">
              {t.faq.whatsapp}
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full border-t border-border">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="py-6 text-left text-base font-semibold hover:text-brand-link hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Chamada final: o "Solicitar acesso" volta antes do rodapé. */}
        <div className="reveal-scale relative mt-24 overflow-hidden rounded-[32px] bg-primary md:mt-32">
          {/* capas deslizando ao fundo, bem apagadas */}
          <div aria-hidden="true" className="absolute inset-0 flex -rotate-6 scale-125 flex-col justify-center gap-4 opacity-[0.18] mix-blend-luminosity">
            {[0, 1].map((row) => (
              <div key={row} className="flex w-max gap-4 motion-safe:animate-[logo-marquee_60s_linear_infinite]" style={{ animationDirection: row ? "reverse" : "normal" }}>
                {[...CTA_COVERS, ...CTA_COVERS].map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" className="h-36 w-36 flex-none rounded-2xl object-cover" />
                ))}
              </div>
            ))}
          </div>
          <div className="relative flex flex-col items-start justify-between gap-8 bg-gradient-to-r from-primary via-primary/90 to-primary/40 p-10 md:flex-row md:items-center md:p-14">
            <p className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">{t.faq.ctaText}</p>
            <Button href="/solicitar-acesso" size="lg" variant="light">
              {t.hero.cta}
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
