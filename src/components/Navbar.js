import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-dark.png";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4d4861] text-gray-300 font-light">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "70px" }} />
      </div>
      {/*menu*/}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skils</li>
        <li>Contact</li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#4d4861] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Skils</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*social*/}
      <div className="flex fixed flex-column top-[35%] left-0">
        <ul>
          <a href="/">
            LinkedIn <FaFacebook />
          </a>
          <a href="/">Github</a>
          <a href="/"></a>
        </ul>
      </div>
    </div>
  );
}
