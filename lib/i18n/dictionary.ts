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
  }
  distribution: {
    badge: string
    title: string
    description: string
  }
  payment: {
    title: string
    description: string
    withdraw: string
    pixName: string
    pixDesc: string
  }
  delivery: {
    title: string
    description: string
    steps: string[]
  }
  tools: {
    title: string
    description: string
    items: {
      title: string
      desc: string
    }[]
  }
  support: {
    title: string
    description: string
    items: {
      tag: string
      title: string
      description: string
    }[]
  }
  blog: {
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
    heading: string
    subtitle: string
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
      "comecar": "Começar"
    },
    "hero": {
      "titleLine1": "A Distribuidora",
      "titleLine2": "Musical do Funk",
      "description": "Uma plataforma especializada em Funk para artistas, DJs e gravadoras que desejam distribuir suas músicas globalmente, gerenciar royalties e desenvolver sua carreira musical.",
      "cta": "Solicitar Acesso"
    },
    "distribution": {
      "badge": "+40 Lojas e Serviços",
      "title": "Distribuição Global para os Principais Serviços de Música",
      "description": "Envios ilimitados para as principais plataformas de streaming. Distribua suas músicas para Spotify, Apple Music, TikTok, Amazon, Deezer, Instagram, YouTube Music e mais de 40 plataformas globais."
    },
    "payment": {
      "title": "Receba seus pagamentos de forma simples",
      "description": "Efetue saques de forma prática e segura, com opções de recebimento via PayPal ou Pix.",
      "withdraw": "WITHDRAW",
      "pixName": "Pix",
      "pixDesc": "Você está recebendo um pagamento pelos seus ganhos declarados através da Brazilian Funk."
    },
    "delivery": {
      "title": "Entrega Rápida de Conteúdo",
      "description": "Garantimos que seu conteúdo chegue às lojas em até 24 horas.",
      "steps": [
        "Envio do Lançamento",
        "Processamento",
        "Distribuição Global",
        "Disponível nas Lojas"
      ]
    },
    "tools": {
      "title": "Ferramentas para potencializar seu catálogo musical",
      "description": "Tudo que você precisa para acompanhar, proteger e maximizar o retorno das suas músicas, em um só lugar.",
      "items": [
        {
          "title": "Analytics & Trends",
          "desc": "Acompanhe streams, ouvintes e tendências em tempo real para tomar decisões com dados, não achismo."
        },
        {
          "title": "Divisão de Royalties",
          "desc": "Configure splits entre artistas, produtores e gravadora com transparência total."
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
      "heading": "Perguntas frequentes",
      "subtitle": "Tire suas dúvidas sobre distribuição, prazos e royalties.",
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
      "updatedDate": "11 de agosto de 2026",
      "privacyIntro": "Esta Política descreve como a Brazilian Funk coleta, usa, armazena e protege suas informações, em conformidade com a LGPD (Lei nº 13.709/2018), e é parte integrante dos nossos Termos de Uso."
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
      "confirmButton": "Concluir"
    }
  },
  "en": {
    "nav": {
      "distribuicao": "Distribution",
      "ferramentas": "Tools",
      "noticias": "News",
      "entrar": "Sign In",
      "comecar": "Get Started"
    },
    "hero": {
      "titleLine1": "The Music Distributor",
      "titleLine2": "for Funk",
      "description": "A platform specialized in Funk for artists, DJs, and labels who want to distribute their music globally, manage royalties, and grow their music career.",
      "cta": "Request Access"
    },
    "distribution": {
      "badge": "+40 Stores and Services",
      "title": "Global Distribution to the Leading Music Services",
      "description": "Unlimited uploads to the leading streaming platforms. Distribute your music to Spotify, Apple Music, TikTok, Amazon, Deezer, Instagram, YouTube Music, and more than 40 global platforms."
    },
    "payment": {
      "title": "Receive your payments easily",
      "description": "Make withdrawals easily and securely, with payout options via PayPal or Pix.",
      "withdraw": "WITHDRAW",
      "pixName": "Pix",
      "pixDesc": "You are receiving a payment for your declared earnings through Brazilian Funk."
    },
    "delivery": {
      "title": "Fast Content Delivery",
      "description": "We ensure your content reaches stores within 24 hours.",
      "steps": [
        "Release Upload",
        "Processing",
        "Global Distribution",
        "Live on Stores"
      ]
    },
    "tools": {
      "title": "Tools to power up your music catalog",
      "description": "Everything you need to track, protect, and maximize the return on your music, all in one place.",
      "items": [
        {
          "title": "Analytics & Trends",
          "desc": "Track streams, listeners, and trends in real time to make decisions based on data, not guesswork."
        },
        {
          "title": "Royalty Splits",
          "desc": "Set up splits between artists, producers, and the label with full transparency."
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
      "heading": "Frequently asked questions",
      "subtitle": "Get your questions answered about distribution, timelines, and royalties.",
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
      "updatedDate": "August 11, 2026",
      "privacyIntro": "This Policy describes how Brazilian Funk collects, uses, stores, and protects Your information, in compliance with the LGPD (Law No. 13,709/2018), and forms an integral part of our Terms of Use."
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
      "confirmButton": "Done"
    }
  },
  "es": {
    "nav": {
      "distribuicao": "Distribución",
      "ferramentas": "Herramientas",
      "noticias": "Noticias",
      "entrar": "Iniciar sesión",
      "comecar": "Empezar"
    },
    "hero": {
      "titleLine1": "La Distribuidora",
      "titleLine2": "Musical del Funk",
      "description": "Una plataforma especializada en Funk para artistas, DJs y sellos discográficos que desean distribuir su música globalmente, gestionar regalías y desarrollar su carrera musical.",
      "cta": "Solicitar Acceso"
    },
    "distribution": {
      "badge": "+40 Tiendas y Servicios",
      "title": "Distribución Global a los Principales Servicios de Música",
      "description": "Envíos ilimitados a las principales plataformas de streaming. Distribuye tu música en Spotify, Apple Music, TikTok, Amazon, Deezer, Instagram, YouTube Music y más de 40 plataformas globales."
    },
    "payment": {
      "title": "Recibe tus pagos de forma sencilla",
      "description": "Realiza retiros de forma práctica y segura, con opciones de cobro vía PayPal o Pix.",
      "withdraw": "WITHDRAW",
      "pixName": "Pix",
      "pixDesc": "Estás recibiendo un pago por tus ganancias declaradas a través de Brazilian Funk."
    },
    "delivery": {
      "title": "Entrega Rápida de Contenido",
      "description": "Garantizamos que tu contenido llegue a las tiendas en hasta 24 horas.",
      "steps": [
        "Envío del Lanzamiento",
        "Procesamiento",
        "Distribución Global",
        "Disponible en las Tiendas"
      ]
    },
    "tools": {
      "title": "Herramientas para potenciar tu catálogo musical",
      "description": "Todo lo que necesitas para monitorear, proteger y maximizar el retorno de tu música, en un solo lugar.",
      "items": [
        {
          "title": "Analytics & Trends",
          "desc": "Monitorea streams, oyentes y tendencias en tiempo real para tomar decisiones basadas en datos, no en suposiciones."
        },
        {
          "title": "División de Regalías",
          "desc": "Configura divisiones entre artistas, productores y el sello con total transparencia."
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
      "heading": "Preguntas frecuentes",
      "subtitle": "Resuelve tus dudas sobre distribución, plazos y regalías.",
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
      "updatedDate": "11 de agosto de 2026",
      "privacyIntro": "Esta Política describe cómo Brazilian Funk recopila, usa, almacena y protege su información, de conformidad con la LGPD (Ley n.º 13.709/2018), y es parte integrante de nuestros Términos de Uso."
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
      "confirmButton": "Listo"
    }
  }
}
