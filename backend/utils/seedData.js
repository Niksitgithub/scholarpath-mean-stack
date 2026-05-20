const mongoose = require('mongoose');
const Scholarship = require('../models/Scholarship');
require('dotenv').config({ path: '../.env' }); // load from parent folder or relative path

const scholarships = [
    {
        title: "Merit-Cum-Means National Scholarship",
        description: "Assisting talented students from low-income families to pursue professional and technical careers in engineering, medical, and applied science streams.",
        provider: "Ministry of Education, Government of India",
        amount: 50000,
        deadline: new Date("2026-09-30"),
        applicationUrl: "https://scholarships.gov.in",
        eligibility: {
            minMarks: 75,
            maxIncome: 250000,
            castes: [],
            states: [],
            genders: [],
            streams: ["Engineering", "Medicine", "Science"],
            disabilityRequired: false,
            area: "All"
        }
    },
    {
        title: "Post-Matric Scholarship for SC/ST Students",
        description: "Financial assistance for Scheduled Caste and Scheduled Tribe students studying at post-matriculation or post-secondary stages to enable them to complete their education.",
        provider: "Department of Social Justice & Empowerment",
        amount: 30000,
        deadline: new Date("2026-10-15"),
        applicationUrl: "https://scholarships.gov.in",
        eligibility: {
            minMarks: 50,
            maxIncome: 300000,
            castes: ["SC", "ST"],
            states: [],
            genders: [],
            streams: [],
            disabilityRequired: false,
            area: "All"
        }
    },
    {
        title: "Progressive Girls Empowerment Scholarship",
        description: "Dedicated to promoting education and technical training among young women by funding their higher education in all domains.",
        provider: "Vikas Foundation",
        amount: 45000,
        deadline: new Date("2026-08-31"),
        applicationUrl: "https://example.com/girls-empowerment",
        eligibility: {
            minMarks: 65,
            maxIncome: 400000,
            castes: [],
            states: [],
            genders: ["Female"],
            streams: [],
            disabilityRequired: false,
            area: "All"
        }
    },
    {
        title: "Saksham Scholarship Scheme for Specially Abled Students",
        description: "An initiative supporting specially-abled children to pursue technical education by providing financial assistance for tuition and study aids.",
        provider: "All India Council for Technical Education (AICTE)",
        amount: 50000,
        deadline: new Date("2026-11-30"),
        applicationUrl: "https://aicte-india.org",
        eligibility: {
            minMarks: 50,
            maxIncome: 800000,
            castes: [],
            states: [],
            genders: [],
            streams: ["Engineering", "Management", "Science"],
            disabilityRequired: true,
            area: "All"
        }
    },
    {
        title: "Rural Talent Search Scholarship",
        description: "Supporting high-performing students residing in rural villages to relocate and study in metropolitan colleges and universities.",
        provider: "State Education Welfare Board",
        amount: 20000,
        deadline: new Date("2026-07-15"),
        applicationUrl: "https://state-edu.gov.in",
        eligibility: {
            minMarks: 70,
            maxIncome: 200000,
            castes: [],
            states: ["Maharashtra", "Gujarat", "Rajasthan"],
            genders: [],
            streams: [],
            disabilityRequired: false,
            area: "Rural"
        }
    },
    {
        title: "Prime Minister's Scholarship Scheme (PMSS)",
        description: "Encouraging higher technical and professional education for the dependent wards of ex-servicemen, ex-coast guard personnel and their widows.",
        provider: "Welfare and Rehabilitation Board (WARB)",
        amount: 36000,
        deadline: new Date("2026-12-15"),
        applicationUrl: "https://desw.gov.in",
        eligibility: {
            minMarks: 60,
            maxIncome: 600000,
            castes: [],
            states: [],
            genders: [],
            streams: ["Engineering", "Medicine", "Management", "Arts"],
            disabilityRequired: false,
            area: "All"
        }
    },
    {
        title: "Apex General Merit Scholarship",
        description: "Open to students of all backgrounds based purely on academic excellence and top-tier school results.",
        provider: "Apex Group Trust",
        amount: 15000,
        deadline: new Date("2026-08-15"),
        applicationUrl: "https://example.com/apex-scholarship",
        eligibility: {
            minMarks: 90,
            maxIncome: 1000000,
            castes: ["General", "OBC"],
            states: [],
            genders: [],
            streams: [],
            disabilityRequired: false,
            area: "All"
        }
    }
];

const seedDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/scholarpath';
        console.log(`Connecting to MongoDB at: ${mongoUri}`);
        await mongoose.connect(mongoUri);
        
        console.log('Clearing existing scholarships...');
        await Scholarship.deleteMany({});
        
        console.log('Inserting mock scholarships...');
        await Scholarship.insertMany(scholarships);
        
        console.log('Database successfully seeded with scholarships! 🎉');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
