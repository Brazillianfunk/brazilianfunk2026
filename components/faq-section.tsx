"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/ui/button"

export default function FaqSection() {
  const { t } = useTranslation()
  return (
    <section id="faq" className="bg-background px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.faq.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-brand-link hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Chamada no fim da página: antes o "Solicitar acesso" só aparecia
            no topo e sumia até o rodapé. */}
        <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-border bg-card px-6 py-12 text-center">
          <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{t.faq.ctaText}</p>
          <Button href="/solicitar-acesso" size="lg">
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
