import type { Locale } from "./types"
import type { LegalDoc } from "./legal-terms"

export type { LegalSection } from "./legal-terms"

export const legalPrivacy: Record<Locale, LegalDoc> = {
  pt: {
    summary: [
      "Coletamos apenas os dados necessários para analisar sua solicitação, distribuir suas músicas e pagar seus royalties.",
      "Compartilhamos dados somente com quem precisa deles para prestar o serviço, como as plataformas de música e os meios de pagamento. Não vendemos seus dados.",
      "Usamos cookies para login, segurança, preferências e análise de uso. Não usamos cookies de publicidade.",
      "Você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail contato@brazilianfunk.online.",
    ],
    sections: [
      {
        title: "Quem é o responsável pelos seus dados",
        paragraphs: [
          "A Brazilian Funk, distribuidora musical digital, é a controladora dos dados pessoais tratados no site, na Solicitação de Acesso e na Plataforma, nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, “LGPD”).",
          "O canal de atendimento sobre privacidade e proteção de dados, inclusive para contato com o encarregado, é o e-mail contato@brazilianfunk.online.",
        ],
      },
      {
        title: "A quem esta Política se aplica",
        paragraphs: [
          "Esta Política vale para visitantes do site, pessoas que preenchem a Solicitação de Acesso, artistas, gravadoras e demais usuários da Plataforma, e colaboradores indicados na Divisão de Royalties.",
        ],
      },
      {
        title: "Quais dados coletamos",
        paragraphs: [
          "Dados que você nos informa:",
          "- Solicitação de Acesso: tipo de perfil (artista ou gravadora), nome completo, nome artístico ou da gravadora, e-mail, celular e perfil no Spotify ou link alternativo (YouTube ou SoundCloud).",
          "- Conta e Plataforma: dados de acesso, dados de pagamento (conta PayPal, dados Tipalti ou chave Pix), arquivos de áudio, capas, letras e metadados dos lançamentos (títulos, créditos, nomes de compositores e participantes, ISRC e UPC).",
          "- Verificação de identidade e dados fiscais: quando exigidos pela lei ou pelos meios de pagamento, como CPF ou CNPJ, data de nascimento, endereço e documento de identificação.",
          "- Identificadores nas plataformas de música: links e códigos de perfil de artista (por exemplo, no Spotify e no YouTube), usados para vincular corretamente os lançamentos.",
          "- Divisão de Royalties: nome, e-mail e porcentagem dos colaboradores indicados por você. Ao informar esses dados, você declara ter autorização dos colaboradores para isso.",
          "Dados coletados automaticamente:",
          "- Registros de acesso (endereço IP, data e hora) e localização aproximada derivada do IP, guardados conforme o Marco Civil da Internet (Lei nº 12.965/2014).",
          "- Informações técnicas do navegador e do dispositivo, cookies e dados de uso da Plataforma, conforme a seção de cookies desta Política.",
          "Dados recebidos de terceiros:",
          "- Dados públicos do seu perfil no Spotify (nome, foto e número de seguidores), quando você o busca na Solicitação de Acesso.",
          "- Relatórios de execuções e receitas enviados pelas plataformas de música (DSPs) sobre os seus lançamentos.",
        ],
      },
      {
        title: "Para que usamos os dados e com qual base legal",
        paragraphs: [
          "- Analisar sua Solicitação de Acesso e responder a ela: procedimentos preliminares e execução de contrato (art. 7º, V, da LGPD).",
          "- Criar e manter sua conta, distribuir suas músicas, exibir dados de desempenho, processar a Divisão de Royalties e realizar pagamentos: execução de contrato (art. 7º, V).",
          "- Verificar identidade e titularidade dos dados de pagamento, emitir documentos fiscais, manter registros contábeis e guardar registros de acesso: cumprimento de obrigação legal ou regulatória (art. 7º, II) e prevenção à fraude.",
          "- Prevenir fraudes e streams artificiais, proteger a Plataforma, entender como ela é usada para melhorá-la e enviar comunicações sobre os Serviços: legítimo interesse (art. 7º, IX), sempre respeitando seus direitos.",
          "- Defender direitos em processos judiciais, administrativos ou arbitrais: exercício regular de direitos (art. 7º, VI).",
          "- Enviar novidades e oportunidades da Brazilian Funk que não sejam essenciais ao serviço: consentimento (art. 7º, I), que você pode retirar a qualquer momento.",
        ],
      },
      {
        title: "Com quem compartilhamos",
        paragraphs: [
          "Compartilhamos apenas os dados necessários com:",
          "- plataformas de música (DSPs), como Spotify, Apple Music, YouTube Music, TikTok, Deezer e Amazon Music, para distribuir seus lançamentos;",
          "- processadores de pagamento e de verificação de identidade e dados fiscais (PayPal, Tipalti e instituições do Pix), para realizar os repasses com segurança;",
          "- provedores de tecnologia que hospedam e operam o site e a Plataforma, inclusive serviços de login, análise de uso, EmailJS (envio do formulário de Solicitação de Acesso) e API do Spotify (busca de perfil);",
          "- colaboradores da Divisão de Royalties, que recebem por e-mail as informações da divisão em que participam;",
          "- autoridades públicas, quando houver obrigação legal ou ordem judicial;",
          "- eventual sucessor, em caso de fusão, aquisição ou reorganização da empresa, que deverá respeitar esta Política.",
          "Também podemos usar dados agregados e anonimizados, que não identificam ninguém, para estatísticas e relatórios.",
          "Não vendemos nem alugamos seus dados pessoais.",
        ],
      },
      {
        title: "Transferência internacional",
        paragraphs: [
          "Alguns parceiros, como DSPs e processadores de pagamento, armazenam dados fora do Brasil. Nesses casos, a transferência ocorre para executar o contrato com você e com as salvaguardas previstas nos arts. 33 a 36 da LGPD.",
        ],
      },
      {
        title: "Cookies e tecnologias semelhantes",
        paragraphs: [
          "Cookies são pequenos arquivos guardados no navegador. Usamos cookies e tecnologias semelhantes, como o armazenamento local do navegador, nas seguintes categorias:",
          "- Essenciais: permitem o login, mantêm a sessão ativa, protegem a conta contra acessos indevidos e garantem o funcionamento do site e da Plataforma.",
          "- Preferências: lembram escolhas como idioma e fuso horário.",
          "- Análise de uso: ajudam a entender, de forma agregada, como a Plataforma é usada, para corrigir problemas e melhorar recursos. Podemos usar ferramentas de terceiros para isso, como o Google Analytics, que funcionam com cookies, pixels e tecnologias semelhantes.",
          "Não usamos cookies para exibir publicidade. Quando a lei exigir, pediremos seu consentimento antes de ativar cookies que não sejam essenciais.",
          "Você pode bloquear ou apagar cookies nas configurações do seu navegador. Ao bloquear cookies essenciais, o login e algumas funções da Plataforma podem deixar de funcionar.",
        ],
      },
      {
        title: "Por quanto tempo guardamos",
        paragraphs: [
          "- Solicitações de Acesso: pelo tempo necessário para análise e resposta.",
          "- Dados da conta e dos lançamentos: enquanto a conta estiver ativa.",
          "- Dados financeiros e fiscais: pelo prazo exigido pela legislação fiscal e contábil, em regra de 5 (cinco) anos, mesmo após o encerramento da conta.",
          "- Registros de acesso: por no mínimo 6 (seis) meses, conforme o art. 15 do Marco Civil da Internet.",
          "- Dados de verificação de identidade: por um período razoável, mesmo que a verificação não seja concluída, para prevenir fraudes e abusos.",
          "Depois desses prazos, os dados são eliminados ou anonimizados, salvo quando a lei permitir ou exigir sua conservação. Dados anonimizados podem ser mantidos para fins estatísticos.",
        ],
      },
      {
        title: "Como protegemos os dados",
        paragraphs: [
          "Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda ou alteração, como controle de acesso restrito às informações de conta e de pagamento e uso de conexões criptografadas.",
          "Se ocorrer um incidente de segurança que possa causar risco ou dano relevante, comunicaremos a Autoridade Nacional de Proteção de Dados (ANPD) e as pessoas afetadas, conforme o art. 48 da LGPD.",
        ],
      },
      {
        title: "Seus direitos",
        paragraphs: [
          "Conforme o art. 18 da LGPD, você pode solicitar:",
          "- confirmação de que tratamos seus dados e acesso a eles;",
          "- correção de dados incompletos, inexatos ou desatualizados;",
          "- anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;",
          "- portabilidade dos dados a outro fornecedor;",
          "- informação sobre com quem compartilhamos seus dados;",
          "- revogação do consentimento e eliminação dos dados tratados com base nele.",
          "Para exercer seus direitos, escreva para contato@brazilianfunk.online. Poderemos pedir informações para confirmar sua identidade. Alguns dados precisam ser mantidos por obrigação legal, como os financeiros e fiscais. Você também pode apresentar reclamação à ANPD.",
        ],
      },
      {
        title: "Menores de idade",
        paragraphs: [
          "Os Serviços são destinados a maiores de 18 anos. Não coletamos intencionalmente dados de menores. Se identificarmos esse tipo de dado sem a autorização adequada, ele será eliminado.",
        ],
      },
      {
        title: "Links para outros sites",
        paragraphs: [
          "O site contém links para serviços de terceiros, como Instagram, WhatsApp e plataformas de música. Esses serviços têm políticas de privacidade próprias, pelas quais a Brazilian Funk não responde.",
        ],
      },
      {
        title: "Alterações nesta Política",
        paragraphs: [
          "Podemos atualizar esta Política. A data da última atualização fica no topo desta página, e mudanças relevantes serão comunicadas por e-mail ou pela Plataforma.",
        ],
      },
      {
        title: "Contato",
        paragraphs: ["Dúvidas, pedidos ou reclamações sobre privacidade: contato@brazilianfunk.online"],
      },
    ],
  },

  en: {
    summary: [
      "We only collect the data needed to review your request, distribute your music and pay your royalties.",
      "We only share data with those who need it to provide the service, such as music platforms and payment providers. We do not sell your data.",
      "We use cookies for login, security, preferences and usage analytics. We do not use advertising cookies.",
      "You can ask to access, correct or delete your data at any time at contato@brazilianfunk.online.",
    ],
    sections: [
      {
        title: "Who is responsible for your data",
        paragraphs: [
          "Brazilian Funk, a digital music distributor, is the controller of the personal data processed on the website, in the Access Request and on the Platform, under the Brazilian General Data Protection Law (Law No. 13,709/2018, “LGPD”).",
          "The contact channel for privacy and data protection matters, including contact with our data protection officer, is contato@brazilianfunk.online.",
        ],
      },
      {
        title: "Who this Policy applies to",
        paragraphs: [
          "This Policy applies to website visitors, people who complete the Access Request, artists, labels and other Platform users, and collaborators added to Royalty Splits.",
        ],
      },
      {
        title: "What data we collect",
        paragraphs: [
          "Data you give us:",
          "- Access Request: profile type (artist or label), full name, artist or label name, email, mobile number and Spotify profile or alternative link (YouTube or SoundCloud).",
          "- Account and Platform: login details, payment details (PayPal account, Tipalti details or Pix key), audio files, artwork, lyrics and release metadata (titles, credits, names of songwriters and contributors, ISRC and UPC).",
          "- Identity verification and tax data: when required by law or by payment providers, such as tax ID numbers, date of birth, address and an identity document.",
          "- Music platform identifiers: artist profile links and codes (for example on Spotify and YouTube), used to link releases correctly.",
          "- Royalty Splits: name, email and percentage of the collaborators you add. By providing this data, you confirm you are authorized by the collaborators to do so.",
          "Data collected automatically:",
          "- Access logs (IP address, date and time) and approximate location derived from the IP, kept as required by the Brazilian Internet Civil Framework (Law No. 12,965/2014).",
          "- Technical browser and device information, cookies and Platform usage data, as described in the cookies section of this Policy.",
          "Data received from third parties:",
          "- Public data from your Spotify profile (name, photo and follower count) when you search for it in the Access Request.",
          "- Stream and revenue reports sent by music platforms (DSPs) about your releases.",
        ],
      },
      {
        title: "How we use data and on what legal basis",
        paragraphs: [
          "- Reviewing and responding to your Access Request: pre-contractual steps and performance of a contract (LGPD art. 7, V).",
          "- Creating and maintaining your account, distributing your music, showing performance data, processing Royalty Splits and making payments: performance of a contract (art. 7, V).",
          "- Verifying identity and ownership of payment details, issuing tax documents, keeping accounting records and storing access logs: compliance with a legal or regulatory obligation (art. 7, II) and fraud prevention.",
          "- Preventing fraud and artificial streams, protecting the Platform, understanding how it is used to improve it and sending service communications: legitimate interest (art. 7, IX), always respecting your rights.",
          "- Defending rights in legal, administrative or arbitration proceedings: regular exercise of rights (art. 7, VI).",
          "- Sending Brazilian Funk news and opportunities not essential to the service: consent (art. 7, I), which you can withdraw at any time.",
        ],
      },
      {
        title: "Who we share data with",
        paragraphs: [
          "We only share the data needed with:",
          "- music platforms (DSPs) such as Spotify, Apple Music, YouTube Music, TikTok, Deezer and Amazon Music, to distribute your releases;",
          "- payment, identity and tax verification providers (PayPal, Tipalti and Pix institutions), to make payouts securely;",
          "- technology providers that host and operate the website and the Platform, including login and usage analytics services, EmailJS (Access Request form delivery) and the Spotify API (profile search);",
          "- Royalty Split collaborators, who receive by email the details of the split they take part in;",
          "- public authorities, when required by law or court order;",
          "- a successor, in case of a merger, acquisition or reorganization of the company, who must respect this Policy.",
          "We may also use aggregated and anonymized data, which does not identify anyone, for statistics and reports.",
          "We do not sell or rent your personal data.",
        ],
      },
      {
        title: "International transfers",
        paragraphs: [
          "Some partners, such as DSPs and payment processors, store data outside Brazil. In these cases, the transfer is made to perform our contract with you and with the safeguards set out in LGPD arts. 33 to 36.",
        ],
      },
      {
        title: "Cookies and similar technologies",
        paragraphs: [
          "Cookies are small files stored in your browser. We use cookies and similar technologies, such as the browser's local storage, in the following categories:",
          "- Essential: they enable login, keep your session active, protect your account against unauthorized access and make the website and the Platform work.",
          "- Preferences: they remember choices such as language and time zone.",
          "- Usage analytics: they help us understand, in aggregate, how the Platform is used, so we can fix problems and improve features. We may use third-party tools for this, such as Google Analytics, which work with cookies, pixels and similar technologies.",
          "We do not use cookies to show advertising. Where the law requires, we will ask for your consent before enabling non-essential cookies.",
          "You can block or delete cookies in your browser settings. If you block essential cookies, login and some Platform features may stop working.",
        ],
      },
      {
        title: "How long we keep data",
        paragraphs: [
          "- Access Requests: for as long as needed to review and respond.",
          "- Account and release data: while the account is active.",
          "- Financial and tax data: for the period required by tax and accounting law, generally 5 (five) years, even after the account is closed.",
          "- Access logs: for at least 6 (six) months, as required by article 15 of the Brazilian Internet Civil Framework.",
          "- Identity verification data: for a reasonable period, even if verification is not completed, to prevent fraud and abuse.",
          "After these periods, data is deleted or anonymized, unless the law allows or requires it to be kept. Anonymized data may be kept for statistical purposes.",
        ],
      },
      {
        title: "How we protect data",
        paragraphs: [
          "We use technical and administrative measures to protect data against unauthorized access, loss or alteration, such as restricted access to account and payment information and encrypted connections.",
          "If a security incident may cause significant risk or harm, we will notify the Brazilian Data Protection Authority (ANPD) and the people affected, as required by LGPD art. 48.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Under LGPD art. 18, you can request:",
          "- confirmation that we process your data and access to it;",
          "- correction of incomplete, inaccurate or outdated data;",
          "- anonymization, blocking or deletion of unnecessary data or data processed unlawfully;",
          "- portability of your data to another provider;",
          "- information about who we share your data with;",
          "- withdrawal of consent and deletion of data processed on that basis.",
          "To exercise your rights, write to contato@brazilianfunk.online. We may ask for information to confirm your identity. Some data must be kept by law, such as financial and tax records. You may also file a complaint with the ANPD.",
        ],
      },
      {
        title: "Minors",
        paragraphs: [
          "The Services are intended for people aged 18 and over. We do not knowingly collect data from minors. If we identify such data without proper authorization, it will be deleted.",
        ],
      },
      {
        title: "Links to other websites",
        paragraphs: [
          "The website contains links to third-party services such as Instagram, WhatsApp and music platforms. These services have their own privacy policies, for which Brazilian Funk is not responsible.",
        ],
      },
      {
        title: "Changes to this Policy",
        paragraphs: [
          "We may update this Policy. The date of the last update is shown at the top of this page, and material changes will be announced by email or on the Platform.",
        ],
      },
      {
        title: "Contact",
        paragraphs: ["Privacy questions, requests or complaints: contato@brazilianfunk.online"],
      },
    ],
  },

  es: {
    summary: [
      "Solo recopilamos los datos necesarios para analizar tu solicitud, distribuir tu música y pagar tus regalías.",
      "Solo compartimos datos con quien los necesita para prestar el servicio, como las plataformas de música y los medios de pago. No vendemos tus datos.",
      "Usamos cookies para inicio de sesión, seguridad, preferencias y análisis de uso. No usamos cookies publicitarias.",
      "Puedes pedir acceso, corrección o eliminación de tus datos en cualquier momento en contato@brazilianfunk.online.",
    ],
    sections: [
      {
        title: "Quién es responsable de tus datos",
        paragraphs: [
          "Brazilian Funk, distribuidora de música digital, es la responsable de los datos personales tratados en el sitio, en la Solicitud de Acceso y en la Plataforma, conforme a la Ley General de Protección de Datos de Brasil (Ley nº 13.709/2018, “LGPD”).",
          "El canal de atención sobre privacidad y protección de datos, incluido el contacto con el encargado, es el correo contato@brazilianfunk.online.",
        ],
      },
      {
        title: "A quién se aplica esta Política",
        paragraphs: [
          "Esta Política se aplica a visitantes del sitio, personas que completan la Solicitud de Acceso, artistas, disqueras y demás usuarios de la Plataforma, y colaboradores indicados en la División de Regalías.",
        ],
      },
      {
        title: "Qué datos recopilamos",
        paragraphs: [
          "Datos que nos proporcionas:",
          "- Solicitud de Acceso: tipo de perfil (artista o disquera), nombre completo, nombre artístico o de la disquera, correo, celular y perfil de Spotify o enlace alternativo (YouTube o SoundCloud).",
          "- Cuenta y Plataforma: datos de acceso, datos de pago (cuenta PayPal, datos de Tipalti o clave Pix), archivos de audio, portadas, letras y metadatos de los lanzamientos (títulos, créditos, nombres de compositores y participantes, ISRC y UPC).",
          "- Verificación de identidad y datos fiscales: cuando lo exijan la ley o los medios de pago, como número de identificación fiscal, fecha de nacimiento, dirección y documento de identidad.",
          "- Identificadores en las plataformas de música: enlaces y códigos de perfil de artista (por ejemplo, en Spotify y YouTube), usados para vincular correctamente los lanzamientos.",
          "- División de Regalías: nombre, correo y porcentaje de los colaboradores que indiques. Al proporcionar estos datos, declaras contar con la autorización de los colaboradores.",
          "Datos recopilados automáticamente:",
          "- Registros de acceso (dirección IP, fecha y hora) y ubicación aproximada derivada de la IP, conservados conforme al Marco Civil de Internet de Brasil (Ley nº 12.965/2014).",
          "- Información técnica del navegador y del dispositivo, cookies y datos de uso de la Plataforma, según la sección de cookies de esta Política.",
          "Datos recibidos de terceros:",
          "- Datos públicos de tu perfil de Spotify (nombre, foto y número de seguidores), cuando lo buscas en la Solicitud de Acceso.",
          "- Informes de reproducciones e ingresos enviados por las plataformas de música (DSPs) sobre tus lanzamientos.",
        ],
      },
      {
        title: "Para qué usamos los datos y con qué base legal",
        paragraphs: [
          "- Analizar y responder tu Solicitud de Acceso: procedimientos preliminares y ejecución de contrato (art. 7º, V, de la LGPD).",
          "- Crear y mantener tu cuenta, distribuir tu música, mostrar datos de rendimiento, procesar la División de Regalías y realizar pagos: ejecución de contrato (art. 7º, V).",
          "- Verificar la identidad y la titularidad de los datos de pago, emitir documentos fiscales, mantener registros contables y conservar registros de acceso: cumplimiento de obligación legal o regulatoria (art. 7º, II) y prevención del fraude.",
          "- Prevenir fraudes y reproducciones artificiales, proteger la Plataforma, entender cómo se usa para mejorarla y enviar comunicaciones sobre los Servicios: interés legítimo (art. 7º, IX), siempre respetando tus derechos.",
          "- Defender derechos en procesos judiciales, administrativos o arbitrales: ejercicio regular de derechos (art. 7º, VI).",
          "- Enviar novedades y oportunidades de Brazilian Funk no esenciales para el servicio: consentimiento (art. 7º, I), que puedes retirar en cualquier momento.",
        ],
      },
      {
        title: "Con quién compartimos",
        paragraphs: [
          "Solo compartimos los datos necesarios con:",
          "- plataformas de música (DSPs), como Spotify, Apple Music, YouTube Music, TikTok, Deezer y Amazon Music, para distribuir tus lanzamientos;",
          "- procesadores de pago y de verificación de identidad y datos fiscales (PayPal, Tipalti e instituciones de Pix), para realizar los pagos con seguridad;",
          "- proveedores de tecnología que alojan y operan el sitio y la Plataforma, incluidos servicios de inicio de sesión y análisis de uso, EmailJS (envío del formulario de Solicitud de Acceso) y la API de Spotify (búsqueda de perfil);",
          "- colaboradores de la División de Regalías, que reciben por correo la información de la división en la que participan;",
          "- autoridades públicas, cuando exista obligación legal u orden judicial;",
          "- un eventual sucesor, en caso de fusión, adquisición o reorganización de la empresa, que deberá respetar esta Política.",
          "También podemos usar datos agregados y anonimizados, que no identifican a nadie, para estadísticas e informes.",
          "No vendemos ni alquilamos tus datos personales.",
        ],
      },
      {
        title: "Transferencia internacional",
        paragraphs: [
          "Algunos socios, como las DSPs y los procesadores de pago, almacenan datos fuera de Brasil. En esos casos, la transferencia se realiza para ejecutar el contrato contigo y con las salvaguardas previstas en los arts. 33 a 36 de la LGPD.",
        ],
      },
      {
        title: "Cookies y tecnologías similares",
        paragraphs: [
          "Las cookies son pequeños archivos guardados en el navegador. Usamos cookies y tecnologías similares, como el almacenamiento local del navegador, en las siguientes categorías:",
          "- Esenciales: permiten iniciar sesión, mantienen la sesión activa, protegen la cuenta contra accesos indebidos y garantizan el funcionamiento del sitio y de la Plataforma.",
          "- Preferencias: recuerdan elecciones como idioma y zona horaria.",
          "- Análisis de uso: ayudan a entender, de forma agregada, cómo se usa la Plataforma, para corregir problemas y mejorar funciones. Podemos usar herramientas de terceros para ello, como Google Analytics, que funcionan con cookies, píxeles y tecnologías similares.",
          "No usamos cookies para mostrar publicidad. Cuando la ley lo exija, pediremos tu consentimiento antes de activar cookies que no sean esenciales.",
          "Puedes bloquear o borrar cookies en la configuración de tu navegador. Si bloqueas las cookies esenciales, el inicio de sesión y algunas funciones de la Plataforma pueden dejar de funcionar.",
        ],
      },
      {
        title: "Por cuánto tiempo conservamos los datos",
        paragraphs: [
          "- Solicitudes de Acceso: el tiempo necesario para analizarlas y responderlas.",
          "- Datos de la cuenta y de los lanzamientos: mientras la cuenta esté activa.",
          "- Datos financieros y fiscales: el plazo exigido por la legislación fiscal y contable, en general 5 (cinco) años, incluso tras el cierre de la cuenta.",
          "- Registros de acceso: al menos 6 (seis) meses, conforme al art. 15 del Marco Civil de Internet de Brasil.",
          "- Datos de verificación de identidad: durante un período razonable, aunque la verificación no se complete, para prevenir fraudes y abusos.",
          "Después de esos plazos, los datos se eliminan o anonimizan, salvo cuando la ley permita o exija conservarlos. Los datos anonimizados pueden conservarse con fines estadísticos.",
        ],
      },
      {
        title: "Cómo protegemos los datos",
        paragraphs: [
          "Adoptamos medidas técnicas y administrativas para proteger los datos contra accesos no autorizados, pérdida o alteración, como acceso restringido a la información de cuenta y de pago y conexiones cifradas.",
          "Si ocurre un incidente de seguridad que pueda causar un riesgo o daño relevante, lo comunicaremos a la Autoridad Nacional de Protección de Datos de Brasil (ANPD) y a las personas afectadas, conforme al art. 48 de la LGPD.",
        ],
      },
      {
        title: "Tus derechos",
        paragraphs: [
          "Conforme al art. 18 de la LGPD, puedes solicitar:",
          "- confirmación de que tratamos tus datos y acceso a ellos;",
          "- corrección de datos incompletos, inexactos o desactualizados;",
          "- anonimización, bloqueo o eliminación de datos innecesarios o tratados en desacuerdo con la ley;",
          "- portabilidad de los datos a otro proveedor;",
          "- información sobre con quién compartimos tus datos;",
          "- revocación del consentimiento y eliminación de los datos tratados con base en él.",
          "Para ejercer tus derechos, escribe a contato@brazilianfunk.online. Podremos pedirte información para confirmar tu identidad. Algunos datos deben conservarse por obligación legal, como los financieros y fiscales. También puedes presentar un reclamo ante la ANPD.",
        ],
      },
      {
        title: "Menores de edad",
        paragraphs: [
          "Los Servicios están destinados a mayores de 18 años. No recopilamos intencionalmente datos de menores. Si identificamos este tipo de datos sin la autorización adecuada, serán eliminados.",
        ],
      },
      {
        title: "Enlaces a otros sitios",
        paragraphs: [
          "El sitio contiene enlaces a servicios de terceros, como Instagram, WhatsApp y plataformas de música. Estos servicios tienen sus propias políticas de privacidad, de las que Brazilian Funk no es responsable.",
        ],
      },
      {
        title: "Cambios en esta Política",
        paragraphs: [
          "Podemos actualizar esta Política. La fecha de la última actualización aparece al inicio de esta página, y los cambios relevantes se comunicarán por correo o en la Plataforma.",
        ],
      },
      {
        title: "Contacto",
        paragraphs: ["Dudas, solicitudes o reclamos sobre privacidad: contato@brazilianfunk.online"],
      },
    ],
  },
}
