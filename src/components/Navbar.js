import React from "react";
import logo from "../Images/pngwing.com.png";
import "../App.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} className="w-20 mr-2" alt="Flowbite Logo" />
          <span className="self-center text-2xl col-p md:text-3xl font-extralight whitespace-nowrap dark:text-[#cb8161]">
            London Mall
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black app-btn hover:bg-[#9b6047] focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#cb8161] dark:hover:bg-[#af7054] transition-colors duration-200 ease-in-out"
            onClick={toggleMenu}
          >
            Get App
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-[#cb8161] dark:focus:ring-gray-100"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "transform rotate-90" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
            <li>
              <a
                href="/"
                className={` block py-2 pl-3 pr-4 text-black col-p text-xl rounded md:bg-transparent  md:p-0 ${
                  location.pathname === "/" ? "md:dark:text-[#cb8161]" : ""
                } `}
                aria-current="page"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <Link to="/About">
              <li
                onClick={closeMenu}
                className={`block py-2 pl-3 pr-4 text-black rounded col-p text-xl hover:bg-[#cb8161] md:hover:bg-transparent  md:p-0 md:dark:hover:text-[#cb8161] dark:text-black dark:hover:bg-[#cb8161] dark:hover:text-white md:dark:hover:bg-transparent ${
                  location.pathname === "/About" ? "md:dark:text-[#cb8161]" : ""
                } dark:border-gray-700 transition-colors duration-200 ease-in-out `}
              >
                About
              </li>
            </Link>
            <Link to="/Shop">
              <li
                onClick={closeMenu}
                className={`block py-2 pl-3 pr-4 text-black rounded col-p text-xl ${
                  location.pathname === "/Shop" ? "md:dark:text-[#cb8161]" : ""
                } hover:bg-[#cb8161] md:hover:bg-transparent md:p-0 md:dark:hover:text-[#cb8161] dark:text-black dark:hover:bg-[#cb8161] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-200 ease-in-out `}
              >
                Shop
              </li>
            </Link>
            <Link to="/Contact">
              <li
                onClick={closeMenu}
                className={`block py-2 pl-3 pr-4 text-black rounded col-p text-xl hover:bg-[#cb8161] md:hover:bg-transparent md:p-0 md:dark:hover:text-[#cb8161] dark:text-black dark:hover:bg-[#cb8161] dark:hover:text-white md:dark:hover:bg-transparent ${
                  location.pathname === "/Contact"
                    ? "md:dark:text-[#cb8161]"
                    : ""
                } dark:border-gray-700 transition-colors duration-200 ease-in-out `}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
