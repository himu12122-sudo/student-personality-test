const mbtiData = {
  ISTJ: {
    title: 'The Logistician',
    description: 'Practical and fact-oriented individuals who are reliable, efficient, and responsible. ISTJs are dedicated to fulfilling their duties and maintaining order.',
    strengths: [
      'Highly organized and detail-oriented',
      'Reliable and responsible',
      'Strong work ethic',
      'Practical problem-solving skills',
      'Loyalty and dedication'
    ],
    weaknesses: [
      'Difficulty with abstract concepts',
      'Reluctance to try new approaches',
      'Can be overly rigid',
      'Difficulty expressing emotions'
    ],
    careerRecommendations: [
      'Accountant',
      'Project Manager',
      'Systems Analyst',
      'Police Officer',
      'Military Officer',
      'Database Administrator',
      'Auditor',
      'Administrator'
    ]
  },
  ISFJ: {
    title: 'The Defender',
    description: 'Warm, conscientious, and compassionate individuals. ISFJs are devoted to helping others and maintaining harmony in their environments.',
    strengths: [
      'Strong sense of responsibility',
      'Excellent at understanding others\' feelings',
      'Reliable and dependable',
      'Detail-oriented',
      'Patient and kind'
    ],
    weaknesses: [
      'Overly sensitive to criticism',
      'Difficulty asserting themselves',
      'Reluctance to embrace change',
      'Tendency to be self-sacrificing'
    ],
    careerRecommendations: [
      'Nurse',
      'Teacher',
      'Social Worker',
      'Counselor',
      'Human Resources Manager',
      'Office Manager',
      'Librarian',
      'Medical Secretary'
    ]
  },
  INFJ: {
    title: 'The Advocate',
    description: 'Insightful, principled, and idealistic individuals. INFJs are driven by a strong sense of purpose and a desire to help others achieve their potential.',
    strengths: [
      'Strong intuition and insight',
      'Deep sense of purpose',
      'Excellent at understanding others',
      'Creative problem-solving',
      'Visionary thinking'
    ],
    weaknesses: [
      'Tendency to be too idealistic',
      'Perfectionism',
      'Difficulty with criticism',
      'Can be overly private'
    ],
    careerRecommendations: [
      'Counselor',
      'Psychologist',
      'Life Coach',
      'Non-profit Director',
      'Teacher',
      'Writer',
      'Mentor',
      'Mission-driven entrepreneur'
    ]
  },
  INTJ: {
    title: 'The Commander',
    description: 'Strategic, logical, and ambitious individuals. INTJs are driven by a desire to understand how things work and to develop plans for improvement.',
    strengths: [
      'Strategic thinking',
      'Independent and self-motivated',
      'Excellent problem-solving skills',
      'Driven to achieve goals',
      'Logical and rational'
    ],
    weaknesses: [
      'Difficulty understanding emotions',
      'Can be overly critical',
      'Arrogance',
      'Difficulty with teamwork'
    ],
    careerRecommendations: [
      'Software Engineer',
      'System Architect',
      'CEO',
      'Entrepreneur',
      'Scientist',
      'Management Consultant',
      'IT Manager',
      'Strategic Planner'
    ]
  },
  ISTP: {
    title: 'The Virtuoso',
    description: 'Practical, logical, and adaptable individuals. ISTPs are observant of their surroundings and excellent at understanding how things work.',
    strengths: [
      'Practical problem-solving',
      'Adaptable and flexible',
      'Observant and analytical',
      'Independent and resourceful',
      'Good with mechanical things'
    ],
    weaknesses: [
      'Difficulty with long-term planning',
      'Can be insensitive',
      'Difficulty expressing feelings',
      'Risky behavior'
    ],
    careerRecommendations: [
      'Mechanical Engineer',
      'Electrician',
      'Police Officer',
      'Military Specialist',
      'Pilot',
      'Computer Programmer',
      'Carpenter',
      'Athletics Coach'
    ]
  },
  ISFP: {
    title: 'The Adventurer',
    description: 'Sensitive, artistic, and adventurous individuals. ISFPs are driven by a desire to experience new things and express themselves creatively.',
    strengths: [
      'Artistic and creative abilities',
      'Sensitivity to others\' feelings',
      'Adaptable and flexible',
      'Excellent aesthetic sense',
      'Loyal and dedicated'
    ],
    weaknesses: [
      'Difficulty with long-term planning',
      'Tendency to be overly sensitive',
      'Difficulty with criticism',
      'Avoidance of conflict'
    ],
    careerRecommendations: [
      'Artist',
      'Designer',
      'Fashion Designer',
      'Musician',
      'Photographer',
      'Chef',
      'Interior Designer',
      'Make-up Artist'
    ]
  },
  INFP: {
    title: 'The Mediator',
    description: 'Idealistic, compassionate, and creative individuals. INFPs are driven by a desire to understand themselves and others and to create meaningful connections.',
    strengths: [
      'Creative and imaginative',
      'Compassionate and understanding',
      'Strong personal values',
      'Introspective and self-aware',
      'Adaptable and flexible'
    ],
    weaknesses: [
      'Overly idealistic',
      'Difficulty with criticism',
      'Tendency to be self-doubting',
      'Difficulty with structure'
    ],
    careerRecommendations: [
      'Writer',
      'Counselor',
      'Artist',
      'Teacher',
      'Social Worker',
      'Non-profit Worker',
      'Freelancer',
      'Content Creator'
    ]
  },
  INTP: {
    title: 'The Thinker',
    description: 'Logical, curious, and independent individuals. INTPs are driven by a desire to understand how things work and to develop new ideas.',
    strengths: [
      'Excellent analytical skills',
      'Independent and self-motivated',
      'Creative problem-solving',
      'Objective and impartial',
      'Driven to understand'
    ],
    weaknesses: [
      'Difficulty with social interaction',
      'Can be detached and distant',
      'Difficulty completing tasks',
      'Poor time management'
    ],
    careerRecommendations: [
      'Software Developer',
      'Data Scientist',
      'Research Scientist',
      'Mathematician',
      'Architect',
      'Systems Analyst',
      'Engineering Professor',
      'Tech Entrepreneur'
    ]
  },
  ESTP: {
    title: 'The Entrepreneur',
    description: 'Bold, pragmatic, and action-oriented individuals. ESTPs are thrilled by adventure and excitement and are natural risk-takers.',
    strengths: [
      'Natural leadership abilities',
      'Excellent problem-solving skills',
      'Bold and confident',
      'Adaptable and flexible',
      'Energetic and enthusiastic'
    ],
    weaknesses: [
      'Impatience',
      'Difficulty following rules',
      'Insensitivity',
      'Difficulty with abstract concepts'
    ],
    careerRecommendations: [
      'Entrepreneur',
      'Sales Manager',
      'Police Officer',
      'Emergency Responder',
      'Marketing Manager',
      'Consultant',
      'Project Manager',
      'Athlete'
    ]
  },
  ESFP: {
    title: 'The Entertainer',
    description: 'Outgoing, spontaneous, and fun-loving individuals. ESFPs are naturally talented performers who enjoy being the center of attention.',
    strengths: [
      'Excellent social skills',
      'Enthusiasm and optimism',
      'Excellent performance abilities',
      'Good at reading others',
      'Energetic and fun-loving'
    ],
    weaknesses: [
      'Difficulty with focus',
      'Tendency to avoid responsibility',
      'Impulsiveness',
      'Difficulty with abstract concepts'
    ],
    careerRecommendations: [
      'Event Planner',
      'Entertainer',
      'Sales Representative',
      'Tour Guide',
      'Flight Attendant',
      'Chef',
      'Public Relations',
      'Actor'
    ]
  },
  ENFP: {
    title: 'The Campaigner',
    description: 'Enthusiastic, creative, and people-oriented individuals. ENFPs are driven by a desire to understand themselves and others and to create meaningful connections.',
    strengths: [
      'Excellent interpersonal skills',
      'Creative and imaginative',
      'Enthusiastic and optimistic',
      'Excellent communication skills',
      'Natural networkers'
    ],
    weaknesses: [
      'Difficulty with focus',
      'Tendency to be scattered',
      'Impulsiveness',
      'Difficulty with long-term planning'
    ],
    careerRecommendations: [
      'Marketing Manager',
      'Public Relations',
      'Human Resources',
      'Teacher',
      'Counselor',
      'Event Planner',
      'Sales Manager',
      'Creative Director'
    ]
  },
  ENTP: {
    title: 'The Debater',
    description: 'Intelligent, curious, and debate-oriented individuals. ENTPs are driven by a desire to understand how things work and to challenge ideas.',
    strengths: [
      'Excellent analytical skills',
      'Natural debaters',
      'Strategic thinking',
      'Excellent problem-solving',
      'Independent and innovative'
    ],
    weaknesses: [
      'Argumentative nature',
      'Difficulty committing',
      'Poor follow-through',
      'Insensitivity to others'
    ],
    careerRecommendations: [
      'Entrepreneur',
      'Lawyer',
      'Management Consultant',
      'Software Developer',
      'Journalist',
      'Sales Manager',
      'Professor',
      'Business Analyst'
    ]
  },
  ESTJ: {
    title: 'The Executive',
    description: 'Organized, ambitious, and leadership-oriented individuals. ESTJs are natural leaders who are driven to achieve goals and maintain order.',
    strengths: [
      'Natural leadership abilities',
      'Organized and efficient',
      'Excellent decision-making skills',
      'Responsible and reliable',
      'Strategic thinker'
    ],
    weaknesses: [
      'Overly rigid and inflexible',
      'Can be overly critical',
      'Difficulty understanding emotions',
      'Overly ambitious'
    ],
    careerRecommendations: [
      'CEO',
      'Manager',
      'Military Officer',
      'Judge',
      'Financial Manager',
      'Administrator',
      'Project Manager',
      'Police Chief'
    ]
  },
  ESFJ: {
    title: 'The Consul',
    description: 'Warm, compassionate, and people-oriented individuals. ESFJs are natural caregivers who thrive on helping others and maintaining harmony.',
    strengths: [
      'Excellent interpersonal skills',
      'Warmth and compassion',
      'Strong organizational skills',
      'Ability to inspire others',
      'Practical and grounded'
    ],
    weaknesses: [
      'Overly sensitive to criticism',
      'People-pleasing tendency',
      'Difficulty with change',
      'Tendency to neglect own needs'
    ],
    careerRecommendations: [
      'Teacher',
      'Nurse',
      'Counselor',
      'Human Resources Manager',
      'Event Planner',
      'Manager',
      'Sales Manager',
      'Customer Service Manager'
    ]
  },
  ENFJ: {
    title: 'The Protagonist',
    description: 'Charismatic, inspiring, and people-focused individuals. ENFJs are natural leaders who are driven to help others reach their potential.',
    strengths: [
      'Natural leadership abilities',
      'Excellent communication skills',
      'Inspirational and motivating',
      'Excellent empathy',
      'Charismatic personality'
    ],
    weaknesses: [
      'Overly empathetic',
      'Tendency to be overly idealistic',
      'Difficulty with criticism',
      'Can be manipulative'
    ],
    careerRecommendations: [
      'Teacher',
      'Counselor',
      'Manager',
      'Public Speaker',
      'Non-profit Director',
      'Life Coach',
      'HR Manager',
      'Entrepreneur'
    ]
  },
  ENTJ: {
    title: 'The Commander',
    description: 'Strategic, ambitious, and natural leaders. ENTJs are driven by a vision for the future and a desire to lead others in achieving great things.',
    strengths: [
      'Natural leadership abilities',
      'Strategic and visionary thinking',
      'Excellent decision-making',
      'Ambitious and driven',
      'Logical and objective'
    ],
    weaknesses: [
      'Overly aggressive',
      'Difficulty understanding emotions',
      'Can be insensitive',
      'Overly ambitious'
    ],
    careerRecommendations: [
      'CEO',
      'Executive',
      'Entrepreneur',
      'Manager',
      'Lawyer',
      'Management Consultant',
      'Finance Executive',
      'Military Officer'
    ]
  }
};

module.exports = mbtiData;