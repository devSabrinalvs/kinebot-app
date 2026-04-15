import {colors} from '../theme';

export type RiskLevel = 'Aceitável' | 'Moderado' | 'Elevado' | 'Muito elevado' | 'Grave e iminente';

export interface AnalysisResult {
  label: RiskLevel;
  percentage: number;
  color: string;
}

export interface AEPReport {
  id: string;
  title: string;
  date: string;
  empresa: string;
  plantaIndustrial: string;
  setor: string;
  postoDeTrabalho: string;
  atividade: string;
  avaliador: string;
  dataAnalise: string;
  results: AnalysisResult[];
}

export const aepReports: AEPReport[] = [
  {
    id: '1',
    title: 'Análise AEP posto de trabalho 1',
    date: '20/04/2026',
    empresa: 'Empresa Alpha Ltda',
    plantaIndustrial: 'Planta Industrial Norte',
    setor: 'Produção',
    postoDeTrabalho: 'Posto de montagem A',
    atividade: 'Montagem de componentes',
    avaliador: 'João Silva',
    dataAnalise: '20/04/2026',
    results: [
      { label: 'Aceitável', percentage: 33, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 6, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 30, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 18, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 13, color: colors.risk.critical },
    ],
  },
  {
    id: '2',
    title: 'Análise AEP posto de trabalho 2',
    date: '15/04/2026',
    empresa: 'Empresa Beta S.A.',
    plantaIndustrial: 'Planta Industrial Sul',
    setor: 'Logística',
    postoDeTrabalho: 'Posto de triagem B',
    atividade: 'Separação de materiais',
    avaliador: 'Maria Souza',
    dataAnalise: '15/04/2026',
    results: [
      { label: 'Aceitável', percentage: 40, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 25, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 20, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 10, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 5, color: colors.risk.critical },
    ],
  },
  {
    id: '3',
    title: 'Análise AEP posto de trabalho 3',
    date: '14/04/2026',
    empresa: 'Empresa Gama Ind.',
    plantaIndustrial: 'Planta Industrial Leste',
    setor: 'Manutenção',
    postoDeTrabalho: 'Posto de reparo C',
    atividade: 'Reparo de equipamentos',
    avaliador: 'Carlos Lima',
    dataAnalise: '14/04/2026',
    results: [
      { label: 'Aceitável', percentage: 20, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 15, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 35, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 20, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 10, color: colors.risk.critical },
    ],
  },
  {
    id: '4',
    title: 'Análise AEP posto de trabalho 4',
    date: '13/04/2026',
    empresa: 'Empresa Delta Corp.',
    plantaIndustrial: 'Planta Industrial Oeste',
    setor: 'Qualidade',
    postoDeTrabalho: 'Posto de inspeção D',
    atividade: 'Inspeção de qualidade',
    avaliador: 'Ana Costa',
    dataAnalise: '13/04/2026',
    results: [
      { label: 'Aceitável', percentage: 50, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 20, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 15, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 10, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 5, color: colors.risk.critical },
    ],
  },
  {
    id: '5',
    title: 'Análise AEP posto de trabalho 5',
    date: '09/04/2026',
    empresa: 'Empresa Epsilon Ltda',
    plantaIndustrial: 'Planta Industrial Central',
    setor: 'Expedição',
    postoDeTrabalho: 'Posto de embalagem E',
    atividade: 'Embalagem de produtos',
    avaliador: 'Roberto Mendes',
    dataAnalise: '09/04/2026',
    results: [
      { label: 'Aceitável', percentage: 30, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 30, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 20, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 15, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 5, color: colors.risk.critical },
    ],
  },
  {
    id: '6',
    title: 'Análise AEP posto de trabalho 6',
    date: '09/04/2026',
    empresa: 'Empresa Zeta S.A.',
    plantaIndustrial: 'Planta Industrial Norte 2',
    setor: 'Armazenagem',
    postoDeTrabalho: 'Posto de estoque F',
    atividade: 'Movimentação de cargas',
    avaliador: 'Fernanda Rocha',
    dataAnalise: '09/04/2026',
    results: [
      { label: 'Aceitável', percentage: 25, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 20, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 25, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 20, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 10, color: colors.risk.critical },
    ],
  },
  {
    id: '7',
    title: 'Análise AEP posto de trabalho 7',
    date: '08/04/2026',
    empresa: 'Empresa Eta Ind.',
    plantaIndustrial: 'Planta Industrial Sul 2',
    setor: 'Administração',
    postoDeTrabalho: 'Posto administrativo G',
    atividade: 'Atividades administrativas',
    avaliador: 'Paulo Neves',
    dataAnalise: '08/04/2026',
    results: [
      { label: 'Aceitável', percentage: 60, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 20, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 10, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 7, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 3, color: colors.risk.critical },
    ],
  },
  {
    id: '8',
    title: 'Análise AEP posto de trabalho 8',
    date: '07/04/2026',
    empresa: 'Empresa Theta Corp.',
    plantaIndustrial: 'Planta Industrial Leste 2',
    setor: 'Segurança',
    postoDeTrabalho: 'Posto de vigilância H',
    atividade: 'Monitoramento de área',
    avaliador: 'Luciana Ferreira',
    dataAnalise: '07/04/2026',
    results: [
      { label: 'Aceitável', percentage: 45, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 25, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 15, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 10, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 5, color: colors.risk.critical },
    ],
  },
  {
    id: '9',
    title: 'Análise AEP posto de trabalho 9',
    date: '06/04/2026',
    empresa: 'Empresa Iota Ltda',
    plantaIndustrial: 'Planta Industrial Oeste 2',
    setor: 'TI',
    postoDeTrabalho: 'Posto de suporte I',
    atividade: 'Suporte técnico',
    avaliador: 'Marcos Oliveira',
    dataAnalise: '06/04/2026',
    results: [
      { label: 'Aceitável', percentage: 55, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 25, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 10, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 7, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 3, color: colors.risk.critical },
    ],
  },
  {
    id: '10',
    title: 'Análise AEP posto de trabalho 10',
    date: '05/04/2026',
    empresa: 'Empresa Kappa S.A.',
    plantaIndustrial: 'Planta Industrial Central 2',
    setor: 'RH',
    postoDeTrabalho: 'Posto de atendimento J',
    atividade: 'Atendimento ao colaborador',
    avaliador: 'Patrícia Alves',
    dataAnalise: '05/04/2026',
    results: [
      { label: 'Aceitável', percentage: 65, color: colors.risk.acceptable },
      { label: 'Moderado', percentage: 15, color: colors.risk.moderate },
      { label: 'Elevado', percentage: 10, color: colors.risk.high },
      { label: 'Muito elevado', percentage: 7, color: colors.risk.veryHigh },
      { label: 'Grave e iminente', percentage: 3, color: colors.risk.critical },
    ],
  },
];
