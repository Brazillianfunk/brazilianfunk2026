"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Pra ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------

import React, { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

export interface Logo {
  name: string
  id: number
  color: string
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
  reduceMotion: boolean
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime, reduceMotion }) => {
    const cycleInterval = 2200
    const columnDelay = index * 200
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = reduceMotion
      ? 0
      : Math.floor(adjustedTime / cycleInterval)
    const current = logos[currentIndex]

    return (
      <motion.div
        className="relative flex h-14 w-36 items-center justify-center overflow-hidden md:h-20 md:w-52"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: reduceMotion ? 0 : index * 0.08,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={
              reduceMotion
                ? false
                : { y: "8%", opacity: 0, filter: "blur(6px)" }
            }
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: reduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                    mass: 1,
                    duration: 0.4,
                  },
            }}
            exit={
              reduceMotion
                ? { opacity: 1 }
                : {
                    y: "-12%",
                    opacity: 0,
                    filter: "blur(4px)",
                    transition: { type: "tween", ease: "easeIn", duration: 0.25 },
                  }
            }
          >
            <span
              className="whitespace-nowrap text-xl font-bold tracking-tight text-foreground/85 transition-colors duration-300 md:text-2xl"
              style={{
                textShadow: `0 0 18px ${current.color}40`,
              }}
            >
              {current.name}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)
LogoColumn.displayName = "LogoColumn"

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
  className?: string
}

// Breakpoints próprios (sem depender de libs externas) — controla quantas
// colunas ficam visíveis por tamanho de tela, mantendo a identidade da
// animação em qualquer dispositivo.
function useResponsiveColumnCount(desktopCount: number) {
  const [count, setCount] = useState(desktopCount)

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      if (w < 480) return Math.min(2, desktopCount)
      if (w < 768) return Math.min(3, desktopCount)
      if (w < 1024) return Math.min(4, desktopCount)
      return desktopCount
    }
    const update = () => setCount(compute())
    update()

    let timeoutId: ReturnType<typeof setTimeout>
    const debouncedUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(update, 150)
    }
    window.addEventListener("resize", debouncedUpdate)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", debouncedUpdate)
    }
  }, [desktopCount])

  return count
}

export function LogoCarousel({
  columnCount = 4,
  logos,
  className,
}: LogoCarouselProps) {
  const responsiveCount = useResponsiveColumnCount(columnCount)
  const reduceMotion = !!useReducedMotion()
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  // Pausa o intervalo quando a seção sai da viewport — sem isso, o timer
  // (10x/s) continuava rodando pra sempre em segundo plano, mesmo com o
  // usuário lendo outras seções da página.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion || !isVisible) return
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime, reduceMotion, isVisible])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, responsiveCount)
    setLogoSets(distributedLogos)
  }, [logos, responsiveCount])

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 ${className ?? ""}`}
    >
      {logoSets.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          index={index}
          currentTime={currentTime}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  )
}

export { LogoColumn }
