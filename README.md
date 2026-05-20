# 📚 ScholarPath - MEAN Stack Application

A full-stack web application for scholarship discovery and management built with the MEAN stack (MongoDB, Express, Angular, Node.js). Features intelligent scholarship recommendations based on student profiles and eligibility criteria.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## ✨ Features

- 🔐 **User Authentication** - JWT-based authentication with secure password hashing
- 👤 **User Profile Management** - Complete profile with eligibility criteria (marks, income, caste, state, etc.)
- 🎓 **Scholarship Browsing** - Search and filter scholarships by multiple criteria
- 🎯 **Smart Recommendations** - AI-driven scholarship matching based on student eligibility
- 📊 **Dashboard** - Statistics and quick access to recommended scholarships
- 🔒 **Secure Password Hashing** - bcryptjs with 10 rounds
- ✅ **Input Validation** - express-validator on all endpoints
- 🌐 **CORS Support** - Cross-origin requests enabled
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🚀 **Server-Side Rendering** - Angular Universal support for SEO

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js v18+
- **Framework**: Express.js 5.x
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv for configuration

### Frontend
- **Framework**: Angular 21
- **Language**: TypeScript
- **Styling**: CSS3
- **Build Tool**: Angular CLI with Vite
- **SSR**: Angular Universal
- **HTTP Client**: Angular HttpClient with RxJS

---

## 📁 Project Structure

```
scholarpath-mean-stack/
├── backend/                          # Express API Server
│   ├── controllers/                 # Business logic
│   │   ├── authController.js       # Authentication logic
│   │   └── scholarshipController.js # Scholarship operations
│   ├── models/                      # MongoDB schemas
│   │   ├── User.js                 # User schema with eligibility fields
│   │   └── Scholarship.js          # Scholarship schema
│   ├── routes/                      # API endpoints
│   │   ├── authRoutes.js           # Auth endpoints
│   │   └── scholarshipRoutes.js    # Scholarship endpoints
│   ├── middleware/                  # Custom middleware
│   │   └── authMiddleware.js       # JWT authentication
│   ├── validators/                  # Input validation
│   │   └── authValidators.js       # Auth validation rules
│   ├── utils/                       # Utility functions
│   │   └── seedData.js             # Database seeding script
│   ├── errorHandler.js              # Error handling middleware
│   ├── validateEnv.js               # Environment validation
│   ├── server.js                    # Express app entry point
│   └── package.json                 # Backend dependencies
│
├── frontend/                         # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/         # UI Components
│   │   │   │   ├── dashboard/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   ├── profile/
│   │   │   │   ├── navbar/
│   │   │   │   └── scholarship-detail/
│   │   │   ├── services/           # API Services
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── scholarship.service.ts
│   │   │   ├── guards/             # Route guards
│   │   │   │   └── auth.guard.ts  # Authentication guard
│   │   │   ├── app.ts              # Root component
│   │   │   ├── app.routes.ts       # Application routes
│   │   │   └── app.config.ts       # Application config
│   │   ├── main.ts                 # Client bootstrap
│   │   ├── main.server.ts          # Server bootstrap (SSR)
│   │   ├── styles.css              # Global styles
│   │   └── index.html              # Main HTML
│   ├── angular.json                # Angular configuration
│   ├── tsconfig.json               # TypeScript configuration
│   └── package.json                # Frontend dependencies
│
├── .env                             # Environment variables (auto-generated)
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── package.json                     # Root package (npm workspaces)
└── README.md                        # This file
```

---

## 📦 Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: v4.4 or higher (local or Atlas)
- **Git**: For version control

### Verify Installation
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
mongod --version  # Should be v4.4+
```

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Niksitgithub/scholarpath-mean-stack.git
cd scholarpath-mean-stack
```

### 2. Install Dependencies
Using npm workspaces, all dependencies will be installed automatically:

```bash
npm install
```

This installs dependencies for both backend and frontend.

Alternatively, install individually:
```bash
npm install -w backend
npm install -w frontend
```

---

## ⚙️ Configuration

### 1. Set Up Environment Variables

The project includes an automatic `.env` file. If you need to reconfigure:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# MongoDB Connection - Local
MONGO_URI=mongodb://localhost:27017/scholarpath

# OR MongoDB Atlas (Cloud)
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/scholarpath

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# Frontend Configuration
FRONTEND_URL=http://localhost:4200

# Database
DB_NAME=scholarpath
```

### 2. MongoDB Setup

**Option A: Local MongoDB**
```bash
# Start MongoDB service (Windows)
mongod

# Or on macOS with Homebrew
brew services start mongodb-community
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string from cluster details
4. Update `MONGO_URI` in `.env` with your connection string
5. Add your IP to IP Whitelist in Network Access

---

## 🏃 Running the Application

### Quick Start - All in One
```bash
npm start
```
This starts both backend and frontend concurrently.

### Start Backend Only
```bash
npm start:backend
```
Backend runs on: `http://localhost:5000`

API Base URL: `http://localhost:5000/api`

### Start Frontend Only
```bash
npm start:frontend
```
Frontend runs on: `http://localhost:4200`

### Development Mode with Hot Reload
```bash
npm run dev
```

---

## 💾 Database Setup

### Seed Sample Data
After starting the backend, seed the database with sample scholarships:

```bash
npm run seed
```

This populates the database with 7 sample scholarships for testing.

**Sample Scholarships Include:**
- Merit-Cum-Means National Scholarship
- Post-Matric Scholarship for SC/ST Students
- Progressive Girls Empowerment Scholarship
- Saksham Scholarship for Specially Abled Students
- Rural Talent Search Scholarship
- Prime Minister's Scholarship Scheme (PMSS)
- Apex General Merit Scholarship

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response** (201 Created):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "student": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response** (200 OK):
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "student": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

#### Get User Profile
```http
GET /auth/profile
Authorization: Bearer <token>
```

**Response** (200 OK):
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "marks": 85,
  "income": 250000,
  "caste": "General",
  "state": "Maharashtra",
  "gender": "Male",
  "stream": "Engineering",
  "disability": false,
  "area": "Urban",
  "role": "student"
}
```

#### Update User Profile
```http
PUT /auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Doe",
  "marks": 90,
  "income": 300000,
  "caste": "General",
  "state": "Maharashtra",
  "gender": "Male",
  "stream": "Engineering",
  "disability": false,
  "area": "Urban"
}
```

### Scholarship Endpoints

#### Get All Scholarships
```http
GET /scholarships?search=merit&stream=Engineering&state=Maharashtra
```

**Query Parameters:**
- `search` - Search in title, description, provider
- `stream` - Filter by stream (Engineering, Medicine, Management, etc.)
- `caste` - Filter by caste
- `state` - Filter by state

#### Get Recommended Scholarships (Protected)
```http
GET /scholarships/recommend
Authorization: Bearer <token>
```

Returns scholarships matching the user's profile and eligibility.

#### Get Scholarship Details
```http
GET /scholarships/id/{scholarshipId}
```

---

## 🔧 Development

### Available Scripts

```bash
# Root level (monorepo)
npm install                    # Install all dependencies
npm start                      # Start both backend and frontend
npm run dev                    # Start with hot reload
npm run build                  # Build both projects
npm run test                   # Run tests in both projects
npm start:backend              # Start backend only
npm start:frontend             # Start frontend only
npm run seed                   # Seed database with sample data

# Backend specific
npm start -w backend           # Start backend
npm run dev -w backend         # Start with nodemon
npm test -w backend            # Run backend tests

# Frontend specific
npm start -w frontend          # Start dev server
npm run build -w frontend      # Build for production
npm test -w frontend           # Run frontend tests
npm run type-check -w frontend # TypeScript type checking
```

---

## 🐛 Troubleshooting

### Backend Won't Start - NODE_ENV Error
```
❌ Missing environment variables: NODE_ENV
```
**Solution:**
- Ensure `.env` file exists in project root
- Check that the file contains: `NODE_ENV=development`
- The backend automatically loads `.env` from parent directory

### MongoDB Connection Issues
```
❌ Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solutions:**
1. Start MongoDB: `mongod`
2. Check connection string in `.env`
3. For Atlas, verify:
   - Connection string is correct
   - IP is whitelisted in network access
   - Database user has correct permissions

### Port Already in Use
```
❌ Error: EADDRINUSE: address already in use :::5000
```
**Solution - Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Solution - macOS/Linux:**
```bash
lsof -ti:5000 | xargs kill -9
```

**Alternative:**
Change PORT in `.env`: `PORT=5001`

### Module Not Found Error
```
❌ Error: Cannot find module 'express'
```
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Validation Errors on Register/Login
```
❌ Error: Validation failed
```
**Solutions:**
- Name must be at least 2 characters
- Email must be valid format
- Password must be at least 6 characters
- Check response details for specific validation errors

### Frontend Not Connecting to Backend
```
❌ Network Error: Cannot connect to http://localhost:5000
```
**Solutions:**
1. Verify backend is running: `npm start:backend`
2. Check that FRONTEND_URL in `.env` is correct
3. Verify CORS is enabled in `backend/server.js`
4. Check browser console (F12) for actual error

---

## 🔒 Security Best Practices

1. **Never commit `.env`** - Only commit `.env.example`
2. **Change JWT_SECRET** - Use a strong random string in production
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
3. **Use HTTPS** - In production, always use HTTPS URLs
4. **Password Hashing** - Passwords are hashed with bcryptjs (10 rounds)
5. **Input Validation** - All inputs are validated with express-validator
6. **CORS Configuration** - Restrict to known frontend URL in `.env`
7. **Rate Limiting** - Consider adding rate limiting in production

---

## 📈 Performance Tips

- **Database Indexing**: MongoDB automatically indexes `_id` and unique fields
- **Query Optimization**: Scholarship matching uses efficient aggregation
- **Lazy Loading**: Frontend implements lazy route loading
- **Bundle Analysis**: `ng build --stats-json` to analyze bundle size
- **Caching**: Consider Redis for session/data caching in production

---

## 🤝 Contributing

1. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
2. Make your changes and commit:
   ```bash
   git commit -m 'Add amazing feature'
   ```
3. Push to branch:
   ```bash
   git push origin feature/amazing-feature
   ```
4. Open a Pull Request

For detailed contributing guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 📞 Support

For issues, questions, or suggestions:
- 📧 Email: support@scholarpath.com
- 🐛 GitHub Issues: https://github.com/Niksitgithub/scholarpath-mean-stack/issues
- 💬 Discussions: https://github.com/Niksitgithub/scholarpath-mean-stack/discussions

---

## 🎉 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Angular](https://angular.io/) - Frontend framework
- [Mongoose](https://mongoosejs.com/) - ODM
- [JWT](https://jwt.io/) - Authentication
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Password hashing

---

**Last Updated**: 2026-05-20  
**Version**: 1.0.0  
**Status**: 🟢 Production Ready
