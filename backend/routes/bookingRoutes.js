const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // your Gmail App Password
  },
});

// -------------------- POST /api/bookings --------------------
router.post("/", async (req, res) => {
  const {
    doctorName,
    doctorRegisterNumber,
    name,
    age,
    gender,
    mobile,
    email,
    address,
  } = req.body;

  // Basic validation before saving
  if (
    !doctorName ||
    !doctorRegisterNumber ||
    !name ||
    !age ||
    !gender ||
    !mobile ||
    !email ||
    !address
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save booking to MongoDB
    const booking = await Booking.create(req.body);

    // Send email notification
    const mailOptions = {
      from: `"Doctor Booking" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: `Your Appointment with Dr. ${booking.doctorName} is Confirmed`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px;">
            <h2 style="color:#176AE5;">Appointment Confirmed!</h2>
            <p>Dear <b>${booking.name}</b>,</p>
            <p>Your appointment with <b>Dr. ${booking.doctorName}</b> (Reg No: ${booking.doctorRegisterNumber}) has been successfully booked.</p>
            <p><b>Age:</b> ${booking.age}<br>
            <b>Gender:</b> ${booking.gender}<br>
            <b>Mobile:</b> ${booking.mobile}<br>
            <b>Address:</b> ${booking.address}</p>
            <p>Thank you for choosing our service.</p>
            <hr>
            <p style="font-size:12px; color:#777;">This is an automated message. Please do not reply.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Booking saved successfully and email sent!",
      booking,
    });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: err.message });
  }
});

// -------------------- GET /api/bookings --------------------
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    console.error("Get bookings error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
