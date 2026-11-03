import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArticleCover } from "@/components/artigos/article-cover"
import {
  ARTICLES,
  categoryLabel,
  formatDate,
  getArticle,
  publishedArticles,
  readingMinutes,
  type Block,
} from "@/lib/artigos"

const SITE_URL = "https://www.brazilianfunk.co"

export function generateStaticParams() {
  return publishedArticles().map((a) => ({ slug: a.slug }))
}
export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/artigos/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date },
  }
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-14 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {b.text}
        </h2>
      )
    case "p":
      return (
        <p key={i} className="mt-5 text-[17px] leading-[1.75] text-muted-foreground">
          {b.text}
        </p>
      )
    case "list":
      return (
        <ul key={i} className="mt-5 list-disc space-y-3 pl-5 marker:text-white/30">
          {b.items.map((t, j) => (
            <li key={j} className="pl-1 text-[17px] leading-[1.7] text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      )
    case "steps":
      return (
        <ol key={i} className="mt-6 border-t border-border">
          {b.items.map((s, j) => (
            <li key={j} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-border py-6">
              <span className="text-sm font-semibold tabular-nums text-muted-foreground">{String(j + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-lg font-semibold text-foreground">{s.title}</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      )
    case "note":
      return (
        <p key={i} className="mt-8 rounded-2xl border border-border bg-card p-6 text-base leading-relaxed text-foreground/85">
          {b.text}
        </p>
      )
  }
}

export default function ArtigoPage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug)
  if (!a) notFound()

  const related = ARTICLES.filter((r) => r.slug !== a.slug).slice(0, 3)

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.excerpt,
      datePublished: a.date,
      dateModified: a.date,
      inLanguage: "pt-BR",
      mainEntityOfPage: `${SITE_URL}/artigos/${a.slug}`,
      image: `${SITE_URL}/opengraph-image.jpg`,
      author: { "@type": "Organization", name: "Brazilian Funk", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Brazilian Funk",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/brazilian-funk-logo-quadrado.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Artigos", item: `${SITE_URL}/artigos` },
        { "@type": "ListItem", position: 3, name: a.title, item: `${SITE_URL}/artigos/${a.slug}` },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="px-4 pb-24 pt-36 md:pt-44">
        <div className="mx-auto max-w-3xl">
          <Link href="/artigos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Artigos
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-foreground/80">{categoryLabel(a.category)}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl">{a.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{a.excerpt}</p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-foreground">Brazilian Funk</span>
            <span aria-hidden="true">·</span>
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingMinutes(a)} min de leitura</span>
          </div>
        </div>

        <ArticleCover word={a.cover.word} tone={a.cover.tone} size="lg" className="mx-auto mt-12 aspect-[21/9] max-w-6xl rounded-[32px]" />

        <div className="mx-auto mt-6 max-w-3xl">
          {a.body.map(renderBlock)}

          {a.sources && (
            <div className="mt-14 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fonte</p>
              <ul className="mt-3 space-y-2">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-foreground underline-offset-4 hover:underline">
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Chamada para distribuir */}
        <div className="mx-auto mt-20 flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[32px] bg-primary p-10 md:flex-row md:items-center md:p-14">
          <p className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">Quer distribuir com a Brazilian Funk?</p>
          <Button href="/solicitar-acesso" size="lg" variant="light">
            Começar agora
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        {/* Leia também */}
        <div className="mx-auto mt-24 max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Leia também</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => {
              const ready = r.body.length > 0
              const content = (
                <>
                  <ArticleCover word={r.cover.word} tone={r.cover.tone} className="aspect-[16/10] rounded-2xl" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {categoryLabel(r.category)}
                    {!ready && " · Em breve"}
                  </p>
                  <p className="mt-2 font-semibold leading-snug text-foreground">{r.title}</p>
                </>
              )
              return ready ? (
                <Link key={r.slug} href={`/artigos/${r.slug}`} className="block">
                  {content}
                </Link>
              ) : (
                <div key={r.slug}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
