import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      </Routes>
    </Router>








  );
};









export default App;
