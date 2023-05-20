import { useState } from "react";
// import About from "./components/About";
// import AdsCard from "./components/AdsCard";
// import CardDetails from "./components/CardDetails";
// import ChoosingUs from "./components/ChoosingUs";
// import Clients from "./components/Clients";
// import Features from "./components/Features";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Services from "./components/Services";
// import WorkSteps from "./components/WorkSteps";
import styles from "./style";
import logo from "./img/mini-01.png";
// import logo_small from "./components/img/h-logo.png";
import { navLinks } from "./constant";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import banner from "./img/banner.png";
import { TypeAnimation } from "react-type-animation";
import { Typewriter } from "react-simple-typewriter";
import { MdVideoSettings } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { FiPenTool } from "react-icons/fi";
import { SiFlutter } from "react-icons/si";
import { MdCampaign } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
import Services from "./components/Services";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="bg-gray-50 w-full"
    >
      {/* <Navbar />
       */}
      <motion.div
        variants={stagger}
        className="bg-gray-50 z-10 sticky top-0 border-b-2"
      >
        <nav className="max-w-[1640px] mx-auto md:px-10 py-5 navbar">
          {/* parent div */}
          <div className="flex justify-between items-center relative">
            {/* logo */}
            <div className="text-3xl font-bold">
              {/* <h1>Logo</h1> */}
              <motion.div
                variants={header}
                className="flex gap-2 justify-center px-3"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 h-14 cursor-pointer"
                />
              </motion.div>
            </div>
            {/* menus */}
            <motion.div
              variants={header}
              className={`hidden md:${styles.menubar}`}
            >
              {navLinks.map((links) => (
                <li className="text-secondary">{links.title}</li>
              ))}
            </motion.div>
            {/* right side button */}
            <motion.div
              variants={header}
              className="hidden md:flex gap-4 items-center justify-between"
            >
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
            </motion.div>
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
      </motion.div>
      {/* end of navbar */}
      {/* start hero */}
      {/* <Hero /> */}
      <motion.div
        className="max-w-[1640px] mx-auto px-10 py-3 md:py-1 mt-2 md:mt-10 hero bg-gradient-to-r from-[#0575e6] to-[#4a00e0] rounded-md text-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: easeing }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          {/* left side */}
          <div className="flex-1 items-start md:space-y-4 font-overpass">
            <h2 className="text-2xl md:text-3xl font-medium">
              Hello, Welcome To
            </h2>
            <p className="text-[40px] md:text-4xl font-bold text-white ">
              Hirsad IT Solutions
            </p>
            <p className="text-2xl md:text-2xl md:font-semibold">
              With Making Your{" "}
              <span className="text-yellow-500">
                <Typewriter
                  words={[
                    "Brand",
                    "Design",
                    "Website",
                    "Web Application",
                    "Mobile Application",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  fontSize={32}
                />
              </span>
            </p>
            <motion.p
              variants={fadeInUp}
              className="md:text-lg font-medium leading-8 mt-5"
            >
              Hirsad solution of your business's needs for Branding, Graphic
              Design, Photo & Video Production, Digital Marketing Strategy, Web
              Design and Development, Our goal is the success of your business
              and the development of technology in the country.
              {/* full text */}
              {/* Whether you need Web Design & Development,Graphic
            Design,Photo & Video Production, Digital Marketing Strategy and
            Branding for your business, Our goal is the success of your business
            and the development of technology in the country */}
            </motion.p>
            <motion.div variants={stagger} className="space-x-7">
              <motion.button
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-36 border-2 border-white py-2 px-4 rounded-md text-white font-medium text-center text-[18px]"
              >
                About Us
              </motion.button>
              <motion.button
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-36 border-2 border-white bg-white py-2 px-4 rounded-md text-primary font-medium text-center text-[18px]"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </div>
          {/* right side */}
          <motion.div className="flex flex-1">
            <motion.img
              src={banner}
              alt=""
              className="md:w-[80%] md:h-[80%] relative z-[5]"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </motion.div>
      {/* end of hero */}
      {/* <AdsCard /> */}
      {/* <About /> */}
      {/* start services */}
      <Services />
      {/* <WorkSteps /> */}
      {/* <Features /> */}
      {/* <CardDetails /> */}
      {/* <ChoosingUs /> */}
      {/* <Clients /> */}
    </motion.div>
  );
}

export default App;
