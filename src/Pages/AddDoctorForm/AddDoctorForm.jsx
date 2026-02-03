import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDoctorForm = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      const res = await fetch("http://localhost:5000/api/doctors", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      console.log(result);
      alert("Doctor added successfully!");
      navigate("/AdminDeshBord");
    } catch (err) {
      console.error(err);
      alert("Failed to add doctor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10" style={{ backgroundColor: "#F4F4F7" }}>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">➕ Add Doctor</h2>

        <input type="file" name="image" onChange={handleChange} className="mb-4 w-full" />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="mb-4 w-full" />
        <input type="text" name="education" placeholder="Education" onChange={handleChange} className="mb-4 w-full" />
        <input type="text" name="registerNumber" placeholder="Register Number" onChange={handleChange} className="mb-4 w-full" />
        <input type="text" name="speciality" placeholder="Speciality" onChange={handleChange} className="mb-4 w-full" />
        <input type="number" name="experience" placeholder="Experience" onChange={handleChange} className="mb-4 w-full" />
        <select name="availability" onChange={handleChange} className="mb-4 w-full">
          <option value="">--Select Day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <input type="number" name="fee" placeholder="Fee" onChange={handleChange} className="mb-4 w-full" />
        <input type="text" name="hospital" placeholder="Hospital" onChange={handleChange} className="mb-4 w-full" />
        <textarea name="educationDetails" placeholder="Education Details" onChange={handleChange} className="mb-4 w-full" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="mb-4 w-full" />

        <button type="submit" className="w-full py-3 mb-4 text-white bg-blue-600 rounded">✅ Add Doctor</button>

        <button type="button" onClick={() => navigate("/AdminDeshBord")} className="w-full py-3 text-white bg-gray-600 rounded">
          ⬅️ Back to Admin Panel
        </button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
