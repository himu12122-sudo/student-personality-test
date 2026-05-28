const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: [
    {
      questionId: Number,
      selectedOption: String,
      dimension: String
    }
  ],
  scores: {
    extraversion: {
      type: Number,
      default: 0
    },
    intuition: {
      type: Number,
      default: 0
    },
    feeling: {
      type: Number,
      default: 0
    },
    perceiving: {
      type: Number,
      default: 0
    }
  },
  personalityType: {
    type: String,
    enum: [
      'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
      'ISTP', 'ISFP', 'INFP', 'INTP',
      'ESTP', 'ESFP', 'ENFP', 'ENTP',
      'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
    ]
  },
  personalityDescription: String,
  strengths: [String],
  weaknesses: [String],
  careerRecommendations: [String],
  relatedPersonalities: [String],
  completedAt: {
    type: Date,
    default: Date.now
  },
  reportGenerated: {
    type: Boolean,
    default: false
  },
  reportGeneratedAt: Date,
  emailSent: {
    type: Boolean,
    default: false
  },
  emailSentAt: Date,
  testDuration: Number
});

module.exports = mongoose.model('TestResult', testResultSchema);