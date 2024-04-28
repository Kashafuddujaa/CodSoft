const CandidateProfile = require('../models/CandidateProfile');

// Create a new candidate profile
const createCandidateProfile = async (userId, fullName, email, phoneNumber, skills, resumeUrl) => {
  try {
    const candidateProfile = new CandidateProfile({
      user: userId,
      fullName,
      email,
      phoneNumber,
      skills,
      resumeUrl
    });
    const savedProfile = await candidateProfile.save();
    return savedProfile;
  } catch (error) {
    console.error('Error creating candidate profile:', error);
    throw error;
  }
};

// Retrieve candidate profile by user ID
const getCandidateProfileByUserId = async (userId) => {
  try {
    const profile = await CandidateProfile.findOne({ user: userId }).populate('user');
    return profile;
  } catch (error) {
    console.error('Error fetching candidate profile:', error);
    throw error;
  }
};

// Update candidate profile by user ID
const updateCandidateProfile = async (userId, updateData) => {
  try {
    const updatedProfile = await CandidateProfile.findOneAndUpdate({ user: userId }, updateData, { new: true });
    return updatedProfile;
  } catch (error) {
    console.error('Error updating candidate profile:', error);
    throw error;
  }
};

// Delete candidate profile by user ID
const deleteCandidateProfileByUserId = async (userId) => {
  try {
    const deletedProfile = await CandidateProfile.findOneAndDelete({ user: userId });
    return deletedProfile;
  } catch (error) {
    console.error('Error deleting candidate profile:', error);
    throw error;
  }
};

module.exports = {
  createCandidateProfile,
  getCandidateProfileByUserId,
  updateCandidateProfile,
  deleteCandidateProfileByUserId
};
