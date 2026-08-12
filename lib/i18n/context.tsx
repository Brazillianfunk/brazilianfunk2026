"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { type Locale, DEFAULT_LOCALE, LOCALES } from "./types"

const STORAGE_KEY = "brazilian-funk-locale"

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Lê a preferência salva (se existir) assim que monta no navegador —
  // fica em useEffect pra não quebrar o SSR (localStorage não existe no
  // servidor) e pra evitar hydration mismatch.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && LOCALES.includes(saved as Locale)) {
      setLocaleState(saved as Locale)
    }
  }, [])

  function setLocale(next: Locale) {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error("useLocale precisa ser usado dentro de um LocaleProvider")
  }
  return ctx
}
