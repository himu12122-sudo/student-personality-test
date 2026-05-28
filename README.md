# Student Personality Test & Career Guidance Platform

A comprehensive web application where students can take an MBTI-based personality test and receive personalized career recommendations.

## Features

- 🔐 User Registration & Authentication
- 📝 MBTI Personality Test (16 personality types)
- 📊 Real-time Score Calculation
- 📄 Personalized Report Generation
- 💼 Career Recommendations
- 📧 Email Report Delivery
- 📥 PDF Download Support

## Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js + Express.js
- MongoDB
- JWT Authentication
- Nodemailer

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
npm install
```

2. Create `.env` file with your configuration

3. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
npm install
```

2. Create `.env` file with API URL

3. Start the development server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tests
- `GET /api/tests/questions` - Get all test questions
- `POST /api/tests/start` - Start new test
- `POST /api/tests/submit` - Submit test answers
- `GET /api/tests/:testId` - Get test details

### Reports
- `GET /api/reports/:testId` - Get detailed report
- `GET /api/reports/:testId/download` - Download PDF report
- `POST /api/reports/:testId/email` - Email report
- `GET /api/reports/user/all` - Get all user reports

## MBTI Personality Types

The test generates one of 16 MBTI types based on 4 dimensions:

- **E/I**: Extraversion vs Introversion
- **S/N**: Sensing vs Intuition
- **T/F**: Thinking vs Feeling
- **J/P**: Judging vs Perceiving

---

**Happy Testing!** 🎉