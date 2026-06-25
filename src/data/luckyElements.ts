export interface LuckyElements {
  lifePathNumber: number;
  luckyNumbers: number[];
  luckyDays: string[];
  luckyMonths: string[];
  luckyColors: string[];
  luckyActivities: string[];
}

export const luckyElements: Record<number, LuckyElements> = {
  1: {
    lifePathNumber: 1,
    luckyNumbers: [1, 10, 19, 28],
    luckyDays: ['Sunday', 'Monday'],
    luckyMonths: ['January', 'October'],
    luckyColors: ['Gold', 'Orange', 'Red'],
    luckyActivities: ['Leading a project', 'Starting something new', 'Independent work'],
  },
  2: {
    lifePathNumber: 2,
    luckyNumbers: [2, 11, 20, 29],
    luckyDays: ['Monday', 'Thursday'],
    luckyMonths: ['February', 'November'],
    luckyColors: ['Silver', 'White', 'Pastel Blue'],
    luckyActivities: ['Collaborating with others', 'Mediating conflicts', 'Peaceful activities'],
  },
  3: {
    lifePathNumber: 3,
    luckyNumbers: [3, 12, 21, 30],
    luckyDays: ['Thursday', 'Friday'],
    luckyMonths: ['March', 'December'],
    luckyColors: ['Yellow', 'Turquoise', 'Lavender'],
    luckyActivities: ['Creative expression', 'Social gatherings', 'Writing or performing'],
  },
  4: {
    lifePathNumber: 4,
    luckyNumbers: [4, 13, 22, 31],
    luckyDays: ['Tuesday', 'Saturday'],
    luckyMonths: ['April', 'January'],
    luckyColors: ['Green', 'Brown', 'Navy Blue'],
    luckyActivities: ['Building and organizing', 'Working with nature', 'Practical projects'],
  },
  5: {
    lifePathNumber: 5,
    luckyNumbers: [5, 14, 23],
    luckyDays: ['Wednesday', 'Friday'],
    luckyMonths: ['May', 'March'],
    luckyColors: ['Sky Blue', 'Purple', 'Pink'],
    luckyActivities: ['Traveling', 'Learning new skills', 'Networking events'],
  },
  6: {
    lifePathNumber: 6,
    luckyNumbers: [6, 15, 24],
    luckyDays: ['Tuesday', 'Friday'],
    luckyMonths: ['June', 'April'],
    luckyColors: ['Rose', 'White', 'Soft Green'],
    luckyActivities: ['Family gatherings', 'Home decoration', 'Community service'],
  },
  7: {
    lifePathNumber: 7,
    luckyNumbers: [7, 16, 25],
    luckyDays: ['Monday', 'Wednesday'],
    luckyMonths: ['July', 'February'],
    luckyColors: ['Indigo', 'Violet', 'Silver'],
    luckyActivities: ['Reading and research', 'Meditation', 'Nature walks'],
  },
  8: {
    lifePathNumber: 8,
    luckyNumbers: [8, 17, 26],
    luckyDays: ['Saturday', 'Tuesday'],
    luckyMonths: ['August', 'December'],
    luckyColors: ['Gold', 'Black', 'Royal Blue'],
    luckyActivities: ['Business negotiations', 'Goal setting', 'Financial planning'],
  },
  9: {
    lifePathNumber: 9,
    luckyNumbers: [9, 18, 27],
    luckyDays: ['Thursday', 'Sunday'],
    luckyMonths: ['September', 'May'],
    luckyColors: ['Red', 'Pink', 'Coral'],
    luckyActivities: ['Volunteer work', 'Artistic creation', 'Traveling with purpose'],
  },
  11: {
    lifePathNumber: 11,
    luckyNumbers: [11, 29, 38, 47],
    luckyDays: ['Monday', 'Sunday'],
    luckyMonths: ['November', 'April'],
    luckyColors: ['Purple', 'Silver', 'Iridescent White'],
    luckyActivities: ['Meditation and prayer', 'Creative visualization', 'Spiritual study'],
  },
  22: {
    lifePathNumber: 22,
    luckyNumbers: [22, 40, 58, 76],
    luckyDays: ['Wednesday', 'Saturday'],
    luckyMonths: ['March', 'October'],
    luckyColors: ['Royal Blue', 'Gold', 'Forest Green'],
    luckyActivities: ['Large-scale planning', 'Building projects', 'Teaching and mentoring'],
  },
  33: {
    lifePathNumber: 33,
    luckyNumbers: [33, 51, 69, 87],
    luckyDays: ['Thursday', 'Sunday'],
    luckyMonths: ['June', 'December'],
    luckyColors: ['Crimson', 'Gold', 'Pure White'],
    luckyActivities: ['Teaching and healing', 'Community organizing', 'Compassionate service'],
  },
};
