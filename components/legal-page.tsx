"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useTranslation } from "@/lib/i18n/use-translation"
import { legalTerms } from "@/lib/i18n/legal-terms"
import { legalPrivacy } from "@/lib/i18n/legal-privacy"

interface LegalPageProps {
  document: "termos" | "privacidade"
}

export default function LegalPage({ document }: LegalPageProps) {
  const { t, locale } = useTranslation()
  const sections = document === "termos" ? legalTerms[locale] : legalPrivacy[locale]
  const title = document === "termos" ? t.footer.termsLink : t.footer.privacyLink
  const intro = document === "privacidade" ? t.legal.privacyIntro : undefined

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <header className="mb-12 md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {t.legal.lastUpdatedLabel}: {t.legal.updatedDate}
            </p>
            {intro && (
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            )}
          </header>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                  {index + 1}. {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
