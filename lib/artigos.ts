// Central de artigos (/artigos).
//
// Cada artigo é uma página própria, gerada de forma estática, para o Google
// ler o conteúdo. Artigos com `body` vazio aparecem na lista como "Em breve"
// e não geram página: só são publicados quando o texto estiver pronto.
//
// Regra de conteúdo: informações sobre plataformas vêm das fontes oficiais
// (listadas em `sources`). Nada sobre a Brazilian Funk que não esteja no site.

export type CategoryId = "lancamentos" | "spotify" | "royalties" | "carreira"

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "lancamentos", label: "Lançamentos" },
  { id: "spotify", label: "Spotify e plataformas" },
  { id: "royalties", label: "Royalties e pagamentos" },
  { id: "carreira", label: "Carreira" },
]

export type CoverTone = "navy" | "lime" | "blue" | "light"

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "note"; text: string }

export interface Article {
  slug: string
  category: CategoryId
  title: string
  excerpt: string
  cover: { word: string; tone: CoverTone }
  date: string // ISO
  body: Block[]
  sources?: { label: string; url: string }[]
}

export const ARTICLES: Article[] = [
  {
    slug: "como-enviar-musica-para-playlists-do-spotify",
    category: "spotify",
    title: "Como enviar sua música para as playlists editoriais do Spotify",
    excerpt:
      "O envio é feito por você, no Spotify for Artists, antes do lançamento. Veja as regras, o prazo e o que acontece depois.",
    cover: { word: "Playlists", tone: "navy" },
    date: "2026-11-03",
    body: [
      {
        type: "p",
        text: "As playlists editoriais do Spotify são montadas pela equipe de editores da plataforma. Para que uma música nova seja considerada, o próprio artista (ou alguém da equipe dele) envia a faixa para avaliação pelo Spotify for Artists. Esse envio é chamado de pitch e só pode ser feito antes do lançamento.",
      },
      { type: "h2", text: "O que você precisa antes de enviar" },
      {
        type: "list",
        items: [
          "Acesso ao seu perfil no Spotify for Artists como administrador ou editor.",
          "O lançamento já entregue pela distribuidora, com data de lançamento no futuro. É assim que a música aparece no Spotify for Artists como próximo lançamento.",
          "Uma música inédita. Faixas que já estão no ar não podem ser enviadas.",
        ],
      },
      { type: "h2", text: "As regras do envio" },
      {
        type: "list",
        items: [
          "Envie pelo menos 7 dias antes da data de lançamento, para os editores terem tempo de ouvir.",
          "Uma música por vez. Em um EP ou álbum, escolha a faixa principal.",
          "Compilações e músicas em que você aparece apenas como artista convidado não podem ser enviadas.",
        ],
      },
      { type: "h2", text: "Passo a passo" },
      {
        type: "steps",
        items: [
          {
            title: "Agende o lançamento com antecedência",
            text: "Defina a data de lançamento na distribuidora com folga, para a música aparecer no Spotify for Artists antes do prazo de 7 dias.",
          },
          {
            title: "Abra o próximo lançamento",
            text: "No Spotify for Artists, encontre a música na lista de próximos lançamentos e escolha enviar para os editores.",
          },
          {
            title: "Descreva a faixa",
            text: "Preencha as informações sobre gênero, estilo e clima da música, e escreva um texto curto apresentando a faixa.",
          },
          {
            title: "Envie e acompanhe",
            text: "Depois do lançamento, confira em Música e depois Playlists se a faixa entrou em alguma playlist.",
          },
        ],
      },
      { type: "h2", text: "Mesmo sem playlist editorial, vale enviar" },
      {
        type: "p",
        text: "Quando o envio é feito com pelo menos 7 dias de antecedência, a música entra no Radar de Novidades dos seus seguidores, a playlist personalizada que o Spotify atualiza toda sexta-feira com lançamentos dos artistas que cada pessoa segue.",
      },
      {
        type: "note",
        text: "Os editores podem escolher uma faixa diferente da que você enviou para as playlists deles. O envio não garante inclusão.",
      },
    ],
    sources: [
      {
        label: "Spotify for Artists: como enviar música aos editores de playlists",
        url: "https://support.spotify.com/br-pt/artists/article/pitching-music-to-playlist-editors/",
      },
    ],
  },
  {
    slug: "divisao-de-royalties-entre-colaboradores",
    category: "royalties",
    title: "Divisão de royalties: como definir a porcentagem de cada colaborador",
    excerpt: "Artista, feat. e produção: como combinar e registrar a divisão de uma faixa antes do lançamento.",
    cover: { word: "Royalties", tone: "lime" },
    date: "2026-11-03",
    body: [],
  },
  {
    slug: "como-reivindicar-perfil-spotify-for-artists",
    category: "spotify",
    title: "Como reivindicar seu perfil no Spotify for Artists",
    excerpt: "Foto, bio, estatísticas e envio para playlists começam aqui. Veja como liberar o acesso ao seu perfil.",
    cover: { word: "Perfil", tone: "blue" },
    date: "2026-11-03",
    body: [],
  },
  {
    slug: "o-que-e-isrc-e-upc",
    category: "lancamentos",
    title: "ISRC e UPC: os códigos que identificam sua música",
    excerpt: "Um identifica a gravação, o outro o lançamento. Entenda a diferença e por que eles importam.",
    cover: { word: "ISRC", tone: "light" },
    date: "2026-11-03",
    body: [],
  },
  {
    slug: "capa-do-single-requisitos",
    category: "lancamentos",
    title: "Capa do single: o que as plataformas aceitam e o que recusam",
    excerpt: "Tamanho, formato e o que não pode aparecer na arte para o lançamento não travar na revisão.",
    cover: { word: "Capa", tone: "navy" },
    date: "2026-11-03",
    body: [],
  },
  {
    slug: "por-que-lancar-na-sexta-feira",
    category: "carreira",
    title: "Por que os lançamentos saem na sexta-feira",
    excerpt: "O dia em que as plataformas renovam as playlists de novidades no mundo todo.",
    cover: { word: "Sexta", tone: "lime" },
    date: "2026-11-03",
    body: [],
  },
  {
    slug: "pre-save-o-que-e",
    category: "carreira",
    title: "Pre-save: o que é e quando vale a pena usar",
    excerpt: "Deixe a música salva na biblioteca dos fãs antes de ela sair.",
    cover: { word: "Pre-save", tone: "blue" },
    date: "2026-11-03",
    body: [],
  },
]

export const publishedArticles = () => ARTICLES.filter((a) => a.body.length > 0)
export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug && a.body.length > 0)
export const categoryLabel = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)?.label ?? ""

export function readingMinutes(a: Article) {
  const words = a.body
    .map((b) =>
      b.type === "list" ? b.items.join(" ") : b.type === "steps" ? b.items.map((s) => s.title + " " + s.text).join(" ") : b.text
    )
    .join(" ")
    .split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" }).replace(".", "")
}
