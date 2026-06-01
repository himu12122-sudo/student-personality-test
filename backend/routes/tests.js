const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const TestResult = require('../models/TestResult');
const testQuestions = [
  {
    id: 1,
    question: 'You prefer to spend your free time with other people rather than alone.',
    dimensions: { E: 1, I: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 2,
    question: 'You are energized by socializing and meeting new people.',
    dimensions: { E: 1, I: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 3,
    question: 'You enjoy being the center of attention.',
    dimensions: { E: 1, I: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 4,
    question: 'You prefer to work in groups rather than alone.',
    dimensions: { E: 1, I: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 5,
    question: 'You prefer focusing on what is real and actual over theories and possibilities.',
    dimensions: { S: 1, N: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 6,
    question: 'You prefer practical information that is directly useful.',
    dimensions: { S: 1, N: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 7,
    question: 'You tend to focus on past experiences and current realities.',
    dimensions: { S: 1, N: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 8,
    question: 'You prefer step-by-step instructions rather than big picture overviews.',
    dimensions: { S: 1, N: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 9,
    question: 'You make decisions based on logic and objective reasoning rather than personal values.',
    dimensions: { T: 1, F: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 10,
    question: 'You tend to prioritize efficiency and results over others\' feelings.',
    dimensions: { T: 1, F: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 11,
    question: 'You find it easy to be objective and critical in your judgments.',
    dimensions: { T: 1, F: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 12,
    question: 'You tend to view emotions as a weakness rather than a strength.',
    dimensions: { T: 1, F: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 13,
    question: 'You prefer to plan ahead and organize your time.',
    dimensions: { J: 1, P: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 14,
    question: 'You feel uncomfortable when things are disorganized or chaotic.',
    dimensions: { J: 1, P: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 15,
    question: 'You prefer structure and clear expectations.',
    dimensions: { J: 1, P: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: 16,
    question: 'You like to have things decided before taking action.',
    dimensions: { J: 1, P: 0 },
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  }
];

const mbtiData = {
  ISTJ: { title: 'The Logistician', description: 'Practical and fact-oriented. Reliable, efficient, and responsible.', strengths: ['Organized', 'Reliable', 'Responsible', 'Detail-oriented', 'Loyal'], careerRecommendations: ['Accountant', 'Project Manager', 'Systems Analyst', 'Police Officer', 'Administrator'] },
  ISFJ: { title: 'The Defender', description: 'Warm, conscientious, and compassionate. Devoted to helping others.', strengths: ['Responsible', 'Compassionate', 'Reliable', 'Detail-oriented', 'Patient'], careerRecommendations: ['Nurse', 'Teacher', 'Social Worker', 'Counselor', 'HR Manager'] },
  INFJ: { title: 'The Advocate', description: 'Insightful, principled, and idealistic. Strong sense of purpose.', strengths: ['Insightful', 'Purposeful', 'Understanding', 'Creative', 'Visionary'], careerRecommendations: ['Counselor', 'Psychologist', 'Teacher', 'Writer', 'Life Coach'] },
  INTJ: { title: 'The Commander', description: 'Strategic, logical, and ambitious. Driven to understand systems.', strengths: ['Strategic', 'Independent', 'Problem-solver', 'Driven', 'Logical'], careerRecommendations: ['Software Engineer', 'CEO', 'Entrepreneur', 'Scientist', 'Consultant'] },
  ISTP: { title: 'The Virtuoso', description: 'Practical, logical, adaptable. Excellent at understanding systems.', strengths: ['Problem-solver', 'Adaptable', 'Observant', 'Independent', 'Resourceful'], careerRecommendations: ['Engineer', 'Electrician', 'Pilot', 'Programmer', 'Mechanic'] },
  ISFP: { title: 'The Adventurer', description: 'Sensitive, artistic, adventurous. Desire to experience and create.', strengths: ['Artistic', 'Sensitive', 'Adaptable', 'Aesthetic', 'Loyal'], careerRecommendations: ['Artist', 'Designer', 'Musician', 'Photographer', 'Chef'] },
  INFP: { title: 'The Mediator', description: 'Idealistic, compassionate, creative. Seeks meaningful connections.', strengths: ['Creative', 'Compassionate', 'Values-driven', 'Introspective', 'Adaptable'], careerRecommendations: ['Writer', 'Counselor', 'Artist', 'Teacher', 'Content Creator'] },
  INTP: { title: 'The Thinker', description: 'Logical, curious, independent. Driven to understand ideas.', strengths: ['Analytical', 'Independent', 'Creative', 'Objective', 'Curious'], careerRecommendations: ['Developer', 'Data Scientist', 'Researcher', 'Mathematician', 'Professor'] },
  ESTP: { title: 'The Entrepreneur', description: 'Bold, pragmatic, action-oriented. Thrilled by adventure.', strengths: ['Leadership', 'Problem-solver', 'Bold', 'Adaptable', 'Energetic'], careerRecommendations: ['Entrepreneur', 'Sales Manager', 'Police Officer', 'Marketer', 'Consultant'] },
  ESFP: { title: 'The Entertainer', description: 'Outgoing, spontaneous, fun-loving. Natural performers.', strengths: ['Social', 'Enthusiastic', 'Performer', 'Perceptive', 'Fun-loving'], careerRecommendations: ['Event Planner', 'Entertainer', 'Sales Rep', 'Tour Guide', 'Actor'] },
  ENFP: { title: 'The Campaigner', description: 'Enthusiastic, creative, people-oriented. Seeks connections.', strengths: ['Interpersonal', 'Creative', 'Enthusiastic', 'Communicative', 'Networker'], careerRecommendations: ['Marketer', 'HR', 'Teacher', 'Counselor', 'Event Planner'] },
  ENTP: { title: 'The Debater', description: 'Intelligent, curious, debate-oriented. Challenges ideas.', strengths: ['Analytical', 'Debater', 'Strategic', 'Problem-solver', 'Innovative'], careerRecommendations: ['Entrepreneur', 'Lawyer', 'Consultant', 'Developer', 'Professor'] },
  ESTJ: { title: 'The Executive', description: 'Organized, ambitious, leadership-oriented. Natural leaders.', strengths: ['Leadership', 'Organized', 'Decision-maker', 'Responsible', 'Strategic'], careerRecommendations: ['CEO', 'Manager', 'Officer', 'Judge', 'Finance Manager'] },
  ESFJ: { title: 'The Consul', description: 'Warm, compassionate, people-oriented. Natural caregivers.', strengths: ['Interpersonal', 'Warm', 'Organized', 'Inspiring', 'Practical'], careerRecommendations: ['Teacher', 'Nurse', 'Counselor', 'HR Manager', 'Event Planner'] },
  ENFJ: { title: 'The Protagonist', description: 'Charismatic, inspiring, people-focused. Natural leaders.', strengths: ['Leadership', 'Communicative', 'Inspiring', 'Empathetic', 'Charismatic'], careerRecommendations: ['Teacher', 'Counselor', 'Manager', 'Speaker', 'Coach'] },
  ENTJ: { title: 'The Commander', description: 'Strategic, ambitious, natural leaders. Vision-driven.', strengths: ['Leadership', 'Strategic', 'Decision-maker', 'Ambitious', 'Logical'], careerRecommendations: ['CEO', 'Executive', 'Entrepreneur', 'Lawyer', 'Consultant'] }
};

// Get all test questions
router.get('/questions', (req, res) => {
  res.json({
    success: true,
    totalQuestions: testQuestions.length,
    questions: testQuestions
  });
});

// Start a new test
router.post('/start', authMiddleware, async (req, res) => {
  try {
    const testResult = await TestResult.create({
      userId: req.userId,
      answers: [],
      scores: {
        extraversion: 0,
        intuition: 0,
        feeling: 0,
        perceiving: 0
      }
    });

    res.status(201).json({
      success: true,
      testId: testResult._id,
      totalQuestions: testQuestions.length
    });
  } catch (error) {
    console.error('Test start error:', error);
    res.status(500).json({ message: 'Error starting test', error: error.message });
  }
});

// Submit test answers
router.post('/submit', authMiddleware, async (req, res) => {
  try {
    const { testId, answers } = req.body;

    if (!testId || !answers || answers.length === 0) {
      return res.status(400).json({ message: 'Test ID and answers are required' });
    }

    // Find test
    const testResult = await TestResult.findById(testId);
    if (!testResult) {
      return res.status(404).json({ message: 'Test not found' });
    }

    // Calculate scores
    const scores = {
      extraversion: 0,
      intuition: 0,
      feeling: 0,
      perceiving: 0
    };

    answers.forEach(answer => {
      const question = testQuestions.find(q => q.id === answer.questionId);
      if (question) {
        const scoreValue = answer.score || 0;
        if (question.dimensions.E) scores.extraversion += scoreValue;
        if (question.dimensions.I) scores.extraversion -= scoreValue;
        if (question.dimensions.S) scores.intuition -= scoreValue;
        if (question.dimensions.N) scores.intuition += scoreValue;
        if (question.dimensions.T) scores.feeling -= scoreValue;
        if (question.dimensions.F) scores.feeling += scoreValue;
        if (question.dimensions.J) scores.perceiving -= scoreValue;
        if (question.dimensions.P) scores.perceiving += scoreValue;
      }
    });

    // Determine personality type
    const E_I = scores.extraversion >= 0 ? 'E' : 'I';
    const S_N = scores.intuition >= 0 ? 'N' : 'S';
    const T_F = scores.feeling >= 0 ? 'F' : 'T';
    const J_P = scores.perceiving >= 0 ? 'P' : 'J';

    const personalityType = E_I + S_N + T_F + J_P;

    // Get personality data
    const personalityInfo = mbtiData[personalityType] || {};

    // Update test result
    testResult.answers = answers;
    testResult.scores = scores;
    testResult.personalityType = personalityType;
    testResult.personalityDescription = personalityInfo.description;
    testResult.strengths = personalityInfo.strengths || [];
    testResult.weaknesses = personalityInfo.weaknesses || [];
    testResult.careerRecommendations = personalityInfo.careerRecommendations || [];
    testResult.reportGenerated = true;
    testResult.reportGeneratedAt = new Date();

    await testResult.save();

    res.json({
      success: true,
      message: 'Test submitted successfully',
      testId: testResult._id,
      personalityType,
      personalityTitle: personalityInfo.title,
      personalityDescription: personalityInfo.description
    });
  } catch (error) {
    console.error('Test submit error:', error);
    res.status(500).json({ message: 'Error submitting test', error: error.message });
  }
});

// Get test result
router.get('/:testId', authMiddleware, async (req, res) => {
  try {
    const testResult = await TestResult.findById(req.params.testId).populate('userId', 'name email');
    if (!testResult) {
      return res.status(404).json({ message: 'Test not found' });
    }

    res.json({
      success: true,
      testResult
    });
  } catch (error) {
    console.error('Get test error:', error);
    res.status(500).json({ message: 'Error fetching test', error: error.message });
  }
});

module.exports = router;