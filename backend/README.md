# Backend - Student Personality Test Platform

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the backend directory with your configuration

### 3. Start Development Server
```bash
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user

### Tests
- **GET** `/api/tests/questions` - Get all test questions
- **POST** `/api/tests/start` - Start new test
- **POST** `/api/tests/submit` - Submit test answers
- **GET** `/api/tests/:testId` - Get test details

### Reports
- **GET** `/api/reports/:testId` - Get detailed report
- **GET** `/api/reports/:testId/download` - Download PDF report
- **POST** `/api/reports/:testId/email` - Email report
- **GET** `/api/reports/user/all` - Get all user reports