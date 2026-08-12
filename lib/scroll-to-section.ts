import type { MouseEvent } from "react"

// Rola até a seção manualmente em vez de depender só do href="#id" nativo —
// mais confiável em visualizadores que restringem a navegação padrão por
// âncora. Mantém o href intacto: clique com o botão do meio, "abrir em
// nova aba" etc. continuam funcionando. Usado pelo Navbar e pelo Footer.
//
// Também funciona a partir de QUALQUER outra página do site (ex: clicar
// em "Distribuição" estando em /termos-de-uso): o href deve ser escrito
// como "/#distribuicao" (com a barra na frente). Se já estivermos na
// Home, intercepta e rola suave sem navegar; se estivermos em outra
// página, deixa a navegação normal do Next.js Link acontecer — ele leva
// pra Home e rola até a âncora sozinho, sem precisar de nenhum código
// extra aqui.
export function scrollToSection(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href")
  if (!href) return

  const hashIndex = href.indexOf("#")
  if (hashIndex === -1) return

  const hash = href.slice(hashIndex)
  const pathPart = href.slice(0, hashIndex)

  // Um href sem caminho na frente (ex: "#distribuicao", sem a barra) é
  // tratado como "sempre a página atual" — mantém compatibilidade com
  // qualquer uso antigo desse formato.
  const isCurrentPage = pathPart === "" || pathPart === window.location.pathname
  if (!isCurrentPage) return

  const target = document.querySelector(hash)
  if (!target) return
  e.preventDefault()
  target.scrollIntoView({ behavior: "smooth", block: "start" })
}
