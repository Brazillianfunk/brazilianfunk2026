import type { Locale } from "./types"

// Parágrafos que começam com "- " viram itens de lista na página.
export interface LegalSection {
  title: string
  paragraphs: string[]
}

export interface LegalDoc {
  /** Resumo em linguagem simples, exibido no topo. Não substitui o texto completo. */
  summary: string[]
  sections: LegalSection[]
}

export const legalTerms: Record<Locale, LegalDoc> = {
  pt: {
    summary: [
      "Você continua dono das suas músicas. A Brazilian Funk recebe apenas uma licença para distribuí-las e divulgá-las enquanto sua conta estiver ativa.",
      "Pelo serviço prestado, a Brazilian Funk retém uma Comissão de 15% sobre os royalties recebidos das plataformas. Os outros 85% são repassados a você.",
      "Streams artificiais, conteúdo copiado ou metadados falsos levam a retenção de valores, remoção de lançamentos e encerramento da conta.",
      "Você pode encerrar sua conta quando quiser. As plataformas têm até 30 dias para retirar suas músicas do ar.",
    ],
    sections: [
      {
        title: "Quem somos e aceite destes Termos",
        paragraphs: [
          "Estes Termos de Uso (“Termos”) regulam a relação entre a Brazilian Funk, distribuidora musical digital (“Brazilian Funk”, “nós”), e a pessoa física ou jurídica que utiliza seus serviços (“Você” ou “Usuário”), em conjunto denominadas “Partes”.",
          "Ao preencher a Solicitação de Acesso, criar uma conta ou utilizar a Plataforma, Você declara que leu, entendeu e aceita estes Termos e a Política de Privacidade, que é parte integrante deles. Se não concordar, não utilize os Serviços.",
          "Para utilizar os Serviços, Você deve ter no mínimo 18 anos e plena capacidade civil. Quem age em nome de gravadora, selo ou artista, como empresários e representantes, declara ter poderes para vinculá-los a estes Termos.",
        ],
      },
      {
        title: "Definições",
        paragraphs: [
          "- Plataforma: o site da Brazilian Funk e o painel (dashboard) em que o Usuário envia lançamentos, acompanha dados e recebe pagamentos.",
          "- Serviços: a distribuição digital das Obras às DSPs e as demais ferramentas disponíveis na Plataforma, como dados de desempenho, divisão de royalties e repasse de valores.",
          "- Obras: fonogramas, composições e vídeos enviados pelo Usuário para distribuição.",
          "- Conteúdo: as Obras e todo material relacionado a elas, como capas, fotos, nomes, títulos, letras, créditos e metadados.",
          "- DSPs: lojas e serviços de música digital, como Spotify, Apple Music, YouTube Music, TikTok, Deezer, Amazon Music e outros.",
          "- Royalties: valores pagos pelas DSPs e demais fontes pela exploração das Obras do Usuário.",
          "- Comissão: a remuneração da Brazilian Funk pelos Serviços, descrita na cláusula de Comissão e pagamentos.",
        ],
      },
      {
        title: "Solicitação de acesso e conta",
        paragraphs: [
          "O acesso à Plataforma depende da aprovação da Solicitação de Acesso. A Brazilian Funk pode aprovar ou recusar solicitações conforme seus critérios de análise de perfil e catálogo, sem obrigação de justificar a decisão.",
          "Você se compromete a fornecer informações verdadeiras, completas e atualizadas, inclusive dados de contato e de pagamento, e a mantê-las corretas durante todo o uso dos Serviços.",
          "A conta é pessoal. Você é responsável por manter suas credenciais em sigilo e por toda atividade realizada nela, e deve nos avisar imediatamente em caso de acesso não autorizado.",
        ],
      },
      {
        title: "Os Serviços",
        paragraphs: [
          "A Brazilian Funk entrega as Obras às DSPs escolhidas, disponibiliza dados de desempenho no painel e realiza o repasse dos Royalties ao Usuário, conforme as funcionalidades disponíveis para cada conta.",
          "Na Divisão de Royalties, o Usuário define a porcentagem de cada colaborador da faixa. A divisão é feita automaticamente pela Plataforma, e cada colaborador é avisado por e-mail quando ela é concluída. O Usuário é responsável pelas porcentagens informadas e por ter o acordo dos colaboradores.",
          "A aceitação, a data de publicação, o destaque e a permanência das Obras em cada DSP dependem exclusivamente das regras e decisões de cada DSP. A Brazilian Funk não garante inclusão em playlists, número de execuções, receita ou qualquer outro resultado.",
          "Os prazos de entrega podem variar conforme cada DSP. O envio só é iniciado após o recebimento de todo o Conteúdo necessário, dentro dos padrões técnicos exigidos.",
        ],
      },
      {
        title: "Licença de distribuição",
        paragraphs: [
          "Você continua titular de todos os direitos autorais e conexos sobre as Obras. Não há cessão de direitos à Brazilian Funk.",
          "Durante a vigência da sua conta, Você concede à Brazilian Funk uma licença não exclusiva, mundial e sublicenciável às DSPs para reproduzir, distribuir, disponibilizar, executar publicamente e comunicar as Obras ao público, por quaisquer meios e formatos, exclusivamente para a prestação dos Serviços.",
          "A licença inclui o uso do seu nome artístico, imagem e demais elementos do Conteúdo vinculados às Obras, na medida necessária à distribuição, e é concedida nos termos da Lei nº 9.610/1998 (Lei de Direitos Autorais). Você se compromete a fornecer a documentação adicional que for exigida.",
          "A licença termina com a remoção das Obras ou o encerramento da conta, ressalvado o prazo técnico para retirada nas DSPs e as cópias que terceiros já tenham obtido legitimamente.",
        ],
      },
      {
        title: "Uso promocional",
        paragraphs: [
          "Você autoriza a Brazilian Funk, de forma gratuita e não exclusiva, a usar capas, fotos, vídeos, nome artístico, títulos e trechos das Obras para divulgar seus lançamentos e os Serviços da Brazilian Funk em site, redes sociais, anúncios, apresentações, portfólio e demais canais de comunicação.",
          "Essa autorização não transfere a titularidade de nenhum direito e não permite o uso do Conteúdo para finalidades sem relação com a distribuição, a divulgação ou a operação dos Serviços, salvo nova autorização sua.",
          "Após o encerramento da conta, a Brazilian Funk poderá manter materiais promocionais já publicados e cópias necessárias para registro histórico e cumprimento de obrigações legais.",
        ],
      },
      {
        title: "Suas declarações e garantias",
        paragraphs: [
          "Ao enviar Conteúdo, Você declara e garante que:",
          "- é titular ou tem todas as autorizações necessárias sobre as Obras e o Conteúdo, inclusive de coautores, intérpretes, produtores e titulares de samples, beats e trechos de terceiros;",
          "- obteve as licenças exigidas para versões cover, nos territórios em que forem necessárias;",
          "- os metadados (nomes de artistas, títulos, créditos, gênero, idioma e letras) são corretos e não induzem o público a erro;",
          "- o Conteúdo não imita a voz, o nome ou a imagem de outro artista sem autorização, inclusive quando produzido com ferramentas de inteligência artificial;",
          "- se a Obra tiver sido criada total ou parcialmente com inteligência artificial, Você possui os direitos necessários sobre ela e informará esse fato quando solicitado;",
          "- o Conteúdo não contém vírus ou códigos que possam prejudicar sistemas de terceiros.",
        ],
      },
      {
        title: "Conteúdo proibido",
        paragraphs: [
          "Não é permitido enviar Conteúdo que:",
          "- viole direitos autorais, marcas, imagem ou outros direitos de terceiros;",
          "- contenha discurso de ódio, incitação à violência ou exploração sexual de menores;",
          "- se passe por outro artista ou use metadados enganosos para aproveitar a popularidade de terceiros;",
          "- seja duplicado, gerado em massa ou feito apenas para manipular algoritmos e buscas das DSPs;",
          "- descumpra as políticas de conteúdo de qualquer DSP.",
          "A Brazilian Funk pode recusar, suspender ou remover Conteúdo que viole estes Termos a qualquer momento, com ou sem aviso prévio.",
        ],
      },
      {
        title: "Streams artificiais e fraude",
        paragraphs: [
          "É proibido aumentar de forma artificial execuções, seguidores ou qualquer outra métrica das Obras, por meio de robôs, contas falsas, fazendas de reprodução, serviços que prometem números garantidos ou qualquer outro meio não orgânico, contratado por Você ou por terceiros em seu nome.",
          "Quando uma DSP ou a Brazilian Funk identificar atividade artificial, poderão ocorrer, isolada ou cumulativamente: retenção ou perda dos Royalties ligados a essa atividade; repasse ao Usuário das multas e taxas cobradas pelas DSPs; remoção das Obras afetadas ou de todo o catálogo; e suspensão ou encerramento da conta.",
          "Os valores devidos por esses motivos poderão ser descontados do seu saldo atual ou de Royalties futuros.",
        ],
      },
      {
        title: "Comissão de 15% e pagamentos",
        paragraphs: [
          "Pelos Serviços prestados, a Brazilian Funk retém uma Comissão de 15% (quinze por cento) sobre os Royalties efetivamente recebidos das DSPs e demais fontes pagadoras referentes às Obras do Usuário. Os 85% (oitenta e cinco por cento) restantes são repassados ao Usuário.",
          "Os Royalties só são creditados no saldo do Usuário depois de recebidos pela Brazilian Funk, conforme os prazos e relatórios de cada DSP. Ajustes, estornos ou correções feitos posteriormente pelas DSPs poderão ser lançados no saldo.",
          "Os repasses são feitos via Pix (Usuários no Brasil) ou via PayPal, Tipalti ou transferência internacional (Usuários fora do Brasil). Tarifas cobradas pelos próprios meios de pagamento são de responsabilidade do Usuário.",
          "O valor da Comissão e o cálculo do repasse ficam disponíveis no painel da Plataforma. Pagamentos enviados para dados incorretos informados pelo Usuário poderão não ser recuperados.",
        ],
      },
      {
        title: "Natureza dos valores e tributos",
        paragraphs: [
          "Os Royalties pertencem ao Usuário, titular dos direitos sobre as Obras. A Brazilian Funk os recebe das DSPs na qualidade de mandatária do Usuário, exclusivamente para apuração e repasse, sem que haja transferência de titularidade desses valores, exceto quanto à Comissão.",
          "Para todos os fins contratuais, contábeis e fiscais, a receita da Brazilian Funk corresponde apenas à Comissão de 15%. O valor restante é patrimônio do Usuário sob gestão da Brazilian Funk até o repasse.",
          "Cada Parte é responsável pelos tributos incidentes sobre a sua própria receita. A Brazilian Funk poderá solicitar documentos e dados fiscais (como CPF ou CNPJ) necessários ao cumprimento de suas obrigações legais e reter valores nos casos em que a lei exigir.",
          "A Brazilian Funk mantém registros que permitem identificar, por DSP, por Obra e por Usuário, os valores recebidos e a Comissão aplicada, e os disponibiliza no painel ou mediante solicitação.",
        ],
      },
      {
        title: "Retenção de valores e compensação",
        paragraphs: [
          "A Brazilian Funk poderá reter temporariamente o saldo, total ou parcialmente, quando houver suspeita fundamentada de fraude ou violação destes Termos, reclamação de terceiros sobre direitos das Obras, ou exigência de DSP ou autoridade, até a conclusão da análise.",
          "Comprovada a violação, os valores ligados ao Conteúdo irregular não serão devidos ao Usuário. Valores que o Usuário deva à Brazilian Funk poderão ser compensados com o saldo disponível.",
        ],
      },
      {
        title: "Reclamações de direitos e remoção",
        paragraphs: [
          "Quem acreditar que uma Obra distribuída pela Brazilian Funk viola seus direitos pode enviar uma notificação para contato@brazilianfunk.online, com identificação do reclamante, indicação da Obra, descrição do direito violado e documentos que comprovem a titularidade.",
          "A Brazilian Funk poderá remover ou suspender a Obra durante a análise e dará ao Usuário a oportunidade de apresentar sua defesa e documentos. Usuários com violações repetidas terão a conta encerrada.",
        ],
      },
      {
        title: "Serviços de terceiros",
        paragraphs: [
          "A distribuição está sujeita aos termos e políticas de cada DSP, que o Usuário também se compromete a cumprir.",
          "A Plataforma utiliza serviços de terceiros, como processadores de pagamento (PayPal, Tipalti e instituições do Pix), API do Spotify e EmailJS. Esses serviços têm termos próprios, e a Brazilian Funk não responde por falhas ou indisponibilidade deles.",
        ],
      },
      {
        title: "Propriedade intelectual da Plataforma",
        paragraphs: [
          "A marca, o logotipo, a identidade visual, os textos, o painel e o código da Plataforma pertencem à Brazilian Funk. É proibido copiar, modificar, extrair dados de forma automatizada, fazer engenharia reversa ou usar esses elementos sem autorização por escrito.",
        ],
      },
      {
        title: "Encerramento",
        paragraphs: [
          "Você pode encerrar sua conta a qualquer momento, por e-mail, com 1 (um) dia de antecedência. A Brazilian Funk também pode encerrar a relação com o mesmo aviso.",
          "Após o encerramento, a Brazilian Funk solicitará a retirada das Obras às DSPs, que têm até 30 (trinta) dias para concluí-la. A Brazilian Funk não responde pela exploração das Obras por terceiros após a retirada.",
          "A Brazilian Funk pode encerrar a conta imediatamente em caso de fraude, atividade ilegal, violação grave destes Termos ou conduta ameaçadora ou desrespeitosa com a equipe.",
          "O saldo existente será repassado após o recebimento dos últimos relatórios das DSPs e a verificação de pendências, descontados valores retidos ou devidos nos termos destas cláusulas. Reembolsos só ocorrerão se comprovada violação destes Termos pela Brazilian Funk.",
          "As cláusulas sobre tributos, garantias, indenização, limitação de responsabilidade, confidencialidade e foro continuam válidas após o encerramento.",
        ],
      },
      {
        title: "Indenização",
        paragraphs: [
          "Você se compromete a indenizar a Brazilian Funk por perdas, danos, multas e despesas, inclusive honorários advocatícios, decorrentes de violação destes Termos, de suas declarações e garantias, ou de reclamações de terceiros relacionadas ao Conteúdo enviado. Esses valores poderão ser descontados do seu saldo de Royalties.",
        ],
      },
      {
        title: "Limitação de responsabilidade",
        paragraphs: [
          "Os Serviços são prestados conforme disponíveis e podem sofrer interrupções ou erros. A Brazilian Funk não garante a exatidão absoluta dos dados exibidos no painel, que dependem de informações enviadas pelas DSPs.",
          "Na máxima extensão permitida pela lei, a Brazilian Funk não responde por danos indiretos, lucros cessantes ou perda de oportunidades, e sua responsabilidade total perante o Usuário fica limitada ao valor das Comissões recebidas desse Usuário nos 12 (doze) meses anteriores ao fato.",
        ],
      },
      {
        title: "Confidencialidade e comunicações",
        paragraphs: [
          "As Partes manterão em sigilo as informações não públicas trocadas em razão destes Termos, inclusive condições comerciais, por até 2 (dois) anos após o encerramento da relação.",
          "As comunicações oficiais serão enviadas ao e-mail cadastrado pelo Usuário, que deve mantê-lo atualizado.",
        ],
      },
      {
        title: "Alterações destes Termos",
        paragraphs: [
          "A Brazilian Funk poderá atualizar estes Termos. Alterações relevantes serão comunicadas por e-mail ou pela Plataforma com antecedência razoável. Se não concordar, Você poderá encerrar a conta antes que entrem em vigor. O uso dos Serviços após esse prazo significa concordância com a nova versão.",
        ],
      },
      {
        title: "Lei aplicável e foro",
        paragraphs: [
          "Estes Termos são regidos pelas leis brasileiras. As Partes buscarão resolver divergências de forma amigável antes de qualquer medida judicial. Fica eleito o foro da comarca de Manaus, Amazonas, com renúncia a qualquer outro, por mais privilegiado que seja.",
          "A eventual invalidade de uma cláusula não afeta as demais. Estes Termos e a Política de Privacidade formam o acordo integral entre as Partes sobre os Serviços. Em caso de divergência entre traduções, prevalece a versão em português.",
        ],
      },
      {
        title: "Contato",
        paragraphs: ["Dúvidas sobre estes Termos: contato@brazilianfunk.online"],
      },
    ],
  },

  en: {
    summary: [
      "You keep ownership of your music. Brazilian Funk only receives a license to distribute and promote it while your account is active.",
      "For the service provided, Brazilian Funk keeps a 15% Commission on the royalties received from the platforms. The other 85% is paid to you.",
      "Artificial streams, copied content or false metadata lead to withheld earnings, release takedowns and account termination.",
      "You can close your account at any time. Platforms have up to 30 days to take your music down.",
    ],
    sections: [
      {
        title: "Who we are and acceptance of these Terms",
        paragraphs: [
          "These Terms of Use (“Terms”) govern the relationship between Brazilian Funk, a digital music distributor (“Brazilian Funk”, “we”), and the individual or company that uses its services (“You” or “User”), together the “Parties”.",
          "By completing the Access Request, creating an account or using the Platform, You confirm that You have read, understood and accept these Terms and the Privacy Policy, which is part of them. If You do not agree, do not use the Services.",
          "To use the Services You must be at least 18 years old and legally capable. Anyone acting on behalf of a label, imprint or artist, such as managers and representatives, represents that they have authority to bind them to these Terms.",
        ],
      },
      {
        title: "Definitions",
        paragraphs: [
          "- Platform: the Brazilian Funk website and dashboard where the User submits releases, follows data and receives payments.",
          "- Services: digital distribution of the Works to DSPs and the other tools available on the Platform, such as performance data, royalty splits and payouts.",
          "- Works: sound recordings, compositions and videos submitted by the User for distribution.",
          "- Content: the Works and all related material, such as artwork, photos, names, titles, lyrics, credits and metadata.",
          "- DSPs: digital music stores and services, such as Spotify, Apple Music, YouTube Music, TikTok, Deezer, Amazon Music and others.",
          "- Royalties: amounts paid by DSPs and other sources for the exploitation of the User's Works.",
          "- Commission: Brazilian Funk's fee for the Services, described in the Commission and payments clause.",
        ],
      },
      {
        title: "Access request and account",
        paragraphs: [
          "Access to the Platform depends on approval of the Access Request. Brazilian Funk may approve or decline requests according to its profile and catalog review criteria, with no obligation to explain the decision.",
          "You agree to provide true, complete and up-to-date information, including contact and payment details, and to keep it accurate while using the Services.",
          "The account is personal. You are responsible for keeping your credentials confidential and for all activity on your account, and must notify us immediately of any unauthorized access.",
        ],
      },
      {
        title: "The Services",
        paragraphs: [
          "Brazilian Funk delivers the Works to the selected DSPs, provides performance data in the dashboard and pays Royalties to the User, according to the features available for each account.",
          "With Royalty Splits, the User sets the percentage for each collaborator on the track. The split is done automatically by the Platform, and each collaborator is notified by email once it is complete. The User is responsible for the percentages entered and for having the collaborators' agreement.",
          "Acceptance, release date, placement and continued availability of the Works on each DSP depend solely on each DSP's rules and decisions. Brazilian Funk does not guarantee playlist placement, number of streams, revenue or any other result.",
          "Delivery times may vary by DSP. Delivery only starts once all required Content has been received in the required technical format.",
        ],
      },
      {
        title: "Distribution license",
        paragraphs: [
          "You remain the owner of all copyrights and related rights in the Works. No rights are assigned to Brazilian Funk.",
          "While your account is active, You grant Brazilian Funk a non-exclusive, worldwide license, sublicensable to DSPs, to reproduce, distribute, make available, publicly perform and communicate the Works to the public, by any means and in any format, solely to provide the Services.",
          "The license includes use of your artist name, image and other Content elements linked to the Works, to the extent necessary for distribution, and is granted under Brazilian Copyright Law (Law No. 9,610/1998). You agree to provide any additional documentation required.",
          "The license ends when the Works are removed or the account is closed, subject to the technical time needed for removal from DSPs and to copies already lawfully obtained by third parties.",
        ],
      },
      {
        title: "Promotional use",
        paragraphs: [
          "You authorize Brazilian Funk, free of charge and on a non-exclusive basis, to use artwork, photos, videos, artist name, titles and excerpts of the Works to promote your releases and Brazilian Funk's Services on its website, social media, ads, presentations, portfolio and other channels.",
          "This authorization does not transfer ownership of any right and does not allow use of the Content for purposes unrelated to distribution, promotion or operation of the Services, unless You authorize it separately.",
          "After the account is closed, Brazilian Funk may keep promotional materials already published and copies needed for historical records and legal obligations.",
        ],
      },
      {
        title: "Your representations and warranties",
        paragraphs: [
          "By submitting Content, You represent and warrant that:",
          "- You own or have all necessary permissions for the Works and Content, including from co-authors, performers, producers and owners of third-party samples, beats and excerpts;",
          "- You have obtained the licenses required for cover versions in the territories where they are needed;",
          "- the metadata (artist names, titles, credits, genre, language and lyrics) is accurate and does not mislead the public;",
          "- the Content does not imitate another artist's voice, name or image without permission, including when produced with artificial intelligence tools;",
          "- if a Work was created fully or partly with artificial intelligence, You hold the necessary rights to it and will disclose this when asked;",
          "- the Content contains no viruses or code that could harm third-party systems.",
        ],
      },
      {
        title: "Prohibited content",
        paragraphs: [
          "You may not submit Content that:",
          "- infringes copyrights, trademarks, image rights or other third-party rights;",
          "- contains hate speech, incitement to violence or sexual exploitation of minors;",
          "- impersonates another artist or uses misleading metadata to take advantage of someone else's popularity;",
          "- is duplicated, mass-generated or made only to manipulate DSP algorithms and search;",
          "- breaches the content policies of any DSP.",
          "Brazilian Funk may decline, suspend or remove Content that violates these Terms at any time, with or without prior notice.",
        ],
      },
      {
        title: "Artificial streams and fraud",
        paragraphs: [
          "It is forbidden to artificially increase streams, followers or any other metric of the Works through bots, fake accounts, stream farms, services that promise guaranteed numbers or any other non-organic means, whether hired by You or by third parties on your behalf.",
          "When a DSP or Brazilian Funk detects artificial activity, any of the following may apply: withholding or loss of the Royalties linked to that activity; passing on to the User the fines and fees charged by DSPs; removal of the affected Works or the whole catalog; and suspension or termination of the account.",
          "Amounts owed for these reasons may be deducted from your current balance or future Royalties.",
        ],
      },
      {
        title: "15% Commission and payments",
        paragraphs: [
          "For the Services provided, Brazilian Funk keeps a Commission of 15% (fifteen percent) of the Royalties actually received from DSPs and other payers for the User's Works. The remaining 85% (eighty-five percent) is paid to the User.",
          "Royalties are credited to the User's balance only after Brazilian Funk receives them, according to each DSP's schedule and reports. Later adjustments, reversals or corrections made by DSPs may be reflected in the balance.",
          "Payouts are made via Pix (Users in Brazil) or via PayPal, Tipalti or international transfer (Users outside Brazil). Fees charged by the payment providers themselves are borne by the User.",
          "The Commission amount and payout calculation are available in the Platform dashboard. Payments sent to incorrect details provided by the User may not be recoverable.",
        ],
      },
      {
        title: "Nature of the amounts and taxes",
        paragraphs: [
          "Royalties belong to the User, who owns the rights in the Works. Brazilian Funk receives them from DSPs as the User's agent, solely to calculate and pay them out, with no transfer of ownership of those amounts except for the Commission.",
          "For all contractual, accounting and tax purposes, Brazilian Funk's revenue is only the 15% Commission. The remaining amount belongs to the User and is held by Brazilian Funk until paid out.",
          "Each Party is responsible for the taxes on its own revenue. Brazilian Funk may request tax documents and details (such as Brazilian CPF or CNPJ numbers) needed to meet its legal obligations and may withhold amounts where the law requires.",
          "Brazilian Funk keeps records identifying, by DSP, Work and User, the amounts received and the Commission applied, and makes them available in the dashboard or on request.",
        ],
      },
      {
        title: "Withholding and set-off",
        paragraphs: [
          "Brazilian Funk may temporarily withhold all or part of the balance in case of a well-founded suspicion of fraud or breach of these Terms, third-party claims over rights in the Works, or a requirement from a DSP or authority, until the review is complete.",
          "Once a breach is confirmed, amounts linked to the non-compliant Content will not be owed to the User. Amounts the User owes Brazilian Funk may be set off against the available balance.",
        ],
      },
      {
        title: "Rights claims and takedowns",
        paragraphs: [
          "Anyone who believes a Work distributed by Brazilian Funk infringes their rights may send a notice to contato@brazilianfunk.online, including the claimant's identification, the Work concerned, a description of the right infringed and documents proving ownership.",
          "Brazilian Funk may remove or suspend the Work during the review and will give the User the opportunity to respond and provide documents. Users with repeated violations will have their accounts closed.",
        ],
      },
      {
        title: "Third-party services",
        paragraphs: [
          "Distribution is subject to the terms and policies of each DSP, which the User also agrees to follow.",
          "The Platform uses third-party services such as payment processors (PayPal, Tipalti and Pix institutions), the Spotify API and EmailJS. These services have their own terms, and Brazilian Funk is not liable for their failures or unavailability.",
        ],
      },
      {
        title: "Platform intellectual property",
        paragraphs: [
          "The Platform's brand, logo, visual identity, texts, dashboard and code belong to Brazilian Funk. Copying, modifying, scraping, reverse engineering or using these elements without written permission is prohibited.",
        ],
      },
      {
        title: "Termination",
        paragraphs: [
          "You may close your account at any time by email, with 1 (one) day's notice. Brazilian Funk may also end the relationship with the same notice.",
          "After termination, Brazilian Funk will ask DSPs to remove the Works, and they have up to 30 (thirty) days to do so. Brazilian Funk is not liable for exploitation of the Works by third parties after removal.",
          "Brazilian Funk may close the account immediately in case of fraud, illegal activity, serious breach of these Terms or threatening or disrespectful conduct toward the team.",
          "Any remaining balance will be paid after the last DSP reports are received and pending issues are checked, minus amounts withheld or owed under these clauses. Refunds will only be made if a breach of these Terms by Brazilian Funk is proven.",
          "The clauses on taxes, warranties, indemnification, limitation of liability, confidentiality and jurisdiction survive termination.",
        ],
      },
      {
        title: "Indemnification",
        paragraphs: [
          "You agree to indemnify Brazilian Funk for losses, damages, fines and expenses, including legal fees, arising from a breach of these Terms or of your representations and warranties, or from third-party claims related to the Content You submitted. These amounts may be deducted from your Royalty balance.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "The Services are provided as available and may be subject to interruptions or errors. Brazilian Funk does not guarantee the absolute accuracy of dashboard data, which depends on information sent by DSPs.",
          "To the fullest extent permitted by law, Brazilian Funk is not liable for indirect damages, lost profits or lost opportunities, and its total liability to the User is limited to the Commissions received from that User in the 12 (twelve) months before the event.",
        ],
      },
      {
        title: "Confidentiality and notices",
        paragraphs: [
          "The Parties will keep confidential any non-public information exchanged under these Terms, including commercial conditions, for up to 2 (two) years after the relationship ends.",
          "Official notices will be sent to the email address registered by the User, who must keep it up to date.",
        ],
      },
      {
        title: "Changes to these Terms",
        paragraphs: [
          "Brazilian Funk may update these Terms. Material changes will be announced by email or on the Platform with reasonable notice. If You do not agree, You may close your account before they take effect. Using the Services after that period means You accept the new version.",
        ],
      },
      {
        title: "Governing law and jurisdiction",
        paragraphs: [
          "These Terms are governed by the laws of Brazil. The Parties will try to resolve disputes amicably before taking legal action. The courts of Manaus, Amazonas, Brazil, are chosen to settle any dispute, waiving any other, however privileged.",
          "If any clause is held invalid, the others remain in effect. These Terms and the Privacy Policy are the entire agreement between the Parties about the Services. In case of conflict between translations, the Portuguese version prevails.",
        ],
      },
      {
        title: "Contact",
        paragraphs: ["Questions about these Terms: contato@brazilianfunk.online"],
      },
    ],
  },

  es: {
    summary: [
      "Sigues siendo dueño de tu música. Brazilian Funk solo recibe una licencia para distribuirla y promocionarla mientras tu cuenta esté activa.",
      "Por el servicio prestado, Brazilian Funk retiene una Comisión del 15% sobre las regalías recibidas de las plataformas. El otro 85% se te transfiere.",
      "Las reproducciones artificiales, el contenido copiado o los metadatos falsos llevan a retención de valores, retiro de lanzamientos y cierre de la cuenta.",
      "Puedes cerrar tu cuenta cuando quieras. Las plataformas tienen hasta 30 días para retirar tu música.",
    ],
    sections: [
      {
        title: "Quiénes somos y aceptación de estos Términos",
        paragraphs: [
          "Estos Términos de Uso (“Términos”) regulan la relación entre Brazilian Funk, distribuidora de música digital (“Brazilian Funk”, “nosotros”), y la persona física o jurídica que utiliza sus servicios (“Tú” o “Usuario”), en conjunto las “Partes”.",
          "Al completar la Solicitud de Acceso, crear una cuenta o usar la Plataforma, declaras que leíste, entendiste y aceptas estos Términos y la Política de Privacidad, que forma parte de ellos. Si no estás de acuerdo, no utilices los Servicios.",
          "Para usar los Servicios debes tener al menos 18 años y plena capacidad legal. Quien actúa en nombre de una disquera, sello o artista, como mánagers y representantes, declara tener facultades para obligarlos con estos Términos.",
        ],
      },
      {
        title: "Definiciones",
        paragraphs: [
          "- Plataforma: el sitio de Brazilian Funk y el panel (dashboard) donde el Usuario envía lanzamientos, sigue sus datos y recibe pagos.",
          "- Servicios: la distribución digital de las Obras a las DSPs y las demás herramientas de la Plataforma, como datos de rendimiento, división de regalías y pagos.",
          "- Obras: fonogramas, composiciones y videos enviados por el Usuario para su distribución.",
          "- Contenido: las Obras y todo el material relacionado, como portadas, fotos, nombres, títulos, letras, créditos y metadatos.",
          "- DSPs: tiendas y servicios de música digital, como Spotify, Apple Music, YouTube Music, TikTok, Deezer, Amazon Music y otros.",
          "- Regalías: valores pagados por las DSPs y otras fuentes por la explotación de las Obras del Usuario.",
          "- Comisión: la remuneración de Brazilian Funk por los Servicios, descrita en la cláusula de Comisión y pagos.",
        ],
      },
      {
        title: "Solicitud de acceso y cuenta",
        paragraphs: [
          "El acceso a la Plataforma depende de la aprobación de la Solicitud de Acceso. Brazilian Funk puede aprobar o rechazar solicitudes según sus criterios de análisis de perfil y catálogo, sin obligación de justificar la decisión.",
          "Te comprometes a proporcionar información verdadera, completa y actualizada, incluidos datos de contacto y de pago, y a mantenerla correcta mientras uses los Servicios.",
          "La cuenta es personal. Eres responsable de mantener tus credenciales en secreto y de toda actividad realizada en ella, y debes avisarnos de inmediato si hay un acceso no autorizado.",
        ],
      },
      {
        title: "Los Servicios",
        paragraphs: [
          "Brazilian Funk entrega las Obras a las DSPs elegidas, muestra datos de rendimiento en el panel y transfiere las Regalías al Usuario, según las funciones disponibles para cada cuenta.",
          "En la División de Regalías, el Usuario define el porcentaje de cada colaborador de la canción. La división se realiza automáticamente en la Plataforma y cada colaborador recibe un aviso por correo cuando se completa. El Usuario es responsable de los porcentajes informados y de contar con el acuerdo de los colaboradores.",
          "La aceptación, la fecha de publicación, la visibilidad y la permanencia de las Obras en cada DSP dependen exclusivamente de las reglas y decisiones de cada DSP. Brazilian Funk no garantiza inclusión en playlists, número de reproducciones, ingresos ni ningún otro resultado.",
          "Los plazos de entrega pueden variar según cada DSP. El envío solo comienza tras recibir todo el Contenido necesario con los requisitos técnicos exigidos.",
        ],
      },
      {
        title: "Licencia de distribución",
        paragraphs: [
          "Sigues siendo titular de todos los derechos de autor y conexos sobre las Obras. No hay cesión de derechos a Brazilian Funk.",
          "Mientras tu cuenta esté activa, otorgas a Brazilian Funk una licencia no exclusiva, mundial y sublicenciable a las DSPs para reproducir, distribuir, poner a disposición, ejecutar públicamente y comunicar las Obras al público, por cualquier medio y formato, exclusivamente para prestar los Servicios.",
          "La licencia incluye el uso de tu nombre artístico, imagen y demás elementos del Contenido vinculados a las Obras, en la medida necesaria para la distribución, y se otorga conforme a la Ley brasileña de Derechos de Autor (Ley nº 9.610/1998). Te comprometes a proporcionar la documentación adicional que se requiera.",
          "La licencia termina con el retiro de las Obras o el cierre de la cuenta, salvo el plazo técnico para el retiro en las DSPs y las copias ya obtenidas legítimamente por terceros.",
        ],
      },
      {
        title: "Uso promocional",
        paragraphs: [
          "Autorizas a Brazilian Funk, de forma gratuita y no exclusiva, a usar portadas, fotos, videos, nombre artístico, títulos y fragmentos de las Obras para promocionar tus lanzamientos y los Servicios de Brazilian Funk en su sitio, redes sociales, anuncios, presentaciones, portafolio y demás canales.",
          "Esta autorización no transfiere la titularidad de ningún derecho y no permite usar el Contenido para fines ajenos a la distribución, la promoción o la operación de los Servicios, salvo nueva autorización tuya.",
          "Tras el cierre de la cuenta, Brazilian Funk podrá conservar materiales promocionales ya publicados y las copias necesarias para su registro histórico y obligaciones legales.",
        ],
      },
      {
        title: "Tus declaraciones y garantías",
        paragraphs: [
          "Al enviar Contenido, declaras y garantizas que:",
          "- eres titular o tienes todas las autorizaciones necesarias sobre las Obras y el Contenido, incluidas las de coautores, intérpretes, productores y titulares de samples, beats y fragmentos de terceros;",
          "- obtuviste las licencias exigidas para versiones cover en los territorios donde sean necesarias;",
          "- los metadatos (nombres de artistas, títulos, créditos, género, idioma y letras) son correctos y no inducen a error al público;",
          "- el Contenido no imita la voz, el nombre o la imagen de otro artista sin autorización, incluso cuando se produce con herramientas de inteligencia artificial;",
          "- si la Obra fue creada total o parcialmente con inteligencia artificial, tienes los derechos necesarios sobre ella y lo informarás cuando se te solicite;",
          "- el Contenido no contiene virus ni códigos que puedan dañar sistemas de terceros.",
        ],
      },
      {
        title: "Contenido prohibido",
        paragraphs: [
          "No está permitido enviar Contenido que:",
          "- infrinja derechos de autor, marcas, imagen u otros derechos de terceros;",
          "- contenga discurso de odio, incitación a la violencia o explotación sexual de menores;",
          "- suplante a otro artista o use metadatos engañosos para aprovechar la popularidad de terceros;",
          "- sea duplicado, generado en masa o hecho solo para manipular algoritmos y búsquedas de las DSPs;",
          "- incumpla las políticas de contenido de cualquier DSP.",
          "Brazilian Funk puede rechazar, suspender o retirar Contenido que viole estos Términos en cualquier momento, con o sin aviso previo.",
        ],
      },
      {
        title: "Reproducciones artificiales y fraude",
        paragraphs: [
          "Está prohibido aumentar de forma artificial reproducciones, seguidores u otras métricas de las Obras mediante bots, cuentas falsas, granjas de reproducción, servicios que prometen números garantizados o cualquier otro medio no orgánico, contratado por ti o por terceros en tu nombre.",
          "Cuando una DSP o Brazilian Funk detecte actividad artificial, podrán aplicarse, de forma aislada o conjunta: retención o pérdida de las Regalías vinculadas a esa actividad; traslado al Usuario de las multas y tasas cobradas por las DSPs; retiro de las Obras afectadas o de todo el catálogo; y suspensión o cierre de la cuenta.",
          "Los valores adeudados por estos motivos podrán descontarse de tu saldo actual o de Regalías futuras.",
        ],
      },
      {
        title: "Comisión del 15% y pagos",
        paragraphs: [
          "Por los Servicios prestados, Brazilian Funk retiene una Comisión del 15% (quince por ciento) sobre las Regalías efectivamente recibidas de las DSPs y demás fuentes pagadoras por las Obras del Usuario. El 85% (ochenta y cinco por ciento) restante se transfiere al Usuario.",
          "Las Regalías solo se acreditan en el saldo del Usuario después de que Brazilian Funk las recibe, según los plazos e informes de cada DSP. Los ajustes, reversiones o correcciones posteriores de las DSPs podrán reflejarse en el saldo.",
          "Los pagos se realizan por Pix (Usuarios en Brasil) o por PayPal, Tipalti o transferencia internacional (Usuarios fuera de Brasil). Las tarifas cobradas por los propios medios de pago corren por cuenta del Usuario.",
          "El valor de la Comisión y el cálculo del pago están disponibles en el panel de la Plataforma. Los pagos enviados a datos incorrectos informados por el Usuario podrían no recuperarse.",
        ],
      },
      {
        title: "Naturaleza de los valores e impuestos",
        paragraphs: [
          "Las Regalías pertenecen al Usuario, titular de los derechos sobre las Obras. Brazilian Funk las recibe de las DSPs como mandataria del Usuario, exclusivamente para calcularlas y transferirlas, sin que haya transferencia de titularidad de esos valores, salvo en cuanto a la Comisión.",
          "Para todos los efectos contractuales, contables y fiscales, el ingreso de Brazilian Funk corresponde solo a la Comisión del 15%. El valor restante pertenece al Usuario y queda bajo gestión de Brazilian Funk hasta su transferencia.",
          "Cada Parte es responsable de los impuestos sobre sus propios ingresos. Brazilian Funk podrá solicitar documentos y datos fiscales necesarios para cumplir sus obligaciones legales y retener valores cuando la ley lo exija.",
          "Brazilian Funk mantiene registros que permiten identificar, por DSP, por Obra y por Usuario, los valores recibidos y la Comisión aplicada, y los pone a disposición en el panel o a pedido.",
        ],
      },
      {
        title: "Retención de valores y compensación",
        paragraphs: [
          "Brazilian Funk podrá retener temporalmente todo o parte del saldo ante una sospecha fundada de fraude o incumplimiento de estos Términos, reclamos de terceros sobre derechos de las Obras, o exigencia de una DSP o autoridad, hasta concluir el análisis.",
          "Confirmado el incumplimiento, los valores vinculados al Contenido irregular no se deberán al Usuario. Los valores que el Usuario adeude a Brazilian Funk podrán compensarse con el saldo disponible.",
        ],
      },
      {
        title: "Reclamos de derechos y retiro",
        paragraphs: [
          "Quien considere que una Obra distribuida por Brazilian Funk infringe sus derechos puede enviar una notificación a contato@brazilianfunk.online, con su identificación, la Obra en cuestión, la descripción del derecho infringido y documentos que acrediten la titularidad.",
          "Brazilian Funk podrá retirar o suspender la Obra durante el análisis y dará al Usuario la oportunidad de presentar su defensa y documentos. Los Usuarios con infracciones reiteradas tendrán su cuenta cerrada.",
        ],
      },
      {
        title: "Servicios de terceros",
        paragraphs: [
          "La distribución está sujeta a los términos y políticas de cada DSP, que el Usuario también se compromete a cumplir.",
          "La Plataforma utiliza servicios de terceros, como procesadores de pago (PayPal, Tipalti e instituciones de Pix), la API de Spotify y EmailJS. Estos servicios tienen sus propios términos y Brazilian Funk no responde por sus fallas o indisponibilidad.",
        ],
      },
      {
        title: "Propiedad intelectual de la Plataforma",
        paragraphs: [
          "La marca, el logotipo, la identidad visual, los textos, el panel y el código de la Plataforma pertenecen a Brazilian Funk. Está prohibido copiarlos, modificarlos, extraer datos de forma automatizada, hacer ingeniería inversa o usarlos sin autorización por escrito.",
        ],
      },
      {
        title: "Cierre de la cuenta",
        paragraphs: [
          "Puedes cerrar tu cuenta en cualquier momento por correo, con 1 (un) día de antelación. Brazilian Funk también puede terminar la relación con el mismo aviso.",
          "Tras el cierre, Brazilian Funk solicitará a las DSPs el retiro de las Obras, que tienen hasta 30 (treinta) días para completarlo. Brazilian Funk no responde por la explotación de las Obras por terceros después del retiro.",
          "Brazilian Funk puede cerrar la cuenta de inmediato en caso de fraude, actividad ilegal, incumplimiento grave de estos Términos o conducta amenazante o irrespetuosa con el equipo.",
          "El saldo existente se transferirá tras recibir los últimos informes de las DSPs y verificar pendientes, descontando los valores retenidos o adeudados según estas cláusulas. Solo habrá reembolsos si se comprueba un incumplimiento de estos Términos por parte de Brazilian Funk.",
          "Las cláusulas sobre impuestos, garantías, indemnización, limitación de responsabilidad, confidencialidad y jurisdicción siguen vigentes tras el cierre.",
        ],
      },
      {
        title: "Indemnización",
        paragraphs: [
          "Te comprometes a indemnizar a Brazilian Funk por pérdidas, daños, multas y gastos, incluidos honorarios de abogados, derivados del incumplimiento de estos Términos o de tus declaraciones y garantías, o de reclamos de terceros relacionados con el Contenido enviado. Estos valores podrán descontarse de tu saldo de Regalías.",
        ],
      },
      {
        title: "Limitación de responsabilidad",
        paragraphs: [
          "Los Servicios se prestan según su disponibilidad y pueden sufrir interrupciones o errores. Brazilian Funk no garantiza la exactitud absoluta de los datos del panel, que dependen de la información enviada por las DSPs.",
          "En la máxima medida permitida por la ley, Brazilian Funk no responde por daños indirectos, lucro cesante ni pérdida de oportunidades, y su responsabilidad total ante el Usuario se limita al valor de las Comisiones recibidas de ese Usuario en los 12 (doce) meses anteriores al hecho.",
        ],
      },
      {
        title: "Confidencialidad y comunicaciones",
        paragraphs: [
          "Las Partes mantendrán en secreto la información no pública intercambiada en virtud de estos Términos, incluidas las condiciones comerciales, hasta 2 (dos) años después de terminada la relación.",
          "Las comunicaciones oficiales se enviarán al correo registrado por el Usuario, que debe mantenerlo actualizado.",
        ],
      },
      {
        title: "Cambios en estos Términos",
        paragraphs: [
          "Brazilian Funk podrá actualizar estos Términos. Los cambios relevantes se comunicarán por correo o en la Plataforma con antelación razonable. Si no estás de acuerdo, podrás cerrar tu cuenta antes de que entren en vigor. Usar los Servicios después de ese plazo implica aceptar la nueva versión.",
        ],
      },
      {
        title: "Ley aplicable y jurisdicción",
        paragraphs: [
          "Estos Términos se rigen por las leyes de Brasil. Las Partes intentarán resolver sus diferencias de forma amistosa antes de cualquier acción judicial. Se elige el foro de la ciudad de Manaus, Amazonas, Brasil, con renuncia a cualquier otro, por más privilegiado que sea.",
          "La eventual invalidez de una cláusula no afecta a las demás. Estos Términos y la Política de Privacidad forman el acuerdo íntegro entre las Partes sobre los Servicios. En caso de conflicto entre traducciones, prevalece la versión en portugués.",
        ],
      },
      {
        title: "Contacto",
        paragraphs: ["Dudas sobre estos Términos: contato@brazilianfunk.online"],
      },
    ],
  },
}
