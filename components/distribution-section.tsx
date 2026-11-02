"use client"

import { LogoMarquee } from "@/components/ui/logo-marquee"
import { PLATFORMS } from "@/components/ui/platform-icons"
import { SectionBadge } from "@/components/ui/section-badge"
import { useTranslation } from "@/lib/i18n/use-translation"

// Distribuição: título à esquerda (como o topo e Pagamentos), o número
// "40+" em destaque à direita e duas faixas de plataformas em sentidos
// opostos, com todas as lojas passando.
const ROW_A = PLATFORMS.slice(0, 6)
const ROW_B = PLATFORMS.slice(6)

export default function DistributionSection() {
  const { t } = useTranslation()
  return (
    <section id="distribuicao" className="scroll-mt-24 bg-background px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <SectionBadge>{t.distribution.badge}</SectionBadge>
            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t.distribution.title}
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{t.distribution.description}</p>
          </div>
          <div className="md:text-right">
            <p className="text-[96px] font-black leading-[0.85] tracking-tighter text-foreground md:text-[140px]">40+</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t.distribution.statLabel}</p>
          </div>
        </div>

        <div className="mt-16 divide-y divide-border border-y border-border md:mt-20">
          <LogoMarquee items={ROW_A} duration={36} className="py-8" label={t.distribution.statLabel} />
          <LogoMarquee items={ROW_B} duration={36} reverse className="py-8" label={t.distribution.statLabel} />
        </div>
      </div>
    </section>
  )
}
