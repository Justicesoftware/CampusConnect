const express = require('express');
const Tutor = require('../models/Tutor');
const router = express.Router();

// Create tutor profile
router.post('/', async (req, res) => {
    const { userId, subjects, availability, profile } = req.body;
    const newTutor = new Tutor({ userId, subjects, availability, profile });
    await newTutor.save();
    res.status(201).send('Tutor profile created');
});

// Additional tutor routes (update, delete, etc.) can be added here

module.exports = router;
