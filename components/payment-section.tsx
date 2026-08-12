"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// Ele NÃO abre como preview aqui no chat — cole no seu projeto pra rodar.
// Para ver o resultado visual, use o brazilian-funk-preview.html.
// ---------------------------------------------------------------------------
//
// Fiel ao pagamentos.html enviado: card de carteira (saldo + método de saque)
// à esquerda, título + subtítulo + duas bolhas (PayPal/Pix) sobrepostas à
// direita. Estrutura, classes, valores e textos mantidos como no modelo.

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

import { useTranslation } from "@/lib/i18n/use-translation"

const PAYPAL_ICON = "/paypal-icon.png"
const PIX_ICON = "/pix-icon.png"

export default function PaymentSection() {
  const { t } = useTranslation()
  const methods = [
    { id: "paypal", name: "Paypal", meta: "Artista@gmail.com", icon: PAYPAL_ICON },
    { id: "pix", name: "Pix", meta: "(92) 99999-9999", icon: PIX_ICON },
  ] as const
  const [selectedMethod, setSelectedMethod] = useState<"paypal" | "pix">("paypal")

  return (
    // Faixa de fundo cinza-escuro (bg-card, já existente no design system) —
    // cria profundidade sem sair do tema preto: o painel principal abaixo
    // continua preto, só que agora arredondado e ocupa a seção inteira
    // (não só uma caixa em volta do card), igual à imagem de referência.
    <section id="pagamentos" className="bg-[#1c1c1c] px-3 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 lg:px-16 lg:py-16 scroll-mt-24">
      <div className="rounded-[28px] bg-background md:rounded-[36px]">
        <div
          className={`${poppins.className} relative mx-auto flex w-full max-w-[1080px] flex-wrap items-center justify-center gap-20 overflow-hidden px-6 py-14`}
        >

          {/* Wallet card */}
      <div className="relative z-10 flex w-[340px] flex-none items-center justify-center p-[34px]">
        <div
          aria-hidden="true"
          className="absolute inset-[6px] z-0 rounded-[28px]"
          style={{ background: "#161616", filter: "blur(22px)" }}
        />
        <div className="relative z-10 w-full rounded-[22px] bg-[#141414] px-[22px] pb-[22px] pt-7">
          <p className="m-0 mb-2 text-center text-[11px] font-medium tracking-wide text-[#8a8a8a]">
            SALDO DISPONÍVEL
          </p>
          <p className="m-0 text-center text-[32px] font-extrabold text-white">$1,000.00</p>
          <p className="m-0 mb-[26px] mt-1 text-center text-xs text-[#8a8a8a]">Atualizado agora</p>

          <p className="m-0 mb-2.5 text-[11px] font-medium text-[#8a8a8a]">Escolha o método de saque</p>

          {methods.map((method) => {
            const isSelected = selectedMethod === method.id
            return (
              <div
                key={method.id}
                onMouseEnter={() => setSelectedMethod(method.id)}
                onFocus={() => setSelectedMethod(method.id)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && setSelectedMethod(method.id)
                }
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                className="relative mb-2.5 flex cursor-pointer items-center gap-3 rounded-2xl px-3.5 py-3"
              >
                {isSelected ? (
                  <motion.div
                    layoutId="wallet-row-highlight"
                    className="absolute inset-0 z-0 rounded-2xl bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="absolute inset-0 z-0 rounded-2xl bg-[#1e1e1e]" />
                )}

                <div className="relative z-10 flex h-[34px] w-[34px] flex-none items-center justify-center overflow-hidden rounded-full bg-white">
                  <img src={method.icon} alt={method.name} className="h-[62%] w-[62%] object-contain" />
                </div>
                <div className="relative z-10 min-w-0 flex-1">
                  <p
                    className={`m-0 mb-0.5 text-[13.5px] font-bold ${
                      isSelected ? "text-black" : "text-white"
                    }`}
                  >
                    {method.name}
                  </p>
                  <p
                    className={`m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] ${
                      isSelected ? "text-[#7a7a7a]" : "text-[#808080]"
                    }`}
                  >
                    {method.meta}
                  </p>
                </div>
                <div className="relative z-10 h-5 w-5 flex-none">
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="flex h-full w-full items-center justify-center rounded-full bg-black"
                      >
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4.5L4 7.5L10 1.5"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!isSelected && (
                    <div className="h-5 w-5 rounded-full border-2 border-[#444]" />
                  )}
                </div>
              </div>
            )
          })}


          <button className="mt-3 w-full rounded-full bg-white py-3.5 text-[13px] font-extrabold tracking-wider text-black">
            {t.payment.withdraw}
          </button>
        </div>
      </div>

      {/* Título + subtítulo + bolhas */}
      <div className="relative z-10 max-w-[400px] flex-1 basis-[360px] text-center md:text-left">
        <h2
          className="m-0 mb-3.5 font-extrabold leading-[1.15]"
          style={{ color: "#ffffff", fontSize: "clamp(26px, 3.4vw, 34px)" }}
        >
          {t.payment.title}
        </h2>
        <p className="m-0 mb-7 max-w-[380px] text-sm leading-relaxed text-white md:mx-0 mx-auto">
          {t.payment.description}
        </p>

        <div className="mx-auto flex max-w-[360px] flex-col md:mx-0">
          {/* Bolha PayPal */}
          <div
            className="z-[2] flex items-center gap-3 rounded-full border-[3px] border-white py-2.5 pl-2.5 pr-5"
            style={{ background: "#003087", transform: "rotate(3deg)", boxShadow: "0 8px 16px rgba(0,0,0,0.35)" }}
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-[22%] bg-white">
              <img src={PAYPAL_ICON} alt="PayPal" className="h-[68%] w-[68%] object-contain" />
            </div>
            <div className="min-w-0 text-white">
              <h3 className="m-0 mb-[3px] text-[14.5px] font-bold">Paypal</h3>
              <p className="m-0 text-[10.5px] leading-snug">
                You are receiving a payment for your declared earnings through Brazilian Funk.
              </p>
            </div>
          </div>

          {/* Bolha Pix — sobrepõe levemente a de cima */}
          <div
            className="z-[1] -mt-1.5 flex items-center gap-3 rounded-full border-[3px] border-white py-2.5 pl-2.5 pr-5"
            style={{ background: "#b0e321", transform: "rotate(-3deg)", boxShadow: "0 8px 16px rgba(0,0,0,0.35)" }}
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-[22%] bg-white">
              <img src={PIX_ICON} alt="Pix" className="h-[68%] w-[68%] object-contain" />
            </div>
            <div className="min-w-0 text-black">
              <h3 className="m-0 mb-[3px] text-[14.5px] font-bold">{t.payment.pixName}</h3>
              <p className="m-0 text-[10.5px] leading-snug">
                {t.payment.pixDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}
