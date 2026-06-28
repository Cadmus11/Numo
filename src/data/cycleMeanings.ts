export interface YearMeaning {
  number: number;
  title: string;
  theme: string;
  opportunities: string[];
  challenges: string[];
  recommendedFocus: string;
}

export interface MonthMeaning {
  number: number;
  title: string;
  energy: string;
  growthAreas: string[];
  warnings: string[];
}

export interface DayMeaning {
  number: number;
  title: string;
  energy: string;
  bestActivities: string[];
  forecast: string;
}

export const personalYearMeanings: Record<number, YearMeaning> = {
  1: {
    number: 1,
    title: 'Year of Beginnings',
    theme: 'New beginnings, independence, leadership, fresh starts',
    opportunities: [
      'Start new projects and ventures',
      'Take initiative in all areas of life',
      'Step into leadership roles',
      'Plant seeds for the next 9-year cycle',
    ],
    challenges: [
      'Overcoming fear of the unknown',
      'Avoiding impulsive decisions',
      'Balancing independence with support',
      'Patience with slow-starting projects',
    ],
    recommendedFocus:
      'Focus on bold action and new beginnings. This is your year to take the lead, start fresh, and set the direction for the next nine years.',
  },
  2: {
    number: 2,
    title: 'Year of Partnership',
    theme: 'Cooperation, patience, relationships, balance',
    opportunities: [
      'Build meaningful partnerships',
      'Develop patience and diplomacy',
      'Strengthen existing relationships',
      'Create harmony in your environment',
    ],
    challenges: [
      'Avoiding over-dependence on others',
      'Managing heightened sensitivity',
      'Navigating conflicts diplomatically',
      'Waiting for things to unfold naturally',
    ],
    recommendedFocus:
      'Focus on relationships and cooperation. This is a year to build bridges, practice patience, and let things develop at their natural pace.',
  },
  3: {
    number: 3,
    title: 'Year of Creativity',
    theme: 'Self-expression, creativity, social connection, joy',
    opportunities: [
      'Express yourself creatively',
      'Expand your social circle',
      'Communicate your ideas',
      'Find joy in self-expression',
    ],
    challenges: [
      'Avoiding scattered energy',
      'Staying focused on priorities',
      'Not taking criticism personally',
      'Balancing social life with productivity',
    ],
    recommendedFocus:
      'Focus on creative expression and social connections. Let your light shine and share your gifts with the world.',
  },
  4: {
    number: 4,
    title: 'Year of Building',
    theme: 'Hard work, discipline, stability, practical progress',
    opportunities: [
      'Build solid foundations',
      'Develop consistent routines',
      'Make practical progress on goals',
      'Create lasting structures',
    ],
    challenges: [
      'Avoiding burnout from overwork',
      'Staying flexible amid routines',
      'Patience with slow, steady progress',
      'Resisting the temptation to cut corners',
    ],
    recommendedFocus:
      'Focus on hard work and building foundations. This is a year to get practical, organized, and disciplined.',
  },
  5: {
    number: 5,
    title: 'Year of Change',
    theme: 'Freedom, adventure, change, expansion',
    opportunities: [
      'Embrace positive changes',
      'Travel and explore',
      'Learn new skills and expand horizons',
      'Break free from limiting patterns',
    ],
    challenges: [
      'Managing impulsiveness',
      'Avoiding over-commitment',
      'Staying grounded amid change',
      'Handling unpredictability',
    ],
    recommendedFocus:
      'Focus on embracing change and seeking adventure. Say yes to new opportunities and expand your horizons.',
  },
  6: {
    number: 6,
    title: 'Year of Family',
    theme: 'Family, responsibility, community, service',
    opportunities: [
      'Strengthen family bonds',
      'Create a beautiful home environment',
      'Serve your community',
      'Heal family relationships',
    ],
    challenges: [
      'Avoiding over-responsibility',
      'Setting healthy boundaries',
      'Balancing family and personal needs',
      'Not becoming a martyr',
    ],
    recommendedFocus:
      'Focus on family, home, and service. Nurture your closest relationships and create harmony in your environment.',
  },
  7: {
    number: 7,
    title: 'Year of Reflection',
    theme: 'Inner wisdom, spirituality, analysis, rest',
    opportunities: [
      'Deepen spiritual practice',
      'Study and research',
      'Take time for reflection',
      'Develop inner wisdom',
    ],
    challenges: [
      'Avoiding isolation',
      'Balancing introspection with connection',
      'Not becoming overly critical',
      'Trusting your intuition',
    ],
    recommendedFocus:
      'Focus on inner growth and reflection. This is a year to rest, recharge, and connect with your deeper wisdom.',
  },
  8: {
    number: 8,
    title: 'Year of Abundance',
    theme: 'Success, achievement, power, financial growth',
    opportunities: [
      'Achieve career and financial goals',
      'Step into leadership',
      'Build wealth and abundance',
      'Make significant progress',
    ],
    challenges: [
      'Balancing material and spiritual',
      'Managing power responsibly',
      'Avoiding workaholism',
      'Staying grounded in success',
    ],
    recommendedFocus:
      'Focus on achievement and abundance. This is your year to reap rewards and make significant progress on your goals.',
  },
  9: {
    number: 9,
    title: 'Year of Completion',
    theme: 'Completion, release, transformation, service',
    opportunities: [
      'Complete projects and cycles',
      'Release what no longer serves you',
      'Serve others meaningfully',
      'Prepare for the next cycle',
    ],
    challenges: [
      'Letting go gracefully',
      'Handling endings and transitions',
      'Avoiding melancholy',
      'Trusting the process of release',
    ],
    recommendedFocus:
      'Focus on completion and release. Clear away the old to make space for the new cycle beginning next year.',
  },
};

export const personalMonthMeanings: Record<number, MonthMeaning> = {
  1: {
    number: 1,
    title: 'Month of Action',
    energy: 'High energy for starting new things. A time for initiative and leadership.',
    growthAreas: [
      'Taking independent action',
      'Starting new projects',
      'Leading others',
      'Making decisions',
    ],
    warnings: [
      'Avoid rushing into things',
      "Don't alienate others with aggression",
      'Balance action with planning',
    ],
  },
  2: {
    number: 2,
    title: 'Month of Connection',
    energy: 'A gentle, cooperative energy perfect for building relationships and partnerships.',
    growthAreas: [
      'Building relationships',
      'Practicing patience',
      'Developing diplomacy',
      'Listening to others',
    ],
    warnings: [
      'Avoid over-dependency',
      "Don't suppress your needs",
      'Maintain boundaries while being kind',
    ],
  },
  3: {
    number: 3,
    title: 'Month of Expression',
    energy: 'Creative and social energy flows freely. Perfect for self-expression and connection.',
    growthAreas: ['Creative projects', 'Social activities', 'Communication', 'Having fun'],
    warnings: [
      'Avoid spreading too thin',
      "Don't neglect responsibilities",
      'Stay focused on priorities',
    ],
  },
  4: {
    number: 4,
    title: 'Month of Structure',
    energy: 'A grounded, practical energy for building systems and establishing routines.',
    growthAreas: [
      'Organization and planning',
      'Building habits',
      'Financial management',
      'Completing tasks',
    ],
    warnings: ['Avoid rigidity', "Don't overwork yourself", 'Stay open to new approaches'],
  },
  5: {
    number: 5,
    title: 'Month of Change',
    energy: 'Dynamic and unpredictable energy. Expect change, excitement, and new opportunities.',
    growthAreas: [
      'Embracing change',
      'Taking calculated risks',
      'Travel and exploration',
      'Learning new things',
    ],
    warnings: ['Avoid impulsive decisions', "Don't over-commit", 'Stay grounded amid excitement'],
  },
  6: {
    number: 6,
    title: 'Month of Nurturing',
    energy: 'Warm, family-oriented energy focused on home, relationships, and service.',
    growthAreas: ['Family time', 'Home improvement', 'Community service', 'Healing relationships'],
    warnings: ['Avoid taking on too much', "Don't neglect self-care", 'Set healthy boundaries'],
  },
  7: {
    number: 7,
    title: 'Month of Reflection',
    energy: 'Quiet, introspective energy perfect for rest, research, and spiritual growth.',
    growthAreas: [
      'Rest and recharge',
      'Study and research',
      'Meditation and reflection',
      'Solo time',
    ],
    warnings: [
      'Avoid isolation extremes',
      "Don't over-analyze",
      'Balance solitude with connection',
    ],
  },
  8: {
    number: 8,
    title: 'Month of Achievement',
    energy: 'Powerful, ambitious energy for career advancement and material success.',
    growthAreas: ['Career advancement', 'Financial planning', 'Leadership', 'Goal achievement'],
    warnings: [
      'Avoid workaholism',
      "Don't prioritize money over people",
      'Stay ethical in dealings',
    ],
  },
  9: {
    number: 9,
    title: 'Month of Release',
    energy: 'A time of completion, letting go, and preparing for new beginnings.',
    growthAreas: [
      'Letting go of what no longer serves',
      'Completing projects',
      'Service to others',
      'Forgiveness',
    ],
    warnings: [
      'Avoid holding on too tightly',
      "Don't rush into new things",
      'Process emotions fully',
    ],
  },
};

export const personalDayMeanings: Record<number, DayMeaning> = {
  1: {
    number: 1,
    title: 'Day of Initiative',
    energy: 'Bold, assertive energy perfect for taking action and starting something new.',
    bestActivities: [
      'Start a new project',
      'Take the lead on something',
      'Make important decisions',
      'Assert your needs',
    ],
    forecast:
      'A powerful day for taking initiative. Step forward with confidence and trust your ability to lead.',
  },
  2: {
    number: 2,
    title: 'Day of Connection',
    energy: 'Soft, receptive energy ideal for collaboration and building bonds.',
    bestActivities: [
      'Connect with loved ones',
      'Collaborate on projects',
      'Practice patience',
      'Listen and observe',
    ],
    forecast:
      'A gentle day focused on relationships. Take time to connect with others and practice patience.',
  },
  3: {
    number: 3,
    title: 'Day of Joy',
    energy: 'Light, creative, and social energy perfect for fun and self-expression.',
    bestActivities: ['Creative projects', 'Social gatherings', 'Express yourself', 'Have fun'],
    forecast:
      'A joyful day for creativity and connection. Share your light with others and embrace spontaneity.',
  },
  4: {
    number: 4,
    title: 'Day of Work',
    energy: 'Grounded, practical energy for getting things done and building structure.',
    bestActivities: [
      'Organize your space',
      'Complete tasks',
      'Work on long-term projects',
      'Handle finances',
    ],
    forecast:
      'A productive day for practical work. Focus on building solid foundations and completing responsibilities.',
  },
  5: {
    number: 5,
    title: 'Day of Adventure',
    energy: 'Dynamic, changeable energy that brings opportunities for adventure and growth.',
    bestActivities: ['Try something new', 'Be spontaneous', 'Take a calculated risk', 'Explore'],
    forecast:
      'An adventurous day full of possibility. Embrace change and say yes to unexpected opportunities.',
  },
  6: {
    number: 6,
    title: 'Day of Love',
    energy: 'Warm, nurturing energy centered on family, home, and heartfelt connections.',
    bestActivities: [
      'Spend time with family',
      'Beautify your home',
      'Help someone in need',
      'Express love',
    ],
    forecast:
      'A day for love and nurturing. Focus on your loved ones and create beauty in your surroundings.',
  },
  7: {
    number: 7,
    title: 'Day of Stillness',
    energy: 'Quiet, contemplative energy inviting rest, reflection, and inner connection.',
    bestActivities: ['Rest and recharge', 'Meditate or pray', 'Read and study', 'Spend time alone'],
    forecast:
      'A peaceful day for inner work. Take time to rest, reflect, and reconnect with your deeper self.',
  },
  8: {
    number: 8,
    title: 'Day of Power',
    energy: 'Strong, ambitious energy for achieving goals and making things happen.',
    bestActivities: ['Pursue career goals', 'Make financial decisions', 'Take charge', 'Negotiate'],
    forecast:
      'A powerful day for achievement. Use your executive energy to make progress on important goals.',
  },
  9: {
    number: 9,
    title: 'Day of Release',
    energy: 'Compassionate energy of completion, letting go, and service to others.',
    bestActivities: [
      'Let go of what no longer serves',
      'Forgive someone',
      'Volunteer or help others',
      'Complete a cycle',
    ],
    forecast:
      'A day of completion and release. Let go with grace and open your heart to compassion.',
  },
};
