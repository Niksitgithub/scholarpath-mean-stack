# 📚 ScholarPath - MEAN Stack Application

A full-stack web application for scholarship discovery and management built with the MEAN stack (MongoDB, Express, Angular, Node.js).

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Contributing](#contributing)

---

## ✨ Features

- 🔐 User Authentication (JWT-based)
- 👤 User Profile Management
- 🎓 Scholarship Browsing & Search
- 📌 Bookmark/Save Scholarships
- 📊 Dashboard with Statistics
- 🔒 Secure Password Hashing
- 🌐 CORS Support
- 📱 Responsive Angular Frontend

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.x
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **CORS**: Enabled for cross-origin requests
- **Validation**: express-validator

### Frontend
- **Framework**: Angular 21
- **Language**: TypeScript
- **Styling**: CSS
- **Build Tool**: Angular CLI
- **SSR**: Angular Universal
- **Testing**: Vitest

---

## 📁 Project Structure

```
scholarpath-mean-stack/
├── backend/                      # Express API Server
│   ├── controllers/             # Business logic
│   ├── models/                  # MongoDB schemas
│   ├── routes/                  # API endpoints
│   ├── errorHandler.js          # Error handling middleware
│   ├── validateEnv.js           # Environment validation
│   ├── server.js                # Entry point
│   └── package.json             # Backend dependencies
│
├── frontend/                     # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/      # UI Components
│   │   │   ├── services/        # API Services
│   │   │   ├── app.ts           # Root Component
│   │   │   └── app.routes.ts    # Routing
│   │   ├── main.ts              # Client bootstrap
│   │   ├── main.server.ts       # Server bootstrap (SSR)
│   │   ├── styles.css           # Global styles
│   │   └── index.html           # Main HTML
│   ├── angular.json             # Angular Configuration
│   ├── tsconfig.json            # TypeScript Config
│   └── package.json             # Frontend dependencies
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── package.json                 # Root package (npm workspaces)
└── README.md                    # This file
```

---

## 📦 Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: v4.4 or higher (local or Atlas)
- **Git**: For version control

### Verify Installation
```bash
node --version
npm --version
mongodb --version
```

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd scholarpath-mean-stack
```

### 2. Install Dependencies (Monorepo)
Using npm workspaces, all dependencies will be installed for both backend and frontend:

```bash
npm install
```

Or install individually:
```bash
npm install -w backend
npm install -w frontend
```

---

## ⚙️ Configuration

### 1. Set Up Environment Variables

Copy the template file and configure your environment:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/scholarpath
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/scholarpath

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# Frontend Configuration
FRONTEND_URL=http://localhost:4200

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### 2. MongoDB Setup

**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGO_URI` in `.env`

---

## 🏃 Running the Application

### Start Everything (Backend + Frontend)
```bash
npm start
```

### Start Backend Only
```bash
npm start:backend
# or
npm run dev -w backend  # with auto-reload
```

**Backend will run on**: `http://localhost:5000`

### Start Frontend Only
```bash
npm start:frontend
```

**Frontend will run on**: `http://localhost:4200`

### Development Mode (with hot reload)
```bash
npm run dev
```

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

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response**:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get Current User
```http
GET /auth/me
Authorization: Bearer <token>
```

### Health Check
```http
GET /
```

---

## 🔧 Development

### Available Scripts

```bash
# Root level (monorepo)
npm install              # Install all dependencies
npm start                # Start both backend and frontend
npm run build            # Build both projects
npm run test             # Run tests in both projects
npm start:backend        # Start backend only
npm start:frontend       # Start frontend only

# Backend specific
npm start -w backend     # Start backend
npm run dev -w backend   # Start with hot reload
npm test -w backend      # Run tests

# Frontend specific
npm start -w frontend    # Start dev server
npm run build -w frontend # Build for production
npm test -w frontend     # Run tests
```

### Code Standards

- **Linting**: Run Prettier in frontend
  ```bash
  npm run prettier -w frontend
  ```

- **Type Checking**: TypeScript in frontend
  ```bash
  npm run type-check -w frontend
  ```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
❌ Error: connect ECONNREFUSED
```
**Solution**: 
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- For Atlas, verify IP whitelist in network settings

### Port Already in Use
```
❌ Error: EADDRINUSE: address already in use :::5000
```
**Solution**:
```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change PORT in .env
PORT=5001
```

### Module Not Found
```
❌ Error: Cannot find module 'express'
```
**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Missing Environment Variables
```
❌ Missing environment variables: JWT_SECRET, MONGO_URI
```
**Solution**:
```bash
cp .env.example .env
# Edit .env with your values
```

---

## 📊 Monitoring & Logs

### Backend Logs
- Development mode shows detailed logs in console
- Check error messages for debugging
- Use `NODE_ENV=development` for stack traces

### Frontend Logs
- Browser Console (F12)
- Angular DevTools extension recommended

---

## 🔒 Security Best Practices

1. **Never commit `.env`** - Only commit `.env.example`
2. **Change JWT_SECRET** - Use a strong random string in production
3. **Use HTTPS** - In production, always use HTTPS
4. **Password Hashing** - Passwords are hashed with bcryptjs (10 rounds)
5. **CORS Configuration** - Restrict to known frontend URL
6. **Input Validation** - All inputs validated with express-validator

---

## 📈 Performance Tips

- **Database Indexing**: Add indexes to frequently queried fields
- **Caching**: Implement Redis for session/data caching
- **Compression**: Enable gzip compression in production
- **Lazy Loading**: Use Angular lazy routing for large features
- **Bundle Analysis**: Use `ng build --stats-json` to analyze bundle size

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

For detailed contributing guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 📞 Support

For issues, questions, or suggestions:
- Create an issue on GitHub
- Email: support@scholarpath.com
- Discord: [Community Link]

---

## 🎉 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Angular](https://angular.io/) - Frontend framework
- [JWT](https://jwt.io/) - Authentication

---

**Last Updated**: 2026-05-20  
**Version**: 1.0.0  
**Status**: 🟢 Active Development