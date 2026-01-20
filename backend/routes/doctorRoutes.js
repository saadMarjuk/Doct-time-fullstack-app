const express = require("express");
const router = express.Router();
const multer = require("multer");
const Doctor = require("../models/Doctor");

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ POST - Add a doctor
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const doctorData = {
      name: req.body.name,
      education: req.body.education,
      registerNumber: req.body.registerNumber,
      speciality: req.body.speciality,
      experience: Number(req.body.experience),
      availability: req.body.availability,
      fee: Number(req.body.fee),
      hospital: req.body.hospital,
      educationDetails: req.body.educationDetails,
      description: req.body.description,
      image: req.file ? req.file.filename : null,
    };

    const doctor = await Doctor.create(doctorData);
    res.status(201).json({ message: "Doctor added", doctor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET - List all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// DELETE - Remove a doctor by _id
router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json({ message: "Doctor deleted successfully", doctor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET - Single doctor by register number
// Single doctor by register number
router.get("/:registerNumber", async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      registerNumber: req.params.registerNumber,
    });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
