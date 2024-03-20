import { Link } from "react-router-dom";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start phone:flex phone:flex-col phone:items-center phone:justify-center md:items-center mx-5 md:mx-10 my-10 md:my-20 phone:mt-20 ">
      {/* Footer navigation */}
      <div className="flex flex-col md:flex-row md:items-center">
        <ul className="flex flex-row md:flex-row text-2xl font-medium gap-5 mb-10 md:mb-0">
          <Link className="hover:text-[#6E00F2]" to="/">
            Home
          </Link>
          <Link className="hover:text-[#6E00F2]" to="/project">
            Projects
          </Link>
          <Link className="hover:text-[#6E00F2]" to="/about">
            About
          </Link>
        </ul>
        <div className="flex flex-row gap-3 phone:flex phone:flex-row phone:justify-center phone:items-center">
          <a href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in">
            <CiLinkedin size={40} />
          </a>
          <a href="https://www.instagram.com/varun.isranii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <CiInstagram size={40} />
          </a>
          <a href="https://github.com/rcout328">
            <VscGithubAlt size={40} />
          </a>
        </div>
      </div>

      {/* Call to action */}
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 phone:mt-10">
        <div className="flex flex-col md:flex-row items-center text-xl phone:flex phone:flex-row phone:gap-2  ">
          <h1 className="md:text-3xl">Interested in working together </h1>
          <h1 className="md:text-3xl text-[#6E00F2]">?</h1>
        </div>
        <div className="flex">
          <button className="bg-[#6E00F2] text-white p-4 phone:p-3 phone:text-sm font-bold rounded-lg text-xl ">
            Get In Touch
          </button>
          <button className="bg-white text-blacks border border-black ml-5 p-4 phone:p-3 phone:text-sm font-bold rounded-lg text-xl">
            Browse Projects
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xl text-center mt-10 md:mt-0">
        <h1>©2023 All Rights Reserved.</h1>
        <h1>Made with 💜 by Rc0ut</h1>
      </div>
    </div>
  );
};

export default Footer;
