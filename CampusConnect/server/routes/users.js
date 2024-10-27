// server/routes/users.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;
