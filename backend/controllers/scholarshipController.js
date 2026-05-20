const Scholarship = require('../models/Scholarship');

// Get all scholarships (with optional filters)
const getAllScholarships = async (req, res) => {
    try {
        const { search, stream, caste, state } = req.query;
        let query = {};

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { provider: { $regex: search, $options: 'i' } }
            ];
        }

        if (stream) {
            query['eligibility.streams'] = stream;
        }

        if (caste) {
            query['eligibility.castes'] = caste;
        }

        if (state) {
            query['eligibility.states'] = state;
        }

        const scholarships = await Scholarship.find(query).sort({ deadline: 1 });
        res.status(200).json(scholarships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single scholarship details
const getScholarshipById = async (req, res) => {
    try {
        const scholarship = await Scholarship.findById(req.params.id);
        if (!scholarship) {
            return res.status(404).json({ message: 'Scholarship not found' });
        }
        res.status(200).json(scholarship);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get recommended scholarships for the logged-in student
const getRecommendedScholarships = async (req, res) => {
    try {
        const student = req.user;
        if (!student) {
            return res.status(404).json({ message: 'Student profile not found' });
        }

        // Base criteria: matching marks
        const query = {
            'eligibility.minMarks': { $lte: student.marks || 0 }
        };

        const conditions = [];

        // Matching income limit
        if (student.income !== undefined && student.income !== null) {
            conditions.push({
                $or: [
                    { 'eligibility.maxIncome': { $exists: false } },
                    { 'eligibility.maxIncome': null },
                    { 'eligibility.maxIncome': { $gte: student.income } }
                ]
            });
        }

        // Matching caste
        if (student.caste) {
            conditions.push({
                $or: [
                    { 'eligibility.castes': { $exists: false } },
                    { 'eligibility.castes': { $size: 0 } },
                    { 'eligibility.castes': student.caste }
                ]
            });
        }

        // Matching state
        if (student.state) {
            conditions.push({
                $or: [
                    { 'eligibility.states': { $exists: false } },
                    { 'eligibility.states': { $size: 0 } },
                    { 'eligibility.states': student.state }
                ]
            });
        }

        // Matching gender
        if (student.gender) {
            conditions.push({
                $or: [
                    { 'eligibility.genders': { $exists: false } },
                    { 'eligibility.genders': { $size: 0 } },
                    { 'eligibility.genders': student.gender }
                ]
            });
        }

        // Matching stream
        if (student.stream) {
            conditions.push({
                $or: [
                    { 'eligibility.streams': { $exists: false } },
                    { 'eligibility.streams': { $size: 0 } },
                    { 'eligibility.streams': student.stream }
                ]
            });
        }

        // Matching disability (if student has no disability, filter out scholarships that require it)
        if (student.disability !== undefined) {
            if (student.disability === false) {
                conditions.push({ 'eligibility.disabilityRequired': false });
            }
        }

        // Matching area
        if (student.area) {
            conditions.push({
                $or: [
                    { 'eligibility.area': { $exists: false } },
                    { 'eligibility.area': 'All' },
                    { 'eligibility.area': student.area }
                ]
            });
        }

        if (conditions.length > 0) {
            query.$and = conditions;
        }

        const scholarships = await Scholarship.find(query).sort({ deadline: 1 });
        res.status(200).json(scholarships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new scholarship (admin only)
const createScholarship = async (req, res) => {
    try {
        const scholarship = new Scholarship(req.body);
        const savedScholarship = await scholarship.save();
        res.status(201).json(savedScholarship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update scholarship (admin only)
const updateScholarship = async (req, res) => {
    try {
        const updatedScholarship = await Scholarship.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedScholarship) {
            return res.status(404).json({ message: 'Scholarship not found' });
        }
        res.status(200).json(updatedScholarship);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete scholarship (admin only)
const deleteScholarship = async (req, res) => {
    try {
        const deletedScholarship = await Scholarship.findByIdAndDelete(req.params.id);
        if (!deletedScholarship) {
            return res.status(404).json({ message: 'Scholarship not found' });
        }
        res.status(200).json({ message: 'Scholarship deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllScholarships,
    getScholarshipById,
    getRecommendedScholarships,
    createScholarship,
    updateScholarship,
    deleteScholarship
};
