# 🤝 Contributing Guide

Thank you for your interest in contributing to ScholarPath! This document provides guidelines and instructions for contributing.

---

## 📋 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Report issues responsibly
- Collaborate in good faith

---

## 🐛 Reporting Bugs

### Before Reporting
1. Check existing issues - your bug might already be reported
2. Update to the latest version
3. Gather system information

### Bug Report Template
```markdown
**Description**: Clear, concise description of the bug

**Steps to Reproduce**:
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**: What should happen

**Actual Behavior**: What actually happened

**Screenshots**: If applicable

**Environment**:
- OS: Windows/Mac/Linux
- Node.js: Version
- Browser: If frontend issue
```

---

## 💡 Suggesting Features

### Feature Request Template
```markdown
**Problem**: Describe the problem you're trying to solve

**Proposed Solution**: Describe your ideal solution

**Alternative Solutions**: Any alternatives considered

**Use Cases**: Why would this be useful?
```

---

## 🔧 Development Setup

### 1. Fork and Clone
```bash
git clone https://github.com/YOUR_USERNAME/scholarpath-mean-stack.git
cd scholarpath-mean-stack
```

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

---

## 📝 Code Standards

### Naming Conventions
- **Files**: `kebab-case.js` or `PascalCase.ts` (components)
- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Functions**: `camelCase` or `PascalCase` (components)

### Formatting
- Use Prettier for code formatting
```bash
npm run prettier -w frontend
```

### Comments
- Only comment complex logic
- Write clear, concise comments
- Keep comments up-to-date

### TypeScript
- Use strict mode
- Define types explicitly
- Avoid `any` type

---

## 📦 Backend Contribution Guidelines

### File Structure
```
backend/
├── controllers/          # Business logic
├── models/               # Database schemas
├── routes/               # API endpoints
├── errorHandler.js       # Error handling
├── validateEnv.js        # Validation
└── server.js             # Entry point
```

### Creating an Endpoint
1. Add schema in `models/`
2. Create controller in `controllers/`
3. Add routes in `routes/`
4. Test the endpoint

### Example
```javascript
// models/Post.js
const Schema = new mongoose.Schema({ /* ... */ });

// controllers/postController.js
exports.createPost = async (req, res) => {
  // Logic here
};

// routes/postRoutes.js
router.post('/', createPost);
```

---

## 🎨 Frontend Contribution Guidelines

### File Structure
```
frontend/src/
├── app/
│   ├── components/      # Reusable components
│   ├── services/        # API services
│   └── app.routes.ts    # Routing
└── styles/              # Global styles
```

### Creating a Component
```bash
ng generate component feature/my-component
```

This creates:
- `my-component.ts` (component class)
- `my-component.html` (template)
- `my-component.css` (styles)

### Component Template
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css']
})
export class MyComponent {
  // Logic here
}
```

---

## 🧪 Testing

### Backend Tests (when available)
```bash
npm test -w backend
```

### Frontend Tests
```bash
npm test -w frontend
```

### Write Tests For
- New features
- Bug fixes
- Critical functionality

---

## 📝 Commit Messages

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build, dependencies

### Examples
```bash
git commit -m "feat(auth): add jwt token refresh"
git commit -m "fix(login): resolve email validation issue"
git commit -m "docs: update api documentation"
```

---

## 🔄 Pull Request Process

### Before Submitting PR
1. ✅ Code follows style guidelines
2. ✅ Tests pass (`npm test`)
3. ✅ Documentation updated
4. ✅ No console errors/warnings
5. ✅ Commits are clean and descriptive

### PR Template
```markdown
## Description
Brief description of changes

## Type
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Refactoring

## Related Issues
Fixes #123

## Testing
How was this tested?

## Screenshots
If applicable

## Checklist
- [ ] Code follows guidelines
- [ ] Tests pass
- [ ] Documentation updated
```

### PR Description Guidelines
- Start with a clear summary
- Explain the problem and solution
- Reference related issues
- Include testing information

---

## 🔍 Code Review Process

Maintainers will:
1. Review your code
2. Request changes if needed
3. Test the changes
4. Merge when approved

---

## 📚 Documentation

### README Files
- Update if adding features
- Keep examples current
- Document breaking changes

### Code Comments
- Explain "why" not "what"
- Use JSDoc for functions
```javascript
/**
 * Validates user email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
```

---

## 🚀 Getting Help

- Check the main [README](../README.md)
- Review existing issues and PRs
- Ask in PR comments
- Contact maintainers

---

## ✨ Recognition

Contributors are recognized in:
- CONTRIBUTORS.md file
- Release notes
- GitHub contributors page

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the same MIT License as the project.

---

**Thank you for contributing to ScholarPath! 🎉**