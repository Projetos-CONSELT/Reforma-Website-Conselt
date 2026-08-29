# Arquitetura da Página "Sobre a CONSELT"

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── about/
│       ├── index.ts                 # Barrel export
│       ├── HeroSection.tsx           # Seção de apresentação institucional
│       ├── EssenceSection.tsx        # Seção de Missão, Visão e Valores
│       ├── EssenceCard.tsx           # Card individual (Missão/Visão/Valores)
│       ├── TeamSection.tsx           # Seção principal da equipe
│       ├── DepartmentSection.tsx     # Seção de uma diretoria
│       ├── MemberCard.tsx            # Card do membro
│       └── MemberModal.tsx           # Modal de detalhes do membro
│
├── lib/
│   ├── teamData.ts                  # Dados da equipe, interfaces TypeScript
│   └── aboutStyles.ts               # Constantes de estilos e acessibilidade
│
└── routes/
    └── sobre.tsx                    # Página principal (rota)
```

## 🎨 Componentes

### 1. **HeroSection**
- **Propósito**: Apresentação institucional com layout em duas colunas
- **Features**:
  - Imagem/placeholder arredondado com bordas azuis
  - Texto descritivo da empresa
  - Estatísticas visuais (6+ Diretorias, 50+ Profissionais)
  - Elemento decorativo com efeito blur

### 2. **EssenceSection**
- **Propósito**: Exibir Missão, Visão e Valores
- **Features**:
  - Grid de 3 cards responsivo
  - Ícones do lucide-react no topo
  - Efeito glassmorphism com hover
  - Linha decorativa animada

### 3. **EssenceCard**
- **Propósito**: Card interativo individual
- **Features**:
  - Ícone com gradiente de fundo
  - Transição suave e hover com elevação (scale)
  - Navegável via teclado (tabindex, keydown)
  - Aria-labels para acessibilidade

### 4. **TeamSection**
- **Propósito**: Container principal para toda a equipe
- **Features**:
  - Header com título e descrição
  - Mapeia e renderiza todas as diretorias

### 5. **DepartmentSection**
- **Propósito**: Agrupa membros por diretoria
- **Features**:
  - Header da diretoria com nome e descrição
  - Grid responsivo: 1 col (mobile) | 2 cols (tablet) | 4 cols (desktop)
  - Uso de `role="group"` e `aria-labelledby` para acessibilidade

### 6. **MemberCard**
- **Propósito**: Exibe informações resumidas do membro
- **Features**:
  - Avatar circular com iniciais em placeholder
  - Nome em negrito e cargo
  - Interativo: clique/Enter/Space para abrir modal
  - Hover com indicador visual

### 7. **MemberModal**
- **Propósito**: Lightbox/modal com detalhes completos
- **Features**:
  - Biografia resumida
  - Links de email e LinkedIn
  - Fechar com X ou clique fora
  - Backdrop com blur

## 📊 Estrutura de Dados

### Interfaces TypeScript

```typescript
interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image?: string;
  bio?: string;
  email?: string;
  linkedin?: string;
}

interface Department {
  id: string;
  name: string;
  description?: string;
  members: TeamMember[];
}

interface EssenceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
}
```

## 🎯 Requisitos Implementados

### ✅ Design & UX
- [x] Hero com duas colunas (imagem + texto)
- [x] Cores institucionais (azul #1a3a7a, #2b5ca8, #4a8bcb)
- [x] Tipografia moderna e clean
- [x] Cards interativos com hover e transições suaves
- [x] Efeito glassmorphism/sombra suave

### ✅ Funcionalidade
- [x] Grid dinâmico por diretoria (6 diretorias predefinidas)
- [x] Modal ao clicar no membro
- [x] Dados em arquivo separado `teamData.ts`
- [x] Componentização completa

### ✅ TypeScript
- [x] Interfaces bem definidas (Member, Department, EssenceItem)
- [x] Types exportados do `teamData.ts`
- [x] Props tipadas em todos os componentes

### ✅ Responsividade
- [x] Mobile-first approach
- [x] Breakpoints: mobile (1 col) | tablet (2 cols) | desktop (4 cols)
- [x] Padding e gaps responsivos
- [x] Textos escaláveis

### ✅ Performance
- [x] `React.memo` em componentes sem estado
- [x] Lazy loading preparado para imagens
- [x] Fallback com iniciais para avatares sem foto
- [x] Animações com CSS (transition, transform) - sem framer-motion

### ✅ Acessibilidade (WCAG 2.1 AA)
- [x] Cards navegáveis via teclado (tabindex, onKeyDown)
- [x] Aria-labels descritivos
- [x] Alt text para imagens
- [x] Contraste 4.5:1 (cores testadas)
- [x] Tags semânticas (section, article, h1-h6)
- [x] role="group" e aria-labelledby para agrupamento

### ✅ SEO
- [x] Head com título e meta descrição
- [x] og:title, og:description, og:type
- [x] Estrutura semântica com heading hierarchy

### ✅ Interações
- [x] Modal ao clicar no card do membro
- [x] Links para LinkedIn e email
- [x] Scroll suave (nativo do navegador)

## 🔧 Manutenção

### Adicionar novo membro
Edite `src/lib/teamData.ts` e adicione à array `teamDepartments`:

```typescript
{
  id: "novo-1",
  name: "Nome Completo",
  position: "Seu Cargo",
  department: "Sua Diretoria",
  bio: "Sua biografia",
  email: "seu.email@conselt.com",
  linkedin: "https://linkedin.com/in/seu-perfil",
}
```

### Adicionar nova diretoria
1. Crie novo objeto em `teamDepartments`
2. Adicione `id` único, `name` e `members`

### Customizar cores
Edite constantes em `CONSELT_COLORS` no `teamData.ts`

### Adicionar imagens dos membros
Adicione campo `image` com caminho para a foto (recomenda-se usar Next.js Image component em futuros melhoramentos)

## 🚀 Próximos Melhoramentos Sugeridos

1. **Next.js Image**: Substituir `<img>` por `<Image>` do next/image
2. **Paginação**: Adicionar paginação se houver muitos membros
3. **Filtro**: Permitir filtrar por diretoria
4. **Busca**: Adicionar busca por nome/cargo
5. **Dados do CMS**: Integrar com headless CMS (Contentful, Sanity, etc)
6. **Animações avançadas**: Considerar Framer Motion para sequências complexas
7. **Integração LinkedIn**: Buscar dados automaticamente via API
8. **Sistema de certificados**: Mostrar certificações e conquistas

## 📝 Notas Técnicas

- Projeto usa **TanStack Router** com geração automática de rotas
- **Tailwind CSS v4** com theme customization
- **Lucide React** para ícones SVG
- **TypeScript strict mode** habilitado
- Preparado para **lazy loading** de imagens futuro
- Compatível com **Lovable** (Git history preservation)
