import React, { useState } from "react";
import hero1 from "../assets/banner-img-1.png";
import hero2 from "../assets/banner-2.jpg";

const Banner = ({ handleSearch }) => {
  const [searchedText, setSearchedText] = useState("");

  return (
    <div
      className="hero font-pj border-1 border-white rounded-xl min-h-120 p-10 max-sm:flex max-sm:flex-col
    bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-md  shadow-lg  "
    >
      {/* Hero Container */}
      <div className="lg:flex-col md:flex-col flex-col flex lg:justify-center md:justify-center md:items-center lg:mb-10 lg:items-center">
        {/* Hero Texts */}
        <div className="flex md:flex-col md:items-center md:justify-center md:text-center lg:items-center lg:flex-col  p-10 max-sm:flex max-sm:flex-col">
          <h1 className="text-5xl max-sm:text-lg font-bold">
            Dependable Care, Backed by Trusted Professionals.
          </h1>

          <p className="py-6 max-sm:text-sm">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust..
          </p>
        </div>

        {/* Search Bar */}
        <div className="-mt-5 md:mb-10">
          <form
            onSubmit={(e) => {
              const safeText = searchedText.length === 0 ? " " : searchedText;
              handleSearch(e, safeText);
              setSearchedText("");
            }}
            className="flex max-sm:flex-col p-5 justify-between lg:gap-5 lg:flex-row max-sm:gap-5 md:flex-col md:gap-3 "
          >
            <input
              value={searchedText}
              onChange={(e) => {
                setSearchedText(e.target.value);
              }}
              className="bg-white max-sm:w-72 focus:ring-2 md:w-120  focus:outline-2 focus:outline-blue-500 max-sm:placeholder:text-xs rounded-xl p-2 lg:w-150"
              type="text"
              name=""
              placeholder="Search  any  doctor"
            />
            <button
              type="submit"
              className="max-sm:text-xs max-sm:w-35 max-sm:mx-auto lg:w-30 lg:mx-auto btn rounded-full outline-0 border-0 btn-primary bg-[#176AE5] md:w-30 md:mx-auto "
            >
              Search Now
            </button>
          </form>
        </div>

        <div className="flex gap-10 flex-row justify-between  rounded-lg max-sm:flex max-sm:flex-col md:flex-col lg:flex-row">
          <img
            src={hero1}
            className="max-w-sm max-sm:w-[90%] mx-auto md:w-[90%]  rounded-lg shadow-2xl"
          />
          <img
            src={hero2}
            className="max-w-sm rounded-lg shadow-2xl max-sm:w-[90%] md:w-[90%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
