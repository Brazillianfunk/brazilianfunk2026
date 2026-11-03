"use client"

// Lista de artigos. Referências no 21st.dev: "Filterable Blog Index" (artigo
// em destaque + filtro por categoria + grade) e "Blog Section with Lined
// Grid" (cards separados por linhas, sem sombra).

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ArticleCover } from "@/components/artigos/article-cover"
import { ARTICLES, CATEGORIES, categoryLabel, formatDate, readingMinutes, type Article, type CategoryId } from "@/lib/artigos"

function Meta({ a }: { a: Article }) {
  const ready = a.body.length > 0
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="font-semibold uppercase tracking-wider text-foreground/80">{categoryLabel(a.category)}</span>
      <span aria-hidden="true">·</span>
      {ready ? <span>{readingMinutes(a)} min de leitura</span> : <span className="rounded-full border border-white/15 px-2 py-0.5">Em breve</span>}
    </div>
  )
}

function Card({ a }: { a: Article }) {
  const ready = a.body.length > 0
  const inner = (
    <>
      <ArticleCover word={a.cover.word} tone={a.cover.tone} className="aspect-[4/3] w-full rounded-2xl" />
      <div className="mt-5">
        <Meta a={a} />
        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground md:text-xl">{a.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
      </div>
    </>
  )
  return ready ? (
    <Link href={`/artigos/${a.slug}`} className="group block p-6 transition-colors hover:bg-white/[0.03] md:p-8">
      {inner}
    </Link>
  ) : (
    <div className="p-6 md:p-8">{inner}</div>
  )
}

export function ArticlesIndex() {
  const [cat, setCat] = useState<CategoryId | "todos">("todos")
  const [featured, ...rest] = ARTICLES
  const list = cat === "todos" ? rest : ARTICLES.filter((a) => a.category === cat)

  return (
    <>
      {/* Destaque */}
      {cat === "todos" && (
        <Link
          href={`/artigos/${featured.slug}`}
          className="group mt-14 grid overflow-hidden rounded-[32px] border border-border bg-card md:grid-cols-2"
        >
          <ArticleCover word={featured.cover.word} tone={featured.cover.tone} size="lg" className="aspect-[4/3] md:aspect-auto md:min-h-[420px]" />
          <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
            <div>
              <Meta a={featured} />
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">{featured.title}</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              Ler artigo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      )}

      {/* Filtro por categoria */}
      <div role="tablist" aria-label="Categorias" className="mt-14 flex flex-wrap gap-2">
        {[{ id: "todos" as const, label: "Todos" }, ...CATEGORIES].map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={cat === c.id}
            onClick={() => setCat(c.id)}
            className={cn(
              "h-10 rounded-full border px-4 text-sm font-medium transition-colors",
              cat === c.id
                ? "border-foreground bg-foreground text-background"
                : "border-white/15 text-muted-foreground hover:border-white/40 hover:text-foreground"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grade com linhas */}
      <div className="mt-8 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3 [&>*]:border-b [&>*]:border-r [&>*]:border-border">
        {list.map((a) => (
          <Card key={a.slug} a={a} />
        ))}
      </div>
    </>
  )
}
