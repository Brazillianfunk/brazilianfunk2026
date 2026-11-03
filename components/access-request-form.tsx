"use client"

// ---------------------------------------------------------------------------
// Este arquivo faz parte do projeto Next.js (usa imports @/... do seu projeto).
// ---------------------------------------------------------------------------
//
// Estrutura de UX inspirada nas imagens de referência da SNAFU Records:
// uma pergunta por vez, barra de progresso fina no topo, transições curtas
// (0.2s, sem exagero), Enter avança, "Voltar" quando aplicável, X fecha.
// Identidade visual é 100% a da Brazilian Funk (tokens já existentes —
// bg-background, text-foreground, bg-primary etc.), nada da paleta da
// SNAFU foi copiado.
//
// Os 6 campos são exatamente os definidos no briefing, nesta ordem, e
// nada além disso foi adicionado.

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import type React from "react"
import { X } from "lucide-react"
import emailjs from "@emailjs/browser"
import { PhoneInput } from "@/components/ui/phone-input"
import { SpotifyField, type SpotifyProfile } from "@/components/ui/spotify-field"
import { Checkbox } from "@/components/ui/checkbox"
import { SectionBadge } from "@/components/ui/section-badge"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n/use-translation"
import { buttonVariants } from "@/components/ui/button"

// Integração EmailJS (sem backend) — Service ID e Template ID não são
// segredos, fazem parte da chamada pública do SDK. A Public Key também é
// pública por definição (é o que autentica o navegador, não a conta).
// Nenhuma chave privada do EmailJS entra aqui.
const EMAILJS_PUBLIC_KEY = "4OD9DjHqlNsAbFcFD"
const EMAILJS_SERVICE_ID = "service_fkl49we"
const EMAILJS_TEMPLATE_ID = "template_d4si53d"

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })

type TipoSolicitante = "artista" | "gravadora" | null

interface FormData {
  tipo: TipoSolicitante
  nomeCompleto: string
  nomeArtistico: string
  email: string
  telefone: string
  telefoneValido: boolean
  spotify: SpotifyProfile | null
  naoTemSpotify: boolean
  linkAlternativo: string
}

const INITIAL_DATA: FormData = {
  tipo: null,
  nomeCompleto: "",
  nomeArtistico: "",
  email: "",
  telefone: "",
  telefoneValido: false,
  spotify: null,
  naoTemSpotify: false,
  linkAlternativo: "",
}

const TOTAL_STEPS = 6 // 6 perguntas (a confirmação não conta na barra)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function AccessRequestForm() {
  const router = useRouter()
  const { t } = useTranslation()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [showError, setShowError] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  const update = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
    setShowError(false)
  }, [])

  function isStepValid(): boolean {
    switch (step) {
      case 0:
        return data.tipo !== null
      case 1:
        return data.nomeCompleto.trim().length >= 2
      case 2:
        return data.nomeArtistico.trim().length >= 1
      case 3:
        return EMAIL_REGEX.test(data.email.trim())
      case 4:
        return data.telefoneValido
      case 5:
        return data.naoTemSpotify || data.spotify !== null
      default:
        return false
    }
  }

  function handleNext() {
    if (!isStepValid()) {
      setShowError(true)
      return
    }
    setShowError(false)
    if (step === TOTAL_STEPS - 1) {
      // Última pergunta respondida: antes de enviar de verdade, mostra a
      // caixinha de termos e condições. Só segue pra confirmação se aceitar.
      setShowTermsModal(true)
    } else {
      setStep((s) => s + 1)
    }
  }

  async function handleAcceptTerms() {
    if (!acceptedTerms || sending) return
    setSendError(null)
    setSending(true)

    const templateParams = {
      tipo_perfil: data.tipo === "gravadora" ? "Gravadora" : "Artista",
      nome_completo: data.nomeCompleto,
      nome_artistico: data.nomeArtistico,
      email: data.email,
      celular: data.telefone,
      spotify: data.spotify ? data.spotify.url : "",
      link_alternativo: data.naoTemSpotify ? data.linkAlternativo : "",
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      setShowTermsModal(false)
      setSubmitted(true)
    } catch (error) {
      console.error("Falha ao enviar solicitação via EmailJS:", error)
      setSendError(t.form.sendError)
    } finally {
      setSending(false)
    }
  }

  function handleDeclineTerms() {
    if (sending) return
    router.push("/")
  }

  function handleBack() {
    setShowError(false)
    if (step > 0) setStep((s) => s - 1)
  }

  // Escolha binária (Artista/Gravadora) avança sozinha ao clicar — mesmo
  // comportamento das perguntas Yes/No da referência SNAFU, que não têm
  // nenhum botão de confirmar visível, só a seleção já move pra próxima.
  function handleSelectTipo(opt: "artista" | "gravadora") {
    setData((prev) => ({ ...prev, tipo: opt }))
    setShowError(false)
    setStep(1)
  }

  // Atalho de teclado na primeira pergunta: A = Artista, B = Gravadora
  useEffect(() => {
    if (step !== 0 || submitted) return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key.toLowerCase()
      if (k === "a") handleSelectTipo("artista")
      if (k === "b") handleSelectTipo("gravadora")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, submitted])

  function handleClose() {
    router.push("/")
  }

  const nomeArtisticoLabel = data.tipo === "gravadora" ? t.form.step2LabelLabel : t.form.step2LabelArtist
  const nomeArtisticoPlaceholder = data.tipo === "gravadora" ? t.form.step2PlaceholderLabel : t.form.step2PlaceholderArtist

  const enterOnKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleNext()
    }
  }

  const progress = submitted ? 100 : ((step + 1) / TOTAL_STEPS) * 100
  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      {/* Barra de progresso no verde da marca (mesma barra da home) */}
      <div className="fixed inset-x-0 top-0 z-20 h-[3px] bg-white/10">
        <motion.div
          className="h-full bg-brand-lime"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        {/* Coluna do formulário */}
        <div className="flex min-h-screen flex-col px-6 sm:px-10 lg:px-16">
          <header className="flex items-center justify-between py-6">
            <Link href="/" aria-label="Brazilian Funk" className="flex items-center">
              <img src="/brazilian-funk-logo.png" alt="Brazilian Funk" className="h-5 w-auto" />
            </Link>
            <button
              type="button"
              onClick={handleClose}
              aria-label={t.form.closeAria}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-white/40 hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </header>

          <div className="flex flex-1 items-center py-10">
            <div className="w-full max-w-xl">
              {!submitted && (
                <div className="mb-10 flex items-center gap-4">
                  <SectionBadge>{t.nav.comecar}</SectionBadge>
                  <span className="font-mono text-sm tabular-nums text-muted-foreground">
                    <span className="text-foreground">{pad(step + 1)}</span> / {pad(TOTAL_STEPS)}
                  </span>
                </div>
              )}

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mapa da logo no verde da marca, como no rodapé */}
                    <span
                      aria-hidden="true"
                      className="block aspect-[400/339] w-20 bg-brand-lime [mask:url(/brazilian-funk-mapa.png)_center/contain_no-repeat] [-webkit-mask:url(/brazilian-funk-mapa.png)_center/contain_no-repeat]"
                    />
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground md:text-6xl">{t.form.confirmTitle}</h1>
                    <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">{t.form.confirmBody}</p>
                    <button type="button" onClick={handleClose} className={buttonVariants({ size: "lg", className: "mt-10" })}>
                      {t.form.confirmButton}
                      <span aria-hidden="true">→</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.22 }}
                  >
                    {step === 0 && (
                      <fieldset>
                        <legend className={QUESTION}>
                          <Q text={t.form.step0Question} />
                        </legend>
                        <div className="mt-10 flex flex-col gap-3">
                          {(["artista", "gravadora"] as const).map((opt, i) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleSelectTipo(opt)}
                              className={cn(
                                "group flex w-full items-center gap-5 rounded-2xl border px-5 py-5 text-left transition-colors duration-200",
                                data.tipo === opt
                                  ? "border-foreground bg-foreground text-background"
                                  : "border-border text-foreground hover:border-white/40 hover:bg-white/[0.03]"
                              )}
                            >
                              <span
                                className={cn(
                                  "flex h-9 w-9 flex-none items-center justify-center rounded-lg border font-mono text-sm font-semibold transition-colors",
                                  data.tipo === opt ? "border-background/30" : "border-border group-hover:border-white/40"
                                )}
                              >
                                {i === 0 ? "A" : "B"}
                              </span>
                              <span className="text-xl font-semibold">{opt === "artista" ? t.form.optionArtist : t.form.optionLabel}</span>
                              <span aria-hidden="true" className="ml-auto text-xl transition-transform duration-200 group-hover:translate-x-1">
                                →
                              </span>
                            </button>
                          ))}
                        </div>
                      </fieldset>
                    )}

                    {step === 1 && (
                      <TextStep
                        label={t.form.step1Label}
                        placeholder={t.form.step1Placeholder}
                        value={data.nomeCompleto}
                        onChange={(v) => update("nomeCompleto", v)}
                        hasError={showError}
                        onEnter={handleNext}
                        autoFocus
                      />
                    )}

                    {step === 2 && (
                      <TextStep
                        label={nomeArtisticoLabel}
                        placeholder={nomeArtisticoPlaceholder}
                        value={data.nomeArtistico}
                        onChange={(v) => update("nomeArtistico", v)}
                        hasError={showError}
                        onEnter={handleNext}
                        autoFocus
                      />
                    )}

                    {step === 3 && (
                      <TextStep
                        label={t.form.step3Label}
                        placeholder={t.form.step3Placeholder}
                        type="email"
                        value={data.email}
                        onChange={(v) => update("email", v)}
                        hasError={showError}
                        onEnter={handleNext}
                        autoFocus
                      />
                    )}

                    {step === 4 && (
                      <div onKeyDown={enterOnKey}>
                        <label className={QUESTION}>
                          <Q text={t.form.step4Label} />
                        </label>
                        <div
                          className={cn(
                            "mt-10 rounded-2xl border px-3 transition-colors",
                            showError ? "animate-shake border-destructive" : "border-border focus-within:border-foreground"
                          )}
                        >
                          <PhoneInput
                            value={data.telefone}
                            onChange={(_value, formatted, _countryCode, isValid) => {
                              setData((prev) => ({ ...prev, telefone: formatted, telefoneValido: !!isValid }))
                              setShowError(false)
                            }}
                            defaultCountry="BR"
                            showValidation
                            size="lg"
                          />
                        </div>
                      </div>
                    )}

                    {step === 5 && (
                      <div>
                        <label className={QUESTION}>
                          <Q text={data.tipo === "gravadora" ? t.form.step5LabelLabel : t.form.step5LabelArtist} required={!data.naoTemSpotify} />
                        </label>

                        <div className="mt-10">
                          {!data.naoTemSpotify ? (
                            <>
                              <SpotifyField value={data.spotify} onChange={(p) => update("spotify", p)} autoFocus />
                              <button
                                type="button"
                                onClick={() => {
                                  update("spotify", null)
                                  update("naoTemSpotify", true)
                                }}
                                className="mt-5 text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                              >
                                {t.form.noSpotifyYet}
                              </button>
                            </>
                          ) : (
                            <div onKeyDown={enterOnKey}>
                              <label className="mb-3 block text-sm text-muted-foreground">{t.form.altLinkLabel}</label>
                              <input
                                type="text"
                                autoFocus
                                value={data.linkAlternativo}
                                onChange={(e) => update("linkAlternativo", e.target.value)}
                                placeholder="https://..."
                                className={INPUT_LINE}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  update("naoTemSpotify", false)
                                  update("linkAlternativo", "")
                                }}
                                className="mt-5 text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                              >
                                {t.form.haveSpotifyNow}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {step > 0 && showError && (
                      <p role="alert" className="mt-4 text-sm text-destructive">
                        {step === 5 ? t.form.errorSpotify : t.form.errorGeneric}
                      </p>
                    )}

                    {step > 0 && (
                      <div className="mt-10 flex flex-wrap items-center gap-3">
                        <button type="button" onClick={handleBack} className={buttonVariants({ variant: "secondary", size: "lg" })}>
                          {t.form.back}
                        </button>
                        <button type="button" onClick={handleNext} className={buttonVariants({ size: "lg" })}>
                          {step === TOTAL_STEPS - 1 ? t.form.send : t.form.ok}
                          <span aria-hidden="true">→</span>
                        </button>
                        <span className="ml-1 hidden text-sm text-muted-foreground sm:inline">
                          {t.form.enterHint}{" "}
                          <kbd className="rounded-md border border-border px-1.5 py-0.5 font-sans text-xs text-foreground">Enter ↵</kbd>
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <footer className="flex items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
            <span>© Brazilian Funk</span>
            <span className="flex gap-4">
              <Link href="/termos-de-uso" className="transition-colors hover:text-foreground">{t.footer.termsLink}</Link>
              <Link href="/politica-de-privacidade" className="transition-colors hover:text-foreground">{t.footer.privacyLink}</Link>
            </span>
          </footer>
        </div>

        {/* Painel das capas (só em telas largas): o mesmo catálogo do topo da home */}
        <aside aria-hidden="true" className="relative hidden overflow-hidden border-l border-border lg:block">
          <div className="absolute inset-0 grid grid-cols-3 gap-3 p-3">
            {COVER_COLUMNS.map((col, ci) => (
              <div key={ci} className="overflow-hidden">
                <div className={cn("cover-rise flex flex-col gap-3", ci === 1 && "cover-rise-reverse")}>
                  {[...col, ...col].map((n, i) => (
                    <img
                      key={i}
                      src={`/lancamentos/lancamento-${String(n).padStart(2, "0")}.jpg`}
                      alt=""
                      loading="lazy"
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
          <p className="absolute inset-x-8 bottom-8 text-sm font-medium text-foreground/80">{t.hero.wallLabel}</p>
        </aside>
      </div>

      {/* Termos e condições — depois da última pergunta, antes do envio. */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/85 px-6"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="terms-title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-[24px] border border-border bg-card p-6 md:p-8"
            >
              <h2 id="terms-title" className="text-2xl font-bold tracking-tight text-foreground">
                {t.form.termsTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.form.termsBodyBefore}{" "}
                <a href="/termos-de-uso" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">
                  {t.footer.termsLink}
                </a>{" "}
                {t.form.termsBodyMiddle}{" "}
                <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">
                  {t.footer.privacyLink}
                </a>
                {t.form.termsBodyAfter}
              </p>

              <label
                htmlFor="accept-terms"
                className={cn(
                  "mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors",
                  acceptedTerms ? "border-foreground/60" : "border-border hover:border-white/30"
                )}
              >
                <Checkbox
                  id="accept-terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                  disabled={sending}
                  className="mt-0.5"
                />
                <span className="text-sm leading-5 text-foreground">{t.form.termsCheckboxLabel}</span>
              </label>

              {sendError && <p role="alert" className="mt-4 text-sm text-destructive">{sendError}</p>}

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={handleDeclineTerms} disabled={sending} className={buttonVariants({ variant: "secondary" })}>
                  {t.form.decline}
                </button>
                <button type="button" onClick={handleAcceptTerms} disabled={!acceptedTerms || sending} className={buttonVariants()}>
                  {sending ? t.form.sending : t.form.acceptAndSend}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Estilos compartilhados das perguntas (mesma escala dos títulos da home)
const QUESTION = "block text-3xl font-bold tracking-tight text-foreground md:text-5xl"
const INPUT_LINE =
  "w-full border-b border-border bg-transparent pb-4 text-2xl text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none md:text-3xl"

// Asterisco de campo obrigatório no verde da marca
function Req() {
  return (
    <span aria-hidden="true" className="ml-1 text-brand-lime">
      *
    </span>
  )
}

// Pergunta com o asterisco sempre colado na última palavra (nunca sozinho na linha)
function Q({ text, required = true }: { text: string; required?: boolean }) {
  const i = text.lastIndexOf(" ")
  const head = i >= 0 ? text.slice(0, i + 1) : ""
  const last = i >= 0 ? text.slice(i + 1) : text
  return (
    <>
      {head}
      <span className="whitespace-nowrap">
        {last}
        {required && <Req />}
      </span>
    </>
  )
}

// Capas do catálogo para o painel lateral (3 colunas)
const COVER_COLUMNS = [
  [1, 4, 7, 10, 13, 16, 19, 22, 25],
  [2, 5, 8, 11, 14, 17, 20, 23, 26],
  [3, 6, 9, 12, 15, 18, 21, 24, 27],
]

// ---------------------------------------------------------------------------
// Etapa de texto simples (nome completo, nome artístico, e-mail) — input
// sublinhado sem caixa, igual ao padrão da imagem de referência ("What is
// your full name?").
// ---------------------------------------------------------------------------
interface TextStepProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "email"
  autoFocus?: boolean
  hasError?: boolean
  onEnter: () => void
}

function TextStep({ label, placeholder, value, onChange, type = "text", autoFocus, hasError, onEnter }: TextStepProps) {
  return (
    <div>
      <label className={QUESTION}>
        <Q text={label} />
      </label>
      <input
        type={type}
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            onEnter()
          }
        }}
        placeholder={placeholder}
        className={cn(INPUT_LINE, "mt-10", hasError && "animate-shake border-destructive focus:border-destructive")}
      />
    </div>
  )
}
