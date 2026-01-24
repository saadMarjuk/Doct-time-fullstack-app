import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/logo.png";
import "../App.css";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-bold  underline underline-offset-10 text-[#176AE5] decoration-3 decoration-[#176AE5]"
      : "";

  return (
    <div className="font-pj max-w-screen-4xl mx-auto">
      <div className="navbar mx-auto max-w-10xl mb-10 bg-gray-100 px-8 md:px-12 lg:px-16 xl:px-24 p-0  ">
        {/* Small Screen Navbars and Logo */}

        <div className="navbar-start">
          {/* Mobile Navbars */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" cursor-pointer mr-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 space-y-3 rounded-box z-1 mt-3 w-52 p-8 shadow"
            >
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/bookings" className={navLinkClass}>
                My-Bookings
              </NavLink>
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/blogs"
                className={navLinkClass}
              >
                Blogs
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
              <NavLink to="/AdminDeshBord" className={navLinkClass}>Admin Panel</NavLink>

            </ul>
          </div>

          {/* Main Logo */}
          <div className=" ml-2 flex gap-2 justify-center items-center">
            <NavLink to="/">
              <img src={logoImage} className="w-8" alt="" />
            </NavLink>
            <NavLink to="/" className="font-pj font-extrabold  text-xl">
              <span className="hover:text-blue-500">DocTalk</span>
            </NavLink>
          </div>
        </div>

        {/* Big Screen Navbars */}
        <div className="navbar-center font-pj hidden lg:flex">
          <ul className="menu gap-15 menu-horizontal px-1">
            <NavLink to="/" className={navLinkClass}>
              <span className="hover:bg-[#2c2c2c18]  rounded p-2">Home</span>
            </NavLink>
            <NavLink to="/bookings" className={navLinkClass}>
              <span className="hover:bg-[#2c2c2c18]  rounded p-2">
                My-Bookings
              </span>
            </NavLink>
            <NavLink to="/blogs" className={navLinkClass}>
              <span className="hover:bg-[#2c2c2c18]  rounded p-2">Blogs</span>
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              <span className="hover:bg-[#2c2c2c18]  rounded p-2">
                Contact Us
              </span>
            </NavLink>
            <NavLink to="/AdminDeshBord" className={navLinkClass}>
              <span className="hover:bg-[#2c2c2c18] rounded p-2">
                Admin Panel
                  </span>
            </NavLink>

          </ul>
        </div>

        <div className="navbar-end">
          {/* <NavLink className="btn rounded-full outline-0 border-0 btn-primary bg-[#176AE5]">
            Emergency
          </NavLink> */}

          <button
            className="btn rounded-full outline-0 border-0 btn-primary bg-[#176AE5]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Emergency
          </button>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold font-pj text-lg">Emergency Contact</h3>
              <p className="py-4">
                Please call the emergency number{" "}
                <span className="text-red-500">999</span> or visit the nearest
                hospital.
              </p>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
