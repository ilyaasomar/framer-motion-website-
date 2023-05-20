import React from "react";
import { FaRunning } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { SiOpenapiinitiative } from "react-icons/si";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
const WorkSteps = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl md:text-5xl font-overpass text-secondary text-center">
          How we works
        </h1>
        <p className="font-normal text-lg md:text-3xl font-overpass text-gray-600 text-center pt-3">
          how it helps your business success
        </p>
        {/* cards */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:justify-between my-16">
          {/* card 1 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#E000CA] w-16 h-16 rounded-xl flex justify-center items-center">
              <GiDiscussion className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">Discussion</h3>
            <p className="text-lg font-normal font-overpass max-w-[270px] text-gray-600">
              We meet customers in set place to discuss the details about needs
              anddemands before proposing a plan.
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#4A00E0] w-16 h-16 rounded-xl flex justify-center items-center">
              <SiOpenapiinitiative className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">
              Concepts & Initatives
            </h3>
            <p className="text-lg font-normal font-overpass max-w-[270px] text-gray-600">
              We meet customers in set place to discuss the details about needs
              anddemands before proposing a plan.
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#E00051] w-16 h-16 rounded-xl flex justify-center items-center">
              <FaRunning className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">
              Trying & Testing
            </h3>
            <p className="text-lg font-normal font-overpass max-w-[270px] text-gray-600">
              We meet customers in set place to discuss the details about needs
              anddemands before proposing a plan.
            </p>
          </div>
          {/* card 1 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#4A00E0] w-16 h-16 rounded-xl flex justify-center items-center">
              <InstallDesktopIcon fontSize="large" className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">
              Execute & install
            </h3>
            <p className="text-lg font-normal font-overpass max-w-[270px] text-gray-600">
              We meet customers in set place to discuss the details about needs
              anddemands before proposing a plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkSteps;
