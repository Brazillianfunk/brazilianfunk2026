"use client"

import type React from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SectionBadge } from "@/components/ui/section-badge"
import { useTranslation } from "@/lib/i18n/use-translation"
import { legalTerms } from "@/lib/i18n/legal-terms"
import { legalPrivacy } from "@/lib/i18n/legal-privacy"

interface LegalPageProps {
  document: "termos" | "privacidade"
}

const pad = (n: number) => String(n).padStart(2, "0")
const EMAIL = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g

// Deixa os e-mails do texto clicáveis.
function withLinks(text: string) {
  return text.split(EMAIL).map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={`mailto:${part}`} className="text-foreground underline underline-offset-4 hover:text-brand-link">
        {part}
      </a>
    ) : (
      part
    )
  )
}

// Agrupa parágrafos que começam com "- " em listas.
function renderBody(paragraphs: string[]) {
  const out: React.ReactNode[] = []
  let list: string[] = []
  const flush = () => {
    if (!list.length) return
    out.push(
      <ul key={`ul-${out.length}`} className="space-y-3">
        {list.map((item, i) => (
          <li key={i} className="relative pl-6 text-base leading-relaxed text-muted-foreground">
            <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-3 bg-brand-lime" />
            {withLinks(item)}
          </li>
        ))}
      </ul>
    )
    list = []
  }
  paragraphs.forEach((p, i) => {
    if (p.startsWith("- ")) {
      list.push(p.slice(2))
    } else {
      flush()
      out.push(
        <p key={i} className="text-base leading-relaxed text-muted-foreground">
          {withLinks(p)}
        </p>
      )
    }
  })
  flush()
  return out
}

export default function LegalPage({ document }: LegalPageProps) {
  const { t, locale } = useTranslation()
  const doc = document === "termos" ? legalTerms[locale] : legalPrivacy[locale]
  const title = document === "termos" ? t.footer.termsLink : t.footer.privacyLink
  const intro = document === "termos" ? t.legal.termsIntro : t.legal.privacyIntro
  const other =
    document === "termos"
      ? { href: "/politica-de-privacidade", label: t.footer.privacyLink }
      : { href: "/termos-de-uso", label: t.footer.termsLink }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="px-4 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-6xl">
          {/* Cabeçalho */}
          <header className="reveal max-w-3xl">
            <SectionBadge>{t.legal.badge}</SectionBadge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">{title}</h1>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              {t.legal.lastUpdatedLabel}: {t.legal.updatedDate}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
          </header>

          {/* Resumo em linguagem simples */}
          <section aria-labelledby="resumo" className="reveal mt-12 rounded-[24px] border border-border bg-card p-6 md:p-10">
            <h2 id="resumo" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t.legal.summaryTitle}
            </h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2 md:gap-x-10">
              {doc.summary.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-sm font-semibold tabular-nums text-brand-lime">{pad(i + 1)}</span>
                  <p className="text-base leading-relaxed text-foreground">{withLinks(item)}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">{t.legal.summaryNote}</p>
          </section>

          <div className="mt-16">
            {/* Texto completo */}
            <div className="max-w-3xl">
              {doc.sections.map((section, i) => (
                <section
                  key={i}
                  id={`secao-${i + 1}`}
                  className="scroll-mt-28 border-t border-border py-10 first:border-t-0 first:pt-0"
                >
                  <p className="font-mono text-xs tabular-nums text-muted-foreground">{pad(i + 1)}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{section.title}</h2>
                  <div className="mt-5 space-y-4">{renderBody(section.paragraphs)}</div>
                </section>
              ))}

              <Link
                href={other.href}
                className="group mt-6 flex items-center justify-between gap-6 rounded-[24px] border border-border p-6 transition-colors hover:border-white/30 md:p-8"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.legal.otherDoc}</span>
                  <span className="mt-2 block text-xl font-semibold text-foreground">{other.label}</span>
                </span>
                <span aria-hidden="true" className="text-2xl text-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
