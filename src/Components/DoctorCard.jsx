import React from "react";
import "../App.css";
import { PiTrademarkRegisteredThin } from "react-icons/pi";
import { Link } from "react-router";

const DoctorCard = ({ doctor }) => {
  const {
    image,
    name,
    education,
    speciality,
    experience,
    registrationNumber,
    availableDays,
  } = doctor;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const dayName = days[today.getDay()];

  const isAvailableToday = availableDays.includes(dayName);

  return (
    <div>
      {/* Doctor Card Container */}
      <div className="card font-pj bg-base-100 w-auto lg:w-auto h-auto shadow-sm max-sm:scale-95 lg:scale-95 md:scale-95 md:h-full">
        <figure className="px-5 py-5 ">
          <img
            className="w-full rounded-4xl h-80 object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>

        <div className="flex mx-auto w-[88%] justify-start gap-2">
          <button
            className={
              isAvailableToday
                ? "text-[#09982F] px-3 py-1 font-semibold rounded-full border-[#09982f2a]  border-1 bg-[rgba(9,152,47,0.20)] text-xs shadow-lg"
                : "text-red-700 py-1 px-3 font-semibold rounded-full border-[#e51732b6]  border-1 bg-[rgba(229,23,23,0.24)] text-xs shadow-lg"
            }
          >
            {isAvailableToday ? "Available" : "Not Available Today"}
          </button>

          <button className="px-3 font-semibold rounded-full border-[#1769e52a] text-[#176AE5] border-1 bg-[rgba(23,105,229,0.2)] text-xs shadow-lg">
            {experience} Experiences
          </button>
        </div>
        <div className="card-body">
          <h2 className="card-title font-extrabold lg:text-xl max-sm:text-lg">
            {name}
          </h2>
          <p className="text-gray-700 font-medium text-xs">
            {education} - {speciality}
          </p>
          <hr className=" border-dashed border-gray-300" />
          <div className="flex gap-2 justify-start items-center">
            <PiTrademarkRegisteredThin />
            <p className="text-[12px]">Reg No: BD{registrationNumber}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/doctor/${registrationNumber}`}>
              <button className="btn w-full rounded-full  bg-white hover:border-2 text-[#176AE5] border-[#176AE5]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
