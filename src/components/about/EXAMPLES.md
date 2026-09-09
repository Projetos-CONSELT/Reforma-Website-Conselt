// Exemplos de como estender e customizar a página "Sobre"

import type { TeamMember, Department, EssenceItem } from "@/lib/teamData";

/**
 * EXEMPLO 1: Adicionar um novo membro com todos os campos
 */
export const newMemberExample: TeamMember = {
  id: "member-unique-id",
  name: "Maria Oliveira Silva",
  position: "Engenheira de Projetos Sênior",
  department: "Diretoria de Projetos",
  bio: "Especialista em sistemas de automação com 2 anos de experiência. Apaixonada por IoT e desenvolvimento de soluções escaláveis.",
  email: "maria.oliveira@conselt.com",
  linkedin: "https://linkedin.com/in/mariaoliveira",
  image: "/images/team/maria-oliveira.jpg", // Futuro: Next.js Image
};

/**
 * EXEMPLO 2: Adicionar uma nova diretoria
 */
export const newDepartmentExample: Department = {
  id: "diretoria-inovacao",
  name: "Diretoria de Inovação",
  description: "Responsável por pesquisa, desenvolvimento e inovação tecnológica",
  members: [
    {
      id: "inovacao-1",
      name: "Dr. Tecnológico",
      position: "Diretor de Inovação",
      department: "Diretoria de Inovação",
      bio: "PhD em Engenharia Elétrica, especialista em IA e Machine Learning",
      email: "tech@conselt.com",
      linkedin: "https://linkedin.com/in/techexpert",
    },
  ],
};

/**
 * EXEMPLO 3: Adicionar um novo item de essência (além de Missão, Visão, Valores)
 */
export const newEssenceItemExample: EssenceItem = {
  id: "cultura",
  title: "Cultura",
  icon: "Users",
  description:
    "Cultivamos uma ambiente de aprendizado contínuo, inovação e respeito mútuo entre todos os membros.",
  color: "from-purple-600 to-purple-400",
};

/**
 * BOAS PRÁTICAS:
 *
 * 1. IDs ÚNICOS:
 *    - Sempre use IDs únicos no formato "contexto-numero" ou "contexto-nome"
 *    - Exemplos: "member-123", "dept-comercial", "essence-missao"
 *
 * 2. ESTRUTURA DE DADOS:
 *    - Mantenha os campos em ordem: id, name, position, department, image, bio, email, linkedin
 *    - Use campos opcionais (?) apenas para dados que pode não ter
 *    - Sempre inclua pelo menos: id, name, position, department
 *
 * 3. ÍCONES (lucide-react):
 *    - Lista de ícones disponíveis: https://lucide.dev/
 *    - Use nomes PascalCase: "Target", "Eye", "Heart", "Users", etc.
 *    - Valide que o ícone existe antes de adicionar
 *
 * 4. CORES (Tailwind):
 *    - Use formato gradiente: "from-[cor]-[intensidade] to-[cor]-[intensidade]"
 *    - Exemplos: "from-blue-600 to-blue-400", "from-green-500 to-emerald-400"
 *    - Mantém consistência visual com a paleta institucional
 *
 * 5. RESPONSIVIDADE:
 *    - Grid breakpoints: mobile (1) | tablet (2) | desktop (4)
 *    - Testar em: 320px (mobile), 768px (tablet), 1024px+ (desktop)
 *
 * 6. PERFORMANCE:
 *    - Componentes sem estado usam React.memo
 *    - Não adicione listeners globais desnecessários
 *    - Use useMemo/useCallback se adicionar lógica pesada
 *
 * 7. ACESSIBILIDADE:
 *    - Sempre adicione aria-label em elementos interativos
 *    - Use role="button" em divs clicáveis
 *    - Implemente onKeyDown para teclado (Enter, Space)
 *    - Teste com tab navigation
 *
 * 8. TIPAGEM TypeScript:
 *    - Sempre export interfaces de tipos
 *    - Use `React.FC` para function components
 *    - Use `React.memo` com type inference correto
 *    - Evite `any`, preferir tipos explícitos
 *
 * 9. NOMEAÇÃO:
 *    - Componentes: PascalCase (MemberCard, DepartmentSection)
 *    - Props: camelCase (isOpen, onClose, memberList)
 *    - Constantes: SCREAMING_SNAKE_CASE (CONSELT_COLORS, PRIMARY_BLUE)
 *
 * 10. COMENTÁRIOS:
 *     - Use JSDoc comentários para componentes principais
 *     - Descreva o propósito e features do componente
 *     - Documente props complexas
 */

/**
 * EXEMPLO 4: Estender o MemberCard com avatar customizado
 * (Futuro: integrar com API de avatares)
 */
export const avatarStrategyExample = {
  // Estratégia 1: Usar imagem do servidor
  withImage: (imageUrl: string) => ({
    type: "image",
    url: imageUrl,
  }),

  // Estratégia 2: Usar iniciais
  withInitials: (firstName: string, lastName: string) => ({
    type: "initials",
    value: `${firstName[0]}${lastName[0]}`,
  }),

  // Estratégia 3: Usar cor de background com initials
  withColoredInitials: (name: string, colorClass: string) => ({
    type: "colored-initials",
    initials: name
      .split(" ")
      .map((n) => n[0])
      .join(""),
    color: colorClass, // ex: "bg-blue-600"
  }),

  // Estratégia 4: Usar gravatar ou outro serviço
  withGravatar: (email: string) => ({
    type: "gravatar",
    email: email,
  }),
};

/**
 * EXEMPLO 5: Integração futura com API
 * (quando adicionar dados dinâmicos do CMS ou banco de dados)
 */
export const apiIntegrationExample = {
  // Função helper para buscar dados da API
  async fetchTeamData() {
    // const response = await fetch('/api/team');
    // const departments: Department[] = await response.json();
    // return departments;
  },

  // Mutation para atualizar membro
  async updateMember(memberId: string, data: Partial<TeamMember>) {
    // const response = await fetch(`/api/team/members/${memberId}`, {
    //   method: 'PATCH',
    //   body: JSON.stringify(data),
    // });
    // return response.json();
  },

  // Query para buscar um departamento específico
  async fetchDepartment(departmentId: string) {
    // const response = await fetch(`/api/team/departments/${departmentId}`);
    // return response.json() as Promise<Department>;
  },
};

/**
 * EXEMPLO 6: Testes (viria em arquivo .test.tsx)
 */
export const testingExamples = `
// src/components/about/__tests__/MemberCard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemberCard } from '../MemberCard';

describe('MemberCard', () => {
  const mockMember = {
    id: 'test-1',
    name: 'Test User',
    position: 'Test Position',
    department: 'Test Dept',
  };

  it('should render member name and position', () => {
    render(<MemberCard member={mockMember} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Test Position')).toBeInTheDocument();
  });

  it('should open modal on click', async () => {
    const user = userEvent.setup();
    render(<MemberCard member={mockMember} />);
    await user.click(screen.getByRole('button'));
    // Assert modal is open
  });

  it('should be keyboard navigable', async () => {
    const user = userEvent.setup();
    render(<MemberCard member={mockMember} />);
    const button = screen.getByRole('button');
    button.focus();
    await user.keyboard('{Enter}');
    // Assert modal opens with keyboard
  });
});
`;
