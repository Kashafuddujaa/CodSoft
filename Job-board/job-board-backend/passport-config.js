const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust path as needed

// Configure Passport local strategy for username/email and password authentication
passport.use(new LocalStrategy({
  usernameField: 'email', // assuming email is used for login
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    // User authenticated successfully
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Serialize user object to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user object from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
