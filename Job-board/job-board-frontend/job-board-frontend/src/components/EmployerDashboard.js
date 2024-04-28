// components/EmployerDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; // Material-UI button component

const EmployerDashboard = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Employer Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">Welcome, Employer!</p>
        <Button
          component={Link}
          to="/jobs"
          variant="contained"
          color="primary"
          className="mr-4"
        >
          View Job Listings
        </Button>
        <Button
          component={Link}
          to="/job/new"
          variant="outlined"
          color="primary"
        >
          Post a New Job
        </Button>
      </div>
    </div>
  );
};

export default EmployerDashboard;
