import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da distribuidora musical Brazilian Funk.",
  alternates: { canonical: "/politica-de-privacidade" },
}

export default function PoliticaDePrivacidadePage() {
  return <LegalPage document="privacidade" />
}
