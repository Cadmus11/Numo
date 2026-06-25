export type LifePathNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

export interface LifePathMeaning {
  number: LifePathNumber;
  label: string;
  title: string;
  corePersonality: string;
  strengths: string[];
  weaknesses: string[];
  careerTendencies: string[];
  lifeLessons: string[];
  relationshipStyle: string;
  compatibleNumbers: string;
}

export const lifePathMeanings: Record<LifePathNumber, LifePathMeaning> = {
  1: {
    number: 1,
    label: 'The Leader',
    title: 'Pioneer, Innovator, Independent',
    corePersonality:
      'You are a natural-born leader with a strong drive to carve your own path. Independent and ambitious, you thrive when you can take initiative and create something new. Your pioneering spirit pushes you to explore uncharted territory and inspire others through your courage and determination.',
    strengths: [
      'Natural leadership ability',
      'Highly ambitious and driven',
      'Independent and self-reliant',
      'Creative and innovative thinker',
      'Courageous in the face of challenges',
    ],
    weaknesses: [
      'Can be domineering or bossy',
      'Tendency toward impatience',
      'Struggles with collaboration',
      'May come across as arrogant',
      'Difficulty delegating tasks',
    ],
    careerTendencies: [
      'Entrepreneurship and business ownership',
      'Executive and management roles',
      'Inventor or research and development',
      'Military or law enforcement leadership',
      'Independent consultant or coach',
    ],
    lifeLessons: [
      'Learn to balance independence with teamwork',
      'Develop patience with slower-paced people',
      'Channel ambition without trampling others',
      'Embrace vulnerability as a strength',
    ],
    relationshipStyle:
      'You are passionate and protective in relationships, but need a partner who respects your independence. You seek someone who can match your energy and ambition while giving you space to pursue your goals. You express love through action and provision.',
    compatibleNumbers: '2, 3, 5, 6',
  },
  2: {
    number: 2,
    label: 'The Diplomat',
    title: 'Peacemaker, Partner, Sensitive Soul',
    corePersonality:
      'You are a natural diplomat with a gift for bringing people together. Your sensitivity and intuition allow you to read situations and people with remarkable accuracy. You thrive in partnerships and collaborative environments where your mediating skills can shine.',
    strengths: [
      'Exceptional diplomacy and tact',
      'Deep empathy and intuition',
      'Excellent collaborator and team player',
      'Detail-oriented and patient',
      'Natural peacemaker in conflicts',
    ],
    weaknesses: [
      'Tendency to be overly sensitive',
      'Struggles with indecisiveness',
      'Can be overly dependent on others',
      'Avoids confrontation at all costs',
      'May suppress own needs for harmony',
    ],
    careerTendencies: [
      'Counseling and therapy',
      'Diplomacy and international relations',
      'Human resources and mediation',
      'Design and artistic pursuits',
      'Customer service and support roles',
    ],
    lifeLessons: [
      'Develop assertiveness and self-worth',
      'Learn to make decisions with confidence',
      'Balance giving to others with self-care',
      'Trust your intuition in all matters',
    ],
    relationshipStyle:
      'You are a devoted and nurturing partner who craves deep emotional connection. You thrive in harmonious relationships and will go to great lengths to maintain peace. You need a partner who appreciates your sensitivity and offers emotional security.',
    compatibleNumbers: '1, 4, 6, 8, 9',
  },
  3: {
    number: 3,
    label: 'The Creative',
    title: 'Artist, Communicator, Optimist',
    corePersonality:
      'You are a vibrant creative force with a gift for self-expression. Your optimism and charm draw people to you, and your natural creativity seeks an outlet in art, writing, speaking, or performance. You see the world through a lens of possibility and inspiration.',
    strengths: [
      'Highly creative and imaginative',
      'Excellent communicator and storyteller',
      'Charismatic and socially engaging',
      'Optimistic and uplifting presence',
      'Versatile and adaptable',
    ],
    weaknesses: [
      'Can be scattered and unfocused',
      'Tendency toward superficiality',
      'Struggles with criticism',
      'May lack discipline and follow-through',
      'Can be overly dramatic',
    ],
    careerTendencies: [
      'Writer, author, or journalist',
      'Artist, musician, or performer',
      'Public speaking or communications',
      'Advertising and marketing',
      'Design and creative direction',
    ],
    lifeLessons: [
      'Channel creativity with discipline',
      'Develop depth alongside breadth',
      'Learn to handle criticism constructively',
      'Balance social life with productive work',
    ],
    relationshipStyle:
      'You are a lively, expressive partner who brings joy and excitement to relationships. You need a partner who appreciates your social nature and gives you freedom to express yourself. Romance for you is about shared experiences and creative connection.',
    compatibleNumbers: '1, 5, 6, 7, 9',
  },
  4: {
    number: 4,
    label: 'The Builder',
    title: 'Practical, Disciplined, Dependable',
    corePersonality:
      'You are the foundation upon which great things are built. Practical, disciplined, and hardworking, you bring stability and order to every endeavor. Your methodical approach ensures that nothing is left to chance, and your reliability makes you indispensable.',
    strengths: [
      'Extremely reliable and trustworthy',
      'Practical and grounded thinking',
      'Strong work ethic and discipline',
      'Excellent organizational skills',
      'Detail-oriented and thorough',
    ],
    weaknesses: [
      'Can be rigid and inflexible',
      'Tendency toward stubbornness',
      'Struggles with change and spontaneity',
      'May be overly cautious',
      'Can get stuck in routines',
    ],
    careerTendencies: [
      'Engineering and architecture',
      'Accounting and finance',
      'Project management and operations',
      'Construction and trades',
      'Legal and administrative roles',
    ],
    lifeLessons: [
      'Learn to embrace flexibility and change',
      'Balance work with rest and play',
      'Develop trust in the unpredictable',
      'Open yourself to creative expression',
    ],
    relationshipStyle:
      'You are a loyal and devoted partner who values stability and commitment. You express love through practical acts of service and building a secure home. You need a partner who appreciates your dependability and shares your values around family and tradition.',
    compatibleNumbers: '2, 4, 6, 7, 8',
  },
  5: {
    number: 5,
    label: 'The Adventurer',
    title: 'Freedom-Seeker, Explorer, Dynamic',
    corePersonality:
      'You are driven by an insatiable curiosity and a deep need for freedom. Change and variety are essential to your happiness. You thrive on new experiences, travel, and the thrill of the unknown. Your adaptable nature allows you to navigate life with flexibility and enthusiasm.',
    strengths: [
      'Highly adaptable and versatile',
      'Excellent communicator and networker',
      'Courageous and adventurous spirit',
      'Quick thinker and problem solver',
      'Charismatic and magnetic personality',
    ],
    weaknesses: [
      'Can be restless and commitment-phobic',
      'Tendency toward impulsiveness',
      'Struggles with routine and discipline',
      'May avoid responsibility',
      'Can be unreliable in commitments',
    ],
    careerTendencies: [
      'Travel and tourism industry',
      'Sales and marketing',
      'Journalism and media',
      'Entertainment and performance',
      'Entrepreneurship and trading',
    ],
    lifeLessons: [
      'Balance freedom with responsibility',
      'Develop commitment and follow-through',
      'Channel restlessness into productive change',
      'Learn to find stability within adventure',
    ],
    relationshipStyle:
      'You are an exciting and spontaneous partner who keeps relationships fresh and dynamic. You need a partner who understands your need for freedom and doesn\'t try to confine you. The key to your heart is shared adventure and intellectual stimulation.',
    compatibleNumbers: '1, 3, 6, 7, 9',
  },
  6: {
    number: 6,
    label: 'The Nurturer',
    title: 'Caregiver, Healer, Community Builder',
    corePersonality:
      'You are driven by a deep sense of responsibility and a desire to care for others. Your nurturing nature makes you the heart of your family and community. You find fulfillment in service, healing, and creating harmony in your environment.',
    strengths: [
      'Deeply nurturing and compassionate',
      'Strong sense of responsibility',
      'Excellent counselor and advisor',
      'Creates harmony in relationships',
      'Devoted to family and community',
    ],
    weaknesses: [
      'Can be overly controlling in caring',
      'Tendency to worry excessively',
      'May become a martyr or self-sacrificing',
      'Struggles with letting go',
      'Can be overly critical of loved ones',
    ],
    careerTendencies: [
      'Healthcare and nursing',
      'Teaching and education',
      'Counseling and social work',
      'Interior design and home services',
      'Non-profit and community service',
    ],
    lifeLessons: [
      'Learn to care for yourself as well as others',
      'Balance responsibility with personal freedom',
      'Develop boundaries in relationships',
      'Trust others to handle their own lives',
    ],
    relationshipStyle:
      'You are a devoted and loving partner who prioritizes family and home. You express love through acts of service and creating a warm, nurturing environment. You need a partner who appreciates your devotion and shares your commitment to family.',
    compatibleNumbers: '1, 2, 3, 4, 8, 9',
  },
  7: {
    number: 7,
    label: 'The Seeker',
    title: 'Analyst, Mystic, Truth-Seeker',
    corePersonality:
      'You are a deep thinker with an insatiable thirst for knowledge and understanding. Your analytical mind seeks the truth beneath the surface of all things. You are naturally drawn to philosophy, science, spirituality, and the mysteries of existence.',
    strengths: [
      'Deep analytical and research abilities',
      'Strong intuition and spiritual awareness',
      'Excellent problem-solving skills',
      'Independent and self-sufficient',
      'Wise and philosophical perspective',
    ],
    weaknesses: [
      'Can be aloof and emotionally distant',
      'Tendency toward isolation',
      'May be overly skeptical or critical',
      'Struggles with vulnerability',
      'Can be secretive and guarded',
    ],
    careerTendencies: [
      'Scientific research and analysis',
      'Philosophy and academia',
      'Technology and programming',
      'Spiritual counseling and teaching',
      'Investigation and forensic work',
    ],
    lifeLessons: [
      'Balance intellectual pursuit with emotional connection',
      'Learn to share your inner world with others',
      'Develop trust in both logic and intuition',
      'Connect knowledge with practical application',
    ],
    relationshipStyle:
      'You are a thoughtful and discerning partner who values intellectual connection above all. You need a partner who stimulates your mind and respects your need for solitude. Deep, meaningful conversations are your love language.',
    compatibleNumbers: '1, 2, 3, 5, 6, 9',
  },
  8: {
    number: 8,
    label: 'The Achiever',
    title: 'Executive, Visionary, Authority',
    corePersonality:
      'You are driven to achieve greatness and wield influence in the material world. Your natural executive ability, ambition, and vision set you apart as a leader in business and finance. You understand the power of abundance and are not afraid to pursue it.',
    strengths: [
      'Strong business acumen and ambition',
      'Natural executive leadership',
      'Excellent financial intelligence',
      'Decisive and results-oriented',
      'Charismatic authority figure',
    ],
    weaknesses: [
      'Can be workaholic and imbalanced',
      'Tendency toward materialism',
      'May be domineering or controlling',
      'Struggles with vulnerability',
      'Can prioritize money over relationships',
    ],
    careerTendencies: [
      'Executive leadership and management',
      'Finance and investment banking',
      'Entrepreneurship and business ownership',
      'Real estate and property development',
      'Law and judiciary roles',
    ],
    lifeLessons: [
      'Balance material success with spiritual growth',
      'Learn to lead with compassion',
      'Develop generosity and philanthropy',
      'Find worth beyond financial achievement',
    ],
    relationshipStyle:
      'You are a powerful and protective partner who provides stability and security. You seek a partner who can match your ambition and understand the demands of your career. Loyalty and mutual respect are non-negotiable for you.',
    compatibleNumbers: '2, 4, 6, 9, 22',
  },
  9: {
    number: 9,
    label: 'The Humanitarian',
    title: 'Visionary, Healer, Global Citizen',
    corePersonality:
      'You are a compassionate visionary with a global perspective. Your deep empathy and humanitarian spirit drive you to make the world a better place. You possess a natural wisdom and a broad understanding of the human condition that sets you apart.',
    strengths: [
      'Deep compassion and empathy',
      'Broad global perspective',
      'Natural wisdom and insight',
      'Creative and artistic talent',
      'Strong sense of justice and fairness',
    ],
    weaknesses: [
      'Can be overly idealistic',
      'Tendency to take on too much',
      'May be emotionally overwhelming',
      'Struggles with practical boundaries',
      'Can be financially careless',
    ],
    careerTendencies: [
      'Non-profit and humanitarian work',
      'Arts and entertainment',
      'Teaching and higher education',
      'International relations and diplomacy',
      'Environmental and social advocacy',
    ],
    lifeLessons: [
      'Balance idealism with practical action',
      'Learn to let go of what no longer serves',
      'Develop healthy emotional boundaries',
      'Channel compassion into sustainable service',
    ],
    relationshipStyle:
      'You are a compassionate and giving partner who seeks soul-level connection. You are drawn to people who share your values and vision for a better world. Your love is expansive and accepting, but you need a partner who understands your need for purpose.',
    compatibleNumbers: '2, 3, 5, 6, 7, 9',
  },
  11: {
    number: 11,
    label: 'The Intuitive',
    title: 'Master Intuitive, Visionary, Spiritual Messenger',
    corePersonality:
      'As a Master Number 11, you possess extraordinary intuition and spiritual insight. You are a visionary with the ability to inspire others through your heightened awareness and connection to higher realms. Your sensitivity is both your greatest gift and your deepest challenge.',
    strengths: [
      'Exceptional intuition and psychic awareness',
      'Powerful inspirational ability',
      'Deep spiritual connection',
      'Creative visionary and innovator',
      'Natural healer and counselor',
    ],
    weaknesses: [
      'Extreme sensitivity and nervous tension',
      'Tendency toward anxiety and overthinking',
      'Can feel overwhelmed by energies',
      'May struggle with grounding',
      'Imposter syndrome despite gifts',
    ],
    careerTendencies: [
      'Spiritual teacher or healer',
      'Artist or musician',
      'Psychologist or counselor',
      'Inventor or creative director',
      'Speaker or writer on metaphysical topics',
    ],
    lifeLessons: [
      'Learn to ground your spiritual gifts',
      'Develop boundaries for your sensitivity',
      'Trust your intuition without overanalyzing',
      'Use your gifts in service of others',
    ],
    relationshipStyle:
      'You seek a soulmate connection that transcends the ordinary. Your relationships are intense and spiritually meaningful. You need a partner who understands your sensitivity and supports your spiritual journey without trying to dim your light.',
    compatibleNumbers: '2, 3, 6, 7, 9, 22, 33',
  },
  22: {
    number: 22,
    label: 'The Builder',
    title: 'Master Builder, Visionary Architect, Manifestor',
    corePersonality:
      'As a Master Number 22, you combine visionary insight with practical building ability. You have the rare gift of turning dreams into reality on a grand scale. Your potential to create lasting, meaningful structures that benefit humanity is virtually unlimited.',
    strengths: [
      'Visionary combined with practical ability',
      'Extraordinary manifesting power',
      'Natural master planner and organizer',
      'Ability to build systems that last',
      'Deep wisdom with practical application',
    ],
    weaknesses: [
      'Enormous pressure and responsibility',
      'Can be overwhelmed by own potential',
      'Tendency toward workaholism',
      'May struggle with others not seeing the vision',
      'Can feel isolated by your capabilities',
    ],
    careerTendencies: [
      'Large-scale project development',
      'Architecture and urban planning',
      'Business empire building',
      'International organizational leadership',
      'Philanthropic foundation building',
    ],
    lifeLessons: [
      'Ground grand visions in practical steps',
      'Learn to delegate and trust others',
      'Balance ambition with personal well-being',
      'Use your building power for the greater good',
    ],
    relationshipStyle:
      'You need a partner who can be both your anchor and your inspiration. Your relationships must support your large-scale vision while providing the emotional grounding you need. You seek a true partner in building a legacy.',
    compatibleNumbers: '2, 4, 6, 8, 9, 11, 33',
  },
  33: {
    number: 33,
    label: 'The Teacher',
    title: 'Master Teacher, Spiritual Guide, Universal Love',
    corePersonality:
      'As a Master Number 33, you embody the highest expression of spiritual love and teaching. Your purpose is to uplift humanity through unconditional love, wisdom, and compassion. You are a rare soul who carries the vibration of universal healing.',
    strengths: [
      'Unconditional love and compassion',
      'Exceptional teaching and guiding ability',
      'Deep spiritual wisdom and understanding',
      'Natural healer and comforter',
      'Selfless service orientation',
    ],
    weaknesses: [
      'Can feel burdened by world suffering',
      'Tendency to neglect personal needs',
      'May struggle with human limitations',
      'Can be taken advantage of due to kindness',
      'Difficulty saying no to those in need',
    ],
    careerTendencies: [
      'Spiritual teacher or guru',
      'Healing arts practitioner',
      'Humanitarian organization leader',
      'Master educator or professor',
      'Consciousness-raising speaker',
    ],
    lifeLessons: [
      'Balance giving with receiving',
      'Maintain personal boundaries while serving',
      'Ground spiritual love in practical action',
      'Accept your own humanity and limitations',
    ],
    relationshipStyle:
      'Your love is unconditional and all-encompassing. You seek a partner who shares your spiritual vision and commitment to serving others. Your relationships are partnerships in service, grounded in mutual respect and higher purpose.',
    compatibleNumbers: '6, 9, 11, 22',
  },
};
