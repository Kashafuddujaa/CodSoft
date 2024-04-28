const express = require('express');
const router = express.Router();
const CandidateProfile = require('../models/CandidateProfile');

// POST /api/profile/create - Create a new candidate profile
router.post('/create', async (req, res) => {
  const { fullName, email, phoneNumber, skills, resumeUrl } = req.body;

  try {
    const newProfile = new CandidateProfile({
      user: req.user._id, // Assuming authenticated user's ID is available in req.user
      fullName,
      email,
      phoneNumber,
      skills,
      resumeUrl
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error('Error creating candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /api/profile/me - Get current user's candidate profile
router.get('/me', async (req, res) => {
  try {
    const profile = await CandidateProfile.findOne({ user: req.user._id }).populate('user', 'username email');
    if (!profile) {
      return res.status(404).json({ message: 'Candidate profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// PUT /api/profile/update - Update current user's candidate profile
router.put('/update', async (req, res) => {
  const { fullName, email, phoneNumber, skills, resumeUrl } = req.body;

  try {
    const profile = await CandidateProfile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Candidate profile not found' });
    }

    profile.fullName = fullName;
    profile.email = email;
    profile.phoneNumber = phoneNumber;
    profile.skills = skills;
    profile.resumeUrl = resumeUrl;

    const updatedProfile = await profile.save();
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
