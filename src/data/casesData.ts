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
    isPlaceholder: true,
    badgeTag: "Engenharia & Arquitetura",
    cardData: {
      desafio: "Conectar o aprendizado técnico de engenharia civil e arquitetura às demandas de mercado.",
      solucao: "[DESCREVER ENTREGAS REAIS - Website institucional com portfólio de projetos técnicos]",
      resultado: "[INSERIR DADO OU DEPOIMENTO VALIDADO]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Constru Soluções em Engenharia é a empresa júnior de Civil e Arquitetura da UFU. Oferece projetos técnicos e consultorias de baixo custo, conectando o aprendizado dos alunos às demandas do mercado regional.",
        detalhes: [
          "Segmento: Engenharia Civil e Arquitetura",
          "Público: Empreendedores, proprietários de imóveis e parceiros regionais",
          "Momento: Fortalecimento da atuação comercial em Uberlândia e região",
          "Restrições: Apresentar soluções técnicas complexas de forma acessível e transparente",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Necessidade de transmitir credibilidade técnica e captar novos projetos junto a empreendedores e moradores locais.",
        detalhes: [
          "Problema externo: Ausência de um portal moderno para demonstrar projetos já realizados",
          "Impacto comercial: Ciclo de atendimento manual que retardava o envio de propostas comerciais",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Desenvolver uma presença digital profissional que apresente os serviços oferecidos e facilite a solicitação de orçamentos.",
        detalhes: [
          "Aumentar o volume de solicitações de orçamentos técnicos",
          "Destacar a união entre a excelência acadêmica da UFU e a prática de mercado",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Falta de um canal centralizado e responsivo para apresentar o portfólio de soluções em engenharia civil e arquitetura.",
        detalhes: [
          "Fórmula de contato antiga gerando poucos leads qualificados",
          "Necessidade de seções claras dividindo consultoria técnica e projetos arquitetônicos",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[DESCREVER ENTREGAS REAIS - Arquitetura de informação moderna, portal institucional e fluxo simplificado de orçamentos].",
        detalhes: [
          "Design de Interface (UI/UX) alinhado à identidade visual da Constru",
          "Catálogo interativo de serviços de Engenharia e Arquitetura",
          "Formulários otimizados para captura rápida de requisitos de clientes",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Mapeamento dos serviços técnicos da Constru, prototipagem no Figma, validação com os diretores e desenvolvimento web otimizado.",
        detalhes: [
          "Etapa 1: Alinhamento de objetivos e arquitetura de conteúdo",
          "Etapa 2: Wireframes e protótipo navegável",
          "Etapa 3: Desenvolvimento Frontend responsivo e otimizado para buscadores",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO OU DEPOIMENTO VALIDADO - Conexão eficiente entre capacitação acadêmica e demandas reais do mercado].",
        detalhes: [
          "Presença digital fortalecida perante o mercado regional de Uberlândia",
          "Facilidade para potenciais clientes solicitarem consultorias e projetos",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer transformar a presença digital da sua empresa de Engenharia ou Arquitetura?",
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
    isPlaceholder: true,
    badgeTag: "Consultoria Jurídica",
    cardData: {
      desafio: "Tornar a consultoria jurídica acessível e aproximar o Direito Preventivo de empreendedores.",
      solucao: "[DESCREVER ENTREGAS REAIS - Portal corporativo com apresentação clara de serviços]",
      resultado: "[INSERIR DADO OU DEPOIMENTO VALIDADO]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Consenso Jr. é a empresa júnior de Direito da UFV, pioneira em Minas e focada em Direito Preventivo. Ela oferece consultoria jurídica acessível (contratos, marcas) para empreendedores, unindo prática acadêmica e mercado.",
        detalhes: [
          "Segmento: Consultoria Jurídica e Direito Preventivo",
          "Público: Empreendedores, startups, micro e pequenas empresas",
          "Momento: Expansão de autoridade no mercado de Minas Gerais",
          "Restrições: Traduzir termos jurídicos para uma linguagem simples e objetiva",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Superar a percepção de que assessoria jurídica é um serviço burocrático e distante dos pequenos empreendedores.",
        detalhes: [
          "Problema: Falta de canal digital para esclarecer dúvidas frequentes sobre proteção de marcas e elaboração de contratos",
          "Impacto: Oportunidades de consultoria jurídica preventiva eram ignoradas por falta de conhecimento dos clientes",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Desenvolver um website moderno para apresentar soluções de contratos e marcas com linguagem acessível e acolhedora.",
        detalhes: [
          "Demonstrar a importância da prevenção jurídica para negócios em crescimento",
          "Facilitar a marcação de reuniões de diagnóstico inicial",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Necessidade de estruturar a jornada do cliente para que empreendedores entendam os benefícios da proteção jurídica preventiva.",
        detalhes: [
          "Foco na navegação intuitiva detalhando cada modalidade de consultoria (Contratos, Marcas, Regimentos)",
          "Integração rápida com os consultores da Consenso Jr",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[DESCREVER ENTREGAS REAIS - Desenvolvimento de website institucional com seções dedicadas a marcas e contratos].",
        detalhes: [
          "Design limpo e corporativo enfatizando segurança jurídica e confiança",
          "Área de serviços categorizada (Registro de Marcas, Contratos, Estatuto Social)",
          "Formulário direto para pré-diagnóstico jurídico gratuito",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Design centrado no usuário, criação de fluxo de atração para micro e pequenos empresários e desenvolvimento técnico robusto.",
        detalhes: [
          "Fase 1: Mapeamento de persona e tom de voz acessível",
          "Fase 2: UI Design e aprovação visual com a diretoria",
          "Fase 3: Programação responsiva e otimização para dispositivos móveis",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO OU DEPOIMENTO VALIDADO - Consolidação da liderança em Direito Preventivo em Minas Gerais].",
        detalhes: [
          "Fortalecimento da marca Consenso Jr no ecossistema empreendedor mineiro",
          "Captação contínua de contratos de consultoria jurídica preventiva",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Precisa de um website profissional para sua consultoria ou empresa de serviços?",
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
    isPlaceholder: true,
    badgeTag: "Engenharia Ambiental",
    cardData: {
      desafio: "Transformar uma atuação ampla em uma presença digital clara e confiável.",
      solucao: "[DESCREVER ENTREGAS REAIS - Novo portal institucional de impacto ambiental]",
      resultado: "[INSERIR DADO OU DEPOIMENTO VALIDADO]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "Sustenta é a maior Empresa Júnior de Engenharia Ambiental e Sanitária de Minas Gerais, impactando a vida de centenas de pessoas por toda região de Uberlândia.",
        detalhes: [
          "Segmento: Engenharia Ambiental e Sanitária",
          "Público: Empresas, indústrias e propriedades rurais em busca de licenciamento e gestão ambiental",
          "Momento: Expansão de mercado regional necessitando de autoridade digital",
          "Restrições: Necessidade de comunicação simples para temas técnicos de alta complexidade",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Dificuldade em sintetizar a vasta gama de serviços ambientais em uma jornada digital fluida para atrair novos clientes corporativos.",
        detalhes: [
          "Problema externo: Falta de clareza nos serviços prestados causava perda de leads qualificados",
          "Impacto comercial: Ciclo de vendas longo e dependente de explicações manuais repetitivas",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Reformular a presença digital da Sustenta com arquitetura de informação focada em conversão e usabilidade moderna.",
        detalhes: [
          "Aumentar o volume de solicitações de orçamento via canal digital",
          "Posicionar a empresa com alto grau de profissionalismo e confiabilidade",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Ausência de hierarquia visual na apresentação dos projetos e formulários de contato genéricos que geravam fricção no usuário.",
        detalhes: [
          "Gargalo de conversão na navegação mobile",
          "Falta de provas sociais e cases destacados na página inicial",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[DESCREVER ENTREGAS REAIS - Arquitetura de informação completa, novo portal responsivo e fluxo otimizado de captura de leads].",
        detalhes: [
          "Design de Interface (UI/UX) alinhado à identidade visual da Sustenta",
          "Estrutura modular de serviços ambientais com páginas dedicadas",
          "Integração rápida com canais diretos de atendimento ao cliente",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Mapeamento de jornada do usuário, prototipagem no Figma, validação com stakeholders e desenvolvimento com código otimizado.",
        detalhes: [
          "Fase 1: Alinhamento de requisitos e pesquisa de mercado",
          "Fase 2: UI/UX Wireframing e Prototipagem interativa",
          "Fase 3: Desenvolvimento Frontend responsivo e testes de performance",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO OU DEPOIMENTO VALIDADO - Métricas finais e evidências de transformação digital após o lançamento].",
        detalhes: [
          "Melhoria na percepção da marca por parceiros e contratantes",
          "Estrutura 100% preparada para captação contínua de projetos",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer transformar a presença digital da sua empresa com um website otimizado e focado em resultados?",
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
    isPlaceholder: true,
    badgeTag: "Agroindústria",
    cardData: {
      desafio: "Comunicar a autoridade de 12+ anos em substratos agrícolas para o agro nacional.",
      solucao: "[DESCREVER ENTREGAS REAIS - Catálogo industrial e portal web de substratos]",
      resultado: "[INSERIR DADO OU DEPOIMENTO VALIDADO]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "A Bioflora é uma indústria de substratos agrícolas, com mais de 12 anos de mercado. Fornecem substratos e condicionadores de solo de alto padrão, impactando imensamente o agro de nosso Brasil.",
        detalhes: [
          "Segmento: Agroindústria de Substratos e Insumos Agrícolas",
          "Público: Produtores rurais, viveiros, distribuidores e cooperativas agrícolas",
          "Momento: Expansão do catálogo técnico para cobertura em todo o território nacional",
          "Restrições: Apresentar a composição e rendimento dos condicionadores com transparência técnica",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Disponibilizar o catálogo completo de condicionadores de solo de forma acessível para produtores rurais e distribuidores de todo o país.",
        detalhes: [
          "Problema: Falta de um canal digital centralizado com informações técnicas das linhas de substrato",
          "Impacto comercial: Representantes comerciais perdiam tempo enviando PDFs e dados técnicos por e-mail",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Construir um portal corporativo de alto desempenho visual com especificações técnicas e facilitador de compras no atacado.",
        detalhes: [
          "Destacar a sólida experiência de 12 anos de atuação na agroindústria brasileira",
          "Permitir que produtores rurais encontrem o substrato ideal para sua cultura agrícola",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Necessidade de expor a robustez industrial e a qualidade técnica dos produtos agrícolas com dados de rendimento e aplicação.",
        detalhes: [
          "Catálogo digital responsivo com filtros por tipo de cultivo",
          "Canal rápido de contato diretamente com a equipe técnica da Bioflora",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[DESCREVER ENTREGAS REAIS - Catálogo de produtos com fichas técnicas interativas e canal comercial].",
        detalhes: [
          "Portal corporativo de alto padrão focado no agronegócio",
          "Catálogo detalhado de substratos agrícolas e condicionadores de solo",
          "Formulários para cotação em grande escala e atendimento a distribuidores",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Mapeamento dos insumos agrícolas, estruturação de categorias para o setor do agronegócio e desenvolvimento web ágil.",
        detalhes: [
          "Etapa 1: Organização dos dados técnicos dos produtos Bioflora",
          "Etapa 2: Layout limpo valorizando a essência agrícola da marca",
          "Etapa 3: Validação com a equipe comercial e publicação",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO OU DEPOIMENTO VALIDADO - Fortalecimento da marca industrial em todo o território nacional].",
        detalhes: [
          "Aumento na agilidade de atendimento dos representantes comerciais",
          "Visibilidade ampliada para produtores agrícolas de diversas regiões",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Sua indústria precisa de um catálogo e portal web corporativo de alto impacto?",
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
    isPlaceholder: true,
    badgeTag: "Petróleo & Gás",
    cardData: {
      desafio: "Comunicar infraestrutura e pesquisa técnica para públicos diferentes.",
      solucao: "[ARQUITETURA, CONTEÚDO E FUNCIONALIDADES REAIS]",
      resultado: "[INSERIR PROVA VALIDADA]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "O Lapeg é um dos laboratórios do Instituto Brasileiro de Tecnologia e Regulação – IBTR e credenciado à ANP. Detém uma das melhores infraestruturas do país para caracterização de reservatórios do pré-sal e estudos de tecnologias de recuperação avançada de petróleo (EOR).",
        detalhes: [
          "Segmento: Pesquisa acadêmica e ensaios industriais de Petróleo e Gás",
          "Público: Pesquisadores, agências reguladoras (ANP) e indústrias petrolíferas",
          "Momento: Expansão das ofertas de serviços de consultoria laboratorial",
          "Restrições: Necessidade de rigor científico alinhado a uma linguagem de negócios clara",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Dificuldade de estruturar o vasto portfólio de ensaios e a infraestrutura tecnológica para demandas acadêmicas e industriais.",
        detalhes: [
          "Problema: Informações dispersas dificultavam o acesso de parceiros privados aos ensaios prestados",
          "Impacto: Oportunidades de contratos industriais eram perdidas por falta de visibilidade digital",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Criar uma plataforma centralizada de comunicação científica e solicitação de serviços de laboratório.",
        detalhes: [
          "Apresentar equipamentos e certificações de forma didática e transparente",
          "Facilitar o agendamento e cotação de análises laboratoriais regulamentadas pela ANP",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Necessidade de criar divisões claras entre o portal de pesquisa/publicações e o portal de serviços de engenharia.",
        detalhes: [
          "Arquitetura antiga com excesso de termos informais que prejudicavam a busca direta",
          "Ausência de catálogo filtrável de ensaios técnicos disponíveis",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[ARQUITETURA, CONTEÚDO E FUNCIONALIDADES REAIS - Catálogo interativo de ensaios, área de publicações e solicitação direta de ensaios].",
        detalhes: [
          "Mapeamento visual do parque de equipamentos científicos do LAPEG",
          "Sistema dinâmico de busca por tipos de ensaios e normas técnicas (ANP/ASTM)",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Entrevistas com a equipe técnica do laboratório, curadoria do acervo de normas e desenvolvimento front-end sob medida.",
        detalhes: [
          "Etapa 1: Taxonomia dos ensaios e pesquisa de usabilidade",
          "Etapa 2: Design system técnico e limpo",
          "Etapa 3: Homologação com docentes e engenheiros do LAPEG",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR PROVA VALIDADA - Depoimento da coordenação e indicadores de novos contatos industriais].",
        detalhes: [
          "Centralização transparente do acervo científico e comercial do LAPEG",
          "Facilidade para contratação de ensaios regulamentados de petróleo e gás",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Sua instituição ou laboratório precisa de uma plataforma que comunique autoridade técnica e atraia parcerias?",
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
    isPlaceholder: true,
    badgeTag: "Artigos & Consultoria",
    cardData: {
      desafio: "Unir produção de artigos informativos à oferta de consultoria jurídica.",
      solucao: "[DESCREVER ENTREGAS REAIS - Website com blog jurídico integrado e captação de clientes]",
      resultado: "[INSERIR DADO OU DEPOIMENTO VALIDADO]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "Magna é uma Empresa Júnior de Direito, associada à UFU. Com diversos serviços na área jurídica, a Magna se preocupa com a produção de artigos informativos, compartilhando o conhecimento adquirido na área acadêmica.",
        detalhes: [
          "Segmento: Consultoria Jurídica e Produção de Conteúdo",
          "Público: Estudantes, empresários e comunidade em busca de esclarecimentos jurídicos",
          "Momento: Consolidação do blog como canal gerador de novos leads para a consultoria",
          "Restrições: Garantir facilidade de leitura e publicação constante de artigos",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Criar uma plataforma que alie a produção constante de artigos explicativos à conversão de novos clientes corporativos.",
        detalhes: [
          "Problema: Artigos acadêmicos ficavam engavetados sem um portal dinâmico com SEO otimizado",
          "Impacto: Perda da oportunidade de atrair clientes por meio de busca orgânica no Google",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Desenvolver um portal moderno focado em SEO para os artigos informativos e com fluxo intuitivo de agendamento jurídico.",
        detalhes: [
          "Publicar e categorizar artigos jurídicos informativos de forma ágil",
          "Converter leitores dos artigos em potenciais clientes da assessoria jurídica da Magna",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Falta de um repositório otimizado para a difusão dos artigos produzidos pelos alunos e fraca atração de buscas orgânicas.",
        detalhes: [
          "Necessidade de blog rápido e responsivo integrado às páginas de serviços jurídicos",
          "Chamadas para ação (CTAs) em cada artigo orientando para consultas preventivas",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[DESCREVER ENTREGAS REAIS - Sistema de blog integrado, páginas de serviços de consultoria jurídica e chamadas de ação].",
        detalhes: [
          "Portal corporativo e educacional para a Magna Empresa Jurídica Júnior",
          "Módulo de blog estruturado para SEO com leitor dinâmico",
          "Canais diretos de contato com os consultores jurídicos",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Taxonomia de categorias jurídicas, design de interface institucional e implementação técnica focada em velocidade de carregamento.",
        detalhes: [
          "Etapa 1: Estruturação das categorias do blog e serviços jurídicos",
          "Etapa 2: Protótipo navegável aprovado pelos diretores da Magna",
          "Etapa 3: Lançamento e testes de usabilidade",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO OU DEPOIMENTO VALIDADO - Relevância digital fortalecida e captação recorrente de leitores e clientes].",
        detalhes: [
          "Maior engajamento da comunidade acadêmica e empresarial de Uberlândia",
          "Transformação dos artigos jurídicos em uma fonte sólida de novos contatos",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer um website dinâmico com blog e gestão de conteúdo para a sua empresa?",
        ctaText: "Solicitar Projeto de Website",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Vi o case da Magna e quero desenvolver um portal com blog para minha empresa.",
      },
    },
  },
  {
    id: "software-gestao-conselt",
    client: "INDÚSTRIA CONSELT",
    service: "Software",
    segment: "Indústria & Energia",
    challengeType: "Software & Gestão",
    isPlaceholder: true,
    badgeTag: "Sistema Web & Dashboard",
    cardData: {
      desafio: "Automatizar o controle operacional e métricas de desempenho em tempo real.",
      solucao: "[SISTEMA WEB SOB MEDIDA E DASHBOARD ANALÍTICO]",
      resultado: "[REDUÇÃO DE GARGALOS OPERACIONAIS E PRODUTIVIDADE AUMENTADA]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "Empresa do setor industrial necessitando modernizar o acompanhamento de ordens de serviço e indicadores internos.",
        detalhes: [
          "Segmento: Indústria & Gestão Operacional",
          "Público: Gestores de produção e equipes técnicas de campo",
          "Momento: Migração de processos manuais em planilhas para sistema nuvem centralizado",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Retrabalho e perda de dados causados por gerenciamento baseado em planilhas desconectadas.",
        detalhes: [
          "Lenta tomada de decisão por falta de relatórios em tempo real",
          "Falta de controle centralizado de entregas e insumos",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Desenvolver um software web customizado para gestão unificada de operações e emissão automática de relatórios.",
        detalhes: [
          "Eliminar o uso de arquivos duplicados",
          "Garantir acesso seguro por múltiplos níveis de permissão",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Necessidade de criar uma plataforma intuitiva que exigisse tempo mínimo de treinamento dos operadores.",
        detalhes: [
          "Foco na simplicidade da interface",
          "Arquitetura escalável para suprir novos módulos operacionais",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[DESCREVER ENTREGAS REAIS - Plataforma web com dashboards gráficos, alertas automáticos e controle de ordens].",
        detalhes: [
          "Painel gerencial personalizável",
          "Exportação de dados e relatórios gerenciais automatizados",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Desenvolvimento ágil com entregas semanais, validação contínua com operadores de campo e testes de segurança.",
        detalhes: [
          "Sprints semanais de código e UX",
          "Homologação em ambiente de staging pré-lançamento",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO VALIDADO - Redução drástica do tempo de emissão de relatórios e controle operacional total].",
        detalhes: [
          "Agilidade na tomada de decisão dos gestores",
          "Historização confiável de todas as etapas operacionais",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Precisa de um software sob medida para automatizar e integrar os processos da sua empresa?",
        ctaText: "Solicitar Projeto de Software",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Tenho interesse em desenvolver um Software customizado com a Conselt.",
      },
    },
  },
  {
    id: "projeto-eletrico-conselt",
    client: "ECO ENERGIA",
    service: "Projeto Elétrico",
    segment: "Construção Civil",
    challengeType: "Eficiência Energética",
    isPlaceholder: true,
    badgeTag: "Engenharia & Infraestrutura",
    cardData: {
      desafio: "Garantir conformidade normativa e dimensionamento seguro de instalações prediais.",
      solucao: "[PROJETO ELÉTRICO COMPLETO E DIAGRAMAS UNIFILARES]",
      resultado: "[REDUÇÃO DE CUSTOS DE INSTALAÇÃO E 100% DE APROVAÇÃO NORMATIVA]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "Empreendimento comercial em fase de planejamento estrutural demandando projeto elétrico de baixa e média tensão.",
        detalhes: [
          "Segmento: Construção Civil e Instalações Comerciais",
          "Exigência: Normas ABNT NBR 5410 e segurança operacional",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Projeto arquitetônico complexo demandando balanceamento preciso de cargas e minimização de quedas de tensão.",
        detalhes: [
          "Necessidade de otimização de materiais sem comprometer margens de segurança",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Elaborar projeto executivo completo com memoriais descritivos, lista de materiais e plantas detalhadas.",
        detalhes: [
          "Aprovação sem ressalvas junto às concessionárias de energia",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Oportunidades de readequação de rotas de eletrocalhas para otimizar consumo de cabos em até 15%.",
        detalhes: [
          "Diagnóstico de cargas prioritárias e proteção contra surtos (DPS)",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[PROJETO ELÉTRICO EXECUTIVO COMPLETO - Plantas de distribuição, quadros de carga e ART assinada].",
        detalhes: [
          "Modelagem técnica e diagramas unifilares completos",
          "Lista quantitativa de materiais para concorrência de compras",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Dimensionamento em softwares de engenharia elétrica, simulações de carga e emissão de documentação técnica regulamentada.",
        detalhes: [
          "Análise de pré-dimensionamento e levantamento em campo",
          "Desenvolvimento dos desenhos técnicos e relatórios de conformidade",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO VALIDADO - Instalação segura executada no prazo e economia de insumos].",
        detalhes: [
          "Garantia de segurança operacional e facilidade de manutenção futura",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Sua obra ou edificação precisa de um Projeto Elétrico seguro, eficiente e normatizado?",
        ctaText: "Solicitar Orçamento de Projeto Elétrico",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Gostaria de cotar um Projeto Elétrico com os engenheiros da Conselt.",
      },
    },
  },
  {
    id: "luminotecnico-conselt",
    client: "CENTRO CULTURAL & COMERCIAL",
    service: "Luminotécnico",
    segment: "Comércio & Serviços",
    challengeType: "Eficiência Energética",
    isPlaceholder: true,
    badgeTag: "Design & Iluminação",
    cardData: {
      desafio: "Unir valorização estética do ambiente a uma drástica redução no consumo de energia.",
      solucao: "[PROJETO LUMINOTÉCNICO COM TECNOLOGIA LED E CÁLCULO DIALUX]",
      resultado: "[CONFORTO VISUAL GARANTIDO E REDUÇÃO NA FATURA ELÉTRICA]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "Espaço comercial que buscava renovar sua iluminação interior para destacar produtos e proporcionar experiência agradável aos visitantes.",
        detalhes: [
          "Segmento: Comércio, Arquitetura e Serviços",
          "Foco: Ergonomia visual, lux recomendado pelas normas ABNT e economia",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Iluminação antiga gerando pontos de ofuscamento, alto aquecimento dos ambientes e custos elevados com manutenção de lâmpadas.",
        detalhes: [
          "Distribuição desigual de luminância nos postos de trabalho e exposição",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Desenvolver estudo fotométrico e projeto luminotécnico otimizado com tecnologia LED de alta eficiência.",
        detalhes: [
          "Alcançar os níveis ideais de iluminância (Lux) estipulados pela NBR ISO/CIE 8995",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Uso ineficiente do fluxo luminoso e falta de setorização de circuitos para aproveitamento da luz natural.",
        detalhes: [
          "Oportunidade de criar cenas de iluminação específicas para diferentes horários",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[PROJETO LUMINOTÉCNICO E SIMULAÇÃO FOTOMÉTRICA - Especificação técnica de luminárias, temperatura de cor e layout de pontos].",
        detalhes: [
          "Relatório de simulação 3D de níveis de luz (DIALux)",
          "Planilha de retorno de investimento (Payback) da transição LED",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Medições de luxometria in loco, modelagem tridimensional do espaço, seleção de equipamentos e cálculo luminotécnico detalhado.",
        detalhes: [
          "Levantamento arquitetônico e fotométrico",
          "Simulação tridimensional no DIALux e especificação do projeto",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR PROVA VALIDADA - Ambiente transformado visualmente e economia de energia comprovada].",
        detalhes: [
          "Níveis de iluminação perfeitamente adequados à saúde visual dos ocupantes",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Deseja transformar a iluminação do seu espaço e reduzir custos energéticos com um Projeto Luminotécnico?",
        ctaText: "Solicitar Projeto Luminotécnico",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Gostaria de agendar um estudo para Projeto Luminotécnico com a Conselt.",
      },
    },
  },
  {
    id: "automacao-conselt",
    client: "AUTOMAÇÃO INDUSTRIAL X",
    service: "Automação",
    segment: "Indústria & Energia",
    challengeType: "Automação de Processos",
    isPlaceholder: true,
    badgeTag: "Automação & Controle",
    cardData: {
      desafio: "Reduzir tempo de ciclo de produção eliminando falhas operacionais manuais.",
      solucao: "[PROJETO DE AUTOMAÇÃO COM PROGRAMAÇÃO DE PLC E SCADA]",
      resultado: "[AUMENTO NA VELOCIDADE DE PRODUÇÃO E PADRONIZAÇÃO DE QUALIDADE]",
    },
    details: {
      contexto: {
        bloco: "Contexto",
        pergunta: "Quem era o cliente e qual era o cenário?",
        conteudo:
          "Linha de produção industrial com etapas críticas dependentes de acionamento manual e supervisão constante.",
        detalhes: [
          "Segmento: Indústria de Transformação e Manufatura",
          "Necessidade: Confiabilidade, controle de sensores e redução de parada não planejada",
        ],
      },
      desafio: {
        bloco: "Desafio",
        pergunta: "O que impedia o resultado?",
        conteudo:
          "Gargalos de velocidade na linha de montagem e risco de erros humanos no controle de tempo de processos.",
        detalhes: [
          "Ausência de sistema de alarme imediato para falhas de equipamentos",
        ],
      },
      objetivo: {
        bloco: "Objetivo",
        pergunta: "O que precisava mudar?",
        conteudo:
          "Implementar lógica de controle automatizado através de CLPs/PLCs e interface homem-máquina (IHM).",
        detalhes: [
          "Padronizar o tempo de ciclo e maximizar a segurança operacional dos colaboradores",
        ],
      },
      diagnostico: {
        bloco: "Diagnóstico",
        pergunta: "O que a CONSELT percebeu?",
        conteudo:
          "Possibilidade de automatizar 4 etapas sequenciais através da instalação de sensores industriais e atuadores pneumáticos/elétricos.",
        detalhes: [
          "Diagnóstico da infraestrutura elétrica existente para integração de novos quadros de comando",
        ],
      },
      solucao: {
        bloco: "Solução",
        pergunta: "O que foi desenvolvido?",
        conteudo:
          "[PROJETO DE AUTOMAÇÃO INDUSTRIAL - Lógica de programação, quadro de comando automatizado e telas de supervisão].",
        detalhes: [
          "Programação de controladores lógicos programáveis (CLP)",
          "Desenvolvimento de telas IHM para controle em tempo real",
        ],
      },
      processo: {
        bloco: "Processo",
        pergunta: "Como foi executado?",
        conteudo:
          "Especificação dos componentes, desenvolvimento dos algoritmos de controle, montagem de bancada de testes e comissionamento no local.",
        detalhes: [
          "Simulação virtual da lógica de automação",
          "Testes de bancada e start-up acompanhado na planta do cliente",
        ],
      },
      resultado: {
        bloco: "Resultado",
        pergunta: "O que mudou?",
        conteudo:
          "[INSERIR DADO VALIDADO - Linha operando com máxima eficiência e controle total pelo operador].",
        detalhes: [
          "Eliminação de atrasos causados por interrupções manuais",
        ],
      },
      proximaAcao: {
        bloco: "Próxima Ação",
        pergunta: "Como contratar algo semelhante?",
        conteudo:
          "Quer otimizar sua linha de produção com soluções inteligentes de Automação e Controle?",
        ctaText: "Solicitar Orçamento de Automação",
        ctaLink: "/contato",
        whatsappMessage: "Olá! Gostaria de conversar com a equipe da Conselt sobre Automação Industrial.",
      },
    },
  },
];
