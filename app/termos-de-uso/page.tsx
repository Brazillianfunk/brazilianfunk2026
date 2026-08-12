import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da distribuidora musical Brazilian Funk.",
  alternates: { canonical: "/termos-de-uso" },
}

export default function TermosDeUsoPage() {
  return <LegalPage document="termos" />
}
