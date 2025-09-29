export interface MonumentQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
  imageUrl?: string;
}

export interface MonumentQuiz {
  id: string;
  title: string;
  monument: string;
  description: string;
  imageUrl: string;
  questions: MonumentQuestion[];
}

export const monumentQuizzes: MonumentQuiz[] = [
  {
    id: 'taj-mahal',
    title: 'Taj Mahal Quiz',
    monument: 'Taj Mahal',
    description: 'Test your knowledge about the Crown of Palaces',
    imageUrl: '/api/placeholder/800/600?text=Taj+Mahal',
    questions: [
      {
        id: 1,
        question: 'In which year was the construction of Taj Mahal completed?',
        options: ['1648', '1653', '1643', '1658'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 2,
        question: 'Who was the chief architect of Taj Mahal?',
        options: ['Ustad Ahmad Lahauri', 'Mir Abdul Karim', 'Amanat Khan', 'Muhammad Hanif'],
        correctAnswer: 0,
        points: 200
      },
      {
        id: 3,
        question: 'What type of marble was primarily used in Taj Mahal?',
        options: ['Rajasthani Marble', 'Makrana Marble', 'Italian Marble', 'Jodhpur Marble'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 4,
        question: 'How many workers were involved in building the Taj Mahal?',
        options: ['15,000', '20,000', '25,000', '30,000'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 5,
        question: 'What is the height of the main dome of Taj Mahal?',
        options: ['35 meters', '73 meters', '45 meters', '60 meters'],
        correctAnswer: 1,
        points: 250
      },
      {
        id: 6,
        question: 'In which direction does the main entrance of Taj Mahal face?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 7,
        question: 'What is inscribed on the entrance of Taj Mahal?',
        options: ['Verses from Quran', 'Mughal poetry', 'Love letters', 'Historical events'],
        correctAnswer: 0,
        points: 200
      },
      {
        id: 8,
        question: 'Which UNESCO designation does Taj Mahal hold?',
        options: ['World Heritage Site', 'Cultural Monument', 'Historic Landmark', 'Protected Site'],
        correctAnswer: 0,
        points: 100
      },
      {
        id: 9,
        question: 'What changes color does Taj Mahal exhibit during different times?',
        options: ['Due to pollution', 'Due to lighting', 'Due to marble properties', 'Due to weather'],
        correctAnswer: 2,
        points: 250
      },
      {
        id: 10,
        question: 'How long did it take to complete the Taj Mahal?',
        options: ['15 years', '22 years', '18 years', '25 years'],
        correctAnswer: 1,
        points: 200
      }
    ]
  },
  {
    id: 'red-fort',
    title: 'Red Fort Quiz',
    monument: 'Red Fort (Lal Qila)',
    description: 'Explore the magnificent Mughal fortress',
    imageUrl: '/api/placeholder/800/600?text=Red+Fort',
    questions: [
      {
        id: 1,
        question: 'Who built the Red Fort in Delhi?',
        options: ['Akbar', 'Shah Jahan', 'Aurangzeb', 'Humayun'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 2,
        question: 'In which year was Red Fort construction completed?',
        options: ['1638', '1648', '1658', '1668'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 3,
        question: 'What is the length of Red Fort walls?',
        options: ['1.5 km', '2.41 km', '3 km', '1.8 km'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 4,
        question: 'Which gate is the main entrance to Red Fort?',
        options: ['Delhi Gate', 'Lahori Gate', 'Kashmir Gate', 'Ajmeri Gate'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 5,
        question: 'What is the famous hall for private audience called?',
        options: ['Diwan-i-Aam', 'Diwan-i-Khas', 'Rang Mahal', 'Khas Mahal'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 6,
        question: 'From where does the Prime Minister hoist the flag on Independence Day?',
        options: ['Red Fort ramparts', 'India Gate', 'Parliament House', 'Rashtrapati Bhavan'],
        correctAnswer: 0,
        points: 100
      },
      {
        id: 7,
        question: 'What was inscribed in the Diwan-i-Khas?',
        options: ['Mughal poetry', 'Persian verses', 'If there is paradise on earth, it is here', 'Royal decrees'],
        correctAnswer: 2,
        points: 250
      },
      {
        id: 8,
        question: 'Which museum is located inside Red Fort?',
        options: ['Archaeological Museum', 'War Memorial Museum', 'Textile Museum', 'All of the above'],
        correctAnswer: 3,
        points: 200
      },
      {
        id: 9,
        question: 'What architectural style does Red Fort represent?',
        options: ['Indo-Islamic', 'Mughal', 'Persian', 'All of the above'],
        correctAnswer: 3,
        points: 250
      },
      {
        id: 10,
        question: 'When did Red Fort become a UNESCO World Heritage Site?',
        options: ['2005', '2007', '2009', '2011'],
        correctAnswer: 1,
        points: 200
      }
    ]
  },
  {
    id: 'qutub-minar',
    title: 'Qutub Minar Quiz',
    monument: 'Qutub Minar',
    description: 'Learn about the tallest brick minaret in the world',
    imageUrl: '/api/placeholder/800/600?text=Qutub+Minar',
    questions: [
      {
        id: 1,
        question: 'Who started the construction of Qutub Minar?',
        options: ['Qutb-ud-din Aibak', 'Iltutmish', 'Alauddin Khilji', 'Ghiyas-ud-din Tughlaq'],
        correctAnswer: 0,
        points: 100
      },
      {
        id: 2,
        question: 'What is the height of Qutub Minar?',
        options: ['72.5 meters', '73 meters', '75 meters', '70 meters'],
        correctAnswer: 0,
        points: 150
      },
      {
        id: 3,
        question: 'How many storeys does Qutub Minar have?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 4,
        question: 'What material is Qutub Minar made of?',
        options: ['Red sandstone and marble', 'Only red sandstone', 'Limestone', 'Granite'],
        correctAnswer: 0,
        points: 150
      },
      {
        id: 5,
        question: 'Which mosque is located at the base of Qutub Minar?',
        options: ['Jama Masjid', 'Quwwat-ul-Islam Mosque', 'Fatehpur Sikri Mosque', 'Moth ki Masjid'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 6,
        question: 'In which century was Qutub Minar built?',
        options: ['11th century', '12th century', '13th century', '14th century'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 7,
        question: 'What scripts are carved on Qutub Minar?',
        options: ['Arabic and Devanagari', 'Arabic and Persian', 'Persian and Sanskrit', 'Only Arabic'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 8,
        question: 'What is the Iron Pillar near Qutub Minar famous for?',
        options: ['Its height', 'Its rust resistance', 'Its magnetic properties', 'Its weight'],
        correctAnswer: 1,
        points: 250
      },
      {
        id: 9,
        question: 'When did Qutub Minar become a UNESCO World Heritage Site?',
        options: ['1990', '1993', '1995', '1998'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 10,
        question: 'What was the original purpose of Qutub Minar?',
        options: ['Victory tower', 'Call to prayer', 'Observatory', 'All of the above'],
        correctAnswer: 3,
        points: 250
      }
    ]
  },
  {
    id: 'hampi',
    title: 'Hampi Quiz',
    monument: 'Hampi',
    description: 'Discover the ruins of the Vijayanagara Empire',
    imageUrl: '/api/placeholder/800/600?text=Hampi+Ruins',
    questions: [
      {
        id: 1,
        question: 'Hampi was the capital of which empire?',
        options: ['Mughal Empire', 'Vijayanagara Empire', 'Maratha Empire', 'Chola Empire'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 2,
        question: 'In which state is Hampi located?',
        options: ['Tamil Nadu', 'Andhra Pradesh', 'Karnataka', 'Kerala'],
        correctAnswer: 2,
        points: 100
      },
      {
        id: 3,
        question: 'Which river flows through Hampi?',
        options: ['Krishna', 'Tungabhadra', 'Kaveri', 'Godavari'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 4,
        question: 'What is the famous chariot temple in Hampi called?',
        options: ['Vittala Temple', 'Virupaksha Temple', 'Hazara Rama Temple', 'Lotus Mahal'],
        correctAnswer: 0,
        points: 200
      },
      {
        id: 5,
        question: 'Who destroyed Hampi in 1565?',
        options: ['Mughals', 'Deccan Sultanates', 'Portuguese', 'British'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 6,
        question: 'What is unique about the stone chariot in Vittala Temple?',
        options: ['It can move', 'Its musical pillars', 'Its size', 'Its carvings'],
        correctAnswer: 1,
        points: 250
      },
      {
        id: 7,
        question: 'Which temple in Hampi is still actively used for worship?',
        options: ['Vittala Temple', 'Virupaksha Temple', 'Krishna Temple', 'Ganesha Temple'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 8,
        question: 'When did Hampi become a UNESCO World Heritage Site?',
        options: ['1984', '1986', '1988', '1990'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 9,
        question: 'What is the Elephant Stables in Hampi?',
        options: ['Royal residence', 'Temple complex', 'Housing for royal elephants', 'Storage facility'],
        correctAnswer: 2,
        points: 200
      },
      {
        id: 10,
        question: 'What architectural style dominates Hampi?',
        options: ['Dravidian', 'Indo-Islamic', 'Vijayanagara', 'All of the above'],
        correctAnswer: 2,
        points: 250
      }
    ]
  },
  {
    id: 'ajanta-ellora',
    title: 'Ajanta & Ellora Quiz',
    monument: 'Ajanta & Ellora Caves',
    description: 'Explore the ancient rock-cut cave temples',
    imageUrl: '/api/placeholder/800/600?text=Ajanta+Ellora+Caves',
    questions: [
      {
        id: 1,
        question: 'In which state are Ajanta and Ellora caves located?',
        options: ['Madhya Pradesh', 'Maharashtra', 'Gujarat', 'Rajasthan'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 2,
        question: 'How many caves are there in Ajanta?',
        options: ['28', '29', '30', '31'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 3,
        question: 'How many caves are there in Ellora?',
        options: ['32', '34', '36', '38'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 4,
        question: 'Which religion is predominantly represented in Ajanta caves?',
        options: ['Hinduism', 'Buddhism', 'Jainism', 'All three'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 5,
        question: 'Which cave in Ellora is the largest monolithic structure?',
        options: ['Cave 15', 'Cave 16 (Kailasa)', 'Cave 17', 'Cave 32'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 6,
        question: 'In which period were Ajanta caves built?',
        options: ['1st-2nd century BCE to 6th century CE', '3rd-8th century CE', '6th-10th century CE', '8th-12th century CE'],
        correctAnswer: 0,
        points: 250
      },
      {
        id: 7,
        question: 'What are Ajanta caves famous for?',
        options: ['Sculptures', 'Frescoes and paintings', 'Architecture', 'All of the above'],
        correctAnswer: 3,
        points: 200
      },
      {
        id: 8,
        question: 'Who rediscovered Ajanta caves in modern times?',
        options: ['John Smith', 'Alexander Cunningham', 'James Prinsep', 'British officers'],
        correctAnswer: 3,
        points: 250
      },
      {
        id: 9,
        question: 'When did Ajanta and Ellora become UNESCO World Heritage Sites?',
        options: ['1980 & 1983', '1983 & 1985', '1985 & 1987', '1987 & 1989'],
        correctAnswer: 0,
        points: 200
      },
      {
        id: 10,
        question: 'What technique was used for Ajanta paintings?',
        options: ['Oil painting', 'Water colors', 'Tempera technique', 'Fresco secco'],
        correctAnswer: 2,
        points: 250
      }
    ]
  },
  {
    id: 'konark',
    title: 'Konark Sun Temple Quiz',
    monument: 'Konark Sun Temple',
    description: 'Learn about the magnificent Sun Temple',
    imageUrl: '/api/placeholder/800/600?text=Konark+Sun+Temple',
    questions: [
      {
        id: 1,
        question: 'Konark Sun Temple is located in which state?',
        options: ['West Bengal', 'Odisha', 'Jharkhand', 'Bihar'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 2,
        question: 'Who built the Konark Sun Temple?',
        options: ['King Narasimhadeva I', 'King Anantavarman', 'King Kapilendradeva', 'King Purushottama'],
        correctAnswer: 0,
        points: 150
      },
      {
        id: 3,
        question: 'In which century was Konark Sun Temple built?',
        options: ['12th century', '13th century', '14th century', '15th century'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 4,
        question: 'The temple is designed in the form of?',
        options: ['Lotus', 'Chariot', 'Mountain', 'Ship'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 5,
        question: 'How many wheels does the Konark chariot have?',
        options: ['12', '24', '36', '48'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 6,
        question: 'What do the wheels of Konark represent?',
        options: ['Months of year', 'Hours of day', 'Days of month', 'Seasons'],
        correctAnswer: 1,
        points: 250
      },
      {
        id: 7,
        question: 'How many horses are carved pulling the chariot?',
        options: ['4', '6', '7', '8'],
        correctAnswer: 2,
        points: 200
      },
      {
        id: 8,
        question: 'What architectural style does Konark follow?',
        options: ['Nagara', 'Dravidian', 'Kalinga', 'Vesara'],
        correctAnswer: 2,
        points: 250
      },
      {
        id: 9,
        question: 'When did Konark become a UNESCO World Heritage Site?',
        options: ['1982', '1984', '1986', '1988'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 10,
        question: 'What is Konark also known as?',
        options: ['Black Pagoda', 'Sun City', 'Wheel Temple', 'All of the above'],
        correctAnswer: 3,
        points: 250
      }
    ]
  },
  {
    id: 'khajuraho',
    title: 'Khajuraho Quiz',
    monument: 'Khajuraho Temples',
    description: 'Discover the architectural marvels of Khajuraho',
    imageUrl: '/api/placeholder/800/600?text=Khajuraho+Temples',
    questions: [
      {
        id: 1,
        question: 'Khajuraho temples are located in which state?',
        options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'],
        correctAnswer: 1,
        points: 100
      },
      {
        id: 2,
        question: 'Which dynasty built the Khajuraho temples?',
        options: ['Gupta', 'Chandela', 'Pratihara', 'Paramara'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 3,
        question: 'How many temples originally existed in Khajuraho?',
        options: ['25', '85', '45', '65'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 4,
        question: 'How many temples survive today in Khajuraho?',
        options: ['20', '25', '30', '35'],
        correctAnswer: 1,
        points: 150
      },
      {
        id: 5,
        question: 'Which is the largest temple in Khajuraho?',
        options: ['Lakshmana Temple', 'Kandariya Mahadev', 'Vishvanatha Temple', 'Chaturbhuj Temple'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 6,
        question: 'In which period were most Khajuraho temples built?',
        options: ['9th-10th century', '10th-11th century', '11th-12th century', '12th-13th century'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 7,
        question: 'What architectural style do Khajuraho temples represent?',
        options: ['Dravidian', 'Nagara', 'Indo-Islamic', 'Vesara'],
        correctAnswer: 1,
        points: 250
      },
      {
        id: 8,
        question: 'Khajuraho temples are dedicated to which religions?',
        options: ['Only Hinduism', 'Only Jainism', 'Hinduism and Jainism', 'Buddhism and Hinduism'],
        correctAnswer: 2,
        points: 200
      },
      {
        id: 9,
        question: 'When did Khajuraho become a UNESCO World Heritage Site?',
        options: ['1984', '1986', '1988', '1990'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 10,
        question: 'What are Khajuraho temples famous for?',
        options: ['Intricate carvings', 'Erotic sculptures', 'Architectural beauty', 'All of the above'],
        correctAnswer: 3,
        points: 250
      }
    ]
  },
  {
    id: 'fatehpur-sikri',
    title: 'Fatehpur Sikri Quiz',
    monument: 'Fatehpur Sikri',
    description: 'Explore the deserted Mughal city',
    imageUrl: '/api/placeholder/800/600?text=Fatehpur+Sikri',
    questions: [
      {
        id: 1,
        question: 'Who built Fatehpur Sikri?',
        options: ['Babur', 'Humayun', 'Akbar', 'Jahangir'],
        correctAnswer: 2,
        points: 100
      },
      {
        id: 2,
        question: 'In which state is Fatehpur Sikri located?',
        options: ['Rajasthan', 'Haryana', 'Delhi', 'Uttar Pradesh'],
        correctAnswer: 3,
        points: 100
      },
      {
        id: 3,
        question: 'Why was Fatehpur Sikri abandoned?',
        options: ['War', 'Plague', 'Water scarcity', 'Political reasons'],
        correctAnswer: 2,
        points: 200
      },
      {
        id: 4,
        question: 'How long did Akbar use Fatehpur Sikri as his capital?',
        options: ['10 years', '14 years', '20 years', '25 years'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 5,
        question: 'What is the famous gateway at Fatehpur Sikri called?',
        options: ['Buland Darwaza', 'Hathi Pol', 'Ganesh Pol', 'Suraj Pol'],
        correctAnswer: 0,
        points: 150
      },
      {
        id: 6,
        question: 'What is the height of Buland Darwaza?',
        options: ['40 meters', '54 meters', '60 meters', '70 meters'],
        correctAnswer: 1,
        points: 250
      },
      {
        id: 7,
        question: 'Which saint\'s tomb is located in Fatehpur Sikri?',
        options: ['Sheikh Salim Chishti', 'Nizamuddin Auliya', 'Moinuddin Chishti', 'Baba Farid'],
        correctAnswer: 0,
        points: 200
      },
      {
        id: 8,
        question: 'What architectural style does Fatehpur Sikri represent?',
        options: ['Mughal', 'Indo-Islamic', 'Persian', 'All of the above'],
        correctAnswer: 3,
        points: 200
      },
      {
        id: 9,
        question: 'When did Fatehpur Sikri become a UNESCO World Heritage Site?',
        options: ['1984', '1986', '1988', '1990'],
        correctAnswer: 1,
        points: 200
      },
      {
        id: 10,
        question: 'What does "Fatehpur Sikri" mean?',
        options: ['City of Victory', 'Blessed City', 'Royal City', 'Sacred City'],
        correctAnswer: 0,
        points: 250
      }
    ]
  }
];

export const getMonumentQuiz = (id: string): MonumentQuiz | undefined => {
  return monumentQuizzes.find(quiz => quiz.id === id);
};

export const getAllMonumentQuizzes = (): MonumentQuiz[] => {
  return monumentQuizzes;
};