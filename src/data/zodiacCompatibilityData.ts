import { Animal, CompatibilityRating } from './zodiacData';

export interface AnimalCompatibility {
  animal: Animal;
  with: Animal;
  love: CompatibilityRating;
  friendship: CompatibilityRating;
  business: CompatibilityRating;
  loveDescription: string;
  friendshipDescription: string;
  businessDescription: string;
}

export interface EnemySign {
  animal1: Animal;
  animal2: Animal;
  conflictAreas: string[];
  relationshipAdvice: string[];
  growthOpportunities: string[];
}

export interface Triangle {
  name: string;
  animals: [Animal, Animal, Animal];
  description: string;
  cooperationPotential: string;
}

const compatibilityMatrix: Record<
  string,
  Record<
    string,
    { love: CompatibilityRating; friendship: CompatibilityRating; business: CompatibilityRating }
  >
> = {};

function setRating(
  a: Animal,
  b: Animal,
  love: CompatibilityRating,
  friendship: CompatibilityRating,
  business: CompatibilityRating
) {
  if (!compatibilityMatrix[a]) compatibilityMatrix[a] = {};
  if (!compatibilityMatrix[b]) compatibilityMatrix[b] = {};
  compatibilityMatrix[a][b] = { love, friendship, business };
  compatibilityMatrix[b][a] = { love, friendship, business };
}

setRating('Rat', 'Ox', 'Good', 'Good', 'Excellent');
setRating('Rat', 'Tiger', 'Moderate', 'Moderate', 'Moderate');
setRating('Rat', 'Rabbit', 'Challenging', 'Moderate', 'Challenging');
setRating('Rat', 'Dragon', 'Excellent', 'Excellent', 'Excellent');
setRating('Rat', 'Snake', 'Good', 'Good', 'Good');
setRating('Rat', 'Horse', 'Challenging', 'Challenging', 'Challenging');
setRating('Rat', 'Goat', 'Good', 'Good', 'Moderate');
setRating('Rat', 'Monkey', 'Excellent', 'Excellent', 'Excellent');
setRating('Rat', 'Rooster', 'Good', 'Good', 'Good');
setRating('Rat', 'Dog', 'Moderate', 'Moderate', 'Good');
setRating('Rat', 'Pig', 'Good', 'Excellent', 'Good');

setRating('Ox', 'Tiger', 'Challenging', 'Challenging', 'Moderate');
setRating('Ox', 'Rabbit', 'Moderate', 'Good', 'Good');
setRating('Ox', 'Dragon', 'Good', 'Good', 'Excellent');
setRating('Ox', 'Snake', 'Excellent', 'Excellent', 'Excellent');
setRating('Ox', 'Horse', 'Challenging', 'Challenging', 'Challenging');
setRating('Ox', 'Goat', 'Challenging', 'Challenging', 'Challenging');
setRating('Ox', 'Monkey', 'Challenging', 'Challenging', 'Moderate');
setRating('Ox', 'Rooster', 'Excellent', 'Excellent', 'Excellent');
setRating('Ox', 'Dog', 'Good', 'Good', 'Good');
setRating('Ox', 'Pig', 'Good', 'Good', 'Moderate');

setRating('Tiger', 'Rabbit', 'Good', 'Good', 'Moderate');
setRating('Tiger', 'Dragon', 'Good', 'Excellent', 'Good');
setRating('Tiger', 'Snake', 'Challenging', 'Challenging', 'Challenging');
setRating('Tiger', 'Horse', 'Excellent', 'Excellent', 'Excellent');
setRating('Tiger', 'Goat', 'Moderate', 'Moderate', 'Moderate');
setRating('Tiger', 'Monkey', 'Challenging', 'Challenging', 'Challenging');
setRating('Tiger', 'Rooster', 'Challenging', 'Moderate', 'Moderate');
setRating('Tiger', 'Dog', 'Excellent', 'Excellent', 'Excellent');
setRating('Tiger', 'Pig', 'Excellent', 'Excellent', 'Good');

setRating('Rabbit', 'Dragon', 'Challenging', 'Moderate', 'Challenging');
setRating('Rabbit', 'Snake', 'Good', 'Good', 'Good');
setRating('Rabbit', 'Horse', 'Challenging', 'Moderate', 'Challenging');
setRating('Rabbit', 'Goat', 'Excellent', 'Excellent', 'Excellent');
setRating('Rabbit', 'Monkey', 'Challenging', 'Challenging', 'Challenging');
setRating('Rabbit', 'Rooster', 'Challenging', 'Challenging', 'Challenging');
setRating('Rabbit', 'Dog', 'Excellent', 'Excellent', 'Good');
setRating('Rabbit', 'Pig', 'Excellent', 'Excellent', 'Excellent');

setRating('Dragon', 'Snake', 'Good', 'Good', 'Excellent');
setRating('Dragon', 'Horse', 'Good', 'Good', 'Moderate');
setRating('Dragon', 'Goat', 'Moderate', 'Moderate', 'Challenging');
setRating('Dragon', 'Monkey', 'Excellent', 'Excellent', 'Excellent');
setRating('Dragon', 'Rooster', 'Excellent', 'Excellent', 'Excellent');
setRating('Dragon', 'Dog', 'Challenging', 'Challenging', 'Challenging');
setRating('Dragon', 'Pig', 'Good', 'Good', 'Moderate');

setRating('Snake', 'Horse', 'Challenging', 'Challenging', 'Challenging');
setRating('Snake', 'Goat', 'Good', 'Good', 'Moderate');
setRating('Snake', 'Monkey', 'Excellent', 'Excellent', 'Excellent');
setRating('Snake', 'Rooster', 'Excellent', 'Excellent', 'Excellent');
setRating('Snake', 'Dog', 'Moderate', 'Good', 'Moderate');
setRating('Snake', 'Pig', 'Challenging', 'Challenging', 'Challenging');

setRating('Horse', 'Goat', 'Excellent', 'Excellent', 'Good');
setRating('Horse', 'Monkey', 'Challenging', 'Moderate', 'Challenging');
setRating('Horse', 'Rooster', 'Moderate', 'Moderate', 'Challenging');
setRating('Horse', 'Dog', 'Excellent', 'Excellent', 'Excellent');
setRating('Horse', 'Pig', 'Good', 'Good', 'Moderate');

setRating('Goat', 'Monkey', 'Challenging', 'Challenging', 'Challenging');
setRating('Goat', 'Rooster', 'Moderate', 'Good', 'Moderate');
setRating('Goat', 'Dog', 'Challenging', 'Challenging', 'Challenging');
setRating('Goat', 'Pig', 'Excellent', 'Excellent', 'Excellent');

setRating('Monkey', 'Rooster', 'Good', 'Good', 'Excellent');
setRating('Monkey', 'Dog', 'Challenging', 'Challenging', 'Moderate');
setRating('Monkey', 'Pig', 'Challenging', 'Challenging', 'Challenging');

setRating('Rooster', 'Dog', 'Challenging', 'Challenging', 'Challenging');
setRating('Rooster', 'Pig', 'Moderate', 'Moderate', 'Moderate');

setRating('Dog', 'Pig', 'Good', 'Excellent', 'Good');

export const enemySigns: EnemySign[] = [
  {
    animal1: 'Rat',
    animal2: 'Horse',
    conflictAreas: [
      'Opposite energy rhythms — Rat is nocturnal, Horse is diurnal',
      'Different approaches to spending and saving',
      'Communication styles clash — Rat is subtle, Horse is direct',
    ],
    relationshipAdvice: [
      'Find a middle ground between planning and spontaneity',
      'Learn to appreciate each others different rhythms',
      'Communicate needs clearly without manipulation or bluntness',
    ],
    growthOpportunities: [
      'Learning to balance caution with adventure',
      'Developing patience with opposing viewpoints',
      'Finding harmony in complementary differences',
    ],
  },
  {
    animal1: 'Ox',
    animal2: 'Goat',
    conflictAreas: [
      'Ox is methodical, Goat is spontaneous',
      'Different values — Ox values work, Goat values pleasure',
      'Communication breakdown due to different temperaments',
    ],
    relationshipAdvice: [
      'Respect each others different approaches to life',
      'Find activities that balance work and pleasure',
      'Practice patience and avoid forcing conformity',
    ],
    growthOpportunities: [
      'Learning flexibility from Goat',
      'Learning discipline from Ox',
      'Creating balance between work and leisure',
    ],
  },
  {
    animal1: 'Tiger',
    animal2: 'Monkey',
    conflictAreas: [
      'Both want to be the leader',
      'Tiger is direct, Monkey is subtle',
      'Competitive energy creates power struggles',
    ],
    relationshipAdvice: [
      'Establish clear roles and respect boundaries',
      'Channel competitive energy toward shared goals',
      'Learn to take turns leading and following',
    ],
    growthOpportunities: [
      'Learning to share the spotlight',
      'Developing mutual respect for different strengths',
      'Building partnership through healthy competition',
    ],
  },
  {
    animal1: 'Rabbit',
    animal2: 'Rooster',
    conflictAreas: [
      'Rabbit values peace, Rooster values truth',
      'Different social styles — Rabbit is reserved, Rooster is bold',
      'Conflict over attention and recognition',
    ],
    relationshipAdvice: [
      'Balance honesty with diplomacy',
      'Appreciate each others different social gifts',
      'Learn that truth can be delivered gently',
    ],
    growthOpportunities: [
      'Learning tact from Rabbit',
      'Learning honesty from Rooster',
      'Finding the middle path between peace and truth',
    ],
  },
  {
    animal1: 'Dragon',
    animal2: 'Dog',
    conflictAreas: [
      'Dragon is idealistic, Dog is practical',
      'Different approaches to risk',
      'Dragon wants admiration, Dog wants loyalty',
    ],
    relationshipAdvice: [
      'Ground Dragon visions with Dog practicality',
      'Appreciate different forms of devotion',
      'Find projects that combine vision with integrity',
    ],
    growthOpportunities: [
      'Learning practicality from Dog',
      'Learning vision from Dragon',
      'Building something both meaningful and grounded',
    ],
  },
  {
    animal1: 'Snake',
    animal2: 'Pig',
    conflictAreas: [
      'Snake is private, Pig is open',
      'Different communication styles',
      'Trust issues due to different levels of transparency',
    ],
    relationshipAdvice: [
      'Respect different needs for privacy',
      'Practice gentle, honest communication',
      'Build trust gradually through consistency',
    ],
    growthOpportunities: [
      'Learning openness from Pig',
      'Learning discretion from Snake',
      'Finding balance between privacy and transparency',
    ],
  },
];

export const zodiacTriangles: Triangle[] = [
  {
    name: 'Group 1: The Innovators',
    animals: ['Rat', 'Dragon', 'Monkey'],
    description:
      "This alliance brings together the Rat's intelligence, the Dragon's vision, and the Monkey's creativity. Together, they are unstoppable innovators who can turn any idea into reality.",
    cooperationPotential:
      'Excellent — these three naturally complement each other and share a love for achievement and intellectual stimulation.',
  },
  {
    name: 'Group 2: The Builders',
    animals: ['Ox', 'Snake', 'Rooster'],
    description:
      "This group combines the Ox's diligence, the Snake's wisdom, and the Rooster's precision. They are natural builders who create lasting structures through methodical effort.",
    cooperationPotential:
      'Excellent — their shared dedication to quality and attention to detail makes them highly effective as a team.',
  },
  {
    name: 'Group 3: The Adventurers',
    animals: ['Tiger', 'Horse', 'Dog'],
    description:
      "This alliance unites the Tiger's courage, the Horse's energy, and the Dog's loyalty. They are natural protectors and adventurers who thrive on action and purpose.",
    cooperationPotential:
      'Excellent — their shared passion, loyalty, and love for freedom create powerful synergy.',
  },
  {
    name: 'Group 4: The Creatives',
    animals: ['Rabbit', 'Goat', 'Pig'],
    description:
      "This group brings together the Rabbit's grace, the Goat's creativity, and the Pig's generosity. They are naturally artistic, kind, and community-oriented.",
    cooperationPotential:
      'Excellent — their shared appreciation for beauty, harmony, and compassion makes them a supportive and creative team.',
  },
];

export function getCompatibility(
  animal1: Animal,
  animal2: Animal
): {
  love: CompatibilityRating;
  friendship: CompatibilityRating;
  business: CompatibilityRating;
} | null {
  if (animal1 === animal2) return { love: 'Good', friendship: 'Excellent', business: 'Good' };
  return compatibilityMatrix[animal1]?.[animal2] ?? null;
}

export function getEnemySign(animal: Animal): EnemySign | undefined {
  return enemySigns.find((e) => e.animal1 === animal || e.animal2 === animal);
}

export function getTriangle(animal: Animal): Triangle | undefined {
  return zodiacTriangles.find((t) => t.animals.includes(animal));
}

export function getCompatibilityDescription(rating: CompatibilityRating): string {
  switch (rating) {
    case 'Excellent':
      return 'A naturally harmonious match with strong potential for lasting connection. Shared values and complementary strengths create a powerful bond.';
    case 'Good':
      return 'A positive match with good potential. Some differences exist but can be overcome with mutual understanding and respect.';
    case 'Moderate':
      return 'A mixed match with both strengths and challenges. Success requires conscious effort, communication, and compromise from both sides.';
    case 'Challenging':
      return 'A challenging match with significant differences. While growth is possible, the relationship will require substantial patience, understanding, and work from both partners.';
  }
}

export function scoreToRating(score: number): CompatibilityRating {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  return 'Challenging';
}

export function ratingToScore(rating: CompatibilityRating): number {
  switch (rating) {
    case 'Excellent':
      return 90;
    case 'Good':
      return 70;
    case 'Moderate':
      return 50;
    case 'Challenging':
      return 30;
  }
}
