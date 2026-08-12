"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// ---------------------------------------------------------------------------
//
// Port do "liquid-metal-button.tsx" enviado como referência, com 2 ajustes
// importantes:
//
// 1. BUG DE LIMPEZA: o original chama `shaderMount.current?.destroy()`,
//    mas a API real do pacote instalado (@paper-design/shaders 0.0.80)
//    não tem esse método — só `.dispose()`. Como o código original usa
//    optional chaining (`?.`), a chamada simplesmente não fazia nada,
//    silenciosamente, sem erro nenhum — só nunca limpava o contexto
//    WebGL de verdade. Corrigido pra `.dispose()`, o nome certo.
//
// 2. NAVEGAÇÃO: o original é só um <button onClick>, sem link nenhum.
//    Aqui o elemento clicável interno virou um next/link de verdade
//    (href), pra navegar pra /solicitar-acesso como qualquer outro botão
//    do site — mantendo o mesmo efeito de ripple e a animação do shader
//    ao clicar.
//
// Dimensões ajustadas pra caber "Solicitar Acesso" (mais longo que
// "Get Started" do original) sem quebrar linha.

import Link from "next/link"
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders"
import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"

interface LiquidMetalButtonProps {
  label: string
  href: string
}

export function LiquidMetalButton({ label, href }: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const shaderRef = useRef<HTMLDivElement>(null)
  const shaderMount = useRef<ShaderMount | null>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const rippleId = useRef(0)

  // Largura ajustada pra "Solicitar Acesso" — o original (142px) foi
  // calibrado pra "Get Started", texto bem mais curto.
  const dimensions = useMemo(
    () => ({
      width: 210,
      height: 50,
      innerWidth: 206,
      innerHeight: 46,
      shaderWidth: 210,
      shaderHeight: 50,
    }),
    []
  )

  useEffect(() => {
    const styleId = "shader-canvas-style-brazilian-funk"
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style")
      style.id = styleId
      style.textContent = `
        .shader-container-brazilian-funk canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 100px !important;
        }
        @keyframes ripple-animation-bf {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    if (shaderRef.current) {
      try {
        if (shaderMount.current) {
          shaderMount.current.dispose()
        }

        shaderMount.current = new ShaderMount(
          shaderRef.current,
          liquidMetalFragmentShader,
          {
            u_repetition: 4,
            u_softness: 0.5,
            u_shiftRed: 0.3,
            u_shiftBlue: 0.3,
            u_distortion: 0,
            u_contour: 0,
            u_angle: 45,
            u_scale: 8,
            u_shape: 1,
            u_offsetX: 0.1,
            u_offsetY: -0.1,
          },
          undefined,
          0.6
        )
      } catch (error) {
        // Se o WebGL não estiver disponível (navegador antigo, contexto
        // perdido, etc.), o botão continua funcionando normalmente —
        // só sem a animação do metal líquido. Nunca quebra a navegação.
        console.error("Falha ao carregar o shader do botão:", error)
      }
    }

    return () => {
      if (shaderMount.current) {
        shaderMount.current.dispose()
        shaderMount.current = null
      }
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    shaderMount.current?.setSpeed(1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
    shaderMount.current?.setSpeed(0.6)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    shaderMount.current?.setSpeed(2.4)
    window.setTimeout(() => {
      shaderMount.current?.setSpeed(isHovered ? 1 : 0.6)
    }, 300)

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ripple = { x, y, id: rippleId.current++ }
      setRipples((prev) => [...prev, ripple])
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
      }, 600)
    }
  }

  return (
    <div className="relative inline-block">
      <div style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}>
        <div
          style={{
            position: "relative",
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: "preserve-3d",
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Rótulo — flutua acima da camada de metal */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)",
              zIndex: 30,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                color: "#e8e8e8",
                fontWeight: 600,
                textShadow: "0px 1px 3px rgba(0, 0, 0, 0.6)",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          </div>

          {/* Camada interna escura */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transformStyle: "preserve-3d",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: `translateZ(10px) ${isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"}`,
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: `${dimensions.innerWidth}px`,
                height: `${dimensions.innerHeight}px`,
                margin: "2px",
                borderRadius: "100px",
                background: "linear-gradient(180deg, #202020 0%, #000000 100%)",
                boxShadow: isPressed
                  ? "inset 0px 2px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 2px rgba(0, 0, 0, 0.3)"
                  : "none",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease",
              }}
            />
          </div>

          {/* Camada do shader (metal líquido animado) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transformStyle: "preserve-3d",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: `translateZ(0px) ${isPressed ? "translateY(1px) scale(0.98)" : "translateY(0) scale(1)"}`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: `${dimensions.height}px`,
                width: `${dimensions.width}px`,
                borderRadius: "100px",
                boxShadow: isPressed
                  ? "0px 0px 0px 1px rgba(0, 0, 0, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)"
                  : isHovered
                    ? "0px 0px 0px 1px rgba(0, 0, 0, 0.4), 0px 12px 6px 0px rgba(0, 0, 0, 0.05), 0px 8px 5px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)"
                    : "0px 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 36px 14px 0px rgba(0, 0, 0, 0.02), 0px 20px 12px 0px rgba(0, 0, 0, 0.08), 0px 9px 9px 0px rgba(0, 0, 0, 0.12), 0px 2px 5px 0px rgba(0, 0, 0, 0.15)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease",
              }}
            >
              <div
                ref={shaderRef}
                className="shader-container-brazilian-funk"
                style={{
                  borderRadius: "100px",
                  overflow: "hidden",
                  position: "relative",
                  width: `${dimensions.shaderWidth}px`,
                  height: `${dimensions.shaderHeight}px`,
                }}
              />
            </div>
          </div>

          {/* Área clicável — navega de verdade, com o mesmo efeito de ripple */}
          <Link
            ref={buttonRef}
            href={href}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              background: "transparent",
              outline: "none",
              zIndex: 40,
              transformStyle: "preserve-3d",
              transform: "translateZ(25px)",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              overflow: "hidden",
              borderRadius: "100px",
              display: "block",
              cursor: "pointer",
            }}
            aria-label={label}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: "absolute",
                  left: `${ripple.x}px`,
                  top: `${ripple.y}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)",
                  pointerEvents: "none",
                  animation: "ripple-animation-bf 0.6s ease-out",
                }}
              />
            ))}
          </Link>
        </div>
      </div>
    </div>
  )
}
