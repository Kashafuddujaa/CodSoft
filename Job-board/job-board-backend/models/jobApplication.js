const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  candidateName: { type: String, required: true },
  email: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }
});

const JobApplication = mongoose.model('jobApplication', jobApplicationSchema);

module.exports = JobApplication;
