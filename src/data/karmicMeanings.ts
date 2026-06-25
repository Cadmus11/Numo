export interface KarmicDebtMeaning {
  number: number;
  title: string;
  explanation: string;
  lifeChallenge: string;
  growthPath: string[];
  careerImplications: string;
  relationshipImplications: string;
}

export const karmicDebtMeanings: Record<number, KarmicDebtMeaning> = {
  13: {
    number: 13,
    title: 'Discipline & Hard Work',
    explanation:
      'Karmic Debt 13 indicates that in past lives, you took shortcuts, avoided hard work, or used others efforts for your own gain. In this life, you must learn the value of disciplined, consistent effort and perseverance through challenges.',
    lifeChallenge:
      'You will face obstacles that require sustained hard work and patience. Nothing will come easily, teaching you the value of earning your achievements through dedication.',
    growthPath: [
      'Embrace hard work as a spiritual practice',
      'Develop patience and persistence',
      'Complete what you start, no matter how difficult',
      'Learn to find satisfaction in the process, not just results',
    ],
    careerImplications:
      'Career success will require extra effort and perseverance. You may change fields multiple times before finding your true path. Mastery in any field will come through dedicated practice.',
    relationshipImplications:
      'Relationships may require more work than they seem to give at first. You must learn to invest consistently in partnerships rather than expecting instant gratification.',
  },
  14: {
    number: 14,
    title: 'Freedom & Responsibility',
    explanation:
      'Karmic Debt 14 reflects a past life where you abused freedom, indulged in excess, or avoided responsibilities. In this life, you must learn to balance personal freedom with commitments to others.',
    lifeChallenge:
      'You will be pulled between the desire for freedom and the demands of responsibility. Learning to balance these forces is your primary karmic lesson.',
    growthPath: [
      'Learn that true freedom comes through responsibility',
      'Develop self-discipline and moderation',
      'Honor your commitments while maintaining personal boundaries',
      'Channel adventurous energy into constructive pursuits',
    ],
    careerImplications:
      'You may struggle with authority and routine. Finding a career that offers both freedom and structure is essential. Entrepreneurship or freelance work may appeal, but require discipline to succeed.',
    relationshipImplications:
      'Relationships may feel constraining. You need a partner who understands your need for independence while also holding you accountable to your commitments.',
  },
  16: {
    number: 16,
    title: 'Humility & Spiritual Awakening',
    explanation:
      'Karmic Debt 16 indicates past-life abuse of power, ego inflation, or spiritual pride. In this life, you will experience ego-destroying events that force you to rebuild from a foundation of humility and spiritual truth.',
    lifeChallenge:
      'You will face sudden upheavals, collapses, or humbling experiences that strip away false pride. These events are designed to break down the ego and rebuild it on a spiritual foundation.',
    growthPath: [
      'Cultivate genuine humility',
      'Learn to surrender control to a higher power',
      'Rebuild your life on spiritual rather than material foundations',
      'Use your challenges to develop compassion for others',
    ],
    careerImplications:
      'Career setbacks may be dramatic and unexpected. These collapses clear the way for a more authentic calling. Avoid positions of power until you have mastered humility.',
    relationshipImplications:
      'Relationships may go through dramatic cycles of destruction and renewal. You must learn to release attachments and trust that what is meant for you will remain.',
  },
  19: {
    number: 19,
    title: 'Independence & Service',
    explanation:
      'Karmic Debt 19 reflects a past life where you were selfish, manipulative, or used power for personal gain at others expense. In this life, you must learn to use your independence and leadership in service of others.',
    lifeChallenge:
      'You are a natural leader with strong will, but your challenge is to direct this power toward serving others rather than controlling them.',
    growthPath: [
      'Develop servant leadership',
      'Use your power to empower others',
      'Learn to cooperate and collaborate',
      'Balance independence with consideration for others',
    ],
    careerImplications:
      'You are drawn to leadership positions but must be careful not to dominate. Success comes when you use your influence to lift others. Mentoring and teaching can be powerful career paths.',
    relationshipImplications:
      'Your strong personality can overwhelm partners. Learn to share power in relationships and truly listen to others needs and perspectives.',
  },
};

export interface KarmicLessonMeaning {
  missingNumber: number;
  title: string;
  challenge: string;
  growthArea: string;
  developmentPath: string[];
}

export const karmicLessonMeanings: Record<number, KarmicLessonMeaning> = {
  1: {
    missingNumber: 1,
    title: 'Missing 1 — Independence',
    challenge: 'You struggle with asserting yourself and taking initiative. You may depend too heavily on others for direction and validation.',
    growthArea: 'Developing self-confidence, independence, and the courage to lead your own life.',
    developmentPath: [
      'Practice making decisions without consulting others',
      'Take on leadership roles, however small',
      'Learn to trust your own judgment',
      'Develop the courage to stand alone when necessary',
    ],
  },
  2: {
    missingNumber: 2,
    title: 'Missing 2 — Cooperation',
    challenge: 'You may struggle with patience, diplomacy, and working harmoniously with others. Relationships and partnerships can feel challenging.',
    growthArea: 'Learning the art of cooperation, patience, and emotional sensitivity.',
    developmentPath: [
      'Practice active listening without interrupting',
      'Learn to compromise without feeling defeated',
      'Develop patience with different perspectives',
      'Cultivate emotional awareness in yourself and others',
    ],
  },
  3: {
    missingNumber: 3,
    title: 'Missing 3 — Self-Expression',
    challenge: 'You may find it difficult to express your creativity, emotions, or thoughts openly. Social interaction might feel awkward or forced.',
    growthArea: 'Developing creative self-expression and comfortable social communication.',
    developmentPath: [
      'Start a creative practice (writing, drawing, music)',
      'Practice sharing your feelings with trusted people',
      'Learn to be more spontaneous and playful',
      'Join groups that encourage self-expression',
    ],
  },
  4: {
    missingNumber: 4,
    title: 'Missing 4 — Discipline & Order',
    challenge: 'You may struggle with organization, discipline, and following through on commitments. Life can feel chaotic or unstructured.',
    growthArea: 'Building practical skills of organization, discipline, and reliability.',
    developmentPath: [
      'Create and maintain daily routines',
      'Break large tasks into manageable steps',
      'Practice punctuality and meeting deadlines',
      'Develop systems for organization in your environment',
    ],
  },
  5: {
    missingNumber: 5,
    title: 'Missing 5 — Freedom & Adaptability',
    challenge: 'You may be overly rigid or fearful of change. Taking risks and embracing new experiences can feel threatening.',
    growthArea: 'Learning to embrace change, take healthy risks, and develop adaptability.',
    developmentPath: [
      'Step out of your comfort zone regularly',
      'Practice saying yes to new experiences',
      'Learn to adapt when plans change unexpectedly',
      'Develop a more adventurous spirit',
    ],
  },
  6: {
    missingNumber: 6,
    title: 'Missing 6 — Responsibility & Service',
    challenge: 'You may avoid responsibility, struggle with commitment, or resist the demands of relationships and family.',
    growthArea: 'Learning to embrace responsibility, service to others, and committed relationships.',
    developmentPath: [
      'Take on responsibilities that serve others',
      'Practice being reliable and following through',
      'Develop deeper commitment in relationships',
      'Learn to find joy in service and caregiving',
    ],
  },
  7: {
    missingNumber: 7,
    title: 'Missing 7 — Trust & Inner Wisdom',
    challenge: 'You may distrust your intuition, avoid solitude, or rely too heavily on external validation and facts.',
    growthArea: 'Developing trust in your inner wisdom and comfort with solitude and introspection.',
    developmentPath: [
      'Spend time alone in reflection and meditation',
      'Learn to trust your gut feelings',
      'Study philosophy, spirituality, or deeper subjects',
      'Practice sitting with uncertainty and unknowns',
    ],
  },
  8: {
    missingNumber: 8,
    title: 'Missing 8 — Power & Abundance',
    challenge: 'You may struggle with money, power dynamics, or asserting your authority. You might undervalue your worth.',
    growthArea: 'Learning to handle power responsibly and develop a healthy relationship with money and authority.',
    developmentPath: [
      'Develop financial literacy and responsibility',
      'Practice asserting your needs and boundaries',
      'Learn to lead with integrity',
      'Work on self-worth and valuing your contributions',
    ],
  },
  9: {
    missingNumber: 9,
    title: 'Missing 9 — Compassion & Letting Go',
    challenge: 'You may struggle with letting go, holding grudges, or lacking broader perspective and compassion.',
    growthArea: 'Developing universal compassion, the ability to forgive, and a broader worldview.',
    developmentPath: [
      'Practice forgiveness, especially for past hurts',
      'Develop a broader perspective on life',
      'Engage in service or humanitarian activities',
      'Learn to release attachments and trust the flow of life',
    ],
  },
};
