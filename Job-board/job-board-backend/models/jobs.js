
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number },
  datePosted: { type: Date, default: Date.now },
  deadline: { type: Date }
});

module.exports = mongoose.model('Job', jobSchema);