const mongoose = require('mongoose');

// Define CandidateProfile schema
const candidateProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the associated User
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  skills: [{ type: String }],
  resumeUrl: { type: String }
});

// Create CandidateProfile model
const CandidateProfile = mongoose.model('CandidateProfile', candidateProfileSchema);

module.exports = CandidateProfile;
