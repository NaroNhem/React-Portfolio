import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

export default function () {
  return (
    <div
      name="home"
      className="bg-[#474748] w-full h-screen text-white font-light"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p> Hi, my name is </p>
        <h1 className="text-[#68ffd4] text-4xl font-bold sm:text-7xl">
          Justinaro Nhem
        </h1>
        <h2 className="text-[#CA2E55] text-4xl sm:text-7xl pb-4">
          I'm a Full Stack Developer
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFE0B5] hover:text-[#4d4861] hover:border-[#4d4861]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:ml-[15px] duration-300">
              <Link to="work" smooth={true} duration={500}>
                <HiArrowNarrowDown className="ml-3" />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
