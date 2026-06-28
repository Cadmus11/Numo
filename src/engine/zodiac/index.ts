import { Animal, getAnimal } from './animals';
import { Element, ElementYinYang, getFullElement } from './elements';
import { getAllianceGroup, getSecretFriend } from './triangles';
import type { AllianceGroup } from './triangles';

export interface ZodiacProfile {
  animal: Animal;
  element: Element;
  yinYang: ElementYinYang;
  allianceGroup: AllianceGroup | undefined;
  secretFriend: Animal | undefined;
}

export function getFullZodiacProfile(year: number): ZodiacProfile {
  const animal = getAnimal(year);
  const { element, yinYang } = getFullElement(year);
  const allianceGroup = getAllianceGroup(animal);
  const secretFriend = getSecretFriend(animal);

  return {
    animal,
    element,
    yinYang,
    allianceGroup,
    secretFriend,
  };
}

export { Animal } from './animals';
export { Element, ElementYinYang } from './elements';
export { CompatibilityRating } from './compatibility';
export type { EnemyPair } from './enemySigns';
export type { AllianceGroup } from './triangles';
export { getAnimal, getAnimalYears } from './animals';
export { getElement, getYinYang, getFullElement } from './elements';
export { getZodiacCompatibility, getZodiacCompatibilityScore } from './compatibility';
export { isDirectEnemy, getEnemyPairs } from './enemySigns';
export { getAllianceGroups, areInSameTriangle, isSecretFriend, getSecretFriend } from './triangles';
