"use client"

import { motion } from "framer-motion"

// `template.tsx` (diferente de `layout.tsx`) remonta a cada navegação —
// é o lugar certo do Next.js App Router pra animação de entrada por
// página. Precisa do next/link (em vez de <a> comum) nos links internos
// pra essa transição funcionar de verdade: <a> normal recarrega a página
// inteira no navegador, o que impede qualquer fade suave entre rotas.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
