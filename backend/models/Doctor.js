const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  image: String,
  name: String,
  education: String,
  registerNumber: String,
  speciality: String,
  experience: Number,
  availability: String,
  fee: Number,
  hospital: String,
  educationDetails: String,
  description: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);
