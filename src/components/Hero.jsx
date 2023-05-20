import React from "react";
import banner from "../img/banner.png";
import { TypeAnimation } from "react-type-animation";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10 py-3 md:py-1 mt-2 md:mt-10 hero bg-gradient-to-r from-[#0575e6] to-[#4a00e0] rounded-md text-white">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        {/* left side */}
        <div className="flex-1 items-start md:space-y-4 font-overpass">
          <h1 className="text-2xl md:text-3xl font-medium">
            Hello, Welcome To
          </h1>
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
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </p>
          <p className="md:text-lg font-medium leading-8 mt-5">
            Hirsad solution of your business's needs for Branding, Graphic
            Design, Photo & Video Production, Digital Marketing Strategy, Web
            Design and Development, Our goal is the success of your business and
            the development of technology in the country.
            {/* full text */}
            {/* Whether you need Web Design & Development,Graphic
            Design,Photo & Video Production, Digital Marketing Strategy and
            Branding for your business, Our goal is the success of your business
            and the development of technology in the country */}
          </p>
          <div className="space-x-7">
            <button
              type="button"
              className="w-36 border-2 border-white py-2 px-4 rounded-md text-white font-medium text-center text-[18px]"
            >
              About Us
            </button>
            <button
              type="button"
              className="w-36 border-2 border-white bg-white py-2 px-4 rounded-md text-primary font-medium text-center text-[18px]"
            >
              Let's Talk
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-1">
          <img
            src={banner}
            alt=""
            className="md:w-[80%] md:h-[80%] relative z-[5]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
