import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PageLoader } from "@/components/page-loader"
import { LocaleProvider } from "@/lib/i18n/context"

// A configuração com "variable" cria uma variável CSS (--font-inter) usada
// pela classe font-sans do Tailwind. Isso tem uma armadilha real do CSS:
// se essa variável falhar por qualquer motivo, a declaração inteira de
// font-family fica inválida (não é "pula pro próximo da lista"), e o
// navegador cai pro padrão dele — que é serifado, bem diferente da Inter.
// Por isso também aplicamos `inter.className` diretamente no <body> logo
// abaixo — é o mesmo padrão já usado com a Poppins em payment-section.tsx,
// que aplica a fonte de verdade sem depender de nenhuma variável
// intermediária. Combinando os dois, a fonte correta sempre é aplicada,
// mesmo se o mecanismo da variável falhar por algum motivo.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

const SITE_URL = "https://www.brazilianfunk.co"
const SITE_NAME = "Brazilian Funk"
const SITE_TITLE = "Brazilian Funk — A Distribuidora Musical do Funk"
const SITE_DESCRIPTION =
  "Distribuição musical especializada em Funk para artistas, DJs e gravadoras. Distribua para Spotify, Apple Music, TikTok, Amazon e mais de 40 plataformas globais."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Brazilian Funk",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "distribuição musical",
    "distribuidora de funk",
    "distribuição de funk",
    "distribuição digital de música",
    "royalties musicais",
    "distribuir música no Spotify",
    "gravadora de funk",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

// Dados estruturados (JSON-LD) — ajudam o Google a entender que a
// Brazilian Funk é uma organização real, com contato e redes sociais,
// podendo enriquecer o resultado de busca (rich snippets).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brazilian-funk-mark.png`,
  description: SITE_DESCRIPTION,
  email: "contato@brazilianfunk.online",
  sameAs: [
    "https://www.instagram.com/brazillianfunk/",
    "https://www.youtube.com/@BrazillianFunk",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-background font-sans text-foreground antialiased`}>
        <LocaleProvider>
          <PageLoader />
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
