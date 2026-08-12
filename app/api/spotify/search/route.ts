import { NextRequest, NextResponse } from "next/server"

// ---------------------------------------------------------------------------
// Rota de servidor (Next.js Route Handler) — nunca roda no navegador, então
// o Client Secret do Spotify fica seguro aqui.
//
// Pré-requisito: criar um App em https://developer.spotify.com/dashboard
// (gratuito) e definir estas duas variáveis de ambiente (num arquivo
// .env.local, que nunca deve ir pro Git):
//
//   SPOTIFY_CLIENT_ID=...
//   SPOTIFY_CLIENT_SECRET=...
//
// Sem essas variáveis definidas, essa rota responde com erro 500 e uma
// mensagem clara — não falha silenciosamente.
//
// Suporta dois formatos de busca, batendo com o placeholder da referência
// ("Search your artist or paste a Spotify link"):
//  - Texto livre -> busca por nome (GET /v1/search?type=artist)
//  - Link do Spotify colado -> busca o artista exato pelo ID (GET /v1/artists/{id})
//
// Limitação real da API do Spotify (não é algo que dá pra contornar por
// aqui): não existe um tipo de busca "gravadora"/"label" — só artista,
// álbum, playlist etc. Por isso todo resultado real vem marcado como
// "artist", mesmo quando o solicitante escolheu "Gravadora" na primeira
// etapa do formulário.

interface SpotifyTokenResponse {
  access_token: string
  expires_in: number
}

interface SpotifyArtist {
  id: string
  name: string
  external_urls: { spotify: string }
  images: { url: string }[]
  // A Spotify removeu esse campo da resposta pra apps em "Development
  // Mode" a partir de fev/mar de 2026 (changelog oficial: "[REMOVED]
  // followers — Information about the followers of the artist."). Fica
  // opcional aqui pra refletir a realidade atual da API — não é mais
  // garantido que essa chave venha preenchida (ou venha, sequer).
  followers?: { total: number }
}

// Cache simples em memória — evita pedir um token novo a cada busca.
// Em ambiente serverless "de verdade" cada instância fria perde esse
// cache, o que é aceitável (só significa 1 chamada extra ocasional pro
// endpoint de token, que não conta contra o limite de taxa de busca).
let cachedToken: { value: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error(
      "SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET não configurados. Crie um App em https://developer.spotify.com/dashboard e defina essas variáveis em .env.local."
    )
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })

  if (!response.ok) {
    throw new Error(`Falha ao autenticar com o Spotify (status ${response.status})`)
  }

  const data: SpotifyTokenResponse = await response.json()
  cachedToken = {
    value: data.access_token,
    // Renova 60s antes de expirar de verdade, por segurança.
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  }
  return cachedToken.value
}

function extractSpotifyArtistId(input: string): string | null {
  // Aceita link completo (https://open.spotify.com/artist/ID?si=...) ou URI
  // (spotify:artist:ID).
  const urlMatch = input.match(/open\.spotify\.com\/artist\/([a-zA-Z0-9]+)/)
  if (urlMatch) return urlMatch[1]
  const uriMatch = input.match(/spotify:artist:([a-zA-Z0-9]+)/)
  if (uriMatch) return uriMatch[1]
  return null
}

function mapArtist(artist: SpotifyArtist) {
  return {
    id: artist.id,
    name: artist.name,
    url: artist.external_urls.spotify,
    type: "artist" as const,
    imageUrl: artist.images[0]?.url ?? null,
    // Sem ?? 0 de propósito: quando a Spotify não manda esse dado (caso
    // comum agora, ver comentário na interface SpotifyArtist acima),
    // fica undefined — e a interface (spotify-field.tsx) já sabe
    // esconder a contagem nesse caso, em vez de mostrar "0 seguidores"
    // de forma enganosa pra um artista que na verdade tem seguidores,
    // só que a API não informa mais.
    followers: artist.followers?.total,
  }
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim()

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  let token: string
  try {
    token = await getAccessToken()
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Erro de autenticação com o Spotify" }, { status: 500 })
  }

  const spotifyId = extractSpotifyArtistId(query)

  try {
    if (spotifyId) {
      // Link/URI colado -> busca o artista exato.
      const res = await fetch(`https://api.spotify.com/v1/artists/${spotifyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) {
        return NextResponse.json({ results: [] })
      }
      const artist: SpotifyArtist = await res.json()
      return NextResponse.json({ results: [mapArtist(artist)] })
    }

    // Texto livre -> busca por nome.
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist&limit=8`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    if (!res.ok) {
      return NextResponse.json({ error: `Busca falhou (status ${res.status})` }, { status: 502 })
    }
    const data = await res.json()
    const results = (data.artists?.items ?? []).map(mapArtist)
    return NextResponse.json({ results })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Erro ao buscar no Spotify" }, { status: 500 })
  }
}