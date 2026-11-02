// Antes este template envolvia cada página num fade de opacity 0 → 1 com
// framer-motion. Como o HTML chegava com opacity 0, a página inteira ficava
// invisível até o JavaScript carregar (pior no 4G). Mantido sem animação.
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
