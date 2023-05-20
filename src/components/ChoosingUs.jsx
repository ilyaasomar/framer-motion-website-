import { BsCommand } from "react-icons/bs";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { GiChaingun } from "react-icons/gi";

const ChoosingUs = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10 mt-32">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl md:text-5xl font-overpass text-secondary text-center">
          Why Choose Us
        </h1>
        <p className="font-normal text-2xl font-overpass text-gray-600 pt-3 text-center max-w-3xl mx-auto">
          Design the concept of your business idea now
        </p>
        {/* cards */}
        <div className="flex flex-wrap justify-center md:justify-between space-y-8 md:space-y-0 my-16">
          {/* card 1 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#E000CA] w-16 h-16 rounded-xl flex justify-center items-center">
              <BsCommand className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">
              Well Experience
            </h3>
            <p className="text-lg font-normal font-overpass max-w-[370px]">
              Approriately grow Comptetive Leadership rather than strategicly
              technically sound Processes without state
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#4A00E0] w-16 h-16 rounded-xl flex justify-center items-center">
              <GiChaingun className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">Creative Team</h3>
            <p className="text-lg font-normal font-overpass max-w-[370px]">
              Approriately grow Comptetive Leadership rather than strategicly
              technically sound Processes without state
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="bg-[#E00051] w-16 h-16 rounded-xl flex justify-center items-center">
              <MdOutlineIncompleteCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-600">
              Professionalism
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

export default ChoosingUs;
