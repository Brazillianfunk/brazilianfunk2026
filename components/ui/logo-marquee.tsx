import { Music2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PlatformIcon } from "@/components/ui/platform-icons"

// Faixa de logos em movimento contínuo.
// Referências no 21st.dev: "Infinite Slider" (ibelick) e "Logo Cloud
// Marquee" / "Logo Marquee": loop infinito sem costura, bordas que somem em
// degradê e pausa ao passar o mouse ou focar. Diferente do carrossel antigo,
// que mostrava só 4 nomes por vez, aqui todas as plataformas passam.
//
// Só CSS (sem JavaScript a cada quadro). Com "reduzir movimento" ativo, a
// faixa vira uma lista parada que quebra em linhas.

export function LogoMarquee({
  items,
  reverse = false,
  duration = 40,
  className,
  label,
}: {
  items: PlatformIcon[]
  reverse?: boolean
  /** Segundos para uma volta completa. */
  duration?: number
  className?: string
  label?: string
}) {
  const row = (copy: number) => (
    <ul
      aria-hidden={copy === 1 ? true : undefined}
      className="flex flex-none items-center gap-12 pr-12 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-6 motion-reduce:pr-0 md:gap-16 md:pr-16"
    >
      {items.map((p) => (
        <li key={p.name} className="flex flex-none items-center gap-3 text-foreground/70 transition-colors hover:text-foreground">
          {p.path ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current md:h-7 md:w-7">
              <path d={p.path} />
            </svg>
          ) : (
            <Music2 aria-hidden="true" className="h-6 w-6 md:h-7 md:w-7" />
          )}
          <span className="whitespace-nowrap text-lg font-semibold tracking-tight md:text-xl">{p.name}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]",
        className
      )}
    >
      <div
        className="flex w-max animate-[logo-marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none"
        style={{ "--marquee-duration": `${duration}s`, animationDirection: reverse ? "reverse" : "normal" } as React.CSSProperties}
      >
        {row(0)}
        <div className="flex motion-reduce:hidden">{row(1)}</div>
      </div>
    </div>
  )
}
