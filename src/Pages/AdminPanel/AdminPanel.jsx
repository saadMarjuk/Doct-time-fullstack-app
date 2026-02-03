import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const AddDoctorForm = () => {
  const navigate = useNavigate(); // ✅ For navigation

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    education: "",
    registerNumber: "",
    speciality: "",
    experience: "",
    availability: "",
    fee: "",
    hospital: "",
    educationDetails: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data Submitted:", formData);
    alert("Doctor added successfully!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-10"
      style={{ backgroundColor: "#F4F4F7" }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          ➕ Add Doctor
        </h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Doctor Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Education
          </label>
          <input
            type="text"
            name="education"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Register Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Register Number
          </label>
          <input
            type="text"
            name="registerNumber"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Speciality */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Speciality
          </label>
          <input
            type="text"
            name="speciality"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Experience (Years)
          </label>
          <input
            type="number"
            name="experience"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Availability
          </label>
          <select
            name="availability"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="">-- Select Day --</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        {/* Fee */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Fee</label>
          <input
            type="number"
            name="fee"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Hospital */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Hospital
          </label>
          <input
            type="text"
            name="hospital"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Education Details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Education Details
          </label>
          <textarea
            name="educationDetails"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          ></textarea>
        </div>

        

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white font-semibold py-3 px-6 rounded-xl shadow transition mb-4"
          style={{ backgroundColor: "#007AFF" }}
        >
          
          ✅ Add Doctor
        </button>
        

        {/* Back to Admin Panel */}
        <button
          type="button"
          onClick={() => navigate("/AdminPanel")} // ✅ go back to Admin Panel route
          className="w-full text-white font-semibold py-3 px-6 rounded-xl shadow transition"
          style={{ backgroundColor: "#007AFF" }}
        >
          ⬅️ Back to Admin Panel
        </button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
