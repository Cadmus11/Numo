export type NameNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

export interface NameNumberMeaning {
  expression: {
    title: string;
    lifePurpose: string;
    talents: string[];
    potential: string;
    careerDirection: string[];
  };
  soulUrge: {
    title: string;
    innerDesires: string;
    hiddenMotivations: string[];
    emotionalNeeds: string[];
  };
  personality: {
    title: string;
    externalImage: string;
    publicPerception: string;
    socialEnergy: string;
  };
}

export const nameNumberMeanings: Record<NameNumber, NameNumberMeaning> = {
  1: {
    expression: {
      title: 'The Pioneer',
      lifePurpose: 'To lead, innovate, and inspire others through original thinking and courageous action.',
      talents: ['Leadership and initiative', 'Original thinking and innovation', 'Independent decision-making', 'Courage to break new ground'],
      potential: 'You have the potential to become a pioneering force in your field, creating new paths for others to follow.',
      careerDirection: ['Entrepreneur and founder', 'Executive and director', 'Inventor and innovator', 'Independent professional'],
    },
    soulUrge: {
      title: 'The Independent Spirit',
      innerDesires: 'You deeply desire to be recognized as a unique individual. Your soul craves the freedom to express your originality and lead others toward new horizons.',
      hiddenMotivations: ['Need for personal recognition', 'Desire to be first and original', 'Drive to prove your capabilities', 'Yearning for independence'],
      emotionalNeeds: ['Autonomy and self-direction', 'Validation of your uniqueness', 'Freedom from limitations', 'Respect for your leadership'],
    },
    personality: {
      title: 'The Natural Leader',
      externalImage: 'You project confidence, authority, and self-assurance. People see you as someone who knows what they want and isn\'t afraid to go after it.',
      publicPerception: 'Others perceive you as ambitious, capable, and somewhat intimidating. Your strong presence commands attention naturally.',
      socialEnergy: 'You take the lead in social situations and naturally gravitate toward positions of influence.',
    },
  },
  2: {
    expression: {
      title: 'The Peacemaker',
      lifePurpose: 'To create harmony, build bridges between people, and use sensitivity and cooperation to make the world more balanced.',
      talents: ['Diplomacy and mediation', 'Sensitivity and intuition', 'Cooperation and teamwork', 'Attention to detail'],
      potential: 'You have the potential to become an exceptional mediator, healer, or partner who brings balance to every situation.',
      careerDirection: ['Counselor and therapist', 'Diplomat and mediator', 'Designer and artist', 'Support and service roles'],
    },
    soulUrge: {
      title: 'The Harmonious Heart',
      innerDesires: 'Your deepest desire is for peace and harmony. You yearn for meaningful connections and a world where everyone works together in balance.',
      hiddenMotivations: ['Need for harmony and balance', 'Desire for deep partnership', 'Drive to help and support', 'Yearning for acceptance'],
      emotionalNeeds: ['Peaceful environments', 'Emotional security', 'Mutual understanding', 'Appreciation for your sensitivity'],
    },
    personality: {
      title: 'The Gentle Diplomat',
      externalImage: 'You appear warm, approachable, and considerate. People feel safe and understood in your presence.',
      publicPerception: 'Others see you as kind, patient, and a good listener. You are often the person people turn to for support.',
      socialEnergy: 'You prefer small, intimate gatherings and one-on-one connections over large social events.',
    },
  },
  3: {
    expression: {
      title: 'The Creative Communicator',
      lifePurpose: 'To express creativity, inspire others through communication, and bring joy and beauty into the world through artistic expression.',
      talents: ['Creative expression and artistry', 'Communication and writing', 'Optimism and inspiration', 'Entertainment and performance'],
      potential: 'You have the potential to become a celebrated artist, writer, or speaker who moves and inspires audiences.',
      careerDirection: ['Writer and author', 'Artist and performer', 'Speaker and teacher', 'Creative director'],
    },
    soulUrge: {
      title: 'The Expressive Soul',
      innerDesires: 'Your soul craves creative expression and social connection. You yearn to be heard, seen, and appreciated for your unique voice.',
      hiddenMotivations: ['Need for creative outlet', 'Desire for social recognition', 'Drive to inspire others', 'Yearning for self-expression'],
      emotionalNeeds: ['Freedom to create', 'Social engagement', 'Appreciation and applause', 'Stimulation and variety'],
    },
    personality: {
      title: 'The Charming Optimist',
      externalImage: 'You project warmth, charisma, and enthusiasm. People are drawn to your positive energy and engaging presence.',
      publicPerception: 'Others see you as creative, fun-loving, and socially magnetic. You brighten any room you enter.',
      socialEnergy: 'You thrive in social settings and naturally become the center of attention, entertaining those around you.',
    },
  },
  4: {
    expression: {
      title: 'The Builder',
      lifePurpose: 'To create stable foundations, build lasting structures, and establish order and efficiency in the material world.',
      talents: ['Practical organization', 'Systematic thinking', 'Building and construction', 'Dependability and discipline'],
      potential: 'You have the potential to become a master builder of systems, organizations, and physical structures that stand the test of time.',
      careerDirection: ['Engineer and architect', 'Manager and administrator', 'Contractor and builder', 'Financial planner'],
    },
    soulUrge: {
      title: 'The Grounded Soul',
      innerDesires: 'You deeply desire stability, security, and order. Your soul craves the peace that comes from knowing everything is in its proper place.',
      hiddenMotivations: ['Need for security and stability', 'Desire for tangible results', 'Drive to create order', 'Yearning for predictability'],
      emotionalNeeds: ['Structure and routine', 'Financial security', 'Recognition for reliability', 'A solid home foundation'],
    },
    personality: {
      title: 'The Reliable Worker',
      externalImage: 'You appear steady, dependable, and serious. People trust you instinctively because of your grounded and consistent nature.',
      publicPerception: 'Others see you as the responsible one, someone who can be counted on to get the job done right.',
      socialEnergy: 'You prefer meaningful, purposeful interactions and are selective about your social circle.',
    },
  },
  5: {
    expression: {
      title: 'The Adventurer',
      lifePurpose: 'To explore life in all its dimensions, embrace freedom and change, and inspire others through your adventurous spirit.',
      talents: ['Adaptability and versatility', 'Communication and persuasion', 'Courage and risk-taking', 'Networking and connection'],
      potential: 'You have the potential to become a trailblazer, explorer, or freedom fighter who opens new doors for yourself and others.',
      careerDirection: ['Travel and tourism', 'Sales and marketing', 'Media and journalism', 'Entrepreneurship'],
    },
    soulUrge: {
      title: 'The Free Spirit',
      innerDesires: 'Your soul yearns for freedom, adventure, and new experiences. You crave variety and cannot be confined by routine.',
      hiddenMotivations: ['Need for freedom and autonomy', 'Desire for new experiences', 'Drive to explore limits', 'Yearning for excitement'],
      emotionalNeeds: ['Personal freedom', 'Variety and change', 'Stimulation and adventure', 'Room to explore'],
    },
    personality: {
      title: 'The Magnetic Explorer',
      externalImage: 'You project an exciting, adventurous energy that draws people to you. Your enthusiasm is infectious.',
      publicPerception: 'Others see you as dynamic, fun-loving, and always up for something new. You are the person everyone wants at their party.',
      socialEnergy: 'You thrive on social variety and enjoy meeting new people, making connections everywhere you go.',
    },
  },
  6: {
    expression: {
      title: 'The Nurturer',
      lifePurpose: 'To care for others, build community, and create beauty and harmony in the world through love and responsibility.',
      talents: ['Nurturing and caregiving', 'Counseling and advising', 'Artistic and creative', 'Community building'],
      potential: 'You have the potential to become a beloved teacher, healer, or community leader who makes the world a warmer place.',
      careerDirection: ['Healthcare and healing', 'Teaching and education', 'Counseling and social work', 'Arts and design'],
    },
    soulUrge: {
      title: 'The Caring Heart',
      innerDesires: 'Your deepest desire is to love and be loved. Your soul craves meaningful relationships and the opportunity to care for others.',
      hiddenMotivations: ['Need to nurture and protect', 'Desire for family and home', 'Drive to serve others', 'Yearning for beauty'],
      emotionalNeeds: ['Loving relationships', 'A beautiful home', 'Family connection', 'To feel needed and appreciated'],
    },
    personality: {
      title: 'The Warm Caregiver',
      externalImage: 'You project warmth, responsibility, and approachability. People naturally trust you with their problems.',
      publicPerception: 'Others see you as the caring, responsible person who always shows up when needed. You are the glue in your community.',
      socialEnergy: 'You gravitate toward creating community and bringing people together in warm, supportive environments.',
    },
  },
  7: {
    expression: {
      title: 'The Seeker of Truth',
      lifePurpose: 'To search for deep wisdom, understand the mysteries of life, and share your insights with those who seek truth.',
      talents: ['Analysis and research', 'Philosophical thinking', 'Spiritual insight', 'Technical expertise'],
      potential: 'You have the potential to become a renowned scholar, scientist, or spiritual teacher who uncovers profound truths.',
      careerDirection: ['Science and research', 'Philosophy and academia', 'Technology and programming', 'Spiritual teaching'],
    },
    soulUrge: {
      title: 'The Wisdom Seeker',
      innerDesires: 'Your soul craves knowledge, understanding, and truth. You yearn to penetrate the surface of reality and discover what lies beneath.',
      hiddenMotivations: ['Need for understanding', 'Desire for wisdom', 'Drive to find truth', 'Yearning for meaning'],
      emotionalNeeds: ['Time for contemplation', 'Intellectual stimulation', 'Privacy and solitude', 'Respect for your depth'],
    },
    personality: {
      title: 'The Wise Observer',
      externalImage: 'You appear thoughtful, reserved, and intelligent. People sense your depth and are often intrigued by your quiet presence.',
      publicPerception: 'Others see you as wise, analytical, and somewhat mysterious. Your thoughtful nature commands respect.',
      socialEnergy: 'You prefer deep, meaningful conversations and are selective about social engagements, valuing quality over quantity.',
    },
  },
  8: {
    expression: {
      title: 'The Achiever',
      lifePurpose: 'To master the material world, lead with authority, and use power and resources to create lasting impact.',
      talents: ['Business and financial acumen', 'Executive leadership', 'Strategic planning', 'Decision-making'],
      potential: 'You have the potential to become a powerful executive, successful entrepreneur, or influential leader who shapes industries.',
      careerDirection: ['Executive management', 'Finance and investment', 'Entrepreneurship', 'Law and politics'],
    },
    soulUrge: {
      title: 'The Ambitious Spirit',
      innerDesires: 'You deeply desire success, achievement, and recognition. Your soul drives you to reach the top and make your mark on the world.',
      hiddenMotivations: ['Need for achievement', 'Desire for wealth and status', 'Drive to lead and control', 'Yearning for respect'],
      emotionalNeeds: ['Professional success', 'Financial abundance', 'Authority and autonomy', 'Recognition of achievements'],
    },
    personality: {
      title: 'The Powerful Executive',
      externalImage: 'You project authority, confidence, and capability. People sense your power and take you seriously.',
      publicPerception: 'Others see you as ambitious, competent, and successful. Your executive presence is unmistakable.',
      socialEnergy: 'You network strategically and gravitate toward influential people and professional connections.',
    },
  },
  9: {
    expression: {
      title: 'The Humanitarian',
      lifePurpose: 'To serve humanity, practice universal love, and use your wisdom and compassion to make the world a better place.',
      talents: ['Compassion and empathy', 'Wisdom and perspective', 'Artistic expression', 'Global thinking'],
      potential: 'You have the potential to become a beloved humanitarian, visionary artist, or wise teacher who touches countless lives.',
      careerDirection: ['Non-profit and humanitarian work', 'Arts and entertainment', 'Teaching and education', 'International relations'],
    },
    soulUrge: {
      title: 'The Compassionate Soul',
      innerDesires: 'Your soul yearns to make a difference. You deeply desire to serve humanity and leave the world better than you found it.',
      hiddenMotivations: ['Need for purpose and meaning', 'Desire to serve others', 'Drive for justice and fairness', 'Yearning for universal love'],
      emotionalNeeds: ['To make a difference', 'Connection to humanity', 'Meaning and purpose', 'Acceptance of all people'],
    },
    personality: {
      title: 'The Wise Humanitarian',
      externalImage: 'You project warmth, wisdom, and acceptance. People feel your genuine care and are drawn to your compassionate presence.',
      publicPerception: 'Others see you as kind, wise, and selfless. Your humanitarian spirit inspires those around you.',
      socialEnergy: 'You are inclusive and accepting of all people, drawn to diverse groups and meaningful connections.',
    },
  },
  11: {
    expression: {
      title: 'The Illuminated Visionary',
      lifePurpose: 'To channel divine inspiration, illuminate truths for humanity, and serve as a bridge between the spiritual and material worlds.',
      talents: ['Intuitive and psychic ability', 'Inspirational communication', 'Creative vision', 'Spiritual healing'],
      potential: 'You have the potential to become a spiritual teacher, visionary artist, or healer who inspires profound transformation in others.',
      careerDirection: ['Spiritual teacher and healer', 'Artist and musician', 'Psychologist and counselor', 'Creative director'],
    },
    soulUrge: {
      title: 'The Inspired Soul',
      innerDesires: 'Your soul craves spiritual connection and meaning. You yearn to channel higher wisdom and inspire others toward enlightenment.',
      hiddenMotivations: ['Need for spiritual connection', 'Desire to inspire others', 'Drive for higher understanding', 'Yearning for transcendence'],
      emotionalNeeds: ['Spiritual community', 'Creative expression', 'Quiet for reflection', 'Validation of your gifts'],
    },
    personality: {
      title: 'The Inspiring Mystic',
      externalImage: 'You project an otherworldly, inspiring presence. People sense something special about you and are drawn to your light.',
      publicPerception: 'Others see you as intuitive, inspired, and somehow different. Your presence feels significant and meaningful.',
      socialEnergy: 'You are selective with your energy, drawn to spiritually-minded people and meaningful exchanges.',
    },
  },
  22: {
    expression: {
      title: 'The Master Builder',
      lifePurpose: 'To manifest grand visions into physical reality, build lasting structures that serve humanity, and demonstrate the power of practical idealism.',
      talents: ['Visionary planning', 'Large-scale manifestation', 'Practical wisdom', 'System building'],
      potential: 'You have the potential to build empires, institutions, or movements that benefit humanity on a global scale.',
      careerDirection: ['Large-scale development', 'Organizational leadership', 'Architecture and planning', 'Philanthropy'],
    },
    soulUrge: {
      title: 'The Visionary Builder',
      innerDesires: 'Your soul desires to create something lasting and meaningful. You yearn to turn grand visions into tangible reality.',
      hiddenMotivations: ['Need to build something lasting', 'Desire for grand achievement', 'Drive to manifest visions', 'Yearning for practical impact'],
      emotionalNeeds: ['Support for your vision', 'Resources to build', 'Recognition of your capability', 'Freedom to create big'],
    },
    personality: {
      title: 'The Capable Visionary',
      externalImage: 'You project quiet confidence and immense capability. People sense your potential and are drawn to your vision.',
      publicPerception: 'Others see you as someone who can make things happen. Your combination of vision and practicality is rare and respected.',
      socialEnergy: 'You network with purpose, connecting with people who can help bring your grand visions to life.',
    },
  },
  33: {
    expression: {
      title: 'The Master Teacher',
      lifePurpose: 'To embody universal love, teach wisdom to humanity, and serve as a beacon of compassion and spiritual understanding.',
      talents: ['Unconditional love and compassion', 'Spiritual teaching', 'Healing and counseling', 'Universal wisdom'],
      potential: 'You have the potential to become a spiritual master, beloved teacher, or global healer who uplifts all of humanity.',
      careerDirection: ['Spiritual teacher and guide', 'Humanitarian leadership', 'Healing arts mastery', 'Consciousness education'],
    },
    soulUrge: {
      title: 'The Loving Teacher',
      innerDesires: 'Your soul desires nothing less than to love and teach all of humanity. You yearn to be a vessel for universal love and wisdom.',
      hiddenMotivations: ['Need to serve humanity', 'Desire to teach and uplift', 'Drive for universal love', 'Yearning for spiritual union'],
      emotionalNeeds: ['Purpose and service', 'Spiritual connection', 'To be of genuine help', 'Acceptance of your mission'],
    },
    personality: {
      title: 'The Loving Sage',
      externalImage: 'You project unconditional love and profound wisdom. People feel healed and uplifted just by being in your presence.',
      publicPerception: 'Others see you as a wise, loving, and selfless being. Your presence feels like a blessing to those who encounter you.',
      socialEnergy: 'You are inclusive and loving with everyone, though you conserve your energy for your highest service.',
    },
  },
};
