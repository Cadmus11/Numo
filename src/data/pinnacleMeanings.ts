export interface PinnacleMeaning {
  number: number;
  title: string;
  opportunities: string[];
  challenges: string[];
  careerThemes: string[];
  relationshipThemes: string[];
}

export const pinnacleMeanings: Record<number, PinnacleMeaning> = {
  1: {
    number: 1,
    title: 'The Pinnacle of Independence',
    opportunities: [
      'Take leadership roles and initiatives',
      'Develop self-confidence and assertiveness',
      'Start new ventures and projects',
      'Establish your independence',
    ],
    challenges: [
      'Overcoming self-doubt and insecurity',
      'Learning to lead without dominating',
      'Balancing independence with collaboration',
      'Resisting the temptation to isolate',
    ],
    careerThemes: ['Leadership positions', 'Entrepreneurial ventures', 'Independent contracting', 'Pioneering new approaches'],
    relationshipThemes: ['Learning to be yourself in relationships', 'Balancing partnership with independence', 'Attracting partners who respect your autonomy'],
  },
  2: {
    number: 2,
    title: 'The Pinnacle of Cooperation',
    opportunities: [
      'Build meaningful partnerships',
      'Develop patience and diplomacy',
      'Cultivate emotional intelligence',
      'Create harmonious environments',
    ],
    challenges: [
      'Avoiding excessive dependency on others',
      'Learning to assert your own needs',
      'Managing sensitivity to criticism',
      'Finding balance in relationships',
    ],
    careerThemes: ['Collaborative projects', 'Team leadership', 'Mediation and diplomacy', 'Support and service roles'],
    relationshipThemes: ['Deep partnership building', 'Learning compromise', 'Developing emotional intimacy'],
  },
  3: {
    number: 3,
    title: 'The Pinnacle of Creativity',
    opportunities: [
      'Express yourself creatively',
      'Develop communication skills',
      'Build social connections',
      'Find joy in self-expression',
    ],
    challenges: [
      'Overcoming fear of judgment',
      'Focusing creative energy productively',
      'Avoiding superficiality',
      'Balancing social life with work',
    ],
    careerThemes: ['Creative arts', 'Writing and publishing', 'Public speaking', 'Entertainment and media'],
    relationshipThemes: ['Expressive and joyful partnerships', 'Creative collaboration', 'Social connection through shared interests'],
  },
  4: {
    number: 4,
    title: 'The Pinnacle of Building',
    opportunities: [
      'Create stable foundations',
      'Develop practical skills',
      'Build lasting systems and structures',
      'Establish security and order',
    ],
    challenges: [
      'Avoiding rigidity and stubbornness',
      'Learning to adapt to change',
      'Balancing work with rest',
      'Not getting stuck in routines',
    ],
    careerThemes: ['Construction and engineering', 'Management and administration', 'Financial planning', 'System building'],
    relationshipThemes: ['Building stable home life', 'Commitment and reliability', 'Creating traditions and routines together'],
  },
  5: {
    number: 5,
    title: 'The Pinnacle of Freedom',
    opportunities: [
      'Embrace change and adventure',
      'Expand your horizons through travel',
      'Develop versatility and adaptability',
      'Experience personal freedom',
    ],
    challenges: [
      'Avoiding commitment phobia',
      'Learning responsibility with freedom',
      'Managing impulsive tendencies',
      'Finding stability within change',
    ],
    careerThemes: ['Travel and tourism', 'Sales and marketing', 'Media and communications', 'Entrepreneurial ventures'],
    relationshipThemes: ['Freedom within partnership', 'Adventurous relationships', 'Learning commitment without confinement'],
  },
  6: {
    number: 6,
    title: 'The Pinnacle of Service',
    opportunities: [
      'Nurture and care for others',
      'Build community and family',
      'Develop artistic talents',
      'Create beauty in your environment',
    ],
    challenges: [
      'Avoiding self-sacrifice and martyrdom',
      'Setting healthy boundaries',
      'Balancing giving with receiving',
      'Not becoming overly controlling',
    ],
    careerThemes: ['Healthcare and healing', 'Teaching and counseling', 'Arts and design', 'Community service'],
    relationshipThemes: ['Devoted partnership', 'Family building', 'Creating a beautiful and harmonious home'],
  },
  7: {
    number: 7,
    title: 'The Pinnacle of Wisdom',
    opportunities: [
      'Deepen your knowledge and understanding',
      'Develop spiritual awareness',
      'Cultivate inner wisdom',
      'Pursue research and analysis',
    ],
    challenges: [
      'Avoiding isolation and withdrawal',
      'Balancing solitude with connection',
      'Not becoming overly intellectual',
      'Sharing wisdom with others',
    ],
    careerThemes: ['Research and analysis', 'Spiritual teaching', 'Technology and science', 'Academic pursuits'],
    relationshipThemes: ['Intellectual partnership', 'Deep, meaningful connections', 'Respecting each others need for solitude'],
  },
  8: {
    number: 8,
    title: 'The Pinnacle of Achievement',
    opportunities: [
      'Achieve material success',
      'Develop executive leadership',
      'Build wealth and influence',
      'Make a significant impact',
    ],
    challenges: [
      'Balancing material and spiritual values',
      'Avoiding workaholism',
      'Managing power responsibly',
      'Staying grounded in success',
    ],
    careerThemes: ['Executive leadership', 'Finance and investment', 'Business ownership', 'Legal and political roles'],
    relationshipThemes: ['Power partnerships', 'Building wealth together', 'Learning to prioritize relationships over money'],
  },
  9: {
    number: 9,
    title: 'The Pinnacle of Completion',
    opportunities: [
      'Serve humanity in meaningful ways',
      'Develop universal compassion',
      'Complete major life cycles',
      'Share wisdom and experience',
    ],
    challenges: [
      'Learning to let go gracefully',
      'Avoiding martyrdom',
      'Managing overwhelming empathy',
      'Finding personal joy in service',
    ],
    careerThemes: ['Humanitarian work', 'Arts and entertainment', 'Teaching and mentoring', 'International relations'],
    relationshipThemes: ['Unconditional love', 'Letting go of relationships that have run their course', 'Broader, more inclusive connections'],
  },
  11: {
    number: 11,
    title: 'The Pinnacle of Illumination',
    opportunities: [
      'Develop spiritual gifts',
      'Inspire others through vision',
      'Channel creative inspiration',
      'Awaken to higher consciousness',
    ],
    challenges: [
      'Managing extreme sensitivity',
      'Staying grounded',
      'Avoiding spiritual bypassing',
      'Handling intense energy',
    ],
    careerThemes: ['Spiritual leadership', 'Creative arts', 'Healing professions', 'Inspirational speaking'],
    relationshipThemes: ['Soulmate connections', 'Spiritual partnership', 'Navigating intense emotional bonds'],
  },
  22: {
    number: 22,
    title: 'The Pinnacle of Master Building',
    opportunities: [
      'Build something of lasting value',
      'Manifest grand visions',
      'Create systems that serve many',
      'Combine vision with practical action',
    ],
    challenges: [
      'Handling enormous responsibility',
      'Avoiding burnout',
      'Finding support for your vision',
      'Staying grounded in practicality',
    ],
    careerThemes: ['Large-scale project leadership', 'Organizational building', 'Global initiatives', 'Visionary entrepreneurship'],
    relationshipThemes: ['Building a legacy together', 'Partnership as co-creation', 'Supporting each others grand visions'],
  },
};
