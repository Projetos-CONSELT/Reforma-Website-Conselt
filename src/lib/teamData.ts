/**
 * Dados da equipe CONSELT organizados por diretoria
 * Inclui membros, cargos, links e informações para contato
 */

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image?: string;
  bio?: string;
  email?: string;
  linkedin?: string;
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  members: TeamMember[];
}

// Mock de dados da equipe - substituir com dados reais
export const teamDepartments: Department[] = [
  {
    id: "presidencia",
    name: "Presidência",
    description: "Liderança estratégica da empresa",
    members: [
      {
        id: "pres-1",
        name: "João Silva",
        position: "Presidente",
        department: "Presidência",
        bio: "Engenheiro Elétrico com foco em gestão de projetos e inovação",
        email: "joao@conselt.com",
        linkedin: "https://linkedin.com/in/joaosilva",
      },
    ],
  },
  {
    id: "vice-presidencia",
    name: "Vice-Presidência",
    description: "Suporte à liderança estratégica",
    members: [
      {
        id: "vp-1",
        name: "Maria Santos",
        position: "Vice-Presidente",
        department: "Vice-Presidência",
        bio: "Especialista em relacionamento comercial e parcerias estratégicas",
        email: "maria@conselt.com",
        linkedin: "https://linkedin.com/in/mariasantos",
      },
    ],
  },
  {
    id: "diretoria-comercial",
    name: "Diretoria Comercial",
    description: "Responsável por vendas e desenvolvimento de negócios",
    members: [
      {
        id: "dc-1",
        name: "Carlos Oliveira",
        position: "Diretor Comercial",
        department: "Diretoria Comercial",
        bio: "Gestor de vendas com experiência em empresas juniores",
        email: "carlos@conselt.com",
        linkedin: "https://linkedin.com/in/carlosoliveira",
      },
      {
        id: "dc-2",
        name: "Ana Costa",
        position: "Coordenadora de Vendas",
        department: "Diretoria Comercial",
        bio: "Especialista em prospecção de clientes e negociação",
        email: "ana@conselt.com",
        linkedin: "https://linkedin.com/in/anacosta",
      },
    ],
  },
  {
    id: "diretoria-projetos",
    name: "Diretoria de Projetos",
    description: "Execução e gerenciamento de todos os projetos",
    members: [
      {
        id: "dp-1",
        name: "Roberto Ferreira",
        position: "Diretor de Projetos",
        department: "Diretoria de Projetos",
        bio: "Engenheiro experiente em automação industrial e controle",
        email: "roberto@conselt.com",
        linkedin: "https://linkedin.com/in/robertoferreira",
      },
      {
        id: "dp-2",
        name: "Patricia Lima",
        position: "Gerente de Projetos",
        department: "Diretoria de Projetos",
        bio: "Especialista em desenvolvimento digital e soluções web",
        email: "patricia@conselt.com",
        linkedin: "https://linkedin.com/in/patrialima",
      },
      {
        id: "dp-3",
        name: "Lucas Martins",
        position: "Engenheiro de Projetos",
        department: "Diretoria de Projetos",
        bio: "Desenvolvedor full-stack com foco em IoT",
        email: "lucas@conselt.com",
        linkedin: "https://linkedin.com/in/lucasmartins",
      },
    ],
  },
  {
    id: "diretoria-marketing",
    name: "Diretoria de Marketing",
    description: "Estratégia de marca e comunicação",
    members: [
      {
        id: "dm-1",
        name: "Fernanda Rodrigues",
        position: "Diretora de Marketing",
        department: "Diretoria de Marketing",
        bio: "Especialista em branding e estratégia digital",
        email: "fernanda@conselt.com",
        linkedin: "https://linkedin.com/in/fernandar",
      },
      {
        id: "dm-2",
        name: "Gabriel Teixeira",
        position: "Coordenador de Conteúdo",
        department: "Diretoria de Marketing",
        bio: "Criador de conteúdo e social media specialist",
        email: "gabriel@conselt.com",
        linkedin: "https://linkedin.com/in/gabrielteixeira",
      },
    ],
  },
  {
    id: "diretoria-operacoes",
    name: "Diretoria de Operações",
    description: "Gestão administrativa e operacional",
    members: [
      {
        id: "do-1",
        name: "Juliana Souza",
        position: "Diretora de Operações",
        department: "Diretoria de Operações",
        bio: "Administradora com experiência em gestão de processos",
        email: "juliana@conselt.com",
        linkedin: "https://linkedin.com/in/julianasouza",
      },
      {
        id: "do-2",
        name: "Marcos Junior",
        position: "Coordenador de Recursos Humanos",
        department: "Diretoria de Operações",
        bio: "Especialista em desenvolvimento de talentos",
        email: "marcos@conselt.com",
        linkedin: "https://linkedin.com/in/marcosjunior",
      },
    ],
  },
];

export const essenceItems = [
  {
    id: "missao",
    title: "Missão",
    icon: "Target",
    description:
      "Oferecer soluções inovadoras em engenharia elétrica e automação, agregando valor aos clientes através de projetos de excelência realizados por estudantes da FEELT.",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: "visao",
    title: "Visão",
    icon: "Eye",
    description:
      "Ser a empresa júnior de referência em soluções de engenharia elétrica e digital, reconhecida pela qualidade, inovação e impacto transformador no mercado.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "valores",
    title: "Valores",
    icon: "Heart",
    description:
      "Excelência, integridade, inovação, trabalho em equipe, comprometimento com resultados e responsabilidade social são os pilares que guiam nossas ações.",
    color: "from-blue-400 to-blue-300",
  },
];

// Constantes de cores institucionais
export const CONSELT_COLORS = {
  primary: {
    darkest: "#1a3a7a",
    dark: "#2b5ca8",
    medium: "#4a8bcb",
    light: "#6ba3d8",
  },
  accent: {
    blue: "#0ea5e9",
    cyan: "#06b6d4",
  },
  neutral: {
    white: "#ffffff",
    light: "#f8fafc",
    gray: "#64748b",
    dark: "#1e293b",
  },
};

// Textos institucionais
export const INSTITUTIONAL_TEXTS = {
  heroTitle: "Conheça a CONSELT",
  heroSubtitle: "A Empresa Júnior da Faculdade de Engenharia Elétrica da UFU",
  heroDescription: `A CONSELT é uma empresa júnior vinculada à Faculdade de Engenharia Elétrica da Universidade Federal de Uberlândia (UFU), 
    dedicada a oferecer soluções inovadoras em engenharia elétrica, automação e soluções digitais. 
    Nosso time é formado por estudantes apaixonados por tecnologia, inovação e excelência.`,
  teamTitle: "Conheça nossas Diretorias",
  teamDescription:
    "Somos um time multidisciplinar de engenheiros e profissionais comprometidos com a excelência",
};
