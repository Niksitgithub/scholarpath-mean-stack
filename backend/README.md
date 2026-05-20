# 🔧 Backend API Documentation

Express.js REST API for ScholarPath application.

## Quick Start

```bash
npm install
npm run dev
```

**Server**: http://localhost:5000

---

## 📁 Directory Structure

```
backend/
├── controllers/        # Business logic handlers
├── models/            # MongoDB Mongoose schemas
├── routes/            # API endpoints
├── errorHandler.js    # Global error middleware
├── validateEnv.js     # Environment validation
├── server.js          # Application entry point
└── package.json       # Dependencies
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/register` | Register new user | ❌ |
| POST | `/login` | Login user | ❌ |
| GET | `/me` | Get current user | ✅ |
| POST | `/logout` | Logout user | ✅ |

---

## 🛡️ Middleware

### Error Handler (`errorHandler.js`)
- Catches all errors
- Returns consistent JSON format
- Hides stack traces in production
- Logs errors to console

### Environment Validator (`validateEnv.js`)
- Validates required environment variables on startup
- Exits gracefully if missing
- Shows helpful error messages

---

## 📦 Dependencies

### Production
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **cors**: Cross-origin support
- **dotenv**: Environment variables
- **express-validator**: Input validation

### Development
- **nodemon**: Auto-reload on file changes

---

## 🚀 Scripts

```bash
npm start              # Production mode
npm run dev            # Development with auto-reload
npm test               # Run tests
```

---

## 🔑 Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/scholarpath
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:4200
```

---

## 💾 Data Models

### User Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Authentication Flow

1. User registers → Password hashed with bcryptjs
2. User logs in → Credentials verified
3. JWT token generated → Sent to client
4. Client sends token in Authorization header
5. Protected routes verify token with middleware

---

## 📝 Error Responses

```json
{
  "success": false,
  "error": {
    "statusCode": 400,
    "message": "Validation error"
  }
}
```

---

## 🧪 Testing

```bash
npm test
```

Currently: No tests configured  
To add: Jest or Mocha

---

## 🔄 Graceful Shutdown

Server handles SIGTERM signal:
- Stops accepting new connections
- Closes HTTP server
- Closes MongoDB connection
- Exits with code 0

---

## 📊 Monitoring

Check logs for:
- Connection status
- Environment validation
- Request errors
- MongoDB status

```
✅ All required environment variables are set
✅ MongoDB Connected
🚀 ScholarPath Backend Started
   Environment: development
   Server: http://localhost:5000
```

---

**Note**: This is backend only. Frontend is in `/frontend` directory.