export interface Dictionary {
  nav: {
    distribuicao: string
    ferramentas: string
    noticias: string
    entrar: string
    comecar: string
  }
  hero: {
    titleLine1: string
    titleLine2: string
    description: string
    cta: string
    wallLabel: string
  }
  distribution: {
    badge: string
    title: string
    description: string
    statLabel: string
  }
  payment: {
    title: string
    description: string
    withdraw: string
    pixName: string
    pixDesc: string
    paypalDesc: string
    balanceLabel: string
    updatedNow: string
    chooseMethod: string
    amount: string
    overline: string
    features: { title: string; desc: string }[]
    recentLabel: string
    today: string
    notifTitle: string
    notifAmount: string
    sendTo: string
  }
  delivery: {
    badge: string
    title: string
    description: string
    steps: string[]
    stepDescriptions: string[]
    stepLabel: string
  }
  tools: {
    badge: string
    mock: {
      streams: string
      listeners: string
      last28: string
      artist: string
      producer: string
      label: string
      feat: string
      production: string
      total: string
      autoSplit: string
      illustrativeSplit: string
      region: string
      share: string
      presave: string
      listenNow: string
      generated: string
      more: string
    }
    title: string
    description: string
    items: {
      title: string
      desc: string
    }[]
  }
  support: {
    badge: string
    title: string
    description: string
    items: {
      tag: string
      title: string
      description: string
    }[]
  }
  blog: {
    badge: string
    viewAll: string
    heading: string
    subtitle: string
    readMore: string
    prevAria: string
    nextAria: string
    categories: {
      noticias: string
      cultura: string
      tecnologia: string
      lancamentos: string
    }
    articles: {
      title: string
      date: string
    }[]
  }
  faq: {
    badge: string
    whatsapp: string
    heading: string
    subtitle: string
    ctaText: string
    items: {
      question: string
      answer: string
    }[]
  }
  footer: {
    description: string
    colContent: string
    colContact: string
    colReclameAqui: string
    copyright: string
    termsLink: string
    privacyLink: string
    socialAriaTemplate: string
    reclameAquiAria: string
  }
  legal: {
    lastUpdatedLabel: string
    updatedDate: string
    privacyIntro: string
    termsIntro: string
    badge: string
    summaryTitle: string
    summaryNote: string
    contentsTitle: string
    otherDoc: string
  }
  form: {
    closeAria: string
    step0Question: string
    optionArtist: string
    optionLabel: string
    step1Label: string
    step1Placeholder: string
    step2LabelArtist: string
    step2PlaceholderArtist: string
    step2LabelLabel: string
    step2PlaceholderLabel: string
    step3Label: string
    step3Placeholder: string
    step4Label: string
    step5LabelArtist: string
    step5LabelLabel: string
    noSpotifyYet: string
    altLinkLabel: string
    haveSpotifyNow: string
    errorSpotify: string
    errorGeneric: string
    back: string
    ok: string
    send: string
    enterHint: string
    termsTitle: string
    termsBodyBefore: string
    termsBodyMiddle: string
    termsBodyAfter: string
    termsCheckboxLabel: string
    decline: string
    acceptAndSend: string
    sending: string
    sendError: string
    confirmTitle: string
    confirmBody: string
    confirmButton: string
    spotifyPlaceholder: string
    spotifySearching: string
    spotifyNoResults: string
    spotifyError: string
    spotifyErrorNetwork: string
    spotifyArtist: string
    spotifyFollowers: string
    spotifyChange: string
  }
}

import type { Locale } from "./types"

export const dictionary: Record<Locale, Dictionary> = {
  "pt": {
    "nav": {
      "distribuicao": "Distribuição",
      "ferramentas": "Ferramentas",
      "noticias": "Notícias",
      "entrar": "Entrar",
      "comecar": "Solicitar acesso"
    },
    "hero": {
      "titleLine1": "A Distribuidora",
      "titleLine2": "Musical do Funk",
      "description": "Uma plataforma especializada em Funk para artistas, DJs e gravadoras que desejam distribuir suas músicas globalmente, gerenciar royalties e desenvolver sua carreira musical.",
      "cta": "Solicitar acesso",
      "wallLabel": "Lançamentos distribuídos pela Brazilian Funk"
    },
    "distribution": {
      "badge": "Distribuição",
      "title": "Distribuição Global para os Principais Serviços de Música",
      "description": "Envios ilimitados. Um único envio leva seu lançamento para as principais lojas e serviços de streaming do mundo.",
      "statLabel": "lojas e serviços de streaming"
    },
    "payment": {
      "title": "Receba seus pagamentos de forma simples",
      "description": "Efetue saques de forma prática e segura, com opções de recebimento via PayPal ou Pix.",
      "withdraw": "Sacar",
      "pixName": "Pix",
      "pixDesc": "Você está recebendo um pagamento pelos seus ganhos declarados através da Brazilian Funk.",
      "paypalDesc": "Você está recebendo um pagamento pelos seus ganhos declarados através da Brazilian Funk.",
      "balanceLabel": "Saldo disponível",
      "updatedNow": "Atualizado agora",
      "chooseMethod": "Escolha o método de saque",
      "amount": "US$ 1.000,00",
      "overline": "Pagamentos",
      "features": [
        { "title": "Saque via Pix", "desc": "O valor cai direto na sua chave Pix cadastrada." },
        { "title": "Saque via PayPal", "desc": "Para quem prefere receber na conta PayPal." },
        { "title": "Extrato transparente", "desc": "Veja quanto cada plataforma pagou, por período." }
      ],
      "recentLabel": "Última transação",
      "today": "Hoje",
      "notifTitle": "Pagamento recebido",
      "notifAmount": "US$ 850,00",
      "sendTo": "Receber em"
    },
    "delivery": {
      "badge": "Entrega",
      "title": "Entrega Rápida de Conteúdo",
      "description": "Garantimos que seu conteúdo chegue às lojas em até 24 horas.",
      "steps": [
        "Envio do Lançamento",
        "Processamento",
        "Distribuição Global",
        "Disponível nas Lojas"
      ],
      "stepDescriptions": [
        "Você envia o áudio, a capa e as informações da faixa pelo painel.",
        "O sistema processa e verifica as informações do lançamento antes de enviá-lo às plataformas.",
        "O lançamento é enviado para Spotify, Apple Music, TikTok e mais de 50 plataformas.",
        "Sua música fica disponível nas lojas em até 24 horas."
      ],
      "stepLabel": "Etapa"
    },
    "tools": {
      "badge": "Ferramentas",
      "mock": {
          "streams": "Streams",
          "listeners": "Ouvintes",
          "last28": "Últimos 28 dias",
          "artist": "Artista",
          "producer": "Produtor",
          "label": "Gravadora",
          "feat": "Feat.",
          "production": "Produção",
          "total": "Total",
          "autoSplit": "Divisão automática",
          "illustrativeSplit": "Exemplo ilustrativo.",
          "region": "Região",
          "share": "Participação",
          "presave": "Pré-save",
          "listenNow": "Ouvir agora",
          "generated": "Gerado automaticamente",
          "more": "E muito mais no seu painel",
        },
      "title": "Ferramentas para potencializar seu catálogo musical",
      "description": "Tudo que você precisa para acompanhar, proteger e maximizar o retorno das suas músicas, em um só lugar.",
      "items": [
        {
          "title": "Analytics & Trends",
          "desc": "Acompanhe streams, ouvintes e tendências em tempo real para tomar decisões com dados, não achismo."
        },
        {
          "title": "Divisão de Royalties",
          "desc": "Defina a porcentagem de cada colaborador da faixa. A divisão dos royalties é feita automaticamente, e cada colaborador é avisado por e-mail quando ela é concluída."
        },
        {
          "title": "Relatórios e Dados",
          "desc": "Extraia relatórios detalhados de desempenho por plataforma, período e região."
        },
        {
          "title": "Smart Link + Pré-Save",
          "desc": "Uma página única para pré-save e todos os links de streaming do seu lançamento."
        },
        {
          "title": "Códigos ISRC & UPC",
          "desc": "Geração automática dos códigos de identificação exigidos pelas plataformas."
        },
        {
          "title": "+Recursos",
          "desc": "Diversos outros recursos para o gerenciamento e desenvolvimento do seu catálogo no ambiente digital."
        }
      ]
    },
    "support": {
      "badge": "Suporte",
      "title": "Suporte em Cada Etapa",
      "description": "Acompanhamos você em todas as etapas, do envio do conteúdo ao primeiro pagamento.",
      "items": [
        {
          "tag": "Atendimento",
          "title": "Suporte Humanizado",
          "description": "Atendimento direto com um agente."
        },
        {
          "tag": "Curadoria",
          "title": "Acompanhamento A&R",
          "description": "Orientação nos lançamentos e acompanhamento do seu catálogo."
        },
        {
          "tag": "Qualidade",
          "title": "Feedback e Identificação de Erros",
          "description": "Identificamos possíveis erros e orientamos você sobre como corrigi-los."
        },
        {
          "tag": "Resolução",
          "title": "Solicitações",
          "description": "Acompanhamos suas solicitações até que sejam resolvidas."
        }
      ]
    },
    "blog": {
      "badge": "Blog",
      "viewAll": "Ver no Instagram",
      "heading": "Blog",
      "subtitle": "Notícias, cultura e os bastidores do desenvolvimento do funk.",
      "readMore": "Ler matéria",
      "prevAria": "Matéria anterior",
      "nextAria": "Próxima matéria",
      "categories": {
        "noticias": "Notícias",
        "cultura": "Cultura",
        "tecnologia": "Tecnologia",
        "lancamentos": "Lançamentos"
      },
      "articles": [
        {
          "title": "Funk brasileiro é tema de painel no SXSW 2026",
          "date": "4 mar 2026"
        },
        {
          "title": "Funk da Baixada Santista ganha destaque no Museu da Língua Portuguesa",
          "date": "6 mar 2026"
        },
        {
          "title": "Nova ferramenta do Spotify pode impactar como o funk é produzido",
          "date": "17 abr 2026"
        },
        {
          "title": "Os lançamentos que estão bombando essa semana",
          "date": "7 jun 2026"
        }
      ]
    },
    "faq": {
      "badge": "Dúvidas",
      "whatsapp": "Falar no WhatsApp",
      "heading": "Perguntas frequentes",
      "subtitle": "Tire suas dúvidas sobre distribuição, prazos e royalties.",
      "ctaText": "Quer distribuir com a Brazilian Funk?",
      "items": [
        {
          "question": "O que é a Brazilian Funk?",
          "answer": "A Brazilian Funk é um serviço de distribuição musical voltado ao Funk, com uma rede colaborativa e de incentivo ao crescimento cultural e digital do gênero."
        },
        {
          "question": "Como faço para ser um artista ou gravadora parceira?",
          "answer": "Basta clicar em \"Solicitar Acesso\" e preencher suas informações até o final. Após a análise e aprovação da nossa equipe, entraremos em contato para prosseguir com a parceria."
        },
        {
          "question": "Preencher o formulário garante meu acesso e vínculo com a Brazilian Funk?",
          "answer": "Não. As informações enviadas passam por análise, assim como o histórico de conteúdo do artista ou da gravadora nas plataformas. Trabalhamos com parceiros que respeitam os direitos autorais e o uso correto de conteúdos de terceiros."
        },
        {
          "question": "Como recebo meus pagamentos?",
          "answer": "Você pode solicitar o saque dos seus valores diretamente pelo painel, utilizando o PayPal ou Pix como método de pagamento."
        },
        {
          "question": "Existe algum custo para começar a distribuir?",
          "answer": "Não. A Brazilian Funk não cobra taxas para utilizar nossos serviços de distribuição. Nossa operação é baseada na participação nos royalties gerados pelo conteúdo distribuído."
        }
      ]
    },
    "footer": {
      "description": "Distribuição musical voltada ao Funk, com uma rede colaborativa e de incentivo ao crescimento cultural e digital do gênero.",
      "colContent": "Conteúdo",
      "colContact": "Contato",
      "colReclameAqui": "Reclame Aqui",
      "copyright": "© Brazilian Funk. Todos os direitos reservados.",
      "termsLink": "Termos de Uso",
      "privacyLink": "Política de Privacidade",
      "socialAriaTemplate": "{name} da Brazilian Funk",
      "reclameAquiAria": "Perfil da Brazilian Funk no Reclame Aqui"
    },
    "legal": {
      "lastUpdatedLabel": "Última atualização",
      "updatedDate": "3 de novembro de 2026",
      "privacyIntro": "Esta Política explica quais dados pessoais a Brazilian Funk coleta, por que coleta, com quem compartilha e como você pode exercer seus direitos, conforme a LGPD (Lei nº 13.709/2018). Ela é parte integrante dos nossos Termos de Uso.",
      "termsIntro": "Estes Termos explicam como funciona a distribuição das suas músicas pela Brazilian Funk: o que você autoriza, o que cobramos, como pagamos e quais regras valem para os dois lados.",
      "badge": "Documento legal",
      "summaryTitle": "O essencial",
      "summaryNote": "Este resumo ajuda na leitura, mas não substitui o texto completo abaixo.",
      "contentsTitle": "Nesta página",
      "otherDoc": "Leia também"
    },
    "form": {
      "closeAria": "Fechar solicitação",
      "step0Question": "Você é artista ou gravadora?",
      "optionArtist": "Artista",
      "optionLabel": "Gravadora",
      "step1Label": "Qual seu nome completo?",
      "step1Placeholder": "Seu nome",
      "step2LabelArtist": "Qual seu nome artístico?",
      "step2PlaceholderArtist": "Seu nome artístico",
      "step2LabelLabel": "Qual o nome da gravadora?",
      "step2PlaceholderLabel": "Nome da gravadora",
      "step3Label": "Qual seu e-mail?",
      "step3Placeholder": "voce@email.com",
      "step4Label": "Qual seu celular?",
      "step5LabelArtist": "Qual seu perfil no Spotify?",
      "step5LabelLabel": "Qual o perfil da gravadora no Spotify?",
      "noSpotifyYet": "Ainda não tenho perfil no Spotify",
      "altLinkLabel": "Link do seu perfil no YouTube ou SoundCloud (opcional)",
      "haveSpotifyNow": "Já tenho perfil no Spotify",
      "errorSpotify": "Selecione um perfil da lista de resultados.",
      "errorGeneric": "Preencha essa informação pra continuar.",
      "back": "Voltar",
      "ok": "OK",
      "send": "Enviar",
      "enterHint": "pressione",
      "termsTitle": "Termos e condições",
      "termsBodyBefore": "Antes de enviar sua solicitação, leia e aceite nossos",
      "termsBodyMiddle": "e nossa",
      "termsBodyAfter": ". Ao aceitar, você concorda com o uso das informações enviadas para análise da sua parceria com a Brazilian Funk.",
      "termsCheckboxLabel": "Li e aceito os Termos de Uso e a Política de Privacidade",
      "decline": "Recusar",
      "acceptAndSend": "Aceitar e enviar",
      "sending": "Enviando...",
      "sendError": "Não foi possível enviar sua solicitação agora. Verifique sua internet e tente novamente.",
      "confirmTitle": "Solicitação enviada",
      "confirmBody": "Vamos analisar seu perfil e retornar por e-mail em breve.",
      "confirmButton": "Concluir",
      "spotifyPlaceholder": "Buscar seu artista ou colar link do Spotify",
      "spotifySearching": "Buscando...",
      "spotifyNoResults": "Nenhum resultado encontrado.",
      "spotifyError": "Não foi possível buscar agora.",
      "spotifyErrorNetwork": "Não foi possível buscar agora. Verifique sua conexão.",
      "spotifyArtist": "Artista no Spotify",
      "spotifyFollowers": "seguidores",
      "spotifyChange": "Trocar perfil selecionado"
    }
  },
  "en": {
    "nav": {
      "distribuicao": "Distribution",
      "ferramentas": "Tools",
      "noticias": "News",
      "entrar": "Sign In",
      "comecar": "Request access"
    },
    "hero": {
      "titleLine1": "The Music Distributor",
      "titleLine2": "for Funk",
      "description": "A platform specialized in Funk for artists, DJs, and labels who want to distribute their music globally, manage royalties, and grow their music career.",
      "cta": "Request access",
      "wallLabel": "Releases distributed by Brazilian Funk"
    },
    "distribution": {
      "badge": "Distribution",
      "title": "Global Distribution to the Leading Music Services",
      "description": "Unlimited releases. A single upload takes your music to the top stores and streaming services worldwide.",
      "statLabel": "stores and streaming services"
    },
    "payment": {
      "title": "Receive your payments easily",
      "description": "Make withdrawals easily and securely, with payout options via PayPal or Pix.",
      "withdraw": "Withdraw",
      "pixName": "Pix",
      "pixDesc": "You are receiving a payment for your declared earnings through Brazilian Funk.",
      "paypalDesc": "You are receiving a payment for your declared earnings through Brazilian Funk.",
      "balanceLabel": "Available balance",
      "updatedNow": "Updated just now",
      "chooseMethod": "Choose a payout method",
      "amount": "$1,000.00",
      "overline": "Payments",
      "features": [
        { "title": "Pix payouts", "desc": "Money goes straight to your registered Pix key." },
        { "title": "PayPal payouts", "desc": "For those who prefer to receive in their PayPal account." },
        { "title": "Transparent statements", "desc": "See how much each platform paid, by period." }
      ],
      "recentLabel": "Last transaction",
      "today": "Today",
      "notifTitle": "Payment received",
      "notifAmount": "$850.00",
      "sendTo": "Receive via"
    },
    "delivery": {
      "badge": "Delivery",
      "title": "Fast Content Delivery",
      "description": "We ensure your content reaches stores within 24 hours.",
      "steps": [
        "Release Upload",
        "Processing",
        "Global Distribution",
        "Live on Stores"
      ],
      "stepDescriptions": [
        "You upload the audio, artwork and track details from the dashboard.",
        "The system processes and checks the release information before sending it to the platforms.",
        "Your release is sent to Spotify, Apple Music, TikTok and 50+ platforms.",
        "Your music goes live on stores within 24 hours."
      ],
      "stepLabel": "Step"
    },
    "tools": {
      "badge": "Tools",
      "mock": {
          "streams": "Streams",
          "listeners": "Listeners",
          "last28": "Last 28 days",
          "artist": "Artist",
          "producer": "Producer",
          "label": "Label",
          "feat": "Feat.",
          "production": "Production",
          "total": "Total",
          "autoSplit": "Automatic split",
          "illustrativeSplit": "Illustrative example.",
          "region": "Region",
          "share": "Share",
          "presave": "Pre-save",
          "listenNow": "Listen now",
          "generated": "Generated automatically",
          "more": "And much more in your dashboard",
        },
      "title": "Tools to power up your music catalog",
      "description": "Everything you need to track, protect, and maximize the return on your music, all in one place.",
      "items": [
        {
          "title": "Analytics & Trends",
          "desc": "Track streams, listeners, and trends in real time to make decisions based on data, not guesswork."
        },
        {
          "title": "Royalty Splits",
          "desc": "Set each collaborator's percentage on the track. Royalties are split automatically, and each collaborator is notified by email once the split is complete."
        },
        {
          "title": "Reports & Data",
          "desc": "Pull detailed performance reports by platform, period, and region."
        },
        {
          "title": "Smart Link + Pre-Save",
          "desc": "A single page for pre-save and all the streaming links for your release."
        },
        {
          "title": "ISRC & UPC Codes",
          "desc": "Automatic generation of the identification codes required by the platforms."
        },
        {
          "title": "+More Features",
          "desc": "Several other features to manage and grow your catalog in the digital space."
        }
      ]
    },
    "support": {
      "badge": "Support",
      "title": "Support at Every Step",
      "description": "We support you every step of the way, from content submission to your first payment.",
      "items": [
        {
          "tag": "Support",
          "title": "Human Support",
          "description": "Direct support from a real agent."
        },
        {
          "tag": "Curation",
          "title": "A&R Support",
          "description": "Guidance on releases and ongoing support for your catalog."
        },
        {
          "tag": "Quality",
          "title": "Feedback & Error Detection",
          "description": "We spot potential errors and guide you on how to fix them."
        },
        {
          "tag": "Resolution",
          "title": "Requests",
          "description": "We follow your requests until they're resolved."
        }
      ]
    },
    "blog": {
      "badge": "Blog",
      "viewAll": "View on Instagram",
      "heading": "Blog",
      "subtitle": "News, culture, and the behind-the-scenes of funk's development.",
      "readMore": "Read article",
      "prevAria": "Previous article",
      "nextAria": "Next article",
      "categories": {
        "noticias": "News",
        "cultura": "Culture",
        "tecnologia": "Technology",
        "lancamentos": "Releases"
      },
      "articles": [
        {
          "title": "Brazilian funk is the topic of a panel at SXSW 2026",
          "date": "Mar 4, 2026"
        },
        {
          "title": "Funk from Baixada Santista gains spotlight at the Museum of the Portuguese Language",
          "date": "Mar 6, 2026"
        },
        {
          "title": "New Spotify tool could impact how funk is produced",
          "date": "Apr 17, 2026"
        },
        {
          "title": "The releases blowing up this week",
          "date": "Jun 7, 2026"
        }
      ]
    },
    "faq": {
      "badge": "FAQ",
      "whatsapp": "Chat on WhatsApp",
      "heading": "Frequently asked questions",
      "subtitle": "Get your questions answered about distribution, timelines, and royalties.",
      "ctaText": "Want to distribute with Brazilian Funk?",
      "items": [
        {
          "question": "What is Brazilian Funk?",
          "answer": "Brazilian Funk is a music distribution service focused on Funk, built around a collaborative network that encourages the genre's cultural and digital growth."
        },
        {
          "question": "How do I become a partner artist or label?",
          "answer": "Just click \"Request Access\" and fill in your information to the end. After our team reviews and approves it, we'll reach out to move forward with the partnership."
        },
        {
          "question": "Does filling out the form guarantee my access and partnership with Brazilian Funk?",
          "answer": "No. The information you submit goes through a review process, along with the artist's or label's content history on the platforms. We work with partners who respect copyright and the proper use of third-party content."
        },
        {
          "question": "How do I receive my payments?",
          "answer": "You can request the withdrawal of your funds directly from the dashboard, using PayPal or Pix as your payment method."
        },
        {
          "question": "Is there any cost to start distributing?",
          "answer": "No. Brazilian Funk doesn't charge fees to use our distribution services. Our operation is based on a share of the royalties generated by the distributed content."
        }
      ]
    },
    "footer": {
      "description": "Music distribution focused on Funk, built around a collaborative network that encourages the genre's cultural and digital growth.",
      "colContent": "Content",
      "colContact": "Contact",
      "colReclameAqui": "Reclame Aqui",
      "copyright": "© Brazilian Funk. All rights reserved.",
      "termsLink": "Terms of Use",
      "privacyLink": "Privacy Policy",
      "socialAriaTemplate": "Brazilian Funk on {name}",
      "reclameAquiAria": "Brazilian Funk's profile on Reclame Aqui"
    },
    "legal": {
      "lastUpdatedLabel": "Last updated",
      "updatedDate": "November 3, 2026",
      "privacyIntro": "This Policy explains what personal data Brazilian Funk collects, why, who we share it with and how you can exercise your rights, under the LGPD (Law No. 13,709/2018). It is part of our Terms of Use.",
      "termsIntro": "These Terms explain how distributing your music with Brazilian Funk works: what you authorize, what we charge, how we pay and which rules apply to both sides.",
      "badge": "Legal document",
      "summaryTitle": "The essentials",
      "summaryNote": "This summary helps you read, but it does not replace the full text below.",
      "contentsTitle": "On this page",
      "otherDoc": "Also read"
    },
    "form": {
      "closeAria": "Close request",
      "step0Question": "Are you an artist or a label?",
      "optionArtist": "Artist",
      "optionLabel": "Label",
      "step1Label": "What's your full name?",
      "step1Placeholder": "Your name",
      "step2LabelArtist": "What's your artist name?",
      "step2PlaceholderArtist": "Your artist name",
      "step2LabelLabel": "What's your label's name?",
      "step2PlaceholderLabel": "Label name",
      "step3Label": "What's your email?",
      "step3Placeholder": "you@email.com",
      "step4Label": "What's your phone number?",
      "step5LabelArtist": "What's your Spotify profile?",
      "step5LabelLabel": "What's your label's Spotify profile?",
      "noSpotifyYet": "I don't have a Spotify profile yet",
      "altLinkLabel": "Link to your YouTube or SoundCloud profile (optional)",
      "haveSpotifyNow": "I already have a Spotify profile",
      "errorSpotify": "Select a profile from the results list.",
      "errorGeneric": "Fill in this information to continue.",
      "back": "Back",
      "ok": "OK",
      "send": "Send",
      "enterHint": "press",
      "termsTitle": "Terms and conditions",
      "termsBodyBefore": "Before submitting your request, please read and accept our",
      "termsBodyMiddle": "and our",
      "termsBodyAfter": ". By accepting, you agree to the use of the information submitted for the review of your partnership with Brazilian Funk.",
      "termsCheckboxLabel": "I have read and accept the Terms of Use and the Privacy Policy",
      "decline": "Decline",
      "acceptAndSend": "Accept and submit",
      "sending": "Sending...",
      "sendError": "We couldn't submit your request right now. Check your internet connection and try again.",
      "confirmTitle": "Request submitted",
      "confirmBody": "We'll review your profile and get back to you by email soon.",
      "confirmButton": "Done",
      "spotifyPlaceholder": "Search your artist or paste a Spotify link",
      "spotifySearching": "Searching...",
      "spotifyNoResults": "No results found.",
      "spotifyError": "Could not search right now.",
      "spotifyErrorNetwork": "Could not search right now. Check your connection.",
      "spotifyArtist": "Artist on Spotify",
      "spotifyFollowers": "followers",
      "spotifyChange": "Change selected profile"
    }
  },
  "es": {
    "nav": {
      "distribuicao": "Distribución",
      "ferramentas": "Herramientas",
      "noticias": "Noticias",
      "entrar": "Iniciar sesión",
      "comecar": "Solicitar acceso"
    },
    "hero": {
      "titleLine1": "La Distribuidora",
      "titleLine2": "Musical del Funk",
      "description": "Una plataforma especializada en Funk para artistas, DJs y sellos discográficos que desean distribuir su música globalmente, gestionar regalías y desarrollar su carrera musical.",
      "cta": "Solicitar acceso",
      "wallLabel": "Lanzamientos distribuidos por Brazilian Funk"
    },
    "distribution": {
      "badge": "Distribución",
      "title": "Distribución Global a los Principales Servicios de Música",
      "description": "Envíos ilimitados. Un solo envío lleva tu lanzamiento a las principales tiendas y servicios de streaming del mundo.",
      "statLabel": "tiendas y servicios de streaming"
    },
    "payment": {
      "title": "Recibe tus pagos de forma sencilla",
      "description": "Realiza retiros de forma práctica y segura, con opciones de cobro vía PayPal o Pix.",
      "withdraw": "Retirar",
      "pixName": "Pix",
      "pixDesc": "Estás recibiendo un pago por tus ganancias declaradas a través de Brazilian Funk.",
      "paypalDesc": "Estás recibiendo un pago por tus ganancias declaradas a través de Brazilian Funk.",
      "balanceLabel": "Saldo disponible",
      "updatedNow": "Actualizado ahora",
      "chooseMethod": "Elige el método de retiro",
      "amount": "US$ 1.000,00",
      "overline": "Pagos",
      "features": [
        { "title": "Retiro vía Pix", "desc": "El dinero llega directo a tu clave Pix registrada." },
        { "title": "Retiro vía PayPal", "desc": "Para quien prefiere recibir en su cuenta PayPal." },
        { "title": "Extracto transparente", "desc": "Mira cuánto pagó cada plataforma, por período." }
      ],
      "recentLabel": "Última transacción",
      "today": "Hoy",
      "notifTitle": "Pago recibido",
      "notifAmount": "US$ 850,00",
      "sendTo": "Recibir en"
    },
    "delivery": {
      "badge": "Entrega",
      "title": "Entrega Rápida de Contenido",
      "description": "Garantizamos que tu contenido llegue a las tiendas en hasta 24 horas.",
      "steps": [
        "Envío del Lanzamiento",
        "Procesamiento",
        "Distribución Global",
        "Disponible en las Tiendas"
      ],
      "stepDescriptions": [
        "Envías el audio, la portada y la información de la pista desde el panel.",
        "El sistema procesa y verifica la información del lanzamiento antes de enviarlo a las plataformas.",
        "El lanzamiento se envía a Spotify, Apple Music, TikTok y más de 50 plataformas.",
        "Tu música queda disponible en las tiendas en hasta 24 horas."
      ],
      "stepLabel": "Etapa"
    },
    "tools": {
      "badge": "Herramientas",
      "mock": {
          "streams": "Streams",
          "listeners": "Oyentes",
          "last28": "Últimos 28 días",
          "artist": "Artista",
          "producer": "Productor",
          "label": "Disquera",
          "feat": "Feat.",
          "production": "Producción",
          "total": "Total",
          "autoSplit": "División automática",
          "illustrativeSplit": "Ejemplo ilustrativo.",
          "region": "Región",
          "share": "Participación",
          "presave": "Pre-save",
          "listenNow": "Escuchar ahora",
          "generated": "Generado automáticamente",
          "more": "Y mucho más en tu panel",
        },
      "title": "Herramientas para potenciar tu catálogo musical",
      "description": "Todo lo que necesitas para monitorear, proteger y maximizar el retorno de tu música, en un solo lugar.",
      "items": [
        {
          "title": "Analytics & Trends",
          "desc": "Monitorea streams, oyentes y tendencias en tiempo real para tomar decisiones basadas en datos, no en suposiciones."
        },
        {
          "title": "División de Regalías",
          "desc": "Define el porcentaje de cada colaborador de la canción. Las regalías se dividen automáticamente y cada colaborador recibe un aviso por correo cuando la división se completa."
        },
        {
          "title": "Informes y Datos",
          "desc": "Extrae informes detallados de rendimiento por plataforma, período y región."
        },
        {
          "title": "Smart Link + Pre-Save",
          "desc": "Una única página para pre-save y todos los enlaces de streaming de tu lanzamiento."
        },
        {
          "title": "Códigos ISRC y UPC",
          "desc": "Generación automática de los códigos de identificación exigidos por las plataformas."
        },
        {
          "title": "+Recursos",
          "desc": "Varios otros recursos para la gestión y el desarrollo de tu catálogo en el entorno digital."
        }
      ]
    },
    "support": {
      "badge": "Soporte",
      "title": "Soporte en Cada Etapa",
      "description": "Te acompañamos en cada etapa, desde el envío del contenido hasta tu primer pago.",
      "items": [
        {
          "tag": "Atención",
          "title": "Soporte Humanizado",
          "description": "Atención directa con un agente."
        },
        {
          "tag": "Curaduría",
          "title": "Acompañamiento A&R",
          "description": "Orientación en los lanzamientos y seguimiento de tu catálogo."
        },
        {
          "tag": "Calidad",
          "title": "Comentarios e Identificación de Errores",
          "description": "Identificamos posibles errores y te orientamos sobre cómo corregirlos."
        },
        {
          "tag": "Resolución",
          "title": "Solicitudes",
          "description": "Damos seguimiento a tus solicitudes hasta que se resuelvan."
        }
      ]
    },
    "blog": {
      "badge": "Blog",
      "viewAll": "Ver en Instagram",
      "heading": "Blog",
      "subtitle": "Noticias, cultura y los bastidores del desarrollo del funk.",
      "readMore": "Leer artículo",
      "prevAria": "Artículo anterior",
      "nextAria": "Artículo siguiente",
      "categories": {
        "noticias": "Noticias",
        "cultura": "Cultura",
        "tecnologia": "Tecnología",
        "lancamentos": "Lanzamientos"
      },
      "articles": [
        {
          "title": "El funk brasileño es tema de un panel en el SXSW 2026",
          "date": "4 mar 2026"
        },
        {
          "title": "El funk de Baixada Santista gana protagonismo en el Museo de la Lengua Portuguesa",
          "date": "6 mar 2026"
        },
        {
          "title": "Nueva herramienta de Spotify podría impactar cómo se produce el funk",
          "date": "17 abr 2026"
        },
        {
          "title": "Los lanzamientos que están sonando fuerte esta semana",
          "date": "7 jun 2026"
        }
      ]
    },
    "faq": {
      "badge": "Dudas",
      "whatsapp": "Hablar por WhatsApp",
      "heading": "Preguntas frecuentes",
      "subtitle": "Resuelve tus dudas sobre distribución, plazos y regalías.",
      "ctaText": "¿Quieres distribuir con Brazilian Funk?",
      "items": [
        {
          "question": "¿Qué es Brazilian Funk?",
          "answer": "Brazilian Funk es un servicio de distribución musical enfocado en el Funk, con una red colaborativa y de incentivo al crecimiento cultural y digital del género."
        },
        {
          "question": "¿Cómo hago para ser un artista o sello asociado?",
          "answer": "Simplemente haz clic en \"Solicitar Acceso\" y completa tu información hasta el final. Tras el análisis y la aprobación de nuestro equipo, nos pondremos en contacto para continuar con la asociación."
        },
        {
          "question": "¿Completar el formulario garantiza mi acceso y vínculo con Brazilian Funk?",
          "answer": "No. La información enviada pasa por un análisis, así como el historial de contenido del artista o del sello en las plataformas. Trabajamos con socios que respetan los derechos de autor y el uso correcto de contenido de terceros."
        },
        {
          "question": "¿Cómo recibo mis pagos?",
          "answer": "Puedes solicitar el retiro de tus valores directamente desde el panel, utilizando PayPal o Pix como método de pago."
        },
        {
          "question": "¿Existe algún costo para empezar a distribuir?",
          "answer": "No. Brazilian Funk no cobra tarifas por utilizar nuestros servicios de distribución. Nuestra operación se basa en la participación en las regalías generadas por el contenido distribuido."
        }
      ]
    },
    "footer": {
      "description": "Distribución musical enfocada en el Funk, con una red colaborativa y de incentivo al crecimiento cultural y digital del género.",
      "colContent": "Contenido",
      "colContact": "Contacto",
      "colReclameAqui": "Reclame Aqui",
      "copyright": "© Brazilian Funk. Todos los derechos reservados.",
      "termsLink": "Términos de Uso",
      "privacyLink": "Política de Privacidad",
      "socialAriaTemplate": "Brazilian Funk en {name}",
      "reclameAquiAria": "Perfil de Brazilian Funk en Reclame Aqui"
    },
    "legal": {
      "lastUpdatedLabel": "Última actualización",
      "updatedDate": "3 de noviembre de 2026",
      "privacyIntro": "Esta Política explica qué datos personales recopila Brazilian Funk, para qué, con quién los comparte y cómo puedes ejercer tus derechos, conforme a la LGPD (Ley nº 13.709/2018). Forma parte de nuestros Términos de Uso.",
      "termsIntro": "Estos Términos explican cómo funciona la distribución de tu música con Brazilian Funk: qué autorizas, qué cobramos, cómo pagamos y qué reglas valen para ambas partes.",
      "badge": "Documento legal",
      "summaryTitle": "Lo esencial",
      "summaryNote": "Este resumen ayuda a la lectura, pero no sustituye el texto completo a continuación.",
      "contentsTitle": "En esta página",
      "otherDoc": "Lee también"
    },
    "form": {
      "closeAria": "Cerrar solicitud",
      "step0Question": "¿Eres artista o sello discográfico?",
      "optionArtist": "Artista",
      "optionLabel": "Sello discográfico",
      "step1Label": "¿Cuál es tu nombre completo?",
      "step1Placeholder": "Tu nombre",
      "step2LabelArtist": "¿Cuál es tu nombre artístico?",
      "step2PlaceholderArtist": "Tu nombre artístico",
      "step2LabelLabel": "¿Cuál es el nombre del sello?",
      "step2PlaceholderLabel": "Nombre del sello",
      "step3Label": "¿Cuál es tu correo electrónico?",
      "step3Placeholder": "tu@email.com",
      "step4Label": "¿Cuál es tu número de celular?",
      "step5LabelArtist": "¿Cuál es tu perfil de Spotify?",
      "step5LabelLabel": "¿Cuál es el perfil del sello en Spotify?",
      "noSpotifyYet": "Todavía no tengo perfil en Spotify",
      "altLinkLabel": "Enlace a tu perfil de YouTube o SoundCloud (opcional)",
      "haveSpotifyNow": "Ya tengo perfil en Spotify",
      "errorSpotify": "Selecciona un perfil de la lista de resultados.",
      "errorGeneric": "Completa esta información para continuar.",
      "back": "Atrás",
      "ok": "OK",
      "send": "Enviar",
      "enterHint": "presiona",
      "termsTitle": "Términos y condiciones",
      "termsBodyBefore": "Antes de enviar tu solicitud, lee y acepta nuestros",
      "termsBodyMiddle": "y nuestra",
      "termsBodyAfter": ". Al aceptar, aceptas el uso de la información enviada para el análisis de tu asociación con Brazilian Funk.",
      "termsCheckboxLabel": "He leído y acepto los Términos de Uso y la Política de Privacidad",
      "decline": "Rechazar",
      "acceptAndSend": "Aceptar y enviar",
      "sending": "Enviando...",
      "sendError": "No pudimos enviar tu solicitud en este momento. Verifica tu conexión a internet e inténtalo de nuevo.",
      "confirmTitle": "Solicitud enviada",
      "confirmBody": "Analizaremos tu perfil y te responderemos por correo electrónico pronto.",
      "confirmButton": "Listo",
      "spotifyPlaceholder": "Busca tu artista o pega el enlace de Spotify",
      "spotifySearching": "Buscando...",
      "spotifyNoResults": "No se encontraron resultados.",
      "spotifyError": "No fue posible buscar ahora.",
      "spotifyErrorNetwork": "No fue posible buscar ahora. Verifica tu conexión.",
      "spotifyArtist": "Artista en Spotify",
      "spotifyFollowers": "seguidores",
      "spotifyChange": "Cambiar perfil seleccionado"
    }
  }
}
