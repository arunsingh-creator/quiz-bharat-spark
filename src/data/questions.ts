export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'general' | 'culture' | 'games' | 'traditional';
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export const sampleQuestions: Question[] = [
  // Easy Questions
  {
    id: 1,
    question: "Which traditional Indian board game is known as the 'Game of Knowledge'?",
    options: ["Ludo", "Chaupar", "Moksha Patam (Snakes & Ladders)", "Pallanguzhi"],
    correctAnswer: 2,
    category: 'traditional',
    difficulty: 'easy',
    points: 100
  },
  {
    id: 2,
    question: "What is the traditional Indian game played with tamarind seeds?",
    options: ["Kho-Kho", "Pallanguzhi", "Gilli Danda", "Kabaddi"],
    correctAnswer: 1,
    category: 'traditional',
    difficulty: 'easy',
    points: 100
  },
  {
    id: 3,
    question: "Which Indian state is famous for the traditional toy-making craft of Channapatna?",
    options: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
    correctAnswer: 1,
    category: 'culture',
    difficulty: 'easy',
    points: 100
  },
  {
    id: 4,
    question: "What is the full form of 'KBC'?",
    options: ["Kaun Banega Champion", "Kaun Banega Crorepati", "Knowledge Based Competition", "Knowledge Building Challenge"],
    correctAnswer: 1,
    category: 'general',
    difficulty: 'easy',
    points: 100
  },
  {
    id: 5,
    question: "Which traditional Indian game involves a wooden stick and a smaller piece of wood?",
    options: ["Kho-Kho", "Kabaddi", "Gilli Danda", "Langdi"],
    correctAnswer: 2,
    category: 'traditional',
    difficulty: 'easy',
    points: 100
  },

  // Medium Questions
  {
    id: 6,
    question: "The traditional Indian chess variant is known as?",
    options: ["Shatranj", "Chaturanga", "Ashtapada", "Pachisi"],
    correctAnswer: 1,
    category: 'traditional',
    difficulty: 'medium',
    points: 200
  },
  {
    id: 7,
    question: "Which ancient Indian text mentions various traditional games and sports?",
    options: ["Ramayana", "Mahabharata", "Kama Sutra", "All of the above"],
    correctAnswer: 3,
    category: 'culture',
    difficulty: 'medium',
    points: 200
  },
  {
    id: 8,
    question: "The traditional Indian game 'Pachisi' was played in the court of which Mughal emperor?",
    options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
    correctAnswer: 1,
    category: 'culture',
    difficulty: 'medium',
    points: 200
  },
  {
    id: 9,
    question: "What is the traditional Indian puppet show from Rajasthan called?",
    options: ["Kathputli", "Bommalattam", "Tholu Bommalata", "Ravana Chhaya"],
    correctAnswer: 0,
    category: 'culture',
    difficulty: 'medium',
    points: 200
  },
  {
    id: 10,
    question: "Which Indian initiative promotes traditional toys and games under Atmanirbhar Bharat?",
    options: ["Make in India", "Skill India", "Vocal for Local", "Khelo India"],
    correctAnswer: 2,
    category: 'general',
    difficulty: 'medium',
    points: 200
  },

  // Hard Questions
  {
    id: 11,
    question: "The ancient Indian game 'Ashtapada' is the predecessor of which modern game?",
    options: ["Chess", "Checkers", "Ludo", "Backgammon"],
    correctAnswer: 0,
    category: 'traditional',
    difficulty: 'hard',
    points: 500
  },
  {
    id: 12,
    question: "In which year was the National Toy Policy of India launched?",
    options: ["2019", "2020", "2021", "2022"],
    correctAnswer: 1,
    category: 'general',
    difficulty: 'hard',
    points: 500
  },
  {
    id: 13,
    question: "The traditional Indian game 'Chaupur' was mentioned in which ancient epic?",
    options: ["Ramayana", "Mahabharata", "Vishnu Purana", "Bhagavata Purana"],
    correctAnswer: 1,
    category: 'culture',
    difficulty: 'hard',
    points: 500
  },
  {
    id: 14,
    question: "Which traditional Indian toy-making technique uses lac (shellac) as the primary material?",
    options: ["Channapatna", "Kondapalli", "Etikoppaka", "Varanasi"],
    correctAnswer: 2,
    category: 'culture',
    difficulty: 'hard',
    points: 500
  },
  {
    id: 15,
    question: "The concept of 'Moksha' in Moksha Patam represents what philosophical idea?",
    options: ["Liberation from cycle of rebirth", "Victory in battle", "Wealth accumulation", "Knowledge acquisition"],
    correctAnswer: 0,
    category: 'culture',
    difficulty: 'hard',
    points: 500
  }
];

export const getRandomQuestions = (count: number = 10): Question[] => {
  const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  return sampleQuestions.filter(q => q.difficulty === difficulty);
};

export const getQuestionsByCategory = (category: 'general' | 'culture' | 'games' | 'traditional'): Question[] => {
  return sampleQuestions.filter(q => q.category === category);
};