"use client"

// Blog.
//
// Referência no 21st.dev: "Blog 7" (shadcnblocks): cabeçalho com selo e
// link "ver todas" à direita, e os cards de matéria com imagem, categoria,
// data e título. Aqui a primeira matéria ganha destaque grande e as outras
// ficam numa lista ao lado, em vez do carrossel com setas: todas aparecem
// de uma vez, sem precisar clicar.

import { ArrowUpRight } from "lucide-react"
import { useTranslation } from "@/lib/i18n/use-translation"
import { SectionBadge } from "@/components/ui/section-badge"

interface ArticleAsset {
  id: number
  imageSrc: string
  categoryKey: "noticias" | "cultura" | "tecnologia" | "lancamentos"
  linkHref: string
}

const ARTICLE_ASSETS: ArticleAsset[] = [
  {
    id: 1,
    imageSrc: "/blog/noticia-sxsw-2026.jpg",
    categoryKey: "noticias",
    linkHref: "https://www.instagram.com/p/DVeiBvzEat4/?igsh=NW8yMDJmcDg3bG55",
  },
  {
    id: 2,
    imageSrc: "/blog/noticia-cultura-baixada-santista.jpg",
    categoryKey: "cultura",
    linkHref: "https://www.instagram.com/p/DVjpw9Mjcte/?igsh=emwyOTZveXIyZmt2",
  },
  {
    id: 3,
    imageSrc: "/blog/noticia-tecnologia-songdna.jpg",
    categoryKey: "tecnologia",
    linkHref: "https://www.instagram.com/p/DXP9jSmFrK4/?igsh=MW1sYWdhOHhqYTVhcQ%3D%3D",
  },
  {
    id: 4,
    imageSrc: "/blog/noticia-lancamentos-semana.jpg",
    categoryKey: "lancamentos",
    linkHref: "https://www.instagram.com/p/Davyy7tFnMs/?igsh=am1seHM2d280Z2hk",
  },
]

const INSTAGRAM_URL = "https://www.instagram.com/brazillianfunk/"

export default function BlogSection() {
  const { t } = useTranslation()
  const articles = ARTICLE_ASSETS.map((asset, i) => ({
    ...asset,
    category: t.blog.categories[asset.categoryKey],
    title: t.blog.articles[i].title,
    date: t.blog.articles[i].date,
  }))
  const [featured, ...rest] = articles

  const meta = (category: string, date: string) => (
    <p className="flex items-center gap-3 text-xs">
      <span className="font-semibold uppercase tracking-wider text-foreground">{category}</span>
      <span className="text-muted-foreground">{date}</span>
    </p>
  )

  return (
    <section id="noticias" className="scroll-mt-24 bg-background px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionBadge>{t.blog.badge}</SectionBadge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{t.blog.subtitle}</h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            {t.blog.viewAll}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          {/* Matéria em destaque */}
          <a href={featured.linkHref} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="overflow-hidden rounded-[24px] border border-border">
              <img
                src={featured.imageSrc}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6">
              {meta(featured.category, featured.date)}
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">{featured.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                {t.blog.readMore}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {/* Demais matérias */}
          <ul className="divide-y divide-border border-y border-border">
            {rest.map((a) => (
              <li key={a.id}>
                <a href={a.linkHref} target="_blank" rel="noopener noreferrer" className="group flex gap-5 py-6">
                  <div className="h-24 w-32 flex-none overflow-hidden rounded-xl border border-border">
                    <img
                      src={a.imageSrc}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="min-w-0">
                    {meta(a.category, a.date)}
                    <h3 className="mt-2 text-lg font-bold leading-snug text-foreground group-hover:underline group-hover:underline-offset-4">
                      {a.title}
                    </h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
