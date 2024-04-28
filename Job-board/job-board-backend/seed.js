const mongoose = require('mongoose');
const Job = require('./models/jobs'); // Adjust the path based on your project structure

// MongoDB URI (replace with your MongoDB URI)
MONGODB_URI="mongodb+srv://avanger:Mvy1sMQkjuX8eVFi@jobboard.nti4bhr.mongodb.net/"

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  // Remove deprecated options and add serverSelectionTimeoutMS
  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds of trying to connect
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Sample jobs data
    const sampleJobs = [
      {
        id:1,
        title: 'Full Stack Developer',
        company: 'Tech Company Inc.', // Provide the company name
        description: 'Join our team as a full stack developer.',
        location: 'Remote',
        salary: 80000, // Optional field
        deadline: new Date('2024-12-31') // Optional field
      },
      {
        id:2,
        title: 'Product Manager',
        company: 'Startup X', // Provide the company name
        description: 'Exciting opportunity for a product manager.',
        location: 'San Francisco, CA',
        salary: 100000, // Optional field
        deadline: new Date('2024-11-30') // Optional field
      }
    ];

    // Insert sample jobs into MongoDB
    Job.insertMany(sampleJobs)
      .then(() => {
        console.log('Jobs inserted successfully');
        mongoose.disconnect(); // Disconnect from MongoDB after insertion
      })
      .catch((error) => {
        console.error('Error inserting sample jobs:', error);
        mongoose.disconnect(); // Disconnect from MongoDB on error
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the script with a non-zero exit code on connection error
  });
