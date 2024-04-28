const express = require('express');
const router = express.Router();
const Job = require('../models/jobs');
const JobApplication = require('../models/jobApplication');

// GET /api/jobs - Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /api/jobs/:id - Get job details by ID
router.get('/:id', async (req, res) => {
  const jobId = req.params.id;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /api/jobs/:id/apply - Apply for a job
router.post('/:id/apply', async (req, res) => {
  const jobId = req.params.id;
  const { candidateName, email, resumeUrl } = req.body;

  try {
    // Validate candidateName, email, resumeUrl here if needed

    // Create a new job application record
    const newJobApplication = new JobApplication({
      jobId,
      candidateName,
      email,
      resumeUrl,
      appliedAt: new Date()
    });

    await newJobApplication.save(); // Save job application to the database

    res.status(200).json({ message: 'Job application submitted successfully' });
  } catch (error) {
    console.error('Error submitting job application:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Job = require('../models/jobs');
// const JobApplication = require('../models/jobApplication');

// // GET /api/jobs - Get all jobs
// router.get('/', async (req, res) => {
//   try {
//     const jobs = await Job.find();
//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error('Error fetching jobs:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // GET /api/jobs/:id - Get job details by ID
// router.get('/:id', async (req, res) => {
//   const jobId = req.params.id;

//   try {
//     const job = await Job.findById(jobId);
//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }
//     res.status(200).json(job);
//   } catch (error) {
//     console.error(`Error fetching job details for ID ${jobId}:`, error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // POST /api/jobs/:id/apply - Apply for a job
// router.post('/:id/apply', async (req, res) => {
//   const jobId = req.params.id;
//   const { candidateName, email, resumeUrl } = req.body;

//   // Basic request body validation
//   if (!candidateName || !email || !resumeUrl) {
//     return res.status(400).json({ message: 'All fields (candidateName, email, resumeUrl) are required' });
//   }

//   try {
//     const job = await Job.findById(jobId);
//     if (!job) {
//       return res.status(404).json({ message: 'Job not found' });
//     }

//     // Create a new job application record
//     const newJobApplication = new JobApplication({
//       jobId,
//       candidateName,
//       email,
//       resumeUrl,
//       appliedAt: new Date()
//     });

//     await newJobApplication.save(); // Save job application to the database

//     res.status(201).json({ message: 'Job application submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting job application:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// module.exports = router;

