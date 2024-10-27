const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subjects: { type: [String], required: true },
    availability: { type: [String], required: true },
    profile: { type: String },
});

module.exports = mongoose.model('Tutor', tutorSchema);

