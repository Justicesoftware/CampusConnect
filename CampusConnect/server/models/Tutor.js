// server/models/Tutor.js
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjects: [{ type: String, required: true }],
    availability: [{ day: String, time: String }]
});

const Tutor = mongoose.model('Tutor', tutorSchema);
module.exports = Tutor;
