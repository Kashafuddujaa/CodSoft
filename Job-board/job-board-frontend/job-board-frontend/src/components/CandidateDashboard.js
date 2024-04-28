// components/CandidateDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; // Material-UI button component

const CandidateDashboard = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Candidate Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">Welcome, Candidate!</p>
        <Button
          component={Link}
          to="/jobs"
          variant="contained"
          color="primary"
          className="mr-4"
        >
          Browse Jobs
        </Button>
        <Button
          component={Link}
          to="/profile"
          variant="outlined"
          color="primary"
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default CandidateDashboard;
