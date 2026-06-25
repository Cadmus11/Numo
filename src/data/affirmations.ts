export interface Affirmation {
  lifePathNumber: number;
  personalYearNumber: number;
  affirmations: string[];
}

const baseAffirmations: Record<number, string[]> = {
  1: [
    'I am a natural leader and inspire others through my courage.',
    'I trust my unique vision and have the power to create my reality.',
    'I am confident, independent, and capable of achieving greatness.',
    'My pioneering spirit guides me to new and exciting opportunities.',
  ],
  2: [
    'I am a peaceful being who creates harmony wherever I go.',
    'My sensitivity is my superpower, allowing me to connect deeply with others.',
    'I trust the process of life and know that everything unfolds in perfect timing.',
    'I am worthy of love, cooperation, and beautiful partnerships.',
  ],
  3: [
    'I am a channel for creative expression and joy.',
    'My voice matters and I share my gifts freely with the world.',
    'I attract abundance through my optimism and authentic self-expression.',
    'Creativity flows through me effortlessly and brings joy to others.',
  ],
  4: [
    'I am building a solid foundation for a beautiful life.',
    'My discipline and dedication create lasting success.',
    'I am grounded, stable, and capable of creating security in my life.',
    'Every step I take builds toward my highest good.',
  ],
  5: [
    'I embrace change as a gateway to growth and adventure.',
    'I am free to explore, grow, and become my highest self.',
    'My adaptable spirit navigates all of life with grace and courage.',
    'Freedom and responsibility dance harmoniously in my life.',
  ],
  6: [
    'I nurture myself and others with unconditional love.',
    'My home is a sanctuary of peace, beauty, and harmony.',
    'I serve the world through love, responsibility, and compassion.',
    'I balance giving and receiving with grace and healthy boundaries.',
  ],
  7: [
    'I trust my inner wisdom and the guidance of the universe.',
    'My analytical mind and spiritual heart work in perfect harmony.',
    'I am deeply connected to the wisdom within and around me.',
    'Solitude recharges my soul and brings me closer to truth.',
  ],
  8: [
    'I am worthy of abundance, success, and prosperity.',
    'My power is used in service of my highest good and the good of others.',
    'I attract wealth and success while staying spiritually grounded.',
    'I lead with integrity, authority, and wisdom.',
  ],
  9: [
    'I release what no longer serves me with love and gratitude.',
    'My compassion heals both myself and the world around me.',
    'I am a force of love, wisdom, and positive transformation.',
    'I serve humanity with an open heart and a clear vision.',
  ],
  11: [
    'I am a divine channel for inspiration and higher wisdom.',
    'My intuition guides me perfectly in every moment.',
    'I trust my spiritual gifts and share them with the world.',
    'I am illuminated by the light of my higher purpose.',
  ],
  22: [
    'I have the power to turn my grandest visions into reality.',
    'I am a master builder of dreams that benefit all humanity.',
    'My practical wisdom and visionary spirit create lasting impact.',
    'I am capable of building anything I can imagine.',
  ],
  33: [
    'I am a vessel of universal love and divine wisdom.',
    'My teaching and healing serve the highest good of all.',
    'I am guided by love in all my thoughts, words, and actions.',
    'I am one with the infinite source of compassion and understanding.',
  ],
};

const yearSpecificAffirmations: Record<number, Record<number, string[]>> = {
  1: {
    1: ['This year I boldly step into my leadership and start fresh with confidence.'],
    2: ['I build powerful partnerships that support my vision.'],
    3: ['My creative expression opens doors I never imagined.'],
    4: ['I build solid foundations for my grand ambitions.'],
    5: ['I embrace exciting changes that propel me forward.'],
    6: ['I lead with love and build a beautiful community around me.'],
    7: ['I pause to gain wisdom that will guide my next bold steps.'],
    8: ['I achieve remarkable success through my independent spirit.'],
    9: ['I complete this cycle with gratitude and prepare for my next beginning.'],
  },
  2: {
    1: ['This year I step forward gently, trusting my path.'],
    2: ['I nurture relationships that bring me peace and joy.'],
    3: ['I express myself creatively within loving partnerships.'],
    4: ['I build stable structures of support with loved ones.'],
    5: ['I embrace changes that deepen my connections.'],
    6: ['Love and harmony flow abundantly through my relationships.'],
    7: ['I reflect on my relationships and grow in understanding.'],
    8: ['My partnerships flourish and bring mutual abundance.'],
    9: ['I release old relationship patterns with love and gratitude.'],
  },
  3: {
    1: ['This year I boldly share my creative gifts with the world.'],
    2: ['I collaborate with others to bring beautiful ideas to life.'],
    3: ['Joy and creativity overflow in every area of my life.'],
    4: ['I channel my creativity into practical, lasting projects.'],
    5: ['My creative adventures bring exciting new opportunities.'],
    6: ['I create beauty that blesses my family and community.'],
    7: ['My creative work deepens my spiritual understanding.'],
    8: ['My creative talents bring both fulfillment and abundance.'],
    9: ['I share my art generously and release it to bless others.'],
  },
  4: {
    1: ['This year I take the lead in building my dreams.'],
    2: ['I build my foundations through cooperation and teamwork.'],
    3: ['I bring creativity into my practical projects.'],
    4: ['My discipline creates a rock-solid foundation for my future.'],
    5: ['I build flexibility into my structures and embrace change.'],
    6: ['I build a beautiful home and community with love.'],
    7: ['I build wisdom through dedicated study and practice.'],
    8: ['My hard work pays off with tangible success and rewards.'],
    9: ['I complete my building projects and prepare for new foundations.'],
  },
  5: {
    1: ['This year I take the lead on my greatest adventure yet.'],
    2: ['I share my adventures with loved ones who uplift me.'],
    3: ['My stories and experiences inspire others to explore.'],
    4: ['I build freedom through discipline and smart choices.'],
    5: ['I embrace change and thrive in the winds of transformation.'],
    6: ['My adventures bring me closer to what truly matters.'],
    7: ['I explore the inner landscape with as much courage as the outer.'],
    8: ['My freedom brings abundance and exciting opportunities.'],
    9: ['I release the need to wander and find peace in the present.'],
  },
  6: {
    1: ['This year I take the lead in creating harmony for my loved ones.'],
    2: ['I nurture my relationships with patience and understanding.'],
    3: ['I bring joy and creativity into my home and family.'],
    4: ['I build a stable, beautiful home for those I love.'],
    5: ['I bring fresh energy and positive changes to my family life.'],
    6: ['Love is the foundation of everything I do this year.'],
    7: ['I find deeper meaning in my responsibilities and service.'],
    8: ['My family and I thrive in abundance and harmony.'],
    9: ['I release the need to control and trust my loved ones journey.'],
  },
  7: {
    1: ['This year I take the lead in my spiritual growth.'],
    2: ['I find wisdom in my relationships and connections.'],
    3: ['I express my spiritual insights through creative work.'],
    4: ['I build a disciplined spiritual practice.'],
    5: ['I explore new philosophies and expand my understanding.'],
    6: ['I find wisdom in service and love.'],
    7: ['I rest in the deep knowing of my inner wisdom.'],
    8: ['My spiritual and material lives are in perfect balance.'],
    9: ['I share my wisdom generously and release attachments.'],
  },
  8: {
    1: ['This year I take the lead in creating my abundance.'],
    2: ['I build wealth through powerful partnerships.'],
    3: ['My creative work brings both joy and prosperity.'],
    4: ['I build lasting wealth through discipline and smart planning.'],
    5: ['I embrace bold opportunities that lead to abundance.'],
    6: ['My success blesses my family and community.'],
    7: ['I balance my inner growth with outer achievement.'],
    8: ['Abundance flows to me effortlessly and I receive it with gratitude.'],
    9: ['I use my resources to serve others and complete this cycle.'],
  },
  9: {
    1: ['This year I lead with compassion and complete what I started.'],
    2: ['I find peace in releasing old partnerships gracefully.'],
    3: ['My creative work this year serves a higher purpose.'],
    4: ['I complete the structures I have built with satisfaction.'],
    5: ['I release the old and embrace the transformative journey.'],
    6: ['I serve my loved ones by letting go with love.'],
    7: ['I find deep wisdom in the completion of this cycle.'],
    8: ['I use my abundance to make a difference in the world.'],
    9: ['I complete my cycle with gratitude, grace, and open arms.'],
  },
};

export function getAffirmations(lifePathNumber: number, personalYearNumber: number): string[] {
  const base = baseAffirmations[lifePathNumber] || baseAffirmations[1];
  const yearSpecific = yearSpecificAffirmations[lifePathNumber]?.[personalYearNumber] || [];

  if (personalYearNumber >= 1 && personalYearNumber <= 9) {
    return [...base, ...yearSpecific];
  }

  return base;
}

export function getDailyAffirmation(lifePathNumber: number): string {
  const base = baseAffirmations[lifePathNumber] || baseAffirmations[1];
  const index = new Date().getDate() % base.length;
  return base[index];
}
