import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-dark.png";
import { Link } from "react-scroll";
import Resume from "../Documemts/Justinaro_resume.pdf";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#09090B] text-gray-300 font-light">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "70px" }} />
      </div>
      {/*menu*/}
      <ul className="hidden md:flex">
        <li className="group relative inline-block overflow-hidden focus:ring">
          <Link to="home" smooth={true} duration={500}>
            <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-[#CA2E55] transition-all duration-200 group-hover:w-full"></span>
            Home
          </Link>
        </li>
        <li className="group relative inline-block overflow-hidden focus:ring">
          <Link to="about" smooth={true} duration={500}>
            <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-[#CA2E55] transition-all duration-200 group-hover:w-full"></span>
            About
          </Link>
        </li>
        <li className="group relative inline-block overflow-hidden focus:ring">
          <Link to="skills" smooth={true} duration={500}>
            <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-[#CA2E55] transition-all duration-200 group-hover:w-full"></span>
            Skills
          </Link>
        </li>
        <li className="group relative inline-block overflow-hidden focus:ring">
          <Link to="work" smooth={true} duration={500}>
            <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-[#CA2E55] transition-all duration-200 group-hover:w-full"></span>
            Work
          </Link>
        </li>
        <li className="group relative inline-block overflow-hidden focus:ring">
          <Link to="contact" smooth={true} duration={500}>
            <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-[#CA2E55] transition-all duration-200 group-hover:w-full"></span>
            Contact
          </Link>
        </li>
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
            : "absolute top-0 left-0 w-full h-screen bg-[#09090B] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*social*/}
      <div className="hidden lg:flex fixed flex-column top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/justinaro-nhem/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/NaroNhem"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#9E7682]">
            <a
              href="mailto: n.justinaro@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href={Resume}
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
