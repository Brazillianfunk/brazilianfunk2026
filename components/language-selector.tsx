"use client"

import { useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n/use-translation"
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n/types"
import { useOnClickOutside } from "@/lib/use-on-click-outside"

export function LanguageSelector({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdownRef, () => setOpen(false))

  const selected = LOCALE_LABELS[locale]

  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
          "border-border bg-white/[0.03] backdrop-blur-md",
          "text-foreground transition-colors hover:bg-white/[0.06]"
        )}
      >
        <span aria-hidden="true">{selected.flag}</span>
        <span className="hidden sm:inline">{selected.label}</span>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="listbox"
          className={cn(
            "absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl",
            "border border-border bg-popover shadow-lg"
          )}
        >
          {LOCALES.map((code: Locale) => {
            const item = LOCALE_LABELS[code]
            const isSelected = code === locale
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLocale(code)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors",
                  isSelected
                    ? "font-semibold text-primary"
                    : "text-foreground hover:bg-white/[0.05]"
                )}
              >
                <span aria-hidden="true">{item.flag}</span>
                <span className="flex-1">{item.label}</span>
                {isSelected && <Check className="h-4 w-4 text-primary" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
