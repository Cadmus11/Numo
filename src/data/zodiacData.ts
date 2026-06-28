export type Animal =
  | 'Rat'
  | 'Ox'
  | 'Tiger'
  | 'Rabbit'
  | 'Dragon'
  | 'Snake'
  | 'Horse'
  | 'Goat'
  | 'Monkey'
  | 'Rooster'
  | 'Dog'
  | 'Pig';
export type Element = 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
export type CompatibilityRating = 'Excellent' | 'Good' | 'Moderate' | 'Challenging';

export interface ZodiacAnimal {
  animal: Animal;
  order: number;
  element: Element;
  years: number[];
  personality: string;
  strengths: string[];
  weaknesses: string[];
  loveStyle: string;
  careerTraits: string[];
  friendships: string[];
  financialHabits: string;
  healthTendencies: string[];
  compatibleWith: Animal[];
  incompatibleWith: Animal[];
  secretFriend: Animal;
  elementStrengths: string[];
  elementWeaknesses: string[];
}

function getAnimalYears(start: number, count: number): number[] {
  const years: number[] = [];
  for (let i = 0; i < count; i++) {
    years.push(start + i * 12);
  }
  return years;
}

export const zodiacAnimals: ZodiacAnimal[] = [
  {
    animal: 'Rat',
    order: 1,
    element: 'Water',
    years: getAnimalYears(1912, 10),
    personality:
      'Rats are intelligent, charming, and highly adaptable. They possess quick wit and sharp observation skills. Natural survivors, they can navigate any situation with resourcefulness and cleverness. Their charm makes them popular in social circles, but they can also be secretive and guarded.',
    strengths: [
      'Highly intelligent and clever',
      'Charming and charismatic',
      'Resourceful and adaptable',
      'Excellent observers',
      'Ambitious and hardworking',
    ],
    weaknesses: [
      'Can be manipulative',
      'Tendency toward greed',
      'Secretive and guarded',
      'Overly critical of others',
      'Can be opportunistic',
    ],
    loveStyle:
      'Rats are passionate and romantic partners who shower their loved ones with attention. They are loyal once committed but can be possessive. They need a partner who appreciates their charm and understands their need for security.',
    careerTraits: [
      'Excels in sales and marketing',
      'Natural writer and communicator',
      'Successful in research',
      'Thrives in finance',
      'Good in entertainment',
    ],
    friendships: [
      'Loyal and supportive friend',
      'Generous with inner circle',
      'Organizes social gatherings',
      'Selective about close friends',
    ],
    financialHabits:
      "Rats are generally good with money, often saving wisely while also enjoying life's pleasures. They are natural planners who build financial security.",
    healthTendencies: [
      'Prone to stress-related issues',
      'Should watch digestive health',
      'Benefits from regular exercise',
    ],
    compatibleWith: ['Dragon', 'Monkey', 'Ox'],
    incompatibleWith: ['Horse', 'Rabbit'],
    secretFriend: 'Ox',
    elementStrengths: ['Adaptable and intuitive', 'Good communicators', 'Emotionally intelligent'],
    elementWeaknesses: ['Can be overly cautious', 'Tendency to worry', 'May avoid confrontation'],
  },
  {
    animal: 'Ox',
    order: 2,
    element: 'Earth',
    years: getAnimalYears(1913, 10),
    personality:
      'Oxen are dependable, patient, and methodical. They are known for their strong work ethic and determination. Once they set a goal, they pursue it with unwavering focus. They are honest and straightforward, earning the trust and respect of those around them.',
    strengths: [
      'Diligent and hardworking',
      'Patient and persistent',
      'Honest and trustworthy',
      'Strong and dependable',
      'Detail-oriented',
    ],
    weaknesses: [
      'Can be stubborn',
      'Tendency to be rigid',
      'Can be overly conservative',
      'Struggles with change',
      'May be unromantic',
    ],
    loveStyle:
      'Oxen are loyal and devoted partners who express love through practical acts of service. They are traditional in romance and value long-term commitment. They need a partner who appreciates their steady, reliable nature.',
    careerTraits: [
      'Excels in management',
      'Successful in agriculture',
      'Thrives in engineering',
      'Good in legal professions',
      'Natural in healthcare',
    ],
    friendships: [
      'Loyal and dependable friend',
      'Keeps promises',
      'Slow to warm up but deeply loyal',
      'Practical and helpful',
    ],
    financialHabits:
      'Oxen are excellent savers and cautious investors. They prefer financial security over risky ventures and build wealth steadily over time.',
    healthTendencies: [
      'Prone to overwork',
      'Should watch blood pressure',
      'Benefits from relaxation practices',
    ],
    compatibleWith: ['Snake', 'Rooster', 'Rat'],
    incompatibleWith: ['Goat', 'Horse'],
    secretFriend: 'Rat',
    elementStrengths: ['Stable and reliable', 'Practical and grounded', 'Nurturing and supportive'],
    elementWeaknesses: ['Can be too set in ways', 'Resistant to change', 'May be overly cautious'],
  },
  {
    animal: 'Tiger',
    order: 3,
    element: 'Wood',
    years: getAnimalYears(1914, 10),
    personality:
      'Tigers are bold, competitive, and charismatic. They are natural leaders who inspire others with their courage and passion. Tigers thrive on challenges and are never afraid to take risks. Their magnetic personality draws people to them, and they have a strong sense of justice.',
    strengths: [
      'Courageous and bold',
      'Charismatic leader',
      'Passionate and energetic',
      'Competitive and driven',
      'Protective of loved ones',
    ],
    weaknesses: [
      'Can be reckless',
      'Tendency toward impulsiveness',
      'Stubborn and headstrong',
      'Can be moody',
      'May be overly aggressive',
    ],
    loveStyle:
      'Tigers are passionate and intense lovers who pursue romance with the same energy they bring to everything. They need excitement and variety in relationships. A partner who can match their intensity and give them freedom is ideal.',
    careerTraits: [
      'Excels in leadership roles',
      'Successful in entertainment',
      'Thrives in competitive fields',
      'Good in sports',
      'Natural in military',
    ],
    friendships: [
      'Exciting and adventurous friend',
      'Protective of friends',
      'Inspires others to action',
      'Needs friends who understand independence',
    ],
    financialHabits:
      'Tigers are impulsive spenders who enjoy the finer things in life. They need to learn discipline to build long-term wealth.',
    healthTendencies: [
      'Prone to accidents',
      'Should manage stress levels',
      'Benefits from regular exercise',
    ],
    compatibleWith: ['Horse', 'Dog', 'Pig'],
    incompatibleWith: ['Monkey', 'Snake'],
    secretFriend: 'Pig',
    elementStrengths: ['Growth-oriented', 'Creative and expansive', 'Flexible and adaptable'],
    elementWeaknesses: ['Can be restless', 'Tendency to overextend', 'May lack follow-through'],
  },
  {
    animal: 'Rabbit',
    order: 4,
    element: 'Wood',
    years: getAnimalYears(1915, 10),
    personality:
      'Rabbits are graceful, elegant, and diplomatic. They possess a natural refinement and a deep appreciation for beauty and harmony. Rabbits are excellent at navigating social situations with tact and charm. They value peace and avoid conflict whenever possible.',
    strengths: [
      'Gracious and elegant',
      'Diplomatic and tactful',
      'Kind and compassionate',
      'Creative and artistic',
      'Good listeners',
    ],
    weaknesses: [
      'Can be overly cautious',
      'Tendency to avoid conflict',
      'May be emotionally sensitive',
      'Can be indecisive',
      'May hold grudges',
    ],
    loveStyle:
      'Rabbits are gentle and romantic partners who create beautiful, harmonious relationships. They need a partner who provides emotional security and appreciates their sensitive nature. They thrive in peaceful, stable partnerships.',
    careerTraits: [
      'Excels in diplomacy',
      'Successful in arts',
      'Thrives in education',
      'Good in counseling',
      'Natural in law',
    ],
    friendships: [
      'Kind and supportive friend',
      'Creates harmonious groups',
      'Good mediator in conflicts',
      'Loyal and trustworthy',
    ],
    financialHabits:
      'Rabbits are cautious with money and prefer financial security. They are good at budgeting and careful with investments.',
    healthTendencies: [
      'Prone to anxiety',
      'Should watch respiratory health',
      'Benefits from relaxation techniques',
    ],
    compatibleWith: ['Goat', 'Pig', 'Dog'],
    incompatibleWith: ['Rooster', 'Rat'],
    secretFriend: 'Pig',
    elementStrengths: ['Creative and artistic', 'Growth-oriented', 'Flexible thinking'],
    elementWeaknesses: ['Can be indecisive', 'May avoid necessary risks', 'Tendency to overthink'],
  },
  {
    animal: 'Dragon',
    order: 5,
    element: 'Earth',
    years: getAnimalYears(1916, 10),
    personality:
      'Dragons are charismatic, confident, and naturally powerful. They possess an almost mythical presence that draws attention and admiration. Ambitious and visionary, Dragons pursue their goals with passion and determination. They are natural leaders who inspire loyalty and awe.',
    strengths: [
      'Charismatic and confident',
      'Ambitious and visionary',
      'Natural leader',
      'Generous and warm-hearted',
      'Creative and innovative',
    ],
    weaknesses: [
      'Can be arrogant',
      'Tendency to be demanding',
      'Impatient with others',
      'Can be temperamental',
      'May be unrealistic',
    ],
    loveStyle:
      'Dragons are passionate and romantic partners who love grand gestures. They need a partner who appreciates their larger-than-life personality and gives them admiration. Their relationships are intense and dramatic.',
    careerTraits: [
      'Excels in leadership',
      'Successful in entertainment',
      'Thrives in entrepreneurship',
      'Good in politics',
      'Natural in creative fields',
    ],
    friendships: [
      'Loyal and protective friend',
      'Inspires and motivates',
      'Generous with friends',
      'Expects loyalty in return',
    ],
    financialHabits:
      'Dragons are fortunate with money and tend to attract wealth. They are generous spenders who enjoy luxury and sharing with loved ones.',
    healthTendencies: ['Prone to stress', 'Should watch heart health', 'Benefits from moderation'],
    compatibleWith: ['Rat', 'Monkey', 'Rooster'],
    incompatibleWith: ['Dog', 'Rabbit'],
    secretFriend: 'Monkey',
    elementStrengths: ['Stable and grounded', 'Practical vision', 'Nurturing of growth'],
    elementWeaknesses: [
      'Can be too conservative',
      'May resist innovation',
      'Tendency to be stubborn',
    ],
  },
  {
    animal: 'Snake',
    order: 6,
    element: 'Fire',
    years: getAnimalYears(1917, 10),
    personality:
      'Snakes are wise, enigmatic, and deeply intuitive. They possess a magnetic charm and a mysterious aura that intrigues others. Snakes are deep thinkers who value wisdom and knowledge. They are graceful and determined, pursuing their goals with quiet intensity.',
    strengths: [
      'Highly intuitive and wise',
      'Elegant and charming',
      'Determined and focused',
      'Deep thinker',
      'Financially savvy',
    ],
    weaknesses: [
      'Can be secretive',
      'Tendency toward jealousy',
      'May be possessive',
      'Can be suspicious',
      'May hold grudges',
    ],
    loveStyle:
      'Snakes are passionate and intense partners who seek deep emotional connection. They are loyal but can be possessive. They need a partner who respects their need for privacy and matches their intellectual depth.',
    careerTraits: [
      'Excels in research',
      'Successful in finance',
      'Thrives in philosophy',
      'Good in psychology',
      'Natural in spirituality',
    ],
    friendships: [
      'Selective about friends',
      'Deeply loyal once trust is earned',
      'Wise advisor to friends',
      'Protective of inner circle',
    ],
    financialHabits:
      'Snakes are financially fortunate and have good instincts about money. They are smart investors who build wealth steadily.',
    healthTendencies: [
      'Prone to digestive issues',
      'Should manage stress',
      'Benefits from moderate exercise',
    ],
    compatibleWith: ['Ox', 'Rooster', 'Monkey'],
    incompatibleWith: ['Pig', 'Tiger'],
    secretFriend: 'Rooster',
    elementStrengths: [
      'Passionate and determined',
      'Enthusiastic and energetic',
      'Transforming and renewing',
    ],
    elementWeaknesses: ['Can be impatient', 'Tendency to burn out', 'May be too intense'],
  },
  {
    animal: 'Horse',
    order: 7,
    element: 'Fire',
    years: getAnimalYears(1918, 10),
    personality:
      'Horses are free-spirited, energetic, and adventurous. They possess an unbridled love for freedom and a zest for life that is contagious. Horses are natural travelers and explorers who thrive on movement and change. They are honest, direct, and sometimes brutally frank.',
    strengths: [
      'Energetic and enthusiastic',
      'Independent and free-spirited',
      'Honest and straightforward',
      'Adventurous and daring',
      'Warm-hearted and popular',
    ],
    weaknesses: [
      'Can be impatient',
      'Tendency to be rebellious',
      'May be self-centered',
      'Can be hot-tempered',
      'Struggles with routine',
    ],
    loveStyle:
      'Horses are passionate and exciting partners who need freedom in relationships. They are attracted to confident partners who understand their need for independence. Romance with a Horse is an adventure.',
    careerTraits: [
      'Excels in travel industry',
      'Successful in sports',
      'Thrives in sales',
      'Good in entertainment',
      'Natural in journalism',
    ],
    friendships: [
      'Popular and outgoing friend',
      'Brings excitement to groups',
      'Honest to a fault',
      'Needs friends who understand freedom',
    ],
    financialHabits:
      'Horses can be impulsive with money but have good earning potential. They need to learn budgeting to maintain financial stability.',
    healthTendencies: [
      'Prone to respiratory issues',
      'Should watch diet',
      'Benefits from outdoor activities',
    ],
    compatibleWith: ['Tiger', 'Dog', 'Goat'],
    incompatibleWith: ['Rat', 'Ox'],
    secretFriend: 'Tiger',
    elementStrengths: ['Passionate and energetic', 'Action-oriented', 'Inspirational to others'],
    elementWeaknesses: ['Can be too direct', 'May lack patience', 'Tendency to be impulsive'],
  },
  {
    animal: 'Goat',
    order: 8,
    element: 'Earth',
    years: getAnimalYears(1919, 10),
    personality:
      'Goats are gentle, creative, and deeply compassionate. They possess a refined artistic sensibility and a love for beauty and harmony. Goats are kind-hearted and empathetic, often putting others needs before their own. They thrive in peaceful, supportive environments.',
    strengths: [
      'Creative and artistic',
      'Gentle and compassionate',
      'Kind-hearted and empathetic',
      'Intuitive and sensitive',
      'Resilient and adaptable',
    ],
    weaknesses: [
      'Can be overly pessimistic',
      'Tendency to worry',
      'May be indecisive',
      'Can be easily led',
      'May avoid responsibility',
    ],
    loveStyle:
      'Goats are romantic and devoted partners who need security and affection. They are most happy in relationships where they feel cherished and protected. They need a partner who provides stability and emotional support.',
    careerTraits: [
      'Excels in arts and design',
      'Successful in education',
      'Thrives in counseling',
      'Good in healthcare',
      'Natural in creative fields',
    ],
    friendships: [
      'Gentle and supportive friend',
      'Deeply loyal',
      'Needs reassurance from friends',
      'Creates warm friend groups',
    ],
    financialHabits:
      'Goats need to be careful with money as they can be impractical. They benefit from financial guidance and structured saving plans.',
    healthTendencies: [
      'Prone to digestive issues',
      'Should manage anxiety',
      'Benefits from calming practices',
    ],
    compatibleWith: ['Rabbit', 'Pig', 'Horse'],
    incompatibleWith: ['Ox', 'Dog'],
    secretFriend: 'Horse',
    elementStrengths: ['Stable and nurturing', 'Practical creativity', 'Supportive and reliable'],
    elementWeaknesses: [
      'Can be too cautious',
      'May lack ambition',
      'Tendency to worry excessively',
    ],
  },
  {
    animal: 'Monkey',
    order: 9,
    element: 'Metal',
    years: getAnimalYears(1920, 10),
    personality:
      'Monkeys are clever, inventive, and endlessly curious. They possess a sharp mind and quick wit that makes them excellent problem-solvers. Monkeys are natural entertainers who love to be the center of attention. Their versatility and adaptability allow them to succeed in almost any endeavor.',
    strengths: [
      'Highly intelligent and witty',
      'Inventive and creative',
      'Excellent problem-solver',
      'Versatile and adaptable',
      'Charming and entertaining',
    ],
    weaknesses: [
      'Can be mischievous',
      'Tendency to be manipulative',
      'May lack patience',
      'Can be egotistical',
      'May be inconsistent',
    ],
    loveStyle:
      'Monkeys are playful and entertaining partners who keep relationships exciting. They need a partner who appreciates their humor and intellectual curiosity. Boredom is their biggest relationship enemy.',
    careerTraits: [
      'Excels in technology',
      'Successful in entrepreneurship',
      'Thrives in sales',
      'Good in entertainment',
      'Natural in science',
    ],
    friendships: [
      'Fun and entertaining friend',
      'Intellectually stimulating',
      'Generous with ideas',
      'Needs friends who keep up',
    ],
    financialHabits:
      'Monkeys are financially clever and find creative ways to make money. They are good investors but can be impulsive.',
    healthTendencies: ['Prone to stress', 'Should watch diet', 'Benefits from mental stimulation'],
    compatibleWith: ['Rat', 'Dragon', 'Snake'],
    incompatibleWith: ['Tiger', 'Pig'],
    secretFriend: 'Dragon',
    elementStrengths: [
      'Strong and determined',
      'Resilient and enduring',
      'Disciplined and focused',
    ],
    elementWeaknesses: ['Can be rigid', 'May be too serious', 'Tendency to be stubborn'],
  },
  {
    animal: 'Rooster',
    order: 10,
    element: 'Metal',
    years: getAnimalYears(1921, 10),
    personality:
      'Roosters are confident, punctual, and meticulous. They are natural organizers who pay attention to the smallest details. Roosters are honest and direct, often speaking their mind without hesitation. They take pride in their appearance and accomplishments.',
    strengths: [
      'Organized and efficient',
      'Honest and direct',
      'Confident and proud',
      'Hardworking and dedicated',
      'Observant and detail-oriented',
    ],
    weaknesses: [
      'Can be critical of others',
      'Tendency to be boastful',
      'May be rigid in thinking',
      'Can be blunt to a fault',
      'May be overly perfectionistic',
    ],
    loveStyle:
      'Roosters are devoted and faithful partners who take relationships seriously. They express love through acts of service and practical support. They need a partner who appreciates their honesty and shares their values.',
    careerTraits: [
      'Excels in management',
      'Successful in journalism',
      'Thrives in military',
      'Good in politics',
      'Natural in sales',
    ],
    friendships: [
      'Honest and reliable friend',
      'Organizes group activities',
      'Speaks mind openly',
      'Expected loyalty in return',
    ],
    financialHabits:
      'Roosters are careful with money and detail-oriented in financial matters. They are good savers but may be overly frugal.',
    healthTendencies: [
      'Prone to respiratory issues',
      'Should manage stress',
      'Benefits from regular check-ups',
    ],
    compatibleWith: ['Snake', 'Ox', 'Dragon'],
    incompatibleWith: ['Rabbit', 'Dog'],
    secretFriend: 'Snake',
    elementStrengths: [
      'Disciplined and focused',
      'Strong and resilient',
      'Determined and ambitious',
    ],
    elementWeaknesses: ['Can be too rigid', 'May be overly critical', 'Tendency to be inflexible'],
  },
  {
    animal: 'Dog',
    order: 11,
    element: 'Earth',
    years: getAnimalYears(1922, 10),
    personality:
      'Dogs are loyal, honest, and dependable. They possess a strong sense of justice and fairness that guides their actions. Dogs are deeply devoted to their loved ones and will go to great lengths to protect them. They are practical, straightforward, and incredibly trustworthy.',
    strengths: [
      'Loyal and devoted',
      'Honest and trustworthy',
      'Strong sense of justice',
      'Practical and dependable',
      'Brave and protective',
    ],
    weaknesses: [
      'Can be overly pessimistic',
      'Tendency to worry',
      'May be stubborn',
      'Can be judgmental',
      'May be socially awkward',
    ],
    loveStyle:
      'Dogs are faithful and devoted partners who value loyalty above all. They express love through protection and practical support. They need a partner who is equally committed and trustworthy.',
    careerTraits: [
      'Excels in law enforcement',
      'Successful in education',
      'Thrives in healthcare',
      'Good in social work',
      'Natural in military',
    ],
    friendships: [
      'Loyal to the core',
      'Protective of friends',
      'Honest and straightforward',
      'Small circle but deep bonds',
    ],
    financialHabits:
      'Dogs are cautious with money and prefer financial security. They are disciplined savers who avoid unnecessary risks.',
    healthTendencies: ['Prone to anxiety', 'Should watch diet', 'Benefits from regular exercise'],
    compatibleWith: ['Tiger', 'Rabbit', 'Horse'],
    incompatibleWith: ['Dragon', 'Goat'],
    secretFriend: 'Tiger',
    elementStrengths: ['Stable and reliable', 'Practical and grounded', 'Nurturing and supportive'],
    elementWeaknesses: ['Can be too cautious', 'May lack flexibility', 'Tendency to worry'],
  },
  {
    animal: 'Pig',
    order: 12,
    element: 'Water',
    years: getAnimalYears(1923, 10),
    personality:
      "Pigs are generous, compassionate, and honest. They possess a warm-hearted nature and a genuine love for life's pleasures. Pigs are known for their integrity and straightforwardness. They are hardworking when motivated and enjoy the finer things in life.",
    strengths: [
      'Generous and compassionate',
      'Honest and trustworthy',
      'Warm-hearted and kind',
      'Hardworking and diligent',
      'Artistic and creative',
    ],
    weaknesses: [
      'Can be naive',
      'Tendency to overindulge',
      'May be gullible',
      'Can be materialistic',
      'May avoid conflict',
    ],
    loveStyle:
      'Pigs are devoted and romantic partners who express love through generosity and affection. They create warm, comfortable homes. They need a partner who appreciates their giving nature and provides emotional security.',
    careerTraits: [
      'Excels in arts',
      'Successful in entertainment',
      'Thrives in hospitality',
      'Good in social work',
      'Natural in counseling',
    ],
    friendships: [
      'Generous and giving friend',
      'Loyal and trustworthy',
      'Hosts wonderful gatherings',
      'Accepting and non-judgmental',
    ],
    financialHabits:
      "Pigs enjoy spending money on life's pleasures and can be indulgent. They need to balance enjoyment with saving for security.",
    healthTendencies: [
      'Prone to overindulgence',
      'Should watch weight',
      'Benefits from regular exercise',
    ],
    compatibleWith: ['Rabbit', 'Goat', 'Tiger'],
    incompatibleWith: ['Snake', 'Monkey'],
    secretFriend: 'Tiger',
    elementStrengths: ['Adaptable and intuitive', 'Good communicators', 'Emotionally intelligent'],
    elementWeaknesses: [
      'Can be overly sensitive',
      'May avoid confrontation',
      'Tendency to be passive',
    ],
  },
];

export const zodiacAnimalMap: Record<string, ZodiacAnimal> = {};
zodiacAnimals.forEach((a) => {
  zodiacAnimalMap[a.animal] = a;
});

export function getZodiacAnimal(year: number): ZodiacAnimal {
  for (const animal of zodiacAnimals) {
    if (animal.years.includes(year)) {
      return animal;
    }
  }
  const baseYear = zodiacAnimals[0].years[0];
  const cycleYear = (((year - baseYear) % 12) + 12) % 12;
  return zodiacAnimals[cycleYear];
}
