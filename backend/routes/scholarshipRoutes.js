const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    getAllScholarships,
    getScholarshipById,
    getRecommendedScholarships,
    createScholarship,
    updateScholarship,
    deleteScholarship
} = require('../controllers/scholarshipController');

// PUBLIC ROUTES
router.get('/', getAllScholarships);
router.get('/id/:id', getScholarshipById);

// PROTECTED STUDENT ROUTES
router.get('/recommend', protect, getRecommendedScholarships);

// PROTECTED ADMIN CRUD ROUTES
router.post('/', protect, adminOnly, createScholarship);
router.put('/:id', protect, adminOnly, updateScholarship);
router.delete('/:id', protect, adminOnly, deleteScholarship);

module.exports = router;
