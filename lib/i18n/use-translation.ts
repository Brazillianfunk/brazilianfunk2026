"use client"

import { useLocale } from "./context"
import { dictionary } from "./dictionary"

export function useTranslation() {
  const { locale, setLocale } = useLocale()
  return { t: dictionary[locale], locale, setLocale }
}
