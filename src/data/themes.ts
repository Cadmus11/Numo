export interface ThemeDefinition {
  id: string;
  name: string;
  type?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
  };
  feel: string[];
  description?: string;
  effects?: string[];
}

export const themes: ThemeDefinition[] = [
  {
    id: 'cosmic-purple',
    name: 'Cosmic Purple',
    type: 'Premium Default',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A855F7',
      accent: '#C084FC',
      background: '#0F0B1D',
      surface: '#1A162A',
      text: '#F8FAFC',
    },
    feel: ['Mystical', 'Spiritual', 'Premium', 'Modern'],
    description: "Perfect as NUMO's default theme.",
    effects: ['Animated stars', 'Nebula gradients'],
  },
  {
    id: 'celestial-gold',
    name: 'Celestial Gold',
    colors: {
      primary: '#F59E0B',
      secondary: '#FBBF24',
      accent: '#FCD34D',
      background: '#111827',
      surface: '#1F2937',
      text: '#F8FAFC',
    },
    feel: ['Wealth', 'Destiny', 'Luxury', 'Success'],
    description: 'Great for yearly forecasts.',
    effects: ['Gold shimmer cards', 'Subtle glow'],
  },
  {
    id: 'moonlight-silver',
    name: 'Moonlight Silver',
    colors: {
      primary: '#CBD5E1',
      secondary: '#94A3B8',
      accent: '#E2E8F0',
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F1F5F9',
    },
    feel: ['Calm', 'Elegant', 'Moon Energy', 'Night Reading'],
    effects: ['Moon phases background'],
  },
  {
    id: 'zodiac-blue',
    name: 'Zodiac Blue',
    colors: {
      primary: '#3B82F6',
      secondary: '#60A5FA',
      accent: '#93C5FD',
      background: '#0B1120',
      surface: '#111827',
      text: '#F8FAFC',
    },
    feel: ['Intelligent', 'Cosmic', 'Trustworthy'],
    description: 'Excellent for Chinese Zodiac pages.',
    effects: ['Constellation lines'],
  },
  {
    id: 'emerald-wisdom',
    name: 'Emerald Wisdom',
    colors: {
      primary: '#10B981',
      secondary: '#34D399',
      accent: '#6EE7B7',
      background: '#071A13',
      surface: '#0F2A1F',
      text: '#ECFDF5',
    },
    feel: ['Growth', 'Healing', 'Prosperity'],
    description: 'Perfect for personal development.',
    effects: ['Sacred geometry'],
  },
  {
    id: 'crimson-fate',
    name: 'Crimson Fate',
    colors: {
      primary: '#EF4444',
      secondary: '#F87171',
      accent: '#FCA5A5',
      background: '#190B0B',
      surface: '#2D1414',
      text: '#FEF2F2',
    },
    feel: ['Passion', 'Love', 'Relationships'],
    description: 'Ideal for compatibility mode.',
    effects: ['Heart constellation effects'],
  },
  {
    id: 'dragon-fire',
    name: 'Dragon Fire',
    colors: {
      primary: '#F97316',
      secondary: '#FB923C',
      accent: '#FDBA74',
      background: '#1C0F07',
      surface: '#2D1A0E',
      text: '#FFF7ED',
    },
    feel: ['Power', 'Energy', 'Chinese Zodiac'],
    description: 'Excellent for Dragon-year users.',
    effects: ['Dragon-scale textures'],
  },
  {
    id: 'ocean-oracle',
    name: 'Ocean Oracle',
    colors: {
      primary: '#06B6D4',
      secondary: '#22D3EE',
      accent: '#67E8F9',
      background: '#04151C',
      surface: '#0A222D',
      text: '#ECFEFF',
    },
    feel: ['Intuition', 'Flow', 'Clarity'],
    description: 'Perfect for daily readings.',
    effects: ['Flowing wave particles'],
  },
  {
    id: 'obsidian-black',
    name: 'Obsidian Black',
    colors: {
      primary: '#FFFFFF',
      secondary: '#D4D4D8',
      accent: '#A1A1AA',
      background: '#000000',
      surface: '#09090B',
      text: '#FAFAFA',
    },
    feel: ['AMOLED', 'Minimal', 'Professional'],
    description: 'Battery saver theme.',
    effects: ['Pure AMOLED UI'],
  },
  {
    id: 'rose-mystic',
    name: 'Rose Mystic',
    colors: {
      primary: '#EC4899',
      secondary: '#F472B6',
      accent: '#F9A8D4',
      background: '#180D15',
      surface: '#2A1420',
      text: '#FDF2F8',
    },
    feel: ['Love', 'Soul Connections', 'Feminine Energy'],
    description: 'Excellent for relationship reports.',
    effects: ['Soft aura effects'],
  },
  {
    id: 'ancient-jade',
    name: 'Ancient Jade',
    colors: {
      primary: '#14B8A6',
      secondary: '#2DD4BF',
      accent: '#5EEAD4',
      background: '#081312',
      surface: '#11211F',
      text: '#F0FDFA',
    },
    feel: ['Ancient Chinese Wisdom', 'Balance', 'Harmony'],
    description: 'Perfect for zodiac sections.',
    effects: ['Chinese cloud patterns'],
  },
  {
    id: 'solar-ascension',
    name: 'Solar Ascension',
    colors: {
      primary: '#EAB308',
      secondary: '#FACC15',
      accent: '#FDE047',
      background: '#17120A',
      surface: '#272110',
      text: '#FEFCE8',
    },
    feel: ['Enlightenment', 'Confidence', 'Leadership'],
    description: 'Great for Life Path and Destiny pages.',
    effects: ['Sun-ray gradients'],
  },
];
