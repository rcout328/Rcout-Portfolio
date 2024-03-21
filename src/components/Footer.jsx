import { Link } from "react-router-dom";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="mainfooter">
      {/* Footer navigation */}
      <div className="flex flex-col  mac:flex mac:items-center mal:flex mal:item-center">
        <ul className="flex flex-row  text-2xl font-medium gap-5 mb-10 mad:mb-20 mad:mt-5">
          <Link className="hover:text-purple" to="/">
            Home
          </Link>
          <Link className="hover:text-purple" to="/project">
            Projects
          </Link>
          <Link className="hover:text-purple" to="/about">
            About
          </Link>
        </ul>
        <div className="flex flex-row gap-3 phone:flex phone:flex-row phone:justify-center phone:items-center mid:flex mid:flex-row mid:justify-center mid:items-center mac:flex mac:flex-row mac:justify-center mac:items-center  mal:flex mal:flex-row mal:justify-center mal:items-center mad:right-0 mad:mr-10 mad:gap-3">
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
      <div className="flex flex-col s items-center gap-3  phone:mt-10 mid:mt-10 mac:mt-10 mad:mt-5">
        <div className="flex flex-col  items-center text-xl phone:flex phone:flex-row phone:gap-2   mid:flex mid:flex-row mid:gap-2 mac:flex mac:flex-row mac:gap-2 mal:flex mal:flex-row mal:gap-2 mal:mt-5 mad:flex mad:flex-col mad:font-medium mad:text-3xl mad:gap-3">
          <h1 className="md:text-2xl">Interested in working together </h1>
          <h1 className="md:text-3xl text-purple mad:hidden">?</h1>
        </div>
        <div className="flex mad:mt-10">
          <button className="btn1">
            <a href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in">
              Get In Touch
            </a>
          </button>
          <button className="btn2">
            <Link to="/project">Browse Projects</Link>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xl text-center mt-10 ">
        <h1>©2023 All Rights Reserved.</h1>
        <h1>Made with 💜 by Rc0ut</h1>
      </div>
    </div>
  );
};

export default Footer;
