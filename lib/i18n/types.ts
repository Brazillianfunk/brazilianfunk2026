export type Locale = "pt" | "en" | "es"

export const LOCALES: Locale[] = ["pt", "en", "es"]

export const DEFAULT_LOCALE: Locale = "pt"

export const LOCALE_LABELS: Record<Locale, { label: string; flag: string }> = {
  pt: { label: "Português", flag: "🇧🇷" },
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
}
