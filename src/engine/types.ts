export interface ProfileData {
  firstName: string;
  middleName?: string;
  lastName: string;
  nickname?: string;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
}

export interface PinnacleCycle {
  ageStart: number;
  ageEnd: number;
  number: number;
}

export interface ChallengeSet {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

export interface PersonalCycles {
  personalYear: number;
  personalMonth: number;
  personalDay: number;
}

export interface UniversalCycles {
  universalYear: number;
  universalMonth: number;
  universalDay: number;
}

export interface CompatibilityScore {
  love: number;
  friendship: number;
  business: number;
}

export interface LuckyInfo {
  numbers: number[];
  days: string[];
  months: string[];
  colors: string[];
}

export interface FullNumerologyReport {
  lifePath: number;
  dayOfBirth: number;
  attitude: number;
  expression: number;
  soulUrge: number;
  personality: number;
  maturity: number;
  generation: number;
  cornerstone: number;
  capstone: number;
  balance: number;
  rationalThought: number;
  subconsciousSelf: number;
  karmicLessons: number[];
  karmicDebts: number[];
  challenges: ChallengeSet;
  pinnacles: PinnacleCycle[];
  personalCycles: PersonalCycles;
  universalCycles: UniversalCycles;
  lucky: LuckyInfo;
}
