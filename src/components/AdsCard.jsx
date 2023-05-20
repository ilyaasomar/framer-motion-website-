import React from "react";
import adds1 from "../img/adds1.png";
import adds2 from "../img/adds2.png";

const AdsCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10 py-5 mt-10 md:mt-28 mb-28">
      {/* wrapper container */}
      <div className="flex flex-wrap justify-center items-center mx-auto gap-10 max-w-[1200px]">
        {/* card 1 */}
        <div className="bg-[#CE4ABF] p-8 rounded-xl flex flex-col flex-1">
          <h3 className="font-bold text-xl md:text-3xl font-overpass pb-4 md:pb-7">
            Utilize your design idea
          </h3>
          <div className="flex flex-row">
            {/* left */}
            <div className="flex flex-col space-y-5">
              <p className="max-w-sm md:text-lg font-medium text-gray-700">
                Progressively reinvent models and iche revelusinary benefit for
                integrated niches.
              </p>
              <button
                type="button"
                className="w-36 border-2 border-primary py-2 px-4 rounded-md text-white font-medium text-center text-[18px]"
              >
                Start for Free
              </button>
            </div>
            {/* right image */}
            <div>
              <img src={adds1} className="w-52" alt="" />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-[#EB5648] p-8 rounded-xl flex flex-col flex-1">
          <h3 className="font-bold text-xl md:text-3xl font-overpass pb-4 md:pb-7">
            Get real time updated
          </h3>
          <div className="flex flex-row">
            {/* left */}
            <div className="flex flex-col space-y-5">
              <p className="max-w-sm md:text-lg font-medium text-gray-700">
                Progressively reinvent models and iche revelusinary benefit for
                integrated niches.
              </p>
              <button
                type="button"
                className="w-36 border-2 border-primary py-2 px-4 rounded-md text-white font-medium text-center text-[18px]"
              >
                Start for Free
              </button>
            </div>
            {/* right image */}
            <div>
              <img src={adds2} className="w-52" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
