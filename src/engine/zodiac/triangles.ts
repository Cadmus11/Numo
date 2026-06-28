import { Animal } from './animals';

export interface AllianceGroup {
  animals: [Animal, Animal, Animal];
  title: string;
  description: string;
}

const ALLIANCE_GROUPS: AllianceGroup[] = [
  {
    animals: [Animal.Rat, Animal.Dragon, Animal.Monkey],
    title: 'The Innovators',
    description:
      'Dynamic, ambitious, and resourceful — this group thrives on big ideas and mutual inspiration.',
  },
  {
    animals: [Animal.Ox, Animal.Snake, Animal.Rooster],
    title: 'The Achievers',
    description:
      'Hardworking, determined, and detail-oriented — this group builds lasting success through discipline.',
  },
  {
    animals: [Animal.Tiger, Animal.Horse, Animal.Dog],
    title: 'The Adventurers',
    description:
      'Passionate, loyal, and freedom-loving — this group is driven by ideals and authentic connection.',
  },
  {
    animals: [Animal.Rabbit, Animal.Goat, Animal.Pig],
    title: 'The Creatives',
    description:
      'Artistic, gentle, and harmonious — this group excels in nurturing, beauty, and emotional depth.',
  },
];

const SECRET_FRIENDS: [Animal, Animal][] = [
  [Animal.Rat, Animal.Ox],
  [Animal.Tiger, Animal.Pig],
  [Animal.Rabbit, Animal.Dog],
  [Animal.Dragon, Animal.Rooster],
  [Animal.Snake, Animal.Monkey],
  [Animal.Horse, Animal.Goat],
];

export function getAllianceGroups(): AllianceGroup[] {
  return ALLIANCE_GROUPS;
}

export function getAllianceGroup(animal: Animal): AllianceGroup | undefined {
  return ALLIANCE_GROUPS.find((group) => group.animals.includes(animal));
}

export function areInSameTriangle(animalA: Animal, animalB: Animal): boolean {
  return ALLIANCE_GROUPS.some(
    (group) => group.animals.includes(animalA) && group.animals.includes(animalB)
  );
}

export function getSecretFriend(animal: Animal): Animal | undefined {
  const pair = SECRET_FRIENDS.find(([a, b]) => a === animal || b === animal);
  if (!pair) return undefined;
  return pair[0] === animal ? pair[1] : pair[0];
}

export function isSecretFriend(animalA: Animal, animalB: Animal): boolean {
  return SECRET_FRIENDS.some(
    ([a, b]) => (a === animalA && b === animalB) || (a === animalB && b === animalA)
  );
}
