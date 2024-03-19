import { Link } from "react-router-dom";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
const Footer = () => {
  return (
    <div className="flex flex-row ml-80 mt-20 mb-20">
      <div className="flex flex-col">
        <div className="flex flex-row mb-20 mt-5">
          <ul className="text-2xl flex flex-row font-medium gap-5 ">
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
          <div className="flex flex-row absolute right-0 mr-80 gap-3">
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
        <div className="flex flex-row font-medium text-3xl gap-3">
          <h1>Interested in working together</h1>
          <h1 className="text-[#6E00F2]">?</h1>
        </div>
        <div className="mt-5">
          <a href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in">
            <button className="bg-[#6E00F2] text-white p-4 font-bold rounded-lg text-xl">
              Get In Touch
            </button>
          </a>
          <Link to="/project">
            <button className="bg-white text-blacks border border-black ml-5 p-4 font-bold rounded-lg text-xl">
              Browse Projects
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-xl absolute right-0 mr-80 mt-40">
        <h1>©2023 All Rights Reserved.</h1>
        <h1>Made with 💜 by Rc0ut</h1>
      </div>
    </div>
  );
};

export default Footer;
