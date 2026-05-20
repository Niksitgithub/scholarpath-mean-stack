/**
 * Validates required environment variables
 */

const validateEnv = () => {
  const requiredEnvVars = [
    'MONGO_URI',
    'PORT',
    'JWT_SECRET',
    'NODE_ENV'
  ];

  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missing.length > 0) {
    console.error(`❌ Missing environment variables: ${missing.join(', ')}`);
    console.error('📋 Check your .env file. Use .env.example as a template.');
    process.exit(1);
  }

  console.log('✅ All required environment variables are set');
};

module.exports = validateEnv;