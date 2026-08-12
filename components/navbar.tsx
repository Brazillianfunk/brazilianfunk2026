"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Pra ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
import { useState } from "react"
import Link from "next/link"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { scrollToSection } from "@/lib/scroll-to-section"
import { useTranslation } from "@/lib/i18n/use-translation"
import { LanguageSelector } from "@/components/language-selector"

export default function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { name: t.nav.distribuicao, link: "/#distribuicao" },
    { name: t.nav.ferramentas, link: "/#ferramentas" },
    { name: t.nav.noticias, link: "/#noticias", highlight: true },
  ]

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={scrollToSection} />
        <div className="flex flex-shrink-0 items-center gap-2">
          <LanguageSelector />
          <NavbarButton href="https://app.brazilianfunk.co/pt-br/sign-in" variant="secondary">
            {t.nav.entrar}
          </NavbarButton>
          <NavbarButton as={Link} href="/solicitar-acesso" variant="primary">
            {t.nav.comecar}
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                scrollToSection(e)
                setIsMobileMenuOpen(false)
              }}
              className="relative text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span
                className={
                  item.highlight
                    ? "rounded-full border px-2 py-0.5"
                    : undefined
                }
                style={item.highlight ? { borderColor: "#ffcb00" } : undefined}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2">
            <NavbarButton
              href="https://app.brazilianfunk.co/pt-br/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full border border-border"
            >
              {t.nav.entrar}
            </NavbarButton>
            <NavbarButton
              as={Link}
              href="/solicitar-acesso"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              {t.nav.comecar}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
