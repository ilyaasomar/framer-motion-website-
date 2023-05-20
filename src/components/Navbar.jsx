import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styles from "../style";
import logo from "../img/mini-01.png";
import logo_small from "../img/h-logo.png";
import { navLinks } from "../constant";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="bg-gray-50 z-10 sticky top-0 border-b-2">
        <nav className="max-w-[1640px] mx-auto md:px-10 py-5 navbar">
          {/* parent div */}
          <div className="flex justify-between items-center relative">
            {/* logo */}
            <div className="text-3xl font-bold">
              {/* <h1>Logo</h1> */}
              <div className="flex gap-2 justify-center px-3">
                {/* <img
                  src={logo_small}
                  alt="Logo"
                  className="sm:w-24 h-10 text-white cursor-pointer"
                /> */}
                {/* <div className="flex flex-col justify-center leading-5 items-start">
                  <h3 className="text-[20px] font-semibold">Hirsad</h3>
                  <h4 className="text-sm font-normal">iT Solutins</h4>
                </div> */}
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 h-14 cursor-pointer"
                />
              </div>
            </div>
            {/* menus */}
            <div className={`hidden md:${styles.menubar}`}>
              {navLinks.map((links) => (
                <li className="text-secondary">{links.title}</li>
              ))}
            </div>
            {/* right side button */}
            <div className="hidden md:flex gap-4 items-center justify-between">
              <div className="flex space-x-3">
                <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                  <FaFacebookF className="md:w-5 md:h-5 text-white cursor-pointer" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                  <FaInstagram className="md:w-5 md:h-5 text-white cursor-pointer" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                  <FaLinkedinIn className="md:w-5 md:h-5 text-white cursor-pointer" />
                </div>
                <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                  <FaTwitter className="md:w-5 md:h-5 text-white cursor-pointer" />
                </div>
                {/* <button className='font-semibold text-md bg-secondary px-3 py-1 rounded-sm text-white'>Let's Talk</button> */}
              </div>
              <div className="">
                {/* <button className='px-3 py-1 border-2 border-red-600'>Dark Mode</button> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg> */}
              </div>
            </div>
            <div className="md:hidden px-3">
              {openMenu ? (
                <AiOutlineClose
                  className="w-8 h-8 text-secondary cursor-pointer"
                  onClick={() => setOpenMenu((prev) => !prev)}
                />
              ) : (
                <GiHamburgerMenu
                  className="w-8 h-8 text-secondary cursor-pointer"
                  onClick={() => setOpenMenu((prev) => !prev)}
                />
              )}
            </div>
            {/* mobile menu division */}
            <div
              className={`md:hidden absolute top-[65px] items-center duration-300 z-10
                ${openMenu ? "right-0" : "hidden"}`}
            >
              <div className="bg-gray-500 w-36 rounded-xl flex flex-col items-center list-none space-y-3 py-2 text-white font-semibold">
                <li>
                  <a href="#" className="hover:text-[#05156D]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#05156D]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#05156D]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#05156D]">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#05156D]">
                    Contact Us
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
