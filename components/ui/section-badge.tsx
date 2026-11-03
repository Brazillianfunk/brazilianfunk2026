import { cn } from "@/lib/utils"

// Selo acima dos títulos de seção, no estilo neobrutalista: fundo claro,
// texto preto e sombra sólida no azul da marca. Substitui o selo
// arredondado com texto verde-limão, que tinha cara de template.
export function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border-2 border-background bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider text-background shadow-[3px_3px_0_0_hsl(var(--primary))]",
        className
      )}
    >
      {children}
    </span>
  )
}
