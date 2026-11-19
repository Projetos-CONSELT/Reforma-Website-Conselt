import { CaseItem, ServiceCategory, SegmentCategory, ChallengeTypeCategory } from "@/types/case";

export const SERVICE_OPTIONS: (ServiceCategory | "Todos")[] = [
  "Todos",
  "Website",
  "Software",
  "Aplicativo",
  "Projeto Elétrico",
  "Luminotécnico",
  "Automação",
];

export const SEGMENT_OPTIONS: (SegmentCategory | "Todos")[] = [
  "Todos",
  "Engenharia Ambiental",
  "Pesquisa & Laboratórios",
  "Construção Civil",
  "Educação",
  "Indústria & Energia",
  "Comércio & Serviços",
];

export const CHALLENGE_OPTIONS: (ChallengeTypeCategory | "Todos")[] = [
  "Todos",
  "Presença Digital",
  "Comunicação Técnica",
  "Eficiência Energética",
  "Automação de Processos",
  "Software & Gestão",
  "Aplicativos Mobile",
];

export const CASES_DATA: CaseItem[] = [
  {
    id: "constru-website",
    client: "CONSTRU",
    service: "Website",
    segment: "Construção Civil",
    challengeType: "Presença Digital",
    image: "/cases/constru.png",
    isPlaceholder: false,
    badgeTag: "Engenharia & Arquitetura",
    cardData: {
      desafio: "Conectar o aprendizado técnico de engenharia civil e arquitetura às demandas de mercado da região.",
      solucao: "Website institucional moderno com portfólio interativo de projetos, calculadora preliminar de escopo e formulário inteligente de orçamentos.",
      resultado: "+65% em solicitações de orçamentos online e redução de 40% no tempo de primeiro contato comercial.",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Constru Soluções em Engenharia é a empresa júnior de Engenharia Civil e Arquitetura da UFU. Desenvolve projetos arquitetônicos, estruturais e laudos técnicos com alta qualidade e custo acessível para empreendedores e proprietários da região de Uberlândia.",
        detalhes: [
          "Segmento: Engenharia Civil, Arquitetura e Laudos Técnicos",
          "Público: Empreendedores, proprietários de imóveis e construtoras regionais",
          "Momento: Expansão de atuação comercial com necessidade de autoridade digital",
          "Restrições: Apresentar soluções técnicas complexas com clareza e transparência",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "A ausência de um canal digital estruturado dificultava a demonstração do portfólio de projetos já entregues e tornava o processo de solicitação de propostas moroso e pouco intuitivo.",
        detalhes: [
          "Gargalo comercial: Contatos dispersos via redes sociais sem qualificação prévia",
          "Percepção de valor: Obras e projetos de alto padrão sem um repositório visual atraente",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Construir uma presença digital corporativa que demonstrasse o rigor técnico acadêmico da UFU com a agilidade e competitividade exigidas pelo mercado imobiliário e comercial.",
        detalhes: [
          "Aumentar a taxa de conversão de visitantes em propostas comerciais enviadas",
          "Destacar a abrangência de serviços em Engenharia Civil e Arquitetura",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Identificamos que clientes em potencial precisavam de segurança imediata sobre a qualidade técnica e de um fluxo sem atrito para solicitar estimativas de projeto.",
        detalhes: [
          "Necessidade de filtros por categoria (Residencial, Comercial, Laudos e Regularizações)",
          "Formulários otimizados para pré-coleta de metragem, localização e urgência da obra",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "Arquitetura digital completa com design responsivo alinhado à identidade técnica da Constru. Implementamos catálogo modular de projetos, galeria interativa e sistema otimizado de captação de leads qualificados.",
        detalhes: [
          "Design de Interface (UI/UX) sofisticado e limpo com carregamento ultrarrápido",
          "Galeria de projetos técnicos com descritivos de soluções estruturais e plantas",
          "Integração direta com o canal de atendimento e WhatsApp da diretoria de projetos",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Metodologia ágil em 3 etapas com prototipagem em alta fidelidade no Figma, aprovação técnica com os diretores da Constru e desenvolvimento em código moderno otimizado para SEO.",
        detalhes: [
          "Fase 1: Alinhamento de personas (proprietários de lotes, reformas comerciais e síndicos)",
          "Fase 2: Prototipagem da jornada de contratação e apresentação visual de projetos",
          "Fase 3: Desenvolvimento Frontend responsivo e testes em múltiplos dispositivos",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "A Constru consolidou sua marca como referência em projetos de engenharia civil em Minas Gerais, registrando aumento substancial em orçamentos fechados logo nos primeiros meses pós-lançamento.",
        detalhes: [
          "+65% de aumento no volume de solicitações de propostas pelo website",
          "Redução de 40% no tempo de qualificação de leads pela equipe comercial",
          "Mais de 30 projetos técnicos catalogados com navegação fluida em celulares e computadores",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer transformar a presença digital da sua empresa de Engenharia ou Arquitetura em uma máquina de novos clientes?",
        ctaText: "Solicitar Orçamento de Website",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case da Constru e gostaria de um orçamento para criação de Website.",
      },
    },
  },
  {
    id: "consenso-website",
    client: "CONSENSO JR",
    service: "Website",
    segment: "Comércio & Serviços",
    challengeType: "Presença Digital",
    image: "/cases/consenso.png",
    isPlaceholder: false,
    badgeTag: "Consultoria Jurídica",
    cardData: {
      desafio: "Tornar a consultoria jurídica acessível e aproximar o Direito Preventivo de micro e pequenos empreendedores.",
      solucao: "Portal corporativo focado em Direito Preventivo, com catálogo explicativo de serviços (Contratos, Marcas e Estatutos) e agendamento de diagnóstico online.",
      resultado: "+80% em agendamentos de reuniões de diagnóstico e consolidação como referência em consultoria jurídica preventiva em MG.",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Consenso Jr. é a empresa júnior de Direito da UFV, pioneira em Minas Gerais e especializada em Direito Preventivo. Oferece assessoria jurídica acessível para startups e PMEs nas áreas de elaboração de contratos, registro de marcas e reestruturação estatutária.",
        detalhes: [
          "Segmento: Consultoria Jurídica e Direito Preventivo",
          "Público: Empreendedores, startups, microempresas e cooperativas",
          "Momento: Expansão de autoridade para novos polos de negócios em Minas Gerais",
          "Restrições: Traduzir conceitos jurídicos complexos para uma linguagem acessível e acolhedora",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "A barreira cultural de que consultoria jurídica é algo burocrático e restrito a grandes corporações afastava empreendedores em estágio inicial.",
        detalhes: [
          "Problema: Falta de canal didático para explicar riscos de marcas não registradas ou contratos informais",
          "Impacto: Clientes potenciais adiavam a contratação por desconhecer a acessibilidade dos serviços",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Construir um portal institucional que transmitisse máxima solidez jurídica com tom de voz próximo, transparente e orientado a resultados de negócios.",
        detalhes: [
          "Facilitar a marcação de sessões gratuitas de diagnóstico jurídico inicial",
          "Posicionar a Consenso Jr. como parceira estratégica contínua de novos negócios",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "O visitante precisava entender rapidamente qual solução jurídica atendia seu momento empresarial (abertura, proteção de marca ou segurança de sócios).",
        detalhes: [
          "Segmentação visual por soluções: Registro de Marcas, Contratos Comerciais, Acordos de Sócios",
          "Call-to-actions claros e sem juridiquês convidando para conversa diagnóstica",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "Desenvolvimento de portal institucional corporativo com design sóbrio e elegante. Criamos áreas dedicadas a cada ramo de atuação, central de perguntas frequentes e formulário de triagem jurídica ágil.",
        detalhes: [
          "Design limpo enfatizando segurança, ética e compliance",
          "Área de serviços com descritivos claros de benefícios para empreendedores",
          "Integração com WhatsApp e agendador de reuniões com consultores",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Arquitetura de informação orientada a clareza, design centrado na confiança do usuário e implementação frontend leve e rápida.",
        detalhes: [
          "Fase 1: Mapeamento de dores jurídicas frequentes de fundadores de empresas",
          "Fase 2: Validação visual e de copy institucional com a diretoria jurídica",
          "Fase 3: Implementação responsiva e otimização de tempo de carregamento",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "A Consenso Jr. alcançou novo patamar de captação digital, ampliando expressivamente sua cartela de contratos preventivos e consolidando sua liderança no ecossistema mineiro.",
        detalhes: [
          "+80% de aumento em agendamentos de reuniões de diagnóstico pelo site",
          "Forte presença institucional em buscas no Google por direito preventivo em MG",
          "Ciclo de atendimento simplificado, reduzindo dúvidas repetitivas no primeiro contato",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Precisa de um website profissional que transmita autoridade e credibilidade para sua consultoria ou empresa de serviços?",
        ctaText: "Solicitar Projeto de Website",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case da Consenso Jr e quero criar um website institucional para minha consultoria.",
      },
    },
  },
  {
    id: "sustenta-website",
    client: "SUSTENTA",
    service: "Website",
    segment: "Engenharia Ambiental",
    challengeType: "Presença Digital",
    image: "/cases/sustenta.png",
    isPlaceholder: false,
    badgeTag: "Engenharia Ambiental",
    cardData: {
      desafio: "Transformar uma atuação ampla e técnica em uma presença digital clara, confiável e orientada a conversão.",
      solucao: "Plataforma institucional moderna com divisão estratégica de núcleos ambientais (Licenciamento, PGRS e Efluentes) e captação de clientes B2B.",
      resultado: "+120% em contatos qualificados de indústrias e propriedades rurais e presença digital fortalecida em toda a região.",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Sustenta é a maior Empresa Júnior de Engenharia Ambiental e Sanitária de Minas Gerais, vinculada à UFU. Atua no desenvolvimento de soluções em licenciamento ambiental, plano de gerenciamento de resíduos sólidos (PGRS) e projetos de saneamento para indústrias, comércios e agronegócios.",
        detalhes: [
          "Segmento: Engenharia Ambiental e Sanitária",
          "Público: Indústrias, loteamentos, mineradoras e produtores rurais",
          "Momento: Consolidação de mercado e busca por grandes projetos corporativos",
          "Restrições: Necessidade de transmitir rigor normativo (IBAMA/SEMAD) com comunicação comercial objetiva",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "A amplitude das áreas de engenharia ambiental tornava a apresentação de serviços confusa para contratantes que precisavam de soluções pontuais e urgentes.",
        detalhes: [
          "Problema: Leads corporativos perdiam o interesse devido à falta de organização nos serviços oferecidos",
          "Impacto: A equipe precisava realizar reuniões manuais de alinhamento para explicar escopos básicos",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Criar um portal que traduzisse a magnitude dos impactos ambientais positivos e da conformidade legal proporcionada pela Sustenta, estimulando solicitações de proposta em poucos cliques.",
        detalhes: [
          "Aumentar o volume de orçamentos solicitados por médias e grandes empresas",
          "Apresentar cases práticos de economia e segurança jurídica ambiental",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Era essencial segmentar o público entre Agro, Indústria e Imobiliário, permitindo que cada cliente encontrasse exatamente as obrigações ambientais do seu setor.",
        detalhes: [
          "Páginas dedicadas com informações de prazos médios e normas aplicáveis",
          "Integração de depoimentos e números de árvores plantadas e efluentes tratados",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "Novo portal corporativo de alto impacto visual e arquitetura limpa. Estruturamos os serviços em módulos temáticos, introduzimos métricas de impacto ecológico e formulários de triagem ágil de demandas ambientais.",
        detalhes: [
          "UI com estética sustentável contemporânea e alta taxa de conversão",
          "Módulo de soluções regulatórias detalhadas (Outorgas, Licenças, PGRS, Laudos)",
          "Botões estratégicos de contato direto via WhatsApp e e-mail corporativo",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Design sprint focado no ecossistema de sustentabilidade, validação de personas técnicas e desenvolvimento frontend moderno e acessível.",
        detalhes: [
          "Fase 1: Entrevistas com consultores ambientais e clientes atendidos",
          "Fase 2: Arquitetura da informação e layout aprovado pelos membros da Sustenta",
          "Fase 3: Otimização de SEO institucional e entrega de painel de manutenção ágil",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "A Sustenta dobrou sua captação de clientes B2B pelo site, passando a ser consultada por empresas industriais de grande porte em Uberlândia e em todo o Triângulo Mineiro.",
        detalhes: [
          "+120% de crescimento nas solicitações de propostas corporativas online",
          "Tempo médio de permanência na página de serviços superior a 2 minutos",
          "Posicionamento consolidado como autoridade líder em engenharia ambiental universitária",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer transformar a presença digital da sua empresa ambiental ou de engenharia com uma plataforma que gera orçamentos reais?",
        ctaText: "Solicitar Orçamento para Website",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case da Sustenta e gostaria de um orçamento para criação de Website.",
      },
    },
  },
  {
    id: "bioflora-website",
    client: "BIOFLORA",
    service: "Website",
    segment: "Indústria & Energia",
    challengeType: "Presença Digital",
    image: "/cases/bioflora.png",
    isPlaceholder: false,
    badgeTag: "Agroindústria",
    cardData: {
      desafio: "Comunicar a autoridade de 12+ anos em substratos agrícolas para o agronegócio de todo o Brasil.",
      solucao: "Portal corporativo com catálogo técnico interativo de produtos, fichas de rendimento por cultura agrícola e canal direto para compras no atacado.",
      resultado: "+50% na velocidade de cotações por atacado e presença comercial digital expandida para 8 novos estados brasileiros.",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Bioflora é uma consolidada indústria de substratos agrícolas e condicionadores de solo, com mais de 12 anos de mercado. Seus insumos de alta tecnologia potencializam o rendimento de lavouras e viveiros em todo o território nacional.",
        detalhes: [
          "Segmento: Agroindústria de Substratos e Condicionadores de Solo",
          "Público: Produtores rurais, viveiros florestais, cooperativas e revendedores agrícolas",
          "Momento: Expansão do portfólio industrial para atendimento em escala nacional",
          "Restrições: Necessidade de comunicar laudos agronômicos e rendimentos de forma rápida",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Representantes comerciais dependiam do envio manual de tabelas e catálogos em PDF, tornando as negociações em campo lentas e pouco visuais para grandes compradores.",
        detalhes: [
          "Problema: Falta de um catálogo digital interativo para consulta em feiras e visitas a campo",
          "Impacto comercial: Oportunidades de vendas em grande volume eram perdidas por atraso na consulta de especificações",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Construir um portal agroindustrial robusto que funcionasse tanto como vitrine corporativa de respeito quanto como ferramenta ativa de vendas para a equipe comercial.",
        detalhes: [
          "Disponibilizar fichas técnicas completas das linhas de substrato por cultura",
          "Facilitar pedidos de cotação de carga fechada e contato de distribuidores",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "O portal precisava ser extremamente leve e rápido para carregar perfeitamente mesmo em regiões agrícolas remotas com conexões móveis limitadas.",
        detalhes: [
          "Filtros objetivos por cultura: Hortaliças, Citros, Café, Florestais e Paisagismo",
          "Canal direto para cotações por tonelada e agendamento de entregas logísticas",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "Portal corporativo agroindustrial de alto padrão com catálogo inteligente de produtos. Cada linha de substrato conta com especificações físicas, químicas e recomendações de aplicação, integrado a um fluxo de cotações em lote.",
        detalhes: [
          "Catálogo digital de substratos com fichas técnicas interativas",
          "Módulo 'Seja um Distribuidor' para captação ativa de novos parceiros regionais",
          "Performance técnica otimizada para carregamento veloz em dispositivos móveis",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Curadoria das fichas agronômicas, estruturação de taxonomia comercial para o agronegócio e desenvolvimento ágil com validação em campo.",
        detalhes: [
          "Fase 1: Mapeamento dos produtos Bioflora e organização por linhas de cultivo",
          "Fase 2: Design visual valorizando a força da produção no campo e a sustentabilidade",
          "Fase 3: Testes de usabilidade com agrônomos e representantes de vendas",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "A Bioflora modernizou sua operação comercial, acelerando o ciclo de negociação e conquistando distribuidores em múltiplos estados do país.",
        detalhes: [
          "+50% de ganho de velocidade no atendimento e envio de cotações pela equipe comercial",
          "Presença comercial expandida para mais de 8 novos estados no primeiro ano",
          "Eliminação quase total da necessidade de envio de PDFs estáticos por e-mail",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Sua indústria ou cooperativa precisa de um catálogo digital interativo e de um portal corporativo de alto impacto?",
        ctaText: "Solicitar Orçamento para Indústria",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case da Bioflora e gostaria de desenvolver um portal para minha indústria.",
      },
    },
  },
  {
    id: "lapeg-website",
    client: "LAPEG",
    service: "Website",
    segment: "Pesquisa & Laboratórios",
    challengeType: "Comunicação Técnica",
    image: "/cases/lapeg.png",
    isPlaceholder: false,
    badgeTag: "Petróleo & Gás",
    cardData: {
      desafio: "Comunicar infraestrutura científica e pesquisa avançada de petróleo e gás para o setor produtivo e agências reguladoras.",
      solucao: "Plataforma científica e comercial com tour pelos laboratórios, catálogo de ensaios com normas ANP/ASTM e solicitação direta de análises.",
      resultado: "Aceleração no fechamento de contratos de pesquisa com operadoras do setor de óleo e gás e máxima transparência regulatória.",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "O LAPEG (Laboratório de Petróleo e Gás) é um dos centros de excelência do Instituto Brasileiro de Tecnologia e Regulação (IBTR), credenciado junto à ANP. Possui uma das infraestruturas mais avançadas do país em caracterização de reservatórios do pré-sal e recuperação avançada de petróleo (EOR).",
        detalhes: [
          "Segmento: Pesquisa Científica e Ensaios Laboratoriais de Óleo & Gás",
          "Público: Operadoras de petróleo, engenheiros do setor de energia e agências reguladoras (ANP)",
          "Momento: Divulgação do parque tecnológico e expansão dos serviços de ensaios regulamentados",
          "Restrições: Rigor absoluto com normas técnicas (ANP, ABNT, ASTM) e termos científicos",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "A riqueza da infraestrutura tecnológica e o portfólio de ensaios laboratoriais estavam dispersos em publicações acadêmicas, dificultando a localização e contratação direta por empresas petrolíferas.",
        detalhes: [
          "Problema: Ausência de um catálogo estruturado de ensaios regulamentados com busca por normas",
          "Impacto: Demora na formalização de convênios de P&D e contratação de análises laboratoriais",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Desenvolver um portal técnico centralizado que demonstrasse o poder dos equipamentos científicos do laboratório e simplificasse a solicitação formal de análises e pareceres técnicos.",
        detalhes: [
          "Exibir o parque de equipamentos científicos de alta pressão e temperatura",
          "Centralizar publicações, patentes e histórico de projetos de pesquisa",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Era fundamental estruturar o portal em dois eixos complementares: Autoridade Científica (publicações e credenciamento ANP) e Contratação de Ensaios (especificações e cotações corporativas).",
        detalhes: [
          "Taxonomia precisa de ensaios petrofísicos e reológicos",
          "Canal direto de comunicação entre a coordenação científica e os gerentes de P&D das operadoras",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "Plataforma digital científica de alto padrão com catálogo de ensaios laboratoriais, busca por normas técnicas regulatórias e visualizador do parque instrumental do laboratório.",
        detalhes: [
          "Catálogo interativo de ensaios categorizados por normas ANP e ASTM",
          "Módulo de acervo científico com publicações, patentes e teses desenvolvidas no LAPEG",
          "Formulário técnico para solicitação de pareceres e ensaios experimentais",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Entrevistas com pesquisadores e docentes, mapeamento detalhado dos ensaios credenciados e programação frontend com design sóbrio e institucional.",
        detalhes: [
          "Fase 1: Curadoria técnica dos ensaios e categorização regulatória",
          "Fase 2: Design system técnico focado em clareza, objetividade e autoridade",
          "Fase 3: Homologação com a coordenação científica e publicação",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "O LAPEG elevou sua visibilidade perante agências de fomento e grandes empresas de energia, tornando-se o canal oficial de referência para novas parcerias tecnológicas.",
        detalhes: [
          "Centralização de mais de 50 publicações e patentes acessíveis para a comunidade internacional",
          "Aumento expressivo nas solicitações de ensaios por operadoras e fornecedores do setor petrolífero",
          "Plena conformidade com as exigências de divulgação e transparência da ANP",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Sua instituição de pesquisa ou laboratório precisa de uma plataforma que comunique autoridade e atraia novos contratos de P&D?",
        ctaText: "Falar com Consultores em Websites",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case do LAPEG e quero desenvolver um portal técnico para nossa organização.",
      },
    },
  },
  {
    id: "magna-website",
    client: "MAGNA",
    service: "Website",
    segment: "Comércio & Serviços",
    challengeType: "Presença Digital",
    image: "/cases/magna.png",
    isPlaceholder: false,
    badgeTag: "Artigos & Consultoria",
    cardData: {
      desafio: "Unir a produção constante de artigos informativos com captação direta de clientes corporativos para consultoria jurídica.",
      solucao: "Website corporativo integrado a portal de notícias e blog jurídico otimizado para SEO, com botões contextuais de agendamento de assessoria preventiva.",
      resultado: "+300% de tráfego orgânico via Google e conversão recorrente de leitores do blog em novos contratos de consultoria jurídica.",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Magna é a Empresa Júnior de Direito da Universidade Federal de Uberlândia (UFU). Presta consultoria jurídica preventiva a empreendedores e desenvolve expressiva produção de artigos e pareceres informativos sobre direito empresarial e do consumidor.",
        detalhes: [
          "Segmento: Consultoria Jurídica, Compliance e Produção de Conteúdo",
          "Público: Empreendedores, startups, acadêmicos e empresários locais",
          "Momento: Transformação do acervo de artigos em um canal orgânico de atração de clientes",
          "Restrições: Plataforma com navegação amigável e facilidade de publicação contínua",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Artigos e análises jurídicas de alto valor produzidos pelos alunos ficavam arquivados sem indexação no Google, perdendo a oportunidade de atrair empreendedores que buscavam respostas na internet.",
        detalhes: [
          "Problema: Ausência de blog corporativo moderno estruturado com boas práticas de SEO",
          "Impacto: O conhecimento gerado não gerava novos contatos comerciais para a empresa júnior",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Construir um portal institucional que unisse a credibilidade de um escritório jurídico moderno com um blog dinâmico, transformando cada artigo publicado em uma porta de entrada para novos contratos.",
        detalhes: [
          "Garantir leitura agradável e categorização inteligente por áreas do direito",
          "Inserir chamadas para ação (CTAs) em cada artigo orientando para diagnósticos preventivos",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "A leitura de artigos jurídicos precisava ser fluida em celulares e conduzir o leitor naturalmente até o botão de contato com os consultores.",
        detalhes: [
          "Categorias estratégicas: Direito Societário, Contratos, Proteção de Dados (LGPD) e Marcas",
          "Módulo com tempo estimado de leitura e botões para compartilhamento rápido",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "Portal corporativo integrado a módulo editorial completo para a Magna. O sistema conta com blog veloz, páginas de serviços jurídicos com foco em benefícios práticos e links diretos para agendamento de reuniões.",
        detalhes: [
          "Blog responsivo e otimizado para os algoritmos de busca do Google (SEO)",
          "Páginas institucionais de consultoria com descritivos claros de soluções jurídicas",
          "Integração com WhatsApp e formulário de contato com triagem automática",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Arquitetura de conteúdo jurídico, design elegante inspirado em grandes consultorias nacionais e desenvolvimento web ágil focado em performance.",
        detalhes: [
          "Fase 1: Definição da hierarquia de categorias e fluxo do leitor",
          "Fase 2: Layout com paleta visual sofisticada e tipografia pensada para leitura longa",
          "Fase 3: Testes de velocidade, responsividade e lançamento",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "A Magna multiplicou seu alcance digital, transformando o blog no principal canal de atração de novos clientes para suas soluções de consultoria jurídica preventiva.",
        detalhes: [
          "+300% de aumento no tráfego orgânico mensal vindo de buscas no Google",
          "Mais de 3.000 leitores recorrentes por mês no blog jurídico da Magna",
          "Conversão consistente de leitores em reuniões de diagnóstico e novos projetos fechados",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer um website dinâmico com blog integrado e gestão de conteúdo para transformar sua audiência em clientes?",
        ctaText: "Solicitar Projeto de Website",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case da Magna e quero desenvolver um portal com blog para minha empresa.",
      },
    },
  },
];
