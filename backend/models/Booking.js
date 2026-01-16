const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  doctorRegisterNumber: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  mobile: {
    type: String,
    required: true,
    match: /^01[3-9]\d{8}$/, // ✅ BD mobile number format check (starts with 01)
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // ✅ basic email format validation
  },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
