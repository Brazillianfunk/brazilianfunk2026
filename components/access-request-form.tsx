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

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import emailjs from "@emailjs/browser"
import { PhoneInput } from "@/components/ui/phone-input"
import { SpotifyField, type SpotifyProfile } from "@/components/ui/spotify-field"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useTranslation } from "@/lib/i18n/use-translation"

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

  function handleClose() {
    router.push("/")
  }

  const nomeArtisticoLabel = data.tipo === "gravadora" ? t.form.step2LabelLabel : t.form.step2LabelArtist
  const nomeArtisticoPlaceholder = data.tipo === "gravadora" ? t.form.step2PlaceholderLabel : t.form.step2PlaceholderArtist

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      {/* Barra de progresso */}
      <div className="fixed left-0 top-0 z-10 h-1 w-full bg-border">
        <motion.div
          className="h-full bg-primary"
          initial={false}
          animate={{ width: submitted ? "100%" : `${((step + 1) / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Fechar */}
      <button
        type="button"
        onClick={handleClose}
        aria-label={t.form.closeAria}
        className="fixed right-6 top-6 z-10 text-muted-foreground transition-colors hover:text-foreground"
      >
        <X className="size-6" />
      </button>

      <div className="flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <CheckCircle2 className="mx-auto mb-6 size-14 text-primary" strokeWidth={1.5} />
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {t.form.confirmTitle}
                </h1>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  {t.form.confirmBody}
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-8 rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t.form.confirmButton}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {step === 0 && (
                  <fieldset>
                    <legend className="mb-6 text-2xl font-semibold text-foreground md:text-3xl">
                      {t.form.step0Question}<span className="text-primary">*</span>
                    </legend>
                    <div className="flex flex-col gap-3">
                      {(["artista", "gravadora"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSelectTipo(opt)}
                          className={`w-full rounded-md border px-6 py-4 text-left text-base transition-colors ${
                            data.tipo === opt
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border text-foreground hover:border-primary/40"
                          }`}
                        >
                          {opt === "artista" ? t.form.optionArtist : t.form.optionLabel}
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
                  <div onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleNext()
                    }
                  }}>
                    <label className="mb-6 block text-2xl font-semibold text-foreground md:text-3xl">
                      {t.form.step4Label}<span className="text-primary">*</span>
                    </label>
                    <div
                      className={`rounded-md border px-3 ${
                        showError ? "border-destructive animate-shake" : "border-input focus-within:border-primary"
                      }`}
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
                    <label className="mb-6 block text-2xl font-semibold text-foreground md:text-3xl">
                      {data.tipo === "gravadora" ? t.form.step5LabelLabel : t.form.step5LabelArtist}
                      {!data.naoTemSpotify && <span className="text-primary">*</span>}
                    </label>

                    {!data.naoTemSpotify ? (
                      <>
                        <SpotifyField value={data.spotify} onChange={(p) => update("spotify", p)} autoFocus />
                        <button
                          type="button"
                          onClick={() => {
                            update("spotify", null)
                            update("naoTemSpotify", true)
                          }}
                          className="mt-4 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        >
                          {t.form.noSpotifyYet}
                        </button>
                      </>
                    ) : (
                      <div
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            handleNext()
                          }
                        }}
                      >
                        <label className="mb-2 block text-sm text-muted-foreground">
                          {t.form.altLinkLabel}
                        </label>
                        <input
                          type="text"
                          autoFocus
                          value={data.linkAlternativo}
                          onChange={(e) => update("linkAlternativo", e.target.value)}
                          placeholder="https://..."
                          className="w-full border-b border-border bg-transparent pb-3 text-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            update("naoTemSpotify", false)
                            update("linkAlternativo", "")
                          }}
                          className="mt-4 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        >
                          {t.form.haveSpotifyNow}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {step > 0 && showError && (
                  <p className="mt-4 text-sm text-destructive">
                    {step === 5 ? t.form.errorSpotify : t.form.errorGeneric}
                  </p>
                )}

                {step > 0 && (
                  <div className="mt-8 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-md bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/70"
                    >
                      {t.form.back}
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      {step === TOTAL_STEPS - 1 ? t.form.send : t.form.ok}
                    </button>
                    <span className="hidden text-sm text-muted-foreground sm:inline">
                      {t.form.enterHint} <kbd className="rounded border border-border px-1.5 py-0.5 font-sans text-xs">Enter</kbd>
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Caixinha de termos e condições — aparece depois de responder a
          última pergunta (Spotify) e antes do envio de fato. Só segue
          adiante se marcar o checkbox e clicar em "Aceitar e enviar";
          "Recusar" cancela a solicitação e volta pra home. */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-lg border border-border bg-popover p-6 text-popover-foreground shadow-2xl md:p-8"
            >
              <h2 className="text-xl font-bold text-foreground md:text-2xl">
                {t.form.termsTitle}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {t.form.termsBodyBefore}{" "}
                <a
                  href="/termos-de-uso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  {t.footer.termsLink}
                </a>{" "}
                {t.form.termsBodyMiddle}{" "}
                <a
                  href="/politica-de-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  {t.footer.privacyLink}
                </a>
                {t.form.termsBodyAfter}
              </p>

              <div className="mt-6 flex items-start gap-2">
                <Checkbox
                  id="accept-terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                  disabled={sending}
                  className="mt-0.5"
                />
                <Label htmlFor="accept-terms" className="text-sm font-normal leading-5 text-foreground">
                  {t.form.termsCheckboxLabel}
                </Label>
              </div>

              {sendError && (
                <p className="mt-4 text-sm text-destructive">{sendError}</p>
              )}

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleDeclineTerms}
                  disabled={sending}
                  className="rounded-md bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/70 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.form.decline}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptTerms}
                  disabled={!acceptedTerms || sending}
                  className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
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
      <label className="mb-6 block text-2xl font-semibold text-foreground md:text-3xl">
        {label}
        <span className="text-primary">*</span>
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
        className={`w-full border-b bg-transparent pb-3 text-xl text-foreground placeholder:text-muted-foreground focus:outline-none ${
          hasError ? "border-destructive animate-shake" : "border-border focus:border-primary"
        }`}
      />
    </div>
  )
}
