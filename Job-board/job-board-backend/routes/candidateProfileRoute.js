const express = require('express');
const router = express.Router();
const candidateProfileService = require('../services/candidateProfileService');

// POST /api/candidate-profile/create
router.post('/create', async (req, res) => {
  const { userId, fullName, email, phoneNumber, skills, resumeUrl } = req.body;

  try {
    const newProfile = await candidateProfileService.createCandidateProfile(userId, fullName, email, phoneNumber, skills, resumeUrl);
    res.status(201).json(newProfile);
  } catch (error) {
    console.error('Error creating candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET /api/candidate-profile/me/:userId
router.get('/me/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const profile = await candidateProfileService.getCandidateProfileByUserId(userId);
    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// PUT /api/candidate-profile/update/:userId
router.put('/update/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updateData = req.body;

  try {
    const updatedProfile = await candidateProfileService.updateCandidateProfile(userId, updateData);
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE /api/candidate-profile/delete/:userId
router.delete('/delete/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedProfile = await candidateProfileService.deleteCandidateProfileByUserId(userId);
    res.status(200).json(deletedProfile);
  } catch (error) {
    console.error('Error deleting candidate profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
