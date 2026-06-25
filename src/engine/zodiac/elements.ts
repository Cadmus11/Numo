export enum Element {
  Metal = 'Metal',
  Water = 'Water',
  Wood = 'Wood',
  Fire = 'Fire',
  Earth = 'Earth',
}

export enum ElementYinYang {
  Yang = 'Yang',
  Yin = 'Yin',
}

const ELEMENT_MAP: Record<number, { element: Element; yinYang: ElementYinYang }> = {
  0: { element: Element.Metal, yinYang: ElementYinYang.Yang },
  1: { element: Element.Metal, yinYang: ElementYinYang.Yin },
  2: { element: Element.Water, yinYang: ElementYinYang.Yang },
  3: { element: Element.Water, yinYang: ElementYinYang.Yin },
  4: { element: Element.Wood, yinYang: ElementYinYang.Yang },
  5: { element: Element.Wood, yinYang: ElementYinYang.Yin },
  6: { element: Element.Fire, yinYang: ElementYinYang.Yang },
  7: { element: Element.Fire, yinYang: ElementYinYang.Yin },
  8: { element: Element.Earth, yinYang: ElementYinYang.Yang },
  9: { element: Element.Earth, yinYang: ElementYinYang.Yin },
};

export function getElement(year: number): Element {
  return ELEMENT_MAP[year % 10].element;
}

export function getYinYang(year: number): ElementYinYang {
  return ELEMENT_MAP[year % 10].yinYang;
}

export function getFullElement(year: number): { element: Element; yinYang: ElementYinYang } {
  return ELEMENT_MAP[year % 10];
}
