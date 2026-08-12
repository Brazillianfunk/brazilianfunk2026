"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// ---------------------------------------------------------------------------
//
// Campo de busca do perfil no Spotify — busca real, via
// /api/spotify/search (rota de servidor, ver app/api/spotify/search/route.ts).
// A seleção guarda o objeto inteiro (id, nome, url) devolvido pela API do
// Spotify, não o texto digitado.
//
// Debounce de 350ms: só dispara a busca depois que a pessoa para de
// digitar por um instante — evita uma chamada de rede a cada tecla.
//
// Também aceita colar um link do Spotify direto (mesmo comportamento do
// placeholder "Search your artist or paste a Spotify link" da
// referência) — a rota de API já detecta isso e busca o artista exato.

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Check, X as XIcon, Loader2 } from "lucide-react"

export interface SpotifyProfile {
  id: string
  name: string
  url: string
  type: "artist"
  imageUrl: string | null
  followers?: number
}

interface SpotifyFieldProps {
  value: SpotifyProfile | null
  onChange: (profile: SpotifyProfile | null) => void
  autoFocus?: boolean
}

export function SpotifyField({ value, onChange, autoFocus }: SpotifyFieldProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SpotifyProfile[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!query.trim()) {
      setResults([])
      setIsLoading(false)
      setError(null)
      return
    }

    setIsLoading(true)
    setError(null)

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/spotify/search?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        if (!res.ok) {
          setError(data.error || "Não foi possível buscar agora.")
          setResults([])
        } else {
          setResults(data.results ?? [])
        }
      } catch {
        setError("Não foi possível buscar agora. Verifique sua conexão.")
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 350)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Perfil já selecionado — mostra claramente, com opção de trocar.
  if (value) {
    return (
      <div className="flex items-center justify-between rounded-md border border-primary/40 bg-primary/5 px-4 py-4">
        <div className="flex items-center gap-3">
          {value.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value.imageUrl} alt="" className="size-8 flex-none rounded-full object-cover" />
          ) : (
            <div className="flex size-8 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="size-4" />
            </div>
          )}
          <div>
            <p className="text-base font-medium text-foreground">{value.name}</p>
            <p className="text-xs text-muted-foreground">Artista no Spotify</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            onChange(null)
            setQuery("")
          }}
          aria-label="Trocar perfil selecionado"
          className="text-muted-foreground hover:text-foreground"
        >
          <XIcon className="size-4" />
        </button>
      </div>
    )
  }

  return (
    <div ref={wrapRef} className="relative">
      <div className="flex items-center gap-3 rounded-md border border-input px-4 focus-within:border-primary">
        {isLoading ? (
          <Loader2 className="size-4 flex-none animate-spin text-muted-foreground" />
        ) : (
          <Search className="size-4 flex-none text-muted-foreground" />
        )}
        <input
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar seu artista ou colar link do Spotify"
          className="w-full bg-transparent py-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      <AnimatePresence>
        {isOpen && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-md border border-border bg-popover shadow-2xl"
          >
            {error ? (
              <p className="px-4 py-3 text-sm text-destructive">{error}</p>
            ) : isLoading ? (
              <p className="px-4 py-3 text-sm text-muted-foreground">Buscando...</p>
            ) : results.length === 0 ? (
              <p className="px-4 py-3 text-sm text-muted-foreground">Nenhum resultado encontrado.</p>
            ) : (
              results.map((profile, index) => (
                <motion.button
                  key={profile.id}
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.03 }}
                  onClick={() => {
                    onChange(profile)
                    setIsOpen(false)
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-accent"
                >
                  {profile.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={profile.imageUrl} alt="" className="size-9 flex-none rounded-full object-cover" />
                  ) : (
                    <div className="flex size-9 flex-none items-center justify-center rounded-full bg-accent text-muted-foreground">
                      <Search className="size-4" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{profile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Artista{typeof profile.followers === "number" ? ` · ${profile.followers.toLocaleString("pt-BR")} seguidores` : ""}
                    </p>
                  </div>
                </motion.button>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
