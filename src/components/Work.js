import React from "react";
import IpTracker from "../assets/IpTracker.png";
import Coffeeroasters from "../assets/Coffeeroasters.png";

export default function Work() {
  return (
    <div name="work" className="w-full h-screen text-white bg-[#474748]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#CA2E55] text-white">
            Work
          </p>
          <p className="py-4 text-white">Here are some of my recent work</p>
        </div>
        {/*Card*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${IpTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ip-Tracker
              </span>
              <div className="pt-8 text-center flex items-center gap-4">
                <a
                  href="https://narosiptracker.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NaroNhem/IP-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Coffeeroasters})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center  duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coffeeroasters
              </span>
              <div className="pt-8 text-center flex items-center gap-4">
                <a
                  href="https://narocoffeeroasters.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NaroNhem/Coffee-subscription"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
