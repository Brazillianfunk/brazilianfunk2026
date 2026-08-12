"use client"

import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { scrollToSection } from "@/lib/scroll-to-section"
import { useTranslation } from "@/lib/i18n/use-translation"

const CONTACT_LINKS = [
  { name: "contato@brazilianfunk.online", href: "mailto:contato@brazilianfunk.online" },
  { name: "+55 92 98175-5727", href: "tel:+5592981755727" },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=5592981755727&text=Ol%C3%A1%2C+Brazilian+Funk.+Podem+me+ajudar+%3F&type=phone_number&app_absent=0",
    external: true,
  },
]

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/brazillianfunk/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BrazillianFunk",
    icon: Youtube,
  },
]

const RECLAME_AQUI_URL = "https://www.reclameaqui.com.br/empresa/brazilian-funk/"

function FooterLink({
  name,
  href,
  external,
}: {
  name: string
  href: string
  external?: boolean
}) {
  const isAnchor = href.includes("#")

  if (isAnchor) {
    return (
      <li className="font-medium text-muted-foreground transition-colors hover:text-primary">
        <Link href={href} onClick={scrollToSection}>
          {name}
        </Link>
      </li>
    )
  }

  return (
    <li className="font-medium text-muted-foreground transition-colors hover:text-primary">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {name}
      </a>
    </li>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  // Conteúdo (Notícias/Cultura/Tecnologia/Lançamentos) — os 4 nomes vêm
  // do mesmo dicionário de categorias já usado no Blog, todos apontando
  // pra seção única (não existem sub-páginas por categoria).
  const contentLinks = [
    { name: t.blog.categories.noticias, href: "/#noticias" },
    { name: t.blog.categories.cultura, href: "/#noticias" },
    { name: t.blog.categories.tecnologia, href: "/#noticias" },
    { name: t.blog.categories.lancamentos, href: "/#noticias" },
  ]

  return (
    <footer className="border-t border-border bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">
          {/* Coluna 1 — Brazilian Funk */}
          <div className="flex w-full flex-col gap-6 lg:max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/brazilian-funk-mark.png"
                alt="Brazilian Funk"
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold text-foreground">
                Brazilian Funk
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
            <ul className="flex items-center gap-4 text-muted-foreground">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name} className="transition-colors hover:text-primary">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.footer.socialAriaTemplate.replace("{name}", social.name)}
                  >
                    <social.icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colunas 2, 3 e 4 */}
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-12">
            <div>
              <h3 className="mb-4 text-sm font-bold text-foreground">
                {t.footer.colContent}
              </h3>
              <ul className="space-y-3 text-sm">
                {contentLinks.map((link) => (
                  <FooterLink key={link.name} {...link} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold text-foreground">
                {t.footer.colContact}
              </h3>
              <ul className="space-y-3 text-sm">
                {CONTACT_LINKS.map((link) => (
                  <FooterLink key={link.name} {...link} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold text-foreground">
                {t.footer.colReclameAqui}
              </h3>
              <a
                href={RECLAME_AQUI_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.reclameAquiAria}
                className="inline-flex"
              >
                <img
                  src="/reclame-aqui.png"
                  alt="Reclame Aqui"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row">
          <p>{t.footer.copyright}</p>
          <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <li className="transition-colors hover:text-primary">
              <Link href="/termos-de-uso">{t.footer.termsLink}</Link>
            </li>
            <li className="transition-colors hover:text-primary">
              <Link href="/politica-de-privacidade">{t.footer.privacyLink}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
