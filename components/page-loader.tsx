"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { OrbitalLoader } from "@/components/ui/orbital-loader"

// Duração mínima em tela, pra não "piscar" em conexões rápidas (o loader
// aparece por pelo menos esse tempo, mesmo que a página já tenha carregado
// antes disso).
const MIN_DISPLAY_MS = 700

// Limite de segurança: se por algum motivo o evento "load" da janela nunca
// disparar, o loader some sozinho depois desse tempo em vez de travar o
// usuário pra sempre atrás dele.
const MAX_WAIT_MS = 6000

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Trava o scroll da página enquanto o loader está visível.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const start = Date.now()
    let finished = false
    let finishTimer: number | null = null

    function finish() {
      if (finished) return
      finished = true
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
      finishTimer = window.setTimeout(() => setLoading(false), remaining)
    }

    if (document.readyState === "complete") {
      finish()
    } else {
      window.addEventListener("load", finish)
    }

    const safetyTimer = window.setTimeout(finish, MAX_WAIT_MS)

    return () => {
      window.removeEventListener("load", finish)
      window.clearTimeout(safetyTimer)
      if (finishTimer) window.clearTimeout(finishTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = ""
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
        >
          <img
            src="/brazilian-funk-mark.png"
            alt="Brazilian Funk"
            className="h-12 w-auto animate-pulse"
          />
          <OrbitalLoader />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
