import React from "react";
import logo from "../img/mini-01.png";

const Clients = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10 mt-32 py-10">
      {/* parent client */}
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center">
            <div className="w-32 h-1 bg-secondary rounded-lg"></div>
            <h1 className="font-bold text-3xl md:text-5xl font-overpass text-secobg-secondary text-center px-7">
              Clients
            </h1>
            <div className="w-32 h-1 bg-secondary rounded-lg"></div>
          </div>
          <p className="text-center font-semibold text-gray-600">
            <strong>Hirsad</strong> is trusted by several industry leaders
          </p>
        </div>
        {/* body */}
        <div className="flex flex-wrap justify-between gap-16 mt-10 mx-10">
          {/* <div className="w-36 h-36 rounded-full bg-orange-500 flex items-center justify-center p-3">
            <img src={logo} alt="" className="w-full object-cover" />
          </div> */}
          <img src={logo} alt="" className="w-36" />
          <img src={logo} alt="" className="w-36" />
          <img src={logo} alt="" className="w-36" />
          <img src={logo} alt="" className="w-36" />
          <img src={logo} alt="" className="w-36" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
