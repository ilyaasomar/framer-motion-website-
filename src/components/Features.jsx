import React from "react";
import { MdHighQuality } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
const Features = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10 mt-32">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl md:text-5xl font-overpass text-secondary text-center">
          With all featured you need
        </h1>
        <p className="font-normal text-md md:text-2xl font-overpass text-gray-600 pt-3 text-center max-w-3xl mx-auto">
          Credibly grow premier ideas rather than bricks and click strategic
          theme areas distributed for stand alone web readiness
        </p>
        {/* cards */}
        <div className="flex flex-wrap justify-center md:justify-between space-y-8 md:space-y-0 my-16">
          {/* card 1 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#E000CA] w-16 h-16 rounded-xl flex justify-center items-center">
              <MdHighQuality className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">Quality First</h3>
            <p className="text-lg font-normal font-overpass max-w-[370px]">
              Approriately grow Comptetive Leadership rather than strategicly
              technically sound Processes without state
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#4A00E0] w-16 h-16 rounded-xl flex justify-center items-center">
              <BsShieldFillCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">Highly Secure</h3>
            <p className="text-lg font-normal font-overpass max-w-[370px]">
              Approriately grow Comptetive Leadership rather than strategicly
              technically sound Processes without state
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#E00051] w-16 h-16 rounded-xl flex justify-center items-center">
              <SlGraph className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">
              Fast Development
            </h3>
            <p className="text-lg font-normal font-overpass max-w-[370px]">
              Approriately grow Comptetive Leadership rather than strategicly
              technically sound Processes without state
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
