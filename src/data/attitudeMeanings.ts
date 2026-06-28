export interface AttitudeMeaning {
  number: number;
  title: string;
  firstImpressions: string;
  publicBehavior: string;
  naturalOutlook: string;
}

export const attitudeMeanings: Record<number, AttitudeMeaning> = {
  1: {
    number: 1,
    title: 'The Confident Leader',
    firstImpressions:
      'You come across as confident, assertive, and someone who knows what they want. People notice your presence when you enter a room.',
    publicBehavior:
      'You take charge in social situations and naturally gravitate toward leadership roles. You are direct in your communication.',
    naturalOutlook:
      'You see life as a series of challenges to overcome and opportunities to lead. You are optimistic about your ability to shape your destiny.',
  },
  2: {
    number: 2,
    title: 'The Gentle Diplomat',
    firstImpressions:
      'You appear warm, approachable, and sensitive. People feel comfortable opening up to you because of your gentle energy.',
    publicBehavior:
      'You are cooperative and considerate, often putting others at ease. You avoid confrontation and seek harmonious interactions.',
    naturalOutlook:
      'You see the world through the lens of relationships and connection. You believe in cooperation and finding common ground.',
  },
  3: {
    number: 3,
    title: 'The Charming Optimist',
    firstImpressions:
      'You come across as friendly, creative, and full of positive energy. People are drawn to your charisma and sense of humor.',
    publicBehavior:
      'You are the social butterfly who brightens any gathering. You express yourself freely and love to entertain and inspire others.',
    naturalOutlook:
      'You see life as a beautiful adventure full of creative possibilities. Your optimism is contagious and uplifting.',
  },
  4: {
    number: 4,
    title: 'The Steady Worker',
    firstImpressions:
      'You appear serious, reliable, and grounded. People trust you instinctively because of your practical and stable energy.',
    publicBehavior:
      'You are reserved but dependable. You prefer meaningful conversations over small talk and follow through on your commitments.',
    naturalOutlook:
      'You see life as a construction project that requires patience, hard work, and careful planning. You value substance over style.',
  },
  5: {
    number: 5,
    title: 'The Dynamic Adventurer',
    firstImpressions:
      'You come across as energetic, curious, and adventurous. People sense your love for freedom and excitement.',
    publicBehavior:
      'You are spontaneous and engaging, always up for trying something new. Your enthusiasm for life is infectious.',
    naturalOutlook:
      'You see life as an exciting journey full of possibilities. You embrace change and believe variety is the spice of life.',
  },
  6: {
    number: 6,
    title: 'The Caring Nurturer',
    firstImpressions:
      'You appear warm, responsible, and nurturing. People feel a sense of safety and care in your presence.',
    publicBehavior:
      'You naturally take care of others and create harmonious environments. You are the person people turn to for support and advice.',
    naturalOutlook:
      'You see life through the heart. You believe in love, family, community, and taking care of those around you.',
  },
  7: {
    number: 7,
    title: 'The Wise Thinker',
    firstImpressions:
      'You come across as thoughtful, intelligent, and somewhat reserved. People sense your depth and analytical nature.',
    publicBehavior:
      'You are selective in social situations, preferring deep conversations over casual chatter. You observe more than you participate.',
    naturalOutlook:
      'You see life as a mystery to be understood. You believe in the power of knowledge, analysis, and spiritual insight.',
  },
  8: {
    number: 8,
    title: 'The Powerful Executive',
    firstImpressions:
      'You project authority, ambition, and capability. People immediately sense your drive and executive presence.',
    publicBehavior:
      'You command attention in professional settings and naturally take control of situations. You are results-oriented and decisive.',
    naturalOutlook:
      'You see life as a arena for achievement and mastery. You believe in the power of hard work, strategy, and material success.',
  },
  9: {
    number: 9,
    title: 'The Compassionate Visionary',
    firstImpressions:
      'You come across as wise, compassionate, and broad-minded. People feel your genuine care for humanity.',
    publicBehavior:
      'You are accepting and inclusive with everyone. You inspire others through your vision and your commitment to making a difference.',
    naturalOutlook:
      'You see life from a global perspective. You believe in service, compassion, and the interconnectedness of all beings.',
  },
  11: {
    number: 11,
    title: 'The Inspired Visionary',
    firstImpressions:
      'You have a magnetic, almost electric presence. People sense there is something special and inspired about you.',
    publicBehavior:
      'You are inspiring and intuitive, often saying exactly what people need to hear. Your presence feels meaningful and significant.',
    naturalOutlook:
      'You see life as a spiritual journey of awakening. You believe in the power of intuition, inspiration, and higher consciousness.',
  },
  22: {
    number: 22,
    title: 'The Practical Visionary',
    firstImpressions:
      'You come across as capable, visionary, and grounded. People sense you have both big dreams and the ability to achieve them.',
    publicBehavior:
      'You combine visionary ideas with practical action. People respect your ability to turn dreams into reality.',
    naturalOutlook:
      'You see life as an opportunity to build something meaningful. You believe grand visions can be manifested through practical action.',
  },
};
