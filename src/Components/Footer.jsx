import React from "react";
import { NavLink } from "react-router";
import "../App.css";
import logoImage from "../assets/logo.png";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-bold underline underline-offset-10 text-[#176AE5] decoration-3 decoration-[#176AE5]"
      : "";
  return (
    <footer className="footer bg-white  text-[#0F0F0F] font-pj footer-horizontal footer-center  rounded p-12">
      {/* Footer Logo */}
      <div>
        <div className=" flex gap-2 justify-center items-center">
          <NavLink to="/">
            <img src={logoImage} className="w-8" alt="" />
          </NavLink>
          <NavLink to="/" className="font-pj font-extrabold  text-xl">
            <span className="hover:text-blue-500">DocTalk</span>
          </NavLink>
        </div>
      </div>

      {/* Footer NavLinks */}
      <div>
        <ul className="menu gap-10 menu-horizontal px-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/bookings" className={navLinkClass}>
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className={navLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </ul>
      </div>

      <hr className="border w-full rounded-xl border-gray-200" />

      <nav>
        <div className="flex gap-4">
          <Link
            to="https://www.facebook.com/atik.ananto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              className="text-blue-600 hover:scale-110 transition-transform"
              size={22}
            />
          </Link>
          <Link
            to="https://x.com/jhankar_mahbub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className="text-sky-400 hover:scale-110 transition-transform"
              size={24}
            />
          </Link>
          <Link
            to="https://www.instagram.com/darksoulatik12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-pink-500 hover:scale-110 transition-transform"
              size={24}
            />
          </Link>
          {/*notice: আমার কোন লিংকেডইন এবং টুইটার একাউন্ট নাই */}
          <Link
            to="https://www.linkedin.com/in/jhankar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className="text-blue-400 hover:scale-110 transition-transform"
              size={24}
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
