import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { VscLayersActive } from "react-icons/vsc";

const CardDetails = () => {
  return (
    <div className="hidden md:block bg-secondary mx-auto px-52 md:px-36 lg:px-44 mt-32">
      {/* parent flex */}
      <div className="flex justify-between">
        {/* division 1 */}
        <div className="flex items gap-5 p-10">
          {/* left section */}
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
            <FaUsers className="w-16 h-16 text-secondary" />
          </div>
          {/* right text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-4xl font-semibold">150</h2>
            <h3 className="text-white text-2xl font-normal">Happy Clients</h3>
          </div>
        </div>
        {/* division 2 */}
        <div className="flex items gap-5 p-10">
          {/* left section */}
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
            <FaProjectDiagram className="w-16 h-16 text-secondary" />
          </div>
          {/* right text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-4xl font-semibold">50</h2>
            <h3 className="text-white text-2xl font-normal">
              Finished Projects
            </h3>
          </div>
        </div>
        {/* division 3 */}
        <div className="flex items gap-5 p-10">
          {/* left section */}
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
            <VscLayersActive className="w-16 h-16 text-secondary" />
          </div>
          {/* right text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-4xl font-semibold">+4</h2>
            <h3 className="text-white text-2xl font-normal">Active Years</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
