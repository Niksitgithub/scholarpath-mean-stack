const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const validateEnv = require('./validateEnv');
const errorHandler = require('./errorHandler');
const authRoutes = require('./routes/authRoutes');

// Validate environment variables before starting
validateEnv();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });

// Health Check Route
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'ScholarPath Backend Running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      statusCode: 404,
      message: `Route ${req.method} ${req.path} not found`
    }
  });
});

// Error Handling Middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = app.listen(PORT, () => {
  console.log(`\n🚀 ScholarPath Backend Started`);
  console.log(`   Environment: ${NODE_ENV}`);
  console.log(`   Server: http://localhost:${PORT}`);
  console.log(`   API Base: http://localhost:${PORT}/api\n`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n📛 SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
    mongoose.connection.close(false, () => {
      console.log('✅ MongoDB connection closed');
      process.exit(0);
    });
  });
});