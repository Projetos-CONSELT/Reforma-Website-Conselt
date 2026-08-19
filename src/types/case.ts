export type ServiceCategory =
  | "Website"
  | "Software"
  | "Aplicativo"
  | "Projeto Elétrico"
  | "Luminotécnico"
  | "Automação";

export type SegmentCategory =
  | "Engenharia Ambiental"
  | "Pesquisa & Laboratórios"
  | "Construção Civil"
  | "Educação"
  | "Indústria & Energia"
  | "Comércio & Serviços";

export type ChallengeTypeCategory =
  | "Presença Digital"
  | "Comunicação Técnica"
  | "Eficiência Energética"
  | "Automação de Processos"
  | "Software & Gestão"
  | "Aplicativos Mobile";

export interface MandatoryBlock {
  bloco: string;
  pergunta: string;
  conteudo: string;
  detalhes?: string[];
}

export interface MandatoryTemplate {
  contexto: MandatoryBlock;
  desafio: MandatoryBlock;
  objetivo: MandatoryBlock;
  diagnostico: MandatoryBlock;
  solucao: MandatoryBlock;
  processo: MandatoryBlock;
  resultado: MandatoryBlock;
  proximaAcao: MandatoryBlock & {
    ctaText: string;
    ctaLink: string;
    whatsappMessage: string;
  };
}

export interface CaseItem {
  id: string;
  client: string;
  service: ServiceCategory;
  segment: SegmentCategory;
  challengeType: ChallengeTypeCategory;
  image?: string;
  badgeTag?: string;
  isPlaceholder?: boolean;
  cardData: {
    desafio: string;
    solucao: string;
    resultado: string;
  };
  details: MandatoryTemplate;
}
