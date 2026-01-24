import React from "react";
import CountUp from "react-countup";
import s1 from "../assets/success-doctor.png";
import s2 from "../assets/success-patients.png";
import s3 from "../assets/success-review.png";
import s4 from "../assets/success-staffs.png";

const Counter = () => {
  return (
    // Main Container
    <div className="font-pj mb-10 md:py-10 lg:py-10">
      <div className="flex flex-col justify-center items-center gap-8 ">
        <div className="flex justify-center flex-col items-center gap-2">
          <h1 className="font-extrabold lg:text-4xl md:text-2xl max-sm:text-xl max-sm:text-center ">
            We Provide Best Medical Services
          </h1>

          <p className="md:text-sm max-sm:text-sm lg:text-base max-sm:text-center">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.{" "}
          </p>
        </div>
        {/* w-40 h-50 */}

        {/* Countup Container */}
        <div className="lg:w-full">
          <div className=" lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 max-sm:grid max-sm:grid-cols-2 gap-6 max-sm:35 ">
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-sm  max-sm:w-full ">
              <div className="card-body">
                <img className="w-10 mb-3" src={s1} />
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F]">
                  <CountUp end={199} duration={10} />+
                </h1>
                <p>Total Doctors</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 shadow-sm  max-sm:w-full">
              <div className="card-body">
                <img className="w-10 mb-3" src={s3} />
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F]">
                  <CountUp end={467} duration={10} />+
                </h1>
                <p>Total Reviews</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-sm  max-sm:w-full">
              <div className="card-body">
                <img className="w-10 mb-3" src={s2} />
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F] ">
                  <CountUp end={1900} duration={10} />+
                </h1>
                <p>Patients</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 shadow-sm max-sm:w-full">
              <div className="card-body ">
                <img className="w-10 mb-3 " src={s4} />
                <h1 className="lg:text-4xl md:text-2xl max-sm:text-xl  font-bold text-[#0F0F0F]">
                  <CountUp end={300} duration={10} />+
                </h1>
                <p>Total Stuffs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
