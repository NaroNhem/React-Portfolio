import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import react from "../assets/react.png";

export default function Skills() {
  return (
    <div name="skills" className="bg-[#605770] w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#F7C4A5] text-gray-300 ">
            Skills
          </p>
          <p className="py-4 text-gray-300">
            These are the technoligies that I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 text-white font-thin">
          <div className="hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-24 mx-auto"></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={CSS} alt="HTML icon" className="w-24 mx-auto"></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              src={Javascript}
              alt="HTML icon"
              className="w-24 mx-auto"
            ></img>
            <p className="my-4">Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Node} alt="HTML icon" className="w-24 mx-auto "></img>
            <p className="my-4">Node</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={Mongo} alt="HTML icon" className="w-24 mx-auto"></img>
            <p className="my-4">Mongo</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img src={react} alt="HTML icon" className="w-24 mx-auto"></img>
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
}
