// server/routes/tutors.js
const express = require('express');
const Tutor = require('../models/Tutor');
const router = express.Router();

// Register Tutor
router.post('/register', async (req, res) => {
    const { userId, subjects, availability } = req.body;
    try {
        const newTutor = new Tutor({ userId, subjects, availability });
        await newTutor.save();
        res.status(201).json(newTutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Tutors
router.get('/', async (req, res) => {
    const tutors = await Tutor.find().populate('userId');
    res.json(tutors);
});

module.exports = router;
