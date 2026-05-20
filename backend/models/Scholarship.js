const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    applicationUrl: {
        type: String,
        required: true
    },
    eligibility: {
        minMarks: {
            type: Number,
            default: 0
        },
        maxIncome: {
            type: Number,
            default: Infinity
        },
        castes: {
            type: [String],
            default: [] // Empty means all castes eligible
        },
        states: {
            type: [String],
            default: [] // Empty means all states eligible
        },
        genders: {
            type: [String],
            default: [] // Empty means all genders eligible
        },
        streams: {
            type: [String],
            default: [] // Empty means all streams eligible
        },
        disabilityRequired: {
            type: Boolean,
            default: false
        },
        area: {
            type: String,
            default: 'All' // Urban, Rural, All
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
