export type FeatureId =
  | 'advanced-reports'
  | 'unlimited-compatibility'
  | 'business-numerology'
  | 'baby-name-analyzer'
  | 'pdf-export-branded'
  | 'ai-coach';

export interface FeatureFlag {
  id: FeatureId;
  label: string;
  description: string;
  icon: string;
  premium: boolean;
}

export const FEATURES: FeatureFlag[] = [
  {
    id: 'advanced-reports',
    label: 'Advanced Reports',
    description: 'In-depth analysis with detailed breakdowns',
    icon: '\u2B50',
    premium: true,
  },
  {
    id: 'unlimited-compatibility',
    label: 'Unlimited Compatibility',
    description: 'Compare unlimited profiles',
    icon: '\u2665\uFE0F',
    premium: true,
  },
  {
    id: 'business-numerology',
    label: 'Business Numerology',
    description: 'Company & product name analysis',
    icon: '\uD83D\uDCCA',
    premium: true,
  },
  {
    id: 'baby-name-analyzer',
    label: 'Baby Name Analysis',
    description: 'Find the perfect name for your baby',
    icon: '\uD83D\uDC76',
    premium: true,
  },
  {
    id: 'pdf-export-branded',
    label: 'PDF Export',
    description: 'Branded PDF reports without watermark',
    icon: '\uD83D\uDCC4',
    premium: true,
  },
  {
    id: 'ai-coach',
    label: 'AI Coach (Online)',
    description: 'Personalized AI numerology guidance',
    icon: '\uD83E\uDD16',
    premium: true,
  },
];

export const FEATURE_MAP: Record<FeatureId, FeatureFlag> = Object.fromEntries(
  FEATURES.map((f) => [f.id, f]),
) as any;

export function isPremiumFeature(id: FeatureId): boolean {
  return FEATURE_MAP[id]?.premium ?? false;
}
