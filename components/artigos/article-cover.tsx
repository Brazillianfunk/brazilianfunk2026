import { cn } from "@/lib/utils"
import type { CoverTone } from "@/lib/artigos"

// Capa tipográfica dos artigos: uma palavra grande nas cores da marca e as
// barras do logo no canto. Sem foto de artista, para não parecer que o
// artigo fala de um lançamento específico.
const TONES: Record<CoverTone, { bg: string; fg: string; bars: string }> = {
  navy: { bg: "bg-[#022775]", fg: "text-[#d7fc32]", bars: "bg-[#d7fc32]" },
  lime: { bg: "bg-[#d7fc32]", fg: "text-[#022775]", bars: "bg-[#022775]" },
  blue: { bg: "bg-primary", fg: "text-white", bars: "bg-white" },
  light: { bg: "bg-foreground", fg: "text-background", bars: "bg-primary" },
}

const BARS = [28, 46, 70, 58, 92, 100, 76]

export function ArticleCover({
  word,
  tone,
  size = "md",
  className,
}: {
  word: string
  tone: CoverTone
  size?: "md" | "lg"
  className?: string
}) {
  const t = TONES[tone]
  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden [container-type:inline-size]", t.bg, className)}>
      <div className="absolute right-[7%] top-[12%] flex h-[34%] items-center gap-[5%]" style={{ width: size === "lg" ? "18%" : "26%" }}>
        {BARS.map((h, i) => (
          <span key={i} className={cn("w-full rounded-full", t.bars)} style={{ height: `${h}%` }} />
        ))}
      </div>
      <span
        className={cn("absolute bottom-[8%] left-[7%] whitespace-nowrap font-black uppercase leading-[0.85] tracking-[-0.04em]", t.fg)}
        // A palavra ocupa no máximo ~86% da largura da capa, seja qual for o tamanho.
        style={{ fontSize: `${Math.min(size === "lg" ? 20 : 26, 86 / (word.length * 0.66))}cqw` }}
      >
        {word}
      </span>
    </div>
  )
}
