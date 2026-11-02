import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"
import { cn } from "@/lib/utils"

// Botão único do site. Antes cada seção tinha o seu (pill do navbar,
// botão de metal líquido no hero, botão branco "WITHDRAW" no pagamento),
// cada um com cor, altura e canto diferentes. Agora todos saem daqui.
//
// - primary:   a ação principal da tela ("Solicitar acesso"). Uma por bloco.
// - secondary: alternativa ao lado do primário (contorno).
// - ghost:     navegação de baixo peso ("Entrar").
// - light:     botão claro para usar sobre cards/superfícies escuras
//              quando o azul competiria com outro elemento azul.
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "btn-shine bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "border border-white/25 bg-transparent text-foreground hover:border-white/50 hover:bg-white/5",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground",
        light: "bg-foreground text-background hover:bg-foreground/90",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
)

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string
  children: React.ReactNode
}

type ButtonAsLink = CommonProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant, size, className, children, ...rest } = props
  const classes = cn(buttonVariants({ variant, size }), className)

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest as ButtonAsLink
    // Links externos (ex.: app.brazilianfunk.co) usam <a>; internos usam
    // next/link para navegar sem recarregar a página.
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
