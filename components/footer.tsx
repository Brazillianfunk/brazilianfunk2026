"use client"

// Rodapé.
//
// Referências no 21st.dev: "Footer 7" (shadcnblocks), com marca e descrição
// à esquerda e colunas de links à direita, e "Large Name Footer", com o nome
// da marca bem grande fechando a página. Aqui o "nome grande" é o próprio
// logo da Brazilian Funk.

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
  { name: "Instagram", href: "https://www.instagram.com/brazillianfunk/", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@BrazillianFunk", icon: Youtube },
]

const RECLAME_AQUI_URL = "https://www.reclameaqui.com.br/empresa/brazilian-funk/"

const linkClass = "text-muted-foreground transition-colors hover:text-foreground"

export default function Footer() {
  const { t } = useTranslation()

  // As 4 categorias do Blog apontam para a mesma seção (não há páginas por categoria).
  const contentLinks = [
    t.blog.categories.noticias,
    t.blog.categories.cultura,
    t.blog.categories.tecnologia,
    t.blog.categories.lancamentos,
  ]

  return (
    <footer className="relative border-t border-border bg-background px-4 pt-16 md:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* Marca */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/brazilian-funk-mark.png" alt="" className="h-9 w-auto" />
              <span className="text-lg font-bold text-foreground">Brazilian Funk</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.footer.description}</p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.footer.socialAriaTemplate.replace("{name}", social.name)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-white/40 hover:text-foreground"
                  >
                    <social.icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colunas */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{t.footer.colContent}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {contentLinks.map((name) => (
                  <li key={name}>
                    <Link href="/#noticias" onClick={scrollToSection} className={linkClass}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{t.footer.colContact}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name} className="[overflow-wrap:anywhere]">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={linkClass}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{t.footer.colReclameAqui}</h3>
              <a
                href={RECLAME_AQUI_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.reclameAquiAria}
                className="mt-5 inline-flex"
              >
                <img src="/reclame-aqui.png" alt="Reclame Aqui" className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground sm:flex-row sm:items-center">
          <p>{t.footer.copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/termos-de-uso" className={linkClass}>
                {t.footer.termsLink}
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className={linkClass}>
                {t.footer.privacyLink}
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo grande fechando a página */}
        <div aria-hidden="true" className="reveal mt-10 overflow-hidden pb-6">
          <img src="/brazilian-funk-logo.png" alt="" className="w-full opacity-[0.08]" />
        </div>
      </div>
    </footer>
  )
}
