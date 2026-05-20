# 🚀 Quick Reference Card

Print this out or bookmark it!

---

## ⚡ Essential Commands

```bash
# SETUP
npm install                    Install dependencies

# DEVELOPMENT
npm start                      Start both services
npm start:backend              Backend only (port 5000)
npm start:frontend             Frontend only (port 4200)
npm run dev                    Dev mode with hot reload

# BUILDING
npm run build                  Build production
npm run build:backend          Build backend
npm run build:frontend         Build frontend

# TESTING
npm test                       Run all tests
npm test -w backend            Backend tests only
npm test -w frontend           Frontend tests only
```

---

## 🔗 URLs (Development)

| Service | URL | Purpose |
|---------|-----|----------|
| **Backend** | http://localhost:5000 | API Server |
| **API** | http://localhost:5000/api | REST Endpoints |
| **Frontend** | http://localhost:4200 | Web App |
| **Health Check** | http://localhost:5000/ | Server status |

---

## 📁 Key Files

| File | Purpose | Action |
|------|---------|--------|
| `.env.example` | Config template | Copy to `.env` |
| `.env` | Secrets & config | Edit with your values |
| `backend/server.js` | Backend entry | Start backend here |
| `backend/errorHandler.js` | Error handling | Middleware for errors |
| `frontend/src/app/app.ts` | Frontend root | Main component |
| `README.md` | Project overview | Read first |
| `CONTRIBUTING.md` | Contribution guide | Before submitting PR |

---

## 🔐 Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/scholarpath
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:4200
```

---

## 📚 Documentation Map

```
README.md
  ├─ Project overview
  ├─ Setup guide
  └─ API documentation

CONTRIBUTING.md
  ├─ Code standards
  ├─ PR process
  └─ Testing requirements

SETUP_CHECKLIST.md
  ├─ Local setup
  ├─ Security
  └─ Deployment

backend/README.md
  ├─ API routes
  ├─ Middleware
  └─ Dependencies

frontend/README.md
  ├─ Architecture
  ├─ Components
  └─ Services
```

---

## 🔄 Development Workflow

```
1. Clone & Setup
   git clone <url> && cd scholarpath-mean-stack
   npm install
   cp .env.example .env

2. Start Development
   npm start
   
3. Make Changes
   Edit backend/ or frontend/ files
   Auto-reload on save

4. Test Changes
   npm test

5. Commit & Push
   git checkout -b feature/my-feature
   git commit -m "feat: add feature"
   git push origin feature/my-feature

6. Create PR
   Submit to main branch
```

---

## ⚠️ Common Issues

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Kill process: `taskkill /PID <PID> /F` OR change PORT in .env |
| MongoDB not connected | Ensure `mongod` is running or check MONGO_URI |
| Module not found | Run `npm install` again |
| .env not loaded | Restart the server |
| Permission denied | Check file permissions or run as admin |

---

## 🔑 Key Technologies

- **Backend**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Frontend**: Angular 21 + TypeScript
- **Auth**: JWT (jsonwebtoken)
- **Password**: bcryptjs (hashing)
- **API**: REST with JSON

---

## 📊 Project Stats

- **Type**: MEAN Stack Monorepo
- **Size**: ~40 tracked files
- **Docs**: 25,000+ lines
- **Services**: 2 (backend + frontend)
- **Databases**: MongoDB

---

## 🎯 Quick Checklist Before Commit

- [ ] Code follows guidelines (CONTRIBUTING.md)
- [ ] Tests pass (`npm test`)
- [ ] No console errors
- [ ] `.env` not committed (only `.env.example`)
- [ ] Secrets not in code
- [ ] Comments added where needed
- [ ] Commit message is descriptive

---

## 🚀 Deploy Checklist

- [ ] All tests passing
- [ ] Code reviewed
- [ ] `.env` configured for production
- [ ] Build successful (`npm run build`)
- [ ] MongoDB production ready
- [ ] HTTPS enabled
- [ ] Backups configured
- [ ] Monitoring active

---

## 📞 Help & Support

| Question | Answer |
|----------|--------|
| How do I start? | Read `README.md` |
| How do I contribute? | Read `CONTRIBUTING.md` |
| How do I deploy? | Read `SETUP_CHECKLIST.md` |
| Backend questions? | Check `backend/README.md` |
| Frontend questions? | Check `frontend/README.md` |
| What improved? | Check `IMPROVEMENTS.md` |

---

## 🎨 Code Standards Summary

### Naming
- Files: `kebab-case.js` or `PascalCase.ts`
- Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

### Formatting
- Use Prettier: `npm run prettier -w frontend`
- 2 spaces indentation
- Line length: 80-100 characters

### Comments
- Only for complex logic
- Be concise and clear
- Update when code changes

---

## 🔄 Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
# (auto-reload on save)

# Commit with good message
git add .
git commit -m "feat: description of changes"

# Push to remote
git push origin feature/my-feature

# Create PR on GitHub
# Request review
# Merge when approved
```

---

## 💾 File Structure Quick Ref

```
backend/
├── server.js          Main entry
├── errorHandler.js    Error middleware
├── validateEnv.js     Env validation
├── controllers/       Business logic
├── models/            Database schemas
└── routes/            API endpoints

frontend/
├── src/
│   ├── app/
│   │   ├── components/    UI parts
│   │   ├── services/      API calls
│   │   └── app.routes.ts  URLs
│   └── main.ts            Start file
└── angular.json           Config
```

---

## 🔒 Security Reminders

✅ Change JWT_SECRET before production  
✅ Never commit .env file  
✅ Use HTTPS in production  
✅ Validate all inputs  
✅ Hash passwords with bcryptjs  
✅ Use strong database passwords  
✅ Keep dependencies updated  
✅ Enable CORS only for trusted origins  

---

## 📝 Useful Links

- [Angular Docs](https://angular.io/docs)
- [Express Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [JWT Info](https://jwt.io/)
- [Node.js Docs](https://nodejs.org/docs/)

---

**Print & Bookmark This Page! 📌**

*Last Updated: 2026-05-20*