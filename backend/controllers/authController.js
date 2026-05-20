const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// REGISTER USER

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: 'User already exists'
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

const token = jwt.sign(
    {
        id: user._id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '7d'
    }
);

res.status(201).json({
    token,
    student: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
});

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// LOGIN USER

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: 'Invalid email or password'
            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                message: 'Invalid email or password'
            });

        }

        const token = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: '7d'
            }

        );

        res.status(200).json({

            message: 'Login successful',

            token,

            student: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// GET USER PROFILE
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE USER PROFILE
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = req.body.name || user.name;
        user.caste = req.body.caste !== undefined ? req.body.caste : user.caste;
        user.income = req.body.income !== undefined ? req.body.income : user.income;
        user.marks = req.body.marks !== undefined ? req.body.marks : user.marks;
        user.state = req.body.state !== undefined ? req.body.state : user.state;
        user.gender = req.body.gender !== undefined ? req.body.gender : user.gender;
        user.stream = req.body.stream !== undefined ? req.body.stream : user.stream;
        user.disability = req.body.disability !== undefined ? req.body.disability : user.disability;
        user.area = req.body.area !== undefined ? req.body.area : user.area;

        const updatedUser = await user.save();
        res.status(200).json({
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            caste: updatedUser.caste,
            income: updatedUser.income,
            marks: updatedUser.marks,
            state: updatedUser.state,
            gender: updatedUser.gender,
            stream: updatedUser.stream,
            disability: updatedUser.disability,
            area: updatedUser.area
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getProfile,
    updateProfile
};