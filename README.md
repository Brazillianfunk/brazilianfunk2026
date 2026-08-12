# Brazilian Funk — Navbar + Hero

Estrutura pronta para um projeto **Next.js + shadcn + Tailwind + TypeScript**.
Segue exatamente a arquitetura dos componentes de referência que você enviou
(`navigation-menu-4` para a Navbar, `hero-3` para a Hero) — só trocando
conteúdo, cores e assets pela identidade da Brazilian Funk.

## 1. Se o projeto ainda não existe

```bash
npx create-next-app@latest brazilian-funk --typescript --tailwind --eslint --app
cd brazilian-funk
npx shadcn@latest init
```

No `init` do shadcn, mantenha o caminho padrão `@/components/ui` — é onde os
primitivos (Button, NavigationMenu, Popover) precisam ficar para os imports
`@/components/ui/...` funcionarem.

## 2. Dependências

```bash
npm install motion @tabler/icons-react framer-motion lucide-react class-variance-authority @radix-ui/react-slot clsx tailwind-merge
```

- `motion` + `@tabler/icons-react` → Navbar (`resizable-navbar.tsx`)
- `framer-motion` → Hero (`hero.tsx`) e o card de pagamento (`card-5.tsx`)
- `lucide-react` → ícones do card de pagamento (`Check`, `Landmark`, `CreditCard`)

## 3. Copiar os arquivos

Copie cada arquivo deste pacote para o caminho equivalente no seu projeto:

```
app/globals.css              → substitui/mescla com o seu globals.css
app/page.tsx                 → sua página inicial
components/navbar.tsx
components/hero-section.tsx
components/ui/resizable-navbar.tsx
components/ui/button.tsx
components/ui/hero.tsx
lib/utils.ts
public/brazilian-funk-logo.png
public/lancamentos/lancamento-01.jpg … lancamento-11.jpg
```

Se o seu `globals.css` já existe, **não sobrescreva tudo** — copie apenas o
bloco `:root { ... }` com as variáveis de tema (fundo preto, verde de
destaque). Essas variáveis é que fazem `bg-background`, `text-foreground`,
`border-border` etc. renderizarem no tema escuro em qualquer componente
shadcn que você adicionar depois — inclusive nas próximas seções da home.

## 4. O que mudou em relação aos seus templates originais

- **Navbar** (`resizable-navbar` do Aceternity → `navbar.tsx` + `components/ui/resizable-navbar.tsx`):
  mesma estrutura e animação do template — `NavBody` encolhe para 40% da largura,
  vira uma pill flutuante com blur e sombra depois de 100px de scroll (`motion` +
  `useScroll`/`useMotionValueEvent`), `MobileNav` tem o mesmo comportamento em
  versão compacta. Trocado: cores hardcoded (`bg-white`, `text-black`,
  `neutral-950`) por tokens do tema (`bg-background`, `text-foreground`,
  `border-border`) para herdar o dark automaticamente; sombra branca do
  original trocada por uma sombra escura com leve glow verde; logo da
  Aceternity trocada pela logo real; itens de navegação para Distribuição /
  Ferramentas / Notícias; botões para Entrar (secondary) + Começar (primary) —
  **removido o "Solicitar Acesso" do canto superior direito**, que agora
  aparece só como CTA principal da Hero, evitando repetir o mesmo botão duas
  vezes na tela.
- **Hero** (`hero-3` → `hero.tsx` + `hero-section.tsx`): mesma estrutura de
  animação (Framer Motion, stagger por palavra, marquee de imagens em loop).
  Removida a tagline ("Join over 100,000 happy creators") conforme pedido.
  Botão trocado de vermelho para verde. Imagens trocadas pelos placeholders
  genéricos por fotos reais do Unsplash (DJ, vinil, plateia) com licença
  livre para uso comercial.
- **Tema**: variáveis CSS em `globals.css` (fundo `#050505`, texto
  `#f5f4f0`, primário verde `hsl(160 84% 39%)`) — os componentes shadcn já
  usam essas variáveis via `bg-background`, `text-primary` etc., então o
  tema escuro se propaga automaticamente para qualquer nova seção shadcn
  que vocês adicionarem depois.

## 6. Segunda seção — Distribuição Global

Adicionada em `components/distribution-section.tsx` + `components/ui/logo-carousel.tsx`,
baseada no seu template `logo-carousel.tsx` (mesma estrutura de `LogoColumn` com
Framer Motion, ciclo por coluna com blur+spring). Navbar e Hero não foram
alterados.

O que mudou em relação ao seu template:
- Logos trocados pelos reais das plataformas de música (Spotify, Apple Music,
  TikTok, Amazon Music, Deezer, Instagram, YouTube Music, SoundCloud, TIDAL,
  iHeartRadio, Pandora, Shazam) — baixados do repositório oficial
  [simple-icons](https://github.com/simple-icons/simple-icons) (licença CC0).
  A Amazon foi removida desse repositório por questão de marca registrada, então
  o glyph da Amazon Music (curva + seta, o "smile") foi desenhado à mão.
- Cor: monocromático branco em repouso (para combinar com o tema dark), com
  um glow sutil atrás de cada ícone usando a cor oficial da marca — mantém a
  identidade de cada logo sem virar uma faixa colorida "genérica".
- Responsivo: número de colunas visíveis se adapta (2 no mobile, 3 no tablet,
  4 no desktop) via `useResponsiveColumnCount`, mantendo a mesma lógica de
  ciclo do template original.
- `prefers-reduced-motion`: desliga o intervalo de troca de logo e a
  animação de entrada quando o usuário pede menos movimento.
- Conteúdo: badge "+40 Lojas e Serviços", título e texto exatamente como
  especificado no briefing.

Dependências: nenhuma nova — usa o `framer-motion` já instalado para a Hero.

## 7. Terceira seção — Método de Pagamentos

Adicionada em `components/payment-section.tsx` + `components/ui/card-5.tsx`
(`WithdrawalCard`), fiel ao modelo `card-5.tsx` enviado: mesma estrutura,
mesmos textos, valores e comportamento (seleção de conta com destaque animado
e checkmark, botão WITHDRAW). Navbar, Hero e Distribuição Global não foram
alterados.

**Importante:** por instrução explícita, os textos/valores internos do card
(Amount, IDR 535.000, Bank Account, Credit Card etc.) foram mantidos
propositalmente iguais ao modelo nesta etapa — a adaptação para o conteúdo
real da Brazilian Funk (moeda, contas, PayPal/Pix) é uma etapa futura
separada.

O que foi adaptado:
- Cores para os tokens do tema (`bg-card`, `bg-primary`, `border-border`) —
  a conta selecionada usa o verde da marca (mesmo accent do resto do site)
  em vez do tema claro do modelo original.
- Sombra escura mais pronunciada no card, e um painel decorativo ao redor
  (textura de linhas diagonais sutil + glow verde no canto), reproduzindo a
  composição do print de referência.
- `useReducedMotion` do framer-motion desliga as transições de spring quando
  o usuário pede menos movimento — o card continua funcional (mesma seleção,
  sem animação).

Dependência nova: `lucide-react` (ícone de check e ícones de conta).

