import type { Metadata } from "next"
import AccessRequestForm from "@/components/access-request-form"

// Página independente da home — não importa Navbar, HeroSection nem
// nenhuma outra seção. Só o formulário multi-etapas.

export const metadata: Metadata = {
  title: "Solicitar Acesso",
  description: "Solicite acesso à distribuidora musical Brazilian Funk.",
  alternates: { canonical: "/solicitar-acesso" },
}

export default function SolicitarAcessoPage() {
  return <AccessRequestForm />
}
