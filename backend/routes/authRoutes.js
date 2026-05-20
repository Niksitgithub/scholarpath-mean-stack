const express = require('express');

const router = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { validateRegister, validateLogin, validateRequest } = require('../validators/authValidators');


// TEST ROUTE

router.get('/test', (req, res) => {

    res.json({
        message: 'Auth route working'
    });

});


// REGISTER

router.post('/register', validateRegister, validateRequest, registerUser);


// LOGIN

router.post('/login', validateLogin, validateRequest, loginUser);

// PROFILE ROUTES
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);


module.exports = router;