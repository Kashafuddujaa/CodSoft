// JobDetails.js (or any relevant component file)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobDetails = ({ jobId }) => {
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async (jobId) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}`);
        setJobDetails(response.data); // Set job details in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to fetch job details. Please try again.'); // Set error message
        setLoading(false);
      }
    };

    // Call fetchJobDetails when component mounts with the specified jobId
    fetchJobDetails(jobId);
  }, [jobId]); // Trigger the effect when jobId prop changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!jobDetails) {
    return <p>Job not found.</p>;
  }

  // Render job details once fetched
  return (
    <div>
      <h2>{jobDetails.title}</h2>
      <p>Description: {jobDetails.description}</p>
      <p>Location: {jobDetails.location}</p>
      {/* Add more job details as needed */}
    </div>
  );
};

export default JobDetails;
