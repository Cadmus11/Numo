export interface Article {
  id: string;
  category: 'numerology' | 'chinese-zodiac' | 'guide';
  title: string;
  subtitle: string;
  content: string;
  relatedArticles?: string[];
}

export const articles: Article[] = [
  {
    id: 'what-is-numerology',
    category: 'guide',
    title: 'What is Numerology?',
    subtitle: 'An introduction to the ancient science of numbers',
    content: `Numerology is the ancient study of the spiritual significance of numbers. It is based on the belief that numbers are not just mathematical symbols but carry specific vibrations and energies that influence our lives.

The origins of numerology date back thousands of years to ancient Babylon, Egypt, Greece, China, and India. The Greek philosopher Pythagoras (c. 570–495 BCE) is often credited as the father of modern Western numerology. He believed that numbers were the building blocks of the universe and that everything in existence could be expressed through numerical patterns.

In numerology, we calculate several key numbers from your name and date of birth. Each number from 1 to 9 has a unique meaning, and Master Numbers 11, 22, and 33 carry special significance.

Your numerology chart reveals your strengths, challenges, life purpose, and the cycles of energy that shape your life journey. It is a powerful tool for self-discovery, personal growth, and understanding your relationships with others.`,
    relatedArticles: ['how-calculations-work', 'life-path-numbers'],
  },
  {
    id: 'how-calculations-work',
    category: 'guide',
    title: 'How Numerology Calculations Work',
    subtitle: 'Understanding the method behind the numbers',
    content: `Numerology calculations are based on reducing numbers to their single-digit root, with the exception of Master Numbers 11, 22, and 33.

R E D U C T I O N

To reduce a number, you add all its digits together. If the result is still not a single digit (or a Master Number), you continue adding until you reach one.

Example: 1987 → 1 + 9 + 8 + 7 = 25 → 2 + 5 = 7

M A S T E R   N U M B E R S

Master Numbers 11, 22, and 33 are not reduced further because they carry higher spiritual vibrations. They represent intensified versions of their root numbers (2, 4, and 6).

P Y T H A G O R E A N   C H A R T

Each letter in your name is assigned a number based on the Pythagorean system:

1: A, J, S
2: B, K, T
3: C, L, U
4: D, M, V
5: E, N, W
6: F, O, X
7: G, P, Y
8: H, Q, Z
9: I, R

K E Y   F O R M U L A S

Life Path Number: Month + Day + Year of birth (reduced)
Expression Number: Full birth name (all letters)
Soul Urge Number: Vowels in full name
Personality Number: Consonants in full name
Personal Year: Birth month + birth day + current year`,
    relatedArticles: ['what-is-numerology', 'life-path-numbers'],
  },
  {
    id: 'life-path-numbers',
    category: 'numerology',
    title: 'Life Path Numbers',
    subtitle: 'Your life purpose and core personality',
    content: `Your Life Path Number is the most important number in your numerology chart. It is calculated from your date of birth and reveals your life purpose, core personality, and the major lessons you came here to learn.

Think of your Life Path Number as the road you are traveling in this lifetime. It describes your natural talents, your challenges, and the experiences that will shape your journey.

Each Life Path Number from 1 to 9 carries a unique vibration:

1 — The Leader: Independent, ambitious, pioneering
2 — The Diplomat: Cooperative, sensitive, peacemaker
3 — The Creative: Expressive, optimistic, artistic
4 — The Builder: Practical, disciplined, reliable
5 — The Adventurer: Freedom-loving, versatile, curious
6 — The Nurturer: Responsible, caring, community-focused
7 — The Seeker: Analytical, spiritual, thoughtful
8 — The Achiever: Ambitious, executive, authoritative
9 — The Humanitarian: Compassionate, wise, global-minded

Master Numbers:
11 — The Intuitive: Inspired, visionary, spiritual messenger
22 — The Master Builder: Visionary architect, practical manifestor
33 — The Master Teacher: Universal love, spiritual guidance`,
    relatedArticles: ['what-is-numerology', 'master-numbers'],
  },
  {
    id: 'master-numbers',
    category: 'numerology',
    title: 'Master Numbers 11, 22, and 33',
    subtitle: 'The higher vibrations of spiritual power',
    content: `Master Numbers are the exceptions in numerology — they are not reduced to a single digit because they carry higher spiritual vibrations and greater potential.

M A S T E R   N U M B E R   1 1 — The Intuitive

Number 11 amplifies the qualities of Number 2 (diplomacy, sensitivity) to a higher level. Those with Life Path 11 are highly intuitive, inspired, and spiritually aware. They are natural visionaries who can inspire others toward higher consciousness.

The challenge of 11 is managing extreme sensitivity and nervous energy. Learning to ground spiritual insights in practical reality is essential.

M A S T E R   N U M B E R   2 2 — The Master Builder

Number 22 amplifies the qualities of Number 4 (practicality, building) to a master level. Those with Life Path 22 have the unique ability to turn grand visions into practical reality. They can build lasting structures that benefit humanity on a large scale.

The challenge of 22 is handling the enormous pressure and responsibility that comes with such potential. Learning to delegate and maintain balance is crucial.

M A S T E R   N U M B E R   3 3 — The Master Teacher

Number 33 amplifies the qualities of Number 6 (nurturing, service) to its highest expression. Those with Life Path 33 embody unconditional love and universal compassion. They are here to teach and heal humanity through pure love.

The challenge of 33 is the weight of carrying such a high vibration. Self-care and maintaining personal boundaries while serving others is the key lesson.`,
    relatedArticles: ['life-path-numbers', 'karmic-debt'],
  },
  {
    id: 'karmic-debt',
    category: 'numerology',
    title: 'Karmic Debt Numbers',
    subtitle: 'Understanding 13, 14, 16, and 19',
    content: `Karmic Debt Numbers appear in your numerology chart when certain calculations produce 13, 14, 16, or 19. These numbers indicate unfinished business from past lives that you are here to resolve.

K A R M I C   D E B T   1 3

Past life issue: Laziness and taking shortcuts.
This life lesson: Learn discipline and hard work.
Growth path: Embrace challenges as opportunities to build character through persistent effort.

K A R M I C   D E B T   1 4

Past life issue: Abuse of freedom and excess.
This life lesson: Balance freedom with responsibility.
Growth path: Learn that true freedom comes through honoring commitments and practicing moderation.

K A R M I C   D E B T   1 6

Past life issue: Ego inflation and abuse of power.
This life lesson: Humility and spiritual awakening.
Growth path: Allow ego-destroying experiences to rebuild you on a foundation of authentic humility.

K A R M I C   D E B T   1 9

Past life issue: Selfishness and manipulation.
This life lesson: Independence in service of others.
Growth path: Use your natural leadership abilities to empower others rather than control them.

Karmic Debt is not a punishment — it is an opportunity for profound growth. When you face these challenges consciously, you transform your greatest struggles into your greatest strengths.`,
    relatedArticles: ['karmic-lessons', 'life-path-numbers'],
  },
  {
    id: 'karmic-lessons',
    category: 'numerology',
    title: 'Karmic Lessons',
    subtitle: 'Missing numbers and life challenges',
    content: `Karmic Lessons are revealed by the numbers that are missing from your full birth name chart. These missing numbers indicate areas of life where you have less natural strength and need to develop consciously.

There are nine possible Karmic Lessons, one for each number 1 through 9:

Missing 1: You need to develop independence and assertiveness.
Missing 2: You need to develop cooperation and sensitivity.
Missing 3: You need to develop self-expression and creativity.
Missing 4: You need to develop discipline and organization.
Missing 5: You need to develop adaptability and embrace change.
Missing 6: You need to develop responsibility and service.
Missing 7: You need to develop trust and inner wisdom.
Missing 8: You need to develop power and abundance consciousness.
Missing 9: You need to develop compassion and the ability to let go.

You may have multiple Karmic Lessons, and your challenge is to consciously develop these qualities over the course of your life.

Unlike Karmic Debt, which represents specific past-life issues, Karmic Lessons are simply areas where your soul chose to focus growth in this lifetime.`,
    relatedArticles: ['karmic-debt', 'how-calculations-work'],
  },
  {
    id: 'personal-cycles',
    category: 'numerology',
    title: 'Personal Year, Month, and Day Cycles',
    subtitle: 'Understanding the rhythm of your life',
    content: `Your personal cycles reveal the energy patterns that shape your life on a yearly, monthly, and daily basis.

P E R S O N A L   Y E A R

Your Personal Year runs from your birthday to your next birthday and reveals the major theme of that period. The cycle repeats every 9 years:

Year 1: New beginnings, leadership
Year 2: Partnership, patience
Year 3: Creativity, social connection
Year 4: Hard work, building foundations
Year 5: Change, freedom, adventure
Year 6: Family, responsibility, love
Year 7: Reflection, study, inner growth
Year 8: Achievement, abundance, power
Year 9: Completion, release, transformation

P E R S O N A L   M O N T H

Within each Personal Year, the monthly cycles add additional flavor. Your Personal Month combines your Personal Year energy with the month number.

P E R S O N A L   D A Y

Your Personal Day gives you guidance for each day. By understanding your daily energy, you can align your activities with the most favorable vibrations.

U N I V E R S A L   C Y C L E S

In addition to your personal cycles, Universal cycles affect everyone. The Universal Year is calculated from the current calendar year and describes the collective energy we are all experiencing.

By understanding both your personal and universal cycles, you can navigate life with greater awareness and make choices that align with your current energy.`,
    relatedArticles: ['life-path-numbers', 'how-calculations-work'],
  },
  {
    id: 'challenge-numbers',
    category: 'numerology',
    title: 'Challenge Numbers',
    subtitle: 'Your growth edges and life obstacles',
    content: `Challenge Numbers represent the obstacles and growth areas you will face during different periods of your life. They are calculated from your date of birth and reveal the specific challenges that will help you develop your character.

There are four Challenge Numbers, each corresponding to a different life period:

First Challenge: Early childhood and youth (ages 0 to approximately 30-35)
Second Challenge: Adulthood and middle years
Third Challenge: Major life challenge (most significant)
Fourth Challenge: Maturity and later years

Each Challenge Number from 0 to 9 carries a specific meaning:

Challenge 0 (All Possibilities): You have free will to choose your path
Challenge 1 (Assertiveness): Learn to stand up for yourself
Challenge 2 (Sensitivity): Balance emotions with strength
Challenge 3 (Self-Expression): Find your authentic voice
Challenge 4 (Discipline): Build structure and persistence
Challenge 5 (Freedom): Balance freedom with commitment
Challenge 6 (Responsibility): Serve without sacrificing yourself
Challenge 7 (Trust): Develop faith in the unseen
Challenge 8 (Abundance): Handle power and prosperity
Challenge 9 (Letting Go): Release and move forward

Your challenges are not punishments — they are the specific areas where your soul chose to grow in this lifetime. Embracing them leads to your greatest strength.`,
    relatedArticles: ['pinnacle-cycles', 'life-path-numbers'],
  },
  {
    id: 'pinnacle-cycles',
    category: 'numerology',
    title: 'Pinnacle Cycles',
    subtitle: 'The four major stages of your life',
    content: `Pinnacle Cycles are the four major chapters of your life, each lasting approximately 27-30 years. They describe the primary theme and opportunities of each life stage.

P I N N A C L E   1 — Youth (First ~30 years)

The first pinnacle covers your early life and the foundation of your personality. During this period, you establish your basic approach to life and learn your earliest lessons.

P I N N A C L E   2 — Development (Ages ~30 to ~55)

The second pinnacle is a period of growth and building. You develop your skills, career, relationships, and begin to understand your life purpose more deeply.

P I N N A C L E   3 — Achievement (Ages ~55 to ~80)

The third pinnacle represents your peak period of contribution and achievement. You have the wisdom of experience and the energy to make a significant impact.

P I N N A C L E   4 — Legacy (After ~80+)

The fourth pinnacle is about reflection, wisdom, and legacy. You share what you have learned and enjoy the fruits of your life journey.

Like all numerology calculations, the specific numbers of your pinnacles reveal the unique energy of each life stage. Understanding your pinnacles helps you navigate each chapter with awareness and purpose.`,
    relatedArticles: ['challenge-numbers', 'life-path-numbers'],
  },
  {
    id: 'chinese-zodiac-intro',
    category: 'chinese-zodiac',
    title: 'Introduction to the Chinese Zodiac',
    subtitle: 'The ancient system of animal signs and elements',
    content: `The Chinese Zodiac (Shēngxiào) is a 12-year cycle where each year is represented by an animal. Based on ancient Chinese astronomy and philosophy, it has been used for centuries to understand personality, compatibility, and destiny.

The 12 animals in order are: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.

According to legend, the Jade Emperor invited all animals to a race across a river. The first twelve to cross were given a year in the zodiac calendar. The Rat, being clever, hitched a ride on the Ox and jumped off first to win.

Each animal sign is associated with one of the Five Elements (Wood, Fire, Earth, Metal, Water), which adds depth to the personality reading. The element cycle runs alongside the animal cycle, creating a 60-year combination cycle.

Your Chinese Zodiac sign is determined by your birth year. Unlike Western astrology, the Chinese Zodiac year begins with the Lunar New Year (typically late January to mid-February).

The Chinese Zodiac is used for understanding personality, predicting compatibility in love and business, and making important life decisions.`,
    relatedArticles: ['chinese-zodiac-animals', 'chinese-zodiac-compatibility'],
  },
  {
    id: 'chinese-zodiac-animals',
    category: 'chinese-zodiac',
    title: 'The 12 Chinese Zodiac Animals',
    subtitle: 'Personalities and characteristics of each sign',
    content: `Each of the 12 Chinese Zodiac animals has distinct personality traits, strengths, and weaknesses.

R A T   (1948, 1960, 1972, 1984, 1996, 2008, 2020)

Intelligent, charming, and quick-witted. Rats are natural survivors who excel in social situations. They are ambitious but can be secretive. Element: Water

O X   (1949, 1961, 1973, 1985, 1997, 2009, 2021)

Diligent, dependable, and strong. Oxen are patient workers who earn respect through persistence. They can be stubborn but are incredibly trustworthy. Element: Earth

T I G E R   (1950, 1962, 1974, 1986, 1998, 2010, 2022)

Bold, charismatic, and competitive. Tigers are natural leaders who inspire others with their courage. They can be impulsive but are passionate and protective. Element: Wood

R A B B I T   (1951, 1963, 1975, 1987, 1999, 2011, 2023)

Graceful, elegant, and diplomatic. Rabbits value peace and harmony. They are creative and kind but can be overly cautious. Element: Wood

D R A G O N   (1952, 1964, 1976, 1988, 2000, 2012, 2024)

Charismatic, confident, and powerful. Dragons are natural leaders with grand visions. They are generous but can be demanding. Element: Earth

S N A K E   (1953, 1965, 1977, 1989, 2001, 2013, 2025)

Wise, enigmatic, and intuitive. Snakes are deep thinkers with a magnetic presence. They are determined but can be possessive. Element: Fire

H O R S E   (1954, 1966, 1978, 1990, 2002, 2014, 2026)

Energetic, free-spirited, and adventurous. Horses love freedom and movement. They are honest but can be impatient. Element: Fire

G O A T   (1955, 1967, 1979, 1991, 2003, 2015, 2027)

Gentle, creative, and compassionate. Goats are artistic souls who value beauty and harmony. They are kind but can be pessimistic. Element: Earth

M O N K E Y   (1956, 1968, 1980, 1992, 2004, 2016, 2028)

Clever, inventive, and witty. Monkeys are brilliant problem-solvers and entertainers. They are versatile but can be mischievous. Element: Metal

R O O S T E R   (1957, 1969, 1981, 1993, 2005, 2017, 2029)

Confident, punctual, and observant. Roosters are natural organizers who pay attention to details. They are hardworking but can be critical. Element: Metal

D O G   (1958, 1970, 1982, 1994, 2006, 2018, 2030)

Loyal, honest, and dependable. Dogs have a strong sense of justice. They are trustworthy but can be pessimistic. Element: Earth

P I G   (1959, 1971, 1983, 1995, 2007, 2019, 2031)

Generous, compassionate, and honest. Pigs enjoy life\'s pleasures and are warm-hearted. They are hardworking but can be naive. Element: Water`,
    relatedArticles: ['chinese-zodiac-intro', 'chinese-zodiac-compatibility'],
  },
  {
    id: 'chinese-zodiac-compatibility',
    category: 'chinese-zodiac',
    title: 'Chinese Zodiac Compatibility',
    subtitle: 'Love, friendship, and business matching',
    content: `Chinese Zodiac compatibility is a rich system that helps understand how different animal signs relate to each other in love, friendship, and business.

T H E   A L L I A N C E   T R I A N G L E S

Animals are grouped into four compatibility triangles of three animals each. Signs within the same triangle are naturally compatible:

Group 1: Rat, Dragon, Monkey — The Innovators
Group 2: Ox, Snake, Rooster — The Builders
Group 3: Tiger, Horse, Dog — The Adventurers
Group 4: Rabbit, Goat, Pig — The Creatives

E N E M Y   S I G N S

Six pairs are considered direct enemies, opposite each other on the zodiac wheel:

Rat ↔ Horse
Ox ↔ Goat
Tiger ↔ Monkey
Rabbit ↔ Rooster
Dragon ↔ Dog
Snake ↔ Pig

These relationships require extra effort and understanding, but can also offer profound growth opportunities.

C O M P A T I B I L I T Y   R A T I N G S

Each pair receives ratings in three categories:

Excellent: Naturally harmonious, strong potential
Good: Positive match, minor differences
Moderate: Mixed match, requires work
Challenging: Significant differences, requires substantial effort

For the most complete compatibility analysis, NUMO combines Chinese Zodiac matching with Numerology calculations for a comprehensive understanding of any relationship.`,
    relatedArticles: ['chinese-zodiac-animals', 'chinese-zodiac-intro'],
  },
  {
    id: 'chinese-zodiac-elements',
    category: 'chinese-zodiac',
    title: 'The Five Elements in Chinese Zodiac',
    subtitle: 'Wood, Fire, Earth, Metal, and Water',
    content: `The Five Elements (Wu Xing) are a fundamental part of Chinese philosophy and Chinese Zodiac readings. Each element adds depth and nuance to the basic animal sign.

T H E   F I V E   E L E M E N T S

Wood: Associated with growth, creativity, and flexibility. Wood signs are expansive, visionary, and nurturing. Strengths include generosity and idealism. Weaknesses include impatience and restlessness.

Fire: Associated with passion, energy, and transformation. Fire signs are dynamic, charismatic, and action-oriented. Strengths include enthusiasm and courage. Weaknesses include impulsiveness and burnout.

Earth: Associated with stability, nourishment, and practicality. Earth signs are grounded, reliable, and supportive. Strengths include patience and responsibility. Weaknesses include stubbornness and caution.

Metal: Associated with strength, determination, and structure. Metal signs are disciplined, focused, and resilient. Strengths include integrity and ambition. Weaknesses include rigidity and being overly critical.

Water: Associated with wisdom, adaptability, and intuition. Water signs are deep, reflective, and communicative. Strengths include intelligence and diplomacy. Weaknesses include being overly cautious and secretive.

T H E   E L E M E N T   C Y C L E

The elements follow a 60-year cycle (5 elements × 12 animals). Each animal sign appears once in each element over a 60-year period.

The elements interact in two cycles:

Generative Cycle: Wood → Fire → Earth → Metal → Water → Wood
Controlling Cycle: Wood → Earth → Water → Fire → Metal → Wood

Understanding the elements of both partners adds another layer to compatibility analysis, beyond just the animal signs.`,
    relatedArticles: ['chinese-zodiac-compatibility', 'chinese-zodiac-animals'],
  },
  {
    id: 'interpretation-methods',
    category: 'guide',
    title: 'How to Interpret Your Numerology Chart',
    subtitle: 'A guide to reading your complete profile',
    content: `Your complete numerology chart contains multiple numbers, each revealing a different aspect of your being. Here is how to read and integrate the information.

T H E   H I E R A R C H Y   O F   N U M B E R S

1. Life Path Number: Your core purpose and life journey. This is the most important number.
2. Expression Number: Your talents, potential, and life direction.
3. Soul Urge Number: Your inner desires, motivations, and emotional needs.
4. Personality Number: How others perceive you and your public image.
5. Day of Birth Number: Your natural gifts and behavioral tendencies.
6. Attitude Number: Your first impressions and social style.

I N T E G R A T I O N

The true power of numerology comes from seeing how all your numbers work together. For example:

- A Life Path 1 with Expression 7 is different from a Life Path 1 with Expression 3
- Your Soul Urge may reveal desires that contrast with your outward Personality
- Your Karmic Lessons show where you need to grow beyond your natural tendencies

C Y C L E S   A N D   T I M I N G

Your numerology chart is not static — your Personal Year, Month, and Day cycles change regularly, revealing the evolving energy of your life journey.

T I P S   F O R   I N T E R P R E T A T I O N

1. Start with your Life Path Number
2. Notice which numbers repeat in your chart
3. Pay attention to Karmic Debt and Lessons
4. Compare your numbers with those of people close to you
5. Track your Personal Year cycles over time
6. Use daily numbers to guide your activities

Your numerology chart is a map, not a destiny. It shows your natural tendencies and potential, but you always have free will to choose how you express these energies.`,
    relatedArticles: ['what-is-numerology', 'how-calculations-work'],
  },
];

export const articlesByCategory: Record<string, Article[]> = {
  numerology: [],
  'chinese-zodiac': [],
  guide: [],
};

articles.forEach((article) => {
  articlesByCategory[article.category]?.push(article);
});

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function searchArticles(query: string): Article[] {
  const lower = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lower) ||
      a.subtitle.toLowerCase().includes(lower) ||
      a.content.toLowerCase().includes(lower)
  );
}
