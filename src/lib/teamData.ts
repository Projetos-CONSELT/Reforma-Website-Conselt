/**
 * Dados da equipe CONSELT organizados por diretoria
 * Inclui membros, cargos, links e informações para contato
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio?: string;
  email?: string;
  linkedinUrl: string | null;
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  members: TeamMember[];
}

export const TEAM_MEDIA = {
  members: "/images/membros",
  team: "/images/equipe/EQUIPE_CONSELT_2026.png",
} as const;

export const teamDepartments: Department[] = [
  {
    id: "presidencia",
    name: "Presidência",
    description: "Liderança estratégica da empresa",
    members: [
      { id: "pr1", name: "Bernardo Medici", role: "Diretor Presidente", department: "Presidência", image: `${TEAM_MEDIA.members}/Pr1.jpg`, linkedinUrl: "https://www.linkedin.com/in/bernardo-estanislau-chaves-medici-534148259/" },
      { id: "pr2", name: "Ariel Lopes", role: "Coordenador de Jurídico-Financeiro", department: "Presidência", image: `${TEAM_MEDIA.members}/Pr2.jpg`, linkedinUrl: "https://www.linkedin.com/in/arl-lps/" },
      { id: "pr3", name: "Bernardo Almeida", role: "Assessor de Jurídico-Financeiro", department: "Presidência", image: `${TEAM_MEDIA.members}/Pr3.jpg`, linkedinUrl: "https://www.linkedin.com/in/bernardo-almeida-68278a429/" },
      { id: "pr4", name: "Ana Vitória", role: "Assessora de Parcerias", department: "Presidência", image: `${TEAM_MEDIA.members}/Pr4.jpg`, linkedinUrl: "https://www.linkedin.com/in/ana-vit%C3%B3ria-braz-a72167187/" },
    ],
  },
  {
    id: "vice-presidencia",
    name: "Vice-Presidência",
    description: "Suporte à liderança estratégica",
    members: [
      { id: "vp1", name: "Fernanda Soares", role: "Diretora Vice-Presidente", department: "Vice-Presidência", image: `${TEAM_MEDIA.members}/VP1.jpg`, linkedinUrl: "https://www.linkedin.com/in/fernanda-soares-62341a275/" },
      { id: "vp2", name: "Giovana Pinheiro", role: "Assessora de Vice-Presidência", department: "Vice-Presidência", image: `${TEAM_MEDIA.members}/VP2.jpg`, linkedinUrl: "https://www.linkedin.com/in/giovana-carvalho-7363193b6/" },
      { id: "vp3", name: "Rafaela de Paula", role: "Assessora de Vice-Presidência", department: "Vice-Presidência", image: `${TEAM_MEDIA.members}/VP3.jpg`, linkedinUrl: "https://www.linkedin.com/in/rafaela-de-paula-3a2446226/" },
      { id: "vp4", name: "Gabrielly Borges", role: "Assessora de Vice-Presidência", department: "Vice-Presidência", image: `${TEAM_MEDIA.members}/VP4.jpg`, linkedinUrl: "https://www.linkedin.com/in/gabrielly-borges/" },
      { id: "vp5", name: "Julia Corrêa", role: "Assessora de Vice-Presidência", department: "Vice-Presidência", image: `${TEAM_MEDIA.members}/VP5.jpg`, linkedinUrl: "https://www.linkedin.com/in/julia-arcari-335a0b401/" },
    ],
  },
  {
    id: "comercial",
    name: "Comercial",
    description: "Responsável por vendas e desenvolvimento de negócios",
    members: [
      { id: "c1", name: "Leonardo Silva", role: "Diretor Comercial", department: "Comercial", image: `${TEAM_MEDIA.members}/C1.jpg`, linkedinUrl: "https://www.linkedin.com/in/leonardo-parreira-tomaz-82a442368/" },
      { id: "c2", name: "Maria Fernanda", role: "Coordenadora de Marketing", department: "Comercial", image: `${TEAM_MEDIA.members}/C2.jpg`, linkedinUrl: null },
      { id: "c3", name: "Allyson de Souza", role: "Coordenador de Negócios", department: "Comercial", image: `${TEAM_MEDIA.members}/C3.jpg`, linkedinUrl: null },
      { id: "c4", name: "Henrique Akira", role: "Assessor de Negócios", department: "Comercial", image: `${TEAM_MEDIA.members}/C4.jpg`, linkedinUrl: null },
      { id: "c5", name: "Filipe Rodrigues", role: "Assessor de Negócios", department: "Comercial", image: `${TEAM_MEDIA.members}/C5.jpg`, linkedinUrl: "https://www.linkedin.com/in/filipe-rodrigues-a1aa41334/" },
      { id: "c6", name: "Arthur Fulgoni", role: "Assessor de Negócios", department: "Comercial", image: `${TEAM_MEDIA.members}/C6.jpg`, linkedinUrl: "https://www.linkedin.com/in/artur-fulgoni-403513391/" },
      { id: "c7", name: "Julia Amorim", role: "Assessora de Marketing", department: "Comercial", image: `${TEAM_MEDIA.members}/C7.jpg`, linkedinUrl: null },
      { id: "c8", name: "Guilherme Henrique", role: "Assessor de Marketing", department: "Comercial", image: `${TEAM_MEDIA.members}/C8.jpg`, linkedinUrl: "https://www.linkedin.com/in/guilherme-martins-558433429/" },
      { id: "c9", name: "Pedro Pansani", role: "Assessor de Negócios", department: "Comercial", image: `${TEAM_MEDIA.members}/C9.jpg`, linkedinUrl: "https://www.linkedin.com/in/pedroppansani/" },
    ],
  },
  {
    id: "projetos",
    name: "Projetos",
    description: "Execução e gerenciamento de todos os projetos",
    members: [
      { id: "proj1", name: "Arthur Montes", role: "Diretor de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P1.jpg`, linkedinUrl: "https://www.linkedin.com/in/arthur-montes-cuoco-14b004312/" },
      { id: "proj2", name: "João Pedro", role: "Coordenador de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P2.jpg`, linkedinUrl: "https://www.linkedin.com/in/joao-pedro-franco-barbosa/" },
      { id: "proj3", name: "Matheus Peres", role: "Coordenador de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P3.jpg`, linkedinUrl: "https://www.linkedin.com/in/mateuspereslima/" },
      { id: "proj4", name: "Cecília Senerrino", role: "Assessora de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P4.jpg`, linkedinUrl: "https://www.linkedin.com/in/cecilia-senerrino-595499360/" },
      { id: "proj5", name: "Marcos Aurélio", role: "Assessor de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P5.jpg`, linkedinUrl: "https://www.linkedin.com/in/marcos-aurelio-eng" },
      { id: "proj6", name: "Felipe Sobral", role: "Assessor de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P6.jpg`, linkedinUrl: "https://www.linkedin.com/in/felipe-sobral-a8b366258/" },
      { id: "proj7", name: "Gabriel Godoi", role: "Assessor de Projetos", department: "Projetos", image: `${TEAM_MEDIA.members}/P7.jpg`, linkedinUrl: "https://www.linkedin.com/in/gabriel-godoi-174231412/" },
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
    title: "Nossa Visão",
    icon: "Eye",
    description:
      "Expandir a nossa linha de produtos/serviços, explorando as diversas aplicações e conhecimentos da nossa faculdade de Engenharia Elétrica.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "valores",
    title: "Nossos Valores",
    icon: "Heart",
    description: [
      "Lapidar diamantes;",
      "Escola de líderes;",
      "Crescer com o cliente;",
      "Paixão pela jornada;",
      "Ser plural para ser autêntico;",
      "Orgulho em ser CONSELT!",
    ],
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
