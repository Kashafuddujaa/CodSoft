import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [applyingJobId, setApplyingJobId] = useState(null);
  const [candidateName, setCandidateName] = useState('');
  const [email, setEmail] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [applicationMessage, setApplicationMessage] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Error fetching jobs. Please try again later.');
      }
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    setApplyingJobId(jobId);
  };

  const handleSubmitApplication = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/job/${applyingJobId}/apply`, {
        candidateName,
        email,
        resumeUrl
      });
      setApplicationMessage(response.data.message);
      // Clear form fields after successful submission
      setCandidateName('');
      setEmail('');
      setResumeUrl('');
      setApplyingJobId(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      setApplicationMessage('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">All Jobs</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {jobs.map((job) => (
        <div key={job._id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <h2 className="text-xl font-bold mb-2">{job.title}</h2>
          <p className="text-gray-600 mb-2">Company: {job.company}</p>
          <p className="text-gray-600 mb-4">Location: {job.location}</p>
          <p className="text-gray-700 mb-4">{job.description}</p>
          {applyingJobId === job._id ? (
            <div className="mb-4">
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                placeholder="Your Name"
                className="block w-full border border-gray-300 rounded py-2 px-3 mb-2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="block w-full border border-gray-300 rounded py-2 px-3 mb-2"
              />
              <input
                type="text"
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
                placeholder="Resume URL"
                className="block w-full border border-gray-300 rounded py-2 px-3 mb-4"
              />
              <button
                onClick={handleSubmitApplication}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit Application
              </button>
              {applicationMessage && <p className="text-green-500 mt-2">{applicationMessage}</p>}
            </div>
          ) : (
            <button
              onClick={() => handleApply(job._id)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobListings;
