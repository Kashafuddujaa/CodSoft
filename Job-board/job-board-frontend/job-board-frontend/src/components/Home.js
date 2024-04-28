import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg px-6 py-12 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Job</h1>
        <p className="text-lg text-gray-600 mb-8">Explore exciting opportunities and kick-start your career!</p>
        <Link to="/jobs" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          View Jobs
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          Not sure where to start? <Link to="/jobs" className="underline">Browse all jobs</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
