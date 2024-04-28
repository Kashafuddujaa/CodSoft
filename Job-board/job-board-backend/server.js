const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/job');
const candidateProfileRoutes = require('./routes/candidateProfileRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json()); // Use built-in JSON body parser
app.use(cors());
app.use('/api/job', jobRoutes);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Express session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport and restore authentication state from session
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
require('./passport-config'); // Assuming passport-config.js sets up Passport strategies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Error handling middleware (must be defined after routes)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
