import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className=" border-gray-200 text-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  p-4 phone:bg-white mid:bg-white mac:bg-white">
          <Link to="/" className="flex items-center space-x-3  ">
            <span className="self-center text-2xl font-semibold whitespace-nowrap  phone:text-black phone:text-xl mid:text-black mid:text-xl mac:text-black mac:text-xl">
              Rc0ut
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg phone:bg-white phone:text-black      md:bg-white text-white  mid:text-black mac:text-white phone:font-bold phone:text-2xl mid:font-bold mid:text-2xl mac:font-bold  mac:text-2xl mac:bg-white">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-500 md:p-0 phone:text-purple mid:text-purple mac:text-purple"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-500 md:p-0 phone:text-black hover:text-purple mid:text-black mac:text-black"
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-500 md:p-0 phone:text-black hover:text-purple mid:text-black mac:text-black"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-500 md:p-0 phone:text-black hover:text-purple mid:text-black  mac:text-black"
                  aria-current="page"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
