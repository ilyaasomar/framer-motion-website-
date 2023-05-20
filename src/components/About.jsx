import React from "react";
import about from "../img/about5.png";

const About = () => {
  return (
    <div className="max-w-[1640px] mx-auto xl:px-10 md:px-5 mt-28 mb-28">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl md:text-5xl font-overpass text-primary text-center">
          About Hirsad
        </h1>
        {/* flex container */}
        <div className="xl:max-w-[1280px] flex flex-col md:flex-row mt-10 ">
          {/* left side */}
          <div className="md:w-[40%] xl:w-[40%] ">
            <div className="flex items-center justify-center">
              <img className="w-[500px] object-cover " src={about} alt="" />
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col mt-10 md:md:w-[60%] xl:w-[60%]">
            <p className="text-md font-medium leading-7 text-gray-600 xl:text-xl xl:font-normal mt-3 md:ml-5">
              <strong>HIRSAD IT SOLUTIONS</strong> - Was established late 2021,
              the company headquarter is in Mogadishu. The company’s main role
              is to build the technology missing gap in Somalia, after seeing
              how the community needs the technology.
              <br />
              The company has a variety experience in both Technology and ICT
              Solution. It has been a very difficult condition since today to
              generate technology generation in Somalia.
              <br />
              We <strong>HIRSAD IT Solution Co.</strong> willing to offer the
              Somali community and globally at all a very sophisticated
              technology & IT services in a very collaborative manner, standard
              and a functional approach.
              <br />
              We’re Willing to become a smart progressive technology company in
              both Somalia and globally and our main vision is to provide our
              customers a very fast and innovative manner. We will be offering
              you a valuable IT Services with the following methods: Innovation,
              Teamwork, Hard work and best Quality.
            </p>
            {/* <div className='flex gap-10 mt-10'>
              <div className='flex flex-col items-center'>
                <h2 className='font-bold font-overpass text-2xl text-primary'>150</h2>
              <h3 className='font-overpass font-normal text-xl'>Happy Clients</h3>
              </div>
              <div className='flex flex-col items-center'>
                <h2 className='font-bold font-overpass text-2xl text-primary'>50</h2>
              <h3 className='font-overpass font-normal text-xl'>Completed Projects</h3>
              </div>
              <div className='flex flex-col items-center'>
                <h2 className='font-bold font-overpass text-2xl text-primary'>4+</h2>
              <h3 className='font-overpass font-normal text-xl'>Active Years</h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
