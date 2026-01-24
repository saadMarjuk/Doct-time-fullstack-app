import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import "../App.css";

const DoctorContainer = ({ data }) => {
  const [doctorsList, setDoctorsList] = useState(data);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDoctorsList(data);
    } else {
      setDoctorsList(data.slice(0, 6));
      setTimeout(() => {
        window.scrollTo({ top: 900, left: 0, behavior: "smooth" });
      }, 1);
    }
  }, [data, showAll]);

  return (
    <div className="font-pj py-20">
      <div className="flex mb-8 justify-center flex-col items-center">
        <h1 className="max-sm:text-2xl font-extrabold text-4xl mb-5">
          Our Best Doctors
        </h1>
        <p className="text-gray-500 max-sm:text-sm text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-8 max-sm:grid max-sm:grid-cols-1">
        {doctorsList.map((doctor) => (
          <DoctorCard
            doctor={doctor}
            key={doctor.registrationNumber}
          ></DoctorCard>
        ))}
      </div>
      <div className="flex mt-10 items-center justify-center">
        <button
          onClick={() => {
            setShowAll(!showAll);
          }}
          className=" btn rounded-full outline-0 border-0 btn-primary bg-[#176AE5] "
        >
          {showAll ? "View Less Doctors" : "View More Doctors"}
        </button>
      </div>
    </div>
  );
};

export default DoctorContainer;
