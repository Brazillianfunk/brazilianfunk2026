"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/i18n/use-translation"

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
              <AccordionTrigger className="text-left hover:text-primary hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
