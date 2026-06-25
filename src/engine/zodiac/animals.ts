export enum Animal {
  Rat = 'Rat',
  Ox = 'Ox',
  Tiger = 'Tiger',
  Rabbit = 'Rabbit',
  Dragon = 'Dragon',
  Snake = 'Snake',
  Horse = 'Horse',
  Goat = 'Goat',
  Monkey = 'Monkey',
  Rooster = 'Rooster',
  Dog = 'Dog',
  Pig = 'Pig',
}

const ANIMAL_CYCLE: Animal[] = [
  Animal.Rat,
  Animal.Ox,
  Animal.Tiger,
  Animal.Rabbit,
  Animal.Dragon,
  Animal.Snake,
  Animal.Horse,
  Animal.Goat,
  Animal.Monkey,
  Animal.Rooster,
  Animal.Dog,
  Animal.Pig,
];

export function getAnimal(year: number): Animal {
  const index = ((year - 4) % 12 + 12) % 12;
  return ANIMAL_CYCLE[index];
}

export function getAnimalYears(animal: Animal, startYear: number, count: number): number[] {
  const animalIndex = ANIMAL_CYCLE.indexOf(animal);
  const firstOccurrence = startYear + ((animalIndex - ((startYear - 4) % 12 + 12) % 12 + 12) % 12);
  const years: number[] = [];
  for (let i = 0; i < count; i++) {
    years.push(firstOccurrence + i * 12);
  }
  return years;
}
